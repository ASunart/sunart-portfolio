const SECTIONS = [
  { id: "context", label: "Context" },
  { id: "role", label: "My role" },
  { id: "decisions", label: "Decisions" },
  { id: "outcome", label: "Outcome" },
  { id: "lessons", label: "Lessons" },
];

export function CaseContents() {
  return (
    <aside className="hidden lg:block">
      <nav aria-label="On this page" className="sticky top-24">
        <p className="type-eyebrow text-paper/40">Contents</p>
        <div className="relative mt-3">
          <span
            aria-hidden="true"
            className="absolute inset-y-0 left-0 w-px bg-paper/10"
          />
          <ul className="flex flex-col gap-2">
            {SECTIONS.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="block py-1 pl-4 font-mono text-xs text-paper/50 transition-colors hover:text-signal"
                >
                  {section.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </aside>
  );
}
