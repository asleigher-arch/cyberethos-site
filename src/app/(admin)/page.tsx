import type { Metadata } from "next";
import Link from "next/link";
import { EcommerceMetrics } from "@/components/ecommerce/EcommerceMetrics";
import React from "react";
import MonthlyTarget from "@/components/ecommerce/MonthlyTarget";
import MonthlySalesChart from "@/components/ecommerce/MonthlySalesChart";
import StatisticsChart from "@/components/ecommerce/StatisticsChart";
import RecentOrders from "@/components/ecommerce/RecentOrders";
import DemographicCard from "@/components/ecommerce/DemographicCard";

export const metadata: Metadata = {
  title: "Cyber Ethos Security & Ops Review",
  description:
    "Request a practical Cyber Ethos review of access, tools, vendors, workflows, staffing gaps, and operational risk.",
};

function ReviewHero() {
  return (
    <section className="col-span-12 overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-white/[0.03] lg:p-8">
      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div>
          <span className="inline-flex rounded-full bg-brand-50 px-3 py-1 text-theme-xs font-semibold text-brand-600 dark:bg-brand-500/15 dark:text-brand-300">
            Cyber Ethos front-door review
          </span>
          <h1 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight text-gray-900 dark:text-white/90 sm:text-4xl">
            Find the messy, risky, or stuck parts of your business before they become expensive.
          </h1>
          <p className="mt-4 max-w-2xl text-theme-md leading-7 text-gray-600 dark:text-gray-400">
            Cyber Ethos reviews access, tools, vendors, workflows, backups, staffing gaps, and handoff risk. No passwords needed to start. You get a practical cleanup plan and the first few moves to make.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/review"
              className="inline-flex items-center justify-center rounded-lg bg-brand-500 px-5 py-3 text-theme-sm font-semibold text-white shadow-theme-xs hover:bg-brand-600"
            >
              Request a Security & Ops Review
            </Link>
            <Link
              href="#what-we-review"
              className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-5 py-3 text-theme-sm font-semibold text-gray-700 shadow-theme-xs hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300"
            >
              See what we review
            </Link>
          </div>
        </div>

        <div className="rounded-2xl border border-gray-100 bg-gray-50 p-5 dark:border-gray-800 dark:bg-gray-900/40">
          <p className="text-theme-sm font-semibold text-gray-800 dark:text-white/90">
            What you get
          </p>
          <ul className="mt-4 space-y-3 text-theme-sm text-gray-600 dark:text-gray-400">
            <li>• Top security and access risks</li>
            <li>• Cleanup priorities for tools, vendors, and workflows</li>
            <li>• Delegation and VA handoff opportunities</li>
            <li>• Next-step plan for remediation or operating support</li>
          </ul>
          <div className="mt-5 rounded-xl bg-white p-4 text-theme-sm text-gray-600 shadow-theme-xs dark:bg-white/[0.03] dark:text-gray-400">
            Best for owners and lean teams that know things are messy, but do not know what to fix first.
          </div>
        </div>
      </div>
    </section>
  );
}

