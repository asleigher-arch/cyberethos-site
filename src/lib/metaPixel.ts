/**
 * Meta Pixel helpers shared by the server gate and the client tracker.
 * An empty id means the pixel is not configured: load nothing and fire nothing.
 */

export function metaPixelId(): string {
  const raw = process.env.NEXT_PUBLIC_META_PIXEL_ID?.trim() ?? "";
  // Pixel IDs are numeric. Reject anything else so it cannot be interpolated
  // into a script or image URL.
  if (!/^\d+$/.test(raw)) return "";
  return raw;
}

export function isCheckoutSessionId(sessionId: string): boolean {
  return sessionId.startsWith("cs_");
}

/**
 * Purchase payload for the thank-you page.
 * The amount is taken from the plan query param, not from Stripe.
 * A server-side Checkout session lookup could replace this later.
 * No Stripe secret is available here. Unrecognized plans omit value.
 */
export function purchaseCustomData(
  plan: string,
): Record<string, string | number> {
  const data: Record<string, string | number> = {
    currency: "USD",
    content_name: "Founding membership",
    content_type: "product",
  };
  if (plan === "monthly") data.value = 15;
  else if (plan === "yearly") data.value = 150;
  return data;
}

export const PURCHASE_STORAGE_PREFIX = "ce-meta-purchase:";
