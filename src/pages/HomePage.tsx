import { motion } from "framer-motion";
import { ArrowRight, Brain, CheckCircle2, Sparkles } from "lucide-react";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { axes } from "../utils/axisHelpers";

interface HomePageProps {
  onDiagnosticDone: () => void;
}

const diagnosticQuestions = [
  {
    id: "frontieres",
    question: "Je sais expliquer comment migrations et mondialisation transforment une identite.",
    axisWeights: [1, 7],
  },
  {
    id: "private-public",
    question: "Je peux parler de la place des femmes, de la famille ou de la vie privee.",
    axisWeights: [2, 7],
  },
  {
    id: "art",
    question: "Je connais au moins un exemple d'art engage ou de censure.",
    axisWeights: [3],
  },
  {
    id: "digital",
    question: "Je peux discuter des fake news, des donnees personnelles ou des reseaux sociaux.",
    axisWeights: [4],
  },
  {
    id: "fiction",
    question: "Je sais relier mythes, dystopies ou super-heros a une societe.",
    axisWeights: [5],
  },
  {
    id: "science",
    question: "Je peux argumenter sur l'IA, l'environnement ou les responsabilites scientifiques.",
    axisWeights: [6],
  },
  {
    id: "memory",
    question: "Je distingue histoire, memoire, patrimoine et commemorations.",
    axisWeights: [8],
  },
];

export function HomePage({ onDiagnosticDone }: HomePageProps) {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const recommendation = useMemo(() => {
    const scores = new Map<number, number>();

    axes.forEach((axis) => scores.set(axis.id, axis.difficulty === "Facile" ? 2 : axis.difficulty === "Intermediaire" ? 1 : 0));
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

  const submit = () => {
    if (!submitted) {
      onDiagnosticDone();
    }
    setSubmitted(true);
  };

  return (
    <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card rounded-[2rem] p-6 sm:p-8"
      >
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-teal-100 px-4 py-2 text-sm font-bold text-teal-700 dark:bg-teal-500/15 dark:text-teal-200">
          <Sparkles className="h-4 w-4" />
          Terminale LVA Anglais + LVB Hebreu
        </div>
        <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
          Reviser les 8 axes sans se perdre.
        </h2>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
          Une mini app pour comprendre la thematique commune « Gestes fondateurs et mondes en mouvement »,
          choisir les axes les plus accessibles, memoriser le vocabulaire et s'entrainer en quiz.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {[
            ["8", "axes officiels"],
            ["40", "questions"],
            ["10", "questions examen"],
          ].map(([value, label]) => (
            <div key={label} className="rounded-3xl bg-white/80 p-5 dark:bg-slate-900/80">
              <p className="text-3xl font-black text-sky-600 dark:text-sky-300">{value}</p>
              <p className="mt-1 text-sm font-semibold text-slate-500 dark:text-slate-400">{label}</p>
            </div>
          ))}
        </div>
        <Link
          to="/axes"
          className="focus-ring mt-8 inline-flex items-center gap-2 rounded-2xl bg-slate-950 px-5 py-3 font-bold text-white transition hover:-translate-y-0.5 dark:bg-white dark:text-slate-950"
        >
          Voir la grille des axes
          <ArrowRight className="h-4 w-4" />
        </Link>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.08 }}
        className="glass-card rounded-[2rem] p-6 sm:p-8"
      >
        <div className="mb-5 flex items-center gap-3">
          <div className="rounded-2xl bg-sky-100 p-3 text-sky-700 dark:bg-sky-500/15 dark:text-sky-200">
            <Brain className="h-6 w-6" />
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-teal-600 dark:text-teal-300">
              Diagnostic rapide
            </p>
            <h3 className="text-2xl font-black">Quels axes commencer ?</h3>
          </div>
        </div>

        <div className="space-y-4">
          {diagnosticQuestions.map((question) => (
            <div key={question.id} className="rounded-2xl bg-white/75 p-4 dark:bg-slate-900/75">
              <p className="font-semibold">{question.question}</p>
              <div className="mt-3 grid grid-cols-3 gap-2 text-sm">
                {[
                  ["0", "Pas encore"],
                  ["1", "Un peu"],
                  ["2", "A l'aise"],
                ].map(([value, label]) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => setAnswers((current) => ({ ...current, [question.id]: Number(value) }))}
                    className={`focus-ring rounded-xl px-3 py-2 font-bold transition ${
                      answers[question.id] === Number(value)
                        ? "bg-gradient-to-r from-sky-600 to-teal-500 text-white"
                        : "bg-slate-100 text-slate-600 hover:bg-sky-100 dark:bg-slate-800 dark:text-slate-300"
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
          disabled={Object.keys(answers).length < diagnosticQuestions.length}
          className="focus-ring mt-5 w-full rounded-2xl bg-gradient-to-r from-sky-600 to-teal-500 px-5 py-3 font-bold text-white shadow-lg shadow-sky-500/20 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Obtenir ma recommandation
        </button>

        {submitted && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-6 rounded-3xl bg-white p-5 dark:bg-slate-900">
            <div className="mb-3 flex items-center gap-2 font-black">
              <CheckCircle2 className="h-5 w-5 text-emerald-500" />
              Axes conseilles pour demarrer
            </div>
            <div className="grid gap-3">
              {recommendation.map((axis) => (
                <Link
                  key={axis.id}
                  to={`/axes/${axis.slug}`}
                  className="rounded-2xl border border-slate-200 p-4 transition hover:border-teal-300 dark:border-slate-700"
                >
                  <p className="text-sm font-bold text-teal-600 dark:text-teal-300">Axe {axis.id}</p>
                  <p className="font-black">{axis.title}</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{axis.difficulty}</p>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </motion.section>
    </div>
  );
}
