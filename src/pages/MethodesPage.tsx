import { Mic, PenLine, Star, Trophy } from "lucide-react";
import type { ReactNode } from "react";

const connectors = {
  anglais: ["First and foremost", "However", "Nevertheless", "To some extent", "As a result", "In a nutshell"],
  hebreu: ["ראשית", "לעומת זאת", "עם זאת", "לדעתי", "כתוצאה מכך", "לסיכום"],
};

export function MethodesPage() {
  return (
    <div className="space-y-6">
      <section className="rounded-[2rem] bg-slate-950 p-6 text-white dark:bg-white dark:text-slate-950">
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-teal-300 dark:text-teal-700">
          Methodes pour la meilleure note
        </p>
        <h2 className="mt-2 text-3xl font-black sm:text-4xl">Structurer, nuancer, illustrer</h2>
        <p className="mt-3 max-w-3xl text-slate-300 dark:text-slate-600">
          Les correcteurs valorisent une reponse organisee, des exemples precis et une langue claire.
        </p>
      </section>

      <div className="grid gap-6 lg:grid-cols-2">
        <MethodCard
          icon={<PenLine className="h-6 w-6" />}
          title="Strategie ecrit"
          items={[
            "Lire le sujet et entourer l'axe, la notion de tension et la consigne exacte.",
            "Construire un plan en 2 ou 3 parties : constat, limites, ouverture nuancee.",
            "Utiliser un exemple culturel precis par partie, jamais une liste vague.",
            "Conclure en repondant explicitement a la problematique.",
          ]}
        />
        <MethodCard
          icon={<Mic className="h-6 w-6" />}
          title="Strategie oral"
          items={[
            "Annoncer l'axe, definir rapidement les mots importants et poser une problematique.",
            "Parler par blocs courts : idee, exemple, analyse, transition.",
            "Preparer 2 exemples anglais et 2 exemples hebreux transferables.",
            "Garder 20 secondes pour une conclusion nette et personnelle.",
          ]}
        />
      </div>

      <section className="glass-card rounded-3xl p-6">
        <div className="mb-5 flex items-center gap-3">
          <Trophy className="h-7 w-7 text-amber-500" />
          <h3 className="text-2xl font-black">Structures types</h3>
        </div>
        <div className="grid gap-4 lg:grid-cols-3">
          <StructureBlock
            title="Introduction"
            text="Accroche culturelle -> definition de l'axe -> tension du sujet -> problematique -> annonce du plan."
          />
          <StructureBlock
            title="Developpement"
            text="Argument clair -> exemple situe -> analyse -> mini-bilan. Repeter ce schema pour chaque partie."
          />
          <StructureBlock
            title="Conclusion"
            text="Reponse directe -> nuance -> ouverture culturelle courte, sans introduire un nouveau devoir."
          />
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="glass-card rounded-3xl p-6">
          <h3 className="text-2xl font-black">Connecteurs et vocabulaire avance - Anglais LVA</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {connectors.anglais.map((connector) => (
              <span key={connector} className="rounded-full bg-sky-100 px-3 py-1 font-semibold text-sky-700 dark:bg-sky-500/15 dark:text-sky-200">
                {connector}
              </span>
            ))}
          </div>
          <p className="mt-5 text-slate-600 dark:text-slate-300">
            Vise une langue nuancee : <strong>identity shift</strong>, <strong>cultural legacy</strong>,
            <strong> democratic accountability</strong>, <strong>inclusive society</strong>.
          </p>
        </div>
        <div className="glass-card rounded-3xl p-6">
          <h3 className="text-2xl font-black">Connecteurs et vocabulaire avance - Hebreu LVB</h3>
          <div className="mt-4 flex flex-wrap gap-2" dir="rtl">
            {connectors.hebreu.map((connector) => (
              <span key={connector} className="rounded-full bg-teal-100 px-3 py-1 font-semibold text-teal-700 dark:bg-teal-500/15 dark:text-teal-200">
                {connector}
              </span>
            ))}
          </div>
          <p className="mt-5 text-slate-600 dark:text-slate-300">
            En LVB, privilegie des phrases solides et correctes : opinion, exemple, comparaison, conclusion.
            Apprends quelques mots transversaux : חברה, זהות, זיכרון, אחריות, תרבות.
          </p>
        </div>
      </section>

      <section className="glass-card rounded-3xl p-6">
        <div className="mb-4 flex items-center gap-3">
          <Star className="h-6 w-6 text-teal-500" />
          <h3 className="text-2xl font-black">Conseils specifiques</h3>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <StructureBlock title="LVA Anglais" text="Cherche la precision et la nuance : compare UK/USA, cite un fait culturel, reformule la question avec tes mots." />
          <StructureBlock title="LVB Hebreu" text="La correction grammaticale et la clarte priment. Prepare des exemples reutilisables sur Israel, l'hebreu moderne et la memoire." />
        </div>
      </section>
    </div>
  );
}

function MethodCard({ icon, title, items }: { icon: ReactNode; title: string; items: string[] }) {
  return (
    <section className="glass-card rounded-3xl p-6">
      <div className="mb-4 flex items-center gap-3 text-sky-600 dark:text-sky-300">
        {icon}
        <h3 className="text-2xl font-black text-slate-950 dark:text-white">{title}</h3>
      </div>
      <ul className="space-y-3 text-slate-600 dark:text-slate-300">
        {items.map((item) => (
          <li key={item} className="rounded-2xl bg-white/75 p-4 dark:bg-slate-900/75">
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}

function StructureBlock({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl bg-white/80 p-5 dark:bg-slate-900/80">
      <h4 className="font-black text-teal-600 dark:text-teal-300">{title}</h4>
      <p className="mt-2 leading-7 text-slate-600 dark:text-slate-300">{text}</p>
    </div>
  );
}
