import axesData from "../data/axes.json";
import quizzesData from "../data/quizzes.json";
import { Axis, Difficulty, LanguageFilter, QuizQuestion } from "./types";

export const axes = axesData as Axis[];
export const quizQuestions = quizzesData as QuizQuestion[];

export const difficulties: Difficulty[] = ["Facile", "Intermediaire", "Avance"];

export function getAxisBySlug(slug?: string) {
  return axes.find((axis) => axis.slug === slug);
}

export function getQuestionsForAxis(axisId: number) {
  return quizQuestions.filter((question) => question.axisId === axisId);
}

export function filterAxes(language: LanguageFilter, difficulty: "Tous" | Difficulty) {
  return axes.filter((axis) => {
    const difficultyMatch = difficulty === "Tous" || axis.difficulty === difficulty;
    const languageMatch =
      language === "Tous" ||
      axis.problematiques[language === "Anglais" ? "anglais" : "hebreu"].length > 0;

    return difficultyMatch && languageMatch;
  });
}

export function pickExamQuestions(count = 10) {
  return [...quizQuestions].sort(() => Math.random() - 0.5).slice(0, count);
}

export function levelColor(difficulty: Difficulty) {
  if (difficulty === "Facile") return "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-200";
  if (difficulty === "Intermediaire") return "bg-sky-100 text-sky-700 dark:bg-sky-500/15 dark:text-sky-200";
  return "bg-indigo-100 text-indigo-700 dark:bg-indigo-500/15 dark:text-indigo-200";
}
