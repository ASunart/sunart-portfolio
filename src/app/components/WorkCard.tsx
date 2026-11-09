import Image from "next/image";
import Link from "next/link";
import type { CaseStudy } from "../content/cases";
import { Chip } from "./Chip";

export function WorkCard({ study, index }: { study: CaseStudy; index: number }) {
  return (
    <Link
      href={`/work/${study.slug}`}
      className="group grid gap-6 py-8 transition-colors hover:bg-paper/[0.02] lg:grid-cols-[minmax(0,1fr)_300px] lg:items-center lg:gap-10"
    >
      <div>
        <div className="flex items-center gap-3">
          <span
            aria-hidden="true"
            className="font-mono text-xs text-link-soft/80 transition-colors group-hover:text-link-soft"
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <p className="type-eyebrow text-paper/50">{study.eyebrow}</p>
        </div>

        <h3 className="type-h3 mt-3 text-paper transition-colors group-hover:text-signal">
          {study.name}
        </h3>
        <p className="mt-2 max-w-[62ch] text-sm leading-relaxed text-paper/60">{study.headline}</p>

        <p className="mt-4 font-mono text-sm text-paper/80">
          {study.result.value} <span className="text-paper/50">{study.result.label}</span>
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {study.stack.slice(0, 4).map((tech) => (
            <Chip key={tech}>{tech}</Chip>
          ))}
        </div>

        <span className="mt-5 inline-flex items-center gap-2 font-mono text-xs text-signal">
          View case
          <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
            →
          </span>
        </span>
      </div>

      <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-paper/10 transition-all duration-500 group-hover:border-link/60 group-hover:shadow-[0_0_40px_-10px_rgba(0,73,255,0.35)]">
        <Image
          src={study.preview.src}
          alt={study.preview.alt}
          fill
          sizes="(min-width: 1024px) 300px, 100vw"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
        />
      </div>
    </Link>
  );
}
