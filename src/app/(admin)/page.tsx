import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cyber Ethos | Business Control Review",
  description:
    "Cyber Ethos helps small businesses regain control of access, vendors, tools, workflows, handoffs, and security before they delegate, automate, or scale.",
};

const riskSignals = [
  {
    label: "Access risk",
    status: "Often hidden",
    score: "High",
    copy: "Old admins, shared passwords, weak MFA, unclear ownership, and vendor accounts nobody checks.",
  },
  {
    label: "Website exposure",
    status: "Outside-in check",
    score: "Review",
    copy: "Public-facing issues, outdated web signals, form/contact gaps, tracking clutter, and credibility problems.",
  },
  {
    label: "Vendor & VA handoffs",
    status: "Control gap",
    score: "Messy",
    copy: "People need access to get work done, but the handoff, review, and offboarding process is loose.",
  },
  {
    label: "Backup & recovery",
    status: "Owner dependent",
    score: "Unknown",
    copy: "Files, websites, domains, email, cloud tools, and SOPs may not be recoverable if something breaks.",
  },
  {
    label: "Owner bottleneck",
    status: "Ops drag",
    score: "Costly",
    copy: "The founder is still the password holder, process owner, support desk, project manager, and emergency plan.",
  },
];

const services = [
  {
    title: "Security & Access Cleanup",
    copy: "Clean up admin access, MFA, passwords, cloud tools, files, websites, domains, and basic recovery risk.",
    deliverable: "Access map, priority fixes, cleanup checklist, and execution support if needed.",
  },
  {
    title: "VA Hiring & Handoff",
    copy: "Turn messy delegation into safer work: roles, SOPs, access boundaries, onboarding, offboarding, and review rhythm.",
    deliverable: "Role scope, handoff plan, account rules, SOP checklist, and first-week operating rhythm.",
  },
  {
    title: "Offshore Engineering Setup",
    copy: "Set up technical execution without handing over the keys: scope, GitHub hygiene, access rules, review cycles, and project visibility.",
    deliverable: "Delivery system, access guardrails, review process, and handoff documentation.",
  },
];

const packages = [
  {
    name: "Business Control Review",
    bestFor: "Fixed-scope first offer",
    includes: ["Access, vendors, tools, and workflow map", "Top 10 control gaps", "30-day fix plan"],
  },
  {
    name: "Control Cleanup Sprint",
    bestFor: "You want help fixing it",
    includes: ["Review plus implementation support", "Priority access, SOP, vendor, and handoff cleanup", "Two-to-four week execution plan"],
  },
  {
    name: "Ongoing Control Advisor",
    bestFor: "You need monthly support",
    includes: ["Monthly access, vendor, and workflow review", "Delegation and automation guardrails", "Operator support without hiring full-time"],
  },
];

const processSteps = [
  "Book a 20-minute Control Check with your company, website, current mess, and urgency.",
  "Cyber Ethos maps the likely access, vendor, tool, workflow, handoff, and security gaps.",
  "You get a plain 30-day control plan: what to fix now, what can wait, and what needs support.",
  "If it makes sense, Cyber Ethos helps execute the cleanup and build safer delegation, automation, and handoffs.",
];

