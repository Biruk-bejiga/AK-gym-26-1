import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost";

export function ButtonLink({
  href,
  children,
  className,
  variant = "primary",
  external,
  ariaLabel,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  variant?: Variant;
  external?: boolean;
  ariaLabel?: string;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]";

  const styles: Record<Variant, string> = {
    primary:
      "bg-[var(--accent)] text-black hover:bg-[var(--accent-2)]",
    secondary:
      "bg-white/10 text-white hover:bg-white/15 ring-1 ring-white/15",
    ghost: "text-white/90 hover:bg-white/10",
  };

  const rel = external ? "noopener noreferrer" : undefined;
  const target = external ? "_blank" : undefined;

  return (
    <Link
      href={href}
      className={cn(base, styles[variant], className)}
      rel={rel}
      target={target}
      aria-label={ariaLabel}
    >
      {children}
    </Link>
  );
}
