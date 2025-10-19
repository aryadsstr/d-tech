"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function HeroIntro({
  onComplete,
}: {
  onComplete: () => void;
}) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onComplete();
    }, 2500); // durasi animasi intro (2.5s)
    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!visible) return null;

  return (
    <motion.div
      initial={{ scale: 1, opacity: 1 }}
      animate={{ scale: 5, opacity: 0 }}
      transition={{ duration: 2.5, ease: "easeInOut" }}
      className="fixed inset-0 flex items-center justify-center bg-dark z-[100] pointer-events-none"
    >
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: [0, 1, 1, 0],
          scale: [0.8, 1, 1.2, 2],
        }}
        transition={{ duration: 2.5, ease: "easeInOut" }}
        className="text-primary text-5xl font-bold drop-shadow-[0_0_20px_#00E0FF90]"
      >
        D-TECH
      </motion.h1>
    </motion.div>
  );
}
