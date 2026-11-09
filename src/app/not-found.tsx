import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-page flex min-h-[60vh] flex-col items-start justify-center py-24">
      <p className="type-eyebrow text-signal">404</p>
      <h1 className="type-h2 mt-3 text-paper">This page does not exist.</h1>
      <p className="type-body mt-3 max-w-[50ch] text-paper/60">
        The link may be old, or the case study may have moved.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex min-h-[44px] items-center rounded bg-signal px-5 font-mono text-sm font-medium text-ink transition-colors hover:bg-paper"
      >
        Back to the portfolio
      </Link>
    </section>
  );
}
