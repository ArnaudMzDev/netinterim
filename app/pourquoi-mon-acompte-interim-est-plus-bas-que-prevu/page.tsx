import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CalculatorForm from "@/components/calculator/CalculatorForm";
import FaqSchema from "@/components/seo/FaqSchema";

export const metadata: Metadata = {
    title: "Pourquoi mon acompte intérim est plus bas que prévu ?",
    description:
        "Comprends pourquoi un acompte intérim peut sembler plus bas que prévu et estime ce qu’il te reste à toucher avec NetInterim.",
};

const faqItems = [
    {
        question: "Pourquoi mon acompte intérim est plus bas que prévu ?",
        answer:
            "Parce qu’un acompte n’est pas toujours calculé sur le total final espéré. Il peut dépendre du brut déjà pris en compte, des heures validées et de l’avance réellement accordée.",
    },
    {
        question: "Est-ce qu’un acompte correspond à toute ma paie ?",
        answer:
            "Non. Un acompte est une avance, pas le montant total de la paie finale.",
    },
    {
        question: "Comment savoir ce qu’il me reste à toucher ?",
        answer:
            "Le plus simple est d’estimer ton net ou ton total de période puis de déduire l’acompte déjà reçu.",
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
                            Guide acompte intérim
                        </p>

                        <h1 className="mt-4 text-5xl font-black leading-tight">
                            Pourquoi mon acompte intérim est{" "}
                            <span className="gradient-text">plus bas que prévu ?</span>
                        </h1>

                        <p className="mt-6 text-xl leading-8 text-slate-300">
                            👉 Un acompte plus bas que prévu ne veut pas forcément dire qu’il
                            manque de l’argent. Dans beaucoup de cas, cela vient surtout d’une
                            différence entre <strong>ce qui a déjà été versé</strong> et{" "}
                            <strong>ce qu’il reste à toucher</strong>.
                        </p>
                    </header>

                    <section className="mt-10 rounded-[28px] border border-white/10 bg-white/5 p-6">
                        <h2 className="text-2xl font-bold text-white">Réponse rapide</h2>

                        <div className="mt-5 grid gap-3 md:grid-cols-2">
                            <QuickAnswer
                                label="Cause fréquente n°1"
                                text="L’acompte est une avance partielle, pas le total de la paie."
                            />
                            <QuickAnswer
                                label="Cause fréquente n°2"
                                text="Toutes les heures ou primes n’ont pas forcément été prises en compte au moment de l’avance."
                            />
                            <QuickAnswer
                                label="Cause fréquente n°3"
                                text="Tu compares peut-être l’acompte à un montant final qui inclut IFM ou congés payés."
                            />
                            <QuickAnswer
                                label="Bon réflexe"
                                text="Calculer le reste après acompte plutôt que de regarder l’avance seule."
                            />
                        </div>
                    </section>

                    <section className="mt-12">
                        <h2 className="text-2xl font-bold text-white">
                            Simuler ta situation
                        </h2>
                        <p className="mt-3 text-slate-300">
                            Entre ton acompte déjà reçu pour voir ce qu’il peut rester à
                            toucher sur ta paie estimée.
                        </p>

                        <div className="mt-6">
                            <CalculatorForm />
                        </div>
                    </section>

                    <section className="mt-16 max-w-4xl space-y-10">
                        <div>
                            <h2 className="text-3xl font-bold text-white">
                                1. Un acompte n’est pas une paie complète
                            </h2>
                            <p className="mt-4 text-lg leading-8 text-slate-300">
                                C’est l’erreur la plus fréquente. Beaucoup de personnes
                                regardent leur acompte et le comparent directement au montant
                                qu’elles espèrent toucher en fin de mois ou en fin de mission.
                                Or, l’acompte n’est qu’une avance.
                            </p>
                            <p className="mt-4 text-lg leading-8 text-slate-300">
                                Il est donc normal qu’il paraisse “trop bas” si on le compare à
                                un montant final qui inclut encore des heures, des primes, des
                                IFM ou des congés payés non versés à ce moment-là.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold text-white">
                                2. Toutes les heures ne sont pas toujours incluses
                            </h2>
                            <p className="mt-4 text-lg leading-8 text-slate-300">
                                Un acompte peut être basé uniquement sur une partie des heures
                                déjà validées. Si tu as travaillé davantage ou si certaines
                                heures supplémentaires n’ont pas encore été intégrées, le montant
                                de l’avance peut sembler plus faible que prévu.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold text-white">
                                3. IFM et congés payés faussent souvent la comparaison
                            </h2>
                            <p className="mt-4 text-lg leading-8 text-slate-300">
                                En intérim, beaucoup de gens raisonnent sur un “total attendu”
                                qui inclut déjà l’IFM et les congés payés. Si ton acompte ne
                                prend pas ces éléments en compte, l’écart te paraîtra plus grand
                                qu’en réalité.
                            </p>

                            <div className="mt-5 grid gap-3 md:grid-cols-3">
                                <MiniStat label="Net estimé final" value="1 700 €" />
                                <MiniStat label="Acompte reçu" value="700 €" />
                                <MiniStat label="Reste possible" value="1 000 €" />
                            </div>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold text-white">
                                Les erreurs fréquentes
                            </h2>

                            <div className="mt-5 space-y-3">
                                <MistakeItem text="comparer l’acompte à la paie finale complète" />
                                <MistakeItem text="oublier que l’IFM et les congés payés peuvent arriver plus tard" />
                                <MistakeItem text="oublier de distinguer brut, net et avance" />
                                <MistakeItem text="penser qu’un acompte plus bas signifie forcément une erreur" />
                            </div>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold text-white">
                                Ce qu’il faut vérifier en priorité
                            </h2>

                            <div className="mt-5 grid gap-3 md:grid-cols-2">
                                <CheckCard text="heures déjà comptabilisées" />
                                <CheckCard text="heures supplémentaires incluses ou non" />
                                <CheckCard text="primes déjà prises en compte" />
                                <CheckCard text="IFM et congés payés attendus plus tard" />
                            </div>
                        </div>
                    </section>

                    <section className="mt-16 rounded-[28px] border border-emerald-300/20 bg-emerald-400/10 p-6">
                        <h2 className="text-2xl font-bold text-white">
                            Le plus utile : calculer le reste à toucher
                        </h2>
                        <p className="mt-3 max-w-3xl text-slate-200">
                            Le calculateur NetInterim te permet de comparer ton acompte déjà
                            reçu avec ton estimation de paie pour visualiser ce qu’il peut te
                            rester à percevoir.
                        </p>

                        <div className="mt-6 flex flex-wrap gap-3">
                            <Link
                                href="/combien-reste-apres-acompte-interim"
                                className="rounded-2xl bg-white px-5 py-3 font-semibold text-slate-900 transition hover:opacity-90"
                            >
                                Voir le guide “reste après acompte”
                            </Link>

                            <Link
                                href="/calcul-salaire-interim"
                                className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 font-semibold text-white transition hover:bg-white/10"
                            >
                                Utiliser le calculateur complet
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