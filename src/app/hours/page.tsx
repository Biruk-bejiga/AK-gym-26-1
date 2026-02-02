import type { Metadata } from "next";

import { site } from "@/content/site";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { HoursTable } from "@/components/HoursTable";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Opening Hours",
  description:
    "AK Gym 26 opening hours — weekly schedule for Kara, Addis Ababa.",
};

export default function HoursPage() {
  return (
    <>
      <Section>
        <PageHeader title={site.hours.title} />
        <HoursTable />
        <p className="mt-4 text-sm text-white/65">
          Sunday is a short session window. For the fastest response, please call during opening hours.
        </p>
      </Section>

      <Section variant="muted">
        <CTASection />
      </Section>
    </>
  );
}
