"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { Observer } from "gsap/Observer";
import { useGSAP } from "@gsap/react";
import { useSlider } from "./SliderContext";

gsap.registerPlugin(Observer);

interface PageSliderProps {
  children: React.ReactNode[];
}

export function PageSlider({ children }: PageSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);
  const { currentIndex, goToSection } = useSlider();
  const currentIndexRef = useRef(currentIndex);
  const isAnimating = useRef(false);
  const isFirstMount = useRef(true);

  // Sync state with context and trigger transition
  useEffect(() => {
    // On first mount, just set the initial state without animation
    if (isFirstMount.current) {
      isFirstMount.current = false;
      currentIndexRef.current = currentIndex;

      sectionsRef.current.forEach((section, i) => {
        if (section) {
          gsap.set(section, {
            yPercent: i === currentIndex ? 0 : 100,
            zIndex: i === currentIndex ? 10 : 0,
            display: i === currentIndex ? "flex" : "none",
            scale: 1,
            opacity: 1,
          });
        }
      });
      return;
    }

    if (currentIndex !== currentIndexRef.current) {
      handleTransition(currentIndex);
    }
  }, [currentIndex]);

  const handleTransition = (nextIndex: number) => {
    if (isAnimating.current) return;

    const prevIndex = currentIndexRef.current;
    if (nextIndex === prevIndex) return;

    isAnimating.current = true;
    const isMovingDown = nextIndex > prevIndex;

    const currentSection = sectionsRef.current[prevIndex];
    const nextSection = sectionsRef.current[nextIndex];

    if (!currentSection || !nextSection) {
      isAnimating.current = false;
      currentIndexRef.current = nextIndex;
      return;
    }

    const tl = gsap.timeline({
      onComplete: () => {
        isAnimating.current = false;
        currentIndexRef.current = nextIndex;

        // Hide all except current to keep DOM clean and performant
        sectionsRef.current.forEach((section, i) => {
          if (section && i !== nextIndex) {
            gsap.set(section, { display: "none" });
          }
        });
      },
    });

    if (isMovingDown) {
      // NEXT section slides UP from bottom over current
      gsap.set(nextSection, { yPercent: 100, zIndex: 10, display: "flex", scale: 1, opacity: 1 });
      gsap.set(currentSection, { zIndex: 5 });

      tl.to(nextSection, {
        yPercent: 0,
        duration: 1.2,
        ease: "expo.inOut",
      });

      tl.to(currentSection, {
        scale: 0.9,
        opacity: 0.5,
        duration: 1.2,
        ease: "expo.inOut",
      }, "<");
    } else {
      // CURRENT section slides DOWN to reveal previous
      gsap.set(nextSection, { yPercent: 0, zIndex: 5, display: "flex", scale: 0.9, opacity: 0.5 });
      gsap.set(currentSection, { zIndex: 10 });

      tl.to(currentSection, {
        yPercent: 100,
        duration: 1.2,
        ease: "expo.inOut",
      });

      tl.to(nextSection, {
        scale: 1,
        opacity: 1,
        duration: 1.2,
        ease: "expo.inOut",
      }, "<");
    }
  };

  useGSAP(() => {
    const observer = Observer.create({
      target: window,
      type: "wheel,touch,pointer",
      wheelSpeed: 0.5,
      onUp: () => {
        if (!isAnimating.current && currentIndexRef.current > 0) {
          goToSection(currentIndexRef.current - 1);
        }
      },
      onDown: () => {
        if (!isAnimating.current && currentIndexRef.current < children.length - 1) {
          goToSection(currentIndexRef.current + 1);
        }
      },
      tolerance: 50,
      preventDefault: false,
    });

    return () => observer.kill();
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="slider-container">
      {React.Children.map(children, (child, i) => (
        <div
          key={i}
          ref={(el) => { sectionsRef.current[i] = el; }}
          className="slider-section no-scrollbar"
        >
          <div className="w-full h-full overflow-y-auto no-scrollbar">
            {child}
          </div>
        </div>
      ))}
    </div>
  );
}
