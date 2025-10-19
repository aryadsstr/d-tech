import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    title: "WHO Partners Platform",
    description: "A global collaboration tool built for pandemic data sharing.",
    tech: ["Laravel", "Vue", "MySQL", "Docker"],
  },
  {
    title: "Smart City Kendari",
    description: "Integrated municipal platform for city management and citizen services.",
    tech: ["Go", "PostgreSQL", "Redis", "Kubernetes"],
  },
  {
    title: "E-Office Kemenhan",
    description: "Digital workflow and document management system for the Ministry of Defense.",
    tech: ["Laravel", "Bootstrap", "REST API"],
  },
];

export default function WorkPage() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-primary mb-8">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
}
