import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";

const root = new URL("../", import.meta.url);
const page = fs.readFileSync(new URL("src/app/members/page.tsx", root), "utf8");
const css = fs.readFileSync(new URL("src/app/portfolio.css", root), "utf8");
const frame = fs.readFileSync(
  new URL("src/components/portfolio/PublicFrame.tsx", root),
  "utf8",
);
const signup = fs.readFileSync(
  new URL("src/components/portfolio/NewsletterSignup.tsx", root),
  "utf8",
);

const monthlyUrl = "https://buy.stripe.com/aFa7sN4Scbf21iX2Yg5sA00";
const yearlyUrl = "https://buy.stripe.com/fZubJ398s1Es9Pt56o5sA01";

test("members page uses the editorial frame and leaves the nav and Brevo form alone", () => {
  assert.match(page, /<PublicFrame page>/);
  assert.doesNotMatch(page, /NewsletterSignup/);
  assert.doesNotMatch(frame, /\/members/);
  assert.doesNotMatch(frame, /\/subscribe/);
  assert.match(signup, /NEWSLETTER_URL/);
});

test("stripe seats are plain same-tab anchors with the exact payment links", () => {
  assert.match(page, new RegExp(`href=\\{MONTHLY_CHECKOUT_URL\\}`));
  assert.match(page, new RegExp(`href=\\{YEARLY_CHECKOUT_URL\\}`));
  assert.equal(page.match(/const MONTHLY_CHECKOUT_URL =\s*\n\s*"([^"]+)"/)?.[1], monthlyUrl);
  assert.equal(page.match(/const YEARLY_CHECKOUT_URL =\s*\n\s*"([^"]+)"/)?.[1], yearlyUrl);
  assert.match(page, /Get a monthly seat, \$15\/month/);
  assert.match(page, /Get a yearly seat, \$150\/year/);
  assert.match(page, /<a className="portfolio-button m-btn outline"/);
  assert.match(page, /<a className="portfolio-button m-btn solid"/);
  assert.doesNotMatch(page, /target=/);
  assert.doesNotMatch(page, /href=\{MONTHLY_CHECKOUT_URL\}[\s\S]{0,80}target/);
});

test("price lock, seat count, checkout line, and free brief link use the approved copy", () => {
  assert.match(page, /locked for as long as you stay subscribed/);
  assert.match(page, /Manually maintained\. Covers monthly and yearly seats together\./);
  assert.match(page, /taken: 0/);
  assert.match(page, /updated: "Sep 27, 2026"/);
  assert.match(
    page,
    /Founding seats: \$\{FOUNDING_SEATS\.total\}\. Taken so far: \$\{FOUNDING_SEATS\.taken\}\. Updated \$\{FOUNDING_SEATS\.updated\}\./,
  );
  assert.match(
    page,
    /Secure checkout by Stripe\. Renews automatically\. Full refund within 30 days\. Cancel anytime\./,
  );
  assert.match(page, /Not ready\? Stay on the free brief\./);
  assert.match(page, /href="\/subscribe"/);
  assert.match(page, /Refunds and cancellation/);
  assert.match(page, /title: "Founding members \| Cyber Ethos"/);
});

test("members copy has no for-life claim and no em or en dashes", () => {
  assert.doesNotMatch(page, /for life/i);
  assert.doesNotMatch(page, /—|–|&mdash;|&ndash;/);
  assert.doesNotMatch(css.slice(css.indexOf("/* Founding members")), /—|–/);
});

test("yearly card is featured and stacks first on a phone", () => {
  assert.match(page, /Two months free/);
  assert.match(page, /className="b-card feature"/);
  const stacked = css.slice(css.indexOf("@media (max-width: 900px)"));
  assert.match(stacked, /\.members-main \.b-plans[\s\S]*?grid-template-columns:\s*1fr/);
  assert.match(stacked, /\.members-main \.b-card\.feature \{\s*order:\s*-1;/);
});
