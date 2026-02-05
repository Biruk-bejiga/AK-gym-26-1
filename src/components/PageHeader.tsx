import { LocaleText } from "@/components/LocaleText";
import type { LocaleString } from "@/content/site";

export function PageHeader({
  title,
  subtitle,
}: {
  title: LocaleString;
  subtitle?: LocaleString;
}) {
  return (
    <header className="py-10 md:py-14">
      <h1 className="text-balance text-4xl font-extrabold uppercase tracking-tight text-white md:text-6xl">
        <LocaleText text={title} amClassName="text-base md:text-lg" />
      </h1>
      {subtitle ? (
        <p className="mt-4 max-w-2xl text-pretty text-base text-white/75 md:text-lg">
          <LocaleText text={subtitle} amClassName="text-sm" />
        </p>
      ) : null}
    </header>
  );
}
