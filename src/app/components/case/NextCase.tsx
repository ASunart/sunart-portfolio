import Link from "next/link";
import type { CaseStudy } from "../../content/cases";

export function NextCase({ study }: { study: CaseStudy }) {
  return (
    <section aria-labelledby="next-case-title" className="border-t border-paper/10">
      <div className="container-page py-12">
        <p className="type-eyebrow text-paper/50">Next case</p>
        <Link
          href={`/work/${study.slug}`}
          className="group mt-3 flex flex-wrap items-baseline justify-between gap-4"
        >
          <h2 id="next-case-title" className="type-h2 text-paper transition-colors group-hover:text-signal">
            {study.name}
          </h2>
          <span className="font-mono text-sm text-paper/50">
            {study.result.value} {study.result.label} →
          </span>
        </Link>
      </div>
    </section>
  );
}
