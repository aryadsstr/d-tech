"use client";
import { motion } from "framer-motion";

const projects = [
  {
    name: "WHO Partners Platform",
    desc: "A collaboration platform for pandemic data management.",
    tech: ["Laravel", "Vue", "Docker"],
  },
  {
    name: "Smart City Kendari",
    desc: "IoT & dashboard system for municipal service integration.",
    tech: ["Go", "PostgreSQL", "Redis"],
  },
  {
    name: "E-Office Kemenhan",
    desc: "Digital workflow management for Ministry of Defense.",
    tech: ["Laravel", "REST API", "Bootstrap"],
  },
];

export default function ProjectsSection() {
  return (
    <section id="work" className="max-w-6xl mx-auto px-6 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-primary mb-12 text-center"
      >
        Featured Projects
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((p) => (
          <motion.div
            key={p.name}
            whileHover={{ y: -5 }}
            className="p-6 border border-primary/30 rounded-xl hover:border-primary transition-all"
          >
            <h3 className="text-xl font-semibold text-primary mb-2">{p.name}</h3>
            <p className="text-light/70 mb-3">{p.desc}</p>
            <div className="flex flex-wrap gap-2 text-sm">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="px-2 py-1 border border-primary/40 rounded-md text-primary"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
