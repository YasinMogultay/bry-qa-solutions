#!/usr/bin/env bash
# commit-check.sh — Pre-commit quality gate. Blocks commit if validation fails.
# Install as a git hook: cp .claude/hooks/commit-check.sh .git/hooks/pre-commit

set -euo pipefail

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

PROJECT_ROOT="$(cd "$(dirname "$0")" && git rev-parse --show-toplevel 2>/dev/null || cd "../.." && pwd)"
cd "$PROJECT_ROOT"

echo ""
echo -e "${YELLOW}Pre-commit checks running...${NC}"
echo ""

FAIL=0

STAGED_FILES=$(git diff --cached --name-only 2>/dev/null || echo "")

# Check for secrets in staged files
echo -e "${YELLOW}▶ Checking for secrets...${NC}"
SECRETS_PATTERN='(password|secret|api.?key|token|credential).*=.*["\x27][^"\x27]{8,}'
if echo "$STAGED_FILES" | xargs grep -ilE "$SECRETS_PATTERN" 2>/dev/null | grep -v "test" | grep -v ".example"; then
  echo -e "  ${RED}✗ Possible secrets detected in staged files!${NC}"
  echo "  Review the files above and remove any hardcoded secrets."
  ((FAIL++))
else
  echo -e "  ${GREEN}✓ No obvious secrets found${NC}"
fi

# Check for debug artifacts
echo -e "${YELLOW}▶ Checking for debug artifacts...${NC}"
if echo "$STAGED_FILES" | xargs grep -lE "(console\.log|debugger;)" 2>/dev/null | grep -v "test" | grep -v ".sh"; then
  echo -e "  ${YELLOW}⚠ Debug statements found — consider removing before commit${NC}"
else
  echo -e "  ${GREEN}✓ No debug artifacts${NC}"
fi

# Frontend checks
if [[ -d "frontend" ]]; then
  echo -e "${YELLOW}▶ Frontend lint...${NC}"
  if cd frontend && npm run lint 2>&1; then
    echo -e "  ${GREEN}✓ Lint passes${NC}"
  else
    echo -e "  ${RED}✗ Lint failed${NC}"
    ((FAIL++))
  fi
  cd "$PROJECT_ROOT"

  echo -e "${YELLOW}▶ Frontend tests...${NC}"
  if cd frontend && npm test -- --run 2>&1; then
    echo -e "  ${GREEN}✓ Frontend tests pass${NC}"
  else
    echo -e "  ${RED}✗ Frontend tests failed${NC}"
    ((FAIL++))
  fi
  cd "$PROJECT_ROOT"
fi

echo ""
if [[ $FAIL -gt 0 ]]; then
  echo "=============================="
  echo -e "${RED}Commit blocked — $FAIL check(s) failed.${NC}"
  echo "Fix the issues above, then try again."
  echo "To bypass (not recommended): git commit --no-verify"
  echo "=============================="
  exit 1
fi

echo "=============================="
echo -e "${GREEN}All checks passed. Committing.${NC}"
echo "=============================="
exit 0
