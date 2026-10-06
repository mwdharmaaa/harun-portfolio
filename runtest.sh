#!/usr/bin/env bash
set -euo pipefail

echo "======================================================"
echo "  Harun Portfolio - Test Suite & Verification"
echo "======================================================"

echo "[*] Step 1: Linting check via oxlint..."
npm run lint

echo "[*] Step 2: Typecheck and Production Compilation..."
npm run build

echo "======================================================"
echo "[OK] All verification checks passed without error."
echo "======================================================"
