#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Convertit les PDF d'annales en Markdown + assets (images utiles seulement).

Voir downloads/annales/STRATEGIE_MARKDOWN.md
"""

from __future__ import annotations

import hashlib
import os
import re
import shutil
import subprocess
import sys
from pathlib import Path

import fitz

ANNALES = Path("/workspace/downloads/annales")
PDF_ROOT = ANNALES / "pdf_version"
MD_ROOT = ANNALES / "markdown_version"
ASSETS_ROOT = ANNALES / "assets"
STRATEGIE = ANNALES / "STRATEGIE_MARKDOWN.md"

SKIP_DIRS = {"pdf_version", "markdown_version", "assets", "__pycache__"}

# "document" seul exclu (Document 1 :, Document 2 :) — declencheur texte, pas visuel
STRONG_VISUAL = re.compile(
    r"\b(carte|croquis|fond de carte|graphique|figure|sch[eé]ma|diagramme|"
    r"photograph|légende|légendes|annexe)\b",
    re.I,
)
MIN_TEXT_DOCUMENT_PAGE = 900
PAGE_MATRIX = fitz.Matrix(120 / 72, 120 / 72)
MAX_PAGE_WIDTH = 1400


def rel_link(from_file: Path, to_path: Path) -> str:
    return Path(os.path.relpath(to_path, from_file.parent)).as_posix()


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


def image_blocks(page: fitz.Page) -> list[dict]:
    return [b for b in page.get_text("dict")["blocks"] if b.get("type") == 1]


def is_banner(block: dict, page: fitz.Page) -> bool:
    w, h = block["width"], block["height"]
    pw, ph = page.rect.width, page.rect.height
    if h < 100 and w > 350:
        return True
    if h < 140 and w / pw > 0.65:
        return True
    return False


def content_image_blocks(page: fitz.Page) -> list[dict]:
    pw, ph = page.rect.width, page.rect.height
    page_area = pw * ph
    out: list[dict] = []
    for b in image_blocks(page):
        if is_banner(b, page):
            continue
        w, h = b["width"], b["height"]
        if w * h / page_area < 0.06 and h < 120:
            continue
        out.append(b)
    return out


def needs_page_render(page: fitz.Page, text: str) -> bool:
    """Capture pleine page seulement pour cartes / pages tres visuelles."""
    t = text.strip()
    if len(t) > MIN_TEXT_DOCUMENT_PAGE:
        return False
    if STRONG_VISUAL.search(t):
        return True
    blocks = content_image_blocks(page)
    if not blocks:
        return len(t) < 200
    pw, ph = page.rect.width, page.rect.height
    page_area = pw * ph
    largest = max(b["width"] * b["height"] for b in blocks)
    if largest / page_area > 0.35 and len(t) < 600:
        return True
    if len(t) < 250:
        return True
    return False


def save_page_render(page: fitz.Page, path: Path) -> None:
    pix = page.get_pixmap(matrix=PAGE_MATRIX, alpha=False)
    if pix.width > MAX_PAGE_WIDTH:
        scale = MAX_PAGE_WIDTH / pix.width
        mat = fitz.Matrix(scale * 120 / 72, scale * 120 / 72)
        pix = page.get_pixmap(matrix=mat, alpha=False)
    path.parent.mkdir(parents=True, exist_ok=True)
    pix.save(str(path))


def extract_content_images(
    doc: fitz.Document,
    page: fitz.Page,
    asset_dir: Path,
    page_no: int,
    md_path: Path,
    seen_hashes: set[str],
) -> list[str]:
    lines: list[str] = []
    idx = 0
    for block in content_image_blocks(page):
        xref = block.get("image")
        if xref is None:
            continue
        try:
            info = doc.extract_image(xref)
        except Exception:
            continue
        digest = hashlib.md5(info["image"]).hexdigest()
        if digest in seen_hashes:
            continue
        seen_hashes.add(digest)
        idx += 1
        ext = info.get("ext", "png")
        if ext == "jpg":
            ext = "jpeg"
        fname = f"img-{page_no:02d}-{idx:02d}.{ext}"
        out = asset_dir / fname
        out.write_bytes(info["image"])
        link = rel_link(md_path, out)
        lines.append(f"![Visuel {idx} (page {page_no})]({link})")
    return lines


def page_starts_mid_sentence(text: str) -> bool:
    t = text.strip()
    if not t:
        return False
    lines: list[str] = []
    for ln in t.split("\n"):
        ln = ln.strip()
        if not ln or re.match(r"Page \d+ / \d+", ln) or re.match(r"^GTCHI", ln):
            continue
        lines.append(ln)
    if not lines:
        return False
    return bool(lines[0]) and lines[0][0].islower()


def convert_pdf(pdf: Path, force: bool = False) -> None:
    rel = pdf.relative_to(PDF_ROOT)
    md_path = MD_ROOT / rel.with_suffix(".md")
    asset_dir = ASSETS_ROOT / rel.with_suffix("")

    if (
        not force
        and md_path.exists()
        and md_path.stat().st_mtime >= pdf.stat().st_mtime
    ):
        return

    if force and asset_dir.exists():
        shutil.rmtree(asset_dir)

    md_path.parent.mkdir(parents=True, exist_ok=True)
    text_pages = pdftotext_pages(pdf)
    doc = fitz.open(pdf)
    n_pages = len(doc)
    seen_hashes: set[str] = set()

    lines = [
        f"# {rel.stem}",
        "",
        f"> Source : `{rel_link(md_path, pdf)}` — conversion Markdown (texte + visuels utiles).",
        f"> Stratégie : [{STRATEGIE.name}]({rel_link(md_path, STRATEGIE)})",
        "",
        "---",
        "",
    ]

    for i in range(n_pages):
        page_no = i + 1
        text = text_pages[i] if i < len(text_pages) else doc[i].get_text().strip()
        page = doc[i]

        lines.append(f"## Page {page_no}")
        lines.append("")
        if page_starts_mid_sentence(text):
            lines.append("*(Suite de la page précédente — le document continue ici.)*")
            lines.append("")
        if text.strip():
            lines.append(text.strip())
            lines.append("")

        if needs_page_render(page, text):
            png = asset_dir / f"page-{page_no:02d}.png"
            save_page_render(page, png)
            lines.append(
                f"![Page {page_no} — carte / document visuel]"
                f"({rel_link(md_path, png)})"
            )
            lines.append("")

        for img_line in extract_content_images(
            doc, page, asset_dir, page_no, md_path, seen_hashes
        ):
            lines.append(img_line)
            lines.append("")

        if page_no < n_pages:
            lines.append("---")
            lines.append("")

    doc.close()
    md_path.write_text("\n".join(lines).rstrip() + "\n", encoding="utf-8")
    print("OK", md_path.relative_to(ANNALES))


def main() -> None:
    force = "--force" in sys.argv
    PDF_ROOT.mkdir(parents=True, exist_ok=True)
    MD_ROOT.mkdir(parents=True, exist_ok=True)

    pdfs = sorted(PDF_ROOT.rglob("*.pdf"))
    print(f"{len(pdfs)} PDF (force={force})")
    for pdf in pdfs:
        try:
            convert_pdf(pdf, force=force)
        except Exception as e:
            print("FAIL", pdf, e)

    (MD_ROOT / "README.md").write_text(
        "# Versions Markdown des annales\n\n"
        "```bash\npython3 scripts/pdf_annales_to_markdown.py        # incremental\n"
        "python3 scripts/pdf_annales_to_markdown.py --force  # tout regenerer\n```\n\n"
        "- PDF : `../pdf_version/`\n"
        "- Visuels : `../assets/` (cartes, photos, graphiques — pas les bandeaux E3C)\n"
        "- [STRATEGIE_MARKDOWN.md](../STRATEGIE_MARKDOWN.md)\n",
        encoding="utf-8",
    )
    print("Done.")


if __name__ == "__main__":
    main()
