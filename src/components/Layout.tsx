import { BookOpen, GraduationCap, Home, Moon, PenTool, Sparkles, Sun } from "lucide-react";
import { NavLink, Outlet } from "react-router-dom";
import { useStudyTrack } from "../context/StudyTrackContext";
import { completedAxesForTrack } from "../utils/axisHelpers";
import type { ProgressState } from "../utils/types";
import { ProgressBar } from "./ProgressBar";
import { TrackSwitcher } from "./TrackSwitcher";

interface LayoutProps {
  progress: ProgressState;
  theme: "light" | "dark";
  onToggleTheme: () => void;
}

const navItems = [
  { to: "/", label: "Accueil", icon: Home },
  { to: "/axes", label: "Axes", icon: BookOpen },
  { to: "/quiz", label: "Quiz", icon: GraduationCap },
  { to: "/methodes", label: "Méthodes", icon: Sparkles },
  { to: "/conseils", label: "Conseils", icon: PenTool },
];

export function Layout({ progress, theme, onToggleTheme }: LayoutProps) {
  const { track, trackShort } = useStudyTrack();
  const done = completedAxesForTrack(progress, track);
  const globalProgress = (done.length / 8) * 100;

  return (
    <div className="min-h-screen bg-[#f4f6f8] text-slate-900 dark:bg-[#0f1419] dark:text-slate-100">
      <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/90 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/90">
        <div className="mx-auto max-w-6xl px-4 py-3 sm:px-6">
          <div className="flex items-center justify-between gap-3">
            <NavLink to="/" className="min-w-0">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-[var(--track-strong)]">
                Gestes fondateurs
              </p>
              <h1 className="truncate text-lg font-bold">Révision Bac · {trackShort}</h1>
            </NavLink>
            <div className="flex shrink-0 items-center gap-2">
              <span
                className="hidden rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600 sm:inline dark:bg-slate-800 dark:text-slate-300"
                title="Points gagnés (quiz, axes, diagnostic)"
              >
                {progress.points} pts
              </span>
              <button
                className="btn-secondary !p-2"
                onClick={onToggleTheme}
                type="button"
                aria-label="Basculer le thème clair / sombre"
              >
                {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </button>
            </div>
          </div>

          <div className="mt-3">
            <TrackSwitcher compact />
          </div>

          <nav className="mt-3 flex gap-1 overflow-x-auto pb-0.5" aria-label="Navigation principale">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === "/"}
                  className={({ isActive }) =>
                    `flex shrink-0 items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium transition ${
                      isActive
                        ? "bg-[var(--track-accent)] text-white"
                        : "text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800"
                    }`
                  }
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </NavLink>
              );
            })}
          </nav>

          <div className="mt-3">
            <ProgressBar value={globalProgress} label={`${done.length}/8 axes · ${trackShort}`} />
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-8">
        <Outlet />
      </main>
    </div>
  );
}
