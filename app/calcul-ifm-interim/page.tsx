import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Calcul IFM intérim : montant, formule et exemple",
    description:
        "Comprends comment calculer l’IFM en intérim, avec formule simple, exemple concret, erreurs fréquentes et lien vers le calculateur complet.",
};

export default function CalculIfmInterimPage() {
    return (
        <main className="pb-20 pt-12">
            <div className="container-app text-white">
                <article className="mx-auto max-w-5xl">
                    <header className="max-w-4xl">
                        <p className="text-sm font-medium text-emerald-300">
                            Guide IFM intérim
                        </p>

                        <h1 className="mt-4 text-5xl font-black leading-tight">
                            Calcul IFM intérim :{" "}
                            <span className="gradient-text">
                montant, formule et exemple simple
              </span>
                        </h1>

                        <p className="mt-6 text-lg leading-8 text-slate-300">
                            L’IFM, ou indemnité de fin de mission, est l’un des éléments les
                            plus importants de la paie en intérim. Cette page t’aide à
                            comprendre son rôle, son calcul et à repérer rapidement le montant
                            que tu peux estimer en fin de mission.
                        </p>
                    </header>

                    <section className="mt-10 rounded-[28px] border border-white/10 bg-white/5 p-6">
                        <h2 className="text-2xl font-bold text-white">Réponse rapide</h2>

                        <div className="mt-5 grid gap-3 md:grid-cols-2">
                            <QuickAnswer
                                label="Définition"
                                text="L’IFM correspond à l’indemnité versée en fin de mission d’intérim."
                            />
                            <QuickAnswer
                                label="Montant estimatif"
                                text="Elle représente généralement 10 % du salaire brut de mission."
                            />
                            <QuickAnswer
                                label="Moment du versement"
                                text="Elle est versée à la fin du contrat ou de la mission."
                            />
                            <QuickAnswer
                                label="Utilité"
                                text="Elle compense la précarité liée à la mission d’intérim."
                            />
                        </div>
                    </section>

                    <section className="mt-16 max-w-4xl space-y-10">
                        <div>
                            <h2 className="text-3xl font-bold text-white">
                                À quoi sert l’IFM ?
                            </h2>
                            <p className="mt-4 text-lg leading-8 text-slate-300">
                                Quand on travaille en intérim, le contrat est par nature
                                temporaire. L’IFM existe pour compenser cette situation. C’est
                                souvent l’une des lignes que les intérimaires regardent le plus
                                sur leur fin de mission, parce qu’elle peut représenter un
                                montant non négligeable.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold text-white">
                                Comment calculer l’IFM ?
                            </h2>

                            <div className="mt-5 rounded-[28px] border border-white/10 bg-white/5 p-6">
                                <p className="text-sm font-medium text-slate-400">
                                    Formule simple
                                </p>
                                <p className="mt-3 text-2xl font-bold text-white">
                                    IFM = salaire brut de mission × 10 %
                                </p>
                            </div>

                            <p className="mt-5 text-lg leading-8 text-slate-300">
                                En version simple, si ta rémunération brute de mission est de
                                1 800 €, l’IFM estimée est de 180 €. C’est ce genre d’estimation
                                que NetInterim affiche automatiquement dans le calculateur.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold text-white">
                                Exemple concret
                            </h2>

                            <div className="mt-5 grid gap-3 md:grid-cols-3">
                                <MiniStat label="Brut mission" value="1 800 €" />
                                <MiniStat label="Taux IFM" value="10 %" />
                                <MiniStat label="IFM estimée" value="180 €" />
                            </div>

                            <p className="mt-5 text-lg leading-8 text-slate-300">
                                Cet exemple reste volontairement simple. En pratique, il faut
                                toujours vérifier la base prise en compte et comparer avec ton
                                bulletin réel.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold text-white">
                                Erreurs fréquentes
                            </h2>

                            <div className="mt-5 space-y-3">
                                <MistakeItem text="confondre IFM et congés payés" />
                                <MistakeItem text="calculer l’IFM sur un net au lieu du brut" />
                                <MistakeItem text="oublier certaines primes dans la base brute" />
                                <MistakeItem text="penser que le montant affiché est exact au centime près sans vérifier la fiche de paie" />
                            </div>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold text-white">
                                Questions fréquentes
                            </h2>

                            <div className="mt-5 space-y-4">
                                <FaqItem
                                    question="L’IFM est-elle toujours versée ?"
                                    answer="Non, certaines situations particulières peuvent modifier son versement. Le calculateur donne une estimation générale, pas une décision juridique définitive."
                                />
                                <FaqItem
                                    question="L’IFM est-elle incluse dans NetInterim ?"
                                    answer="Oui, tu peux l’inclure ou la désactiver directement dans le calculateur."
                                />
                                <FaqItem
                                    question="L’IFM sert-elle à calculer les congés payés ?"
                                    answer="Dans l’estimation proposée ici, elle est prise en compte dans le calcul des congés payés lorsque l’option correspondante est activée."
                                />
                            </div>
                        </div>
                    </section>

                    <section className="mt-16 rounded-[28px] border border-emerald-300/20 bg-emerald-400/10 p-6">
                        <h2 className="text-2xl font-bold text-white">
                            Estimer ton IFM dans le calculateur complet
                        </h2>
                        <p className="mt-3 max-w-3xl text-slate-200">
                            Si tu veux aller plus loin, utilise le calculateur complet pour
                            estimer ton brut, ton IFM, tes congés payés et ton reste après
                            acompte.
                        </p>

                        <div className="mt-6 flex flex-wrap gap-3">
                            <Link
                                href="/calcul-salaire-interim"
                                className="rounded-2xl bg-white px-5 py-3 font-semibold text-slate-900 transition hover:opacity-90"
                            >
                                Utiliser le calculateur complet
                            </Link>

                            <Link
                                href="/conges-payes-interim"
                                className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 font-semibold text-white transition hover:bg-white/10"
                            >
                                Voir aussi les congés payés
                            </Link>
                        </div>
                    </section>
                </article>
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

function FaqItem({
                     question,
                     answer,
                 }: {
    question: string;
    answer: string;
}) {
    return (
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="font-medium text-white">{question}</p>
            <p className="mt-2 text-sm leading-6 text-slate-300">{answer}</p>
        </div>
    );
}