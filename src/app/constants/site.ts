export const SITE_NAME = "Alejandro Solarte";
export const SITE_ROLE = "Front-end developer & designer";
export const SITE_DESCRIPTION =
  "Front-end developer and designer building fast, accessible interfaces and the design systems behind them.";
export const SITE_EMAIL = "ja.solarter@gmail.com";

interface SiteEnv {
  SITE_URL?: string;
  VERCEL_PROJECT_PRODUCTION_URL?: string;
  NODE_ENV?: string;
}

export function resolveSiteUrl(env: SiteEnv): string {
  const raw =
    env.SITE_URL ??
    (env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${env.VERCEL_PROJECT_PRODUCTION_URL}` : undefined);

  if (!raw) {
    if (env.NODE_ENV === "production") {
      throw new Error("SITE_URL must be set to an https URL before a production build.");
    }
    return "http://localhost:3000";
  }

  return raw.replace(/\/+$/, "");
}

export const SITE_URL = resolveSiteUrl(process.env);
