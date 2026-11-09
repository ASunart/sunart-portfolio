import { SOCIAL_MEDIA } from "../constants/socialMedia";
import { SITE_NAME } from "../constants/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-paper/10">
      <div className="container-page flex flex-col gap-6 py-8 lg:flex-row lg:items-center lg:justify-between">
        <p className="font-mono text-xs text-paper/50">
          © {year} {SITE_NAME}
        </p>

        <nav aria-label="Social">
          <ul className="flex flex-wrap gap-6">
            {SOCIAL_MEDIA.map(({ id, label, link }) => (
              <li key={id}>
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-[44px] items-center font-mono text-sm text-paper/70 transition-colors hover:text-signal"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href="#main"
          className="flex min-h-[44px] items-center font-mono text-sm text-paper/70 transition-colors hover:text-signal"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
