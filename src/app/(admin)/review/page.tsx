import type { Metadata } from "next";
import Link from "next/link";
import ReviewRequestForm from "@/components/review/ReviewRequestForm";

export const metadata: Metadata = {
  title: "Request a Security & Ops Review | Cyber Ethos",
  description:
    "Start a practical Cyber Ethos review of access, tools, vendors, workflows, staffing gaps, and operational risk.",
};

const steps = [
  {
    title: "1. Intake",
    copy: "You send the basics: website, company, current mess, urgency, and contact info.",
  },
  {
    title: "2. Outside-in review",
    copy: "Cyber Ethos looks at public-facing risk signals and likely control gaps without needing credentials.",
  },
  {
    title: "3. Cleanup roadmap",
    copy: "You get the first fixes to make, what can wait, and where execution support would help.",
  },
];

const paths = [
  "Security & Access Cleanup",
  "VA Hiring & Handoff",
  "Offshore Engineering Setup",
];

export default function ReviewPage() {
  return (
    <div className="grid grid-cols-12 gap-4 md:gap-6">
      <section className="col-span-12 xl:col-span-8">
        <ReviewRequestForm />
      </section>

      <aside className="col-span-12 space-y-6 xl:col-span-4">
        <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-white/[0.03]">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white/90">
            Good fit
          </h2>
          <p className="mt-3 text-theme-sm leading-6 text-gray-600 dark:text-gray-400">
            Owners and lean teams that need cleaner access, safer delegation, better handoffs, and fewer operational blind spots before buying more tools.
          </p>
          <div className="mt-5 space-y-3">
            {paths.map((path) => (
              <div key={path} className="rounded-xl border border-gray-100 bg-gray-50 px-4 py-3 text-theme-sm font-medium text-gray-700 dark:border-gray-800 dark:bg-gray-900/40 dark:text-gray-300">
                {path}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-brand-100 bg-brand-50 p-6 dark:border-brand-500/20 dark:bg-brand-500/10">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white/90">
            What happens next
          </h2>
          <div className="mt-5 space-y-4">
            {steps.map((step) => (
              <div key={step.title}>
                <h3 className="text-theme-sm font-semibold text-gray-900 dark:text-white/90">{step.title}</h3>
                <p className="mt-1 text-theme-sm leading-6 text-gray-600 dark:text-gray-400">{step.copy}</p>
              </div>
            ))}
          </div>
        </div>

        <Link href="/" className="inline-flex w-full items-center justify-center rounded-lg border border-gray-300 bg-white px-5 py-3 text-theme-sm font-semibold text-gray-700 shadow-theme-xs hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300">
          Back to review snapshot
        </Link>
      </aside>
    </div>
  );
}
