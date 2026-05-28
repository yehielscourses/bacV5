import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { TrackSwitcher } from "../components/TrackSwitcher";
import { Card } from "../components/ui/Card";
import { PageHeader } from "../components/ui/PageHeader";
import { useStudyTrack } from "../context/StudyTrackContext";
import { axes, displayDifficulty } from "../utils/axisHelpers";

interface HomePageProps {
  onDiagnosticDone: () => void;
}

const diagnosticQuestions = [
  {
    id: "frontieres",
    question: "Migrations et mondialisation : je peux en parler.",
    axisWeights: [1, 7],
  },
  {
    id: "private-public",
    question: "Femmes, famille, sphère publique / privée : je peux illustrer.",
    axisWeights: [2],
  },
  {
    id: "art",
    question: "Art engagé ou censure : j'ai un exemple.",
    axisWeights: [3],
  },
  {
    id: "digital",
    question: "Fake news, données personnelles, réseaux : je maîtrise le vocabulaire.",
    axisWeights: [4],
  },
  {
    id: "fiction",
    question: "Mythes, dystopies ou super-héros : je peux les relier à la société.",
    axisWeights: [5],
  },
  {
    id: "science",
    question: "IA, environnement, responsabilité scientifique : je peux argumenter.",
    axisWeights: [6],
  },
  {
    id: "diversity",
    question: "Diversité, inclusion, discriminations : je connais les enjeux.",
    axisWeights: [7],
  },
  {
    id: "memory",
    question: "Histoire, mémoire, patrimoine : je les distingue.",
    axisWeights: [8],
  },
];

export function HomePage({ onDiagnosticDone }: HomePageProps) {
  const { trackLabel, trackShort } = useStudyTrack();
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const recommendation = useMemo(() => {
    const scores = new Map<number, number>();
    axes.forEach((axis) => {
      const d = displayDifficulty(axis.difficulty);
      const base = d === "Facile" ? 2 : d === "Intermédiaire" ? 1 : 0;
      scores.set(axis.id, base);
    });
    diagnosticQuestions.forEach((question) => {
      const answer = answers[question.id] ?? 0;
      question.axisWeights.forEach((axisId) => {
        scores.set(axisId, (scores.get(axisId) ?? 0) + answer);
      });
    });
    return [...axes]
      .sort((a, b) => (scores.get(b.id) ?? 0) - (scores.get(a.id) ?? 0))
      .slice(0, 3);
  }, [answers]);

  const allAnswered = diagnosticQuestions.every((q) => answers[q.id] !== undefined);

  const submit = () => {
    if (!submitted) onDiagnosticDone();
    setSubmitted(true);
  };

  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Terminale · Gestes fondateurs"
        title={`Réviser les 8 axes en ${trackLabel}`}
      >
        <p className="text-sm">
          Choisis ton parcours ci-dessous — LVA et LVB sont séparés. Les mots-clés s&apos;affichent en français ;
          un clic révèle la traduction.
        </p>
      </PageHeader>

      <Card highlight>
        <p className="mb-3 text-sm font-semibold text-slate-700 dark:text-slate-300">Parcours actif</p>
        <TrackSwitcher />
      </Card>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <div className="grid grid-cols-3 gap-3 text-center">
            {[
              ["8", "axes"],
              ["40", "questions"],
              ["10", "examen"],
            ].map(([value, label]) => (
              <div key={label} className="rounded-xl bg-slate-50 py-4 dark:bg-slate-800/50">
                <p className="learn-emphasis text-2xl font-bold">{value}</p>
                <p className="mt-1 text-xs text-slate-500">{label}</p>
              </div>
            ))}
          </div>
          <Link to="/axes" className="btn-primary mt-5 w-full">
            Ouvrir les axes · {trackShort}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Card>

        <Card>
          <h3 className="font-bold">Diagnostic rapide</h3>
          <p className="mt-1 text-xs text-slate-500">8 questions · 3 axes recommandés</p>

          <div className="mt-4 space-y-3 max-h-[min(52vh,420px)] overflow-y-auto pr-1">
            {diagnosticQuestions.map((question) => (
              <div key={question.id} className="rounded-xl border border-slate-100 p-3 dark:border-slate-800">
                <p className="text-sm font-medium">{question.question}</p>
                <div className="mt-2 grid grid-cols-3 gap-1.5">
                  {[
                    [0, "Pas encore"],
                    [1, "Un peu"],
                    [2, "À l'aise"],
                  ].map(([value, label]) => (
                    <button
                      key={value}
                      type="button"
                      onClick={() =>
                        setAnswers((current) => ({ ...current, [question.id]: Number(value) }))
                      }
                      className={`focus-ring rounded-lg px-2 py-2 text-xs font-semibold transition ${
                        answers[question.id] === Number(value)
                          ? "bg-[var(--track-accent)] text-white"
                          : "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300"
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={submit}
            disabled={!allAnswered}
            className="btn-primary mt-4 w-full"
          >
            Voir mes axes prioritaires
          </button>

          {submitted && (
            <div className="mt-4 space-y-2 border-t border-slate-100 pt-4 dark:border-slate-800">
              <p className="flex items-center gap-2 text-sm font-semibold">
                <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                À travailler en premier ({trackShort})
              </p>
              {recommendation.map((axis) => (
                <Link
                  key={axis.id}
                  to={`/axes/${axis.slug}`}
                  className="block rounded-xl border border-slate-200 px-3 py-2 text-sm transition hover:border-[var(--track-accent)] dark:border-slate-700"
                >
                  <span className="learn-emphasis">Axe {axis.id}</span> — {axis.title}
                </Link>
              ))}
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}
