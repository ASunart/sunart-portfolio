import Link from "next/link";
import type { CaseStudy } from "../../content/cases";
import { Chip } from "../Chip";

export function CaseHeader({ study }: { study: CaseStudy }) {
  return (
    <div className="relative overflow-hidden">
      <div aria-hidden="true" className="glow-radial pointer-events-none absolute inset-0" />

      <header className="container-page relative pb-10 pt-16 lg:pt-24">
        <Link
          href="/#work"
          className="inline-flex min-h-[44px] items-center font-mono text-xs text-paper/50 transition-colors hover:text-signal"
        >
          ← All case studies
        </Link>

        <p className="type-eyebrow mt-6 text-signal">
          {study.eyebrow} · {study.year}
        </p>
        <h1 className="type-display mt-3 max-w-[18ch] text-paper">{study.name}</h1>
        <p className="type-body mt-4 max-w-[60ch] text-paper/60">{study.headline}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {study.stack.map((tech) => (
            <Chip key={tech}>{tech}</Chip>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-6">
          <div className="inline-flex flex-col rounded border border-signal/40 bg-signal/[0.06] px-5 py-4">
            <span className="type-metric text-signal">{study.result.value}</span>
            <span className="font-mono text-xs text-paper/60">{study.result.label}</span>
          </div>

          {study.externalUrl ? (
            <a
              href={study.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] items-center font-mono text-sm text-paper/60 underline underline-offset-4 transition-colors hover:text-signal"
            >
              {study.externalLabel ?? "Visit the live site"} ↗
            </a>
          ) : null}
        </div>
      </header>
    </div>
  );
}
