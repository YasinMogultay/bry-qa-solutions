#!/usr/bin/env bash
set -euo pipefail

echo "=== Frontend Build ==="
cd frontend && npm run build
