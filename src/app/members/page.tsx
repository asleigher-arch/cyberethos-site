import type { Metadata } from "next";
import Link from "next/link";
import MetaPixelSlot from "@/components/analytics/MetaPixelSlot";
import PublicFrame, { Arrow } from "@/components/portfolio/PublicFrame";

export const metadata: Metadata = {
  title: "Founding members | Cyber Ethos",
  description:
    "The free brief tells you what broke. Members get the fix, click by click. 25 seats. $15 a month or $150 a year, locked for as long as you stay subscribed.",
};

const MONTHLY_CHECKOUT_URL =
  "https://buy.stripe.com/aFa7sN4Scbf21iX2Yg5sA00";
const YEARLY_CHECKOUT_URL =
  "https://buy.stripe.com/fZubJ398s1Es9Pt56o5sA01";

/**
 * Manually maintained. Covers monthly and yearly seats together.
 * Update `taken` and `updated` together. No timers, no urgency.
 * When `taken` reaches `total`, the checkout links swap to the sold-out line.
 */
const FOUNDING_SEATS = {
  total: 25,
  taken: 0,
  updated: "Sep 27, 2026",
} as const;

const seatsOpen = FOUNDING_SEATS.taken < FOUNDING_SEATS.total;

const CHECKOUT_NOTE =
  "Secure checkout by Stripe. Renews automatically. Full refund within 30 days. Cancel anytime.";

const LOCK_LINE =
  "Your price is locked for as long as you stay subscribed. Cancel and rejoin later, and you pay the then-current price.";

const REFUND_LINE =
  "Full refund within 30 days of your first payment, no questions asked. Cancel anytime after that. Details below.";

const SOLD_OUT =
  "All 25 founding seats are taken. Thank you. The free brief keeps going every Tuesday and Thursday. If membership opens again, subscribers hear about it first.";

const comparison: { feature: string; free: string; member: string }[] = [
  {
    feature: "Tuesday Case File and Thursday brief",
    free: "Yes",
    member: "Yes",
  },
  {
    feature: "The three owner fixes in each Case File",
    free: "Yes",
    member: "Yes",
  },
  {
    feature:
      "Friday Fix Kit: click-by-click steps with real screenshots (Microsoft 365 and Google Workspace)",
    free: "No",
    member: "Yes",
  },
  {
    feature:
      "Copy-ready templates (help desk script, new-hire and offboarding checklist, vendor questions email, one-page incident plan)",
    free: "No",
    member: "Yes",
  },
  {
    feature: "Monthly 30-minute live owner Q&A",
    free: "No",
    member: "Yes",
  },
  {
    feature: "Ask Azad by reply, answer within 48 hours",
    free: "Reply anytime, answered when I can",
    member: "Yes, within 48 hours",
  },
  {
    feature: "One 20-minute security review call",
    free: "No",
    member: "Yes",
  },
  {
    feature: "Price",
    free: "Free",
    member:
      "$15/month or $150/year, locked for as long as you stay subscribed",
  },
];

const faqs: { q: string; a: string }[] = [
  {
    q: "Can I cancel anytime?",
    a: "Yes. Use the link in your Stripe receipt email. No call, no form. You keep access until the end of the period you already paid for. No partial refunds after the first 30 days.",
  },
  {
    q: "Can I get a refund?",
    a: "Yes, in full, within 30 days of your first payment. No questions asked. Reply to any email from me or write to info@cyberethos.org. Yearly members also get a full refund if they ask within 7 days of a renewal charge.",
  },
  {
    q: "What happens after 25 seats?",
    a: "The join links stop working and founding pricing closes. The free brief keeps going, same as now. If I open membership again later, founding members keep their price.",
  },
  {
    q: "Do I need to be technical?",
    a: "No. The Fix Kits are written for owners. The screenshots show where to click. If a step needs your IT provider, you get the exact email to send them.",
  },
  {
    q: "Is the free newsletter changing?",
    a: "No. Tuesdays and Thursdays stay free. Same incidents, same fixes. Members get the step-by-step layer on top.",
  },
  {
    q: "What if I cancel and come back?",
    a: "Your price is locked for as long as you stay subscribed. Cancel and rejoin later, and you pay the then-current price.",
  },
];

const refunds: { title: string; body: string }[] = [
  {
    title: "First 30 days.",
    body: "If it isn't worth it to you, you get a full refund within 30 days of your first payment. No questions asked. Reply to any email from me or write to info@cyberethos.org.",
  },
  {
    title: "After 30 days.",
    body: "Cancel anytime with the link in your Stripe receipt email. Your access runs to the end of the period you already paid for. There are no partial refunds for the time left.",
  },
  {
    title: "Yearly renewals.",
    body: "If your yearly membership renews and you don't want it, ask within 7 days of the renewal charge and you get a full refund.",
  },
  {
    title: "Refunds are always full, never partial.",
    body: "If you get a refund, your membership ends when it's processed.",
  },
  {
    title: "Your price.",
    body: "Locked for as long as you stay subscribed. Cancel and rejoin later, and you pay the then-current price.",
  },
];

