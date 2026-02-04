import Image from "next/image";

import { site } from "@/content/site";
import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";
import { LocaleText } from "@/components/LocaleText";

export function Hero() {
  return (
    <section aria-label="Hero" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/hero.svg"
          alt=""
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/55" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <Container className="relative py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-12 md:items-center">
          <div className="md:col-span-7">
            <p className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-xs font-semibold text-white/80 ring-1 ring-white/10">
              <span className="size-2 rounded-full bg-[var(--accent)]" aria-hidden />
              {site.location.fullAddress.en}
            </p>

            <h1 className="mt-6 text-balance text-5xl font-extrabold uppercase leading-[0.95] tracking-tight text-white md:text-7xl">
              <LocaleText
                text={site.home.hero.headline}
                className="block"
                amClassName="text-base md:text-lg"
              />
            </h1>

            <p className="mt-5 max-w-2xl text-pretty text-base text-white/75 md:text-lg">
              <LocaleText text={site.home.hero.subheadline} amClassName="text-sm" />
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/pricing" variant="primary">
                {site.ctas.primary.en}
              </ButtonLink>
              <ButtonLink href={`tel:${site.contact.phoneE164}`} variant="secondary">
                {site.ctas.call.en}: {site.contact.phoneDisplay}
              </ButtonLink>
              <ButtonLink
                href={site.contact.instagramUrl}
                variant="ghost"
                external
                ariaLabel="Open Instagram"
              >
                Instagram
              </ButtonLink>
            </div>

            <dl className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {site.home.hero.proof.map((item) => (
                <div
                  key={item.label.en}
                  className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10"
                >
                  <dt className="text-xs font-semibold text-white/60">
                    {item.label.en}
                  </dt>
                  <dd className="mt-1 text-lg font-bold text-white">
                    {item.value.en}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="md:col-span-5">
            <div className="relative overflow-hidden rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_55%)]" />
              <div className="relative">
                <p className="text-sm font-semibold text-white/70">
                  {site.brand.tagline.en}
                </p>
                <h2 className="mt-2 text-xl font-extrabold uppercase tracking-tight text-white md:text-2xl">
                  Programs built for your goal
                </h2>
                <ul className="mt-4 grid gap-2 text-sm text-white/70">
                  <li className="flex gap-2">
                    <span className="mt-1 size-2 rounded-full bg-[var(--accent)]" aria-hidden />
                    Strength, cardio, and weight-loss support
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 size-2 rounded-full bg-[var(--accent)]" aria-hidden />
                    Personal training available
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 size-2 rounded-full bg-[var(--accent)]" aria-hidden />
                    Clean, premium training space
                  </li>
                </ul>

                <div className="mt-6 flex gap-3">
                  <ButtonLink href="/services" variant="secondary">
                    View Programs
                  </ButtonLink>
                  <ButtonLink
                    href={site.location.googleMapsDirectionsUrl}
                    variant="ghost"
                    external
                  >
                    {site.ctas.directions.en}
                  </ButtonLink>
                </div>

                <p className="mt-6 text-xs text-white/55">
                  Tip: For the fastest reply, call during opening hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
