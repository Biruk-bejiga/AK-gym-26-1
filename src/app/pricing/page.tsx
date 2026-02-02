import type { Metadata } from "next";

import { site } from "@/content/site";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { PricingPlans } from "@/components/PricingPlans";
import { MembershipSignup } from "@/components/MembershipSignup";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "AK Gym 26 pricing and membership options in Kara, Addis Ababa. Call or message us on Instagram for current rates.",
};

export default function PricingPage() {
  return (
    <>
      <Section>
        <PageHeader title={site.pricing.title} subtitle={site.pricing.intro} />
        <PricingPlans />
      </Section>

      <Section variant="muted">
        <MembershipSignup />
      </Section>

      <Section>
        <div className="grid gap-6 rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 md:p-8">
          <h2 className="text-2xl font-extrabold text-white">{site.pricing.faq.title.en}</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {site.pricing.faq.items.map((item) => (
              <article key={item.q.en} className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
                <h3 className="text-sm font-extrabold text-white">{item.q.en}</h3>
                <p className="mt-2 text-sm text-white/75">{item.a.en}</p>
                {item.q.am || item.a.am ? (
                  <p className="mt-2 text-xs text-white/55" lang="am">
                    {item.q.am ? `${item.q.am} ` : ""}
                    {item.a.am}
                  </p>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
