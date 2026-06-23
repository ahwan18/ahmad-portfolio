"use client";
import { FadeIn } from "./FadeIn";
import { ThemeToggle } from "./ThemeToggle";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useSlider } from "./SliderContext";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Leadership", href: "#leadership" },
  { name: "Projects", href: "#projects" },
];

export function Navbar() {
  const { currentIndex, goToSection } = useSlider();
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setActiveSection(navLinks[currentIndex].href.substring(1));
  }, [currentIndex]);

  const isManualScrolling = useRef(false);
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string, index: number) => {
    if (pathname !== "/" && href.startsWith("#")) {
       return; // Standard next link routing away from project pages
    }
    
    if (href.startsWith("#")) {
      e.preventDefault();
      goToSection(index);
      setIsMobileMenuOpen(false);
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
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background via-background/95 to-transparent -z-10" />
        
        <div className="container mx-auto max-w-6xl px-6 pt-4">
          <nav className="pointer-events-auto flex flex-col md:flex-row md:items-center justify-between px-6 py-3 rounded-[2rem] bg-white/70 dark:bg-black/70 backdrop-blur-2xl border border-border/20 shadow-sm shadow-black/5">
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
                    onClick={(e) => handleScroll(e, link.href, navLinks.indexOf(link))}
                    className={`px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-300 ${
                      isActive && pathname === "/" 
                        ? 'bg-foreground/10 text-foreground shadow-sm' 
                        : 'text-muted hover:text-foreground hover:bg-foreground/5'
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
                      onClick={(e) => handleScroll(e, link.href, navLinks.indexOf(link))}
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
