import type { Decision } from "../../content/cases";

export function DecisionBlock({ decision, index }: { decision: Decision; index: number }) {
  return (
    <div className="border-t border-paper/10 pt-6">
      <span className="font-mono text-xs text-signal">{String(index + 1).padStart(2, "0")}</span>
      <h3 className="mt-2 text-lg font-semibold text-paper">{decision.title}</h3>

      <dl className="mt-4 flex flex-col gap-4 text-sm">
        <div>
          <dt className="type-eyebrow text-paper/50">Constraint</dt>
          <dd className="mt-1 max-w-[65ch] text-paper/70">{decision.constraint}</dd>
        </div>
        <div>
          <dt className="type-eyebrow text-paper/50">Options</dt>
          <dd>
            <ul className="mt-1 list-disc pl-5 text-paper/60">
              {decision.options.map((option) => (
                <li key={option}>{option}</li>
              ))}
            </ul>
          </dd>
        </div>
        <div>
          <dt className="type-eyebrow text-paper/50">Choice</dt>
          <dd className="mt-1 max-w-[65ch] text-paper/80">{decision.choice}</dd>
        </div>
        <div>
          <dt className="type-eyebrow text-paper/50">Why</dt>
          <dd className="mt-1 max-w-[65ch] text-paper/60">{decision.why}</dd>
        </div>
      </dl>
    </div>
  );
}
