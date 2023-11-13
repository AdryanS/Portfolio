import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import LocalFont from "next/font/local";
import { cn } from "@/lib/utils";

import "./globals.css";

import { ThemeProvider } from "./__components/theme-provider";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontHeading = LocalFont({
  src: "../assets/fonts/CalSans-SemiBold.woff2",
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "Adryan Rodrigues | Portfolio",
  description: "Curso Full-stack NextJS 14",
  keywords: [
    "NextJS",
    "NextJS 14",
    "ReactJS",
    "AdryanS",
    "Adryan Samuel",
    "Adryan Samuel Rodrigues",
    "Adryan Samuel Rodrigues da silva",
    "Javascript",
    "Typescript",
    "Full-stack",
    "Tailwind",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontHeading.variable,
          fontSans.variable
        )}
      >
        <ThemeProvider attribute='class' defaultTheme='dark'>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
