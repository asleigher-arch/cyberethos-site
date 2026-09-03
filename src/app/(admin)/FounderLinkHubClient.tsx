"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const primaryLinks = [
  {
    label: "Request a Cybersecurity Review",
    href: "/review",
    note: "Start here",
    className: "bg-white text-gray-950 hover:bg-brand-50",
  },
  {
    label: "Cybersecurity Audit",
    href: "/review?service=cybersecurity-audit",
    note: "Controls, accounts, exposure",
    className: "bg-[#4169e1] text-white hover:bg-[#3557c2]",
  },
  {
    label: "Penetration Testing",
    href: "/review?service=penetration-testing",
    note: "Scoped attack-path testing",
    className: "bg-[#20242d] text-white hover:bg-[#2d3440]",
  },
  {
    label: "Website Vulnerability Detection",
    href: "/review?service=website-vulnerability-detection",
    note: "Public website risk review",
    className: "bg-[#6d5dfc] text-white hover:bg-[#5b4be6]",
  },
];

const socialLinks = [
  { label: "Email", href: "mailto:info@cyberethos.org" },
  { label: "Cyber Ethos", href: "https://www.cyberethos.org/" },
  { label: "Review", href: "/review" },
];

export default function FounderLinkHubClient() {
  const heroRef = useRef<HTMLElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const node = heroRef.current;
    if (!node) return;

    const onPointerMove = (event: PointerEvent) => {
      const rect = node.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;

      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        node.style.setProperty("--mx", String(x));
        node.style.setProperty("--my", String(y));
        setTilt({ x, y });
      });
    };

    const onPointerLeave = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        node.style.setProperty("--mx", "0");
        node.style.setProperty("--my", "0");
        setTilt({ x: 0, y: 0 });
      });
    };

    node.addEventListener("pointermove", onPointerMove);
    node.addEventListener("pointerleave", onPointerLeave);

    return () => {
      node.removeEventListener("pointermove", onPointerMove);
      node.removeEventListener("pointerleave", onPointerLeave);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const shellTransform = `perspective(1100px) rotateX(${tilt.y * -5}deg) rotateY(${tilt.x * 6}deg) translate3d(${tilt.x * 10}px, ${tilt.y * 8}px, 0)`;

  return (
    <main
      ref={heroRef}
      className="relative min-h-screen overflow-hidden bg-black text-white [--mx:0] [--my:0]"
    >
      <div className="absolute inset-0 scale-110 transition-transform duration-300 ease-out will-change-transform [transform:translate3d(calc(var(--mx)*-34px),calc(var(--my)*-24px),0)]">
        <Image
          src="/images/user/owner.jpg"
          alt="Azad Sleigher"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-50 blur-[2px]"
        />
      </div>

      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#4169e1]/25 blur-3xl transition-transform duration-300 ease-out [transform:translate3d(calc(var(--mx)*90px),calc(var(--my)*60px),0)]" />
      <div className="pointer-events-none absolute -right-24 bottom-14 h-80 w-80 rounded-full bg-[#6d5dfc]/25 blur-3xl transition-transform duration-300 ease-out [transform:translate3d(calc(var(--mx)*-80px),calc(var(--my)*-70px),0)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.14] [background-image:linear-gradient(rgba(255,255,255,.22)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.22)_1px,transparent_1px)] [background-size:46px_46px] transition-transform duration-300 ease-out [transform:translate3d(calc(var(--mx)*18px),calc(var(--my)*18px),0)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_calc(50%+var(--mx)*20%)_calc(18%+var(--my)*12%),rgba(65,105,225,0.34),transparent_35%),linear-gradient(180deg,rgba(0,0,0,0.28),rgba(0,0,0,0.88)_72%,#000)]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.62),transparent_30%,transparent_70%,rgba(0,0,0,0.62))]" />

      <section className="relative z-10 mx-auto flex min-h-screen w-full max-w-xl flex-col items-center justify-center px-5 py-10 text-center sm:px-6">
        <div
          className="w-full transition-transform duration-300 ease-out will-change-transform"
          style={{ transform: shellTransform }}
        >
          <div className="mb-5 inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-white/75 shadow-2xl backdrop-blur-md">
            Cyber Ethos
          </div>

          <div className="relative mx-auto mb-5 h-28 w-28 overflow-hidden rounded-full border-2 border-white/55 bg-white/10 shadow-2xl shadow-black/50 backdrop-blur sm:h-32 sm:w-32">
            <Image
              src="/images/user/owner.jpg"
              alt="Azad Sleigher, founder of Cyber Ethos"
              fill
              priority
              sizes="128px"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-white/10" />
          </div>

          <p className="mb-2 text-sm font-medium tracking-[0.28em] text-white/65">
            @cyberethos
          </p>
          <h1 className="text-5xl font-extrabold tracking-[-0.055em] text-white drop-shadow-2xl sm:text-6xl">
            Azad Sleigher
          </h1>
          <p className="mx-auto mt-4 max-w-md text-base leading-7 text-white/88 sm:text-lg">
            Founder-led cybersecurity reviews for teams that need practical security fixes, not fear-based reports.
          </p>
          <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-white/68">
            Marine veteran. Former Iraq Special Operations interpreter. Cybersecurity graduate student. AI ops builder.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            {socialLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold text-white/75 backdrop-blur transition hover:border-white/35 hover:bg-white/20"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <nav aria-label="Cyber Ethos links" className="mt-8 flex w-full flex-col gap-3">
            {primaryLinks.map((link, index) => (
              <Link
                key={link.label}
                href={link.href}
                className={`${link.className} group flex w-full items-center justify-between rounded-2xl px-5 py-4 text-left shadow-2xl shadow-black/35 transition duration-200 hover:-translate-y-0.5`}
                style={{ transform: `translate3d(${tilt.x * (index + 1) * 1.4}px, ${tilt.y * (index + 1) * 1.2}px, 0)` }}
              >
                <span>
                  <span className="block text-base font-bold tracking-tight">{link.label}</span>
                  <span className="mt-1 block text-xs font-medium opacity-65">{link.note}</span>
                </span>
                <span className="ml-4 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-black/15 text-lg transition group-hover:translate-x-0.5">
                  →
                </span>
              </Link>
            ))}
          </nav>

          <div className="mt-8 rounded-3xl border border-white/14 bg-black/35 px-5 py-4 text-sm leading-6 text-white/72 shadow-2xl backdrop-blur-md">
            Send your website, scope, and concern. I’ll respond with the cleanest next step for your audit, pentest, or website vulnerability review.
          </div>
        </div>
      </section>
    </main>
  );
}
