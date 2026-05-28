import { Languages } from "lucide-react";
import { useStudyTrack } from "../context/StudyTrackContext";
import type { StudyTrack } from "../utils/types";

const options: { id: StudyTrack; title: string; hint: string }[] = [
  { id: "lva", title: "Anglais LVA", hint: "UK / USA" },
  { id: "lvb", title: "Hébreu LVB", hint: "Israël" },
];

export function TrackSwitcher({ compact = false }: { compact?: boolean }) {
  const { track, setTrack } = useStudyTrack();

  if (compact) {
    return (
      <div
        className="inline-flex rounded-xl border border-slate-200 bg-slate-100 p-0.5 dark:border-slate-700 dark:bg-slate-800"
        role="tablist"
        aria-label="Parcours de langue"
      >
        {options.map((opt) => (
          <button
            key={opt.id}
            type="button"
            role="tab"
            aria-selected={track === opt.id}
            onClick={() => setTrack(opt.id)}
            className={`focus-ring rounded-lg px-3 py-1.5 text-xs font-bold transition ${
              track === opt.id
                ? "bg-white text-slate-900 shadow-sm dark:bg-slate-950 dark:text-white"
                : "text-slate-500 dark:text-slate-400"
            }`}
          >
            {opt.id.toUpperCase()}
          </button>
        ))}
      </div>
    );
  }

  return (
    <div className="grid gap-2 sm:grid-cols-2" role="tablist" aria-label="Choisir le parcours">
      {options.map((opt) => {
        const active = track === opt.id;
        return (
          <button
            key={opt.id}
            type="button"
            role="tab"
            aria-selected={active}
            onClick={() => setTrack(opt.id)}
            className={`focus-ring flex items-center gap-3 rounded-2xl border px-4 py-3 text-left transition ${
              active
                ? "border-[var(--track-accent)] bg-[var(--track-soft)] ring-1 ring-[var(--track-accent)]"
                : "border-slate-200 bg-white hover:border-slate-300 dark:border-slate-700 dark:bg-slate-900"
            }`}
          >
            <span
              className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                active ? "bg-[var(--track-accent)] text-white" : "bg-slate-100 text-slate-500 dark:bg-slate-800"
              }`}
            >
              <Languages className="h-5 w-5" />
            </span>
            <span>
              <span className="block font-bold text-slate-900 dark:text-white">{opt.title}</span>
              <span className="block text-xs text-slate-500 dark:text-slate-400">{opt.hint}</span>
            </span>
          </button>
        );
      })}
    </div>
  );
}
