import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseContents } from "../../components/case/CaseContents";
import { CaseHeader } from "../../components/case/CaseHeader";
import { CaseMedia } from "../../components/case/CaseMedia";
import { CaseSection } from "../../components/case/CaseSection";
import { DecisionBlock } from "../../components/case/DecisionBlock";
import { NextCase } from "../../components/case/NextCase";
import { JsonLd } from "../../components/seo/JsonLd";
import { SITE_NAME, SITE_URL } from "../../constants/site";
import { CASES, getCase, getNextCase } from "../../content/cases";

export const dynamicParams = false;

export function generateStaticParams() {
  return CASES.map(({ slug }) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const study = getCase(params.slug);
  if (!study) return {};

  const url = `${SITE_URL}/work/${study.slug}`;
  const title = `${study.name} — ${SITE_NAME}`;

  return {
    title: study.name,
    description: study.headline,
    alternates: { canonical: `/work/${study.slug}` },
    openGraph: {
      type: "article",
      locale: "en_US",
      siteName: SITE_NAME,
      url,
      title,
      description: study.headline,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: study.headline,
    },
  };
}

export default function CasePage({ params }: { params: { slug: string } }) {
  const study = getCase(params.slug);
  if (!study) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CreativeWork",
        name: study.name,
        description: study.headline,
        url: `${SITE_URL}/work/${study.slug}`,
        about: study.eyebrow,
        keywords: study.stack.join(", "),
        author: { "@type": "Person", name: SITE_NAME, url: SITE_URL },
        isPartOf: { "@type": "WebSite", name: SITE_NAME, url: SITE_URL },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          {
            "@type": "ListItem",
            position: 2,
            name: "Case studies",
            item: `${SITE_URL}/#work`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: study.name,
            item: `${SITE_URL}/work/${study.slug}`,
          },
        ],
      },
    ],
  };

  return (
    <article>
      <JsonLd data={schema} />
      <CaseHeader study={study} />

      <div className="container-page grid gap-12 pb-20 lg:grid-cols-[1fr_224px] lg:gap-16">
        <div className="flex flex-col gap-16">
          <CaseSection id="context" title="Context">
            <div className="flex flex-col gap-4">
              {study.context.map((paragraph) => (
                <p key={paragraph} className="type-body max-w-[65ch] text-paper/60">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="mt-8">
              {study.products?.length ? (
                <div className="mb-8 grid gap-4 sm:grid-cols-2">
                  {study.products.map((product) => (
                    <div
                      key={product.name}
                      className="relative overflow-hidden rounded-lg border border-paper/10 bg-gradient-to-br from-deep/40 via-ink to-ink p-5"
                    >
                      <p className="type-eyebrow text-paper/50">{product.audience}</p>
                      <h3 className="mt-2 text-base font-semibold text-paper">{product.name}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-paper/60">
                        {product.description}
                      </p>
                    </div>
                  ))}
                </div>
              ) : null}

              <CaseMedia
                src={study.preview.src}
                alt={study.preview.alt}
                caption={study.preview.caption ?? study.name}
              />
            </div>
          </CaseSection>

          <CaseSection id="role" title="My role">
            <p className="type-body max-w-[65ch] text-paper/70">{study.role.summary}</p>
            <ul className="mt-4 flex list-disc flex-col gap-2 pl-5 text-sm text-paper/60">
              {study.role.bullets.map((bullet) => (
                <li key={bullet} className="max-w-[65ch]">
                  {bullet}
                </li>
              ))}
            </ul>
          </CaseSection>

          <CaseSection id="decisions" title="Decisions">
            <div className="flex flex-col gap-8">
              {study.decisions.map((decision, index) => (
                <DecisionBlock key={decision.title} decision={decision} index={index} />
              ))}
            </div>
          </CaseSection>

          <CaseSection id="outcome" title="Outcome">
            <div className="flex flex-col gap-4">
              {study.outcome.paragraphs.map((paragraph) => (
                <p key={paragraph} className="type-body max-w-[65ch] text-paper/60">
                  {paragraph}
                </p>
              ))}
            </div>
            <dl className="mt-8 grid gap-4 sm:grid-cols-2">
              {study.outcome.metrics.map((metric) => (
                <div key={metric.label} className="rounded border border-paper/10 p-4">
                  <dt className="font-mono text-xl text-signal">{metric.value}</dt>
                  <dd className="mt-1 font-mono text-xs text-paper/50">{metric.label}</dd>
                </div>
              ))}
            </dl>
          </CaseSection>

          <CaseSection id="lessons" title="Lessons">
            <ul className="flex flex-col gap-3">
              {study.lessons.map((lesson) => (
                <li key={lesson} className="flex max-w-[65ch] gap-3 text-paper/60">
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-signal/70"
                  />
                  <span>{lesson}</span>
                </li>
              ))}
            </ul>
          </CaseSection>
        </div>

        <CaseContents />
      </div>

      <NextCase study={getNextCase(study.slug)} />
    </article>
  );
}
