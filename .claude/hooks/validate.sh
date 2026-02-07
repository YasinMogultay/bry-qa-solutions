#!/usr/bin/env bash
# validate.sh — Run all quality gates in order. Fails fast on first failure.
# Use this before committing or to verify the project is in a clean state.

set -euo pipefail

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

PROJECT_ROOT="$(cd "$(dirname "$0")/../.." && pwd)"
cd "$PROJECT_ROOT"

PASS=0
FAIL=0
FAILED_GATES=()

run_gate() {
  local name="$1"
  local cmd="$2"

  echo ""
  echo -e "${YELLOW}▶ $name${NC}"
  echo "  Command: $cmd"

  if eval "$cmd" 2>&1; then
    echo -e "  ${GREEN}✓ $name passed${NC}"
    ((PASS++))
  else
    echo -e "  ${RED}✗ $name FAILED${NC}"
    ((FAIL++))
    FAILED_GATES+=("$name")
    if [[ "${FAIL_FAST:-true}" == "true" ]]; then
      echo ""
      echo -e "${RED}Stopping — fix '$name' before proceeding.${NC}"
      exit 1
    fi
  fi
}

echo "=============================="
echo " Quality Gates"
echo "=============================="

# Frontend gates (only if frontend/ exists)
if [[ -d "frontend" ]]; then
  # Install deps if node_modules is missing
  if [[ ! -d "frontend/node_modules" ]]; then
    run_gate "Frontend Install" "cd frontend && npm ci || cd frontend && npm install"
  fi

  run_gate "Frontend Lint"    "cd frontend && npm run lint"
  run_gate "Frontend Tests"   "cd frontend && npm test -- --run"
  run_gate "Frontend Build"   "cd frontend && npm run build"
else
  echo -e "${YELLOW}Skipping frontend gates — frontend/ not found${NC}"
fi

echo ""
echo "=============================="
if [[ $FAIL -eq 0 ]]; then
  echo -e " ${GREEN}All $PASS gates passed. Ready to commit.${NC}"
else
  echo -e " ${RED}$FAIL gate(s) failed:${NC}"
  for gate in "${FAILED_GATES[@]}"; do
    echo -e "   ${RED}✗ $gate${NC}"
  done
  echo ""
  echo -e " ${GREEN}$PASS passed${NC}, ${RED}$FAIL failed${NC}"
fi
echo "=============================="

exit $FAIL
