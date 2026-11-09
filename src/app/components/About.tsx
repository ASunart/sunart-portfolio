import { Section } from "./Section";

const PRINCIPLES = [
  {
    title: "Understand the constraint",
    body: "I start with the business goal and the person who has to use the thing. A technically elegant answer to the wrong problem is still wrong.",
  },
  {
    title: "Cut before building",
    body: "Scope is a product decision. I remove what the user does not need before writing code, not after shipping it.",
  },
  {
    title: "Choose the stack last",
    body: "Architecture serves the decision above it. React, Next, the database: the choice comes after the problem, never before.",
  },
];

const FACTS = [
  "Based in Cali, Colombia (UTC−5)",
  "B.S. Interactive Media Design, Universidad Icesi",
  "Scrum certified (Kleer)",
  "Spanish · English · Portuguese (basic)",
];

export function About() {
  return (
    <Section id="about" eyebrow="About" title="How I work">
      <p className="type-body max-w-[62ch] text-paper/70">
        Design-trained engineer. The hardest part of the job is not the implementation — it is
        understanding what the business actually needs. That is the part I optimize for.
      </p>

      <ol className="mt-10 grid gap-6 md:grid-cols-3">
        {PRINCIPLES.map((principle, index) => (
          <li key={principle.title} className="border-t border-paper/10 pt-4">
            <span aria-hidden="true" className="font-mono text-xs text-link-soft/80">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-2 text-base font-semibold text-paper">{principle.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-paper/60">{principle.body}</p>
          </li>
        ))}
      </ol>

      <ul className="mt-10 grid gap-2 border-t border-paper/10 pt-6 sm:grid-cols-2">
        {FACTS.map((fact) => (
          <li key={fact} className="font-mono text-xs text-paper/50">
            {fact}
          </li>
        ))}
      </ul>

      <a
        href="/cv.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-flex min-h-[44px] items-center font-mono text-sm text-signal underline underline-offset-4 hover:text-paper"
      >
        View full CV (PDF) ↗
      </a>
    </Section>
  );
}
