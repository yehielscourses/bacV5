import { Filter } from "lucide-react";
import { useState } from "react";
import { AxisCard } from "../components/AxisCard";
import { difficulties, filterAxes } from "../utils/axisHelpers";
import { Difficulty, LanguageFilter, ProgressState } from "../utils/types";

interface AxesPageProps {
  progress: ProgressState;
}

export function AxesPage({ progress }: AxesPageProps) {
  const [language, setLanguage] = useState<LanguageFilter>("Tous");
  const [difficulty, setDifficulty] = useState<"Tous" | Difficulty>("Tous");
  const filteredAxes = filterAxes(language, difficulty);

  return (
    <div>
      <section className="mb-8 rounded-[2rem] bg-slate-950 p-6 text-white shadow-2xl shadow-sky-500/10 dark:bg-white dark:text-slate-950">
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-teal-300 dark:text-teal-700">
          Revision des axes
        </p>
        <h2 className="mt-2 text-3xl font-black sm:text-4xl">Grille interactive des 8 axes</h2>
        <p className="mt-3 max-w-3xl text-slate-300 dark:text-slate-600">
          Filtre par langue et difficulte, puis ouvre une fiche pour acceder au resume, a la description officielle,
          aux flashcards et au quiz de 5 questions.
        </p>
      </section>

      <div className="mb-6 flex flex-col gap-3 rounded-3xl bg-white/80 p-4 shadow-sm dark:bg-slate-900/80 md:flex-row md:items-center">
        <div className="flex items-center gap-2 font-bold text-slate-700 dark:text-slate-200">
          <Filter className="h-5 w-5 text-teal-500" />
          Filtres
        </div>
        <select
          value={language}
          onChange={(event) => setLanguage(event.target.value as LanguageFilter)}
          className="focus-ring rounded-2xl border border-slate-200 bg-white px-4 py-3 font-semibold dark:border-slate-700 dark:bg-slate-950"
        >
          {["Tous", "Anglais", "Hebreu"].map((item) => (
            <option key={item} value={item}>
              Langue : {item}
            </option>
          ))}
        </select>
        <select
          value={difficulty}
          onChange={(event) => setDifficulty(event.target.value as "Tous" | Difficulty)}
          className="focus-ring rounded-2xl border border-slate-200 bg-white px-4 py-3 font-semibold dark:border-slate-700 dark:bg-slate-950"
        >
          {["Tous", ...difficulties].map((item) => (
            <option key={item} value={item}>
              Difficulte : {item}
            </option>
          ))}
        </select>
        <span className="ml-auto rounded-full bg-sky-100 px-4 py-2 text-sm font-bold text-sky-700 dark:bg-sky-500/15 dark:text-sky-200">
          {filteredAxes.length} axe{filteredAxes.length > 1 ? "s" : ""}
        </span>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {filteredAxes.map((axis) => (
          <AxisCard key={axis.id} axis={axis} completed={progress.completedAxes.includes(axis.id)} />
        ))}
      </div>
    </div>
  );
}
