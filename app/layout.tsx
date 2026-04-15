import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "../components/ThemeProvider";
import { Navbar } from "../components/Navbar";
import { BackgroundDecoration } from "../components/BackgroundDecoration";
import { getAbsoluteUrl, siteUrl } from "@/lib/site";

const siteName = "Ahmad Kurniawan Ibrahim";
const siteDescription =
  "Software Engineer Enthusiast & Apple Developer Academy Alumnus specializing in iOS, Web Development, and Full-stack systems. Discover my projects like DreamRank, HUEMEN, and SIRAJ.";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteName,
  jobTitle: "Software Engineer Enthusiast",
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "STIKOM EL-RAHMA",
  },
  knowsAbout: ["SwiftUI", "Next.js", "Node.js"],
  url: siteUrl,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ahmad Kurniawan Ibrahim | Software Engineer Enthusiast",
    template: "%s | Ahmad Kurniawan Ibrahim",
  },
  description: siteDescription,
  keywords: [
    "Ahmad Kurniawan Ibrahim",
    "Software Engineer",
    "Apple Developer Academy Batam",
    "Next.js Developer",
    "iOS Developer",
    "STIKOM EL-RAHMA",
    "Full-stack Developer Indonesia",
  ],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName,
    title: "Ahmad Kurniawan Ibrahim | Software Engineer Enthusiast",
    description: siteDescription,
    images: [
      {
        url: getAbsoluteUrl("/opengraph-image"),
        width: 1200,
        height: 630,
        alt: "Ahmad Kurniawan Ibrahim portfolio preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahmad Kurniawan Ibrahim | Software Engineer Enthusiast",
    description: siteDescription,
    images: [getAbsoluteUrl("/twitter-image")],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`min-h-screen scroll-smooth antialiased bg-background text-foreground`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col selection:bg-accent/30 bg-background text-foreground transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <BackgroundDecoration />
          <Navbar />
          <main className="flex-1 flex flex-col pt-16">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
