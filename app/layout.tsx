import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "../components/ThemeProvider";
import { Navbar } from "../components/Navbar";
import { BackgroundDecoration } from "../components/BackgroundDecoration";

export const metadata: Metadata = {
  title: "Ahmad Kurniawan Ibrahim | Software Engineer",
  description: "Portfolio of Ahmad Kurniawan Ibrahim, Software Engineer and Apple Developer Academy Alumnus.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`min-h-screen scroll-smooth antialiased bg-background text-foreground`}>
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
