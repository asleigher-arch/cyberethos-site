import MetaPixelGate from "@/components/analytics/MetaPixelGate";
import { metaPixelId } from "@/lib/metaPixel";

/**
 * Server slot for the Meta Pixel.
 * No numeric NEXT_PUBLIC_META_PIXEL_ID: render nothing (no noscript, no loader).
 * With an id: noscript PageView fallback in the initial HTML, and the client
 * loader on /members or /welcome-founding only.
 */
export default function MetaPixelSlot({
  page,
}: {
  page: "members" | "welcome";
}) {
  const pixelId = metaPixelId();
  if (!pixelId) return null;

  return (
    <>
      <MetaPixelGate page={page} />
      <noscript
        dangerouslySetInnerHTML={{
          __html: `<img height="1" width="1" alt="" class="meta-pixel-fallback" src="https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1" />`,
        }}
      />
    </>
  );
}
