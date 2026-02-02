import type { Metadata } from "next";

import { site } from "@/content/site";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { ServicesGrid } from "@/components/ServicesGrid";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Explore AK Gym 26 programs: strength training, cardio, weight loss, personal training, and general fitness in Kara, Addis Ababa.",
};

export default function ServicesPage() {
  return (
    <>
      <Section>
        <PageHeader
          title={site.services.title}
          subtitle={{ en: site.services.intro.en, am: site.services.intro.am }}
        />
        <ServicesGrid />
      </Section>

      <Section variant="muted">
        <CTASection />
      </Section>
    </>
  );
}
