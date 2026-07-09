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
  title: "CollegeFinder — Discover, Compare & Predict Your College",
  description: "Search, compare, and predict admission chances across top colleges in India.",
  openGraph: {
    title: "CollegeFinder",
    description: "Discover, compare, and predict your college admissions.",
    url: "https://college-finder-git-main-rutuja-adhikar-patils-projects.vercel.app/",
    siteName: "CollegeFinder",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}


