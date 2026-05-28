import { Clock, Shuffle } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { QuizRunner } from "../components/QuizRunner";
import { Card } from "../components/ui/Card";
import { PageHeader } from "../components/ui/PageHeader";
import { useStudyTrack } from "../context/StudyTrackContext";
import { axes, getQuestionsForAxis, pickExamQuestions, quizQuestions } from "../utils/axisHelpers";
import type { QuizQuestion } from "../utils/types";

interface QuizExamPageProps {
  onSaveQuiz: (quizId: string, score: number, bonus?: number) => void;
  onSaveExam: (score: number) => void;
}

type QuizTab = "axis" | "global" | "exam";

export function QuizExamPage({ onSaveQuiz, onSaveExam }: QuizExamPageProps) {
  const { track, trackLabel } = useStudyTrack();
  const [tab, setTab] = useState<QuizTab>("axis");
  const [axisId, setAxisId] = useState(1);
  const [globalSeed, setGlobalSeed] = useState(0);

  const axisQuestions = getQuestionsForAxis(axisId);
  const globalQuestions = useMemo(
    () => [...quizQuestions].sort(() => Math.random() - 0.5).slice(0, 12),
    [globalSeed],
  );

  const tabs: { id: QuizTab; label: string }[] = [
    { id: "axis", label: "Par axe" },
    { id: "global", label: "Global" },
    { id: "exam", label: "Examen" },
  ];

  return (
    <div>
      <PageHeader eyebrow={trackLabel} title="Quiz et examen blanc">
        <p className="text-sm">Chronomètre uniquement en mode examen. Valide chaque réponse avant de passer à la suivante.</p>
      </PageHeader>

      <div
        className="mb-6 flex gap-1 rounded-xl border border-slate-200 bg-slate-100 p-1 dark:border-slate-700 dark:bg-slate-800"
        role="tablist"
      >
        {tabs.map(({ id, label }) => (
          <button
            key={id}
            type="button"
            role="tab"
            aria-selected={tab === id}
            onClick={() => setTab(id)}
            className={`focus-ring flex-1 rounded-lg py-2 text-sm font-semibold transition ${
              tab === id
                ? "bg-white text-slate-900 shadow-sm dark:bg-slate-950 dark:text-white"
                : "text-slate-500"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {tab === "axis" && (
        <Card>
          <label className="block text-sm font-medium" htmlFor="axis-select">
            Choisir un axe
          </label>
          <select
            id="axis-select"
            value={axisId}
            onChange={(event) => setAxisId(Number(event.target.value))}
            className="focus-ring mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm dark:border-slate-700 dark:bg-slate-900"
          >
            {axes.map((axis) => (
              <option key={axis.id} value={axis.id}>
                Axe {axis.id} — {axis.title}
              </option>
            ))}
          </select>
          <div className="mt-5">
            <QuizRunner
              key={`${axisId}-${track}`}
              questions={axisQuestions}
              title={`Axe ${axisId}`}
              onFinish={(score) => onSaveQuiz(`axis-${axisId}-${track}`, score)}
            />
          </div>
        </Card>
      )}

      {tab === "global" && (
        <Card>
          <div className="mb-4 flex items-center justify-between">
            <p className="text-sm font-medium">12 questions mélangées</p>
            <button
              type="button"
              onClick={() => setGlobalSeed((n) => n + 1)}
              className="btn-secondary !py-2"
              aria-label="Mélanger les questions"
            >
              <Shuffle className="h-4 w-4" />
            </button>
          </div>
          <QuizRunner
            key={`${globalSeed}-${track}`}
            questions={globalQuestions}
            title="Quiz global"
            onFinish={(score) => onSaveQuiz(`global-${track}`, score, 20)}
          />
        </Card>
      )}

      {tab === "exam" && <ExamMode onSaveExam={onSaveExam} />}
    </div>
  );
}

function ExamMode({ onSaveExam }: { onSaveExam: (score: number) => void }) {
  const [questions, setQuestions] = useState<QuizQuestion[]>(() => pickExamQuestions(10));
  const [started, setStarted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(10 * 60);
  const [key, setKey] = useState(0);
  const [forceFinish, setForceFinish] = useState(false);

  useEffect(() => {
    if (!started || timeLeft <= 0) return;
    const timer = window.setInterval(() => setTimeLeft((t) => t - 1), 1000);
    return () => window.clearInterval(timer);
  }, [started, timeLeft]);

  useEffect(() => {
    if (started && timeLeft <= 0) setForceFinish(true);
  }, [started, timeLeft]);

  const minutes = Math.floor(Math.max(0, timeLeft) / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (Math.max(0, timeLeft) % 60).toString().padStart(2, "0");

  const restart = () => {
    setQuestions(pickExamQuestions(10));
    setTimeLeft(10 * 60);
    setStarted(true);
    setForceFinish(false);
    setKey((k) => k + 1);
  };

  return (
    <Card>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h3 className="font-bold">Examen blanc</h3>
          <p className="text-xs text-slate-500">10 questions · 10 minutes</p>
        </div>
        {started && (
          <div
            className={`inline-flex items-center gap-2 rounded-xl px-3 py-2 font-mono text-lg font-bold ${
              timeLeft <= 60 ? "bg-rose-100 text-rose-800 dark:bg-rose-500/20" : "bg-slate-100 dark:bg-slate-800"
            }`}
          >
            <Clock className="h-4 w-4" />
            {minutes}:{seconds}
          </div>
        )}
      </div>

      {!started ? (
        <button type="button" onClick={() => setStarted(true)} className="btn-primary mt-5 w-full">
          Démarrer
        </button>
      ) : (
        <div className="mt-5">
          {timeLeft <= 0 && (
            <p className="mb-3 text-sm font-medium text-rose-700 dark:text-rose-300">Temps écoulé — score enregistré.</p>
          )}
          <QuizRunner
            key={key}
            questions={questions}
            title="Examen blanc"
            forceFinish={forceFinish}
            onForceFinishHandled={() => setStarted(false)}
            onFinish={(score) => {
              setStarted(false);
              setForceFinish(false);
              onSaveExam(score);
            }}
          />
          <button type="button" onClick={restart} className="btn-secondary mt-3 text-sm">
            Nouveau tirage
          </button>
        </div>
      )}
    </Card>
  );
}
