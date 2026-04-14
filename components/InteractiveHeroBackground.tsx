"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export function InteractiveHeroBackground() {
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Motion values for cursor position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for that "liquid" feel
  const springConfig = { damping: 30, stiffness: 200, mass: 0.5 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  // Gyro values for mobile
  const [gyro, setGyro] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setMounted(true);
    
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const { left, top, width, height } = containerRef.current.getBoundingClientRect();
        const x = (e.clientX - left) / width - 0.5;
        const y = (e.clientY - top) / height - 0.5;
        mouseX.set(x * 100);
        mouseY.set(y * 100);
      }
    };

    const handleOrientation = (e: DeviceOrientationEvent) => {
      if (window.innerWidth < 768 && e.beta !== null && e.gamma !== null) {
        setGyro({
          x: (e.gamma / 45) * 20,
          y: ((e.beta - 45) / 45) * 20,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    if (window.DeviceOrientationEvent) {
      window.addEventListener("deviceorientation", handleOrientation);
    }

    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("deviceorientation", handleOrientation);
    };
  }, [mouseX, mouseY]);

  if (!mounted) {
    return <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none" />;
  }

  return (
    <div ref={containerRef} className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Interactive Cursor Blur (Glow) */}
      {!isMobile && (
        <motion.div
          style={{
            x: springX,
            y: springY,
            translateX: "-50%",
            translateY: "-50%",
          }}
          className="absolute top-1/2 left-1/2 w-[600px] h-[600px] rounded-full bg-accent/5 blur-[120px]"
        />
      )}

      {/* Floating Star-Particles */}
      {[...Array(20)].map((_, i) => (
        <Particle 
          key={i} 
          index={i} 
          springX={springX} 
          springY={springY} 
          gyro={gyro} 
          isMobile={isMobile} 
        />
      ))}
    </div>
  );
}

function Particle({ 
  springX, 
  springY, 
  gyro, 
  isMobile 
}: { 
  index: number; 
  springX: any; 
  springY: any; 
  gyro: any; 
  isMobile: boolean 
}) {
  const [pos] = useState({
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    opacity: Math.random() * 0.4 + 0.3,
    parallaxSpeed: Math.random() * 0.5 + 0.2,
  });

  const transX = useTransform(springX, (val: number) => val * -pos.parallaxSpeed);
  const transY = useTransform(springY, (val: number) => val * -pos.parallaxSpeed);

  return (
    <motion.div
      style={{
        left: `${pos.x}%`,
        top: `${pos.y}%`,
        x: isMobile ? gyro.x * pos.parallaxSpeed : transX,
        y: isMobile ? gyro.y * pos.parallaxSpeed : transY,
        width: pos.size,
        height: pos.size,
        opacity: pos.opacity,
      }}
      className="absolute rounded-full bg-foreground/30 dark:bg-foreground/50 blur-[0.5px]"
    />
  );
}
