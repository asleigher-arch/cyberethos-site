"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

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

  useEffect(() => {
    const node = heroRef.current;
    if (!node) return;

    const setVars = (x: number, y: number) => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        node.style.setProperty("--mx", `${x}%`);
        node.style.setProperty("--my", `${y}%`);
      });
    };

    const onPointerMove = (event: PointerEvent) => {
      const rect = node.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;
      setVars(x, y);
    };

    const onPointerLeave = () => setVars(50, 28);

    node.addEventListener("pointermove", onPointerMove);
    node.addEventListener("pointerleave", onPointerLeave);

    return () => {
      node.removeEventListener("pointermove", onPointerMove);
      node.removeEventListener("pointerleave", onPointerLeave);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <main
      ref={heroRef}
      className="relative min-h-screen overflow-hidden bg-black text-white [--mx:50%] [--my:28%]"
    >
      <Image
        src="/images/user/owner.jpg"
        alt="Azad Sleigher"
        fill
        priority
        sizes="100vw"
        className="scale-105 object-cover object-center opacity-45 blur-[2px]"
      />

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.28),rgba(0,0,0,0.9)_70%,#000)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.72),transparent_30%,transparent_70%,rgba(0,0,0,0.72))]" />
      <div className="pointer-events-none absolute inset-0 opacity-50 transition-[background] duration-500 ease-out [background:radial-gradient(circle_at_var(--mx)_var(--my),rgba(74,113,255,0.42),transparent_30%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-[radial-gradient(ellipse_at_bottom,rgba(109,93,252,0.22),transparent_58%)]" />

      <section className="relative z-10 mx-auto flex min-h-screen w-full max-w-xl flex-col items-center justify-center px-5 py-10 text-center sm:px-6">
        <div className="w-full rounded-[2rem] border border-white/10 bg-black/18 p-5 shadow-2xl shadow-black/45 backdrop-blur-[2px] sm:p-6">
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
            {primaryLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`${link.className} group flex w-full items-center justify-between rounded-2xl px-5 py-4 text-left shadow-2xl shadow-black/35 transition duration-200 hover:-translate-y-0.5 hover:shadow-black/50`}
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
