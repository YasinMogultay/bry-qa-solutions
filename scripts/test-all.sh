#!/usr/bin/env bash
set -euo pipefail

echo "=== Frontend Tests ==="
cd frontend && npm ci && npm run lint && npm test -- --run
