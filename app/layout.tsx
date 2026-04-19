import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "String Theory NYC — Tennis Racket Stringing in Manhattan",
  description:
    "Professional tennis racket stringing in Manhattan, NYC. Drop off your racket and pick it up freshly strung. Serving the Upper East Side. Est. 2026.",
  metadataBase: new URL("https://stringtheorynyc.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "String Theory NYC — Tennis Racket Stringing in Manhattan",
    description:
      "Professional tennis racket stringing in Manhattan, NYC. Drop off your racket and pick it up freshly strung. Serving the Upper East Side.",
    url: "https://stringtheorynyc.com",
    siteName: "String Theory NYC",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "String Theory NYC — Tennis Racket Stringing in Manhattan",
    description:
      "Professional tennis racket stringing in Manhattan, NYC. Drop off your racket and pick it up freshly strung.",
  },
  keywords: [
    "tennis stringing NYC",
    "tennis racket stringing Manhattan",
    "racket stringing Upper East Side",
    "tennis string service New York",
    "tennis restringing NYC",
    "String Theory NYC",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
