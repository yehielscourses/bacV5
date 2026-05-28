import { Clock, GraduationCap, Shuffle } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { QuizRunner } from "../components/QuizRunner";
import { axes, getQuestionsForAxis, pickExamQuestions, quizQuestions } from "../utils/axisHelpers";
import { QuizQuestion } from "../utils/types";

interface QuizExamPageProps {
  onSaveQuiz: (quizId: string, score: number, bonus?: number) => void;
  onSaveExam: (score: number) => void;
}

export function QuizExamPage({ onSaveQuiz, onSaveExam }: QuizExamPageProps) {
  const [axisId, setAxisId] = useState(1);
  const [globalSeed, setGlobalSeed] = useState(0);
  const axisQuestions = getQuestionsForAxis(axisId);
  const globalQuestions = useMemo(
    () => [...quizQuestions].sort(() => Math.random() - 0.5).slice(0, 12),
    [globalSeed],
  );

  return (
    <div className="grid gap-8 xl:grid-cols-[0.9fr_1.1fr]">
      <section className="space-y-6">
        <div className="rounded-[2rem] bg-gradient-to-br from-sky-600 to-teal-500 p-6 text-white shadow-2xl shadow-sky-500/20">
          <div className="mb-3 flex items-center gap-3">
            <GraduationCap className="h-7 w-7" />
            <p className="text-sm font-bold uppercase tracking-[0.22em]">Quiz & Examen</p>
          </div>
          <h2 className="text-3xl font-black">S'entrainer en conditions progressives</h2>
          <p className="mt-3 text-white/85">
            Commence par un axe, passe au global, puis tente l'examen blanc chronometre.
          </p>
        </div>

        <div className="glass-card rounded-3xl p-6">
          <h3 className="text-2xl font-black">Quiz par axe</h3>
          <select
            value={axisId}
            onChange={(event) => setAxisId(Number(event.target.value))}
            className="focus-ring mt-4 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 font-semibold dark:border-slate-700 dark:bg-slate-950"
          >
            {axes.map((axis) => (
              <option key={axis.id} value={axis.id}>
                Axe {axis.id} - {axis.title}
              </option>
            ))}
          </select>
          <div className="mt-5">
            <QuizRunner
              key={axisId}
              compact
              questions={axisQuestions}
              title={`Axe ${axisId}`}
              onFinish={(score) => onSaveQuiz(`axis-${axisId}`, score)}
            />
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div className="glass-card rounded-3xl p-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-teal-600 dark:text-teal-300">
                Quiz global
              </p>
              <h3 className="text-2xl font-black">Questions melangees</h3>
            </div>
            <button
              type="button"
              onClick={() => setGlobalSeed((current) => current + 1)}
              className="focus-ring rounded-2xl bg-white p-3 text-slate-600 dark:bg-slate-900 dark:text-slate-300"
              aria-label="Melanger les questions"
            >
              <Shuffle className="h-5 w-5" />
            </button>
          </div>
          <div className="mt-5">
            <QuizRunner
              key={globalSeed}
              compact
              questions={globalQuestions}
              title="Quiz global"
              onFinish={(score) => onSaveQuiz("global", score, 20)}
            />
          </div>
        </div>

        <ExamMode onSaveExam={onSaveExam} />
      </section>
    </div>
  );
}

function ExamMode({ onSaveExam }: { onSaveExam: (score: number) => void }) {
  const [questions, setQuestions] = useState<QuizQuestion[]>(() => pickExamQuestions(10));
  const [started, setStarted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(10 * 60);
  const [key, setKey] = useState(0);

  useEffect(() => {
    if (!started || timeLeft <= 0) return;
    const timer = window.setInterval(() => setTimeLeft((current) => current - 1), 1000);
    return () => window.clearInterval(timer);
  }, [started, timeLeft]);

  const minutes = Math.floor(timeLeft / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (timeLeft % 60).toString().padStart(2, "0");

  const restart = () => {
    setQuestions(pickExamQuestions(10));
    setTimeLeft(10 * 60);
    setStarted(true);
    setKey((current) => current + 1);
  };

  return (
    <div className="glass-card rounded-3xl p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-teal-600 dark:text-teal-300">
            Mode examen blanc
          </p>
          <h3 className="text-2xl font-black">10 questions avec timer</h3>
        </div>
        <div className="inline-flex items-center gap-2 rounded-2xl bg-slate-950 px-4 py-3 font-black text-white dark:bg-white dark:text-slate-950">
          <Clock className="h-5 w-5" />
          {minutes}:{seconds}
        </div>
      </div>

      {!started ? (
        <button
          type="button"
          onClick={() => setStarted(true)}
          className="focus-ring mt-5 w-full rounded-2xl bg-gradient-to-r from-sky-600 to-teal-500 px-5 py-3 font-bold text-white"
        >
          Demarrer l'examen blanc
        </button>
      ) : timeLeft <= 0 ? (
        <div className="mt-5 rounded-2xl bg-rose-50 p-5 text-rose-800 dark:bg-rose-500/15 dark:text-rose-100">
          Temps ecoule. Relance un examen pour t'entrainer avec un nouveau tirage.
          <button
            type="button"
            onClick={restart}
            className="focus-ring mt-4 block rounded-xl bg-rose-600 px-4 py-2 font-bold text-white"
          >
            Relancer
          </button>
        </div>
      ) : (
        <div className="mt-5">
          <QuizRunner
            key={key}
            compact
            questions={questions}
            title="Examen blanc"
            onFinish={(score) => {
              setStarted(false);
              onSaveExam(score);
            }}
          />
          <button
            type="button"
            onClick={restart}
            className="focus-ring mt-4 rounded-2xl bg-white px-4 py-2 font-bold text-slate-600 dark:bg-slate-900 dark:text-slate-300"
          >
            Nouveau tirage
          </button>
        </div>
      )}
    </div>
  );
}
