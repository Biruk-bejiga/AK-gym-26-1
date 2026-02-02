import { site } from "@/content/site";
import { ButtonLink } from "@/components/ButtonLink";
import { LocaleText } from "@/components/LocaleText";

export function CTASection() {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/10 via-white/5 to-transparent p-8 ring-1 ring-white/10 md:p-10">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(244,196,48,0.14),transparent_55%)]" />
      <div className="relative">
        <h2 className="text-2xl font-extrabold text-white md:text-3xl">
          <LocaleText text={site.home.cta.title} amClassName="text-sm" />
        </h2>
        <p className="mt-3 max-w-2xl text-sm text-white/75 md:text-base">
          <LocaleText text={site.home.cta.body} amClassName="text-xs" />
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/pricing" variant="primary">
            {site.ctas.primary.en}
          </ButtonLink>
          <ButtonLink href={`tel:${site.contact.phoneE164}`} variant="secondary">
            {site.ctas.call.en}
          </ButtonLink>
          <ButtonLink href="/services" variant="ghost">
            View Programs
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}
