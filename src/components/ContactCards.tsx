import { site } from "@/content/site";
import { ButtonLink } from "@/components/ButtonLink";

export function ContactCards() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <div className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
        <div className="text-sm font-semibold text-white/80">Phone</div>
        <a
          href={`tel:${site.contact.phoneE164}`}
          className="mt-2 block text-lg font-extrabold text-white hover:text-white/90"
        >
          {site.contact.phoneDisplay}
        </a>
        <p className="mt-2 text-sm text-white/70">
          Tap to call. We respond fastest during opening hours.
        </p>
        <div className="mt-4">
          <ButtonLink href={`tel:${site.contact.phoneE164}`} variant="primary">
            Call Now
          </ButtonLink>
        </div>
      </div>

      <div className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
        <div className="text-sm font-semibold text-white/80">Instagram</div>
        <p className="mt-2 text-sm text-white/70">
          Message us for updates, class times, and gym photos.
        </p>
        <div className="mt-4">
          <ButtonLink href={site.contact.instagramUrl} variant="secondary" external>
            Open Instagram
          </ButtonLink>
        </div>
      </div>

      <div className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
        <div className="text-sm font-semibold text-white/80">Address</div>
        <p className="mt-2 text-sm text-white/70">{site.location.fullAddress.en}</p>
        <p className="mt-1 text-xs text-white/55" lang="am">
          {site.location.fullAddress.am}
        </p>
        <div className="mt-4">
          <ButtonLink href={site.location.googleMapsDirectionsUrl} variant="ghost" external>
            Get Directions
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}
