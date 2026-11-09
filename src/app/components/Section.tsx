import { Rule } from "./Rule";

interface SectionProps {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}

export function Section({ id, eyebrow, title, children }: SectionProps) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="container-page py-16 lg:py-24">
      <p className="type-eyebrow text-signal">{eyebrow}</p>
      <h2 id={`${id}-title`} className="type-h2 mt-2 text-paper">
        {title}
      </h2>
      <Rule />
      <div className="mt-8 lg:mt-10">{children}</div>
    </section>
  );
}
