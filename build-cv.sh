#!/usr/bin/env bash
#
# build-cv.sh — Export Mohamed_Outerbah_CV.html to the downloadable PDF
# used by the portfolio (portfolio-v1/public/cv/Mohamed_Outerbah_CV.pdf).
#
# Edit the HTML, then run `./build-cv.sh` — no manual "Print to PDF" needed.
# Uses a headless Chromium browser, so output matches the browser's print view.
#
set -euo pipefail

cd "$(dirname "$0")"

SRC="Mohamed_Outerbah_CV.html"
OUT="portfolio-v1/public/cv/Mohamed_Outerbah_CV.pdf"

if [[ ! -f "$SRC" ]]; then
  echo "error: $SRC not found" >&2
  exit 1
fi

# Find a Chromium-based browser (any one of these works for --print-to-pdf).
BROWSER=""
for candidate in \
  "/Applications/Brave Browser.app/Contents/MacOS/Brave Browser" \
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  "/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge" \
  "/Applications/Chromium.app/Contents/MacOS/Chromium"; do
  if [[ -x "$candidate" ]]; then
    BROWSER="$candidate"
    break
  fi
done

if [[ -z "$BROWSER" ]]; then
  echo "error: no Chromium-based browser found (Brave/Chrome/Edge/Chromium)" >&2
  exit 1
fi

mkdir -p "$(dirname "$OUT")"

"$BROWSER" \
  --headless \
  --disable-gpu \
  --no-pdf-header-footer \
  --print-to-pdf="$OUT" \
  "file://$PWD/$SRC" 2>/dev/null

echo "✓ Exported $SRC -> $OUT"
ls -la "$OUT"
