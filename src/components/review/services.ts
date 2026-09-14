export const reviewServices = {
  "cybersecurity-audit": "Cybersecurity Audit",
  "penetration-testing": "Penetration Testing",
  "website-vulnerability-detection": "Website Vulnerability Detection",
} as const;

export type ReviewServiceSlug = keyof typeof reviewServices;

export const reviewServiceOptions = [
  { value: "", label: "Not sure yet" },
  ...Object.entries(reviewServices).map(([value, label]) => ({
    value,
    label,
  })),
];

export function resolveReviewService(service?: string): string {
  if (!service) return "";
  const normalized = service.trim().toLowerCase().replace(/\s+/g, "-");
  return Object.hasOwn(reviewServices, normalized) ? normalized : "";
}

export function reviewServiceLabel(value: string): string {
  return Object.hasOwn(reviewServices, value)
    ? reviewServices[value as ReviewServiceSlug]
    : "Not sure yet";
}
