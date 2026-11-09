import { CASES } from "../content/cases";
import { Reveal } from "./Reveal";
import { WorkCard } from "./WorkCard";

export function SelectedWork() {
  return (
    <section id="work" aria-labelledby="work-title" className="container-page py-16 lg:py-24">
      <p className="type-eyebrow text-signal">Work</p>
      <h2 id="work-title" className="type-h2 mt-2 text-paper">
        Case studies
      </h2>
      <p className="type-body mt-4 max-w-[60ch] text-paper/60">
        Three products, the decisions behind them, and what changed.
      </p>

      <div className="mt-10 divide-y divide-paper/10 border-y border-paper/10">
        {CASES.map((study, index) => (
          <Reveal key={study.slug} delay={index * 0.05}>
            <WorkCard study={study} index={index} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
