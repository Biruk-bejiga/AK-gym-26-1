import type { Metadata } from "next";

import { site } from "@/content/site";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { ContactCards } from "@/components/ContactCards";
import { MapEmbed } from "@/components/MapEmbed";
import { HoursTable } from "@/components/HoursTable";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact AK Gym 26 in Kara, Addis Ababa. Call, message us on Instagram, or get directions on Google Maps.",
};

export default function ContactPage() {
  return (
    <>
      <Section>
        <PageHeader
          title={site.contactPage.title}
          subtitle={{ en: site.contactPage.intro.en, am: site.contactPage.intro.am }}
        />

        <ContactCards />

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div>
            <h2 className="text-xl font-extrabold text-white">Find us</h2>
            <p className="mt-2 text-sm text-white/70">{site.location.fullAddress.en}</p>
            <div className="mt-4">
              <MapEmbed />
            </div>
          </div>

          <div>
            <h2 className="text-xl font-extrabold text-white">Opening hours</h2>
            <p className="mt-2 text-sm text-white/70">
              Call during these times for the fastest reply.
            </p>
            <div className="mt-4">
              <HoursTable />
            </div>
          </div>
        </div>
      </Section>

      <Section variant="muted">
        <div className="rounded-3xl bg-white/5 p-8 ring-1 ring-white/10">
          <h2 className="text-2xl font-extrabold text-white">Ready to start?</h2>
          <p className="mt-2 text-sm text-white/75">
            Call now or message us on Instagram. We’ll help you choose the right program.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href={`tel:${site.contact.phoneE164}`}
              className="inline-flex items-center justify-center rounded-xl bg-[var(--accent)] px-4 py-2 text-sm font-semibold text-black transition hover:bg-[var(--accent-2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]"
            >
              Call {site.contact.phoneDisplay}
            </a>
            <a
              href={site.contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-white/10 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/15 transition hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]"
            >
              Open Instagram
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
