import { createContext, useContext, useEffect, useMemo, type ReactNode } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import type { StudyTrack } from "../utils/types";

interface StudyTrackContextValue {
  track: StudyTrack;
  setTrack: (track: StudyTrack) => void;
  isLva: boolean;
  isLvb: boolean;
  trackLabel: string;
  trackShort: string;
}

const StudyTrackContext = createContext<StudyTrackContextValue | null>(null);

export function StudyTrackProvider({ children }: { children: ReactNode }) {
  const [track, setTrack] = useLocalStorage<StudyTrack>("bac-study-track", "lva");

  useEffect(() => {
    document.documentElement.dataset.track = track;
  }, [track]);

  const value = useMemo(
    () => ({
      track,
      setTrack,
      isLva: track === "lva",
      isLvb: track === "lvb",
      trackLabel: track === "lva" ? "Anglais LVA" : "Hébreu LVB",
      trackShort: track === "lva" ? "LVA" : "LVB",
    }),
    [track],
  );

  return <StudyTrackContext.Provider value={value}>{children}</StudyTrackContext.Provider>;
}

export function useStudyTrack() {
  const ctx = useContext(StudyTrackContext);
  if (!ctx) throw new Error("useStudyTrack must be used within StudyTrackProvider");
  return ctx;
}
