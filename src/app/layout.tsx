import type { Metadata } from "next";
import { Archivo_Black, Montserrat } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import { metadata as siteMetadata } from "./metadata";

const archivoblack = Archivo_Black({
  weight: "400",
  variable: "--font-archivo-black",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  ...siteMetadata,
  applicationName: "BOLD Turtle",
  referrer: "origin-when-cross-origin",
  keywords: ["BOLD Turtle", "cryptocurrency", "meme coin", "Solana", "$BOLD"],
  authors: [{ name: "BOLD Turtle Team" }],
  creator: "BOLD Turtle Team",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${archivoblack.variable} ${montserrat.variable}`} suppressHydrationWarning>
      <ClientBody>
        {children}
      </ClientBody>
    </html>
  );
}
