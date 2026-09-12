import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";

const root = new URL("../", import.meta.url);
const homepage = fs.readFileSync(
  new URL("src/app/(admin)/FounderLinkHubClient.tsx", root),
  "utf8",
);
const frame = fs.readFileSync(
  new URL("src/components/portfolio/PublicFrame.tsx", root),
  "utf8",
);
const portrait = fs.readFileSync(
  new URL("src/components/portfolio/FounderPortrait.tsx", root),
  "utf8",
);
const subscribe = fs.readFileSync(
  new URL("src/app/subscribe/route.ts", root),
  "utf8",
);

const newsletterUrl =
  "https://9d400ade.sibforms.com/serve/MUIFAPExZZx-JCjXBLd6WTYMm8vRj63zvNsbCmkq-1mjrjOv9k_JWEyebEiyItVE_L4EyZ5Xfqn7ErmdwXwYD9Y3SSp1AZpfFY-SMJPjZI2kMDyS7fxtSfotCUyqAufENqxrzITGc-4DKo2hnCJzIFoeLQXtiRaVxjRRA8wNfJHFSKzviHtk067OjA1clW2c4zDXUsRvGTg7jYcFpg==";

test("homepage keeps the approved v1 section order", () => {
  const order = [
    'className="portfolio-hero"',
    'id="story"',
    'id="services"',
    'id="approach"',
    'id="contact"',
    'id="newsletter"',
  ];
  let cursor = 0;
  for (const marker of order) {
    const next = homepage.indexOf(marker, cursor);
    assert.ok(next > -1, `missing ${marker}`);
    cursor = next + marker.length;
  }
});

test("primary review CTAs use the live /review path", () => {
  assert.match(homepage, /Request a security review/);
  assert.match(homepage, /href="\/review"/);
  assert.match(homepage, /href={`\/review\?service=\$\{service\.id\}`}/);
  assert.match(frame, /href=\{review \? "\/" : "\/review"\}/);
  assert.doesNotMatch(homepage, /azad@cyberethos\.org/);
  assert.match(homepage, /mailto:info@cyberethos\.org/);
});

test("real founder portrait is used instead of a placeholder", () => {
  assert.match(portrait, /src="\/images\/user\/owner\.jpg"/);
  assert.match(portrait, /Marine Corps dress uniform/);
  assert.doesNotMatch(portrait, /placeholder|silhouette/i);
  assert.match(homepage, /<FounderPortrait/);
});

test("newsletter keeps the live Brevo subscribe path", () => {
  assert.match(homepage, /<iframe/);
  assert.equal(
    homepage.match(/const newsletterUrl =\s*"([^"]+)"/)?.[1],
    newsletterUrl,
  );
  assert.ok(subscribe.includes(newsletterUrl));
  assert.match(homepage, /Plain notes on staying secure/);
});

test("three production services keep their review slugs", () => {
  for (const id of [
    "cybersecurity-audit",
    "penetration-testing",
    "website-vulnerability-detection",
  ]) {
    assert.match(homepage, new RegExp(`id: "${id}"`));
  }
  assert.match(homepage, /Scope this engagement/);
});
