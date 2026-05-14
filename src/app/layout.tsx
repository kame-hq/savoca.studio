import type { Metadata } from "next";
import { Newsreader, Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const newsreader = Newsreader({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: "variable",
  style: ["normal", "italic"],
  axes: ["opsz"],
  display: "swap",
});

// Fraunces loaded ONLY for the § monogram glyph — display optical size, variable weight
const fraunces = Fraunces({
  variable: "--font-fraunces-mono",
  subsets: ["latin"],
  weight: "variable",
  axes: ["opsz"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Savoca Studio — No revenue left behind.",
  description:
    "Savoca Studio builds revenue systems for service businesses tired of losing money to missed calls, slow follow-up, messy handoffs, and unclear reporting. Capture more demand. Respond faster. Deliver with less drag. Prove the return.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${fraunces.variable} ${inter.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        {/*
          RB2B — Inbound-Led Outbound visitor ID.
          To activate:
          1. Sign up at rb2b.com (free tier)
          2. Copy your script src URL (looks like https://b2bjsstore.s3.us-west-2.amazonaws.com/b/XXXXXX.js)
          3. Paste full URL into NEXT_PUBLIC_RB2B_SRC env var on Vercel
          4. Redeploy
        */}
        {process.env.NEXT_PUBLIC_RB2B_SRC && (
          <Script
            id="rb2b"
            src={process.env.NEXT_PUBLIC_RB2B_SRC}
            strategy="afterInteractive"
          />
        )}
      </body>
    </html>
  );
}
