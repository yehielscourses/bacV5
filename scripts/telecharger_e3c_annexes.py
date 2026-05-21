#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Complete E3C annales (HG + LVA anglais) via sujets-e3c-pdf paths."""

import re
import time
import urllib.request
from pathlib import Path

from telecharger_annales_bac import BASE, ROOT, UA, download_file, e3c_year_pages, fetch

LIMIT_PER_INDEX = 25  # échantillon par niveau/année


def pdfs_e3c(slug: str) -> list[str]:
    slug = slug.replace("sujets-e3c/", "", 1)
    url = f"{BASE}/annales/sujets-e3c/{slug}"
    try:
        html = fetch(url)
    except Exception:
        return []
    return [BASE + m.group(1) for m in re.finditer(r'href="(/sujets-e3c-pdf/[^"]+\.pdf)"', html)]


def main() -> None:
    jobs = [
        ("01_hg_e3c", "histoire-geographie-general/terminale/2021/"),
        ("01_hg_e3c", "histoire-geographie-general/terminale/2020/"),
        ("06_lva_anglais_e3c", "langues-vivantes-anglais/terminale/2021/"),
        ("06_lva_anglais_e3c", "langues-vivantes-anglais/premiere-t2/2021/"),
        ("06_lva_anglais_e3c", "langues-vivantes-anglais/premiere-t3/2021/"),
    ]
    log = []
    for subject, path in jobs:
        year = int(path.split("/")[-2]) if path.split("/")[-2].isdigit() else 2021
        slugs = e3c_year_pages(path)[:LIMIT_PER_INDEX]
        for slug in slugs:
            dest_dir = ROOT / subject / str(year)
            n = 0
            for pdf_url in pdfs_e3c(slug):
                dest = dest_dir / pdf_url.split("/")[-1]
                if download_file(pdf_url, dest):
                    n += 1
            log.append(f"{subject}/{year}/{slug}: +{n}")
            time.sleep(0.12)
    (ROOT / "RAPPORT_E3C.txt").write_text("\n".join(log), encoding="utf-8")
    print("E3C done", sum(1 for _ in log), "pages")


if __name__ == "__main__":
    main()
