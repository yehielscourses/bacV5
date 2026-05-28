import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useStudyTrack } from "../context/StudyTrackContext";
import { displayDifficulty, levelColor } from "../utils/axisHelpers";
import type { Axis } from "../utils/types";
import { KeywordChip } from "./KeywordChip";

interface AxisCardProps {
  axis: Axis;
  completed: boolean;
}

export function AxisCard({ axis, completed }: AxisCardProps) {
  const { trackShort } = useStudyTrack();
  const summary = axis.description.split(/(?<=[.!?])\s+/).slice(0, 2).join(" ");

  return (
    <article className="flex h-full flex-col rounded-2xl border border-slate-200/90 bg-white p-5 dark:border-slate-700 dark:bg-slate-900">
      <div className="mb-3 flex items-start justify-between gap-2">
        <div>
          <p className="text-xs font-semibold text-[var(--track-strong)]">Axe {axis.id}</p>
          <h3 className="mt-0.5 text-lg font-bold leading-snug">{axis.title}</h3>
        </div>
        {completed ? (
          <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-500" aria-label="Révisé" />
        ) : null}
      </div>

      <span className={`mb-3 w-fit rounded-full px-2.5 py-0.5 text-xs font-semibold ${levelColor(axis.difficulty)}`}>
        {displayDifficulty(axis.difficulty)}
      </span>

      <p className="line-clamp-2 flex-1 text-sm text-slate-600 dark:text-slate-400">{summary}</p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {axis.keywords.slice(0, 5).map((keyword) => (
          <KeywordChip key={keyword} label={keyword} size="sm" />
        ))}
      </div>

      <Link to={`/axes/${axis.slug}`} className="btn-primary mt-4 w-full">
        Réviser · {trackShort}
        <ArrowRight className="h-4 w-4" />
      </Link>
    </article>
  );
}
