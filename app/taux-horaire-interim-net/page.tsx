import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CalculatorForm from "@/components/calculator/CalculatorForm";
import FaqSchema from "@/components/seo/FaqSchema";

export const metadata: Metadata = {
    title: "Taux horaire intérim : combien en net ? Calcul simple",
    description:
        "Découvre comment estimer le net à partir d’un taux horaire intérim, avec le calculateur NetInterim et des exemples simples.",
};

const faqItems = [
    {
        question: "Comment passer d’un taux horaire brut à un net ?",
        answer:
            "Il faut multiplier le taux brut par les heures travaillées puis appliquer une estimation des cotisations.",
    },
    {
        question: "Le taux horaire suffit-il ?",
        answer:
            "Non, il faut aussi tenir compte du nombre d’heures, des primes, des heures supplémentaires et de l’acompte.",
    },
    {
        question: "Puis-je simuler ça avec NetInterim ?",
        answer:
            "Oui, le calculateur est fait pour partir du taux horaire brut.",
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
                            Taux horaire intérim :{" "}
                            <span className="gradient-text">combien en net ?</span>
                        </h1>

                        <p className="mt-6 text-xl text-slate-300">
                            👉 Le net dépend du <strong>taux horaire brut</strong>, du nombre
                            d’heures et des autres éléments de la mission.
                        </p>
                    </header>

                    <section className="mt-10">
                        <h2 className="text-2xl font-bold">Faire une simulation</h2>
                        <p className="mt-3 text-slate-300">
                            Entre ton taux horaire et tes heures pour voir ton estimation.
                        </p>
                        <div className="mt-6">
                            <CalculatorForm />
                        </div>
                    </section>

                    <section className="mt-16 space-y-8">
                        <h2 className="text-3xl font-bold">
                            Pourquoi le taux horaire ne suffit pas à lui seul ?
                        </h2>
                        <p className="text-lg leading-8 text-slate-300">
                            Beaucoup de personnes cherchent “12 € brut ça fait combien en net ?”
                            mais la vraie réponse dépend aussi du nombre d’heures, des
                            éventuelles primes et des heures supplémentaires.
                        </p>

                        <div className="grid gap-4 md:grid-cols-3">
                            <Stat label="Taux horaire" value="12 € brut" />
                            <Stat label="Heures" value="151,67 h" />
                            <Stat label="Net estimé" value="variable" />
                        </div>
                    </section>

                    <section className="mt-16">
                        <h2 className="text-3xl font-bold">Erreurs fréquentes</h2>
                        <div className="mt-5 space-y-3">
                            <ErrorItem text="raisonner seulement au taux horaire" />
                            <ErrorItem text="oublier les heures supplémentaires" />
                            <ErrorItem text="oublier les primes et l’acompte" />
                        </div>
                    </section>

                    <section className="mt-16">
                        <h2 className="text-2xl font-bold">Aller plus loin</h2>
                        <div className="mt-6 grid gap-4 md:grid-cols-3">
                            <LinkCard href="/smic-interim-net" title="SMIC intérim net" />
                            <LinkCard href="/calcul-salaire-interim-35h" title="Salaire 35h" />
                            <LinkCard href="/calcul-salaire-interim" title="Calcul complet" />
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