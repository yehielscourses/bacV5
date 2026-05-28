import { Mic, PenLine } from "lucide-react";
import { Card } from "../components/ui/Card";
import { PageHeader } from "../components/ui/PageHeader";
import { useStudyTrack } from "../context/StudyTrackContext";

const lvaConnectors = [
  "First and foremost",
  "However",
  "Nevertheless",
  "To some extent",
  "As a result",
  "In a nutshell",
];

const lvbConnectors = ["ראשית", "לעומת זאת", "עם זאת", "לדעתי", "כתוצאה מכך", "לסיכום"];

const lvaMethod = {
  title: "Écrit & oral LVA",
  steps: [
    "Repérer l'axe et la tension du sujet.",
    "Plan en 2–3 parties : constat → limites → ouverture.",
    "Un exemple culturel précis par partie.",
    "Conclusion qui répond à la problématique.",
  ],
  vocab: ["identity shift", "cultural legacy", "democratic accountability", "inclusive society"],
};

const lvbMethod = {
  title: "Écrit & oral LVB",
  steps: [
    "Phrases courtes et grammaticalement sûres.",
    "Opinion → exemple → comparaison → conclusion.",
    "Exemples sur Israël, hébreu moderne, mémoire.",
    "Conclusion nette (20 s à l'oral).",
  ],
  vocab: ["חברה", "זהות", "זיכרון", "אחריות", "תרבות"],
};

const structures = [
  { title: "Introduction", text: "Accroche → axe → tension → problématique → plan." },
  { title: "Développement", text: "Argument → exemple situé → analyse → mini-bilan." },
  { title: "Conclusion", text: "Réponse directe → nuance → ouverture courte." },
];

export function MethodesPage() {
  const { track, trackLabel, isLva } = useStudyTrack();
  const method = isLva ? lvaMethod : lvbMethod;
  const connectors = isLva ? lvaConnectors : lvbConnectors;

  return (
    <div className="space-y-6">
      <PageHeader eyebrow="Meilleure note" title={`Méthodes · ${trackLabel}`}>
        <p className="text-sm">Contenu affiché uniquement pour ton parcours actif. Change de piste via le sélecteur en haut.</p>
      </PageHeader>

      <Card highlight>
        <div className="mb-3 flex items-center gap-2">
          {isLva ? <PenLine className="h-5 w-5" /> : <Mic className="h-5 w-5" />}
          <h3 className="font-bold">{method.title}</h3>
        </div>
        <ol className="space-y-2">
          {method.steps.map((step, i) => (
            <li key={step} className="flex gap-3 text-sm">
              <span className="learn-emphasis flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--track-soft)] text-xs font-bold">
                {i + 1}
              </span>
              {step}
            </li>
          ))}
        </ol>
      </Card>

      <Card>
        <h3 className="font-bold">Structures types</h3>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          {structures.map((block) => (
            <div
              key={block.title}
              className="rounded-xl border border-slate-100 bg-slate-50 p-4 text-sm dark:border-slate-800 dark:bg-slate-800/40"
            >
              <p className="learn-emphasis font-semibold">{block.title}</p>
              <p className="mt-1 text-slate-600 dark:text-slate-400">{block.text}</p>
            </div>
          ))}
        </div>
      </Card>

      <Card>
        <h3 className="font-bold">Connecteurs ({track.toUpperCase()})</h3>
        <div className={`mt-3 flex flex-wrap gap-2 ${!isLva ? "justify-end" : ""}`} dir={isLva ? "ltr" : "rtl"}>
          {connectors.map((c) => (
            <span
              key={c}
              className="learn-emphasis rounded-full border border-[var(--track-accent)]/30 bg-[var(--track-soft)] px-3 py-1 text-sm font-medium"
            >
              {c}
            </span>
          ))}
        </div>
        <div className={`mt-4 flex flex-wrap gap-2 ${!isLva ? "justify-end" : ""}`} dir={isLva ? "ltr" : "rtl"}>
          {method.vocab.map((w) => (
            <span
              key={w}
              className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium dark:bg-slate-800"
            >
              {w}
            </span>
          ))}
        </div>
      </Card>
    </div>
  );
}
