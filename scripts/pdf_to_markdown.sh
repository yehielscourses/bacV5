#!/usr/bin/env bash
# PDF → Markdown pour programmes, notes de service et annales.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"

convert_dir() {
  local base="$1"
  local pdf_dir="${base}/pdf_version"
  local md_dir="${base}/markdown_version"
  mkdir -p "$pdf_dir" "$md_dir"
  shopt -s nullglob
  for pdf in "$base"/*.pdf; do
    mv -n "$pdf" "$pdf_dir/" 2>/dev/null || true
  done
  for pdf in "$pdf_dir"/*.pdf; do
    local name md tmp
    name="$(basename "$pdf" .pdf)"
    md="${md_dir}/${name}.md"
    tmp="$(mktemp)"
    pdftotext -layout "$pdf" "$tmp"
    {
      printf '# %s\n\n' "$name"
      printf '> Source : `../pdf_version/%s` — conversion textuelle (pdftotext -layout).\n\n' "$(basename "$pdf")"
      printf '%s\n\n' '---'
      awk 'BEGIN{first=1} { if (NR>1 && prev ~ /\f/) { if (!first) print "\n---\n"; first=0 } gsub(/\f/,""); print; prev=$0 }' "$tmp"
    } > "$md"
    rm -f "$tmp"
    echo "OK: $md"
  done
}

convert_dir "$ROOT/downloads/programmes"
convert_dir "$ROOT/downloads/notes_de_service"
python3 "$ROOT/scripts/pdf_annales_to_markdown.py"
