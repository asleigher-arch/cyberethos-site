import React from "react";
import Link from "next/link";

const reviewEmail =
  "mailto:info@cyberethos.org?subject=Request%20a%20Security%20%26%20Ops%20Review&body=Hi%20Cyber%20Ethos%2C%0A%0AI%27d%20like%20to%20request%20a%20Security%20%26%20Ops%20Review.%0A%0ABusiness%20name%3A%0AWebsite%3A%0AWhat%20feels%20messy%20or%20risky%3A%0ATools%20we%20use%3A%0AStaff%2FVA%2Fcontractor%20access%20concerns%3A%0ABest%20contact%20email%2Fphone%3A%0A%0AThanks.%0A";

export default function SidebarWidget() {
  return (
    <div
      className={`
        mx-auto mb-10 w-full max-w-60 rounded-2xl bg-gray-50 px-4 py-5 text-center dark:bg-white/[0.03]`}
    >
      <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">
        Need a cleanup plan?
      </h3>
      <p className="mb-4 text-gray-500 text-theme-sm dark:text-gray-400">
        Start with a practical review of access, tools, vendors, workflows, and handoff risk.
      </p>
      <Link
        href={reviewEmail}
        className="flex items-center justify-center p-3 font-medium text-white rounded-lg bg-brand-500 text-theme-sm hover:bg-brand-600"
      >
        Request Review
      </Link>
    </div>
  );
}
