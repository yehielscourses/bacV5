import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, Minus, ThumbsDown, ThumbsUp } from "lucide-react";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useStudyTrack } from "../context/StudyTrackContext";
import { useDiagnostic } from "../hooks/useDiagnostic";
import { axes } from "../utils/axisHelpers";
import {
  buildDiagnosticItems,
  computeAxisScores,
  getDiagnosticCounts,
  rankAxes,
  vocabPromptLine,
  type DiagnosticMode,
  type DiagnosticPhase,
  type TapAnswer,
} from "../utils/diagnosticHelpers";
import { Card } from "./ui/Card";

interface DiagnosticWizardProps {
  onComplete: (track: "lva" | "lvb") => void;
}

type Step = "mode" | "run" | "results";

const TAP_OPTIONS: { value: TapAnswer; label: string; icon: typeof ThumbsUp; className: string }[] = [
  { value: 2, label: "Oui", icon: ThumbsUp, className: "border-emerald-300 bg-emerald-50 text-emerald-800 dark:bg-emerald-500/15 dark:text-emerald-100" },
  { value: 1, label: "Bof", icon: Minus, className: "border-amber-300 bg-amber-50 text-amber-900 dark:bg-amber-500/15 dark:text-amber-100" },
  { value: 0, label: "Non", icon: ThumbsDown, className: "border-slate-200 bg-slate-50 text-slate-600 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-300" },
];

