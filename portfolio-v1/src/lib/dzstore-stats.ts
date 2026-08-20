/**
 * Live DzStore numbers for the portfolio.
 *
 * Reads the read-only aggregate endpoint on dzstore.org so the figures on this
 * site stop being hand-edited. Two rules keep it safe to publish:
 *
 *   1. We render the API's `display` strings, which are floored and suffixed
 *      with "+" on the DzStore side (28 upgrades renders as "25+"). Nothing
 *      here can round up, so a published number is never above reality.
 *   2. If the endpoint is slow, unreachable, or returns anything unexpected,
 *      we fall back to the last verified figures below. The site never shows
 *      a blank, a zero, or a crash because a fetch failed.
 *
 * The token lives in DZSTORE_STATS_TOKEN and is only read server-side, so it
 * is never shipped to the browser.
 */

import snapshot from "@/data/dzstore-stats.json";

export type DzStoreStats = {
  users: string;
  stores: string;
  products: string;
  orders: string;
  /** everyone who has ever paid for PRO. Only ever phrased as "upgraded". */
  proMerchants: string;
  /** merchants on the PRO plan right now. The only one that may read "paying". */
  proActive: string;
  gmvDzd: string;
  /** best single week for new stores in the trailing year */
  bestWeekStores: string;
  /** best single month for new orders in the trailing year */
  bestMonthOrders: string;
  /** e.g. "in its first 3 months since launch", computed from the launch date */
  sinceLaunchLabel: string;
  /** true when these came from the live endpoint rather than the fallback */
  live: boolean;
};

/**
 * Last-known-good numbers, refreshed automatically.
 *
 * scripts/sync-cv-stats.mjs rewrites this snapshot on every build that can
 * reach the stats endpoint, so nobody has to remember to update a constant.
 * If the endpoint is down at request time we serve these, which are the last
 * values actually observed in production rather than a hand-typed guess.
 */
export const FALLBACK_STATS: DzStoreStats = {
  ...snapshot,
  live: false,
};

const ENDPOINT = "https://dzstore.org/api/public/stats";

function isNonEmptyString(v: unknown): v is string {
  return typeof v === "string" && v.trim().length > 0;
}

export async function getDzStoreStats(): Promise<DzStoreStats> {
  try {
    const token = process.env.DZSTORE_STATS_TOKEN;
    const res = await fetch(ENDPOINT, {
      headers: token ? { Authorization: `Bearer ${token}` } : {},
      // Refresh hourly. A stale-but-true number beats a failed build.
      next: { revalidate: 3600 },
      signal: AbortSignal.timeout(8000),
    });

    if (!res.ok) return FALLBACK_STATS;

    const json: unknown = await res.json();
    const display =
      typeof json === "object" && json !== null
        ? (json as Record<string, unknown>).display
        : undefined;

    if (typeof display !== "object" || display === null) return FALLBACK_STATS;
    const d = display as Record<string, unknown>;

    // Every field must be present and non-empty, or we use the fallback
    // wholesale rather than rendering a half-live, half-stale row.
    if (
      !isNonEmptyString(d.users) ||
      !isNonEmptyString(d.stores) ||
      !isNonEmptyString(d.products) ||
      !isNonEmptyString(d.orders) ||
      !isNonEmptyString(d.proEverUpgraded) ||
      !isNonEmptyString(d.gmvDzd)
    ) {
      return FALLBACK_STATS;
    }

    const root = json as Record<string, unknown>;
    const totals =
      typeof root.totals === "object" && root.totals !== null
        ? (root.totals as Record<string, unknown>)
        : {};
    const launch =
      typeof root.launch === "object" && root.launch !== null
        ? (root.launch as Record<string, unknown>)
        : {};
    const records =
      typeof root.records === "object" && root.records !== null
        ? (root.records as Record<string, unknown>)
        : {};

    /** A positive integer from the payload, or the verified fallback. */
    const num = (v: unknown, fb: string): string =>
      typeof v === "number" && Number.isFinite(v) && v > 0
        ? Math.round(v).toLocaleString("en-US")
        : fb;
    const bucket = (v: unknown, fb: string): string =>
      typeof v === "object" && v !== null
        ? num((v as Record<string, unknown>).count, fb)
        : fb;

    return {
      users: d.users,
      stores: d.stores,
      products: d.products,
      orders: d.orders,
      proMerchants: d.proEverUpgraded,
      proActive: num(totals.proActive, FALLBACK_STATS.proActive),
      gmvDzd: d.gmvDzd,
      bestWeekStores: bucket(records.bestWeekStores, FALLBACK_STATS.bestWeekStores),
      bestMonthOrders: bucket(records.bestMonthOrders, FALLBACK_STATS.bestMonthOrders),
      sinceLaunchLabel: isNonEmptyString(launch.sinceLaunchLabel)
        ? launch.sinceLaunchLabel
        : FALLBACK_STATS.sinceLaunchLabel,
      live: true,
    };
  } catch {
    // Network error, timeout, or malformed JSON: the snapshot is still true,
    // just older. Never let a stats fetch break a page render.
    return FALLBACK_STATS;
  }
}
