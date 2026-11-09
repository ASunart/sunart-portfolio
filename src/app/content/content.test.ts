import { existsSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { CASES, CASE_SLUGS, getCase, getNextCase } from "./cases";
import { PROOF_POINTS } from "./proof";
import { EXPERIENCE } from "../constants/experience";
import { CAPABILITIES } from "../constants/capabilities";
import { resolveSiteUrl } from "../constants/site";

const nonEmpty = (value: string) => expect(value.trim().length).toBeGreaterThan(0);

describe("case studies", () => {
  it("has three unique, URL-safe slugs that round-trip through getCase", () => {
    expect(CASE_SLUGS).toHaveLength(3);
    expect(new Set(CASE_SLUGS).size).toBe(3);
    for (const slug of CASE_SLUGS) {
      expect(slug).toMatch(/^[a-z0-9-]+$/);
      expect(getCase(slug)?.slug).toBe(slug);
    }
  });

  it("fills every required field", () => {
    for (const study of CASES) {
      nonEmpty(study.name);
      nonEmpty(study.eyebrow);
      nonEmpty(study.headline);
      nonEmpty(study.year);
      nonEmpty(study.result.value);
      nonEmpty(study.result.label);
      expect(study.context.length).toBeGreaterThan(0);
      study.context.forEach(nonEmpty);
      nonEmpty(study.role.summary);
      expect(study.role.bullets.length).toBeGreaterThan(0);
      study.role.bullets.forEach(nonEmpty);
      nonEmpty(study.preview.alt);
    }
  });

  it("keeps decisions between two and four, with two or three options each", () => {
    for (const study of CASES) {
      expect(study.decisions.length).toBeGreaterThanOrEqual(2);
      expect(study.decisions.length).toBeLessThanOrEqual(4);
      for (const decision of study.decisions) {
        nonEmpty(decision.title);
        nonEmpty(decision.constraint);
        nonEmpty(decision.choice);
        nonEmpty(decision.why);
        expect(decision.options.length).toBeGreaterThanOrEqual(2);
        expect(decision.options.length).toBeLessThanOrEqual(3);
      }
    }
  });

  it("has an outcome with at least one metric and one lesson", () => {
    for (const study of CASES) {
      expect(study.outcome.metrics.length).toBeGreaterThan(0);
      study.outcome.metrics.forEach((metric) => {
        nonEmpty(metric.value);
        nonEmpty(metric.label);
      });
      study.outcome.paragraphs.forEach(nonEmpty);
      expect(study.lessons.length).toBeGreaterThan(0);
      study.lessons.forEach(nonEmpty);
    }
  });

  it("points at a preview image that exists in /public", () => {
    for (const study of CASES) {
      expect(study.preview.src.startsWith("/")).toBe(true);
      expect(existsSync(join(process.cwd(), "public", study.preview.src))).toBe(true);
    }
  });

  it("declares both Bosanet products, since it is two front ends", () => {
    const bosanet = getCase("bosanet");
    expect(bosanet?.products).toHaveLength(2);
    for (const product of bosanet!.products!) {
      nonEmpty(product.name);
      nonEmpty(product.audience);
      nonEmpty(product.description);
    }
  });

  it("cycles through every case exactly once via getNextCase", () => {
    const visited: string[] = [];
    let current = CASES[0].slug;
    for (let step = 0; step < CASES.length; step += 1) {
      visited.push(current);
      current = getNextCase(current).slug;
    }
    expect(visited).toHaveLength(3);
    expect(new Set(visited).size).toBe(3);
    expect(current).toBe(CASES[0].slug);
  });
});

describe("proof points", () => {
  it("renders at least four numbers, each sourced from a real case", () => {
    expect(PROOF_POINTS.length).toBeGreaterThanOrEqual(4);
    for (const point of PROOF_POINTS) {
      expect(typeof point.value).toBe("number");
      expect(Number.isFinite(point.value)).toBe(true);
      if (point.source !== "mentoring") {
        expect(getCase(point.source)).toBeDefined();
      }
      nonEmpty(point.label);
    }
  });

  it("ties every rendered number to a metric in its source", () => {
    for (const point of PROOF_POINTS) {
      if (point.source === "mentoring") {
        const mentor = EXPERIENCE.find((role) => role.id === "icesi");
        expect(`${mentor?.summary}`).toContain(String(point.value));
        continue;
      }

      const study = getCase(point.source);
      const metrics = [study!.result, ...study!.outcome.metrics]
        .map((metric) => `${metric.value} ${metric.label}`)
        .join(" ");
      expect(metrics).toContain(String(point.value));
    }
  });
});

describe("experience and capabilities", () => {
  it("has seven roles with unique slug ids and complete metadata", () => {
    expect(EXPERIENCE).toHaveLength(7);
    expect(new Set(EXPERIENCE.map((role) => role.id)).size).toBe(EXPERIENCE.length);
    for (const role of EXPERIENCE) {
      expect(role.id).toMatch(/^[a-z0-9-]+$/);
      nonEmpty(role.company);
      nonEmpty(role.role);
      nonEmpty(role.period);
      nonEmpty(role.summary);
    }
  });

  it("has three capability rows with items", () => {
    expect(CAPABILITIES).toHaveLength(3);
    for (const row of CAPABILITIES) {
      nonEmpty(row.label);
      expect(row.items.length).toBeGreaterThan(0);
    }
  });
});

describe("site url resolution", () => {
  it("uses SITE_URL and strips trailing slashes", () => {
    expect(resolveSiteUrl({ SITE_URL: "https://sunart.dev/", NODE_ENV: "production" })).toBe(
      "https://sunart.dev",
    );
  });

  it("falls back to the Vercel production domain", () => {
    expect(
      resolveSiteUrl({
        VERCEL_PROJECT_PRODUCTION_URL: "sunart-portfolio.vercel.app",
        NODE_ENV: "production",
      }),
    ).toBe("https://sunart-portfolio.vercel.app");
  });

  it("allows localhost outside production", () => {
    expect(resolveSiteUrl({ NODE_ENV: "test" })).toBe("http://localhost:3000");
  });

  it("throws in production when no URL is configured", () => {
    expect(() => resolveSiteUrl({ NODE_ENV: "production" })).toThrow(/SITE_URL/);
  });
});
