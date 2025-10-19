export default function ProjectCard({
  title,
  description,
  tech,
}: {
  title: string;
  description: string;
  tech: string[];
}) {
  return (
    <div className="p-6 border border-primary/30 rounded-xl hover:border-primary transition-all">
      <h3 className="text-xl font-semibold text-primary mb-2">{title}</h3>
      <p className="text-light-text mb-3">{description}</p>
      <div className="flex flex-wrap gap-2 text-sm">
        {tech.map((t) => (
          <span
            key={t}
            className="px-2 py-1 border border-primary/40 text-primary rounded-lg"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
