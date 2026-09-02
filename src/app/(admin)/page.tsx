import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cyber Ethos | Azad Sleigher",
  description:
    "Founder-led security, operations, VA hiring, and offshore engineering support from Azad Sleigher and Cyber Ethos.",
};

const storyPoints = [
  "Marine Corps veteran",
  "Former Iraq Special Operations interpreter",
  "Chief of Staff and team leader",
  "Cybersecurity graduate student",
  "AI operations builder",
  "No One Left Behind mission support",
];

const principles = [
  {
    title: "Trust is operational",
    copy: "Access, passwords, vendors, files, tools, and people all shape whether a business is safe enough to move fast.",
  },
  {
    title: "Security must be usable",
    copy: "A plan that founders, assistants, vendors, and technical teams cannot follow will fail the first time work gets busy.",
  },
  {
    title: "Delegation needs guardrails",
    copy: "Virtual assistants and offshore teams can create leverage, but only when roles, accounts, SOPs, and review cycles are clear.",
  },
];

const services = [
  {
    number: "01",
    title: "Security & Access Cleanup",
    href: "/review?service=security-access-cleanup",
    copy: "Clean up admin accounts, MFA, passwords, websites, domains, cloud tools, files, vendors, and basic recovery risk.",
    deliverable: "Access map, top risks, priority fixes, and a 30-day cleanup plan.",
  },
  {
    number: "02",
    title: "Virtual Assistant Hiring",
    href: "/review?service=virtual-assistant-hiring",
    copy: "Design part-time or full-time VA roles, screen for the right work, and build handoffs that do not expose the whole business.",
    deliverable: "Role scope, hiring criteria, onboarding checklist, SOP starter kit, and access rules.",
  },
  {
    number: "03",
    title: "Offshore Engineering Support",
    href: "/review?service=offshore-engineering-support",
    copy: "Turn product, website, automation, or technical work into clear scopes with safer GitHub, vendor, and review practices.",
    deliverable: "Execution plan, technical scope, access guardrails, review rhythm, and delivery handoff.",
  },
  {
    number: "04",
    title: "Chief of Staff Ops Support",
    href: "/review?service=chief-of-staff-ops-support",
    copy: "Bring order to messy priorities, stalled work, dashboards, vendor follow-up, team rhythm, and founder bottlenecks.",
    deliverable: "Operating cadence, dashboard shape, decision tracker, and practical follow-through system.",
  },
];

const proofCards = [
  "Who has access?",
  "What breaks if the owner is offline?",
  "Where are vendors or assistants over-permissioned?",
  "Which work should be delegated, automated, or protected first?",
];

const openSourceInfluences = ["Webstudio", "Magic UI", "Motion Primitives", "AstroWind", "DevPortfolio"];

