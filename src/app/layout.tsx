import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["cyrillic", "latin"],
  display: "swap",
});

const title = "АУСН — ББР Банк";
const description =
  "Автоматизированная упрощённая система налогообложения. Узнайте об АУСН и перейдите к оформлению в сервисе ББР Банка.";

export const metadata: Metadata = {
  title,
  description,
  applicationName: "АУСН — ББР Банк",
  keywords: ["АУСН", "ББР Банк", "налоговый режим", "бизнес"],
  openGraph: {
    title,
    description,
    locale: "ru_RU",
    type: "website",
    siteName: "АУСН — ББР Банк",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f8fbff",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru" className={manrope.variable}>
      <body>{children}</body>
    </html>
  );
}
