"""Production-only Chromium acceptance. No form submissions or remote mutations."""
import json, os
from pathlib import Path
from playwright.sync_api import sync_playwright
ROOT=Path(__file__).resolve().parents[1]
OUT=Path(os.environ.get('CE_EVIDENCE', '/Users/agent47/AI-Agent-Workstation/projects/cyberethos-scroll/evidence'))
OUT.mkdir(parents=True,exist_ok=True)
URL=os.environ.get('CE_URL','http://127.0.0.1:3187')
results={}
with sync_playwright() as p:
    browser=p.chromium.launch()
    for name,size in [('desktop',{'width':1440,'height':1000}),('mobile',{'width':390,'height':844})]:
        page=browser.new_page(viewport=size,device_scale_factor=1)
        errors=[];page.on('pageerror',lambda err:errors.append(str(err)))
        page.goto(URL,wait_until='networkidle')
        page.screenshot(path=str(OUT/f'{name}-hero.png'))
        page.locator('#services').scroll_into_view_if_needed()
        page.wait_for_selector('.ce-experience[data-mode="motion"]')
        bounds=page.locator('.pin-spacer').evaluate('(e)=>({top:e.getBoundingClientRect().top+scrollY,height:e.offsetHeight})')
        start=bounds['top']-76
        for phase,progress in [('enter',.02),('audit',.25),('probe',.55),('seal',.98)]:
            page.evaluate('(y)=>scrollTo(0,y)',start+size['height']*3.2*progress)
            page.wait_for_timeout(350)
            actual=float(page.locator('.ce-experience').get_attribute('data-progress'))
            assert abs(actual-progress)<.02,(phase,actual,progress)
            page.screenshot(path=str(OUT/f'{name}-{phase}.png'))
            page.locator('.ce-canvas').screenshot(path=str(OUT/f'{name}-{phase}-canvas.png'))
        page.evaluate('(y)=>scrollTo(0,y)',start+size['height']*3.2*.25)
        page.wait_for_timeout(250)
        assert page.locator('.ce-experience').get_attribute('data-beat')=='0','reverse scrub'
        assert page.evaluate('document.documentElement.scrollWidth<=innerWidth'),'overflow'
        for link in page.locator('.ce-beat h3 a').all():
            href=link.get_attribute('href')
            tab=browser.new_page();tab.goto(URL+href)
            assert tab.locator('select[name="service"]').input_value()==link.inner_text().strip()
            tab.close()
        page.locator('#approach').scroll_into_view_if_needed();page.screenshot(path=str(OUT/f'{name}-approach.png'))
        page.locator('#newsletter').scroll_into_view_if_needed();page.wait_for_timeout(1200)
        assert page.locator('.newsletter-frame').get_attribute('src')==page.locator('.newsletter-fallback a').get_attribute('href')
        page.screenshot(path=str(OUT/f'{name}-newsletter.png'))
        results[name]={'errors':errors,'reverse':True,'links':3,'overflow':False}
        assert not errors,errors
        page.close()
    for name,options in [('reduced',{'reduced_motion':'reduce'}),('nojs',{'java_script_enabled':False}),('no-webgl',{}),('short',{'viewport':{'width':844,'height':390}})]:
        options.setdefault('viewport',{'width':390,'height':844})
        context=browser.new_context(**options)
        if name=='no-webgl':context.add_init_script("HTMLCanvasElement.prototype.getContext = function(){return null}")
        page=context.new_page();page.goto(URL,wait_until='networkidle');page.locator('.ce-experience').scroll_into_view_if_needed();page.wait_for_timeout(800)
        assert page.locator('.ce-still').is_visible()
        assert page.locator('.pin-spacer').count()==0
        assert page.locator('.ce-beat-copy:visible').count()==3
        page.screenshot(path=str(OUT/f'{name}.png'))
        results[name]={'still':True,'copy':3,'pinned':False};context.close()
    page=browser.new_page(viewport={'width':1440,'height':1000});page.goto(URL);page.locator('#services').scroll_into_view_if_needed();page.wait_for_selector('.ce-experience[data-mode="motion"]')
    page.locator('.ce-canvas canvas').evaluate("c=>c.getContext('webgl2').getExtension('WEBGL_lose_context').loseContext()")
    page.wait_for_timeout(300);assert page.locator('.ce-still').is_visible();assert page.locator('.pin-spacer').count()==0
    results['context-loss']='graceful still';browser.close()
# Inspect rendered image pixels, not merely canvas presence.
import subprocess
pixel_code = '''
import json,sys
from pathlib import Path
from PIL import Image, ImageChops, ImageStat
out=Path(sys.argv[1]); result={}
for name in ['desktop','mobile']:
    a=Image.open(out/f'{name}-enter-canvas.png').convert('RGB');b=Image.open(out/f'{name}-seal-canvas.png').convert('RGB')
    variance=sum(ImageStat.Stat(a).stddev);change=sum(ImageStat.Stat(ImageChops.difference(a,b)).mean)
    assert variance>20,(name,variance)
    assert change>2,(name,change)
    result[name]=dict(pixel_variance=variance,scroll_pixel_change=change)
print(json.dumps(result))
'''
# Workstation Playwright venv and host Pillow are intentionally separate.
pixels=json.loads(subprocess.check_output([os.environ.get('CE_PIXEL_PYTHON','python3'),'-c',pixel_code,str(OUT)],text=True))
for name,data in pixels.items():results[name].update(data)
(OUT/'results.json').write_text(json.dumps(results,indent=2))
print(json.dumps(results,indent=2))
