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

export type DzStoreStats = {
  users: string;
  stores: string;
  products: string;
  orders: string;
  proMerchants: string;
  gmvDzd: string;
  /** new stores in the last 7 days, e.g. "183" */
  storesPerWeek: string;
  /** new orders in the last 7 days */
  ordersPerWeek: string;
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
 * Last figures verified by hand against the production database.
 * Update only when a fresh audit says so; the live endpoint should normally
 * make that unnecessary.
 */
export const FALLBACK_STATS: DzStoreStats = {
  users: "1,192+",
  stores: "1,034+",
  products: "2,714+",
  orders: "754+",
  proMerchants: "27+",
  gmvDzd: "7.2M+",
  storesPerWeek: "180",
  ordersPerWeek: "200",
  bestWeekStores: "184",
  bestMonthOrders: "398",
  sinceLaunchLabel: "in its first 3 months since launch",
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

    console.log("fallback",FALLBACK_STATS)
    if (!res.ok) return FALLBACK_STATS;

    const json: unknown = await res.json();
    console.log("result",json)
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
    const launch =
      typeof root.launch === "object" && root.launch !== null
        ? (root.launch as Record<string, unknown>)
        : {};
    const recent =
      typeof root.recent === "object" && root.recent !== null
        ? (root.recent as Record<string, unknown>)
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
      gmvDzd: d.gmvDzd,
      storesPerWeek: num(recent.newStoresLast7Days, FALLBACK_STATS.storesPerWeek),
      ordersPerWeek: num(recent.newOrdersLast7Days, FALLBACK_STATS.ordersPerWeek),
      bestWeekStores: bucket(records.bestWeekStores, FALLBACK_STATS.bestWeekStores),
      bestMonthOrders: bucket(records.bestMonthOrders, FALLBACK_STATS.bestMonthOrders),
      sinceLaunchLabel: isNonEmptyString(launch.sinceLaunchLabel)
        ? launch.sinceLaunchLabel
        : FALLBACK_STATS.sinceLaunchLabel,
      live: true,
    };
  } catch (er){
    console.log("issue",er)
    return FALLBACK_STATS;
  }
}
