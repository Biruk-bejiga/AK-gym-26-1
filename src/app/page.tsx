import { site } from "@/content/site";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { ServicesGrid } from "@/components/ServicesGrid";
import { CTASection } from "@/components/CTASection";
import { ButtonLink } from "@/components/ButtonLink";
import { LocaleText } from "@/components/LocaleText";
import { HoursTable } from "@/components/HoursTable";

export default function Home() {
  return (
    <>
      <Hero />

      <Section>
        <div className="grid gap-10 md:grid-cols-12 md:items-start">
          <div className="md:col-span-5">
            <h2 className="text-2xl font-extrabold text-white md:text-3xl">
              <LocaleText text={site.home.intro.title} amClassName="text-sm" />
            </h2>
          </div>
          <div className="md:col-span-7">
            <p className="text-base text-white/75 md:text-lg">
              <LocaleText text={site.home.intro.body} amClassName="text-sm" />
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/services" variant="secondary">
                Explore Programs
              </ButtonLink>
              <ButtonLink href="/about" variant="ghost">
                About AK Gym 26
              </ButtonLink>
            </div>
          </div>
        </div>
      </Section>

      <Section variant="muted">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl font-extrabold text-white md:text-3xl">
              <LocaleText text={site.services.title} amClassName="text-sm" />
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-white/75 md:text-base">
              <LocaleText text={site.services.intro} amClassName="text-xs" />
            </p>
          </div>
          <div className="hidden sm:block">
            <ButtonLink href="/services" variant="secondary">
              View all
            </ButtonLink>
          </div>
        </div>

        <div className="mt-8">
          <ServicesGrid limit={4} />
        </div>

        <div className="mt-6 sm:hidden">
          <ButtonLink href="/services" variant="secondary" className="w-full">
            View all programs
          </ButtonLink>
        </div>
      </Section>

      <Section>
        <div className="grid gap-8 md:grid-cols-12 md:items-start">
          <div className="md:col-span-5">
            <h2 className="text-2xl font-extrabold text-white md:text-3xl">
              <LocaleText text={site.hours.title} amClassName="text-sm" />
            </h2>
            <p className="mt-2 text-sm text-white/75 md:text-base">
              Plan your visit. Sunday has a short session window.
            </p>
            <div className="mt-5 flex gap-3">
              <ButtonLink href="/hours" variant="secondary">
                View full schedule
              </ButtonLink>
              <ButtonLink href="/contact" variant="ghost">
                Contact
              </ButtonLink>
            </div>
          </div>
          <div className="md:col-span-7">
            <HoursTable />
          </div>
        </div>
      </Section>

      <Section>
        <CTASection />
      </Section>
    </>
  );
}
