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
