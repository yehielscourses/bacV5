import { useCallback } from "react";
import { ProgressState } from "../utils/types";
import { useLocalStorage } from "./useLocalStorage";

const initialProgress: ProgressState = {
  completedAxes: [],
  quizScores: {},
  points: 0,
  diagnosticsDone: 0,
};

export function useProgress() {
  const [progress, setProgress] = useLocalStorage<ProgressState>(
    "bac-lva-lvb-progress",
    initialProgress,
  );

  const completeAxis = useCallback(
    (axisId: number) => {
      setProgress((current) => {
        if (current.completedAxes.includes(axisId)) {
          return current;
        }

        return {
          ...current,
          completedAxes: [...current.completedAxes, axisId],
          points: current.points + 25,
        };
      });
    },
    [setProgress],
  );

  const saveQuizScore = useCallback(
    (quizId: string, score: number, bonus = 0) => {
      setProgress((current) => {
        const previous = current.quizScores[quizId] ?? -1;
        const improved = score > previous;

        return {
          ...current,
          quizScores: {
            ...current.quizScores,
            [quizId]: Math.max(previous, score),
          },
          points: improved ? current.points + score * 10 + bonus : current.points,
        };
      });
    },
    [setProgress],
  );

  const saveExamScore = useCallback(
    (score: number) => {
      setProgress((current) => ({
        ...current,
        examBestScore: Math.max(current.examBestScore ?? 0, score),
        points: score > (current.examBestScore ?? 0) ? current.points + score * 15 : current.points,
      }));
    },
    [setProgress],
  );

  const markDiagnosticDone = useCallback(() => {
    setProgress((current) => ({
      ...current,
      diagnosticsDone: current.diagnosticsDone + 1,
      points: current.points + 20,
    }));
  }, [setProgress]);

  const resetProgress = useCallback(() => setProgress(initialProgress), [setProgress]);

  return {
    progress,
    completeAxis,
    saveQuizScore,
    saveExamScore,
    markDiagnosticDone,
    resetProgress,
  };
}
