"use client";
import { motion, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function NeonCursor() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  // motion springs for smoothness
  const springX = useSpring(0, { stiffness: 150, damping: 20 });
  const springY = useSpring(0, { stiffness: 150, damping: 20 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setMouse({ x: e.clientX, y: e.clientY });
      springX.set(e.clientX - 10);
      springY.set(e.clientY - 10);
    };

    const handleEnter = () => setHovering(true);
    const handleLeave = () => setHovering(false);

    // tambahkan hover listener ke elemen interaktif
    const hoverTargets = document.querySelectorAll("button, a, .magnetic");
    hoverTargets.forEach((el) => {
      el.addEventListener("mouseenter", handleEnter);
      el.addEventListener("mouseleave", handleLeave);
    });

    window.addEventListener("mousemove", handleMove);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      hoverTargets.forEach((el) => {
        el.removeEventListener("mouseenter", handleEnter);
        el.removeEventListener("mouseleave", handleLeave);
      });
    };
  }, [springX, springY]);

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999]"
      style={{
        x: springX,
        y: springY,
      }}
    >
      <div
        className={`transition-all duration-200 ${
          hovering
            ? "w-8 h-8 bg-primary/30 blur-lg"
            : "w-3 h-3 bg-primary blur-[1px]"
        } rounded-full shadow-[0_0_15px_#00E0FFaa]`}
      ></div>
    </motion.div>
  );
}
