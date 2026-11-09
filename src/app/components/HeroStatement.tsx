import Image from "next/image";
import Link from "next/link";

export function HeroStatement() {
  return (
    <section aria-label="Introduction" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-[-10rem] h-[34rem] w-[34rem] rounded-full bg-deep/60 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 bottom-0 h-[18rem] w-[18rem] rounded-full bg-link/10 blur-[100px]"
      />

      <div className="container-page relative grid gap-8 pb-20 pt-16 lg:grid-cols-[minmax(0,1fr)_280px] lg:items-end lg:gap-x-16 lg:pb-28 lg:pt-28">
        <p className="type-eyebrow rise text-signal lg:col-start-1 lg:row-start-1">
          Alejandro Solarte
        </p>

        <h1 className="type-display rise rise-1 text-paper lg:col-start-1 lg:row-start-2">
          <span className="block">First the business.</span>
          <span className="block text-paper/70">Then the user.</span>
          <span className="block text-signal">Then the code.</span>
        </h1>

        <div className="rise rise-2 mx-auto w-40 shrink-0 lg:col-start-2 lg:row-span-5 lg:row-start-1 lg:mx-0 lg:w-full lg:self-center">
          <div className="portrait-glow grid h-40 place-items-center overflow-clip rounded-full bg-signal lg:h-[280px]">
            <Image
              src="/sunart-portrait.webp"
              alt="Alejandro Solarte"
              width={2880}
              height={4316}
              priority
              className="relative top-6 w-full"
            />
          </div>
        </div>

        <p className="rise rise-3 max-w-[46ch] text-base text-paper/60 lg:col-start-1 lg:row-start-3">
          Front-end developer &amp; designer. Design systems, performance and UX for products at
          scale.
        </p>

        <div className="rise rise-4 flex flex-wrap gap-3 lg:col-start-1 lg:row-start-4">
          <Link
            href="/#work"
            className="group inline-flex min-h-[44px] items-center gap-2 rounded bg-signal px-5 font-mono text-sm font-medium text-ink transition-colors hover:bg-paper"
          >
            See the work
            <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] items-center rounded border border-paper/20 px-5 font-mono text-sm text-paper transition-colors hover:border-signal hover:text-signal"
          >
            Download CV
          </a>
        </div>

        <p className="rise rise-4 font-mono text-xs text-paper/50 lg:col-start-1 lg:row-start-5">
          Open to full-time roles · Available for freelance
        </p>
      </div>
    </section>
  );
}
