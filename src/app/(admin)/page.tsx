import type { Metadata } from "next";
import FounderLinkHubClient from "./FounderLinkHubClient";

export const metadata: Metadata = {
  title: "Azad Sleigher | Cyber Ethos",
  description:
    "A life of service. A new front line. Meet Azad: Marine veteran, former Special Operations interpreter in Iraq, cybersecurity student, and founder of Cyber Ethos.",
};

export default function FounderLinkHub() {
  return <FounderLinkHubClient />;
}
