export type CaseSlug = "bosanet" | "sonesta" | "colombiatodo";

export interface Decision {
  title: string;
  constraint: string;
  options: string[];
  choice: string;
  why: string;
}

export interface Metric {
  value: string;
  label: string;
}

export interface CaseProduct {
  name: string;
  audience: string;
  description: string;
}

export interface CaseStudy {
  slug: CaseSlug;
  name: string;
  eyebrow: string;
  headline: string;
  year: string;
  stack: string[];
  result: Metric;
  context: string[];
  products?: CaseProduct[];
  role: { summary: string; bullets: string[] };
  decisions: Decision[];
  outcome: { paragraphs: string[]; metrics: Metric[] };
  lessons: string[];
  preview: { src: string; alt: string; caption?: string };
  externalUrl?: string;
  externalLabel?: string;
}

export const CASES: readonly CaseStudy[] = [
  {
    slug: "bosanet",
    name: "Bosanet",
    eyebrow: "Bosanet Xpress + Seller Portal",
    headline:
      "Two separate front ends, two audiences, and one owner for both: a US marketplace and the seller portal behind it.",
    year: "2025 — present",
    stack: ["React", "TypeScript", "Tailwind CSS", "MUI", "Storybook", "Figma"],
    result: { value: "232", label: "files on the portal's design system" },
    context: [
      "Bosanet has two separate products with different users. Bosanet Xpress is the public marketplace where buyers in the United States purchase Latin American products. The Seller Portal is internal: sellers manage their onboarding with Bosanet, and the Bosanet team runs that same onboarding and tracks sales and metrics.",
      "They are built and maintained separately. On Xpress I own performance and user experience. On the Portal I own design-system consistency across the seller view and the internal operations view, the experience for both, and the dashboards they use to make decisions.",
    ],
    products: [
      {
        name: "Bosanet Xpress",
        audience: "Public marketplace · US buyers",
        description:
          "Separate product. Performance and UX for the storefront: catalog, search and the cargo page used to plan a purchase.",
      },
      {
        name: "Seller Portal",
        audience: "Internal · sellers and Bosanet operations",
        description:
          "Separate product. Onboarding management, sales metrics and dashboards for the seller view and the internal view.",
      },
    ],
    role: {
      summary:
        "Front-end Developer & Designer across two separate products: performance and UX on Xpress, design system and dashboards inside the Portal.",
      bullets: [
        "Own performance and user experience on Bosanet Xpress.",
        "Unifying the Portal's design system across the seller view and the internal operations view.",
        "Built the metric dashboards used to run seller onboarding and track sales.",
        "Wrote 9,806 lines of charting code with memoized hooks for heavy logistics datasets.",
      ],
    },
    decisions: [
      {
        title: "Unify the seller view and the internal view behind one design system",
        constraint:
          "Inside the Portal, the seller-facing view and the internal operations view implemented the same tables, filters and metrics twice. @components/redesign and @components/ui both exported components, so the two views drifted apart.",
        options: [
          "Keep one system per view and document the difference",
          "Adopt an external design system",
          "Merge both into a single @components/ui layer (FEP-1)",
        ],
        choice: "Merge into one layer, with tokens, primitives and composed components in one hierarchy.",
        why: "The seller and the internal team run the same process from opposite sides. One system gave both views the same vocabulary without merging the screens themselves.",
      },
      {
        title: "Migrate by strangling, not by rewriting",
        constraint:
          "283 files still imported MUI while the team shipped weekly. A big-bang migration would have frozen the Portal.",
        options: [
          "Rewrite every screen in one branch",
          "Codemod all MUI imports at once",
          "Migrate each screen when it is touched",
        ],
        choice:
          "Strangler migration: new and touched screens use the design system, old ones keep working.",
        why: "Adoption reached 232 files (~45%) with no release freeze. The cost is honest: 45% is not done, and the remaining MUI surface is now the largest piece of debt.",
      },
      {
        title: "Different dashboards for two different readers",
        constraint:
          "Sellers need their own onboarding status; internal operations need the whole portfolio. A single dashboard for both hid what each one needed to decide.",
        options: [
          "One dashboard with role-based filters",
          "Two dashboards with duplicated logic",
          "Shared chart hooks with two compositions",
        ],
        choice:
          "Extract useMonthlyChart, useCumulativeView, useYearComparison and useOrderedRegions, all memoized, then compose a screen per audience.",
        why: "The data transformations became consistent once; the screens stayed specific to who reads them. Sharing the math is not the same as sharing the product.",
      },
      {
        title: "Performance on Xpress: fix the critical path, not the page",
        constraint:
          "The marketplace cargo page took ~10s to become usable. The page itself was fine; its dependencies were not.",
        options: [
          "Buy a bigger CDN tier",
          "Rewrite the page from scratch",
          "Audit scripts, bundles and CSS delivery",
        ],
        choice:
          "Remove unnecessary scripts, split JavaScript and CSS bundles, and adopt above-the-fold styles.",
        why: "Load dropped from 10s to 4s — a 60% reduction — without a rewrite. The page was not slow because of its code; it was slow because of what it loaded first.",
      },
    ],
    outcome: {
      paragraphs: [
        "The Portal's design system is now the default for new work: 232 files on it, 31 components and 17 test files, covering both the seller view and the internal view. Xpress is a separate codebase; there, the cargo page went from 10s to 4s. Over the period I shipped 464 commits and 99 merged pull requests.",
      ],
      metrics: [
        { value: "232", label: "files on the Portal's design system (~45% off MUI)" },
        { value: "31", label: "components covering the seller and internal views" },
        { value: "17", label: "test files for UI components" },
        { value: "10s → 4s", label: "Xpress cargo page load (separate product, −60%)" },
      ],
    },
    lessons: [
      "The marketplace and the Portal are separate products. Sharing one design system across both would have been the wrong abstraction; the right boundary was inside the Portal, between two views of the same process.",
      "Building the components was the easy half. Adoption is the product: a design system only its author uses is a private library.",
    ],
    preview: {
      src: "/bosanet-preview.webp",
      alt: "Bosanet Xpress marketplace storefront on desktop",
      caption: "Bosanet Xpress, the public marketplace. The internal Seller Portal is confidential and not shown.",
    },
    externalUrl: "https://www.bosanetxpress.com/",
    externalLabel: "Visit Bosanet Xpress",
  },
  {
    slug: "sonesta",
    name: "Sonesta International Hotels",
    eyebrow: "Globant · Public web platform",
    headline:
      "Cut a blocking consent step from 8 seconds to 1 on a hotel group's public web platform.",
    year: "2025",
    stack: ["Gatsby", "React", "TypeScript", "Redux", "SCSS", "Jira"],
    result: { value: "−87%", label: "cookie-consent interaction time (8s → 1s)" },
    context: [
      "Sonesta's public web platform serves hotel pages across several brands. A third-party consent script initialized on the client and blocked the first interaction: visitors waited roughly eight seconds before the cookie banner became usable, and the delay showed up in support tickets and analytics drop-off.",
      "I joined the Public Web team through Globant as a Web UI Developer on the New Generation track, working inside a sprint cadence with the client's design and engineering leads.",
    ],
    role: {
      summary: "Web UI Developer on the Public Web team, via Globant.",
      bullets: [
        "Owned the consent-flow fix end to end, from root cause to server-side implementation.",
        "Shipped accessibility fixes and a production hotfix on a US enterprise codebase.",
        "Built a typed, documented info-icon component adopted across the public site.",
      ],
    },
    decisions: [
      {
        title: "Move consent initialization to the server",
        constraint:
          "The consent script initialized client-side and blocked the first interaction for ~8s. Lazy loading it only moved the delay.",
        options: [
          "Defer the script further on the client",
          "Swap the consent vendor",
          "Initialize the consent state during Gatsby SSR",
        ],
        choice:
          "Initialize the consent state during SSR and hydrate the banner without a client-side init step.",
        why: "It removes the script from the critical path instead of reordering it. Consent interaction time dropped from ~8s to ~1s (−87%) without changing vendors or losing compliance behavior.",
      },
      {
        title: "One typed component instead of copy-pasted markup",
        constraint:
          "Tooltips, info icons and buttons were duplicated across pages. Behavior and accessibility drifted between copies.",
        options: [
          "Keep copy-pasting and document the pattern",
          "Adopt a third-party UI kit",
          "Build a small typed primitive in TypeScript",
        ],
        choice:
          "Build a typed InfoIcon component with strict props, documented usage and centralized tooltip and button behavior.",
        why: "A third-party kit would have imported a design language the team did not own. The primitive centralized the UI element and made the next pages cheaper to build correctly.",
      },
      {
        title: "Root cause, not symptom, under production pressure",
        constraint:
          "A critical accessibility bug reached production. The fastest path was to patch the visible symptom.",
        options: [
          "Patch the reported element",
          "Run a full accessibility audit first",
          "Trace the root cause with AI-assisted analysis",
        ],
        choice: "Trace the root cause with AI-accelerated analysis, then ship the targeted fix.",
        why: "The hotfix closed the reported issue without creating sibling bugs in the same component. A full audit would have been correct but too slow for a live incident.",
      },
    ],
    outcome: {
      paragraphs: [
        "The consent fix shipped to production on a shared enterprise codebase and held. The typed component became the reference implementation for similar UI elements on the public site.",
      ],
      metrics: [
        { value: "−87%", label: "consent interaction time (8s → 1s)" },
        { value: "1", label: "production hotfix shipped" },
        { value: "1", label: "shared typed component adopted" },
      ],
    },
    lessons: [
      "The largest performance win was not a rewrite. It was moving one blocking initialization to the server.",
      "Accessibility bugs in production are rarely isolated; tracing the shared cause is faster than patching every report.",
    ],
    preview: {
      src: "/sonesta-preview.webp",
      alt: "Sonesta public website homepage on desktop",
    },
    externalUrl: "https://www.sonesta.com/",
  },
  {
    slug: "colombiatodo",
    name: "Colombiatodo CI SAS",
    eyebrow: "Ecommerce platform",
    headline:
      "Shipped an ecommerce platform end to end: storefront, CMS, payments, shipping and auth.",
    year: "2024 — present",
    stack: ["Next.js", "React", "Strapi", "Supabase", "Firebase", "Fastify", "MercadoPago"],
    result: { value: "−25%", label: "page load time in production" },
    context: [
      "Colombiatodo needed to sell online without an existing storefront or a backend team. The catalog, pricing and content had to be editable by non-technical staff, and checkout had to integrate Colombian payment and shipping providers.",
      "I led the build as developer and designer: information architecture, storefront, headless CMS, checkout services and the integrations behind them.",
    ],
    role: {
      summary: "Web Developer & Designer — end-to-end ownership of the platform.",
      bullets: [
        "Designed the storefront and its information architecture.",
        "Built the frontend in Next.js and React on top of a Strapi content model.",
        "Integrated payments, shipping, authentication and realtime data.",
      ],
    },
    decisions: [
      {
        title: "Headless CMS over a custom admin",
        constraint:
          "The product team needed to edit catalog, pricing and content without waiting on a deploy.",
        options: [
          "Build an admin panel from scratch",
          "Use a hosted commerce platform",
          "Model content in Strapi and expose it through an API",
        ],
        choice: "Model the catalog in Strapi and consume it from Next.js.",
        why: "Content modeling is a solved problem. Building an admin panel would have consumed the schedule and still been worse for the people who use it daily.",
      },
      {
        title: "One API service instead of scattered functions",
        constraint:
          "Checkout needed payment webhooks, shipping quotes and auth without a backend engineer on the team.",
        options: [
          "Serverless functions per integration",
          "A single Fastify service",
          "A no-code integration layer",
        ],
        choice: "A single Fastify service with typed contracts, backed by Supabase and Firebase.",
        why: "One deployable service kept the integration logic in one place, which matters when one person owns the whole path from cart to confirmation.",
      },
      {
        title: "A performance budget, not a rewrite",
        constraint: "Catalog pages loaded slowly on mobile networks, and the stack was already shipped.",
        options: [
          "Move everything to a CDN and hope",
          "Rewrite the storefront",
          "Set a budget and audit images, fonts and JavaScript",
        ],
        choice:
          "Set a load budget and fix the largest contributors: image sizes, font loading and JavaScript on catalog pages.",
        why: "Load time dropped roughly 25% without changing the framework or the team's release rhythm.",
      },
    ],
    outcome: {
      paragraphs: [
        "The platform launched with catalog, checkout, payments, shipping and authentication working together. Sales stopped depending on manual channels, and the catalog is maintained by the business team.",
      ],
      metrics: [
        { value: "−25%", label: "page load time in production" },
        { value: "1", label: "platform delivered end to end" },
        { value: "5", label: "integrations shipped: payments, shipping, auth, CMS, realtime" },
      ],
    },
    lessons: [
      "Owning design and implementation at the same time removes handoff cost, but it also removes the person who catches your assumptions. I started writing decisions down before building them.",
      "A performance budget survives future features; a one-time optimization does not.",
    ],
    preview: {
      src: "/ctdo-preview.webp",
      alt: "Colombiatodo ecommerce storefront on desktop",
    },
    externalUrl: "https://www.colombiatodo.com/",
  },
];

export const CASE_SLUGS = CASES.map((study) => study.slug);

export function getCase(slug: string): CaseStudy | undefined {
  return CASES.find((study) => study.slug === slug);
}

export function getNextCase(slug: CaseSlug): CaseStudy {
  const index = CASES.findIndex((study) => study.slug === slug);
  return CASES[(index + 1) % CASES.length];
}
