import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CalculatorForm from "@/components/calculator/CalculatorForm";
import FaqSchema from "@/components/seo/FaqSchema";

export const metadata: Metadata = {
    title: "Fin de mission intérim : combien vais-je toucher ?",
    description:
        "Estime combien tu peux toucher en fin de mission intérim avec le brut, l’IFM, les congés payés et le reste après acompte.",
};

const faqItems = [
    {
        question: "Combien vais-je toucher en fin de mission intérim ?",
        answer:
            "Cela dépend du brut de mission, des heures supplémentaires, des primes, de l’IFM, des congés payés et de l’acompte déjà reçu.",
    },
    {
        question: "Pourquoi la fin de mission est-elle souvent plus élevée ?",
        answer:
            "Parce qu’elle peut inclure l’IFM et les congés payés en plus du salaire de base.",
    },
    {
        question: "Comment l’estimer simplement ?",
        answer:
            "Le plus simple est d’utiliser un calculateur prenant en compte le brut, l’IFM, les congés payés et l’acompte.",
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
                            Guide fin de mission intérim
                        </p>

                        <h1 className="mt-4 text-5xl font-black leading-tight">
                            Fin de mission intérim :{" "}
                            <span className="gradient-text">combien vais-je toucher ?</span>
                        </h1>

                        <p className="mt-6 text-xl leading-8 text-slate-300">
                            👉 En fin de mission, le montant perçu peut être plus élevé que le
                            simple salaire de base, notamment grâce à l’
                            <strong>IFM</strong> et aux <strong>congés payés</strong>.
                        </p>
                    </header>

                    <section className="mt-10 rounded-[28px] border border-white/10 bg-white/5 p-6">
                        <h2 className="text-2xl font-bold text-white">Réponse rapide</h2>

                        <div className="mt-5 grid gap-3 md:grid-cols-2">
                            <QuickAnswer
                                label="Salaire de base"
                                text="Il constitue la première partie de ce que tu touches."
                            />
                            <QuickAnswer
                                label="IFM"
                                text="Elle peut augmenter le total de fin de mission."
                            />
                            <QuickAnswer
                                label="Congés payés"
                                text="Ils viennent souvent s’ajouter également."
                            />
                            <QuickAnswer
                                label="Acompte"
                                text="Il faut le déduire si une avance a déjà été versée."
                            />
                        </div>
                    </section>

                    <section className="mt-12">
                        <h2 className="text-2xl font-bold text-white">
                            Simuler la fin de mission
                        </h2>
                        <p className="mt-3 text-slate-300">
                            Utilise le calculateur pour estimer le total et le reste après
                            acompte.
                        </p>

                        <div className="mt-6">
                            <CalculatorForm />
                        </div>
                    </section>

                    <section className="mt-16 max-w-4xl space-y-10">
                        <div>
                            <h2 className="text-3xl font-bold text-white">
                                Pourquoi la fin de mission est importante
                            </h2>
                            <p className="mt-4 text-lg leading-8 text-slate-300">
                                Beaucoup d’intérimaires cherchent surtout à savoir combien ils
                                vont toucher au moment où la mission se termine. C’est logique :
                                c’est souvent là que s’ajoutent plusieurs éléments qui ne se
                                voient pas toujours sur le salaire de base seul.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold text-white">
                                Ce qui peut s’ajouter au montant final
                            </h2>

                            <div className="mt-5 grid gap-3 md:grid-cols-2">
                                <CheckCard text="salaire brut de la mission" />
                                <CheckCard text="heures supplémentaires" />
                                <CheckCard text="primes éventuelles" />
                                <CheckCard text="IFM" />
                                <CheckCard text="congés payés" />
                                <CheckCard text="reste après acompte" />
                            </div>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold text-white">
                                Exemple simple
                            </h2>

                            <div className="mt-5 grid gap-3 md:grid-cols-4">
                                <MiniStat label="Brut mission" value="1 800 €" />
                                <MiniStat label="IFM" value="180 €" />
                                <MiniStat label="Congés payés" value="198 €" />
                                <MiniStat label="Total brut estimé" value="2 178 €" />
                            </div>

                            <p className="mt-5 text-lg leading-8 text-slate-300">
                                Si un acompte a déjà été versé, il faut ensuite raisonner sur le
                                reste à toucher plutôt que sur le total seul.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold text-white">
                                Erreurs fréquentes
                            </h2>

                            <div className="mt-5 space-y-3">
                                <MistakeItem text="penser que la fin de mission correspond au seul salaire de base" />
                                <MistakeItem text="oublier l’IFM ou les congés payés" />
                                <MistakeItem text="ne pas déduire l’acompte déjà reçu" />
                                <MistakeItem text="confondre estimation globale et paie officielle" />
                            </div>
                        </div>
                    </section>

                    <section className="mt-16 rounded-[28px] border border-emerald-300/20 bg-emerald-400/10 p-6">
                        <h2 className="text-2xl font-bold text-white">
                            Estimer ta fin de mission en quelques secondes
                        </h2>
                        <p className="mt-3 max-w-3xl text-slate-200">
                            Le calculateur NetInterim permet de regrouper salaire brut, IFM,
                            congés payés et acompte pour visualiser rapidement une estimation
                            de fin de mission.
                        </p>

                        <div className="mt-6 flex flex-wrap gap-3">
                            <Link
                                href="/calcul-salaire-interim"
                                className="rounded-2xl bg-white px-5 py-3 font-semibold text-slate-900 transition hover:opacity-90"
                            >
                                Utiliser le calculateur complet
                            </Link>

                            <Link
                                href="/interim-salaire-net-apres-ifm"
                                className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 font-semibold text-white transition hover:bg-white/10"
                            >
                                Voir aussi le net après IFM
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

function CheckCard({ text }: { text: string }) {
    return (
        <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-slate-200">
            • {text}
        </div>
    );
}