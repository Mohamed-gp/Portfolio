// Public write-only project token (EU cloud) — safe to expose, it ships in the bundle regardless.
const POSTHOG_KEY =
  process.env.NEXT_PUBLIC_POSTHOG_KEY ??
  "phc_wG6Wd9kWjqSKYqBbPfmDhpJwz5xWDJPEM2GGcBMsWGtf";

// posthog-js is ~60KB gzipped; a static import here puts it in the critical
// first-load bundle. Deferring init to browser idle keeps analytics intact
// (pageview fires on init) while hydration gets the bandwidth first.
// Hero/Contact capture() calls already lazy-import the same singleton.
function initPostHog() {
  import("posthog-js").then(({ default: posthog }) => {
    posthog.init(POSTHOG_KEY, {
      api_host: "/ingest",
      ui_host: "https://eu.posthog.com",
      defaults: "2026-05-30",
      capture_exceptions: true,
    });
  });
}

if (process.env.NODE_ENV === "production") {
  if ("requestIdleCallback" in window) {
    requestIdleCallback(() => initPostHog(), { timeout: 3000 });
  } else {
    setTimeout(initPostHog, 1500);
  }
}
