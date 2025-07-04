import type { Metadata } from "next";
import { El_Messiri, Geist, Geist_Mono, Baloo_2 } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const baloo2 = Baloo_2({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-baloo-2",
});

const elmessiri = El_Messiri({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-elmessiri",
});

export const metadata: Metadata = {
  title: "Chantolgy.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${baloo2.variable} ${elmessiri.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
