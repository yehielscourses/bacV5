export type LanguageFilter = "Tous" | "Anglais" | "Hebreu";
export type Difficulty = "Facile" | "Intermediaire" | "Avance";

export interface Problematiques {
  anglais: string[];
  hebreu: string[];
}

export interface Flashcard {
  front: string;
  back: string;
}

export interface Axis {
  id: number;
  slug: string;
  title: string;
  difficulty: Difficulty;
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
}
