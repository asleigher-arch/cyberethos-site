import type { Metadata } from "next";
import Link from "next/link";
import { EcommerceMetrics } from "@/components/ecommerce/EcommerceMetrics";
import React from "react";
import MonthlyTarget from "@/components/ecommerce/MonthlyTarget";
import MonthlySalesChart from "@/components/ecommerce/MonthlySalesChart";
import StatisticsChart from "@/components/ecommerce/StatisticsChart";
import RecentOrders from "@/components/ecommerce/RecentOrders";
import DemographicCard from "@/components/ecommerce/DemographicCard";

const reviewHref =
  "mailto:info@cyberethos.org?subject=Cyber%20Ethos%20Security%20%26%20Ops%20Review&body=What%20feels%20messy%2C%20risky%2C%20understaffed%2C%20or%20stuck%3F%0A%0AWhat%20systems%2C%20accounts%2C%20vendors%2C%20or%20workflows%20are%20involved%3F%0A%0ADo%20you%20need%20security%20cleanup%2C%20a%20virtual%20assistant%2C%20offshore%20engineering%20help%2C%20or%20ops%20leadership%20support%3F%0A%0AWhat%20would%20a%20good%20outcome%20look%20like%3F";

export const metadata: Metadata = {
  title: "Cyber Ethos | Security & Ops Review",
  description:
    "Cyber Ethos helps small teams clean up risky access, messy workflows, vendor gaps, and staffing needs through practical security and operations reviews.",
};

const storyPoints = [
  {
    label: "Lived security experience",
    text: "Veteran and former interpreter. Built around trust, pressure, and real stakes.",
  },
  {
    label: "Operations leadership",
    text: "Chief of Staff experience leading teams and driving execution.",
  },
  {
    label: "Practical cleanup",
    text: "Helping people and teams replace chaos with systems that actually work.",
  },
  {
    label: "Cyber, AI, and access risk",
    text: "Safer access, cleaner workflows, smarter hiring, and better control.",
  },
];

const services = [
  {
    title: "Security & Access Cleanup",
    description:
      "A practical review of accounts, devices, backups, passwords, admin access, MFA, and obvious security gaps before they become expensive problems.",
    items: ["Access review", "MFA/password cleanup", "Backup check"],
  },
  {
    title: "VA Hiring & Handoff System",
    description:
      "Find and set up a part-time or full-time virtual assistant with clear roles, secure access, handoffs, and follow-through so delegation does not create more chaos.",
    items: ["Part-time or full-time VA", "Role design", "Safe handoffs"],
  },
  {
    title: "Offshore Engineering Setup",
    description:
      "Support finding and structuring offshore engineering help for websites, product work, automation, and technical operations with clear scope and accountable delivery.",
    items: ["Developer sourcing", "Scope review", "Delivery process"],
  },
  {
    title: "Chief of Staff Ops Support",
    description:
      "Chief-of-staff style support for owners and teams that need clearer priorities, accountability, reporting, and execution across people, tools, vendors, and workflows.",
    items: ["Team coordination", "Execution rhythm", "Dashboards/reporting"],
  },
];

const proofCards = [
  "Veteran-led, founder-operated, and built for real-world pressure.",
  "Chief of Staff experience leading teams and operations.",
  "Clear cleanup plans, not bloated consulting reports.",
];

const reviewSteps = [
  "Tell me what feels messy, risky, understaffed, or stuck.",
  "I review accounts, access, tools, vendors, workflows, and staffing gaps.",
  "You get a prioritized cleanup plan: urgent, later, delegate, or fix first.",
  "We handle the highest-risk items before adding more people or tools.",
];

const trustBullets = [
  "No passwords needed to start.",
  "The first review focuses on structure, risk, priorities, and next steps.",
  "Sensitive access only comes later with a clear scope and safe process.",
];

