import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, RotateCcw, XCircle } from "lucide-react";
import { useMemo, useState } from "react";
import { QuizQuestion } from "../utils/types";

interface QuizRunnerProps {
  questions: QuizQuestion[];
  title: string;
  onFinish?: (score: number) => void;
  compact?: boolean;
}

export function QuizRunner({ questions, title, onFinish, compact = false }: QuizRunnerProps) {
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [finished, setFinished] = useState(false);

  const current = questions[index];
  const score = useMemo(
    () => questions.filter((question) => answers[question.id] === question.answer).length,
    [answers, questions],
  );

  if (questions.length === 0) {
    return (
      <div className="rounded-3xl bg-white p-6 text-slate-600 dark:bg-slate-900 dark:text-slate-300">
        Aucune question disponible.
      </div>
    );
  }

  const chooseAnswer = (answer: string) => {
    setAnswers((currentAnswers) => ({ ...currentAnswers, [current.id]: answer }));
  };

  const next = () => {
    if (index === questions.length - 1) {
      setFinished(true);
      onFinish?.(score);
      return;
    }
    setIndex((currentIndex) => currentIndex + 1);
  };

  const restart = () => {
    setIndex(0);
    setAnswers({});
    setFinished(false);
  };

  if (finished) {
    return (
      <motion.section
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-card rounded-3xl p-6"
      >
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-teal-600 dark:text-teal-300">
          Resultat
        </p>
        <h2 className="mt-2 text-3xl font-black">{title}</h2>
        <div className="my-6 rounded-3xl bg-gradient-to-br from-sky-600 to-teal-500 p-6 text-white">
          <p className="text-lg font-semibold">Score</p>
          <p className="text-5xl font-black">
            {score}/{questions.length}
          </p>
        </div>
        <div className="space-y-3">
          {questions.map((question) => {
            const good = answers[question.id] === question.answer;
            return (
              <div
                key={question.id}
                className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-900"
              >
                <div className="flex gap-3">
                  {good ? (
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-emerald-500" />
                  ) : (
                    <XCircle className="mt-1 h-5 w-5 shrink-0 text-rose-500" />
                  )}
                  <div>
                    <p className="font-bold">{question.question}</p>
                    <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                      Bonne reponse : <span className="font-semibold">{question.answer}</span>
                    </p>
                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{question.explanation}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <button
          type="button"
          onClick={restart}
          className="focus-ring mt-6 inline-flex items-center gap-2 rounded-2xl bg-slate-950 px-5 py-3 font-bold text-white dark:bg-white dark:text-slate-950"
        >
          <RotateCcw className="h-4 w-4" />
          Recommencer
        </button>
      </motion.section>
    );
  }

  const selected = answers[current.id];
  const answered = Boolean(selected);

  return (
    <section className={`glass-card rounded-3xl ${compact ? "p-5" : "p-6"}`}>
      <div className="mb-5 flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-teal-600 dark:text-teal-300">
            Question {index + 1}/{questions.length}
          </p>
          <h2 className="mt-2 text-2xl font-black">{title}</h2>
        </div>
        <div className="rounded-full bg-white px-4 py-2 text-sm font-bold text-slate-600 dark:bg-slate-900 dark:text-slate-300">
          {score} point{score > 1 ? "s" : ""}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.2 }}
        >
          <p className="mb-5 text-lg font-bold leading-7">{current.question}</p>
          <div className="grid gap-3">
            {current.options.map((option) => {
              const isSelected = selected === option;
              const isRight = answered && option === current.answer;
              const isWrong = answered && isSelected && option !== current.answer;

              return (
                <button
                  key={option}
                  type="button"
                  onClick={() => chooseAnswer(option)}
                  className={`focus-ring rounded-2xl border p-4 text-left font-semibold transition ${
                    isRight
                      ? "border-emerald-400 bg-emerald-50 text-emerald-800 dark:bg-emerald-500/15 dark:text-emerald-100"
                      : isWrong
                        ? "border-rose-400 bg-rose-50 text-rose-800 dark:bg-rose-500/15 dark:text-rose-100"
                        : isSelected
                          ? "border-sky-400 bg-sky-50 dark:bg-sky-500/15"
                          : "border-slate-200 bg-white hover:border-sky-300 dark:border-slate-700 dark:bg-slate-900"
                  }`}
                >
                  {option}
                </button>
              );
            })}
          </div>
          {answered && (
            <div className="mt-5 rounded-2xl bg-white/80 p-4 text-sm text-slate-600 dark:bg-slate-900/80 dark:text-slate-300">
              {current.explanation}
            </div>
          )}
          <button
            type="button"
            onClick={next}
            disabled={!answered}
            className="focus-ring mt-6 rounded-2xl bg-gradient-to-r from-sky-600 to-teal-500 px-5 py-3 font-bold text-white shadow-lg shadow-sky-500/20 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {index === questions.length - 1 ? "Voir le score" : "Question suivante"}
          </button>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
