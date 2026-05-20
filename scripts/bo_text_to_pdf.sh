#!/usr/bin/env bash
# Convertit un fichier texte (extrait BO navigateur) en PDF via LibreOffice.
set -euo pipefail
if [[ $# -lt 2 ]]; then
  echo "Usage: $0 <input.txt> <output.pdf>" >&2
  exit 1
fi
in="$1"
out="$2"
tmpdir="$(mktemp -d)"
trap 'rm -rf "$tmpdir"' EXIT
cp "$in" "$tmpdir/source.txt"
libreoffice --headless --convert-to pdf --outdir "$tmpdir" "$tmpdir/source.txt" >/dev/null 2>&1
mv "$tmpdir/source.pdf" "$out"
echo "OK: $out"
