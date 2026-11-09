import { PROOF_POINTS } from "../content/proof";
import { CountUp } from "./CountUp";

export function ProofStrip() {
  return (
    <section aria-label="Results" className="border-y border-link/30 bg-deep/40">
      <div className="container-page grid grid-cols-2 gap-8 py-10 lg:grid-cols-4">
        {PROOF_POINTS.map((point) => (
          <div key={point.label}>
            <p className="type-metric text-signal">
              <CountUp value={point.value} suffix={point.suffix} />
            </p>
            <p className="mt-1 font-mono text-xs text-paper/60">{point.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
