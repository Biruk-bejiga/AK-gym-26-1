import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { site } from "@/content/site";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});


export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://example.com"),
  title: {
    default: `${site.brand.name.en} | Kara, Addis Ababa`,
    template: `%s | ${site.brand.name.en}`,
  },
  description:
    "AK Gym 26 is a modern fitness center in Kara, Addis Ababa. Strength training, cardio, weight loss programs, personal training, and general fitness.",
  applicationName: site.brand.name.en,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${site.brand.name.en} | Kara, Addis Ababa`,
    description:
      "Train with discipline and transform with purpose. Programs for strength, cardio, weight loss, and personal training.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.brand.name.en} | Kara, Addis Ababa`,
    description:
      "Modern fitness center in Kara, Addis Ababa — strength, cardio, weight loss, personal training.",
  },
};

function to24Hour(time: string) {
  // Accepts formats like "7:00 AM" and returns "07:00".
  const match = time.trim().match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i);
  if (!match) return time;
  const hour = Number(match[1]);
  const minute = match[2];
  const meridiem = match[3].toUpperCase();

  const normalizedHour =
    meridiem === "AM"
      ? hour % 12
      : (hour % 12) + 12;

  return `${String(normalizedHour).padStart(2, "0")}:${minute}`;
}

function daysForLabel(label: string) {
  if (label === "Monday – Friday" || label === "Monday-Friday") {
    return ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  }
  if (label === "Saturday") return ["Saturday"];
  if (label === "Sunday") return ["Sunday"];
  return [label];
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HealthClub",
  name: site.brand.name.en,
  alternateName: site.brand.name.am,
  telephone: site.contact.phoneE164,
  address: {
    "@type": "PostalAddress",
    addressLocality: site.location.city,
    addressCountry: "ET",
    streetAddress: site.location.area.en,
  },
  openingHoursSpecification: site.hours.schedule.flatMap((row) =>
    daysForLabel(row.label.en).map((day) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: day,
      opens: to24Hour(row.hours.split("–")[0]?.trim() ?? ""),
      closes: to24Hour(row.hours.split("–")[1]?.trim() ?? ""),
    })),
  ),
  sameAs: [site.contact.instagramUrl],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-dvh font-[family-name:var(--font-sans)]">
        <SiteHeader />
        <main id="main" className="min-h-[70vh]">
          {children}
        </main>
        <SiteFooter />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
