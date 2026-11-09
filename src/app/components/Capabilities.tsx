import { CAPABILITIES } from "../constants/capabilities";
import { Chip } from "./Chip";
import { Section } from "./Section";

export function Capabilities() {
  return (
    <Section id="capabilities" eyebrow="Capabilities" title="What I work with">
      <dl className="flex flex-col">
        {CAPABILITIES.map((row) => (
          <div
            key={row.label}
            className="grid gap-3 border-t border-paper/10 py-4 transition-colors first:border-t-0 first:pt-0 hover:border-link/30 lg:grid-cols-[200px_1fr] lg:items-baseline"
          >
            <dt className="type-eyebrow text-link-soft/80">{row.label}</dt>
            <dd className="flex flex-wrap gap-2">
              {row.items.map((item) => (
                <Chip key={item}>{item}</Chip>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
