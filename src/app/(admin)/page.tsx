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
  title: "Cyber Ethos | Azad Sleigher",
  description:
    "The personal story, mission, and services behind Cyber Ethos: cybersecurity cleanup, AI operations, and practical digital resilience.",
};

const storyPoints = [
  {
    label: "Service",
    text: "Marine Corps veteran and former Iraq Special Operations interpreter who understands trust, pressure, and real-world consequences.",
  },
  {
    label: "Leadership",
    text: "Chief of Staff with hands-on experience leading teams, coordinating moving parts, and turning scattered work into disciplined execution.",
  },
  {
    label: "Mission",
    text: "Still connected to service through nonprofit operations supporting allies, refugees, veterans, and families who need systems that actually work.",
  },
  {
    label: "Cyber + AI",
    text: "Cybersecurity graduate student and AI operations builder focused on helping people regain control of tools, access, workflows, hiring, and risk.",
  },
];

const services = [
  {
    title: "Digital Security Review",
    description:
      "A practical cleanup of accounts, devices, backups, passwords, admin access, MFA, and obvious security gaps before they become expensive problems.",
    items: ["Access review", "MFA and password cleanup", "Backup and recovery check"],
  },
  {
    title: "Virtual Assistant Hiring",
    description:
      "Help finding and setting up part-time or full-time virtual assistants so business owners can delegate repeatable work without losing control of access, quality, or follow-through.",
    items: ["Part-time VA support", "Full-time VA support", "Role design and handoffs"],
  },
  {
    title: "Offshore Engineering Hiring",
    description:
      "Support finding affordable offshore engineering help for product, websites, automation, and technical operations at a much lower cost than local in-person hiring.",
    items: ["Developer sourcing", "Technical scope review", "Secure access and delivery process"],
  },
  {
    title: "Ops Leadership Support",
    description:
      "Chief-of-staff style help for owners and teams that need better structure, accountability, reporting, and execution across people, tools, and vendors.",
    items: ["Team coordination", "Execution rhythm", "Dashboards and reporting"],
  },
];

const proofCards = [
  "Built from lived experience, not buzzwords.",
  "Chief of Staff experience leading teams and operations.",
  "Focused on cleanup, control, and usable systems.",
];

export default function CyberEthosPortfolio() {
  return (
    <div className="space-y-6">
      <section className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-theme-xs dark:border-gray-800 dark:bg-white/[0.03]">
        <div className="grid gap-8 p-6 lg:grid-cols-[1.1fr_0.9fr] lg:p-10">
          <div className="flex flex-col justify-center">
            <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700 dark:border-brand-500/30 dark:bg-brand-500/10 dark:text-brand-300">
              Cyber Ethos founder story
            </div>
            <h1 className="max-w-4xl text-title-md font-bold tracking-tight text-gray-900 dark:text-white lg:text-title-lg">
              Built from service, survival, security, and systems.
            </h1>
            <p className="mt-5 max-w-3xl text-theme-xl text-gray-600 dark:text-gray-300">
              I am Azad Sleigher. Cyber Ethos is where my story meets the work: helping people and organizations clean up digital chaos, hire smarter support, protect trust, and build operations that hold up under pressure.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href="#story"
                className="inline-flex items-center justify-center rounded-lg bg-brand-500 px-5 py-3 text-sm font-medium text-white shadow-theme-xs hover:bg-brand-600"
              >
                Read the story
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-5 py-3 text-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-white/[0.03]"
              >
                See services
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
              Why Cyber Ethos exists
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Cyber Ethos is not just a services page. It is the product of a life shaped by trust, risk, service, leadership, adaptation, and rebuilding teams and systems when the stakes are real.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {storyPoints.map((point) => (
              <div
                key={point.label}
                className="rounded-2xl border border-gray-200 bg-gray-50 p-5 dark:border-gray-800 dark:bg-gray-900/50"
              >
                <p className="text-sm font-semibold text-gray-900 dark:text-white">
                  {point.label}
                </p>
                <p className="mt-3 text-theme-sm leading-6 text-gray-600 dark:text-gray-400">
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
              <p className="text-sm font-semibold text-brand-500">Operating dashboard</p>
              <h2 className="mt-1 text-title-sm font-bold text-gray-900 dark:text-white">
                The dashboard stays, but now it has a purpose.
              </h2>
              <p className="mt-2 max-w-3xl text-gray-600 dark:text-gray-400">
                This visual system shows the kind of public risk signals Cyber Ethos watches: scattered threats, messy access, global cyber flags, and the cleanup moves that bring control back.
              </p>
            </div>
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
            Start with a focused review. Leave with clear cleanup moves, safer access, better workflows, and a practical hiring/support plan for virtual assistants or offshore engineering help when that is the smarter move.
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
            href="mailto:info@cyberethos.org?subject=Cyber%20Ethos%20review&body=What%20feels%20messy%2C%20risky%2C%20understaffed%2C%20or%20stuck%3F%0A%0AWhat%20systems%20or%20accounts%20are%20involved%3F%0A%0ADo%20you%20need%20security%20cleanup%2C%20a%20virtual%20assistant%2C%20offshore%20engineering%20help%2C%20or%20ops%20leadership%20support%3F%0A%0AWhat%20would%20a%20good%20outcome%20look%20like%3F"
            className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-100"
          >
            Request a review
          </Link>
        </div>
      </section>
    </div>
  );
}
