import { useCallback } from "react";
import type { AxisDiagnosticScore, DiagnosticMode, TapAnswer } from "../utils/diagnosticHelpers";
import type { StudyTrack } from "../utils/types";
import { useLocalStorage } from "./useLocalStorage";

export interface DiagnosticSnapshot {
  track: StudyTrack;
  mode: DiagnosticMode;
  answers: Record<string, TapAnswer>;
  completedAt: string;
  scores: AxisDiagnosticScore[];
}

export function useDiagnostic() {
  const [lva, setLva] = useLocalStorage<DiagnosticSnapshot | null>("bac-diagnostic-lva", null);
  const [lvb, setLvb] = useLocalStorage<DiagnosticSnapshot | null>("bac-diagnostic-lvb", null);

  const getSnapshot = useCallback(
    (track: StudyTrack) => (track === "lva" ? lva : lvb),
    [lva, lvb],
  );

  const saveSnapshot = useCallback(
    (snapshot: DiagnosticSnapshot) => {
      if (snapshot.track === "lva") setLva(snapshot);
      else setLvb(snapshot);
    },
    [setLva, setLvb],
  );

  const clearSnapshot = useCallback(
    (track: StudyTrack) => {
      if (track === "lva") setLva(null);
      else setLvb(null);
    },
    [setLva, setLvb],
  );

  return { getSnapshot, saveSnapshot, clearSnapshot, hasLva: Boolean(lva), hasLvb: Boolean(lvb) };
}