function ReviewFunnel() {
  const reviewAreas = [
    "Admin accounts, MFA, passwords, and shared access",
    "Vendor, VA, contractor, and offshore handoffs",
    "Backups, files, websites, cloud apps, and recovery gaps",
    "Workflow bottlenecks, overloaded owners, and unclear ownership",
    "The first remediation plan: what to fix now, next, and later",
  ];

  const servicePaths = [
    {
      title: "Security & Access Cleanup",
      copy: "Tighten admin accounts, MFA, password practices, files, cloud tools, website risk, and basic recovery gaps.",
    },
    {
      title: "VA Hiring & Handoff",
      copy: "Design safer delegation: roles, SOPs, account boundaries, onboarding, offboarding, and owner check-ins.",
    },
    {
      title: "Offshore Engineering Setup",
      copy: "Set up technical execution with clearer scope, access rules, review cycles, GitHub/project hygiene, and handoff controls.",
    },
  ];

  const processSteps = [
    "15-minute intake to understand the mess and urgency",
    "Outside-in review of public signals and likely control gaps",
    "Cleanup roadmap: fix now, next, later",
    "Optional execution support if you want Cyber Ethos to help clean it up",
  ];

  return (
    <>
      <section id="what-we-review" className="col-span-12 grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-white/[0.03]">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white/90">
            What Cyber Ethos reviews
          </h2>
          <p className="mt-2 text-theme-sm leading-6 text-gray-500 dark:text-gray-400">
            This is not an enterprise audit. It is a practical business-control review for small teams that need clarity, cleanup, and safer execution.
          </p>
          <ul className="mt-5 space-y-3">
            {reviewAreas.map((item) => (
              <li key={item} className="flex gap-3 text-theme-sm text-gray-700 dark:text-gray-300">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-50 text-xs font-bold text-brand-600 dark:bg-brand-500/15 dark:text-brand-300">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-brand-100 bg-brand-50 p-6 dark:border-brand-500/20 dark:bg-brand-500/10">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white/90">
            Start with a few details
          </h2>
          <p className="mt-2 text-theme-sm leading-6 text-gray-600 dark:text-gray-400">
            The request page collects the basics and opens a prepared email. No login. No private credentials. Just enough context to start the review.
          </p>
          <ul className="mt-5 space-y-3">
            {["Name, company, email, and website", "Biggest operational or security concern", "Urgency: this week, this month, or before hiring", "A clear path to schedule the review"].map((item) => (
              <li key={item} className="rounded-xl bg-white px-4 py-3 text-theme-sm font-medium text-gray-700 shadow-theme-xs dark:bg-white/[0.05] dark:text-gray-300">
                {item}
              </li>
            ))}
          </ul>
          <Link
            href="/review"
            className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-brand-500 px-5 py-3 text-theme-sm font-semibold text-white shadow-theme-xs hover:bg-brand-600"
          >
            Open review request form
          </Link>
        </div>
      </section>

      <section id="service-paths" className="col-span-12 rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-white/[0.03]">
        <div className="mb-6 flex flex-col gap-2 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white/90">Three ways Cyber Ethos helps</h2>
            <p className="mt-2 max-w-2xl text-theme-sm leading-6 text-gray-500 dark:text-gray-400">
              The review points to one of these practical cleanup paths instead of dumping a generic report on the owner.
            </p>
          </div>
          <Link href="/review" className="inline-flex items-center justify-center rounded-lg bg-brand-500 px-4 py-2.5 text-theme-sm font-semibold text-white shadow-theme-xs hover:bg-brand-600">
            Request Review
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {servicePaths.map((path) => (
            <article key={path.title} className="rounded-2xl border border-gray-100 bg-gray-50 p-5 dark:border-gray-800 dark:bg-gray-900/40">
              <h3 className="text-theme-md font-semibold text-gray-900 dark:text-white/90">{path.title}</h3>
              <p className="mt-3 text-theme-sm leading-6 text-gray-600 dark:text-gray-400">{path.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="process" className="col-span-12 rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-white/[0.03]">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white/90">What happens after you request a review</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-4">
          {processSteps.map((step, index) => (
            <div key={step} className="rounded-xl border border-gray-100 bg-white p-4 shadow-theme-xs dark:border-gray-800 dark:bg-white/[0.02]">
              <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-brand-50 text-theme-sm font-bold text-brand-600 dark:bg-brand-500/15 dark:text-brand-300">{index + 1}</div>
              <p className="text-theme-sm leading-6 text-gray-700 dark:text-gray-300">{step}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default function SecurityOperations() {
  return (
    <div className="grid grid-cols-12 gap-4 md:gap-6">
      <ReviewHero />

      <div className="col-span-12 space-y-6 xl:col-span-7">
        <EcommerceMetrics />

        <MonthlySalesChart />
      </div>

      <div className="col-span-12 xl:col-span-5">
        <MonthlyTarget />
      </div>

      <div className="col-span-12">
        <StatisticsChart />
      </div>

      <ReviewFunnel />

      <div className="col-span-12 xl:col-span-5">
        <DemographicCard />
      </div>

      <div className="col-span-12 xl:col-span-7">
        <RecentOrders />
      </div>
    </div>
  );
}
