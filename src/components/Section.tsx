import { cn } from "@/lib/cn";
import { Container } from "@/components/Container";

export function Section({
  className,
  children,
  id,
  variant = "default",
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
  variant?: "default" | "muted";
}) {
  const bg =
    variant === "muted"
      ? "bg-white/[0.03]"
      : "bg-transparent";

  return (
    <section id={id} className={cn("py-14 md:py-20", bg, className)}>
      <Container>{children}</Container>
    </section>
  );
}
