"use client";

import { useEffect, useState, type ComponentType } from "react";

type PageName = "members" | "welcome";

type PixelProps = {
  pixelId: string;
  page: PageName;
};

function configuredPixelId(): string {
  const raw = process.env.NEXT_PUBLIC_META_PIXEL_ID?.trim() ?? "";
  if (!/^\d+$/.test(raw)) return "";
  return raw;
}

/**
 * Loads the pixel chunk only when NEXT_PUBLIC_META_PIXEL_ID is a numeric id.
 * Missing or empty: render nothing, do not import the pixel module, fire nothing.
 */
export default function MetaPixelGate({ page }: { page: PageName }) {
  const pixelId = configuredPixelId();
  const [Pixel, setPixel] = useState<ComponentType<PixelProps> | null>(null);

  useEffect(() => {
    if (!pixelId) return;
    let live = true;
    import("./MetaPixel").then((mod) => {
      if (live) setPixel(() => mod.default);
    });
    return () => {
      live = false;
    };
  }, [pixelId]);

  if (!pixelId || !Pixel) return null;
  return <Pixel pixelId={pixelId} page={page} />;
}
