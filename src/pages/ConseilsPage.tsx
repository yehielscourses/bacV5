import { CalendarCheck, Clock3, Headphones, NotebookPen, RotateCcw } from "lucide-react";

const revisionPlan = [
  {
    title: "Cycle 1 - Comprendre",
    icon: NotebookPen,
    text: "Lis la description officielle, repere 5 mots-cles et formule une problematique simple en francais.",
  },
  {
    title: "Cycle 2 - Memoriser",
    icon: RotateCcw,
    text: "Utilise les flashcards, puis recite un exemple anglais et un exemple hebreu sans regarder.",
  },
  {
    title: "Cycle 3 - Produire",
    icon: Headphones,
    text: "Enregistre une reponse orale de 90 secondes ou redige un paragraphe argumente.",
  },
  {
    title: "Cycle 4 - Tester",
    icon: CalendarCheck,
    text: "Fais le quiz par axe, puis le quiz global. Recommence seulement les axes sous 4/5.",
  },
];

export function ConseilsPage() {
  return (
    <div className="space-y-6">
      <section className="glass-card rounded-[2rem] p-6 sm:p-8">
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-teal-600 dark:text-teal-300">
          Conseils generaux
        </p>
        <h2 className="mt-2 text-4xl font-black">Reviser regulierement, parler tot, corriger vite</h2>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
          Le meilleur entrainement consiste a transformer chaque axe en exemples mobilisables. Tu dois pouvoir
          passer d'une idee a une illustration culturelle sans chercher longtemps.
        </p>
      </section>

      <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {revisionPlan.map((step) => {
          const Icon = step.icon;
          return (
            <article key={step.title} className="glass-card rounded-3xl p-6">
              <div className="mb-4 w-fit rounded-2xl bg-sky-100 p-3 text-sky-700 dark:bg-sky-500/15 dark:text-sky-200">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-black">{step.title}</h3>
              <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">{step.text}</p>
            </article>
          );
        })}
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="glass-card rounded-3xl p-6">
          <div className="mb-4 flex items-center gap-3">
            <Clock3 className="h-6 w-6 text-teal-500" />
            <h3 className="text-2xl font-black">Gestion du temps</h3>
          </div>
          <ul className="space-y-3 text-slate-600 dark:text-slate-300">
            <li className="rounded-2xl bg-white/75 p-4 dark:bg-slate-900/75">Avant une production : 3 minutes pour plan, exemples et connecteurs.</li>
            <li className="rounded-2xl bg-white/75 p-4 dark:bg-slate-900/75">Pendant l'oral : ralentis legerement, articule et annonce tes transitions.</li>
            <li className="rounded-2xl bg-white/75 p-4 dark:bg-slate-900/75">En fin de reponse : garde une phrase de conclusion prete par axe.</li>
          </ul>
        </div>
        <div className="glass-card rounded-3xl p-6">
          <h3 className="text-2xl font-black">Astuces oral</h3>
          <ul className="mt-4 space-y-3 text-slate-600 dark:text-slate-300">
            <li className="rounded-2xl bg-white/75 p-4 dark:bg-slate-900/75">Si tu bloques, reformule : "In other words..." / "כלומר...".</li>
            <li className="rounded-2xl bg-white/75 p-4 dark:bg-slate-900/75">Evite les listes : relie toujours l'exemple a la problematique.</li>
            <li className="rounded-2xl bg-white/75 p-4 dark:bg-slate-900/75">Prepare des exemples transversaux : immigration, memoire, numerique, art engage.</li>
          </ul>
        </div>
      </section>

      <section className="rounded-[2rem] bg-gradient-to-r from-sky-600 to-teal-500 p-6 text-white">
        <h3 className="text-2xl font-black">Routine courte recommandee</h3>
        <p className="mt-3 text-white/90">
          15 minutes : une fiche axe + deux flashcards + trois phrases a l'oral + un mini quiz.
          Repete cette routine jusqu'a obtenir au moins 4/5 sur chaque axe.
        </p>
      </section>
    </div>
  );
}
