import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "HRF Customs | Trusted Custom Home Builder in Paradise, UT | Northern Utah General Contractor",
  description:
    "HRF Customs is a trusted custom home builder and general contractor serving Paradise, UT, Northern Utah, Southern Idaho, and Western Wyoming. Over 15 years of experience in custom home building, framing, excavation, and concrete. Call (435) 760 0279 for a consultation.",
  keywords: [
    "custom home builder Paradise UT",
    "general contractor Northern Utah",
    "custom home builder Utah",
    "luxury custom homes Cache Valley",
    "residential construction Paradise Utah",
    "framing contractor Utah",
    "excavation services Northern Utah",
  ],
  openGraph: {
    title: "HRF Customs | Trusted Custom Home Builder in Paradise, UT",
    description:
      "Owner led custom home building and general contracting in Northern Utah, Southern Idaho, and Western Wyoming. 15 plus years of experience. 250 plus happy customers.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://hrfcustoms.com",
    name: "HRF Customs",
    description:
      "Custom home builder and general contractor serving Northern Utah, Southern Idaho, and Western Wyoming. Specializing in custom home building, framing, excavation, and concrete services.",
    url: "https://hrfcustoms.com",
    telephone: "+14357600279",
    email: "highridgeframing@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "8536 S 150 E",
      addressLocality: "Paradise",
      addressRegion: "UT",
      postalCode: "84328",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 41.5685,
      longitude: -111.8338,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "08:00",
      closes: "18:00",
    },
    areaServed: [
      {
        "@type": "State",
        name: "Utah",
      },
      {
        "@type": "State",
        name: "Idaho",
      },
      {
        "@type": "State",
        name: "Wyoming",
      },
    ],
    sameAs: [],
    priceRange: "$$$$",
    image: "https://hrfcustoms.com/images/logo.png",
  };

  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
