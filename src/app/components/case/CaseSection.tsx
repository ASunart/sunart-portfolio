import { Rule } from "../Rule";

export function CaseSection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-24">
      <h2 id={`${id}-title`} className="type-h2 text-paper">
        {title}
      </h2>
      <Rule />
      <div className="mt-6">{children}</div>
    </section>
  );
}
