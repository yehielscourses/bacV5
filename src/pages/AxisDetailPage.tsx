import { motion } from "framer-motion";
import { ArrowLeft, BookMarked, CheckCircle2, Languages, ListChecks } from "lucide-react";
import { useMemo, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { QuizRunner } from "../components/QuizRunner";
import { getAxisBySlug, getQuestionsForAxis, levelColor } from "../utils/axisHelpers";

interface AxisDetailPageProps {
  completed: number[];
  onCompleteAxis: (axisId: number) => void;
  onSaveQuiz: (quizId: string, score: number) => void;
}

type Tab = "resume" | "detail" | "flashcards" | "quiz";

export function AxisDetailPage({ completed, onCompleteAxis, onSaveQuiz }: AxisDetailPageProps) {
  const { slug } = useParams();
  const axis = getAxisBySlug(slug);
  const [tab, setTab] = useState<Tab>("resume");
  const [activeCard, setActiveCard] = useState(0);
  const [revealed, setRevealed] = useState(false);

  const questions = useMemo(() => (axis ? getQuestionsForAxis(axis.id) : []), [axis]);

  if (!axis) {
    return <Navigate to="/axes" replace />;
  }

  const isCompleted = completed.includes(axis.id);

  return (
    <div>
      <Link
        to="/axes"
        className="focus-ring mb-6 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-slate-600 shadow-sm dark:bg-slate-900 dark:text-slate-300"
      >
        <ArrowLeft className="h-4 w-4" />
        Retour aux axes
      </Link>

      <section className="glass-card rounded-[2rem] p-6 sm:p-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-teal-600 dark:text-teal-300">
              Axe {axis.id}
            </p>
            <h2 className="mt-2 text-4xl font-black">{axis.title}</h2>
            <span className={`mt-4 inline-flex rounded-full px-3 py-1 text-xs font-bold ${levelColor(axis.difficulty)}`}>
              {axis.difficulty}
            </span>
          </div>
          <button
            type="button"
            onClick={() => onCompleteAxis(axis.id)}
            className="focus-ring inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-950 px-5 py-3 font-bold text-white dark:bg-white dark:text-slate-950"
          >
            <CheckCircle2 className="h-5 w-5" />
            {isCompleted ? "Axe valide" : "Marquer comme revise"}
          </button>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {[
            ["resume", "Resume"],
            ["detail", "Detail officiel"],
            ["flashcards", "Flashcards"],
            ["quiz", "Quiz 5 questions"],
          ].map(([id, label]) => (
            <button
              key={id}
              type="button"
              onClick={() => setTab(id as Tab)}
              className={`focus-ring rounded-full px-4 py-2 text-sm font-bold transition ${
                tab === id
                  ? "bg-gradient-to-r from-sky-600 to-teal-500 text-white"
                  : "bg-white text-slate-600 hover:bg-sky-100 dark:bg-slate-900 dark:text-slate-300"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </section>

      <motion.section
        key={tab}
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-6"
      >
        {tab === "resume" && (
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="glass-card rounded-3xl p-6 lg:col-span-2">
              <div className="mb-4 flex items-center gap-3">
                <BookMarked className="h-6 w-6 text-sky-500" />
                <h3 className="text-2xl font-black">Resume operationnel</h3>
              </div>
              <p className="text-lg leading-8 text-slate-600 dark:text-slate-300">
                {axis.description.split(". ").slice(0, 4).join(". ")}.
              </p>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <LanguageBox title="Problematique Anglais" items={axis.problematiques.anglais} />
                <LanguageBox title="Problematique Hebreu" items={axis.problematiques.hebreu} />
              </div>
            </div>
            <div className="glass-card rounded-3xl p-6">
              <div className="mb-4 flex items-center gap-3">
                <ListChecks className="h-6 w-6 text-teal-500" />
                <h3 className="text-2xl font-black">Mots-cles</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {axis.keywords.map((keyword) => (
                  <span
                    key={keyword}
                    className="rounded-full bg-white px-3 py-1 text-sm font-semibold text-slate-600 dark:bg-slate-900 dark:text-slate-300"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {tab === "detail" && (
          <div className="glass-card rounded-3xl p-6 sm:p-8">
            <h3 className="text-2xl font-black">Description complete du programme officiel</h3>
            <p className="mt-5 whitespace-pre-line text-lg leading-9 text-slate-600 dark:text-slate-300">
              {axis.description}
            </p>
          </div>
        )}

        {tab === "flashcards" && (
          <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="glass-card rounded-3xl p-6">
              <h3 className="text-2xl font-black">Paquet de flashcards</h3>
              <div className="mt-5 grid gap-3">
                {axis.flashcards.map((card, index) => (
                  <button
                    key={card.front}
                    type="button"
                    onClick={() => {
                      setActiveCard(index);
                      setRevealed(false);
                    }}
                    className={`focus-ring rounded-2xl p-4 text-left font-bold transition ${
                      activeCard === index
                        ? "bg-gradient-to-r from-sky-600 to-teal-500 text-white"
                        : "bg-white text-slate-700 dark:bg-slate-900 dark:text-slate-200"
                    }`}
                  >
                    {card.front}
                  </button>
                ))}
              </div>
            </div>
            <button
              type="button"
              onClick={() => setRevealed((current) => !current)}
              className="focus-ring glass-card min-h-72 rounded-3xl p-8 text-left"
            >
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-teal-600 dark:text-teal-300">
                {revealed ? "Reponse" : "Question"}
              </p>
              <p className="mt-5 text-3xl font-black leading-tight">
                {revealed ? axis.flashcards[activeCard].back : axis.flashcards[activeCard].front}
              </p>
              <p className="mt-8 text-sm font-semibold text-slate-500 dark:text-slate-400">
                Clique sur la carte pour {revealed ? "masquer" : "reveler"}.
              </p>
            </button>
          </div>
        )}

        {tab === "quiz" && (
          <QuizRunner
            questions={questions}
            title={`Quiz axe ${axis.id}`}
            onFinish={(score) => onSaveQuiz(`axis-${axis.id}`, score)}
          />
        )}
      </motion.section>
    </div>
  );
}

function LanguageBox({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-3xl bg-white p-5 dark:bg-slate-900">
      <div className="mb-3 flex items-center gap-2 font-black">
        <Languages className="h-5 w-5 text-teal-500" />
        {title}
      </div>
      <ul className="space-y-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
        {items.map((item) => (
          <li key={item}>- {item}</li>
        ))}
      </ul>
    </div>
  );
}
