import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CalculatorForm from "@/components/calculator/CalculatorForm";
import FaqSchema from "@/components/seo/FaqSchema";

export const metadata: Metadata = {
    title: "Comment lire sa fiche de paie intérim ? Guide simple",
    description:
        "Apprends à lire une fiche de paie en intérim : brut, net, IFM, congés payés, acompte et reste à recevoir.",
};

const faqItems = [
    {
        question: "Comment lire une fiche de paie intérim ?",
        answer:
            "Il faut d’abord repérer le brut, le net, les heures, les éventuelles primes, l’IFM, les congés payés et l’acompte déjà perçu.",
    },
    {
        question: "Quelles lignes regarder en priorité ?",
        answer:
            "Les heures, le brut, le net, l’IFM, les congés payés et le montant déjà reçu sous forme d’acompte.",
    },
    {
        question: "NetInterim peut-il aider à vérifier une paie ?",
        answer:
            "Oui, le calculateur permet d’obtenir une estimation pour comparer plus facilement avec ce qui est affiché sur le bulletin.",
    },
];

export default function Page() {
    return (
        <main className="pb-20 pt-12">
            <FaqSchema items={faqItems} />

            <div className="container-app text-white">
                <Header />

                <article className="mx-auto max-w-5xl">
                    <header className="max-w-4xl">
                        <p className="text-sm font-medium text-emerald-300">
                            Guide fiche de paie intérim
                        </p>

                        <h1 className="mt-4 text-5xl font-black leading-tight">
                            Comment lire sa{" "}
                            <span className="gradient-text">fiche de paie intérim ?</span>
                        </h1>

                        <p className="mt-6 text-xl leading-8 text-slate-300">
                            👉 Le plus important sur une fiche de paie intérim, c’est de
                            repérer rapidement le <strong>brut</strong>, le{" "}
                            <strong>net</strong>, les <strong>heures</strong>, l’
                            <strong>IFM</strong>, les <strong>congés payés</strong> et
                            l’<strong>acompte</strong>.
                        </p>
                    </header>

                    <section className="mt-10 rounded-[28px] border border-white/10 bg-white/5 p-6">
                        <h2 className="text-2xl font-bold text-white">Réponse rapide</h2>

                        <div className="mt-5 grid gap-3 md:grid-cols-2">
                            <QuickAnswer
                                label="1. Vérifie les heures"
                                text="Commence toujours par le nombre d’heures prises en compte."
                            />
                            <QuickAnswer
                                label="2. Vérifie le brut"
                                text="Le brut sert de base à une grande partie du calcul."
                            />
                            <QuickAnswer
                                label="3. Repère l’IFM et les congés payés"
                                text="Ce sont deux lignes distinctes qui comptent beaucoup en fin de mission."
                            />
                            <QuickAnswer
                                label="4. Compare avec l’acompte"
                                text="Le bon réflexe est de regarder ce qu’il reste à toucher."
                            />
                        </div>
                    </section>

                    <section className="mt-12">
                        <h2 className="text-2xl font-bold text-white">
                            Faire une estimation en parallèle
                        </h2>
                        <p className="mt-3 text-slate-300">
                            Utilise le calculateur pour comparer rapidement ton estimation avec
                            ce qui apparaît sur ta fiche de paie.
                        </p>

                        <div className="mt-6">
                            <CalculatorForm />
                        </div>
                    </section>

                    <section className="mt-16 max-w-4xl space-y-10">
                        <div>
                            <h2 className="text-3xl font-bold text-white">
                                1. Commencer par les heures
                            </h2>
                            <p className="mt-4 text-lg leading-8 text-slate-300">
                                Avant de regarder le montant final, vérifie d’abord que le nombre
                                d’heures normales et d’heures supplémentaires correspond bien à
                                ce que tu as réellement effectué. Si la base est fausse, tout le
                                reste sera faussé aussi.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold text-white">
                                2. Regarder le brut avant le net
                            </h2>
                            <p className="mt-4 text-lg leading-8 text-slate-300">
                                Beaucoup de personnes regardent directement le net. Pourtant, le
                                brut est la vraie base de lecture. C’est à partir de lui que tu
                                peux ensuite comprendre les lignes de paie, les cotisations et
                                les montants complémentaires.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold text-white">
                                3. Ne pas confondre IFM et congés payés
                            </h2>
                            <p className="mt-4 text-lg leading-8 text-slate-300">
                                Sur une fiche de paie intérim, ces deux éléments reviennent très
                                souvent ensemble. Pourtant, ils n’ont pas le même rôle. Il faut
                                donc bien les lire séparément et vérifier qu’ils apparaissent
                                comme prévu selon ta situation.
                            </p>

                            <div className="mt-5 grid gap-3 md:grid-cols-3">
                                <MiniStat label="Brut" value="base de calcul" />
                                <MiniStat label="IFM" value="ligne distincte" />
                                <MiniStat label="Congés payés" value="ligne distincte" />
                            </div>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold text-white">
                                4. Penser à l’acompte
                            </h2>
                            <p className="mt-4 text-lg leading-8 text-slate-300">
                                Si tu as déjà reçu une avance, ne compare pas simplement le
                                virement final avec le total de ta paie. Il faut raisonner en
                                montant déjà perçu + reste à toucher.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold text-white">
                                Les erreurs fréquentes
                            </h2>

                            <div className="mt-5 space-y-3">
                                <MistakeItem text="regarder seulement le net sans vérifier les heures" />
                                <MistakeItem text="confondre IFM et congés payés" />
                                <MistakeItem text="oublier l’acompte déjà versé" />
                                <MistakeItem text="vouloir retrouver au centime près une estimation indicative" />
                            </div>
                        </div>
                    </section>

                    <section className="mt-16 rounded-[28px] border border-emerald-300/20 bg-emerald-400/10 p-6">
                        <h2 className="text-2xl font-bold text-white">
                            Vérifier rapidement une paie d’intérim
                        </h2>
                        <p className="mt-3 max-w-3xl text-slate-200">
                            NetInterim n’est pas une fiche de paie officielle, mais le
                            calculateur peut t’aider à vérifier si ton estimation globale
                            paraît cohérente.
                        </p>

                        <div className="mt-6 flex flex-wrap gap-3">
                            <Link
                                href="/calcul-salaire-interim"
                                className="rounded-2xl bg-white px-5 py-3 font-semibold text-slate-900 transition hover:opacity-90"
                            >
                                Utiliser le calculateur complet
                            </Link>

                            <Link
                                href="/calcul-ifm-interim"
                                className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 font-semibold text-white transition hover:bg-white/10"
                            >
                                Voir aussi le guide IFM
                            </Link>
                        </div>
                    </section>
                </article>

                <Footer />
            </div>
        </main>
    );
}

function QuickAnswer({
                         label,
                         text,
                     }: {
    label: string;
    text: string;
}) {
    return (
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="font-semibold text-white">{label}</p>
            <p className="mt-2 text-sm leading-6 text-slate-300">{text}</p>
        </div>
    );
}

function MiniStat({
                      label,
                      value,
                  }: {
    label: string;
    value: string;
}) {
    return (
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="text-sm text-slate-400">{label}</p>
            <p className="mt-2 text-lg font-semibold text-white">{value}</p>
        </div>
    );
}

function MistakeItem({ text }: { text: string }) {
    return (
        <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-slate-300">
            • {text}
        </div>
    );
}