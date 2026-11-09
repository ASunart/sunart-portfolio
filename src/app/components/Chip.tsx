export function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded border border-paper/15 px-2 py-1 font-mono text-xs text-paper/60">
      {children}
    </span>
  );
}
