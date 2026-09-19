import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";

const root = new URL("../", import.meta.url);
const page = fs.readFileSync(
  new URL("src/app/subscribe/page.tsx", root),
  "utf8",
);
const signup = fs.readFileSync(
  new URL("src/components/portfolio/NewsletterSignup.tsx", root),
  "utf8",
);
const newsletter = fs.readFileSync(
  new URL("src/components/portfolio/newsletter.ts", root),
  "utf8",
);
const homepage = fs.readFileSync(
  new URL("src/app/(admin)/FounderLinkHubClient.tsx", root),
  "utf8",
);
const frame = fs.readFileSync(
  new URL("src/components/portfolio/PublicFrame.tsx", root),
  "utf8",
);
const css = fs.readFileSync(new URL("src/app/portfolio.css", root), "utf8");

const newsletterUrl =
  "https://9d400ade.sibforms.com/serve/MUIFAPExZZx-JCjXBLd6WTYMm8vRj63zvNsbCmkq-1mjrjOv9k_JWEyebEiyItVE_L4EyZ5Xfqn7ErmdwXwYD9Y3SSp1AZpfFY-SMJPjZI2kMDyS7fxtSfotCUyqAufENqxrzITGc-4DKo2hnCJzIFoeLQXtiRaVxjRRA8wNfJHFSKzviHtk067OjA1clW2c4zDXUsRvGTg7jYcFpg==";

test("subscribe page uses the editorial paper frame, not the ink review chrome", () => {
  assert.match(page, /<PublicFrame page>/);
  assert.doesNotMatch(page, /<PublicFrame review>/);
  assert.match(frame, /page \? " portfolio-page"/);
  assert.match(css, /\.portfolio-editorial\.portfolio-page \.portfolio-header/);
  assert.match(css, /\.portfolio-editorial\.portfolio-page[\s\S]*?background: var\(--paper\)/);
});

test("subscribe and homepage share the live Brevo iframe", () => {
  assert.equal(
    newsletter.match(/export const NEWSLETTER_URL =\s*"([^"]+)"/)?.[1],
    newsletterUrl,
  );
  assert.match(signup, /src=\{NEWSLETTER_URL\}/);
  assert.match(signup, /href=\{NEWSLETTER_URL\}/);
  assert.match(newsletter, /sibforms\.com/);
  assert.match(page, /<NewsletterSignup/);
  assert.match(homepage, /<NewsletterSignup/);
  assert.doesNotMatch(page, /azad@cyberethos\.org/);
});

test("subscribe copy stays blunt with no em dashes", () => {
  assert.doesNotMatch(page, /—/);
  assert.match(page, /<h1>Plain notes on staying secure<\/h1>/);
  assert.match(page, /Occasional, short, no product pitches/);
  assert.match(page, /Need work done\?/);
});

test("subscribe keeps review as a secondary action, not the page primary", () => {
  assert.match(page, /href="\/review"/);
  assert.match(page, /Request a security review/);
  assert.match(page, /portfolio-button ghost/);
  assert.doesNotMatch(page, /portfolio-button solid/);
});

test("newsletter plate uses hairline chrome on paper, no drop shadow", () => {
  const plate = css.slice(
    css.indexOf(".newsletter-plate {"),
    css.indexOf(".newsletter-plate-label"),
  );
  assert.match(plate, /border: 1px solid var\(--line\)/);
  assert.match(plate, /box-shadow: none/);
  assert.doesNotMatch(plate, /box-shadow:\s*[0-9]/);
  assert.match(css, /\.portfolio-editorial \.newsletter-plate \{[\s\S]*?background: var\(--wash-ink\)/);
  assert.match(css, /\.newsletter-plate-label/);
});