function Hero() {
  return (
    <section className="col-span-12 overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-white/[0.03] lg:p-8">
      <div className="grid gap-8 xl:grid-cols-[1.15fr_0.85fr] xl:items-center">
        <div>
          <span className="inline-flex rounded-full bg-brand-50 px-3 py-1 text-theme-xs font-semibold text-brand-600 dark:bg-brand-500/15 dark:text-brand-300">
            Cyber Ethos Business Control Review
          </span>
          <h1 className="mt-4 max-w-4xl text-3xl font-bold tracking-tight text-gray-900 dark:text-white/90 sm:text-4xl lg:text-5xl">
            Regain control before you delegate, automate, or scale.
          </h1>
          <p className="mt-5 max-w-3xl text-theme-md leading-7 text-gray-600 dark:text-gray-400">
            Cyber Ethos helps small businesses find hidden access, vendor, workflow, and security gaps before they become expensive problems.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link href="/review" className="inline-flex items-center justify-center rounded-lg bg-brand-500 px-5 py-3 text-theme-sm font-semibold text-white shadow-theme-xs hover:bg-brand-600">
              Book a 20-minute Control Check
            </Link>
            <Link href="#snapshot" className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-5 py-3 text-theme-sm font-semibold text-gray-700 shadow-theme-xs hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300">
              See the control checklist
            </Link>
          </div>
        </div>

        <div id="snapshot" className="rounded-2xl border border-gray-100 bg-gray-50 p-5 dark:border-gray-800 dark:bg-gray-900/40">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-theme-sm font-semibold text-gray-800 dark:text-white/90">Example review snapshot</p>
              <p className="mt-1 text-theme-xs text-gray-500 dark:text-gray-400">Illustrative signals, not client data.</p>
            </div>
            <span className="rounded-full bg-warning-50 px-3 py-1 text-theme-xs font-semibold text-warning-700 dark:bg-warning-500/15 dark:text-warning-400">
              Baseline needed
            </span>
          </div>
          <div className="space-y-3">
            {riskSignals.slice(0, 4).map((signal) => (
              <div key={signal.label} className="rounded-xl bg-white p-4 shadow-theme-xs dark:bg-white/[0.04]">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-theme-sm font-semibold text-gray-800 dark:text-white/90">{signal.label}</p>
                  <span className="rounded-full bg-gray-100 px-2.5 py-1 text-theme-xs font-semibold text-gray-600 dark:bg-gray-800 dark:text-gray-300">{signal.score}</span>
                </div>
                <p className="mt-2 text-theme-xs leading-5 text-gray-500 dark:text-gray-400">{signal.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function RiskGrid() {
  return (
    <section className="col-span-12 rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-white/[0.03]">
      <div className="mb-6 max-w-3xl">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white/90">What the review looks for</h2>
        <p className="mt-2 text-theme-sm leading-6 text-gray-500 dark:text-gray-400">
          The goal is not a giant report. It is a practical map of what can hurt time, trust, control, and execution.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {riskSignals.map((signal) => (
          <article key={signal.label} className="rounded-2xl border border-gray-100 bg-gray-50 p-5 dark:border-gray-800 dark:bg-gray-900/40">
            <span className="rounded-full bg-brand-50 px-2.5 py-1 text-theme-xs font-semibold text-brand-600 dark:bg-brand-500/15 dark:text-brand-300">{signal.status}</span>
            <h3 className="mt-4 text-theme-md font-semibold text-gray-900 dark:text-white/90">{signal.label}</h3>
            <p className="mt-3 text-theme-sm leading-6 text-gray-600 dark:text-gray-400">{signal.copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="service-paths" className="col-span-12 rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-white/[0.03]">
      <div className="mb-6 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white/90">Three practical cleanup paths</h2>
          <p className="mt-2 max-w-3xl text-theme-sm leading-6 text-gray-500 dark:text-gray-400">
            The review should point to a decision, not confusion. These are the core ways Cyber Ethos helps after the first look.
          </p>
        </div>
        <Link href="/review" className="inline-flex items-center justify-center rounded-lg bg-brand-500 px-4 py-2.5 text-theme-sm font-semibold text-white shadow-theme-xs hover:bg-brand-600">
          Book Control Check
        </Link>
      </div>
      <div className="grid gap-4 lg:grid-cols-3">
        {services.map((service) => (
          <article key={service.title} className="rounded-2xl border border-gray-100 bg-gray-50 p-5 dark:border-gray-800 dark:bg-gray-900/40">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white/90">{service.title}</h3>
            <p className="mt-3 text-theme-sm leading-6 text-gray-600 dark:text-gray-400">{service.copy}</p>
            <div className="mt-4 rounded-xl bg-white p-4 text-theme-sm text-gray-600 shadow-theme-xs dark:bg-white/[0.04] dark:text-gray-400">
              <span className="font-semibold text-gray-800 dark:text-white/90">Deliverable: </span>{service.deliverable}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function PackagesAndProcess() {
  return (
    <>
      <section className="col-span-12 xl:col-span-7 rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-white/[0.03]">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white/90">Simple package shape</h2>
        <p className="mt-2 text-theme-sm leading-6 text-gray-500 dark:text-gray-400">Start with a fixed-scope Business Control Review, then decide whether to implement the cleanup yourself or get support.</p>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {packages.map((item) => (
            <article key={item.name} className="rounded-2xl border border-gray-100 bg-white p-4 shadow-theme-xs dark:border-gray-800 dark:bg-white/[0.02]">
              <h3 className="text-theme-md font-semibold text-gray-900 dark:text-white/90">{item.name}</h3>
              <p className="mt-1 text-theme-xs font-medium text-brand-600 dark:text-brand-300">{item.bestFor}</p>
              <ul className="mt-4 space-y-2 text-theme-sm text-gray-600 dark:text-gray-400">
                {item.includes.map((line) => <li key={line}>• {line}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="process" className="col-span-12 xl:col-span-5 rounded-2xl border border-brand-100 bg-brand-50 p-6 dark:border-brand-500/20 dark:bg-brand-500/10">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white/90">What happens next</h2>
        <div className="mt-5 space-y-4">
          {processSteps.map((step, index) => (
            <div key={step} className="flex gap-3 rounded-xl bg-white p-4 shadow-theme-xs dark:bg-white/[0.05]">
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-500 text-theme-xs font-bold text-white">{index + 1}</div>
              <p className="text-theme-sm leading-6 text-gray-700 dark:text-gray-300">{step}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

function FounderCredibility() {
  return (
    <section className="col-span-12 rounded-2xl border border-gray-200 bg-gray-950 p-6 text-white dark:border-gray-800 lg:p-8">
      <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div>
          <span className="inline-flex rounded-full bg-white/10 px-3 py-1 text-theme-xs font-semibold text-white/80">Why Cyber Ethos</span>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">Built for owners who need control without slowing the business down.</h2>
        </div>
        <div className="space-y-4 text-theme-sm leading-7 text-white/70">
          <p>
            Cyber Ethos is led from an operations-first perspective: security, delegation, execution, and leadership have to work together. Cleanup is not just technical. It is about knowing what matters, who owns it, and how work gets done safely.
          </p>
          <p>
            The review is designed to give a practical first move before you invest in more software, hand access to another vendor, or hire support without guardrails.
          </p>
          <Link href="/review" className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-theme-sm font-semibold text-gray-900 shadow-theme-xs hover:bg-gray-100">
            Book a Control Check
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function SecurityOperations() {
  return (
    <div className="grid grid-cols-12 gap-4 md:gap-6">
      <Hero />
      <RiskGrid />
      <Services />
      <PackagesAndProcess />
      <FounderCredibility />
    </div>
  );
}
