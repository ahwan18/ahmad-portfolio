"use client";
import React, { createContext, useContext, useState, useCallback } from "react";

interface SliderContextType {
  currentIndex: number;
  goToSection: (index: number) => void;
  registerSection: (id: string) => void;
  sections: string[];
}

const SliderContext = createContext<SliderContextType | undefined>(undefined);

export function SliderProvider({ children }: { children: React.ReactNode }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sections, setSections] = useState<string[]>([]);

  const registerSection = useCallback((id: string) => {
    setSections((prev) => (prev.includes(id) ? prev : [...prev, id]));
  }, []);

  const goToSection = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  return (
    <SliderContext.Provider value={{ currentIndex, goToSection, registerSection, sections }}>
      {children}
    </SliderContext.Provider>
  );
}

export function useSlider() {
  const context = useContext(SliderContext);
  if (context === undefined) {
    throw new Error("useSlider must be used within a SliderProvider");
  }
  return context;
}