const templates: { title: string; detail: string }[] = [
  {
    title: "Help desk caller verification script",
    detail:
      "(what whoever answers the phone says when someone asks for a password or MFA reset)",
  },
  {
    title: "New-hire and offboarding checklist",
    detail: "(accounts to open, accounts to close, in order)",
  },
  {
    title: "Vendor security questions email",
    detail: "(what to ask the companies that touch your data)",
  },
  {
    title: "One-page incident plan",
    detail:
      "(who to call, what to shut off, what not to do, on one sheet)",
  },
];

function tone(value: string) {
  if (value === "Yes") return "yes";
  if (value === "No") return "no";
  return "";
}

function SeatCount() {
  const line = `Founding seats: ${FOUNDING_SEATS.total}. Taken so far: ${FOUNDING_SEATS.taken}. Updated ${FOUNDING_SEATS.updated}.`;
  return <p className="b-seats">{line}</p>;
}

function CheckoutNote() {
  if (!seatsOpen) return null;
  return <p className="b-fine">{CHECKOUT_NOTE}</p>;
}

function FreeBriefLink() {
  return (
    <p className="b-free">
      <Link href="/subscribe">Not ready? Stay on the free brief.</Link>
    </p>
  );
}

function MonthlySeatLink() {
  if (!seatsOpen) {
    return <p className="m-closed">Founding seats are full</p>;
  }
  return (
    <a className="portfolio-button m-btn outline" href={MONTHLY_CHECKOUT_URL}>
      Get a monthly seat, $15/month <Arrow />
    </a>
  );
}

function YearlySeatLink() {
  if (!seatsOpen) {
    return <p className="m-closed">Founding seats are full</p>;
  }
  return (
    <a className="portfolio-button m-btn solid" href={YEARLY_CHECKOUT_URL}>
      Get a yearly seat, $150/year <Arrow />
    </a>
  );
}

