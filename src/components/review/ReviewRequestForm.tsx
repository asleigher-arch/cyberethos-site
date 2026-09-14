"use client";

import { FormEvent, useEffect, useId, useMemo, useRef, useState } from "react";
import { Arrow } from "@/components/portfolio/PublicFrame";
import ReassurancePanel from "@/components/review/ReassurancePanel";
import { AlertMark, CheckMark } from "@/components/review/ReviewIcons";
import {
  reviewServiceLabel,
  reviewServiceOptions,
} from "@/components/review/services";

type FieldName = "email" | "concern";

type FormValues = {
  name: string;
  email: string;
  org: string;
  concern: string;
  service: string;
};

const fieldLabels: Record<FieldName, string> = {
  email: "Work email",
  concern: "What needs a closer look?",
};

export function validateEmail(value: string): string | null {
  if (!value.trim()) return "Enter your work email so I can reply.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) {
    return "That email is missing something — check for a typo, e.g. name@company.com.";
  }
  return null;
}

export function validateConcern(value: string): string | null {
  if (!value.trim()) return "Tell me what you run and what concerns you.";
  return null;
}

function buildMailto(values: FormValues): string {
  const lines = [
    "Hi Cyber Ethos,",
    "",
    "I'd like to request a security review.",
    "",
    `Name: ${values.name.trim() || "—"}`,
    `Email: ${values.email.trim()}`,
    `Organization / site: ${values.org.trim() || "—"}`,
    `Preferred service: ${reviewServiceLabel(values.service)}`,
    "",
    "What needs a closer look:",
    values.concern.trim(),
    "",
    "I understand that testing requires explicit authorization and agreed scope.",
    "No passwords, private credentials, or sensitive data are included in this request.",
  ];
  const subject = `Cyber Ethos review request${values.org.trim() ? ` - ${values.org.trim()}` : ""}`;
  return `mailto:info@cyberethos.org?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
}

export default function ReviewRequestForm({
  initialService = "",
}: {
  initialService?: string;
}) {
  const [form, setForm] = useState<FormValues>({
    name: "",
    email: "",
    org: "",
    concern: "",
    service: initialService,
  });
  const [errors, setErrors] = useState<Partial<Record<FieldName, string>>>({});
  const [showSummary, setShowSummary] = useState(false);
  const [status, setStatus] = useState<"idle" | "opening" | "success">("idle");
  const summaryRef = useRef<HTMLDivElement>(null);
  const successRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (status === "success") {
      successRef.current?.focus();
    }
  }, [status]);

  const mailto = useMemo(() => buildMailto(form), [form]);
  const activeErrors = (Object.keys(errors) as FieldName[]).filter(
    (field) => errors[field],
  );

  function update(field: keyof FormValues, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
    if (field === "email" || field === "concern") {
      setErrors((current) => ({ ...current, [field]: undefined }));
    }
  }

  function handleBlur(field: FieldName) {
    const message =
      field === "email"
        ? validateEmail(form.email)
        : validateConcern(form.concern);
    setErrors((current) => ({ ...current, [field]: message ?? undefined }));
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors: Partial<Record<FieldName, string>> = {
      email: validateEmail(form.email) ?? undefined,
      concern: validateConcern(form.concern) ?? undefined,
    };
    setErrors(nextErrors);
    if (nextErrors.email || nextErrors.concern) {
      setShowSummary(true);
      window.requestAnimationFrame(() => summaryRef.current?.focus());
      return;
    }
    setShowSummary(false);
    setStatus("opening");
    window.setTimeout(() => {
      window.location.href = buildMailto(form);
      setStatus("success");
    }, 400);
  }

  if (status === "success") {
    return (
      <section
        ref={successRef}
        tabIndex={-1}
        aria-live="polite"
        className="review-success"
      >
        <span className="review-success-mark" aria-hidden="true">
          <CheckMark />
        </span>
        <h2>Your draft is ready in your email client</h2>
        <p>
          Nothing was stored here. The details you entered were placed into a
          prepared email to <span>info@cyberethos.org</span> — send it and I’ll
          reply, usually within two business days.
        </p>
        <div className="review-success-actions">
          <a href={mailto} className="portfolio-button solid">
            Open the draft again <Arrow diagonal />
          </a>
          <button
            type="button"
            className="review-text-button"
            onClick={() => {
              setForm((current) => ({
                name: "",
                email: "",
                org: "",
                concern: "",
                service: current.service,
              }));
              setErrors({});
              setShowSummary(false);
              setStatus("idle");
            }}
          >
            Start another request
          </button>
        </div>
        <p className="form-help">
          Email client didn’t open? Write to{" "}
          <a href="mailto:info@cyberethos.org">info@cyberethos.org</a> directly.
        </p>
      </section>
    );
  }

  return (
    <form noValidate onSubmit={submit} className="review-form">
      {showSummary && activeErrors.length > 0 && (
        <div
          ref={summaryRef}
          tabIndex={-1}
          role="alert"
          className="review-error-summary"
        >
          <p>
            <AlertMark />
            {activeErrors.length === 1
              ? "1 field still needs an answer"
              : `${activeErrors.length} fields still need an answer`}
          </p>
          <ul>
            {activeErrors.map((field) => (
              <li key={field}>
                <a href={`#${field}`}>{fieldLabels[field]}</a> — {errors[field]}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="review-fields">
        <Field
          id="name"
          label="Full name"
          optional
          value={form.name}
          onChange={(value) => update("name", value)}
          autoComplete="name"
          maxLength={120}
        />
        <Field
          id="email"
          label="Work email"
          type="email"
          required
          value={form.email}
          error={errors.email}
          onChange={(value) => update("email", value)}
          onBlur={() => handleBlur("email")}
          autoComplete="email"
          hint="Where the reply goes."
          maxLength={200}
        />
        <Field
          id="org"
          label="Organization or site URL"
          optional
          value={form.org}
          onChange={(value) => update("org", value)}
          autoComplete="organization"
          placeholder="acme.com"
          maxLength={300}
        />
        <Field
          id="concern"
          label="What needs a closer look?"
          required
          multiline
          value={form.concern}
          error={errors.concern}
          onChange={(value) => update("concern", value)}
          onBlur={() => handleBlur("concern")}
          hint="Main concern and the systems in scope. Plain language is fine."
          placeholder="We run a customer portal on AWS and a WordPress marketing site. Worried about the login flow and an old admin plugin."
          maxLength={1800}
        />
        <div className="review-field">
          <label htmlFor="service">
            Preferred service <span className="field-flag">Optional</span>
          </label>
          <select
            id="service"
            name="service"
            value={form.service}
            onChange={(event) => update("service", event.target.value)}
          >
            {reviewServiceOptions.map((option) => (
              <option key={option.value || "not-sure"} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="review-reassure-mobile">
        <ReassurancePanel compact />
      </div>

      <div className="form-actions">
        <button
          type="submit"
          className="portfolio-button solid"
          disabled={status === "opening"}
        >
          {status === "opening"
            ? "Opening email…"
            : "Request a security review"}
          {status === "idle" && <Arrow diagonal />}
        </button>
      </div>
      <p className="form-help">
        Opens an email to{" "}
        <a href="mailto:info@cyberethos.org">info@cyberethos.org</a> with a
        prepared draft. Nothing is stored on this page.
      </p>
    </form>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  onBlur,
  type = "text",
  required = false,
  optional = false,
  multiline = false,
  error,
  hint,
  placeholder,
  autoComplete,
  maxLength,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  type?: string;
  required?: boolean;
  optional?: boolean;
  multiline?: boolean;
  error?: string;
  hint?: string;
  placeholder?: string;
  autoComplete?: string;
  maxLength?: number;
}) {
  const hintUid = useId();
  const hintId = hint ? `${id}-hint-${hintUid}` : undefined;
  const errorId = error ? `${id}-error` : undefined;
  const describedBy = [hintId, errorId].filter(Boolean).join(" ") || undefined;
  const Control = multiline ? "textarea" : "input";

  return (
    <div className="review-field">
      <label htmlFor={id}>
        {label}{" "}
        {required && <span className="field-flag required">Required</span>}
        {optional && <span className="field-flag">Optional</span>}
      </label>
      {hint && (
        <p id={hintId} className="field-hint">
          {hint}
        </p>
      )}
      <div className={`field-control${error ? " has-error" : ""}`}>
        <Control
          id={id}
          name={id}
          {...(multiline ? { rows: 6 } : { type })}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          onBlur={onBlur}
          placeholder={placeholder}
          autoComplete={autoComplete}
          maxLength={maxLength}
          aria-required={required || undefined}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy}
        />
        {error && (
          <span className="field-error-icon">
            <AlertMark />
          </span>
        )}
      </div>
      {error && (
        <p id={errorId} className="field-error">
          <AlertMark />
          {error}
        </p>
      )}
    </div>
  );
}
