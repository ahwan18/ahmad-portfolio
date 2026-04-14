"use client";
import { FadeIn } from "./FadeIn";
import { ThemeToggle } from "./ThemeToggle";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Only track intersection if we are on the homepage
    if (pathname !== "/") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      // Offset triggers the active state when a section is roughly centralized
      { rootMargin: "-30% 0px -70% 0px", threshold: 0 } 
    );

    navLinks.forEach(({ href }) => {
      const section = document.querySelector(href);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [pathname]);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    if (pathname !== "/" && href.startsWith("#")) {
       return; // Standard next link routing away from project pages
    }
    
    if (href.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setActiveSection(href.substring(1));
        setIsMobileMenuOpen(false);
      }
    }
  };

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-50 pointer-events-none"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98], delay: 0.1 }}
    >
        {/* Advanced Masking: Gradient mask to smoothly hide sharp text scrolling above the navbar */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background via-background/90 to-transparent -z-10" />
        
        <div className="container mx-auto max-w-6xl px-6 pt-4">
          <nav className="pointer-events-auto flex flex-col md:flex-row md:items-center justify-between px-6 py-3 rounded-[2rem] bg-white/70 dark:bg-black/70 backdrop-blur-md border border-border/20 shadow-sm shadow-black/5">
            <div className="flex items-center justify-between w-full md:w-auto">
              <Link href="/" className="font-semibold text-lg hover:opacity-80 transition-opacity">
                Ahmad<span className="text-accent">.</span>
              </Link>
              
              <div className="flex items-center gap-4 md:hidden">
                <ThemeToggle />
                <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 -mr-2 text-foreground">
                  {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                
                return (
                  <Link 
                    key={link.name} 
                    href={pathname === "/" ? link.href : `/${link.href}`}
                    onClick={(e) => handleScroll(e, link.href)}
                    className={`relative px-4 py-2 text-sm font-medium transition-colors ${isActive ? 'text-foreground' : 'text-muted hover:text-foreground/80'}`}
                  >
                    {link.name}
                    {isActive && pathname === "/" && (
                      <motion.div
                        layoutId="navUnderline"
                        className="absolute left-0 right-0 bottom-0 h-0.5 bg-accent"
                        initial={false}
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>
            
            <div className="hidden md:block">
              <ThemeToggle />
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="md:hidden pt-4 pb-2 flex flex-col gap-2 border-t border-border/10 mt-3"
              >
                {navLinks.map((link) => {
                  const isActive = activeSection === link.href.substring(1);
                  return (
                    <Link 
                      key={link.name} 
                      href={pathname === "/" ? link.href : `/${link.href}`}
                      onClick={(e) => handleScroll(e, link.href)}
                      className={`px-4 py-2 text-sm font-medium rounded-lg ${isActive ? 'bg-accent/10 text-accent' : 'text-muted hover:text-foreground hover:bg-black/5 dark:hover:bg-white/5'}`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </motion.div>
            )}

          </nav>
        </div>
    </motion.div>
  );
}
