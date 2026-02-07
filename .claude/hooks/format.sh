#!/usr/bin/env bash
# format.sh — Run formatters and auto-fix linting issues.
# Safe to run anytime — only modifies formatting, not logic.

set -euo pipefail

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

PROJECT_ROOT="$(cd "$(dirname "$0")/../.." && pwd)"
cd "$PROJECT_ROOT"

echo "=============================="
echo " Code Formatting"
echo "=============================="

# Frontend formatting
if [[ -d "frontend" ]]; then
  echo ""
  echo -e "${YELLOW}▶ Frontend formatting${NC}"

  cd frontend

  # Install deps if needed
  if [[ ! -d "node_modules" ]]; then
    echo "  Installing dependencies..."
    npm ci 2>/dev/null || npm install
  fi

  # ESLint auto-fix
  if npm run lint -- --fix 2>/dev/null; then
    echo -e "  ${GREEN}✓ ESLint auto-fix applied${NC}"
  else
    echo -e "  ${YELLOW}ESLint fix had issues — review manually${NC}"
  fi

  # Prettier (if available)
  if npx prettier --version &>/dev/null 2>&1; then
    echo "  Running Prettier..."
    npx prettier --write "src/**/*.{ts,tsx,css,json}" --log-level warn
    echo -e "  ${GREEN}✓ Prettier formatting applied${NC}"
  else
    echo -e "  ${YELLOW}Prettier not found — consider adding it${NC}"
  fi

  cd "$PROJECT_ROOT"
fi

echo ""
echo "=============================="
echo -e " ${GREEN}Formatting complete.${NC}"
echo " Review changes with: git diff"
echo "=============================="
