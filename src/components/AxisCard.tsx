import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, KeyRound } from "lucide-react";
import { Link } from "react-router-dom";
import { levelColor } from "../utils/axisHelpers";
import { Axis } from "../utils/types";

interface AxisCardProps {
  axis: Axis;
  completed: boolean;
}

export function AxisCard({ axis, completed }: AxisCardProps) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-card group flex h-full flex-col rounded-3xl p-5"
    >
      <div className="mb-4 flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-bold text-teal-600 dark:text-teal-300">Axe {axis.id}</p>
          <h3 className="mt-1 text-xl font-black text-slate-950 dark:text-white">{axis.title}</h3>
        </div>
        {completed ? (
          <CheckCircle2 className="h-6 w-6 shrink-0 text-emerald-500" />
        ) : (
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-500 dark:bg-slate-800 dark:text-slate-300">
            A reviser
          </span>
        )}
      </div>

      <span className={`mb-4 w-fit rounded-full px-3 py-1 text-xs font-bold ${levelColor(axis.difficulty)}`}>
        {axis.difficulty}
      </span>

      <p className="line-clamp-4 flex-1 text-sm leading-6 text-slate-600 dark:text-slate-300">
        {axis.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {axis.keywords.slice(0, 4).map((keyword) => (
          <span
            key={keyword}
            className="inline-flex items-center gap-1 rounded-full bg-white/75 px-3 py-1 text-xs font-medium text-slate-600 dark:bg-slate-900/80 dark:text-slate-300"
          >
            <KeyRound className="h-3 w-3" />
            {keyword}
          </span>
        ))}
      </div>

      <Link
        to={`/axes/${axis.slug}`}
        className="focus-ring mt-6 inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-sky-600 to-teal-500 px-4 py-3 text-sm font-bold text-white shadow-lg shadow-sky-500/20 transition group-hover:-translate-y-0.5"
      >
        Reviser cet axe
        <ArrowRight className="h-4 w-4" />
      </Link>
    </motion.article>
  );
}
