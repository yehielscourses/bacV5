import { useCallback } from "react";
import type { ProgressState, StudyTrack } from "../utils/types";
import { useLocalStorage } from "./useLocalStorage";

const initialProgress: ProgressState = {
  completedAxes: [],
  lvaCompletedAxes: [],
  lvbCompletedAxes: [],
  quizScores: {},
  points: 0,
  diagnosticsDone: 0,
};

function migrateProgress(raw: ProgressState): ProgressState {
  const lva = raw.lvaCompletedAxes?.length ? raw.lvaCompletedAxes : raw.completedAxes;
  const lvb = raw.lvbCompletedAxes?.length ? raw.lvbCompletedAxes : [];
  return { ...raw, lvaCompletedAxes: lva, lvbCompletedAxes: lvb, completedAxes: raw.completedAxes ?? [] };
}

export function useProgress() {
  const [progress, setProgress] = useLocalStorage<ProgressState>(
    "bac-lva-lvb-progress",
    initialProgress,
  );

  const safeProgress = migrateProgress(progress);

  const completeAxis = useCallback(
    (axisId: number, track: StudyTrack) => {
      setProgress((current) => {
        const base = migrateProgress(current);
        const key = track === "lva" ? "lvaCompletedAxes" : "lvbCompletedAxes";
        const list = base[key];
        if (list.includes(axisId)) {
          return {
            ...base,
            [key]: list.filter((id) => id !== axisId),
          };
        }
        return {
          ...base,
          [key]: [...list, axisId],
          points: base.points + 25,
        };
      });
    },
    [setProgress],
  );

  const saveQuizScore = useCallback(
    (quizId: string, score: number, bonus = 0) => {
      setProgress((current) => {
        const base = migrateProgress(current);
        const previous = base.quizScores[quizId] ?? -1;
        const improved = score > previous;

        return {
          ...base,
          quizScores: {
            ...base.quizScores,
            [quizId]: Math.max(previous, score),
          },
          points: improved ? base.points + score * 10 + bonus : base.points,
        };
      });
    },
    [setProgress],
  );

  const saveExamScore = useCallback(
    (score: number) => {
      setProgress((current) => {
        const base = migrateProgress(current);
        return {
          ...base,
          examBestScore: Math.max(base.examBestScore ?? 0, score),
          points:
            score > (base.examBestScore ?? 0) ? base.points + score * 15 : base.points,
        };
      });
    },
    [setProgress],
  );

  const markDiagnosticDone = useCallback(() => {
    setProgress((current) => {
      const base = migrateProgress(current);
      return {
        ...base,
        diagnosticsDone: base.diagnosticsDone + 1,
        points: base.points + 20,
      };
    });
  }, [setProgress]);

  const resetProgress = useCallback(() => setProgress(initialProgress), [setProgress]);

  return {
    progress: safeProgress,
    completeAxis,
    saveQuizScore,
    saveExamScore,
    markDiagnosticDone,
    resetProgress,
  };
}