function Hero() {
  return (
    <section className="col-span-12 overflow-hidden rounded-[2rem] border border-gray-200 bg-[radial-gradient(circle_at_top_left,#EAF4FF,white_36%,#FFF7ED_100%)] p-5 shadow-theme-xs dark:border-gray-800 dark:bg-gray-950 dark:bg-none lg:p-8 xl:p-10">
      <div className="grid gap-8 xl:grid-cols-[0.92fr_1.08fr] xl:items-center">
        <div className="relative mx-auto w-full max-w-[420px] overflow-hidden rounded-[1.75rem] border border-white/80 bg-white p-3 shadow-2xl shadow-gray-200/70 dark:border-white/10 dark:bg-white/[0.04] dark:shadow-black/40">
          <div className="absolute left-6 top-6 z-10 rounded-full bg-gray-950/80 px-3 py-1 text-theme-xs font-semibold text-white backdrop-blur dark:bg-white/15">
            Founder-led
          </div>
          <Image
            src="/images/user/owner.jpg"
            alt="Azad Sleigher, founder of Cyber Ethos"
            width={760}
            height={1024}
            priority
            className="aspect-[3/4] w-full rounded-[1.35rem] object-cover object-center"
          />
          <div className="mt-3 rounded-2xl border border-gray-100 bg-white p-4 shadow-theme-xs dark:border-white/10 dark:bg-gray-950/80">
            <p className="text-theme-xs font-semibold uppercase tracking-[0.24em] text-brand-600 dark:text-brand-300">Cyber Ethos</p>
            <p className="mt-1 text-lg font-semibold tracking-tight text-gray-950 dark:text-white">Azad Sleigher</p>
            <p className="mt-1 text-theme-sm leading-5 text-gray-600 dark:text-gray-300">Service, survival, security, and operations turned into practical business support.</p>
          </div>
        </div>

        <div>
          <div className="inline-flex flex-wrap items-center gap-2 rounded-full border border-white/80 bg-white/80 px-3 py-1.5 text-theme-xs font-semibold text-gray-600 shadow-theme-xs backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-gray-300">
            <span className="h-2 w-2 rounded-full bg-brand-500" />
            Personal story first. Services one click away.
          </div>
          <h1 className="mt-5 max-w-5xl text-4xl font-bold tracking-[-0.04em] text-gray-950 dark:text-white sm:text-5xl lg:text-6xl xl:text-7xl">
            Built from service, survival, and security.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-650 dark:text-gray-300">
            I help business owners and mission-driven teams clean up access, hire reliable support, and build operations they can trust before chaos becomes expensive.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="#story" className="inline-flex items-center justify-center rounded-xl bg-gray-950 px-5 py-3 text-theme-sm font-semibold text-white shadow-theme-xs transition hover:bg-gray-800 dark:bg-white dark:text-gray-950 dark:hover:bg-gray-100">
              Read my story
            </Link>
            <Link href="#services" className="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white/80 px-5 py-3 text-theme-sm font-semibold text-gray-800 shadow-theme-xs backdrop-blur transition hover:bg-white dark:border-gray-700 dark:bg-white/5 dark:text-white dark:hover:bg-white/10">
              See services
            </Link>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {[
              ["Security", "Access and recovery cleanup"],
              ["People", "VA and offshore hiring guardrails"],
              ["Ops", "Dashboards, handoffs, execution rhythm"],
            ].map(([label, copy]) => (
              <div key={label} className="rounded-2xl border border-white/80 bg-white/75 p-4 shadow-theme-xs backdrop-blur dark:border-white/10 dark:bg-white/[0.04]">
                <p className="text-theme-sm font-semibold text-gray-950 dark:text-white">{label}</p>
                <p className="mt-1 text-theme-xs leading-5 text-gray-600 dark:text-gray-400">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Story() {
  return (
    <section id="story" className="col-span-12 grid gap-4 xl:grid-cols-[0.75fr_1.25fr]">
      <div className="rounded-[1.75rem] border border-gray-200 bg-gray-950 p-6 text-white shadow-theme-xs dark:border-gray-800 lg:p-8">
        <p className="text-theme-xs font-semibold uppercase tracking-[0.24em] text-brand-300">My story</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Cyber Ethos is personal before it is technical.</h2>
        <p className="mt-5 text-theme-md leading-7 text-white/70">
          I learned trust the hard way: through war, immigration, military service, nonprofit work, and leading teams through messy operations. Cyber Ethos exists because security is not just software. It is people, access, process, handoff, and judgment.
        </p>
      </div>
      <div className="rounded-[1.75rem] border border-gray-200 bg-white p-6 shadow-theme-xs dark:border-gray-800 dark:bg-white/[0.03] lg:p-8">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {storyPoints.map((point) => (
            <div key={point} className="rounded-2xl border border-gray-100 bg-gray-50 p-4 dark:border-gray-800 dark:bg-gray-900/40">
              <div className="mb-3 h-1.5 w-10 rounded-full bg-brand-500" />
              <p className="text-theme-sm font-semibold leading-6 text-gray-900 dark:text-white/90">{point}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 rounded-2xl border border-brand-100 bg-brand-50 p-5 dark:border-brand-500/20 dark:bg-brand-500/10">
          <p className="text-theme-sm font-semibold text-gray-900 dark:text-white/90">The point is not a resume.</p>
          <p className="mt-2 text-theme-sm leading-6 text-gray-600 dark:text-gray-300">
            The point is judgment. Cyber Ethos brings lived experience, leadership, cybersecurity training, and AI operations work into one practical operating system for owners who need help they can trust.
          </p>
        </div>
      </div>
    </section>
  );
}

function Philosophy() {
  return (
    <section className="col-span-12 rounded-[1.75rem] border border-gray-200 bg-white p-6 shadow-theme-xs dark:border-gray-800 dark:bg-white/[0.03] lg:p-8">
      <div className="mb-6 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-theme-xs font-semibold uppercase tracking-[0.24em] text-brand-600 dark:text-brand-300">Why Cyber Ethos</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-gray-950 dark:text-white">A better way to get help without handing over the keys.</h2>
        </div>
        <Link href="/review" className="inline-flex items-center justify-center rounded-xl bg-brand-500 px-5 py-3 text-theme-sm font-semibold text-white shadow-theme-xs transition hover:bg-brand-600">
          Request a review
        </Link>
      </div>
      <div className="grid gap-4 lg:grid-cols-3">
        {principles.map((item) => (
          <article key={item.title} className="rounded-2xl border border-gray-100 bg-gray-50 p-5 dark:border-gray-800 dark:bg-gray-900/40">
            <h3 className="text-xl font-semibold tracking-tight text-gray-950 dark:text-white">{item.title}</h3>
            <p className="mt-3 text-theme-sm leading-6 text-gray-600 dark:text-gray-400">{item.copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="col-span-12 rounded-[1.75rem] border border-gray-200 bg-[#F8FAFC] p-6 shadow-theme-xs dark:border-gray-800 dark:bg-gray-900/40 lg:p-8">
      <div className="mb-7 max-w-3xl">
        <p className="text-theme-xs font-semibold uppercase tracking-[0.24em] text-brand-600 dark:text-brand-300">Services</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-gray-950 dark:text-white">Start with the story. Then choose the help you need.</h2>
        <p className="mt-3 text-theme-md leading-7 text-gray-600 dark:text-gray-400">
          Each service is designed to create control first: clear roles, clean access, safer handoffs, and practical execution.
        </p>
      </div>
      <div className="grid gap-4 lg:grid-cols-2">
        {services.map((service) => (
          <Link key={service.title} href={service.href} className="group rounded-[1.4rem] border border-gray-200 bg-white p-5 shadow-theme-xs transition hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-theme-md dark:border-gray-800 dark:bg-white/[0.03] dark:hover:border-brand-500/40">
            <div className="flex items-start justify-between gap-4">
              <span className="text-theme-xs font-bold uppercase tracking-[0.28em] text-brand-500">{service.number}</span>
              <span className="rounded-full border border-gray-200 px-3 py-1 text-theme-xs font-semibold text-gray-500 transition group-hover:border-brand-200 group-hover:text-brand-600 dark:border-gray-700 dark:text-gray-400">Open service</span>
            </div>
            <h3 className="mt-5 text-2xl font-semibold tracking-tight text-gray-950 dark:text-white">{service.title}</h3>
            <p className="mt-3 text-theme-sm leading-6 text-gray-600 dark:text-gray-400">{service.copy}</p>
            <div className="mt-5 rounded-2xl bg-gray-50 p-4 text-theme-sm leading-6 text-gray-600 dark:bg-gray-900/50 dark:text-gray-300">
              <span className="font-semibold text-gray-950 dark:text-white">What you get: </span>{service.deliverable}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

function DashboardPreview() {
  return (
    <section className="col-span-12 grid gap-4 xl:grid-cols-[1.05fr_0.95fr]">
      <div className="rounded-[1.75rem] border border-gray-200 bg-white p-6 shadow-theme-xs dark:border-gray-800 dark:bg-white/[0.03] lg:p-8">
        <p className="text-theme-xs font-semibold uppercase tracking-[0.24em] text-brand-600 dark:text-brand-300">Cyber Ethos operating view</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-gray-950 dark:text-white">A clear view of what is messy, risky, or stuck.</h2>
        <p className="mt-4 text-theme-md leading-7 text-gray-600 dark:text-gray-400">
          The dashboard idea stays, but it becomes proof of the method instead of the opening message. The work is to help owners see risk, ownership, delegation, and execution in plain English.
        </p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {proofCards.map((card) => (
            <div key={card} className="rounded-2xl border border-gray-100 bg-gray-50 p-4 dark:border-gray-800 dark:bg-gray-900/40">
              <p className="text-theme-sm font-semibold leading-6 text-gray-900 dark:text-white/90">{card}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="rounded-[1.75rem] border border-gray-200 bg-gray-950 p-5 text-white shadow-theme-xs dark:border-gray-800">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="text-theme-sm font-semibold">Example review board</p>
            <p className="text-theme-xs text-white/50">Illustrative signals, not client data.</p>
          </div>
          <span className="rounded-full bg-amber-400/15 px-3 py-1 text-theme-xs font-semibold text-amber-200">Needs baseline</span>
        </div>
        <div className="space-y-3">
          {[
            ["Admin access", "Former vendor still has elevated access", "High"],
            ["VA handoff", "Assistant needs scope without full account exposure", "Medium"],
            ["Recovery", "Domain, files, and passwords need ownership map", "Unknown"],
            ["Execution", "Founder is still project manager for every loose end", "Costly"],
          ].map(([label, copy, status]) => (
            <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
              <div className="flex items-center justify-between gap-3">
                <p className="text-theme-sm font-semibold">{label}</p>
                <span className="rounded-full bg-white/10 px-2.5 py-1 text-theme-xs font-semibold text-white/70">{status}</span>
              </div>
              <p className="mt-2 text-theme-xs leading-5 text-white/55">{copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Influences() {
  return (
    <section className="col-span-12 rounded-[1.75rem] border border-gray-200 bg-white p-6 shadow-theme-xs dark:border-gray-800 dark:bg-white/[0.03] lg:p-8">
      <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div>
          <p className="text-theme-xs font-semibold uppercase tracking-[0.24em] text-brand-600 dark:text-brand-300">Design direction</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-gray-950 dark:text-white">Inspired by the best open-source design systems. Built for this story.</h2>
        </div>
        <div className="flex flex-wrap gap-3">
          {openSourceInfluences.map((item) => (
            <span key={item} className="rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-theme-sm font-semibold text-gray-700 dark:border-gray-800 dark:bg-gray-900/50 dark:text-gray-300">{item}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="col-span-12 overflow-hidden rounded-[1.75rem] border border-brand-100 bg-brand-50 p-6 shadow-theme-xs dark:border-brand-500/20 dark:bg-brand-500/10 lg:p-8">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-950 dark:text-white">Tell me what feels messy, risky, understaffed, or stuck.</h2>
          <p className="mt-3 text-theme-md leading-7 text-gray-600 dark:text-gray-300">
            Start with a practical review. Leave with a clearer first move for security, delegation, offshore support, or operations.
          </p>
        </div>
        <Link href="/review" className="inline-flex shrink-0 items-center justify-center rounded-xl bg-gray-950 px-5 py-3 text-theme-sm font-semibold text-white shadow-theme-xs transition hover:bg-gray-800 dark:bg-white dark:text-gray-950 dark:hover:bg-gray-100">
          Request a Security & Ops Review
        </Link>
      </div>
    </section>
  );
}

export default function FounderPortfolioHome() {
  return (
    <div className="grid grid-cols-12 gap-4 md:gap-6">
      <Hero />
      <Story />
      <Philosophy />
      <Services />
      <DashboardPreview />
      <Influences />
      <FinalCta />
    </div>
  );
}
