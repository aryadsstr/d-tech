export default function ServiceCard({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) {
  return (
    <div className="p-6 border border-primary/30 rounded-xl hover:border-primary transition-all">
      <h3 className="text-xl font-semibold text-primary mb-2">{title}</h3>
      <p className="text-light-text">{desc}</p>
    </div>
  );
}