export default function MembersPage() {
  return (
    <PublicFrame page>
      <MetaPixelSlot page="members" />
      <main id="main" className="members-main">
        <section className="b-top">
          <p className="technical-label">Cyber Ethos · Founding members</p>
          <h1>
            The free brief tells you what broke.
            <br />
            <em>Members get the fix, click by click.</em>
          </h1>
          <p className="m-lede">
            Cyber Ethos is free every Tuesday and Thursday, and it stays free.
            Founding members also get the exact steps, the templates, and a
            direct line to me. 25 seats. $15 a month or $150 a year, locked for
            as long as you stay subscribed.
          </p>
        </section>

        <section className="b-plans" id="join" aria-label="Plans">
          <article className="b-card">
            <div className="b-card-head">
              <h2>Monthly</h2>
            </div>
            <div className="m-price">
              $15<small>a month</small>
            </div>
            <p className="b-note">Billed monthly.</p>
            <MonthlySeatLink />
            <ul className="b-inc">
              <li>The Friday Fix Kit</li>
              <li>Copy-ready templates</li>
              <li>Ask me directly</li>
              <li>One 20-minute security review call</li>
            </ul>
          </article>
          <article className="b-card feature">
            <div className="b-card-head">
              <h2>Yearly</h2>
              <span className="b-flag">Two months free</span>
            </div>
            <div className="m-price">
              $150<small>a year</small>
            </div>
            <p className="b-note">Same membership, two months free.</p>
            <YearlySeatLink />
            <ul className="b-inc">
              <li>The Friday Fix Kit</li>
              <li>Copy-ready templates</li>
              <li>Ask me directly</li>
              <li>One 20-minute security review call</li>
            </ul>
          </article>
        </section>

        <div className="b-under">
          {seatsOpen ? (
            <>
              <p className="b-lock">{LOCK_LINE}</p>
              <p className="b-means">{REFUND_LINE}</p>
            </>
          ) : (
            <p className="b-lock">{SOLD_OUT}</p>
          )}
          <SeatCount />
          <CheckoutNote />
          <FreeBriefLink />
        </div>

        <section className="b-who" aria-labelledby="who-title">
          <div>
            <p className="technical-label">Who it&apos;s for</p>
            <h2 id="who-title">Members is for that gap.</h2>
            <p>
              {
                "You run a small business. You use Microsoft 365 or Google Workspace. You don't have a security team. Maybe you have an IT provider you call when something breaks. Maybe the IT person is you."
              }
            </p>
            <p>
              {
                'You read a Case File on Tuesday and think, "I should do that." Then it\'s Friday and it isn\'t done. Not because you don\'t care. Because the setting is three menus deep and you don\'t know which one.'
              }
            </p>
          </div>
          <div className="b-notfor">
            <p className="technical-label">Who it&apos;s not for</p>
            <p>
              {
                "If you have an in-house security team, you already have this. If you want a product to buy, there isn't one. I don't sell software."
              }
            </p>
          </div>
        </section>

        <section
          className="m-sec b-benefits"
          aria-labelledby="benefits-title"
        >
          <div className="m-sec-head">
            <p className="technical-label">Founding membership</p>
            <h2 id="benefits-title">What you get</h2>
          </div>
          <div className="b-grid">
            <article className="b-item">
              <p className="technical-label">01 / Every Friday</p>
              <h3>The Friday Fix Kit</h3>
              <p>
                {
                  "Every Friday, members get the click-by-click steps for that week's Case File fix. Real screenshots of the exact Microsoft 365 and Google Workspace settings. If a step needs your IT provider, the Fix Kit says so and gives you the email to send them."
                }
              </p>
            </article>
            <article className="b-item">
              <p className="technical-label">02 / Use the same day</p>
              <h3>Copy-ready templates</h3>
              <p>Four documents you can use the same day:</p>
              <ul className="m-tpl">
                {templates.map((item) => (
                  <li key={item.title}>
                    <b>{item.title}</b>
                    {item.detail}
                  </li>
                ))}
              </ul>
            </article>
            <article className="b-item">
              <p className="technical-label">03 / Monthly, and by reply</p>
              <h3>Ask me directly</h3>
              <p>
                A 30-minute live Q&amp;A for owners, once a month. And between
                those, reply to any email with a question. I answer within 48
                hours.
              </p>
            </article>
            <article className="b-item">
              <p className="technical-label">04 / One per member</p>
              <h3>One 20-minute security review call</h3>
              <p>
                One per founding member. You, me, and your setup. We pick the
                one or two things that matter most for your business.
              </p>
            </article>
          </div>
        </section>

        <section className="m-sec" aria-labelledby="cmp-title">
          <div className="m-sec-head">
            <p className="technical-label">Side by side</p>
            <h2 id="cmp-title">Free vs. founding member</h2>
          </div>
          <table className="m-cmp">
            <thead>
              <tr>
                <th scope="col">
                  <span className="visually-hidden">Feature</span>
                </th>
                <th scope="col">Free brief</th>
                <th scope="col" className="col-member">
                  Founding member
                </th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((row) => (
                <tr
                  key={row.feature}
                  className={row.feature === "Price" ? "price" : undefined}
                >
                  <th scope="row">{row.feature}</th>
                  <td className={tone(row.free)} data-col="Free brief">
                    {row.free}
                  </td>
                  <td
                    className={`${tone(row.member)} col-member`.trim()}
                    data-col="Founding member"
                  >
                    {row.member}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className="m-sec" aria-labelledby="faq-title">
          <div className="m-sec-head">
            <p className="technical-label">FAQ</p>
            <h2 id="faq-title">Questions owners ask</h2>
          </div>
          <dl className="m-faq">
            {faqs.map((item) => (
              <div key={item.q}>
                <dt>{item.q}</dt>
                <dd>{item.a}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="m-sec" id="refunds" aria-labelledby="refunds-title">
          <div className="m-sec-head">
            <p className="technical-label">Refunds</p>
            <h2 id="refunds-title">Refunds and cancellation</h2>
          </div>
          <dl className="m-refunds">
            {refunds.map((item) => (
              <div key={item.title}>
                <dt>{item.title}</dt>
                <dd>{item.body}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="b-close" aria-labelledby="close-title">
          <div>
            <p className="technical-label">Founding seats</p>
            <h2 id="close-title">
              $15 a month.
              <br />
              <em>Or $150 a year.</em>
            </h2>
            <p>{seatsOpen ? LOCK_LINE : SOLD_OUT}</p>
          </div>
          <div className="b-close-actions">
            <YearlySeatLink />
            <MonthlySeatLink />
            <SeatCount />
            <CheckoutNote />
          </div>
        </section>

        <section className="m-bottom" aria-label="Questions and free option">
          <p>
            Questions first? Email{" "}
            <a href="mailto:info@cyberethos.org">info@cyberethos.org</a>. It
            comes to me.
          </p>
          <FreeBriefLink />
          <p className="m-sig">Azad</p>
        </section>
      </main>
    </PublicFrame>
  );
}
