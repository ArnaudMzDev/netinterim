import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Heures supplémentaires intérim : calcul et majorations",
    description:
        "Comprends comment estimer les heures supplémentaires en intérim avec les majorations à 25 % et 50 %, plus un exemple simple.",
};

export default function HeuresSupplementairesInterimPage() {
    return (
        <main className="pb-20 pt-12">
            <div className="container-app text-white">
                <article className="mx-auto max-w-5xl">
                    <header className="max-w-4xl">
                        <p className="text-sm font-medium text-emerald-300">
                            Guide pratique
                        </p>

                        <h1 className="mt-4 text-5xl font-black leading-tight">
                            Heures supplémentaires intérim :{" "}
                            <span className="gradient-text">
                calcul et majorations
              </span>
                        </h1>

                        <p className="mt-6 text-lg leading-8 text-slate-300">
                            Les heures supplémentaires peuvent faire varier fortement une paie
                            d’intérim. Cette page t’aide à comprendre comment elles
                            augmentent le brut de mission et pourquoi elles influencent aussi
                            le total final estimé.
                        </p>
                    </header>

                    <section className="mt-10 rounded-[28px] border border-white/10 bg-white/5 p-6">
                        <h2 className="text-2xl font-bold text-white">Réponse rapide</h2>

                        <div className="mt-5 grid gap-3 md:grid-cols-2">
                            <QuickAnswer
                                label="Majoration 25 %"
                                text="Une première partie des heures supplémentaires peut être majorée à 25 %."
                            />
                            <QuickAnswer
                                label="Majoration 50 %"
                                text="Au-delà d’un certain seuil, une partie des heures peut être majorée à 50 %."
                            />
                            <QuickAnswer
                                label="Impact"
                                text="Les heures supplémentaires augmentent le brut mission et influencent le total estimé."
                            />
                            <QuickAnswer
                                label="Utilité"
                                text="Les intégrer évite de sous-estimer la paie finale."
                            />
                        </div>
                    </section>

                    <section className="mt-16 max-w-4xl space-y-10">
                        <div>
                            <h2 className="text-3xl font-bold text-white">
                                Pourquoi les heures sup changent tout
                            </h2>
                            <p className="mt-4 text-lg leading-8 text-slate-300">
                                Quand on regarde une paie d’intérim, les heures supplémentaires
                                sont souvent l’un des premiers écarts entre ce qu’on imagine et
                                ce qu’on touche vraiment. Quelques heures de plus dans le mois
                                peuvent faire évoluer le brut mission, puis l’IFM et parfois les
                                congés payés estimés.
                            </p>
                            <p className="mt-4 text-lg leading-8 text-slate-300">
                                C’est pour ça qu’un bon calculateur ne doit pas se limiter au
                                taux horaire et aux heures normales. Il doit aussi distinguer
                                les heures majorées à 25 % et celles majorées à 50 %.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold text-white">
                                Comment les estimer simplement
                            </h2>

                            <div className="mt-5 grid gap-3 md:grid-cols-2">
                                <MiniStat label="Heures sup à 25 %" value="taux horaire × 1,25" />
                                <MiniStat label="Heures sup à 50 %" value="taux horaire × 1,50" />
                            </div>

                            <p className="mt-5 text-lg leading-8 text-slate-300">
                                Ensuite, chaque montant est multiplié par le nombre d’heures
                                concernées. Le total obtenu vient s’ajouter au brut de base.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold text-white">
                                Exemple concret
                            </h2>

                            <div className="mt-5 rounded-[28px] border border-white/10 bg-white/5 p-6">
                                <ul className="space-y-2 text-slate-300">
                                    <li>• taux horaire brut : 12 €</li>
                                    <li>• 2 heures supplémentaires à 25 %</li>
                                    <li>• 1 heure supplémentaire à 50 %</li>
                                </ul>

                                <div className="mt-6 grid gap-3 md:grid-cols-2">
                                    <MiniStat label="2 h à 25 %" value="30 € brut" />
                                    <MiniStat label="1 h à 50 %" value="18 € brut" />
                                </div>

                                <p className="mt-5 text-sm leading-6 text-slate-300">
                                    Total des heures supplémentaires estimées : 48 € brut.
                                </p>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold text-white">
                                Erreurs fréquentes
                            </h2>

                            <div className="mt-5 space-y-3">
                                <MistakeItem text="ne pas distinguer les heures à 25 % et à 50 %" />
                                <MistakeItem text="les oublier dans le brut mission" />
                                <MistakeItem text="faire le calcul uniquement à partir des heures normales" />
                                <MistakeItem text="sous-estimer l’impact final sur la paie" />
                            </div>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold text-white">
                                Pourquoi les intégrer au calcul complet
                            </h2>
                            <p className="mt-4 text-lg leading-8 text-slate-300">
                                Les heures supplémentaires ne modifient pas seulement une ligne
                                de paie : elles peuvent faire bouger le total brut de mission, et
                                donc le résultat global que tu attends en fin de période. Les
                                intégrer au calculateur permet une estimation bien plus réaliste.
                            </p>
                        </div>
                    </section>

                    <section className="mt-16 rounded-[28px] border border-emerald-300/20 bg-emerald-400/10 p-6">
                        <h2 className="text-2xl font-bold text-white">
                            Ajouter tes heures sup au calculateur
                        </h2>
                        <p className="mt-3 max-w-3xl text-slate-200">
                            NetInterim permet de distinguer les heures supplémentaires à 25 %
                            et à 50 % pour estimer un brut mission plus cohérent.
                        </p>

                        <div className="mt-6 flex flex-wrap gap-3">
                            <Link
                                href="/calcul-salaire-interim"
                                className="rounded-2xl bg-white px-5 py-3 font-semibold text-slate-900 transition hover:opacity-90"
                            >
                                Utiliser le calculateur complet
                            </Link>

                            <Link
                                href="/pricing"
                                className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 font-semibold text-white transition hover:bg-white/10"
                            >
                                Voir Premium
                            </Link>
                        </div>
                    </section>

                    <section className="mt-16">
                        <h2 className="text-2xl font-bold text-white">Pages liées</h2>

                        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                            <InternalCard
                                href="/calcul-salaire-interim"
                                title="Calcul salaire intérim"
                                text="Voir l’estimation complète."
                            />
                            <InternalCard
                                href="/calcul-ifm-interim"
                                title="Calcul IFM intérim"
                                text="Comprendre le montant de fin de mission."
                            />
                            <InternalCard
                                href="/conges-payes-interim"
                                title="Congés payés intérim"
                                text="Estimer le total de fin de mission."
                            />
                            <InternalCard
                                href="/acompte-interim"
                                title="Acompte intérim"
                                text="Évaluer ce qu’il reste à recevoir."
                            />
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

function InternalCard({
                          href,
                          title,
                          text,
                      }: {
    href: string;
    title: string;
    text: string;
}) {
    return (
        <Link
            href={href}
            className="glass rounded-2xl p-5 transition hover:bg-white/10"
        >
            <p className="font-semibold text-white">{title}</p>
            <p className="mt-2 text-sm text-slate-300">{text}</p>
        </Link>
    );
}