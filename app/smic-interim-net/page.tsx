import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CalculatorForm from "@/components/calculator/CalculatorForm";
import FaqSchema from "@/components/seo/FaqSchema";

export const metadata: Metadata = {
    title: "SMIC intérim : combien en net ? Calcul et estimation",
    description:
        "Découvre combien représente le SMIC en intérim en net, avec une estimation simple, les IFM, les congés payés et le calculateur complet.",
};

const faqItems = [
    {
        question: "Le SMIC en intérim fait combien en net ?",
        answer:
            "Le SMIC en intérim correspond généralement à un net mensuel autour de 1350 € environ, selon la situation.",
    },
    {
        question: "L’intérim ajoute-t-il quelque chose au SMIC ?",
        answer:
            "Oui, l’IFM et les congés payés peuvent augmenter le total brut estimé en fin de mission.",
    },
    {
        question: "Puis-je simuler mon cas précis ?",
        answer:
            "Oui, le calculateur permet d’ajuster les heures, les primes et l’acompte.",
    },
];

export default function Page() {
    return (
        <main className="pb-20 pt-12">
            <FaqSchema items={faqItems} />
            <div className="container-app text-white">
                <Header />

                <article className="mx-auto max-w-5xl">
                    <header>
                        <h1 className="text-5xl font-black leading-tight">
                            SMIC intérim :{" "}
                            <span className="gradient-text">combien en net ?</span>
                        </h1>

                        <p className="mt-6 text-xl text-slate-300">
                            👉 Le SMIC en intérim correspond généralement à environ{" "}
                            <strong>1350 € net</strong>, avec variations possibles.
                        </p>
                    </header>

                    <section className="mt-10">
                        <h2 className="text-2xl font-bold">Faire une simulation</h2>
                        <p className="mt-3 text-slate-300">
                            Le plus simple reste d’entrer ton taux et tes heures pour obtenir
                            une estimation plus réaliste.
                        </p>
                        <div className="mt-6">
                            <CalculatorForm />
                        </div>
                    </section>

                    <section className="mt-16 space-y-8">
                        <h2 className="text-3xl font-bold">
                            Le SMIC en intérim, c’est quoi concrètement ?
                        </h2>

                        <p className="text-lg leading-8 text-slate-300">
                            Quand on parle de SMIC en intérim, beaucoup de gens cherchent
                            surtout à connaître le net qu’ils peuvent espérer toucher à la
                            fin du mois ou de la mission. En pratique, le montant dépend du
                            brut de base, puis des éléments qui peuvent s’ajouter.
                        </p>

                        <div className="grid gap-4 md:grid-cols-3">
                            <Stat label="Base" value="SMIC brut" />
                            <Stat label="Net estimé" value="1350 € env." />
                            <Stat label="Avec extras" value="plus si IFM/ICP" />
                        </div>
                    </section>

                    <section className="mt-16 space-y-6">
                        <h2 className="text-3xl font-bold">
                            Et avec l’IFM et les congés payés ?
                        </h2>
                        <p className="text-lg text-slate-300">
                            En intérim, le total peut être supérieur au simple salaire de base
                            si on ajoute les éléments de fin de mission.
                        </p>
                        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                            <p className="text-slate-300">
                                👉 Le brut total estimé peut monter nettement au-dessus du SMIC
                                brut de base si l’IFM et les congés payés sont pris en compte.
                            </p>
                        </div>
                    </section>

                    <section className="mt-16">
                        <h2 className="text-3xl font-bold">Erreurs fréquentes</h2>
                        <div className="mt-5 space-y-3">
                            <ErrorItem text="penser que le SMIC brut correspond directement au net" />
                            <ErrorItem text="oublier les heures supplémentaires" />
                            <ErrorItem text="ne pas tenir compte de l’acompte déjà reçu" />
                        </div>
                    </section>

                    <section className="mt-16">
                        <h2 className="text-2xl font-bold">Aller plus loin</h2>
                        <div className="mt-6 grid gap-4 md:grid-cols-3">
                            <LinkCard href="/calcul-salaire-interim" title="Calcul complet" />
                            <LinkCard href="/calcul-ifm-interim" title="IFM intérim" />
                            <LinkCard href="/taux-horaire-interim-net" title="Taux horaire net" />
                        </div>
                    </section>
                </article>

                <Footer />
            </div>
        </main>
    );
}

function Stat({ label, value }: { label: string; value: string }) {
    return (
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="text-sm text-slate-400">{label}</p>
            <p className="mt-2 text-lg font-bold text-white">{value}</p>
        </div>
    );
}

function ErrorItem({ text }: { text: string }) {
    return (
        <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-slate-300">
            • {text}
        </div>
    );
}

function LinkCard({ href, title }: { href: string; title: string }) {
    return (
        <Link
            href={href}
            className="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10"
        >
            <p className="font-semibold text-white">{title}</p>
        </Link>
    );
}