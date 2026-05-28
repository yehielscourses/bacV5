export type StudyTrack = "lva" | "lvb";
export type Difficulty = "Facile" | "Intermédiaire" | "Avancé";

export interface KeywordEntry {
  fr: string;
  en: string;
  he: string;
}

export interface Problematiques {
  anglais: string[];
  hebreu: string[];
}

export interface Flashcard {
  front: string;
  back: string;
  track?: StudyTrack;
}

export interface Axis {
  id: number;
  slug: string;
  title: string;
  difficulty: Difficulty | "Intermediaire" | "Avance";
  description: string;
  keywords: string[];
  problematiques: Problematiques;
  flashcards: Flashcard[];
}

export interface QuizQuestion {
  id: string;
  axisId?: number;
  question: string;
  options: string[];
  answer: string;
  explanation: string;
}

export interface ProgressState {
  completedAxes: number[];
  quizScores: Record<string, number>;
  points: number;
  diagnosticsDone: number;
  examBestScore?: number;
  lvaCompletedAxes: number[];
  lvbCompletedAxes: number[];
}
