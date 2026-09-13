import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://boluketanhitambogor.vercel.app/"),
  title: "Bolu Ketan Hitam Bogor | Resep Jadul",
  description: "Bolu ketan hitam lembut dan legit, dibuat dengan resep keluarga. Cita rasa otentik yang bikin nagih dari gigitan pertama.",
  icons: {
    icon: "/icon.png",
  },
  openGraph: {
    title: "Bolu Ketan Hitam Bogor | Resep Jadul",
    description: "Bolu ketan hitam lembut dan legit, dibuat dengan resep keluarga. Cita rasa otentik yang bikin nagih dari gigitan pertama.",
    url: "https://boluketanhitambogor.vercel.app/",
    siteName: "Bolu Ketan Hitam Bogor",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/icon.png",
        width: 1200,
        height: 630,
        alt: "Bolu Ketan Hitam Bogor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bolu Ketan Hitam Bogor | Resep Jadul",
    description: "Bolu ketan hitam lembut dan legit, dibuat dengan resep keluarga. Cita rasa otentik yang bikin nagih dari gigitan pertama.",
    images: ["/icon.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
