"""No-JS, context-loss and runtime-reduced-motion checks. No form sends."""
from pathlib import Path
from playwright.sync_api import sync_playwright
URL='http://127.0.0.1:3189'
OUT=Path(__file__).resolve().parents[1]/'evidence/scroll-upgrade'
with sync_playwright() as p:
 b=p.chromium.launch(args=['--enable-webgl','--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader'])
 page=b.new_page(java_script_enabled=False)
 page.goto(URL);page.locator('.ce-experience').scroll_into_view_if_needed()
 assert page.locator('.ce-still').is_visible()
 assert page.locator('.ce-beat-copy').count()==3
 assert page.locator('.pin-spacer').count()==0
 page.close()
 for mode in ['context-loss','preference-change']:
  page=b.new_page(viewport={'width':1440,'height':1000})
  page.goto(URL);page.locator('.ce-experience').scroll_into_view_if_needed()
  page.wait_for_selector('.ce-experience[data-mode="motion"]')
  if mode=='context-loss':
   page.locator('.ce-canvas canvas').evaluate('(c)=>c.getContext("webgl2").getExtension("WEBGL_lose_context").loseContext()')
  else: page.emulate_media(reduced_motion='reduce')
  page.wait_for_timeout(500)
  assert page.locator('.ce-canvas canvas').count()==0
  assert page.locator('.pin-spacer').count()==0
  assert page.locator('.ce-still').is_visible()
  page.close()
 # Silent nine-second service walkthrough for Telegram; real native scroll input drives timeline.
 ctx=b.new_context(viewport={'width':1440,'height':1000},record_video_dir=str(OUT/'video'),record_video_size={'width':1440,'height':1000})
 page=ctx.new_page();page.goto(URL);page.locator('.ce-experience').scroll_into_view_if_needed();page.wait_for_selector('.ce-experience[data-mode="motion"]')
 bounds=page.locator('.pin-spacer').evaluate('(e)=>e.getBoundingClientRect().top+scrollY')
 page.evaluate('(y)=>window.scrollTo(0,y)',bounds-76)
 page.wait_for_timeout(700)
 for i in range(91):
  page.evaluate('(y)=>window.scrollTo(0,y)',bounds-76+3200*i/90)
  page.wait_for_timeout(80)
 page.wait_for_timeout(900)
 video=page.video;ctx.close();video.save_as(str(OUT/'services-scroll.webm'))
 b.close()
print('PASS: no-JS, WebGL context loss, runtime reduced-motion, video captured')
