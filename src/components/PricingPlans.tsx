import { site } from "@/content/site";
import { cn } from "@/lib/cn";
import { LocaleText } from "@/components/LocaleText";

export function PricingPlans() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {site.pricing.plans.map((plan) => (
        <article
          key={plan.name.en}
          className={cn(
            "relative overflow-hidden rounded-3xl bg-white/5 p-6 ring-1 ring-white/10",
            plan.highlight ? "ring-[var(--accent)]/40" : undefined,
          )}
        >
          {plan.highlight ? (
            <div className="absolute right-5 top-5 rounded-full bg-[var(--accent)] px-3 py-1 text-xs font-extrabold text-black">
              Popular
            </div>
          ) : null}

          <h2 className="text-xl font-extrabold text-white">
            <LocaleText text={plan.name} amClassName="text-xs" />
          </h2>
          <p className="mt-2 text-sm font-semibold text-[var(--accent)]">
            <LocaleText text={plan.priceNote} amClassName="text-xs text-white/60" />
          </p>

          <p className="mt-3 text-sm text-white/75">
            <LocaleText text={plan.description} amClassName="text-xs" />
          </p>

          <ul className="mt-5 grid gap-2 text-sm text-white/75">
            {plan.includes.map((i) => (
              <li key={i.en} className="flex gap-2">
                <span className="mt-1 size-2 rounded-full bg-[var(--accent)]" aria-hidden />
                <span>
                  {i.en}
                  {i.am ? (
                    <span className="mt-1 block text-xs text-white/55" lang="am">
                      {i.am}
                    </span>
                  ) : null}
                </span>
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
