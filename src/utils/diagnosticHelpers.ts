import diagnosticData from "../data/diagnostic.json";
import { axes } from "./axisHelpers";
import { resolveKeyword } from "./keywordHelpers";
import type { StudyTrack } from "./types";

export type DiagnosticMode = "express" | "full";
export type DiagnosticPhase = "vocab" | "notion";
export type TapAnswer = 0 | 1 | 2;

export interface DiagnosticItem {
  id: string;
  axisId: number;
  phase: DiagnosticPhase;
  prompt: string;
  keywordKey?: string;
}

export interface AxisDiagnosticScore {
  axisId: number;
  notionAvg: number;
  vocabAvg: number;
  total: number;
  notionPct: number;
  vocabPct: number;
}

const notionBank = diagnosticData as {
  lva: { notions: Record<string, string[]> };
  lvb: { notions: Record<string, string[]> };
};

const MODE_COUNTS: Record<DiagnosticMode, { vocab: number; notion: number }> = {
  express: { vocab: 4, notion: 3 },
  full: { vocab: 6, notion: 4 },
};

export function getDiagnosticCounts(mode: DiagnosticMode) {
  return MODE_COUNTS[mode];
}

export function buildDiagnosticItems(track: StudyTrack, mode: DiagnosticMode): DiagnosticItem[] {
  const counts = MODE_COUNTS[mode];
  const notions = notionBank[track].notions;
  const items: DiagnosticItem[] = [];

  for (const axis of axes) {
    const vocabKeys = axis.keywords.slice(0, counts.vocab);
    vocabKeys.forEach((key) => {
      const entry = resolveKeyword(key);
      items.push({
        id: `${track}-v-${axis.id}-${key}`,
        axisId: axis.id,
        phase: "vocab",
        prompt: entry.fr,
        keywordKey: key,
      });
    });

    const notionPrompts = (notions[String(axis.id)] ?? []).slice(0, counts.notion);
    notionPrompts.forEach((prompt, index) => {
      items.push({
        id: `${track}-n-${axis.id}-${index}`,
        axisId: axis.id,
        phase: "notion",
        prompt,
      });
    });
  }

  return items;
}

export function vocabPromptLine(track: StudyTrack) {
  return track === "lva"
    ? "À l'oral en anglais, je peux utiliser ce mot sans passer par le français."
    : "À l'oral en hébreu, je peux utiliser ce mot sans passer par le français.";
}

export function tapToScore(answer: TapAnswer) {
  return answer;
}

export function computeAxisScores(
  items: DiagnosticItem[],
  answers: Record<string, TapAnswer>,
): AxisDiagnosticScore[] {
  return axes.map((axis) => {
    const vocabItems = items.filter((i) => i.axisId === axis.id && i.phase === "vocab");
    const notionItems = items.filter((i) => i.axisId === axis.id && i.phase === "notion");

    const avg = (list: DiagnosticItem[]) => {
      if (list.length === 0) return 0;
      const sum = list.reduce((acc, item) => acc + (answers[item.id] ?? 0), 0);
      return sum / list.length;
    };

    const notionAvg = avg(notionItems);
    const vocabAvg = avg(vocabItems);
    const total = notionAvg + vocabAvg;

    return {
      axisId: axis.id,
      notionAvg,
      vocabAvg,
      total,
      notionPct: Math.round((notionAvg / 2) * 100),
      vocabPct: Math.round((vocabAvg / 2) * 100),
    };
  });
}

export function rankAxes(scores: AxisDiagnosticScore[]) {
  const sorted = [...scores].sort((a, b) => b.total - a.total);
  return {
    top: sorted.slice(0, 3),
    weak: [...sorted].reverse().slice(0, 2),
    all: sorted,
  };
}
