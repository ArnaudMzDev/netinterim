import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Acompte intérim : estimation et reste à toucher",
    description:
        "Comprends comment estimer un acompte en intérim et surtout ce qu’il peut rester à recevoir après l’avance déjà perçue.",
};

export default function AcompteInterimPage() {
    return (
        <main className="pb-20 pt-12">
            <div className="container-app text-white">
                <article className="mx-auto max-w-5xl">
                    <header className="max-w-4xl">
                        <p className="text-sm font-medium text-emerald-300">
                            Guide pratique
                        </p>

                        <h1 className="mt-4 text-5xl font-black leading-tight">
                            Acompte intérim :{" "}
                            <span className="gradient-text">
                estimation et reste à toucher
              </span>
                        </h1>

                        <p className="mt-6 text-lg leading-8 text-slate-300">
                            Beaucoup d’intérimaires cherchent surtout à répondre à une
                            question simple : après mon acompte, combien me restera-t-il à
                            recevoir ? Cette page t’aide à comprendre la logique de
                            l’acompte et à mieux lire une estimation de paie.
                        </p>
                    </header>

                    <section className="mt-10 rounded-[28px] border border-white/10 bg-white/5 p-6">
                        <h2 className="text-2xl font-bold text-white">Réponse rapide</h2>

                        <div className="mt-5 grid gap-3 md:grid-cols-2">
                            <QuickAnswer
                                label="Acompte"
                                text="L’acompte correspond à une avance sur la rémunération à venir."
                            />
                            <QuickAnswer
                                label="Ce qu’il faut suivre"
                                text="Le plus utile est souvent d’estimer le reste à recevoir après acompte."
                            />
                            <QuickAnswer
                                label="Pourquoi c’est important"
                                text="Cela évite de confondre le montant déjà touché et le montant encore attendu."
                            />
                            <QuickAnswer
                                label="Outil utile"
                                text="Un calculateur permet de visualiser directement le solde estimé."
                            />
                        </div>
                    </section>

                    <section className="mt-16 max-w-4xl space-y-10">
                        <div>
                            <h2 className="text-3xl font-bold text-white">
                                Pourquoi l’acompte crée souvent de la confusion
                            </h2>
                            <p className="mt-4 text-lg leading-8 text-slate-300">
                                En intérim, il n’est pas rare de recevoir une avance avant la
                                paie complète. Le problème, c’est qu’on finit parfois par ne
                                plus savoir combien on a déjà perçu, ni combien il reste
                                réellement à toucher.
                            </p>
                            <p className="mt-4 text-lg leading-8 text-slate-300">
                                C’est pour ça qu’un calculateur qui affiche clairement le reste
                                après acompte est souvent plus utile qu’un simple total brut ou
                                net.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold text-white">
                                Comment raisonner simplement
                            </h2>

                            <div className="mt-5 rounded-[28px] border border-white/10 bg-white/5 p-6">
                                <p className="text-sm uppercase tracking-wide text-slate-400">
                                    Logique simple
                                </p>
                                <p className="mt-3 text-2xl font-bold text-white">
                                    Reste estimé = net estimé − acompte déjà reçu
                                </p>
                                <p className="mt-4 text-sm leading-6 text-slate-300">
                                    Ce calcul donne un repère utile pour visualiser le solde
                                    attendu.
                                </p>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold text-white">
                                Exemple concret
                            </h2>

                            <div className="mt-5 grid gap-3 md:grid-cols-2">
                                <MiniStat label="Net estimé" value="1 650 €" />
                                <MiniStat label="Acompte déjà reçu" value="700 €" />
                                <MiniStat label="Reste à recevoir" value="950 €" />
                            </div>

                            <p className="mt-5 text-lg leading-8 text-slate-300">
                                Cet exemple permet de comprendre immédiatement ce qu’il peut
                                rester à percevoir en fin de période.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold text-white">
                                Erreurs fréquentes
                            </h2>

                            <div className="mt-5 space-y-3">
                                <MistakeItem text="oublier de déduire l’acompte déjà reçu" />
                                <MistakeItem text="raisonner uniquement sur le brut" />
                                <MistakeItem text="penser que l’avance correspond à la paie finale" />
                                <MistakeItem text="perdre la trace de plusieurs acomptes" />
                            </div>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold text-white">
                                Pourquoi l’historique Premium devient utile
                            </h2>
                            <p className="mt-4 text-lg leading-8 text-slate-300">
                                Dès que tu veux comparer plusieurs périodes, plusieurs avances
                                ou plusieurs estimations, l’historique permet de garder une vue
                                plus claire. C’est particulièrement pratique quand tu veux suivre
                                plusieurs missions ou plusieurs fins de mois.
                            </p>
                        </div>
                    </section>

                    <section className="mt-16 rounded-[28px] border border-emerald-300/20 bg-emerald-400/10 p-6">
                        <h2 className="text-2xl font-bold text-white">
                            Estimer ton reste après acompte
                        </h2>
                        <p className="mt-3 max-w-3xl text-slate-200">
                            Le calculateur NetInterim te permet d’entrer ton acompte déjà
                            reçu pour voir directement ce qu’il te reste à toucher.
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
                                text="Comprendre l’indemnité de fin de mission."
                            />
                            <InternalCard
                                href="/conges-payes-interim"
                                title="Congés payés intérim"
                                text="Estimer le montant de fin de mission."
                            />
                            <InternalCard
                                href="/heures-supplementaires-interim"
                                title="Heures supplémentaires"
                                text="Ajouter les majorations au calcul."
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