#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Convertit les PDF d'annales en Markdown + assets (images / pages visuelles).

Voir downloads/annales/STRATEGIE_MARKDOWN.md
"""

from __future__ import annotations

import os
import re
import shutil
import subprocess
from pathlib import Path

import fitz

ANNALES = Path("/workspace/downloads/annales")
PDF_ROOT = ANNALES / "pdf_version"
MD_ROOT = ANNALES / "markdown_version"
ASSETS_ROOT = ANNALES / "assets"
STRATEGIE = ANNALES / "STRATEGIE_MARKDOWN.md"

SKIP_DIRS = {"pdf_version", "markdown_version", "assets", "__pycache__"}
VISUAL_KEYWORDS = re.compile(
    r"\b(carte|croquis|document|graphique|figure|sch[eé]ma|diagramme|photo|image)\b",
    re.I,
)
MIN_TEXT_FOR_TEXT_ONLY = 400
PAGE_MATRIX = fitz.Matrix(120 / 72, 120 / 72)
MAX_PAGE_WIDTH = 1400


def rel_link(from_file: Path, to_path: Path) -> str:
    return Path(os.path.relpath(to_path, from_file.parent)).as_posix()


def find_pdfs_outside_store() -> list[Path]:
    out: list[Path] = []
    for pdf in ANNALES.rglob("*.pdf"):
        if any(p in SKIP_DIRS for p in pdf.relative_to(ANNALES).parts):
            continue
        out.append(pdf)
    return sorted(out)


def relocate_to_pdf_version(pdf: Path) -> Path:
    rel = pdf.relative_to(ANNALES)
    dest = PDF_ROOT / rel
    dest.parent.mkdir(parents=True, exist_ok=True)
    if pdf.resolve() != dest.resolve():
        if dest.exists():
            pdf.unlink()
        else:
            shutil.move(str(pdf), str(dest))
    return dest


def pdftotext_pages(pdf: Path) -> list[str]:
    tmp = pdf.with_suffix(".txt.tmp")
    subprocess.run(
        ["pdftotext", "-layout", str(pdf), str(tmp)],
        check=True,
        capture_output=True,
    )
    raw = tmp.read_text(encoding="utf-8", errors="replace")
    tmp.unlink(missing_ok=True)
    return [p.rstrip() for p in raw.split("\f")]


def save_page_render(page: fitz.Page, path: Path) -> None:
    pix = page.get_pixmap(matrix=PAGE_MATRIX, alpha=False)
    if pix.width > MAX_PAGE_WIDTH:
        scale = MAX_PAGE_WIDTH / pix.width
        mat = fitz.Matrix(scale * 120 / 72, scale * 120 / 72)
        pix = page.get_pixmap(matrix=mat, alpha=False)
    path.parent.mkdir(parents=True, exist_ok=True)
    pix.save(str(path))


def extract_embedded_images(
    doc: fitz.Document, page: fitz.Page, asset_dir: Path, page_no: int, md_path: Path
) -> list[str]:
    lines: list[str] = []
    for idx, img in enumerate(page.get_images(), start=1):
        try:
            info = doc.extract_image(img[0])
        except Exception:
            continue
        ext = info.get("ext", "png")
        if ext == "jpg":
            ext = "jpeg"
        fname = f"img-{page_no:02d}-{idx:02d}.{ext}"
        out = asset_dir / fname
        out.write_bytes(info["image"])
        link = rel_link(md_path, out)
        lines.append(f"![Image embarquée {idx} (page {page_no})]({link})")
    return lines


def needs_page_render(text: str, n_embedded: int) -> bool:
    if n_embedded > 0:
        return True
    if len(text.strip()) < MIN_TEXT_FOR_TEXT_ONLY:
        return True
    return bool(VISUAL_KEYWORDS.search(text))


def convert_pdf(pdf: Path) -> None:
    rel = pdf.relative_to(PDF_ROOT)
    md_path = MD_ROOT / rel.with_suffix(".md")
    asset_dir = ASSETS_ROOT / rel.with_suffix("")

    if md_path.exists() and md_path.stat().st_mtime >= pdf.stat().st_mtime:
        return

    md_path.parent.mkdir(parents=True, exist_ok=True)
    text_pages = pdftotext_pages(pdf)
    doc = fitz.open(pdf)
    n_pages = len(doc)

    lines = [
        f"# {rel.stem}",
        "",
        f"> Source : `{rel_link(md_path, pdf)}` — conversion Markdown (texte + visuels).",
        f"> Stratégie : [{STRATEGIE.name}]({rel_link(md_path, STRATEGIE)})",
        "",
        "---",
        "",
    ]

    for i in range(n_pages):
        page_no = i + 1
        text = text_pages[i] if i < len(text_pages) else doc[i].get_text().strip()
        page = doc[i]
        n_img = len(page.get_images())

        lines.append(f"## Page {page_no}")
        lines.append("")
        if text.strip():
            lines.append(text.strip())
            lines.append("")

        if needs_page_render(text, n_img):
            png = asset_dir / f"page-{page_no:02d}.png"
            if not png.exists():
                save_page_render(page, png)
            lines.append(
                f"![Page {page_no} — reproduction (carte, graphique, document)]"
                f"({rel_link(md_path, png)})"
            )
            lines.append("")

        for img_line in extract_embedded_images(doc, page, asset_dir, page_no, md_path):
            lines.append(img_line)
            lines.append("")

        if page_no < n_pages:
            lines.append("---")
            lines.append("")

    doc.close()
    md_path.write_text("\n".join(lines).rstrip() + "\n", encoding="utf-8")
    print("OK", md_path.relative_to(ANNALES))


def main() -> None:
    PDF_ROOT.mkdir(parents=True, exist_ok=True)
    MD_ROOT.mkdir(parents=True, exist_ok=True)

    for pdf in find_pdfs_outside_store():
        try:
            convert_pdf(relocate_to_pdf_version(pdf))
        except Exception as e:
            print("FAIL", pdf, e)

    for pdf in sorted(PDF_ROOT.rglob("*.pdf")):
        try:
            convert_pdf(pdf)
        except Exception as e:
            print("FAIL", pdf, e)

    readme = MD_ROOT / "README.md"
    readme.write_text(
        "# Versions Markdown des annales\n\n"
        "Conversion automatique : `python3 scripts/pdf_annales_to_markdown.py`\n\n"
        "- PDF sources : `../pdf_version/`\n"
        "- Images : `../assets/`\n"
        "- Méthode : [STRATEGIE_MARKDOWN.md](../STRATEGIE_MARKDOWN.md)\n",
        encoding="utf-8",
    )
    print("Done.")


if __name__ == "__main__":
    main()
