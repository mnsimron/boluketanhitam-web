import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Bakery",
  name: "Bolu Ketan Hitam Bogor",
  description: "Bolu ketan hitam lembut dan legit, dibuat dengan resep keluarga. Oleh-oleh khas Bogor.",
  image: "https://www.boluketanhitambogor.com/icon-bolu.jpg",
  url: "https://www.boluketanhitambogor.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bogor",
    addressRegion: "Jawa Barat",
    addressCountry: "ID",
  },
  priceRange: "Rp",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://boluketanhitambogor.com"),
  title: "Bolu Ketan Hitam Bogor - Cita Rasa Otentik Resep Jadul",
  description: "Cari oleh-oleh khas Bogor? Cobain Bolu Ketan Hitam dengan tekstur lumer dan resep jadul yang otentik. Cocok untuk hantaran, ulang tahun, dan cemilan keluarga.",
  keywords: [
    "bolu ketan",
    "bolu ketan hitam",
    "bolu ketan hitam bogor",
    "oleh-oleh bogor",
    "kue tradisional bogor",
    "bolu jadul",
  ],
  icons: {
    icon: "/icon-bolu.jpg",
  },
  openGraph: {
    title: "Bolu Ketan Hitam Bogor - Oleh-oleh Khas Kota Hujan",
    description: "Pesan sekarang! Bolu ketan hitam lumer premium, dibuat dari resep jadul keluarga.",
    url: "https://boluketanhitambogor.com",
    siteName: "Bolu Ketan Hitam Bogor",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "https://boluketanhitambogor.com/icon-bolu.jpg",
        width: 1200,
        height: 630,
        alt: "Bolu Ketan Hitam Bogor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bolu Ketan Hitam Bogor - Oleh-oleh Khas Kota Hujan",
    description: "Pesan sekarang! Bolu ketan hitam lumer premium, dibuat dari resep jadul keluarga.",
    images: ["https://boluketanhitambogor.com/icon-bolu.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-RRRL3N9DX9"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-RRRL3N9DX9');
          `}
        </Script>
      </body>
    </html>
  );
}
