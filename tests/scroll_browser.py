"""Production browser acceptance. Run using workstation .venv Python; no forms submitted."""
import json, os
from pathlib import Path
from playwright.sync_api import sync_playwright
ROOT=Path(__file__).resolve().parents[1]
OUT=ROOT/'evidence/scroll-upgrade'; OUT.mkdir(parents=True,exist_ok=True)
URL=os.environ.get('PREVIEW_URL','http://127.0.0.1:3187')
results=[]
with sync_playwright() as p:
 browser=p.chromium.launch(headless=True,args=['--enable-webgl','--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader'])
 for label,size,reduced in [('desktop',{'width':1440,'height':1000},False),('mobile',{'width':390,'height':844},False),('reduced',{'width':1440,'height':1000},True)]:
  page=browser.new_page(viewport=size,reduced_motion='reduce' if reduced else 'no-preference')
  errors=[];page.on('pageerror',lambda e:errors.append(str(e)))
  page.goto(URL,wait_until='networkidle');page.screenshot(path=str(OUT/f'{label}-hero.png'))
  assert page.locator('main > section').evaluate_all('(els)=>els.map(e=>e.id)').__eq__(['','story','services','approach','contact','newsletter'])
  page.locator('.ce-experience').scroll_into_view_if_needed();page.wait_for_timeout(1500)
  if not reduced:
   page.wait_for_selector('.ce-experience[data-mode="motion"]')
   bounds=page.locator('.pin-spacer').evaluate('(e)=>({y:e.getBoundingClientRect().top+scrollY,h:e.offsetHeight,inner:e.firstElementChild.offsetHeight})')
   states=[]
   for i,t in enumerate([.02,.25,.55,.99]):
    y=bounds['y']-76+size['height']*3.2*t
    page.evaluate('(y)=>window.scrollTo(0,y)',y);page.wait_for_timeout(600)
    states.append(page.locator('.ce-experience').get_attribute('data-progress'))
    page.screenshot(path=str(OUT/f'{label}-beat-{i}.png'))
   assert float(states[-1])>.95, states
   assert float(states[0])<.1,states
   # Reverse scrub must return to initial exposure, not remain sealed.
   page.evaluate('(y)=>window.scrollTo(0,y)',bounds['y']-76+size['height']*.064);page.wait_for_timeout(500)
   assert float(page.locator('.ce-experience').get_attribute('data-progress'))<.1
   page.get_by_role('button',name='Use still view').click();page.wait_for_timeout(200)
   assert page.locator('.ce-canvas canvas').count()==0
   page.get_by_role('button',name='Enable scroll scene').click();page.wait_for_timeout(600)
   assert page.locator('.ce-canvas canvas').count()==1
  else:
   assert page.locator('.ce-canvas canvas').count()==0
   assert page.locator('.pin-spacer').count()==0
   page.screenshot(path=str(OUT/f'{label}-services.png'))
  assert page.evaluate('document.documentElement.scrollWidth <= innerWidth+1')
  links=page.locator('.ce-beat h3 a').evaluate_all('(es)=>es.map(e=>e.getAttribute("href"))')
  assert links==['/review?service=cybersecurity-audit','/review?service=penetration-testing','/review?service=website-vulnerability-detection']
  page.locator('#newsletter').scroll_into_view_if_needed();page.wait_for_timeout(500)
  assert page.get_by_role('link',name='Open the signup form in a new tab').count()==1
  page.screenshot(path=str(OUT/f'{label}-newsletter.png'))
  assert not errors,errors
  results.append({'mode':label,'errors':errors,'checks':'order, service links, overflow, newsletter, fallback'+(', scrub forward/backward, toggle' if not reduced else ', no canvas/pin')})
  page.close()
 browser.close()
(OUT/'results.json').write_text(json.dumps(results,indent=2))
print(json.dumps(results,indent=2))
