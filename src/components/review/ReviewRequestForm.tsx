"use client";

import React, { FormEvent, useMemo, useState } from "react";

const encode = (value: string) => encodeURIComponent(value.trim());

type FormState = {
  name: string;
  organization: string;
  email: string;
  website: string;
  issue: string;
  urgency: string;
};

const initialState: FormState = {
  name: "",
  organization: "",
  email: "",
  website: "",
  issue: "",
  urgency: "This month",
};

export default function ReviewRequestForm() {
  const [form, setForm] = useState<FormState>(initialState);

  const mailto = useMemo(() => {
    const subject = `Cybersecurity review request${form.organization ? ` - ${form.organization}` : ""}`;
    const body = [
      "Hi Cyber Ethos,",
      "",
      "I'd like to request a cybersecurity review.",
      "",
      `Name: ${form.name}`,
      `Organization: ${form.organization}`,
      `Email: ${form.email}`,
      `Website / target scope: ${form.website}`,
      `Primary concern: ${form.issue}`,
      `Urgency: ${form.urgency}`,
      "",
      "I understand not to send passwords, private credentials, or sensitive data in this first message.",
      "",
      "Thanks.",
    ].join("\n");

    return `mailto:info@cyberethos.org?subject=${encode(subject)}&body=${encode(body)}`;
  }, [form]);

  const updateField = (field: keyof FormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    window.location.href = mailto;
  };

  const inputClass =
    "h-11 w-full rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-theme-sm text-gray-800 shadow-theme-xs outline-hidden placeholder:text-gray-400 focus:border-brand-300 focus:ring-3 focus:ring-brand-500/10 dark:border-gray-800 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30";

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-theme-sm dark:border-gray-800 dark:bg-white/[0.03] lg:p-8">
      <div>
        <span className="inline-flex rounded-full bg-brand-50 px-3 py-1 text-theme-xs font-semibold text-brand-600 dark:bg-brand-500/15 dark:text-brand-300">
          Start here
        </span>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white/90 sm:text-4xl">
          Request a Cybersecurity Review
        </h1>
        <p className="mt-3 max-w-2xl text-theme-md leading-7 text-gray-600 dark:text-gray-400">
          Send the basics for a cybersecurity audit, penetration test, or website vulnerability review. Do not send passwords, private credentials, or sensitive data in this first message.
        </p>
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-theme-sm font-medium text-gray-700 dark:text-gray-300">Your name</span>
          <input required className={inputClass} value={form.name} onChange={(event) => updateField("name", event.target.value)} placeholder="Jane Smith" />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-theme-sm font-medium text-gray-700 dark:text-gray-300">Organization</span>
          <input required className={inputClass} value={form.organization} onChange={(event) => updateField("organization", event.target.value)} placeholder="Organization name" />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-theme-sm font-medium text-gray-700 dark:text-gray-300">Email</span>
          <input required type="email" className={inputClass} value={form.email} onChange={(event) => updateField("email", event.target.value)} placeholder="you@example.com" />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-theme-sm font-medium text-gray-700 dark:text-gray-300">Website / target scope</span>
          <input className={inputClass} value={form.website} onChange={(event) => updateField("website", event.target.value)} placeholder="https://example.com or approved target scope" />
        </label>
        <label className="block sm:col-span-2">
          <span className="mb-1.5 block text-theme-sm font-medium text-gray-700 dark:text-gray-300">What do you need checked?</span>
          <textarea
            required
            className="min-h-28 w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-theme-sm text-gray-800 shadow-theme-xs outline-hidden placeholder:text-gray-400 focus:border-brand-300 focus:ring-3 focus:ring-brand-500/10 dark:border-gray-800 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30"
            value={form.issue}
            onChange={(event) => updateField("issue", event.target.value)}
            placeholder="Examples: cybersecurity audit, penetration test, website vulnerability detection, exposed login page, weak security headers, suspicious public exposure..."
          />
        </label>
        <label className="block sm:col-span-2">
          <span className="mb-1.5 block text-theme-sm font-medium text-gray-700 dark:text-gray-300">Urgency</span>
          <select className={inputClass} value={form.urgency} onChange={(event) => updateField("urgency", event.target.value)}>
            <option>This week</option>
            <option>This month</option>
            <option>Before launch</option>
            <option>After an incident or scare</option>
            <option>Just need a baseline</option>
          </select>
        </label>
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <button type="submit" className="inline-flex items-center justify-center rounded-lg bg-brand-500 px-5 py-3 text-theme-sm font-semibold text-white shadow-theme-xs hover:bg-brand-600">
          Open email request
        </button>
        <p className="text-theme-sm text-gray-500 dark:text-gray-400">
          This opens your email app with a prepared request to info@cyberethos.org.
        </p>
      </div>
    </form>
  );
}
