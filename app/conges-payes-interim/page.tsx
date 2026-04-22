import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Congés payés intérim : calcul, montant et exemple",
    description:
        "Estime les congés payés en intérim avec une explication simple, un exemple concret et un lien vers le calculateur complet NetInterim.",
};

export default function CongesPayesInterimPage() {
    return (
        <main className="pb-20 pt-12">
            <div className="container-app text-white">
                <article className="mx-auto max-w-5xl">
                    <header className="max-w-4xl">
                        <p className="text-sm font-medium text-emerald-300">
                            Guide congés payés
                        </p>

                        <h1 className="mt-4 text-5xl font-black leading-tight">
                            Congés payés intérim :{" "}
                            <span className="gradient-text">
                calcul, montant et exemple
              </span>
                        </h1>

                        <p className="mt-6 text-lg leading-8 text-slate-300">
                            Les congés payés en intérim apparaissent souvent à la fin de la
                            mission. Cette page t’aide à comprendre comment ils sont estimés,
                            comment ils s’ajoutent au reste de la paie et pourquoi ils sont
                            souvent confondus avec l’IFM.
                        </p>
                    </header>

                    <section className="mt-10 rounded-[28px] border border-white/10 bg-white/5 p-6">
                        <h2 className="text-2xl font-bold text-white">Réponse rapide</h2>

                        <div className="mt-5 grid gap-3 md:grid-cols-2">
                            <QuickAnswer
                                label="Principe"
                                text="Les congés payés en intérim sont généralement estimés à 10 % de la rémunération prise en compte."
                            />
                            <QuickAnswer
                                label="Ce qu’il faut retenir"
                                text="Ils s’ajoutent souvent à la fin de mission, en plus du reste de la paie."
                            />
                            <QuickAnswer
                                label="Lien avec l’IFM"
                                text="Dans une estimation simple, l’IFM peut entrer dans la base du calcul des congés payés."
                            />
                            <QuickAnswer
                                label="Utilité"
                                text="Ils permettent d’estimer plus correctement ce qui sera reçu en fin de mission."
                            />
                        </div>
                    </section>

                    <section className="mt-16 max-w-4xl space-y-10">
                        <div>
                            <h2 className="text-3xl font-bold text-white">
                                À quoi correspondent les congés payés en intérim ?
                            </h2>
                            <p className="mt-4 text-lg leading-8 text-slate-300">
                                Beaucoup d’intérimaires voient une ligne “congés payés” sur leur
                                fin de mission sans savoir exactement comment elle est calculée.
                                Pourtant, c’est un élément important, car il augmente le total
                                perçu à la fin du contrat.
                            </p>
                            <p className="mt-4 text-lg leading-8 text-slate-300">
                                Dans une approche simple, on estime souvent ces congés payés à
                                partir d’un pourcentage appliqué à la rémunération brute
                                retenue. C’est cette logique que reprend NetInterim dans son
                                mode d’estimation.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold text-white">
                                Comment les estimer ?
                            </h2>

                            <div className="mt-5 rounded-[28px] border border-white/10 bg-white/5 p-6">
                                <p className="text-sm font-medium text-slate-400">
                                    Formule simple
                                </p>
                                <p className="mt-3 text-2xl font-bold text-white">
                                    Congés payés = base retenue × 10 %
                                </p>
                            </div>

                            <p className="mt-5 text-lg leading-8 text-slate-300">
                                Dans notre calculateur, l’estimation des congés payés peut être
                                activée ou désactivée selon la simulation. Cela te permet de
                                voir rapidement l’impact sur le total brut estimé.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold text-white">
                                Exemple concret
                            </h2>

                            <div className="mt-5 grid gap-3 md:grid-cols-3">
                                <MiniStat label="Brut mission" value="1 800 €" />
                                <MiniStat label="IFM" value="180 €" />
                                <MiniStat label="Congés payés estimés" value="198 €" />
                            </div>

                            <p className="mt-5 text-lg leading-8 text-slate-300">
                                Cet exemple permet surtout de comprendre l’ordre de grandeur.
                                L’intérêt n’est pas de sortir un chiffre “magique”, mais
                                d’obtenir une estimation utile et cohérente.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold text-white">
                                Les erreurs fréquentes
                            </h2>

                            <div className="mt-5 space-y-3">
                                <MistakeItem text="confondre congés payés et IFM" />
                                <MistakeItem text="oublier que les deux lignes ne représentent pas la même chose" />
                                <MistakeItem text="croire que le net suit exactement la même logique que le brut" />
                                <MistakeItem text="ne pas prendre en compte l’acompte déjà reçu" />
                            </div>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold text-white">
                                Questions fréquentes
                            </h2>

                            <div className="mt-5 space-y-4">
                                <FaqItem
                                    question="Les congés payés sont-ils affichés séparément ?"
                                    answer="Oui, dans l’estimation NetInterim, ils apparaissent comme une ligne distincte lorsque l’option est activée."
                                />
                                <FaqItem
                                    question="Puis-je les désactiver dans la simulation ?"
                                    answer="Oui, tu peux choisir d’inclure ou non les congés payés dans ton calcul."
                                />
                                <FaqItem
                                    question="Pourquoi les prendre en compte ?"
                                    answer="Parce qu’ils font partie du total qu’un intérimaire veut souvent estimer à la fin de la mission."
                                />
                            </div>
                        </div>
                    </section>

                    <section className="mt-16 rounded-[28px] border border-emerald-300/20 bg-emerald-400/10 p-6">
                        <h2 className="text-2xl font-bold text-white">
                            Estimer toute la paie, pas seulement les congés payés
                        </h2>
                        <p className="mt-3 max-w-3xl text-slate-200">
                            Le calculateur complet te permet d’estimer le brut, les congés
                            payés, l’IFM, le net indicatif et le reste après acompte dans une
                            seule simulation.
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
                                Voir aussi l’IFM
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