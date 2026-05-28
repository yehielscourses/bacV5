import { BookOpen, GraduationCap, Home, Moon, PenTool, Sparkles, Sun } from "lucide-react";
import { NavLink, Outlet } from "react-router-dom";
import { ProgressBar } from "./ProgressBar";
import { ProgressState } from "../utils/types";

interface LayoutProps {
  progress: ProgressState;
  theme: "light" | "dark";
  onToggleTheme: () => void;
}

const navItems = [
  { to: "/", label: "Diagnostic", icon: Home },
  { to: "/axes", label: "Axes", icon: BookOpen },
  { to: "/quiz", label: "Quiz & examen", icon: GraduationCap },
  { to: "/methodes", label: "Meilleure note", icon: Sparkles },
  { to: "/conseils", label: "Conseils", icon: PenTool },
];

export function Layout({ progress, theme, onToggleTheme }: LayoutProps) {
  const globalProgress = (progress.completedAxes.length / 8) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-teal-50 to-white text-slate-950 dark:from-slate-950 dark:via-slate-900 dark:to-teal-950 dark:text-white">
      <header className="sticky top-0 z-30 border-b border-white/60 bg-white/75 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/75">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <NavLink to="/" className="flex items-center gap-3">
              <div className="rounded-2xl bg-gradient-to-br from-sky-500 to-emerald-400 p-3 text-white shadow-lg shadow-sky-500/20">
                <GraduationCap className="h-7 w-7" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-teal-600 dark:text-teal-300">
                  Gestes fondateurs
                </p>
                <h1 className="text-xl font-black sm:text-2xl">bac-lva-lvb-axes</h1>
              </div>
            </NavLink>

            <div className="flex items-center gap-3">
              <div className="rounded-2xl border border-sky-100 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200">
                {progress.points} pts
              </div>
              <button
                className="focus-ring rounded-2xl border border-sky-100 bg-white p-3 text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-teal-300 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
                onClick={onToggleTheme}
                type="button"
                aria-label="Basculer le theme"
              >
                {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
            </div>
          </div>

          <nav className="flex gap-2 overflow-x-auto pb-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition ${
                      isActive
                        ? "bg-slate-950 text-white shadow-lg shadow-sky-500/20 dark:bg-white dark:text-slate-950"
                        : "bg-white/80 text-slate-600 hover:bg-sky-100 dark:bg-slate-900/80 dark:text-slate-300 dark:hover:bg-slate-800"
                    }`
                  }
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </NavLink>
              );
            })}
          </nav>
          <ProgressBar value={globalProgress} label={`${progress.completedAxes.length}/8 axes valides`} />
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <Outlet />
      </main>
    </div>
  );
}
