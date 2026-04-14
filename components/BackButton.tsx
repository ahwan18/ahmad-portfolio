"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export function BackButton() {
  const router = useRouter();

  const handleBack = (e: React.MouseEvent) => {
    // Check if there's history to go back to
    // If we're in a browser and have window history, router.back() is usually smoother
    if (typeof window !== "undefined" && window.history.length > 1) {
      e.preventDefault();
      router.back();
    }
  };

  return (
    <button 
      onClick={handleBack}
      className="inline-flex items-center gap-2 text-muted hover:text-foreground transition-colors mb-12 group"
    >
      <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> 
      <span>Back to Portfolio</span>
    </button>
  );
}
