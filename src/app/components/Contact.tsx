import { SOCIAL_MEDIA } from "../constants/socialMedia";
import { SITE_EMAIL } from "../constants/site";
import { Section } from "./Section";

export function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" title="Let's talk">
      <p className="type-body max-w-[60ch] text-paper/60">
        Open to full-time roles and freelance projects. Remote, from Cali, Colombia (UTC−5).
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href={`mailto:${SITE_EMAIL}`}
          className="inline-flex min-h-[44px] items-center rounded bg-signal px-5 font-mono text-sm font-medium text-ink transition-colors hover:bg-paper"
        >
          Email me
        </a>
        <a
          href="/cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-[44px] items-center rounded border border-paper/20 px-5 font-mono text-sm text-paper transition-colors hover:border-link hover:text-link-soft"
        >
          Download CV
        </a>
      </div>

      <ul className="mt-8 flex flex-wrap gap-6">
        {SOCIAL_MEDIA.map(({ id, label, link }) => (
          <li key={id}>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-[44px] items-center font-mono text-sm text-paper/50 transition-colors hover:text-link-soft"
            >
              {label} ↗
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
