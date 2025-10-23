"use client";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

export default function AboutSection() {
  return (
    <section id="about" className="max-w-5xl mx-auto px-6 py-24 text-center">
      <Reveal>
        <h2 className="text-3xl font-bold text-primary mb-6">About Me</h2>
      </Reveal>

      <Reveal delay={0.2}>
        <p className="text-light/80 dark:text-light/60 max-w-3xl mx-auto leading-relaxed text-lg">
          Hi, I’m <span className="text-primary">Arya Disastra</span> — a System Analyst, Fullstack Developer, and DevOps Engineer who loves building scalable, maintainable, and efficient systems from backend to frontend.
          With over <span className="text-primary">5 years of experience in software development</span>, I’ve worked on various government, enterprise, and public platforms using Laravel, Go (Golang), Vue.js, and Flutter, supported by Docker, Nginx, and CI/CD pipelines for seamless deployments.
          I have a strong background in system architecture design, API integration, and DevOps automation, ensuring every product I build is reliable and production-ready.
        </p>
      </Reveal>
    </section>
  );
}
