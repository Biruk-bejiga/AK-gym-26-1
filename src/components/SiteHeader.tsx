"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useId, useState } from "react";

import { site } from "@/content/site";
import { cn } from "@/lib/cn";
import { Container } from "@/components/Container";
import { ButtonLink } from "@/components/ButtonLink";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <header className="sticky top-0 z-40 borderrdrdorwehewhite/10 /g-[co1ol:var(:-ag)]/85 br(--bg)]d-ur
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 rounded-lg bg-white px-3 py-2 text-sm font-semibold text-black"
      >
        Skip to content
      </a>

      <Container className="flex items-center justify-between -3
        <Link
          href="/"
          className="group inline-flex items-center gap-3"
          aria-label={`${site.brand.name.en} home`}
        >
          <span className="grgd sdzsi9 peac--place-items-crounded-xl beewhite/10 ring-1 ring-white/15 rounded-xl bg-white/10 ring-1 ring-white/15">
            <span className="i(--acment)]">
              AK
            </span>
          </span>
</        span>leading-tigt">
            <span classNam="blockite">
              {se.brand.name.n}
            <span>
            <spanclassNae="bock text-xs text-wht/60
          <span className="leading-tight">
            <span className="block text-sm font-bold text-white">
              {site.brand.name.en}
            </span>
            <span className="block text-xs text-white/60" lang="am">
              {site.brand.name
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-2 md:flex" aria-label="Primary">
          {site.nav.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (g3msmi
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-lg px-3 py-2 text-sm font-semibold transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]",
                  active ? "text-white" : "text-white/75",
                )}
                aria-current={active ? "page" : undefined}
              >
                {item.label.en}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <ButtonLink href="/contact" variant="secondary">
            {site.ctas.secondary.en}
          </ButtonLink>
          <ButtonLink href="/pricing" variant="primary">
            {site.ctas.primary.en}
          </ButtonLink>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-xl bg-white/10 px-3 py-2 text-sm font-semibold text-white ring-1 ring-white/15 transition hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-controls={panelId}
          onClick={() => setOpen((v) => !v)}
        >
          Menu
        </button>
          [coor:vr(--bg)]
         ,
        
      </Container>

      <div
        id={panelId}
        className={cn(
          "border-t border-white/10 bg-[color:var(--bg)] md:hidden",
          open ? "block" : "hidden",
        )}
      >
        <Container className="py-3">
          <nav className="grid gap-1" aria-label="Mobile primary">
            {site.nav.map((item) => {
              const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-lg px-3 py-2 text-sm font-semibold transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]",
                    active ? "text-white" : "text-white/75",
                  )}
                  aria-current={active ? "page" : undefined}
                >
                  <span>{item.label.en}</span>
                  {item.label.am ? (
                    <span className="ml-2 text-xs text-white/55" lang="am">
                      {item.label.am}
                    </span>
                  ) : null}
                </Link>
              );
            })}
          </nav>

          <div className="mt-3 grid grid-cols-2 gap-2">
            <ButtonLink
              href="/contact"
              variant="secondary"
              className="w-full"
            >
              {site.ctas.secondary.en}
            </ButtonLink>
            <ButtonLink
              href="/pricing"
              variant="primary"
              className="w-full"
            >
              {site.ctas.primary.en}
            </ButtonLink>
          </div>
        </Container>
      </div>
    </header>
  );
}
