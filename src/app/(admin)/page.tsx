import type { Metadata } from "next";
import FounderLinkHubClient from "./FounderLinkHubClient";

export const metadata: Metadata = {
  title: "Azad Sleigher | Cyber Ethos",
  description:
    "Founder-led cybersecurity reviews for teams that need practical security fixes, not fear-based reports.",
};

export default function FounderLinkHub() {
  return <FounderLinkHubClient />;
}
