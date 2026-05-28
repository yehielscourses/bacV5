import { motion } from "framer-motion";
import { useState } from "react";
import { keywordTranslation, resolveKeyword } from "../utils/keywordHelpers";
import { useStudyTrack } from "../context/StudyTrackContext";

interface KeywordChipProps {
  label: string;
  size?: "sm" | "md";
}

export function KeywordChip({ label, size = "md" }: KeywordChipProps) {
  const { track } = useStudyTrack();
  const entry = resolveKeyword(label);
  const [revealed, setRevealed] = useState(false);
  const translation = keywordTranslation(entry, track);
  const isRtl = track === "lvb";

  const padding = size === "sm" ? "px-2.5 py-1 text-xs" : "px-3 py-1.5 text-sm";

  return (
    <motion.button
      type="button"
      layout
      onClick={() => setRevealed((v) => !v)}
      className={`focus-ring keyword-chip ${padding} rounded-full border font-semibold transition-colors ${
        revealed
          ? "border-[var(--track-accent)] bg-[var(--track-soft)] text-[var(--track-strong)]"
          : "border-slate-200 bg-white text-slate-800 hover:border-[var(--track-accent)] dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100"
      }`}
      aria-pressed={revealed}
      aria-label={revealed ? `${entry.fr} : ${translation}` : entry.fr}
      whileTap={{ scale: 0.96 }}
    >
      <motion.span
        key={revealed ? "translation" : "french"}
        initial={{ opacity: 0, rotateX: -70 }}
        animate={{ opacity: 1, rotateX: 0 }}
        transition={{ duration: 0.28, ease: "easeOut" }}
        className="block"
        style={{ transformPerspective: 600 }}
        dir={revealed && isRtl ? "rtl" : "ltr"}
      >
        {revealed ? translation : entry.fr}
      </motion.span>
    </motion.button>
  );
}
