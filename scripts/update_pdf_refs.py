#!/usr/bin/env python3
"""Met à jour les références locales aux PDF après rangement pdf_version/."""
from pathlib import Path
import re

ROOT = Path("/home/yehiel/Documents/bacV5/downloads")
PROGRAMME_PDFS = {p.name for p in (ROOT / "programmes/pdf_version").glob("*.pdf")}
NS_PDFS = {p.name for p in (ROOT / "notes_de_service/pdf_version").glob("*.pdf")}

# `nom.pdf` local (pas les URLs http)
REF = re.compile(r"`([0-9][0-9A-Za-z_.-]+\.pdf)`")


def rel_pdf(path: Path, pdf_name: str) -> str:
    if pdf_name in PROGRAMME_PDFS:
        target = ROOT / "programmes/pdf_version" / pdf_name
    elif pdf_name in NS_PDFS:
        target = ROOT / "notes_de_service/pdf_version" / pdf_name
    else:
        return pdf_name
    try:
        return str(target.relative_to(path.parent)).replace("\\", "/")
    except ValueError:
        return str(Path(*[".."] * len(path.parent.relative_to(ROOT).parts)) / target.relative_to(ROOT))


def update_file(path: Path) -> bool:
    text = path.read_text(encoding="utf-8")
    changed = False

    def repl(m: re.Match) -> str:
        nonlocal changed
        name = m.group(1)
        if name not in PROGRAMME_PDFS and name not in NS_PDFS:
            return m.group(0)
        new = rel_pdf(path, name)
        if new == name:
            return m.group(0)
        changed = True
        return f"`{new}`"

    new_text = REF.sub(repl, text)
    if changed:
        path.write_text(new_text, encoding="utf-8")
    return changed


def main() -> None:
    skip = {"pdf_version", "markdown_version"}
    updated = []
    for md in ROOT.rglob("*.md"):
        if any(part in skip for part in md.parts):
            continue
        if update_file(md):
            updated.append(md)
    skill = Path("/home/yehiel/Documents/bacV5/.cursor/skills/bac-programmes/SKILL.md")
    if skill.exists():
        t = skill.read_text(encoding="utf-8")
        t2 = t.replace(
            "`downloads/programmes/` — `NN_matiere_niveau_BOannée.pdf`",
            "`downloads/programmes/pdf_version/` — `NN_matiere_niveau_BOannée.pdf` · texte : `markdown_version/`",
        )
        if t2 != t:
            skill.write_text(t2, encoding="utf-8")
            updated.append(skill)
    for p in sorted(updated):
        print(p)


if __name__ == "__main__":
    main()
