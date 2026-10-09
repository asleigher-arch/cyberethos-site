import type { Metadata } from "next";
import Link from "next/link";
import MetaPixelSlot from "@/components/analytics/MetaPixelSlot";
import PublicFrame from "@/components/portfolio/PublicFrame";

export const metadata: Metadata = {
  title: "Welcome, founding member | Cyber Ethos",
  description: "Thank you for backing Cyber Ethos early.",
  robots: { index: false, follow: false },
};

export default function WelcomeFoundingPage() {
  return (
    <PublicFrame page>
      <main id="main" className="members-main welcome-founding">
        <section className="b-top">
          <p className="technical-label">Cyber Ethos · Founding members</p>
          <h1>You&apos;re a founding member.</h1>
          <p className="m-lede">Thank you for backing Cyber Ethos early.</p>
        </section>
        <section className="m-bottom" aria-label="What happens next">
          <p>
            Your member welcome email from Azad arrives in the next few
            minutes.
          </p>
          <p>Your Stripe receipt comes separately.</p>
          <p>
            Questions? Reply to any email from us or write to{" "}
            <a href="mailto:info@cyberethos.org">info@cyberethos.org</a>.
          </p>
          <p className="b-free">
            <Link href="/">Back to the homepage</Link>
          </p>
        </section>
      </main>
      <MetaPixelSlot page="welcome" />
    </PublicFrame>
  );
}
