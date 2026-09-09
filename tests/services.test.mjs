import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { execFileSync } from 'node:child_process';
const root = new URL('../', import.meta.url);
const file = 'src/app/(admin)/FounderLinkHubClient.tsx';
const current = fs.readFileSync(new URL(file, root), 'utf8');
const original = execFileSync('git', ['show', 'main:' + file], { cwd: root, encoding: 'utf8' });
test('hero, foundation, approach, contact and newsletter remain byte-for-byte', () => {
  for (const [start,end] of [['<section className="portfolio-hero"','<section id="services"'],['<section id="approach"','</main>']]) {
    const slice = text => text.slice(text.indexOf(start), text.indexOf(end));
    assert.equal(slice(current), slice(original));
  }
  assert.equal(current.match(/const services = \[[\s\S]*?\];/)[0], original.match(/const services = \[[\s\S]*?\];/)[0]);
  assert.equal(current.match(/const newsletterUrl =[\s\S]*?;/)[0], original.match(/const newsletterUrl =[\s\S]*?;/)[0]);
});
test('services upgraded with progressive enhancement component', () => assert.match(current, /<ServicesExperience services=\{services\}/));
test('normalized phases are bounded, continuous and reversible', async () => {
  const path = new URL('src/components/portfolio/services/progress.ts', root);
  assert.ok(fs.existsSync(path), 'separate progress bus exists');
  const { mapProgress, createProgressBus } = await import(path.href);
  assert.deepEqual(mapProgress(0), { master:0, enter:0, audit:0, probe:0, seal:0, beat:0 });
  assert.deepEqual(mapProgress(1), { master:1, enter:1, audit:1, probe:1, seal:1, beat:2 });
  assert.deepEqual(mapProgress(-2), mapProgress(0));
  assert.deepEqual(mapProgress(NaN), mapProgress(0));
  assert.deepEqual(mapProgress(8), mapProgress(1));
  for(let i=0;i<=1000;i++) for(const key of ['enter','audit','probe','seal']) {
    const a=mapProgress(i/1000)[key], b=mapProgress((i+1)/1000)[key];
    assert.ok(a>=0 && a<=1 && b>=a && b-a<0.010001);
  }
  const bus=createProgressBus(); let received;
  const off=bus.subscribe(p => received=p); bus.set(.7); assert.equal(received.master,.7);
  bus.set(.2); assert.equal(received.master,.2); off(); bus.set(1); assert.equal(received.master,.2);
});
