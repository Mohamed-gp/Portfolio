import posthog from "posthog-js";

// Public write-only project token (EU cloud) — safe to expose, it ships in the bundle regardless.
const POSTHOG_KEY =
  process.env.NEXT_PUBLIC_POSTHOG_KEY ??
  "phc_wG6Wd9kWjqSKYqBbPfmDhpJwz5xWDJPEM2GGcBMsWGtf";

if (process.env.NODE_ENV === "production") {
  posthog.init(POSTHOG_KEY, {
    api_host: "/ingest",
    ui_host: "https://eu.posthog.com",
    defaults: "2026-05-30",
    capture_exceptions: true,
  });
}
