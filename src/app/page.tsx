import { About } from "./components/About";
import { Capabilities } from "./components/Capabilities";
import { Contact } from "./components/Contact";
import { ExperienceTimeline } from "./components/ExperienceTimeline";
import { HeroStatement } from "./components/HeroStatement";
import { ProofStrip } from "./components/ProofStrip";
import { SelectedWork } from "./components/SelectedWork";
import { JsonLd } from "./components/seo/JsonLd";
import { SOCIAL_MEDIA } from "./constants/socialMedia";
import { SITE_EMAIL, SITE_NAME, SITE_URL } from "./constants/site";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: SITE_NAME,
      url: SITE_URL,
      jobTitle: "Front-end developer & designer",
      email: `mailto:${SITE_EMAIL}`,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Cali",
        addressCountry: "CO",
      },
      sameAs: SOCIAL_MEDIA.map((social) => social.link),
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Universidad Icesi",
      },
      knowsAbout: [
        "Front-end development",
        "Design systems",
        "Web performance",
        "Accessibility",
        "UX research",
        "React",
        "Next.js",
        "TypeScript",
      ],
      knowsLanguage: ["es", "en", "pt"],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: SITE_NAME,
      url: SITE_URL,
      inLanguage: "en",
      author: { "@id": `${SITE_URL}/#person` },
    },
  ],
};

export default function Home() {
  return (
    <>
      <JsonLd data={schema} />
      <HeroStatement />
      <SelectedWork />
      <ProofStrip />
      <ExperienceTimeline />
      <Capabilities />
      <About />
      <Contact />
    </>
  );
}
