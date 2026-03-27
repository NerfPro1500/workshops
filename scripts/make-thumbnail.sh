#!/usr/bin/env bash
# make-thumbnail.sh — capture the opening slide of a workshop as a YouTube thumbnail (1280x720)
#
# Usage:
#   ./scripts/make-thumbnail.sh <workshop-dir>
#   ./scripts/make-thumbnail.sh game-engine
#   ./scripts/make-thumbnail.sh path/to/workshop/slides.html
#
# Output: <workshop-dir>/thumbnail.png
#
# Requires: node/npx (with playwright), python3

set -euo pipefail

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

# --- resolve workshop dir and slides path ---
INPUT="${1:-}"
if [[ -z "$INPUT" ]]; then
  echo "Usage: $0 <workshop-dir-or-slides.html>" >&2
  exit 1
fi

if [[ "$INPUT" == *.html ]]; then
  SLIDES_ABS="$(realpath "$INPUT")"
else
  SLIDES_ABS="$(realpath "${REPO_ROOT}/${INPUT}/slides.html")"
fi

if [[ ! -f "$SLIDES_ABS" ]]; then
  echo "Error: slides.html not found at $SLIDES_ABS" >&2
  exit 1
fi

WORKSHOP_DIR="$(dirname "$SLIDES_ABS")"
OUTPUT="${WORKSHOP_DIR}/thumbnail.png"

# slides.html path relative to repo root (used to build the URL)
SLIDES_REL="${SLIDES_ABS#${REPO_ROOT}/}"

# --- find a free port ---
find_free_port() {
  python3 -c "
import socket
s = socket.socket()
s.bind(('', 0))
port = s.getsockname()[1]
s.close()
print(port)
"
}

PORT="$(find_free_port)"

# --- start HTTP server from repo root so relative asset paths resolve ---
python3 -m http.server "$PORT" --directory "$REPO_ROOT" &>/dev/null &
SERVER_PID=$!

cleanup() {
  kill "$SERVER_PID" 2>/dev/null || true
}
trap cleanup EXIT

# give the server a moment to start
sleep 0.5

URL="http://localhost:${PORT}/${SLIDES_REL}"

echo "Serving: $URL"
echo "Capturing first slide → $OUTPUT"

npx --yes playwright install chromium --with-deps &>/dev/null

npx --yes playwright screenshot \
  --browser chromium \
  --viewport-size "1280, 720" \
  --wait-for-timeout 2000 \
  "$URL" \
  "$OUTPUT"

echo "Done: $OUTPUT"
