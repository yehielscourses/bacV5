#!/usr/bin/env bash
# Convertit chaque PDF d'un dossier en .md (même nom de base) via pdftotext.
set -euo pipefail

convert_dir() {
  local base="$1"
  local pdf_dir="${base}/pdf_version"
  local md_dir="${base}/markdown_version"

  mkdir -p "$pdf_dir" "$md_dir"

  shopt -s nullglob
  for pdf in "$base"/*.pdf; do
    mv -n "$pdf" "$pdf_dir/"
  done

  for pdf in "$pdf_dir"/*.pdf; do
    local name
    name="$(basename "$pdf" .pdf)"
    local md="${md_dir}/${name}.md"
    local tmp
    tmp="$(mktemp)"

    pdftotext -layout "$pdf" "$tmp"

    {
      printf '# %s\n\n' "$name"
      printf '> Source : `../pdf_version/%s` — conversion textuelle fidèle du PDF (pdftotext -layout).\n\n' "$(basename "$pdf")"
      printf '%s\n\n' '---'
      # Sauts de page PDF → séparateurs Markdown
      awk 'BEGIN{first=1} { if (NR>1 && prev ~ /\f/) { if (!first) print "\n---\n"; first=0 } gsub(/\f/,""); print; prev=$0 }' "$tmp"
    } > "$md"

    rm -f "$tmp"
    echo "OK: $md"
  done
}

convert_dir "/home/yehiel/Documents/bacV5/downloads/programmes"
convert_dir "/home/yehiel/Documents/bacV5/downloads/notes_de_service"
