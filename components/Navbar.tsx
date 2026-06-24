"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Leadership", href: "#leadership" },
  { name: "Projects", href: "#projects" },
];

export function Navbar() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (pathname !== "/") return;

    const sections = navLinks
      .map(({ href }) => document.querySelector<HTMLElement>(href))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target.id) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      { rootMargin: "-30% 0px -55%", threshold: [0, 0.25, 0.5] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [pathname]);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
      <div className="container mx-auto max-w-6xl px-6 pt-4">
        <nav className="pointer-events-auto flex flex-col md:flex-row md:items-center justify-between px-6 py-3 rounded-[2rem] bg-background/95 border border-border shadow-sm shadow-black/5">
          <div className="flex items-center justify-between w-full md:w-auto">
            <Link
              href="/"
              className="font-semibold text-lg hover:text-accent transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              Ahmad<span className="text-accent">.</span>
            </Link>

            <div className="flex items-center gap-3 md:hidden">
              <ThemeToggle />
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen((open) => !open)}
                className="p-2 -mr-2 rounded-full text-foreground hover:bg-card transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const sectionId = link.href.slice(1);
              const isActive = pathname === "/" && activeSection === sectionId;
              const href = pathname === "/" ? link.href : `/${link.href}`;

              return (
                <Link
                  key={link.name}
                  href={href}
                  className={`px-4 py-1.5 text-sm font-medium rounded-full transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                    isActive
                      ? "bg-foreground text-background"
                      : "text-muted hover:text-foreground hover:bg-card"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="hidden md:block">
            <ThemeToggle />
          </div>

          {isMobileMenuOpen && (
            <div className="md:hidden pt-4 pb-2 flex flex-col gap-1 border-t border-border mt-3">
              {navLinks.map((link) => {
                const sectionId = link.href.slice(1);
                const isActive = pathname === "/" && activeSection === sectionId;
                const href = pathname === "/" ? link.href : `/${link.href}`;

                return (
                  <Link
                    key={link.name}
                    href={href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`px-4 py-2.5 text-sm font-medium rounded-xl transition-colors duration-150 ${
                      isActive
                        ? "bg-foreground text-background"
                        : "text-muted hover:text-foreground hover:bg-card"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
          )}
        </nav>
      </div>
    </div>
  );
}
