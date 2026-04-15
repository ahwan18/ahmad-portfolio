const FALLBACK_SITE_URL = "https://your-domain.com";

function normalizeSiteUrl(value: string) {
  const trimmed = value.trim().replace(/\/+$/, "");

  if (/^https?:\/\//i.test(trimmed)) {
    return trimmed;
  }

  return `https://${trimmed}`;
}

export const siteUrl = normalizeSiteUrl(
  process.env.NEXT_PUBLIC_SITE_URL ?? FALLBACK_SITE_URL
);

export function getAbsoluteUrl(pathname = "/") {
  return new URL(pathname, siteUrl).toString();
}
