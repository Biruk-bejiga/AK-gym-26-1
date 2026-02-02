import Link from "next/link";

import { site } from "@/content/site";
import { Container } from "@/components/Container";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[color:var(--bg)]">
      <Container className="grid gap-8 py-10 md:grid-cols-3">
        <div>
          <div className="text-sm font-bold text-white">{site.brand.name.en}</div>
          <div className="text-sm text-white/70" lang="am">
            {site.brand.name.am}
          </div>
          <p className="mt-3 text-sm text-white/70">{site.brand.tagline.en}</p>
        </div>

        <div>
          <div className="text-sm font-semibold text-white">Visit</div>
          <p className="mt-2 text-sm text-white/70">{site.location.fullAddress.en}</p>
          <Link
            href={site.location.googleMapsDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex text-sm font-semibold text-[var(--accent)] hover:text-[var(--accent-2)]"
          >
            Get directions
          </Link>
        </div>

        <div>
          <div className="text-sm font-semibold text-white">Contact</div>
          <div className="mt-2 grid gap-1 text-sm">
            <a
              href={`tel:${site.contact.phoneE164}`}
              className="font-semibold text-white hover:text-white/90"
            >
              {site.contact.phoneDisplay}
            </a>
            <a
              href={site.contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white"
            >
              Instagram
            </a>
          </div>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-2 py-6 text-xs text-white/60 md:flex-row md:items-center md:justify-between">
          <div>
            © {new Date().getFullYear()} {site.brand.name.en}. All rights reserved.
          </div>
          <div className="flex gap-4">
            <Link href="/pricing" className="hover:text-white">
              Pricing
            </Link>
            <Link href="/hours" className="hover:text-white">
              Opening Hours
            </Link>
            <Link href="/contact" className="hover:text-white">
              Contact
            </Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}
