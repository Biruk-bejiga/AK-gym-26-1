import { cn } from "@/lib/cn";
import type { LocaleString } from "@/content/site";

export function LocaleText({
  text,
  className,
  amClassName,
  showAmharic = true,
}: {
  text: LocaleString;
  className?: string;
  amClassName?: string;
  showAmharic?: boolean;
}) {
  return (
    <>
      <span className={className}>{text.en}</span>
      {showAmharic && text.am ? (
        <span
          className={cn(
            "mt-1 block text-sm text-white/70",
            amClassName,
          )}
          lang="am"
        >
          {text.am}
        </span>
      ) : null}
    </>
  );
}
