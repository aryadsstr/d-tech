import ServiceCard from "@/components/ServiceCard";

const services = [
  {
    title: "Web & API Development",
    desc: "Build scalable web applications using Laravel, Go, or Node.js.",
  },
  {
    title: "Mobile App Development",
    desc: "Cross-platform apps built with Flutter and integrated backend APIs.",
  },
  {
    title: "DevOps & Cloud Deployment",
    desc: "CI/CD pipelines, Docker, and cloud infrastructure automation.",
  },
  {
    title: "System Architecture Consulting",
    desc: "Helping teams design reliable, maintainable system architectures.",
  },
];

export default function ServicesPage() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-primary mb-8">Services</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {services.map((s) => (
          <ServiceCard key={s.title} {...s} />
        ))}
      </div>
    </section>
  );
}
