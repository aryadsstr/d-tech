"use client";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import Starfield from "./Starfield";
import HeroIntro from "./HeroIntro";
import MagneticButton from "./MagneticButton";
import ReactiveBackground from "./ReactiveBackground";

export default function HeroSection() {
  const [introDone, setIntroDone] = useState(false);
  // motion values (selalu di atas)
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 80, damping: 15 });
  const springY = useSpring(y, { stiffness: 80, damping: 15 });

  // transform values (harus dideklarasi di luar JSX)
  const glow1X = useTransform(springX, [-300, 300], [-80, 80]);
  const glow1Y = useTransform(springY, [-300, 300], [-80, 80]);
  const glow2X = useTransform(springX, [300, -300], [-60, 60]);
  const glow2Y = useTransform(springY, [300, -300], [-60, 60]);
  const rotateX = useTransform(springY, [-200, 200], [15, -15]);
  const rotateY = useTransform(springX, [-200, 200], [-15, 15]);

  // tracking cursor
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      x.set(e.clientX - innerWidth / 2);
      y.set(e.clientY - innerHeight / 2);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [x, y]);

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden">
      {/* Intro overlay */}
      {!introDone && <HeroIntro onComplete={() => setIntroDone(true)} />}

      {/* Background stars */}
      <ReactiveBackground />
      <Starfield />

      {/* Logo muncul setelah intro selesai */}
      {introDone && (
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
          className="z-10 glow-float"
        >
          <Image
            src="/icon.png"
            alt="D-Tech Logo"
            width={160}
            height={160}
            className="drop-shadow-[0_0_25px_#00E0FF90]"
            priority
          />
        </motion.div>
      )}

      {/* Text & buttons */}
      {introDone && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="z-20 mt-10 text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-primary">
            Building the Future with Code.
          </h1>
          <p className="text-light/80 max-w-2xl mt-4 mx-auto">
            System Analyst • Fullstack Developer • DevOps Engineer
          </p>
          <div className="flex justify-center gap-4 mt-10">
            <div className="flex justify-center gap-4 mt-10">
              <MagneticButton>
                <a href="#work">View Projects</a>
              </MagneticButton>
              <MagneticButton>
                <a href="#contact">Contact Me</a>
              </MagneticButton>
            </div>
          </div>
        </motion.div>
      )}
    </section>
  );
}
