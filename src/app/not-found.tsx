import Link from "next/link";

import { Section } from "@/components/Section";
import { ButtonLink } from "@/components/ButtonLink";

export default function NotFound() {
  return (
    <Section>
      <div className="mx-auto max-w-2xl">
        <h1 className="text-3xl font-extrabold text-white md:text-5xl">Page not found</h1>
        <p className="mt-3 text-sm text-white/75 md:text-base">
          The page you’re looking for doesn’t exist. Use the navigation or go back home.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/" variant="primary">
            Back to Home
          </ButtonLink>
          <Link href="/contact" className="text-sm font-semibold text-[var(--accent)] hover:text-[var(--accent-2)]">
            Contact AK Gym 26
          </Link>
        </div>
      </div>
    </Section>
  );
}