export function DiagnosticWizard({ onComplete }: DiagnosticWizardProps) {
  const { track, trackLabel, trackShort } = useStudyTrack();
  const { getSnapshot, saveSnapshot, clearSnapshot } = useDiagnostic();
  const existing = getSnapshot(track);

  const [step, setStep] = useState<Step>(existing ? "results" : "mode");
  const [mode, setMode] = useState<DiagnosticMode>(existing?.mode ?? "express");
  const [answers, setAnswers] = useState<Record<string, TapAnswer>>(existing?.answers ?? {});
  const [index, setIndex] = useState(0);

  const items = useMemo(() => buildDiagnosticItems(track, mode), [track, mode]);
  const current = items[index];
  const counts = getDiagnosticCounts(mode);

  const phase: DiagnosticPhase | null = current?.phase ?? null;
  const phaseProgress = useMemo(() => {
    const vocabTotal = axes.length * counts.vocab;
    const notionTotal = axes.length * counts.notion;
    if (!current) return { label: "", current: 0, total: items.length };
    if (current.phase === "vocab") {
      const vocabIndex = items.slice(0, index + 1).filter((i) => i.phase === "vocab").length;
      return { label: "Vocabulaire", current: vocabIndex, total: vocabTotal };
    }
    const notionIndex = items.slice(0, index + 1).filter((i) => i.phase === "notion").length;
    return { label: "Notions", current: notionIndex, total: notionTotal };
  }, [current, counts, index, items]);

  const scores = useMemo(() => computeAxisScores(items, answers), [items, answers]);
  const ranking = useMemo(() => rankAxes(scores), [scores]);

  const axisTitle = (axisId: number) => axes.find((a) => a.id === axisId)?.title ?? `Axe ${axisId}`;

  const answer = (value: TapAnswer) => {
    if (!current) return;
    const nextAnswers = { ...answers, [current.id]: value };
    setAnswers(nextAnswers);
    if (index >= items.length - 1) {
      const finalScores = computeAxisScores(items, nextAnswers);
      saveSnapshot({
        track,
        mode,
        answers: nextAnswers,
        completedAt: new Date().toISOString(),
        scores: finalScores,
      });
      onComplete(track);
      setStep("results");
      return;
    }
    setIndex((i) => i + 1);
  };

  const goBack = () => {
    if (index > 0) setIndex((i) => i - 1);
  };

  const restart = () => {
    clearSnapshot(track);
    setAnswers({});
    setIndex(0);
    setStep("mode");
  };

  const start = (selected: DiagnosticMode) => {
    setMode(selected);
    setAnswers({});
    setIndex(0);
    setStep("run");
  };

  if (step === "mode") {
    return (
      <Card>
        <h3 className="font-bold">Diagnostic · {trackLabel}</h3>
        <p className="mt-1 text-sm text-slate-500">
          Réponds en un tap : vocabulaire puis notions. Uniquement pour ce parcours.
        </p>
        <div className="mt-4 grid gap-2 sm:grid-cols-2">
          <button type="button" onClick={() => start("express")} className="focus-ring rounded-xl border-2 border-[var(--track-accent)] bg-[var(--track-soft)] p-4 text-left">
            <p className="font-bold">Express</p>
            <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
              {axes.length * 4} mots + {axes.length * 3} notions · ~2 min
            </p>
          </button>
          <button type="button" onClick={() => start("full")} className="focus-ring rounded-xl border border-slate-200 p-4 text-left dark:border-slate-700">
            <p className="font-bold">Complet</p>
            <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
              {axes.length * 6} mots + {axes.length * 4} notions · ~3 min
            </p>
          </button>
        </div>
      </Card>
    );
  }

  if (step === "results") {
    const displayScores = existing?.scores ?? scores;
    const displayRanking = rankAxes(displayScores);

    return (
      <Card highlight>
        <h3 className="font-bold">Résultat · {trackShort}</h3>
        <p className="mt-1 text-xs text-slate-500">Notions et vocabulaire en langue cible</p>

        <div className="mt-4 grid gap-2 sm:grid-cols-2">
          {displayScores.map((row) => (
            <div key={row.axisId} className="rounded-xl border border-slate-100 p-3 dark:border-slate-800">
              <p className="text-xs font-semibold text-[var(--track-strong)]">
                Axe {row.axisId} · {axisTitle(row.axisId)}
              </p>
              <div className="mt-2 grid grid-cols-2 gap-2 text-[10px] font-medium text-slate-500">
                <div>
                  <span>Notions</span>
                  <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
                    <div className="h-full bg-[var(--track-accent)]" style={{ width: `${row.notionPct}%` }} />
                  </div>
                </div>
                <div>
                  <span>Vocab</span>
                  <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
                    <div className="h-full bg-[var(--track-accent)]" style={{ width: `${row.vocabPct}%` }} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5">
          <p className="text-sm font-semibold">Commence par</p>
          <ul className="mt-2 space-y-1">
            {displayRanking.top.map((row) => (
              <li key={row.axisId}>
                <Link
                  to={`/axes/${axes.find((a) => a.id === row.axisId)?.slug}`}
                  className="text-sm font-medium text-[var(--track-strong)] underline-offset-2 hover:underline"
                >
                  Axe {row.axisId} — {axisTitle(row.axisId)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-4">
          <p className="text-sm font-semibold text-rose-700 dark:text-rose-300">À renforcer</p>
          <ul className="mt-2 space-y-1">
            {displayRanking.weak.map((row) => (
              <li key={row.axisId} className="text-sm text-slate-600 dark:text-slate-400">
                Axe {row.axisId} — {axisTitle(row.axisId)}
              </li>
            ))}
          </ul>
        </div>

        <button type="button" onClick={restart} className="btn-secondary mt-5 w-full text-sm">
          Refaire le diagnostic {trackShort}
        </button>
      </Card>
    );
  }

  if (!current) return null;

  const progressPct = Math.round(((index + 1) / items.length) * 100);

  return (
    <Card className="!p-0 overflow-hidden">
      <div className="border-b border-slate-100 px-4 py-3 dark:border-slate-800">
        <div className="flex items-center justify-between text-xs font-medium text-slate-500">
          <span>
            {phaseProgress.label} · {phaseProgress.current}/{phaseProgress.total}
          </span>
          <span>
            {index + 1}/{items.length}
          </span>
        </div>
        <div className="mt-2 h-1 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
          <div className="h-full bg-[var(--track-accent)] transition-all" style={{ width: `${progressPct}%` }} />
        </div>
        <p className="mt-2 text-xs text-[var(--track-strong)]">
          Axe {current.axisId} · {axisTitle(current.axisId)}
        </p>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -16 }}
          transition={{ duration: 0.15 }}
          className="px-4 py-6"
        >
          {current.phase === "vocab" ? (
            <>
              <p className="learn-emphasis text-center text-2xl font-bold">{current.prompt}</p>
              <p className="mt-3 text-center text-sm text-slate-500">{vocabPromptLine(track)}</p>
            </>
          ) : (
            <>
              <p className="text-center text-xs text-slate-500">À l&apos;oral · langue cible</p>
              <p className="mt-2 text-center text-base font-semibold leading-relaxed">{current.prompt}</p>
            </>
          )}

          <div className="mt-8 grid grid-cols-3 gap-2">
            {TAP_OPTIONS.map(({ value, label, icon: Icon, className }) => (
              <button
                key={value}
                type="button"
                onClick={() => answer(value)}
                className={`focus-ring flex flex-col items-center gap-2 rounded-2xl border-2 px-2 py-4 transition active:scale-95 ${className}`}
              >
                <Icon className="h-7 w-7" strokeWidth={2.5} />
                <span className="text-sm font-bold">{label}</span>
              </button>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="flex border-t border-slate-100 px-4 py-3 dark:border-slate-800">
        <button
          type="button"
          onClick={goBack}
          disabled={index === 0}
          className="btn-secondary text-sm disabled:opacity-40"
        >
          <ArrowLeft className="h-4 w-4" />
          Retour
        </button>
      </div>
    </Card>
  );
}
