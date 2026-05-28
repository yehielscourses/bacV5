import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { DiagnosticWizard } from "../components/DiagnosticWizard";
import { TrackSwitcher } from "../components/TrackSwitcher";
import { Card } from "../components/ui/Card";
import { PageHeader } from "../components/ui/PageHeader";
import { useStudyTrack } from "../context/StudyTrackContext";
import { useDiagnostic } from "../hooks/useDiagnostic";

interface HomePageProps {
  onDiagnosticDone: (track: "lva" | "lvb") => void;
}

export function HomePage({ onDiagnosticDone }: HomePageProps) {
  const { track, trackLabel, trackShort, isLva } = useStudyTrack();
  const { hasLva, hasLvb, getSnapshot } = useDiagnostic();
  const otherDone = isLva ? hasLvb : hasLva;
  const otherLabel = isLva ? "LVB" : "LVA";
  const snapshot = getSnapshot(track);

  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Terminale · Gestes fondateurs"
        title={`Réviser les 8 axes en ${trackLabel}`}
      >
        <p className="text-sm">
          Parcours séparés LVA / LVB. Diagnostic par langue : vocabulaire + notions, en un tap par item.
        </p>
      </PageHeader>

      <Card highlight>
        <p className="mb-3 text-sm font-semibold text-slate-700 dark:text-slate-300">Parcours actif</p>
        <TrackSwitcher />
        {!otherDone && (
          <p className="mt-3 text-xs text-slate-500">
            Le diagnostic {otherLabel} se fera quand tu passeras à ce parcours.
          </p>
        )}
      </Card>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <div className="grid grid-cols-3 gap-3 text-center">
            {[
              ["8", "axes"],
              ["40", "questions"],
              ["10", "examen"],
            ].map(([value, label]) => (
              <div key={label} className="rounded-xl bg-slate-50 py-4 dark:bg-slate-800/50">
                <p className="learn-emphasis text-2xl font-bold">{value}</p>
                <p className="mt-1 text-xs text-slate-500">{label}</p>
              </div>
            ))}
          </div>
          <Link to="/axes" className="btn-primary mt-5 w-full">
            Ouvrir les axes · {trackShort}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Card>

        <div>
          {snapshot?.completedAt && (
            <p className="mb-2 text-xs text-slate-500">
              Dernier diagnostic {trackShort} :{" "}
              {new Date(snapshot.completedAt).toLocaleDateString("fr-FR")}
            </p>
          )}
          <DiagnosticWizard key={track} onComplete={onDiagnosticDone} />
        </div>
      </div>
    </div>
  );
}
