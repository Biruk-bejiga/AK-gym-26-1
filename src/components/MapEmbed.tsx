import { site } from "@/content/site";

export function MapEmbed() {
  return (
    <div className="overflow-hidden rounded-3xl bg-white/5 ring-1 ring-white/10">
      <iframe
        title="AK Gym 26 location map"
        src={site.location.googleMapsEmbedUrl}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-[360px] w-full"
      />
    </div>
  );
}
