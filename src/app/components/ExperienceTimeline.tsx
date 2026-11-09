import { EXPERIENCE } from "../constants/experience";
import { Section } from "./Section";

export function ExperienceTimeline() {
  return (
    <Section id="experience" eyebrow="Experience" title="Where I worked">
      <ol>
        {EXPERIENCE.map((entry) => (
          <li
            key={entry.id}
            className="group grid gap-1 border-b border-paper/5 py-4 transition-colors hover:border-link/30 lg:grid-cols-[150px_1fr] lg:gap-6"
          >
            <p
              className={`font-mono text-xs lg:whitespace-nowrap ${
                entry.period.includes("present") ? "text-link-soft/80" : "text-paper/50"
              }`}
            >
              {entry.period}
            </p>
            <div>
              <p className="text-sm leading-snug">
                <span className="font-semibold text-paper transition-colors group-hover:text-signal">
                  {entry.role}
                </span>
                <span className="text-paper/40"> · </span>
                <span className="text-paper/70">{entry.company}</span>
              </p>
              <p className="mt-1 max-w-[70ch] text-sm text-paper/50">{entry.summary}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
