"use client";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

export default function ReactiveBackground() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth interpolation
  const springX = useSpring(mouseX, { stiffness: 50, damping: 15 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 15 });

  // Transform to hue & brightness
  const hue = useTransform(springX, [0, window.innerWidth], [180, 250]);
  const brightness = useTransform(springY, [0, window.innerHeight], [0.5, 1]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="absolute inset-0 -z-20"
      style={{
        background: `radial-gradient(
          circle at ${springX}px ${springY}px,
          hsl(${hue}, 100%, 60%) 0%,
          hsl(${hue}, 100%, 30%) 40%,
          #0A0F1F 100%
        )`,
        filter: "blur(40px)",
        opacity: brightness,
        transition: "background 0.2s ease-out",
      }}
    />
  );
}
