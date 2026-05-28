import { useState } from "react";
import { AxisCard } from "../components/AxisCard";
import { Card } from "../components/ui/Card";
import { PageHeader } from "../components/ui/PageHeader";
import { useStudyTrack } from "../context/StudyTrackContext";
import { completedAxesForTrack, difficulties, filterAxes } from "../utils/axisHelpers";
import type { Difficulty, ProgressState } from "../utils/types";

interface AxesPageProps {
  progress: ProgressState;
}

export function AxesPage({ progress }: AxesPageProps) {
  const { track, trackLabel } = useStudyTrack();
  const [difficulty, setDifficulty] = useState<"Tous" | Difficulty>("Tous");
  const filteredAxes = filterAxes(difficulty);
  const done = completedAxesForTrack(progress, track);

  return (
    <div>
      <PageHeader eyebrow={trackLabel} title="Les 8 axes du programme">
        <p className="text-sm">
          Filtre par difficulté. Chaque fiche est adaptée à ton parcours {track === "lva" ? "anglais" : "hébreu"}.
        </p>
      </PageHeader>

      <div className="mb-6 flex flex-wrap items-center gap-3">
        <select
          value={difficulty}
          onChange={(event) => setDifficulty(event.target.value as "Tous" | Difficulty)}
          className="focus-ring rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium dark:border-slate-700 dark:bg-slate-900"
          aria-label="Filtrer par difficulté"
        >
          <option value="Tous">Toutes difficultés</option>
          {difficulties.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
        <span className="text-sm text-slate-500">
          {filteredAxes.length} axe{filteredAxes.length > 1 ? "s" : ""}
        </span>
      </div>

      {filteredAxes.length === 0 ? (
        <Card>
          <p className="text-slate-600 dark:text-slate-300">
            Aucun axe pour ce filtre. Choisis « Toutes difficultés ».
          </p>
        </Card>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {filteredAxes.map((axis) => (
            <AxisCard key={axis.id} axis={axis} completed={done.includes(axis.id)} />
          ))}
        </div>
      )}
    </div>
  );
}
