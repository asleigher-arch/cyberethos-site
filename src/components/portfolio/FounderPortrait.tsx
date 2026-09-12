import Image from "next/image";

export default function FounderPortrait() {
  return (
    <figure className="founder-portrait">
      <Image
        src="/images/user/owner.jpg"
        alt="Azad Sleigher in Marine Corps dress uniform"
        fill
        priority
        sizes="(max-width: 900px) 92vw, 40vw"
      />
      <figcaption>
        <span>Azad Sleigher</span>
        <span>Founder / Cyber Ethos</span>
      </figcaption>
    </figure>
  );
}
