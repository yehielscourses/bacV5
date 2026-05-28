import { CalendarCheck, Headphones, NotebookPen, RotateCcw } from "lucide-react";
import { Card } from "../components/ui/Card";
import { PageHeader } from "../components/ui/PageHeader";
import { useStudyTrack } from "../context/StudyTrackContext";
import { useProgress } from "../hooks/useProgress";

const cycles = [
  { title: "Comprendre", icon: NotebookPen, text: "Fiche axe + 5 mots-clés (clic = traduction)." },
  { title: "Mémoriser", icon: RotateCcw, text: "Flashcards du parcours actif uniquement." },
  { title: "Produire", icon: Headphones, text: "90 s d'oral ou un paragraphe argumenté." },
  { title: "Tester", icon: CalendarCheck, text: "Quiz axe puis global · viser 4/5." },
];

export function ConseilsPage() {
  const { trackLabel, isLva } = useStudyTrack();
  const { resetProgress } = useProgress();

  return (
    <div className="space-y-6">
      <PageHeader eyebrow="Conseils" title={`Routine · ${trackLabel}`}>
        <p className="text-sm">15 min / jour : fiche + 2 flashcards + 3 phrases à l&apos;oral + mini quiz.</p>
      </PageHeader>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {cycles.map((step) => {
          const Icon = step.icon;
          return (
            <Card key={step.title}>
              <Icon className="h-5 w-5 text-[var(--track-accent)]" />
              <h3 className="mt-2 font-bold">{step.title}</h3>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{step.text}</p>
            </Card>
          );
        })}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <h3 className="font-bold">À l&apos;oral</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-400">
            {isLva ? (
              <>
                <li>· Bloqué ? « In other words… »</li>
                <li>· Relier chaque exemple à la problématique.</li>
                <li>· Exemples transversaux : immigration, mémoire, numérique.</li>
              </>
            ) : (
              <>
                <li dir="rtl">· חסום? « כלומר… »</li>
                <li>· קשר בין דוגמה לשאלת המחקר.</li>
                <li>· דוגמאות: עלייה, זיכרון, טכנולוגיה.</li>
              </>
            )}
          </ul>
        </Card>
        <Card>
          <h3 className="font-bold">Temps limité</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-400">
            <li>· 3 min : plan + connecteurs + exemples.</li>
            <li>· Articuler les transitions.</li>
            <li>· Une phrase de conclusion par axe mémorisée.</li>
          </ul>
        </Card>
      </div>

      <p className="text-center text-xs text-slate-400">
        <button
          type="button"
          className="underline hover:text-slate-600 dark:hover:text-slate-300"
          onClick={() => {
            if (window.confirm("Réinitialiser toute la progression ?")) resetProgress();
          }}
        >
          Réinitialiser la progression
        </button>
      </p>
    </div>
  );
}
