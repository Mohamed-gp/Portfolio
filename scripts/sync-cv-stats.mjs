#!/usr/bin/env node
/**
 * Rewrite the DzStore figures in the CV from the live stats endpoint.
 *
 * Runs before the PDF is exported, so `./build-cv.sh` (and therefore
 * `npm run build`) always produces a CV carrying the same numbers as the
 * website, without anyone editing them by hand.
 *
 * Design notes:
 *   - It rewrites the digits inside known phrases rather than filling in
 *     placeholders, so both CV files stay readable and correct on their own.
 *     If this script never runs, the CV is still a valid document.
 *   - Any failure (no token, endpoint down, malformed payload, a value that
 *     is not a positive integer) leaves both files untouched and exits 0.
 *     A CV that is a few days stale beats a broken build or a CV printing
 *     "undefined".
 *   - Only DzStore aggregates are touched. Nothing else in the CV moves.
 *
 * Env:
 *   DZSTORE_STATS_URL    defaults to https://dzstore.org/api/public/stats
 *   DZSTORE_STATS_TOKEN  required if the endpoint is token-gated
 */

import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const FILES = ["Mohamed_Outerbah_CV.md", "Mohamed_Outerbah_CV.html"];
const ENDPOINT =
  process.env.DZSTORE_STATS_URL ?? "https://dzstore.org/api/public/stats";

const log = (msg) => console.log(`[cv-stats] ${msg}`);

function intOrNull(v) {
  return typeof v === "number" && Number.isFinite(v) && v > 0
    ? Math.round(v)
    : null;
}

const group = (n) => n.toLocaleString("en-US");

async function fetchStats() {
  const token = process.env.DZSTORE_STATS_TOKEN;
  const res = await fetch(ENDPOINT, {
    headers: token ? { Authorization: `Bearer ${token}` } : {},
    signal: AbortSignal.timeout(10000),
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

/**
 * Each rule swaps the number inside a phrase that already reads correctly.
 * `re` must capture the digits in group 1 so only those are replaced.
 */
function buildRules(t, records) {
  const users = intOrNull(t.users);
  const stores = intOrNull(t.stores);
  const products = intOrNull(t.products);
  const orders = intOrNull(t.orders);
  const pro = intOrNull(t.proEverUpgraded);
  const gmv = intOrNull(t.gmvAllOrdersDzd);
  const bestWeekStores = intOrNull(records?.bestWeekStores?.count);
  const bestMonthOrders = intOrNull(records?.bestMonthOrders?.count);

  const rules = [];
  const add = (re, value, label) => {
    if (value !== null) rules.push({ re, value, label });
  };

  add(/([\d,]+)\+ merchant signups/g, group(users), "users");
  add(/([\d,]+)\+ live stores/g, group(stores), "stores");
  // Anchored to the traction sentence on purpose. An unanchored
  // "N+ products" also matches the Merchant Center feed size, which is a
  // different claim and must not be overwritten with the catalogue count.
  add(
    /live stores,\s*([\d,]+)\+ products/g,
    group(products),
    "products (traction)",
  );
  add(/([\d,]+)\+ orders,\s*and/g, group(orders), "orders");
  add(/([\d,]+)\+ merchants upgraded/g, group(pro), "pro merchants");
  if (gmv !== null) {
    // Floor to 0.1M so the printed figure never exceeds the real total.
    const m = (Math.floor(gmv / 100000) / 10).toFixed(1);
    add(/([\d.]+)M\+ DZD/g, m, "GMV");
  }
  add(
    /[Pp]eaking at ([\d,]+) new stores/g,
    group(bestWeekStores),
    "best week stores",
  );
  add(
    /and ([\d,]+) orders in its best/g,
    group(bestMonthOrders),
    "best month orders",
  );
  return rules;
}

async function main() {
  let payload;
  try {
    payload = await fetchStats();
  } catch (err) {
    log(`skipped, endpoint unavailable (${err.message}). CV left as is.`);
    return;
  }

  const totals = payload?.totals;
  if (!totals || typeof totals !== "object") {
    log("skipped, payload had no totals. CV left as is.");
    return;
  }

  const rules = buildRules(totals, payload?.records);
  if (!rules.length) {
    log("skipped, no usable values in payload. CV left as is.");
    return;
  }

  let changedFiles = 0;
  for (const name of FILES) {
    const path = join(ROOT, name);
    let text;
    try {
      text = readFileSync(path, "utf8");
    } catch {
      log(`skipped ${name}, not readable.`);
      continue;
    }

    const before = text;
    const applied = [];
    for (const { re, value, label } of rules) {
      text = text.replace(re, (whole, digits) => {
        if (digits !== value) applied.push(`${label} ${digits}->${value}`);
        return whole.replace(digits, value);
      });
    }

    if (text !== before) {
      writeFileSync(path, text);
      changedFiles++;
      log(`${name}: ${applied.join(", ")}`);
    }
  }

  log(
    changedFiles
      ? `updated ${changedFiles} file(s) from live stats.`
      : "already up to date with live stats.",
  );
}

main().catch((err) => {
  log(`unexpected error, CV left as is: ${err.message}`);
});
