"use client";

import Script from "next/script";
import { useEffect } from "react";
import {
  PURCHASE_STORAGE_PREFIX,
  isCheckoutSessionId,
  purchaseCustomData,
} from "@/lib/metaPixel";

type PageName = "members" | "welcome";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    _fbq?: (...args: unknown[]) => void;
  }
}

// Standard Meta Pixel bootstrap. Loads fbevents.js and defines fbq.
// init and track run after fbq exists, per page, so this is not sitewide.
const META_PIXEL_BOOTSTRAP = `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');`;

const recentFire = new Map<string, number>();

function recentlyFired(key: string): boolean {
  const now = Date.now();
  const prev = recentFire.get(key) ?? 0;
  if (now - prev < 1000) return true;
  recentFire.set(key, now);
  return false;
}

function readFlag(storage: Storage, key: string): boolean {
  try {
    return storage.getItem(key) === "1";
  } catch {
    return false;
  }
}

function writeFlag(storage: Storage, key: string) {
  try {
    storage.setItem(key, "1");
  } catch {
    // Storage can throw in private mode. eventID still dedupes in Meta.
  }
}

function purchaseAlreadyRecorded(sessionId: string): boolean {
  const key = `${PURCHASE_STORAGE_PREFIX}${sessionId}`;
  return readFlag(window.sessionStorage, key) || readFlag(window.localStorage, key);
}

function recordPurchase(sessionId: string) {
  const key = `${PURCHASE_STORAGE_PREFIX}${sessionId}`;
  writeFlag(window.sessionStorage, key);
  writeFlag(window.localStorage, key);
}

function fireMembers(fbq: NonNullable<Window["fbq"]>, pixelId: string) {
  fbq("init", pixelId);
  fbq("track", "PageView");
  fbq("track", "ViewContent", {
    content_name: "Founding membership",
    content_category: "membership",
    currency: "USD",
  });
}

function fireWelcome(fbq: NonNullable<Window["fbq"]>, pixelId: string) {
  const params = new URLSearchParams(window.location.search);
  const plan = (params.get("plan") ?? "").trim();
  const sessionId = (params.get("session_id") ?? "").trim();

  fbq("init", pixelId);
  fbq("track", "PageView");

  if (!isCheckoutSessionId(sessionId)) return;
  if (purchaseAlreadyRecorded(sessionId)) return;
  recordPurchase(sessionId);
  fbq(
    "track",
    "Purchase",
    purchaseCustomData(plan),
    { eventID: sessionId },
  );
}

function track(page: PageName, pixelId: string) {
  const fbq = window.fbq;
  if (typeof fbq !== "function") return false;
  const burstKey =
    page === "welcome"
      ? `welcome:${pixelId}:${window.location.search}`
      : `members:${pixelId}`;
  if (recentlyFired(burstKey)) return true;
  try {
    if (page === "members") fireMembers(fbq, pixelId);
    else fireWelcome(fbq, pixelId);
  } catch {
    // Pixel blocked or unavailable. Do not surface an error.
  }
  return true;
}

export default function MetaPixel({
  pixelId,
  page,
}: {
  pixelId: string;
  page: PageName;
}) {
  useEffect(() => {
    if (!pixelId) return;
    let cancelled = false;
    let timer = 0;
    const started = Date.now();

    const tryTrack = () => {
      if (cancelled) return;
      if (track(page, pixelId)) return;
      if (Date.now() - started > 10000) return;
      timer = window.setTimeout(tryTrack, 100);
    };

    tryTrack();
    return () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
  }, [page, pixelId]);

  if (!pixelId) return null;

  return (
    <Script
      id="meta-pixel"
      strategy="afterInteractive"
      onLoad={() => {
        track(page, pixelId);
      }}
    >
      {META_PIXEL_BOOTSTRAP}
    </Script>
  );
}
