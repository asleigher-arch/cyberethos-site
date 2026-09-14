import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";

const root = new URL("../", import.meta.url);
const page = fs.readFileSync(
  new URL("src/app/(admin)/review/page.tsx", root),
  "utf8",
);
const form = fs.readFileSync(
  new URL("src/components/review/ReviewRequestForm.tsx", root),
  "utf8",
);
const services = fs.readFileSync(
  new URL("src/components/review/services.ts", root),
  "utf8",
);
const frame = fs.readFileSync(
  new URL("src/components/portfolio/PublicFrame.tsx", root),
  "utf8",
);
const homepage = fs.readFileSync(
  new URL("src/app/(admin)/FounderLinkHubClient.tsx", root),
  "utf8",
);
const css = fs.readFileSync(new URL("src/app/portfolio.css", root), "utf8");
const nextSteps = fs.readFileSync(
  new URL("src/components/review/ReviewNextSteps.tsx", root),
  "utf8",
);

test("review H1 matches the primary CTA", () => {
  assert.match(page, /<h1>Request a security review<\/h1>/);
  assert.match(form, /Request a security review/);
  assert.doesNotMatch(page, /Let’s take/);
  assert.doesNotMatch(page, /a closer look\./);
});

test("review form keeps the founder-led mailto path", () => {
  assert.match(form, /mailto:info@cyberethos\.org/);
  assert.match(form, /Nothing is stored on this page/);
  assert.match(form, /Nothing was stored here/);
  assert.doesNotMatch(form, /stored on (a |the )?server/i);
  assert.doesNotMatch(form, /type="reset"/);
  assert.doesNotMatch(form, />Cancel</);
});

test("required and optional fields match the public form spec", () => {
  assert.match(form, /Full name/);
  assert.match(form, /Work email/);
  assert.match(form, /Organization or site URL/);
  assert.match(form, /What needs a closer look\?/);
  assert.match(form, /Preferred service/);
  assert.match(services, /Not sure yet/);
  assert.match(form, /reviewServiceOptions/);
  assert.match(form, /type="email"/);
  assert.doesNotMatch(form, /Timing/);
  assert.doesNotMatch(form, /This week/);
});

test("service slugs stay shared with homepage deep links", () => {
  for (const id of [
    "cybersecurity-audit",
    "penetration-testing",
    "website-vulnerability-detection",
  ]) {
    assert.match(services, new RegExp(`"${id}"`));
    assert.match(homepage, new RegExp(`id: "${id}"`));
    assert.match(homepage, /href={`\/review\?service=\$\{service\.id\}`}/);
  }
  assert.match(page, /resolveReviewService/);
});

test("review chrome stays minimal and points home", () => {
  assert.match(frame, /href=\{review \? "\/" : "\/review"\}/);
  assert.match(frame, /\{review \? "Home" : "Request a review"\}/);
  assert.match(page, /Scope first\. Authorization before any testing\./);
});

test("review uses a single editorial column instead of a form sidebar split", () => {
  assert.match(page, /review-column/);
  assert.match(css, /max-width: 620px/);
  assert.doesNotMatch(page, /review-layout/);
  assert.doesNotMatch(page, /review-aside/);
  assert.doesNotMatch(page, /02 \/ Your details/);
  assert.doesNotMatch(css, /\.review-aside/);
  assert.doesNotMatch(css, /\.review-layout/);
});

test("field labels stay sans paper with required optional opposite the name", () => {
  assert.match(form, /review-field-head/);
  assert.match(css, /\.review-field label \{[\s\S]*?color: var\(--paper\)/);
  assert.match(css, /\.review-field label \{[\s\S]*?font-weight: 500/);
  assert.match(css, /\.field-flag \{[\s\S]*?font-size: 13px/);
  assert.match(css, /\.field-flag\.required \{[\s\S]*?color: var\(--accent\)/);
  assert.doesNotMatch(css, /\.field-flag \{[\s\S]*?monospace/);
  assert.doesNotMatch(form, /className="field-flag">Optional<\/span><\/label>/);
});

test("inputs use visible paper borders and taller padding", () => {
  assert.match(css, /--review-line: rgba\(236, 232, 223, 0\.22\)/);
  assert.match(css, /--review-line-strong: rgba\(236, 232, 223, 0\.4\)/);
  assert.match(css, /padding: 14px 16px/);
  assert.match(form, /you@company\.com/);
  assert.match(form, /disabled=\{status === "opening"\}/);
});

test("concern field carries the only first-message reassurance", () => {
  assert.match(form, /passwords, credentials, API keys, or customer data/);
  assert.match(form, /sensitive detail comes after authorization/);
  assert.equal(
    (form.match(/passwords, credentials, API keys, or customer data/g) || [])
      .length,
    1,
  );
  assert.doesNotMatch(form, /Keep the first message simple/);
  assert.doesNotMatch(page, /Keep the first message simple/);
  assert.doesNotMatch(nextSteps, /Keep the first message simple/);
  assert.doesNotMatch(form, /ReassurancePanel/);
  assert.doesNotMatch(form, /review-reassure/);
});

test("what happens next sits below the form as three quiet steps", () => {
  assert.match(page, /ReviewNextSteps/);
  assert.match(nextSteps, /What happens next/);
  assert.match(nextSteps, /I read it and reply/);
  assert.match(nextSteps, /We scope it together/);
  assert.match(nextSteps, /Written authorization/);
  assert.match(css, /\.review-next-steps \{[\s\S]*?grid-template-columns: 1fr 1fr 1fr/);
  assert.doesNotMatch(form, /What happens next/);
});
