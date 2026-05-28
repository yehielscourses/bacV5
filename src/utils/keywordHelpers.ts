import catalogData from "../data/keywordCatalog.json";
import type { KeywordEntry, StudyTrack } from "./types";

const catalog = catalogData as Record<string, KeywordEntry>;

export function normalizeKeywordKey(label: string) {
  return label.toLowerCase().trim();
}

export function resolveKeyword(label: string): KeywordEntry {
  const key = normalizeKeywordKey(label);
  const hit = catalog[key];
  if (hit) return hit;
  return { fr: label, en: label, he: label };
}

export function keywordTranslation(entry: KeywordEntry, track: StudyTrack) {
  return track === "lva" ? entry.en : entry.he;
}
