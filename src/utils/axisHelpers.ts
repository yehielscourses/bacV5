import axesData from "../data/axes.json";
import quizzesData from "../data/quizzes.json";
import type { Axis, Difficulty, QuizQuestion, StudyTrack } from "./types";

export const axes = axesData as Axis[];
export const quizQuestions = quizzesData as QuizQuestion[];

export const difficulties: Difficulty[] = ["Facile", "Intermédiaire", "Avancé"];

const difficultyMap: Record<string, Difficulty> = {
  Facile: "Facile",
  Intermediaire: "Intermédiaire",
  Avance: "Avancé",
};

export function displayDifficulty(raw: string): Difficulty {
  return difficultyMap[raw] ?? (raw as Difficulty);
}

export function getAxisBySlug(slug?: string) {
  return axes.find((axis) => axis.slug === slug);
}

export function getQuestionsForAxis(axisId: number) {
  return quizQuestions.filter((question) => question.axisId === axisId);
}

export function filterAxes(difficulty: "Tous" | Difficulty) {
  return axes.filter((axis) => {
    if (difficulty === "Tous") return true;
    return displayDifficulty(axis.difficulty) === difficulty;
  });
}

export function pickExamQuestions(count = 10) {
  return [...quizQuestions].sort(() => Math.random() - 0.5).slice(0, count);
}

export function levelColor(difficulty: string) {
  const d = displayDifficulty(difficulty);
  if (d === "Facile") return "bg-emerald-100 text-emerald-800 dark:bg-emerald-500/20 dark:text-emerald-200";
  if (d === "Intermédiaire") return "bg-sky-100 text-sky-800 dark:bg-sky-500/20 dark:text-sky-200";
  return "bg-violet-100 text-violet-800 dark:bg-violet-500/20 dark:text-violet-200";
}

export function problematiquesForTrack(axis: Axis, track: StudyTrack) {
  return track === "lva" ? axis.problematiques.anglais : axis.problematiques.hebreu;
}

export function flashcardsForTrack(axis: Axis, track: StudyTrack) {
  return axis.flashcards.filter((card) => {
    const front = card.front.toLowerCase();
    if (track === "lva" && front.includes("hebreu")) return false;
    if (track === "lvb" && front.includes("anglais")) return false;
    return true;
  });
}

export function completedAxesForTrack(
  progress: { completedAxes: number[]; lvaCompletedAxes?: number[]; lvbCompletedAxes?: number[] },
  track: StudyTrack,
) {
  if (track === "lva") {
    return progress.lvaCompletedAxes?.length
      ? progress.lvaCompletedAxes
      : progress.completedAxes;
  }
  return progress.lvbCompletedAxes?.length ? progress.lvbCompletedAxes : progress.completedAxes;
}
