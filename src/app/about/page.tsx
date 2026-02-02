import type { Metadata } from "next";

import { site } from "@/content/site";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about AK Gym 26 — a modern fitness center in Kara, Addis Ababa built around discipline and results.",
};

export default function AboutPage() {
  return (
    <>
      <Section>
        <PageHeader
          title={site.about.title}
          subtitle={{
            en: site.about.intro.en,
            am: site.about.intro.am,
          }}
        />

        <div className="grid gap-6 md:grid-cols-2">
          <article className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
            <h2 className="text-xl font-extrabold text-white">{site.about.mission.title.en}</h2>
            <p className="mt-2 text-sm text-white/75">{site.about.mission.body.en}</p>
            <p className="mt-2 text-xs text-white/55" lang="am">
              {site.about.mission.body.am}
            </p>
          </article>

          <article className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
            <h2 className="text-xl font-extrabold text-white">{site.about.values.title.en}</h2>
            <ul className="mt-4 grid gap-3 text-sm text-white/75">
              {site.about.values.items.map((v) => (
                <li key={v.en} className="flex gap-2">
                  <span className="mt-1 size-2 rounded-full bg-[var(--accent)]" aria-hidden />
                  <span>
                    {v.en}
                    {v.am ? (
                      <span className="mt-1 block text-xs text-white/55" lang="am">
                        {v.am}
                      </span>
                    ) : null}
                  </span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </Section>

      <Section variant="muted">
        <CTASection />
      </Section>
    </>
  );
}
