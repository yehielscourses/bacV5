import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, RotateCcw, XCircle } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import type { QuizQuestion } from "../utils/types";
import { Card } from "./ui/Card";

interface QuizRunnerProps {
  questions: QuizQuestion[];
  title: string;
  onFinish?: (score: number) => void;
  compact?: boolean;
  /** When time runs out, force submit with current answers */
  forceFinish?: boolean;
  onForceFinishHandled?: () => void;
}

export function QuizRunner({
  questions,
  title,
  onFinish,
  compact = false,
  forceFinish = false,
  onForceFinishHandled,
}: QuizRunnerProps) {
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [validated, setValidated] = useState<Record<string, boolean>>({});
  const [finished, setFinished] = useState(false);

  const current = questions[index];

  const score = useMemo(
    () => questions.filter((q) => answers[q.id] === q.answer).length,
    [answers, questions],
  );

  const finishQuiz = () => {
    if (finished) return;
    setFinished(true);
    const finalScore = questions.filter((q) => answers[q.id] === q.answer).length;
    onFinish?.(finalScore);
  };

  useEffect(() => {
    if (!forceFinish || finished || questions.length === 0) return;
    finishQuiz();
    onForceFinishHandled?.();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [forceFinish, finished, questions.length]);

  if (questions.length === 0) {
    return (
      <Card>
        <p className="text-slate-600 dark:text-slate-300">Aucune question disponible.</p>
      </Card>
    );
  }

  if (!current) return null;

  const chooseAnswer = (answer: string) => {
    if (validated[current.id]) return;
    setAnswers((prev) => ({ ...prev, [current.id]: answer }));
  };

  const validateCurrent = () => {
    if (!answers[current.id]) return;
    setValidated((prev) => ({ ...prev, [current.id]: true }));
  };

  const next = () => {
    if (!validated[current.id]) return;
    if (index === questions.length - 1) {
      finishQuiz();
      return;
    }
    setIndex((i) => i + 1);
  };

  const restart = () => {
    setIndex(0);
    setAnswers({});
    setValidated({});
    setFinished(false);
  };

  if (finished) {
    return (
      <Card highlight className={compact ? "!p-4" : ""}>
        <p className="text-xs font-semibold uppercase tracking-widest text-[var(--track-strong)]">Résultat</p>
        <h2 className="mt-1 text-xl font-bold">{title}</h2>
        <p className="learn-emphasis mt-4 text-4xl font-bold">
          {score}/{questions.length}
        </p>
        <ul className="mt-4 max-h-64 space-y-2 overflow-y-auto text-sm">
          {questions.map((question) => {
            const good = answers[question.id] === question.answer;
            return (
              <li
                key={question.id}
                className="flex gap-2 rounded-lg border border-slate-200 p-3 dark:border-slate-700"
              >
                {good ? (
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500" />
                ) : (
                  <XCircle className="h-4 w-4 shrink-0 text-rose-500" />
                )}
                <span>
                  <span className="font-medium">{question.question}</span>
                  {!good && (
                    <span className="mt-1 block text-slate-500">
                      → {question.answer}
                    </span>
                  )}
                </span>
              </li>
            );
          })}
        </ul>
        <button type="button" onClick={restart} className="btn-secondary mt-4">
          <RotateCcw className="h-4 w-4" />
          Recommencer
        </button>
      </Card>
    );
  }

  const selected = answers[current.id];
  const isValidated = Boolean(validated[current.id]);

  return (
    <div className={compact ? "" : ""}>
      <div className="mb-4 flex items-center justify-between gap-2 text-sm">
        <span className="font-medium text-slate-500">
          {index + 1} / {questions.length}
        </span>
        <span className="text-slate-400">{title}</span>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.18 }}
        >
          <p className="learn-emphasis mb-4 text-base font-semibold leading-relaxed">{current.question}</p>
          <div className="grid gap-2">
            {current.options.map((option) => {
              const isSelected = selected === option;
              const isRight = isValidated && option === current.answer;
              const isWrong = isValidated && isSelected && option !== current.answer;

              return (
                <button
                  key={option}
                  type="button"
                  onClick={() => chooseAnswer(option)}
                  disabled={isValidated}
                  className={`focus-ring rounded-xl border px-4 py-3 text-left text-sm font-medium transition ${
                    isRight
                      ? "border-emerald-400 bg-emerald-50 text-emerald-900 dark:bg-emerald-500/15 dark:text-emerald-100"
                      : isWrong
                        ? "border-rose-400 bg-rose-50 text-rose-900 dark:bg-rose-500/15 dark:text-rose-100"
                        : isSelected
                          ? "border-[var(--track-accent)] bg-[var(--track-soft)]"
                          : "border-slate-200 bg-white hover:border-slate-300 dark:border-slate-700 dark:bg-slate-900"
                  }`}
                >
                  {option}
                </button>
              );
            })}
          </div>

          {isValidated && (
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">{current.explanation}</p>
          )}

          <div className="mt-4 flex flex-wrap gap-2">
            {!isValidated ? (
              <button
                type="button"
                onClick={validateCurrent}
                disabled={!selected}
                className="btn-primary"
              >
                Valider
              </button>
            ) : (
              <button type="button" onClick={next} className="btn-primary">
                {index === questions.length - 1 ? "Voir le score" : "Suivant"}
              </button>
            )}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
