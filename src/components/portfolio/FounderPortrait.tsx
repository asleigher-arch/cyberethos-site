import Image from "next/image";

export default function FounderPortrait({
  variant = "frame",
}: {
  variant?: "frame" | "cinematic" | "plate";
}) {
  const cinematic = variant === "cinematic";
  const plate = variant === "plate";
  return (
    <figure
      className={
        cinematic
          ? "founder-portrait cinematic"
          : plate
            ? "founder-portrait plate"
            : "founder-portrait"
      }
    >
      <Image
        src="/images/user/owner.jpg"
        alt="Azad Sleigher in Marine Corps dress uniform"
        fill
        priority
        sizes={
          cinematic
            ? "100vw"
            : plate
              ? "(max-width: 900px) 92vw, 50vw"
              : "(max-width: 900px) 92vw, 40vw"
        }
      />
      {cinematic ? null : (
        <figcaption>
          <span>Azad Sleigher</span>
          <span>Founder / Cyber Ethos</span>
        </figcaption>
      )}
    </figure>
  );
}
