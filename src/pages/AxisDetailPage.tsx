import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { useMemo, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { KeywordChip } from "../components/KeywordChip";
import { QuizRunner } from "../components/QuizRunner";
import { Card } from "../components/ui/Card";
import { useStudyTrack } from "../context/StudyTrackContext";
import {
  displayDifficulty,
  flashcardsForTrack,
  getAxisBySlug,
  getQuestionsForAxis,
  levelColor,
  problematiquesForTrack,
} from "../utils/axisHelpers";

interface AxisDetailPageProps {
  completed: number[];
  onCompleteAxis: (axisId: number) => void;
  onSaveQuiz: (quizId: string, score: number) => void;
}

type Tab = "resume" | "detail" | "flashcards" | "quiz";

export function AxisDetailPage({ completed, onCompleteAxis, onSaveQuiz }: AxisDetailPageProps) {
  const { slug } = useParams();
  const { track, trackLabel } = useStudyTrack();
  const axis = getAxisBySlug(slug);
  const [tab, setTab] = useState<Tab>("resume");
  const [activeCard, setActiveCard] = useState(0);
  const [revealed, setRevealed] = useState(false);

  const questions = useMemo(() => (axis ? getQuestionsForAxis(axis.id) : []), [axis]);
  const flashcards = useMemo(() => (axis ? flashcardsForTrack(axis, track) : []), [axis, track]);
  const problematiques = useMemo(() => (axis ? problematiquesForTrack(axis, track) : []), [axis, track]);

  if (!axis) {
    return <Navigate to="/axes" replace />;
  }

  const isCompleted = completed.includes(axis.id);
  const safeCardIndex = Math.min(activeCard, Math.max(0, flashcards.length - 1));

  const tabs: { id: Tab; label: string }[] = [
    { id: "resume", label: "Résumé" },
    { id: "detail", label: "Programme" },
    { id: "flashcards", label: "Flashcards" },
    { id: "quiz", label: "Quiz" },
  ];

  return (
    <div>
      <Link to="/axes" className="btn-secondary mb-5 text-sm">
        <ArrowLeft className="h-4 w-4" />
        Axes
      </Link>

      <Card className="mb-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-xs font-semibold text-[var(--track-strong)]">
              Axe {axis.id} · {trackLabel}
            </p>
            <h2 className="mt-1 text-2xl font-bold sm:text-3xl">{axis.title}</h2>
            <span
              className={`mt-2 inline-flex rounded-full px-2.5 py-0.5 text-xs font-semibold ${levelColor(axis.difficulty)}`}
            >
              {displayDifficulty(axis.difficulty)}
            </span>
          </div>
          <button
            type="button"
            onClick={() => onCompleteAxis(axis.id)}
            className={isCompleted ? "btn-secondary" : "btn-primary"}
          >
            <CheckCircle2 className="h-4 w-4" />
            {isCompleted ? "Marquer non révisé" : "Marquer révisé"}
          </button>
        </div>

        <div className="mt-5 flex flex-wrap gap-1.5" role="tablist">
          {tabs.map(({ id, label }) => (
            <button
              key={id}
              type="button"
              role="tab"
              aria-selected={tab === id}
              onClick={() => setTab(id)}
              className={`focus-ring rounded-lg px-3 py-1.5 text-sm font-medium transition ${
                tab === id
                  ? "bg-[var(--track-accent)] text-white"
                  : "text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </Card>

      <motion.div key={tab} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
        {tab === "resume" && (
          <div className="grid gap-6 lg:grid-cols-3">
            <Card className="lg:col-span-2">
              <h3 className="font-bold">Problématiques · {trackLabel}</h3>
              <ul className="mt-4 space-y-3">
                {problematiques.map((item) => (
                  <li
                    key={item}
                    className="learn-emphasis rounded-xl border border-[var(--track-accent)]/20 bg-[var(--track-soft)] px-4 py-3 text-sm leading-relaxed"
                    dir={track === "lvb" ? "rtl" : "ltr"}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
            <Card>
              <h3 className="font-bold">Mots-clés</h3>
              <p className="mt-1 text-xs text-slate-500">Français → clic = traduction</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {axis.keywords.map((keyword) => (
                  <KeywordChip key={keyword} label={keyword} />
                ))}
              </div>
            </Card>
          </div>
        )}

        {tab === "detail" && (
          <Card>
            <h3 className="font-bold">Description officielle</h3>
            <p className="mt-4 whitespace-pre-line text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              {axis.description}
            </p>
          </Card>
        )}

        {tab === "flashcards" && flashcards.length > 0 && (
          <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)]">
            <Card>
              <h3 className="font-bold">Liste</h3>
              <div className="mt-3 grid gap-2">
                {flashcards.map((card, index) => (
                  <button
                    key={card.front}
                    type="button"
                    onClick={() => {
                      setActiveCard(index);
                      setRevealed(false);
                    }}
                    className={`focus-ring rounded-xl px-3 py-2 text-left text-sm font-medium transition ${
                      safeCardIndex === index
                        ? "bg-[var(--track-accent)] text-white"
                        : "bg-slate-50 text-slate-700 dark:bg-slate-800 dark:text-slate-200"
                    }`}
                  >
                    {card.front}
                  </button>
                ))}
              </div>
            </Card>
            <button
              type="button"
              onClick={() => setRevealed((v) => !v)}
              className="focus-ring text-left"
            >
              <Card highlight className="min-h-56">
                <p className="text-xs font-semibold uppercase tracking-widest text-[var(--track-strong)]">
                  {revealed ? "Réponse" : "Question"}
                </p>
                <p
                  className="learn-emphasis mt-4 text-xl font-bold leading-snug"
                  dir={revealed && track === "lvb" ? "rtl" : "ltr"}
                >
                  {revealed ? flashcards[safeCardIndex].back : flashcards[safeCardIndex].front}
                </p>
                <p className="mt-6 text-xs text-slate-500">Cliquer pour {revealed ? "masquer" : "révéler"}</p>
              </Card>
            </button>
          </div>
        )}

        {tab === "flashcards" && flashcards.length === 0 && (
          <Card>
            <p className="text-sm text-slate-500">Aucune flashcard pour ce parcours.</p>
          </Card>
        )}

        {tab === "quiz" && (
          <QuizRunner
            questions={questions}
            title={`Quiz · axe ${axis.id}`}
            onFinish={(score) => onSaveQuiz(`axis-${axis.id}-${track}`, score)}
          />
        )}
      </motion.div>
    </div>
  );
}
