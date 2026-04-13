import type { Metadata } from "next";
import { Orbitron, IBM_Plex_Sans_Arabic, Tajawal } from "next/font/google";
import { Toaster } from "sonner";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});

const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  variable: "--font-ibm-plex-arabic",
  subsets: ["arabic"],
  weight: ["400", "700"],
});

const tajawal = Tajawal({
  variable: "--font-tajawal",
  subsets: ["arabic"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "IDEA BUSINESS | المنصة السيادية للاستثمار",
  description: "المنصة الرائدة في الشرق الأوسط لربط الأفكار الريادية برؤوس الأموال الذكية باستخدام تقنيات الذكاء الاصطناعي.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${orbitron.variable} ${ibmPlexSansArabic.variable} ${tajawal.variable} h-full antialiased dark`}
    >
      <head>
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground font-body">
        {children}
        <Toaster position="bottom-right" theme="dark" />
        <Analytics />
      </body>
    </html>
  );
}
