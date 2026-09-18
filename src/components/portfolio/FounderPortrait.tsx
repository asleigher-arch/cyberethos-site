import Image from "next/image";

export default function FounderPortrait({
  variant = "frame",
}: {
  variant?: "frame" | "cinematic";
}) {
  const cinematic = variant === "cinematic";
  return (
    <figure className={cinematic ? "founder-portrait cinematic" : "founder-portrait"}>
      <Image
        src="/images/user/owner.jpg"
        alt="Azad Sleigher in Marine Corps dress uniform"
        fill
        priority
        sizes={cinematic ? "100vw" : "(max-width: 900px) 92vw, 40vw"}
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
