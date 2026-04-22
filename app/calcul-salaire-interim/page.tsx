import type { Metadata } from "next";
import Link from "next/link";
import CalculatorForm from "@/components/calculator/CalculatorForm";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FaqSchema from "@/components/seo/FaqSchema";

export const metadata: Metadata = {
    title: "Calcul salaire intérim : brut, net, IFM, congés payés et acompte",
    description:
        "Estime ton salaire intérim avec le brut, le net indicatif, les IFM, les congés payés et le reste après acompte grâce au calculateur NetInterim.",
};

const faqItems = [
    {
        question: "Le calculateur donne-t-il le vrai net ?",
        answer:
            "Non. Le net reste indicatif. Il sert surtout à se repérer rapidement avant de comparer avec la paie réelle.",
    },
    {
        question: "L’acompte est-il pris en compte ?",
        answer:
            "Oui. Le calculateur affiche ce qu’il te reste à recevoir après déduction de l’acompte déjà perçu.",
    },
    {
        question: "Puis-je enregistrer mes calculs ?",
        answer:
            "Oui, cette fonctionnalité est disponible dans l’offre Premium avec l’historique.",
    },
];

export default function CalculSalaireInterimPage() {
    return (
        <main className="pb-20 pt-12">
            <FaqSchema items={faqItems} />

            <div className="container-app text-white">
                <Header />

                <article className="mx-auto max-w-5xl">
                    <header className="max-w-4xl">
                        <p className="text-sm font-medium text-emerald-300">
                            Guide complet
                        </p>

                        <h1 className="mt-4 text-5xl font-black leading-tight">
                            Calcul salaire intérim :{" "}
                            <span className="gradient-text">
                brut, net, IFM, congés payés et acompte
              </span>
                        </h1>

                        <p className="mt-6 text-lg leading-8 text-slate-300">
                            Cette page t’aide à comprendre comment estimer une paie d’intérim
                            de façon simple : salaire brut, heures supplémentaires,
                            indemnité de fin de mission, congés payés, net indicatif et reste
                            à recevoir après acompte.
                        </p>
                    </header>

                    <section className="mt-10 rounded-[28px] border border-white/10 bg-white/5 p-6">
                        <h2 className="text-2xl font-bold text-white">Réponse rapide</h2>
                        <div className="mt-5 grid gap-3 md:grid-cols-2">
                            <QuickAnswer
                                label="Salaire brut"
                                text="Il dépend du taux horaire, du nombre d’heures, des heures sup et des primes."
                            />
                            <QuickAnswer
                                label="IFM"
                                text="Elle est généralement estimée sur la base de 10 % du brut de mission."
                            />
                            <QuickAnswer
                                label="Congés payés"
                                text="Ils représentent généralement 10 % de la rémunération prise en compte."
                            />
                            <QuickAnswer
                                label="Net"
                                text="Le net affiché ici reste une estimation, utile pour se repérer rapidement."
                            />
                        </div>
                    </section>

                    <section id="calculateur" className="mt-14">
                        <CalculatorForm />
                    </section>

                    <section className="mt-16 max-w-4xl space-y-10">
                        <div>
                            <h2 className="text-3xl font-bold text-white">
                                Comment calculer son salaire en intérim ?
                            </h2>
                            <p className="mt-4 text-lg leading-8 text-slate-300">
                                Le point de départ est le salaire brut de base. Il se calcule à
                                partir du taux horaire brut multiplié par le nombre d’heures
                                travaillées. À cela peuvent s’ajouter les heures
                                supplémentaires, les primes éventuelles, l’indemnité de fin de
                                mission et les congés payés.
                            </p>
                            <p className="mt-4 text-lg leading-8 text-slate-300">
                                Dans la pratique, beaucoup de personnes veulent surtout répondre
                                à trois questions : combien je vais toucher au total, combien il
                                me reste après mon acompte, et si ma paie paraît cohérente.
                                C’est exactement le rôle du calculateur.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold text-white">
                                Ce que prend en compte le calculateur
                            </h2>
                            <div className="mt-5 grid gap-3 md:grid-cols-2">
                                <FeatureCard text="taux horaire brut" />
                                <FeatureCard text="heures normales" />
                                <FeatureCard text="heures supplémentaires à 25 %" />
                                <FeatureCard text="heures supplémentaires à 50 %" />
                                <FeatureCard text="primes brutes" />
                                <FeatureCard text="acompte déjà reçu" />
                                <FeatureCard text="indemnité de fin de mission" />
                                <FeatureCard text="congés payés" />
                            </div>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold text-white">
                                Exemple concret de calcul
                            </h2>

                            <div className="mt-5 rounded-[28px] border border-white/10 bg-white/5 p-6">
                                <p className="text-slate-300">Prenons un exemple simple :</p>

                                <ul className="mt-4 space-y-2 text-slate-300">
                                    <li>• taux horaire brut : 11,88 €</li>
                                    <li>• heures normales : 151,67 h</li>
                                    <li>• heures supplémentaires : 0 h</li>
                                    <li>• primes : 0 €</li>
                                </ul>

                                <div className="mt-6 grid gap-3 md:grid-cols-2">
                                    <MiniStat label="Brut mission" value="1 802,20 €" />
                                    <MiniStat label="IFM estimée" value="180,22 €" />
                                    <MiniStat label="Congés payés estimés" value="198,24 €" />
                                    <MiniStat label="Total brut estimé" value="2 180,66 €" />
                                </div>

                                <p className="mt-6 text-sm leading-6 text-slate-400">
                                    Le net dépend ensuite d’un coefficient indicatif. Ce n’est pas
                                    un bulletin de paie officiel, mais c’est une base utile pour
                                    se situer.
                                </p>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold text-white">
                                Erreurs fréquentes
                            </h2>

                            <div className="mt-5 space-y-3">
                                <MistakeItem text="confondre brut et net" />
                                <MistakeItem text="oublier de prendre en compte l’acompte déjà reçu" />
                                <MistakeItem text="penser que le net affiché est exact au centime près" />
                                <MistakeItem text="ne pas distinguer IFM et congés payés" />
                            </div>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold text-white">
                                Pourquoi suivre plusieurs simulations ?
                            </h2>
                            <p className="mt-4 text-lg leading-8 text-slate-300">
                                En intérim, la rémunération peut varier d’une mission à l’autre,
                                selon les heures, les primes et les acomptes. L’historique
                                Premium permet de garder une trace de tes estimations et de
                                comparer plusieurs périodes plus facilement.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold text-white">
                                Questions fréquentes
                            </h2>

                            <div className="mt-5 space-y-4">
                                <FaqItem
                                    question="Le calculateur donne-t-il le vrai net ?"
                                    answer="Non. Le net reste indicatif. Il sert surtout à se repérer rapidement avant de comparer avec la paie réelle."
                                />
                                <FaqItem
                                    question="L’acompte est-il pris en compte ?"
                                    answer="Oui. Le calculateur affiche ce qu’il te reste à recevoir après déduction de l’acompte déjà perçu."
                                />
                                <FaqItem
                                    question="Puis-je enregistrer mes calculs ?"
                                    answer="Oui, cette fonctionnalité est disponible dans l’offre Premium avec l’historique."
                                />
                            </div>
                        </div>
                    </section>

                    <section className="mt-16 rounded-[28px] border border-emerald-300/20 bg-emerald-400/10 p-6">
                        <h2 className="text-2xl font-bold text-white">
                            Besoin d’un suivi plus complet ?
                        </h2>
                        <p className="mt-3 max-w-3xl text-slate-200">
                            L’offre Premium permet d’enregistrer les simulations, de retrouver
                            l’historique et de comparer plus facilement plusieurs situations.
                        </p>

                        <div className="mt-6 flex flex-wrap gap-3">
                            <Link
                                href="/pricing"
                                className="rounded-2xl bg-white px-5 py-3 font-semibold text-slate-900 transition hover:opacity-90"
                            >
                                Voir l’offre Premium
                            </Link>

                            <Link
                                href="/historique"
                                className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 font-semibold text-white transition hover:bg-white/10"
                            >
                                Voir l’historique
                            </Link>
                        </div>
                    </section>

                    <section className="mt-16">
                        <h2 className="text-2xl font-bold text-white">Pages liées</h2>

                        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                            <Link
                                href="/calcul-ifm-interim"
                                className="glass rounded-2xl p-5 transition hover:bg-white/10"
                            >
                                <p className="font-semibold text-white">Calcul IFM intérim</p>
                                <p className="mt-2 text-sm text-slate-300">
                                    Comprendre le montant de fin de mission.
                                </p>
                            </Link>

                            <Link
                                href="/conges-payes-interim"
                                className="glass rounded-2xl p-5 transition hover:bg-white/10"
                            >
                                <p className="font-semibold text-white">
                                    Congés payés intérim
                                </p>
                                <p className="mt-2 text-sm text-slate-300">
                                    Voir comment estimer ce qui est versé en fin de mission.
                                </p>
                            </Link>

                            <Link
                                href="/heures-supplementaires-interim"
                                className="glass rounded-2xl p-5 transition hover:bg-white/10"
                            >
                                <p className="font-semibold text-white">
                                    Heures supplémentaires
                                </p>
                                <p className="mt-2 text-sm text-slate-300">
                                    Lire simplement les majorations à 25 % et 50 %.
                                </p>
                            </Link>

                            <Link
                                href="/acompte-interim"
                                className="glass rounded-2xl p-5 transition hover:bg-white/10"
                            >
                                <p className="font-semibold text-white">Acompte intérim</p>
                                <p className="mt-2 text-sm text-slate-300">
                                    Estimer ce qu’il reste à toucher après avance.
                                </p>
                            </Link>

                            <Link
                                href="/pourquoi-mon-acompte-interim-est-plus-bas-que-prevu"
                                className="glass rounded-2xl p-5 transition hover:bg-white/10"
                            >
                                <p className="font-semibold text-white">
                                    Acompte intérim plus bas
                                </p>
                                <p className="mt-2 text-sm text-slate-300">
                                    Comprendre les écarts d’avance.
                                </p>
                            </Link>

                            <Link
                                href="/comment-lire-sa-fiche-de-paie-interim"
                                className="glass rounded-2xl p-5 transition hover:bg-white/10"
                            >
                                <p className="font-semibold text-white">
                                    Lire une fiche de paie
                                </p>
                                <p className="mt-2 text-sm text-slate-300">
                                    Décrypter les lignes importantes.
                                </p>
                            </Link>

                            <Link
                                href="/fin-de-mission-interim-combien-je-vais-toucher"
                                className="glass rounded-2xl p-5 transition hover:bg-white/10"
                            >
                                <p className="font-semibold text-white">
                                    Fin de mission intérim
                                </p>
                                <p className="mt-2 text-sm text-slate-300">
                                    Estimer ton paiement final.
                                </p>
                            </Link>
                        </div>
                    </section>

                    <section className="mt-16">
                        <h2 className="text-2xl font-bold text-white">
                            Simulations fréquentes
                        </h2>

                        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                            <Link
                                href="/1500-brut-interim-net"
                                className="glass rounded-2xl p-5 transition hover:bg-white/10"
                            >
                                <p className="font-semibold text-white">1500 brut en net</p>
                                <p className="mt-2 text-sm text-slate-300">
                                    Estimation simple et rapide.
                                </p>
                            </Link>

                            <Link
                                href="/1800-brut-interim-net"
                                className="glass rounded-2xl p-5 transition hover:bg-white/10"
                            >
                                <p className="font-semibold text-white">1800 brut en net</p>
                                <p className="mt-2 text-sm text-slate-300">
                                    Comprendre le net estimé.
                                </p>
                            </Link>

                            <Link
                                href="/2000-brut-interim-net"
                                className="glass rounded-2xl p-5 transition hover:bg-white/10"
                            >
                                <p className="font-semibold text-white">2000 brut en net</p>
                                <p className="mt-2 text-sm text-slate-300">
                                    Voir une estimation plus haute.
                                </p>
                            </Link>

                            <Link
                                href="/smic-interim-net"
                                className="glass rounded-2xl p-5 transition hover:bg-white/10"
                            >
                                <p className="font-semibold text-white">SMIC intérim net</p>
                                <p className="mt-2 text-sm text-slate-300">
                                    Estimer le net au SMIC.
                                </p>
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

function FeatureCard({ text }: { text: string }) {
    return (
        <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-slate-200">
            {text}
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