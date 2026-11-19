import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";

const root = new URL("../", import.meta.url);

function read(path) {
  return fs.readFileSync(new URL(path, root), "utf8");
}

function missing(path) {
  assert.equal(fs.existsSync(new URL(path, root)), false, `${path} should be gone`);
}

test("signup and founding pages are deleted", () => {
  for (const path of [
    "src/app/subscribe/page.tsx",
    "src/app/members/page.tsx",
    "src/app/welcome-founding/page.tsx",
    "src/app/welcome/page.tsx",
    "src/app/thanks/page.tsx",
    "src/components/portfolio/NewsletterSignup.tsx",
    "src/components/portfolio/newsletter.ts",
  ]) {
    missing(path);
  }
});

test("retired routes redirect permanently to the homepage", () => {
  const config = read("next.config.ts");
  for (const source of [
    "/subscribe",
    "/members",
    "/welcome-founding",
    "/welcome",
    "/thanks",
  ]) {
    assert.match(
      config,
      new RegExp(
        `source: "${source}", destination: "/", permanent: true`,
      ),
    );
  }
});

test("static homepage has no signup form, Brevo link, or newsletter section", () => {
  const home = read("public/home/index.html");
  assert.doesNotMatch(home, /sibforms|brevo|newsletter|Subscribe/i);
  assert.doesNotMatch(home, /id="newsletter"|class="news"/);
});

test("payment links are gone and mailed images stay", () => {
  const home = read("public/home/index.html");
  assert.doesNotMatch(home, /buy\.stripe|stripe/i);
  assert.equal(
    fs.existsSync(
      new URL(
        "public/img/newsletter/issue-21-st-sebastians-letter-sept-29.png",
        root,
      ),
    ),
    true,
  );
  assert.equal(
    fs.existsSync(new URL("public/img/azad-headshot-240.jpg", root)),
    true,
  );
});
