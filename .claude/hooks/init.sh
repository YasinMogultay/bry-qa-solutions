#!/usr/bin/env bash
# init.sh — Verify that all required tools are installed and accessible.
# Run this before starting development to catch missing dependencies early.

set -euo pipefail

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

PASS=0
FAIL=0
WARN=0

check() {
  local name="$1"
  local cmd="$2"

  if command -v "$cmd" &>/dev/null; then
    local version
    version=$("$cmd" --version 2>/dev/null | head -1 || echo "unknown")
    echo -e "  ${GREEN}[OK]${NC} $name — $version"
    ((PASS++))
  else
    echo -e "  ${RED}[MISSING]${NC} $name — '$cmd' not found"
    ((FAIL++))
  fi
}

check_optional() {
  local name="$1"
  local cmd="$2"

  if command -v "$cmd" &>/dev/null; then
    local version
    version=$("$cmd" --version 2>/dev/null | head -1 || echo "unknown")
    echo -e "  ${GREEN}[OK]${NC} $name — $version"
    ((PASS++))
  else
    echo -e "  ${YELLOW}[OPTIONAL]${NC} $name — '$cmd' not found (not required)"
    ((WARN++))
  fi
}

echo ""
echo "=============================="
echo " Environment Check"
echo "=============================="
echo ""

echo "Required tools:"
check "Node.js" "node"
check "npm"     "npm"
check "Git"     "git"

echo ""
echo "Optional tools:"
check_optional "GitHub CLI" "gh"

echo ""

# Check Node version is 18+
if command -v node &>/dev/null; then
  NODE_VER=$(node -v | sed 's/v\([0-9]*\).*/\1/')
  if [[ "$NODE_VER" -ge 18 ]]; then
    echo -e "  ${GREEN}[OK]${NC} Node.js version >= 18"
  else
    echo -e "  ${RED}[WARN]${NC} Node.js version is $NODE_VER — this project requires 18+"
    ((FAIL++))
  fi
fi

# Check project directories exist
echo ""
echo "Project structure:"

if [[ -d "frontend" ]]; then
  echo -e "  ${GREEN}[OK]${NC} frontend/ directory exists"
else
  echo -e "  ${YELLOW}[INFO]${NC} frontend/ directory not found — create it to start development"
fi

echo ""
echo "=============================="
echo -e " Results: ${GREEN}$PASS passed${NC}, ${RED}$FAIL failed${NC}, ${YELLOW}$WARN optional${NC}"
echo "=============================="

if [[ $FAIL -gt 0 ]]; then
  echo -e "${RED}Fix missing required tools before proceeding.${NC}"
  exit 1
fi

echo -e "${GREEN}Environment is ready.${NC}"
exit 0
