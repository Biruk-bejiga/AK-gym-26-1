import { site } from "@/content/site";
import { LocaleText } from "@/components/LocaleText";

export function ServicesGrid({
  limit,
}: {
  limit?: number;
}) {
  const services = limit ? site.services.list.slice(0, limit) : site.services.list;

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {services.map((service) => (
        <article
          key={service.title.en}
          className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10"
        >
          <h3 className="text-xl font-extrabold text-white">
            <LocaleText text={service.title} amClassName="text-xs" />
          </h3>
          <p className="mt-2 text-sm text-white/70">
            <LocaleText text={service.description} amClassName="text-xs" />
          </p>

          <ul className="mt-4 grid gap-2 text-sm text-white/75">
            {service.highlights.map((h) => (
              <li key={h.en} className="flex gap-2">
                <span
                  className="mt-1 size-2 rounded-full bg-[var(--accent)]"
                  aria-hidden
                />
                <span>
                  {h.en}
                  {h.am ? (
                    <span className="ml-2 text-xs text-white/55" lang="am">
                      {h.am}
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