export default function CyberEthosPortfolio() {
  return (
    <div className="space-y-6">
      <section className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-theme-xs dark:border-gray-800 dark:bg-white/[0.03]">
        <div className="grid gap-8 p-6 lg:grid-cols-[1.1fr_0.9fr] lg:p-10">
          <div className="flex flex-col justify-center">
            <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700 dark:border-brand-500/30 dark:bg-brand-500/10 dark:text-brand-300">
              Security & ops review
            </div>
            <h1 className="max-w-4xl text-title-md font-bold tracking-tight text-gray-900 dark:text-white lg:text-title-lg">
              Practical security and operations cleanup for teams that feel messy, risky, or understaffed.
            </h1>
            <p className="mt-5 max-w-3xl text-theme-xl text-gray-600 dark:text-gray-300">
              Cyber Ethos helps small business owners and mission-driven teams review risky accounts, messy workflows, vendor access, backup gaps, and staffing needs — then turn it into a clear plan for what to fix first.
            </p>
            <p className="mt-4 max-w-3xl text-sm font-medium text-gray-500 dark:text-gray-400">
              Review areas: accounts, MFA, passwords, backups, vendors, workflows, VA readiness, and offshore engineering needs.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href={reviewHref}
                className="inline-flex items-center justify-center rounded-lg bg-brand-500 px-5 py-3 text-sm font-medium text-white shadow-theme-xs hover:bg-brand-600"
              >
                Request a Security & Ops Review
              </Link>
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-5 py-3 text-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-white/[0.03]"
              >
                See Services
              </a>
              <a
                href="#story"
                className="inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              >
                Read Azad&apos;s Story
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-gray-50 p-5 dark:border-gray-800 dark:bg-gray-900/60">
            <div className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-theme-xs dark:bg-white/[0.04]">
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-gray-900 text-xl font-bold text-white dark:bg-brand-500">
                AS
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900 dark:text-white">
                  Azad Sleigher
                </p>
                <p className="mt-1 text-theme-sm text-gray-500 dark:text-gray-400">
                  Veteran · Interpreter · Chief of Staff · Cybersecurity
                </p>
              </div>
            </div>

            <div className="mt-5 grid gap-3">
              {proofCards.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-gray-200 bg-white p-4 text-sm font-medium text-gray-700 dark:border-gray-800 dark:bg-white/[0.03] dark:text-gray-300"
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-2xl bg-gray-900 p-5 text-white dark:bg-black">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-brand-300">
                Operating principle
              </p>
              <p className="mt-3 text-lg font-semibold leading-7">
                Technology should give people more control, not more confusion.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="story" className="rounded-3xl border border-gray-200 bg-white p-6 shadow-theme-xs dark:border-gray-800 dark:bg-white/[0.03] lg:p-8">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-semibold text-brand-500">The story</p>
            <h2 className="mt-2 text-title-sm font-bold text-gray-900 dark:text-white">
              Built for people who need control back.
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Cyber Ethos exists to help owners, operators, and small teams clean up risky access, unclear roles, overloaded workflows, and staffing gaps. The goal is simple: reduce risk, restore control, and leave you with a plan you can actually use.
            </p>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            {storyPoints.map((point) => (
              <div
                key={point.label}
                className="rounded-2xl border border-gray-200 bg-gray-50 p-4 dark:border-gray-800 dark:bg-gray-900/50"
              >
                <p className="text-sm font-semibold text-gray-900 dark:text-white">
                  {point.label}
                </p>
                <p className="mt-2 text-theme-xs leading-5 text-gray-600 dark:text-gray-400">
                  {point.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid grid-cols-12 gap-4 md:gap-6" aria-label="Cyber Ethos operating dashboard preview">
        <div className="col-span-12">
          <div className="mb-2 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold text-brand-500">Example risk dashboard</p>
              <h2 className="mt-1 text-title-sm font-bold text-gray-900 dark:text-white">
                From public risk signals to a practical cleanup plan.
              </h2>
              <p className="mt-2 max-w-3xl text-gray-600 dark:text-gray-400">
                These are example public risk signals, not client data. They show the kinds of issues Cyber Ethos helps teams understand, prioritize, and clean up.
              </p>
            </div>
            <Link
              href={reviewHref}
              className="inline-flex items-center justify-center rounded-lg border border-brand-200 bg-brand-50 px-4 py-2.5 text-sm font-medium text-brand-700 hover:bg-brand-100 dark:border-brand-500/30 dark:bg-brand-500/10 dark:text-brand-300"
            >
              Check my risk areas
            </Link>
          </div>
        </div>

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

        <div className="col-span-12 xl:col-span-5">
          <DemographicCard />
        </div>

        <div className="col-span-12 xl:col-span-7">
          <RecentOrders />
        </div>
      </section>

      <section id="services" className="rounded-3xl border border-gray-200 bg-white p-6 shadow-theme-xs dark:border-gray-800 dark:bg-white/[0.03] lg:p-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-brand-500">Services</p>
          <h2 className="mt-2 text-title-sm font-bold text-gray-900 dark:text-white">
            Practical help for people who need control back.
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Most business problems are connected: risky access, unclear ownership, overloaded teams, and contractors without structure. Cyber Ethos helps you clean up the system before adding more tools or people.
          </p>
        </div>

        <div className="mt-7 grid gap-5 lg:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-gray-200 bg-gray-50 p-5 dark:border-gray-800 dark:bg-gray-900/50"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {service.title}
              </h3>
              <p className="mt-3 text-theme-sm leading-6 text-gray-600 dark:text-gray-400">
                {service.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {service.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-medium text-gray-600 dark:border-gray-700 dark:bg-white/[0.03] dark:text-gray-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-theme-xs dark:border-gray-800 dark:bg-white/[0.03] lg:p-8">
          <p className="text-sm font-semibold text-brand-500">How the review works</p>
          <h2 className="mt-2 text-title-sm font-bold text-gray-900 dark:text-white">
            Simple enough to start. Structured enough to matter.
          </h2>
          <div className="mt-6 space-y-4">
            {reviewSteps.map((step, index) => (
              <div key={step} className="flex gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-50 text-sm font-semibold text-brand-600 dark:bg-brand-500/10 dark:text-brand-300">
                  {index + 1}
                </span>
                <p className="text-sm leading-6 text-gray-600 dark:text-gray-400">{step}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-gray-200 bg-gray-50 p-6 shadow-theme-xs dark:border-gray-800 dark:bg-gray-900/50 lg:p-8">
          <p className="text-sm font-semibold text-brand-500">Trust and confidentiality</p>
          <h2 className="mt-2 text-title-sm font-bold text-gray-900 dark:text-white">
            Start without exposing sensitive access.
          </h2>
          <div className="mt-6 space-y-3">
            {trustBullets.map((item) => (
              <div key={item} className="rounded-2xl border border-gray-200 bg-white p-4 text-sm font-medium text-gray-700 dark:border-gray-800 dark:bg-white/[0.03] dark:text-gray-300">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="rounded-3xl bg-gray-900 p-6 text-white shadow-theme-xs dark:bg-black lg:p-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-sm font-semibold text-brand-300">Start simple</p>
            <h2 className="mt-2 text-title-sm font-bold">
              Tell me what feels messy, risky, understaffed, or stuck.
            </h2>
            <p className="mt-3 max-w-2xl text-gray-300">
              I will help turn it into a practical first plan: what matters, what can wait, what to fix first, and whether a VA or offshore engineer can take work off your plate.
            </p>
          </div>
          <Link
            href={reviewHref}
            className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-100"
          >
            Request a Security & Ops Review
          </Link>
        </div>
      </section>
    </div>
  );
}
