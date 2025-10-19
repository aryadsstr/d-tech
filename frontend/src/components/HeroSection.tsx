"use client";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-bold mb-4 text-primary"
      >
        I build digital systems that scale.
      </motion.h1>
      <p className="text-lg text-light-text mb-6">
        System Analyst • Fullstack Developer • DevOps Engineer
      </p>
      <div className="flex gap-4">
        <a href="/work" className="px-5 py-3 bg-primary text-black font-medium rounded-lg hover:opacity-90">View Work</a>
        <a href="/contact" className="px-5 py-3 border border-primary rounded-lg hover:bg-primary hover:text-black">Contact Me</a>
      </div>
    </section>
  );
}
