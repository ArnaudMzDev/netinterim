import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CalculatorForm from "@/components/calculator/CalculatorForm";
import FaqSchema from "@/components/seo/FaqSchema";

export const metadata: Metadata = {
    title: "Combien touche un intérimaire par mois ? Estimation simple",
    description:
        "Découvre combien peut toucher un intérimaire par mois selon le taux, les heures, les IFM, les congés payés et l’acompte.",
};

const faqItems = [
    {
        question: "Combien gagne un intérimaire par mois ?",
        answer:
            "Cela dépend du taux horaire, du nombre d’heures, des primes, des heures supplémentaires et des éléments de fin de mission.",
    },
    {
        question: "Peut-on donner une moyenne ?",
        answer:
            "Oui, beaucoup d’intérimaires se situent souvent entre 1300 € et 2000 € net selon les missions.",
    },
    {
        question: "Comment avoir une estimation plus précise ?",
        answer:
            "Le plus fiable est d’utiliser un calculateur avec le taux, les heures, les primes et l’acompte.",
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
                            Combien touche un intérimaire par mois ?{" "}
                            <span className="gradient-text">Estimation simple</span>
                        </h1>

                        <p className="mt-6 text-xl text-slate-300">
                            👉 Un intérimaire peut toucher généralement entre{" "}
                            <strong>1300 € et 2000 € net</strong>, parfois plus selon la mission.
                        </p>
                    </header>

                    <section className="mt-10">
                        <h2 className="text-2xl font-bold">Simuler ton cas</h2>
                        <p className="mt-3 text-slate-300">
                            Le calculateur te donne une estimation plus proche de ta réalité.
                        </p>
                        <div className="mt-6">
                            <CalculatorForm />
                        </div>
                    </section>

                    <section className="mt-16 space-y-8">
                        <h2 className="text-3xl font-bold">
                            Pourquoi le salaire varie autant ?
                        </h2>
                        <p className="text-lg leading-8 text-slate-300">
                            En intérim, le revenu mensuel dépend du taux horaire, du nombre
                            d’heures, des primes, des heures supplémentaires, de l’IFM et des
                            congés payés si on raisonne sur une fin de mission.
                        </p>

                        <div className="grid gap-4 md:grid-cols-3">
                            <Stat label="Bas de fourchette" value="1300 € net env." />
                            <Stat label="Milieu" value="1600 € net env." />
                            <Stat label="Haut" value="2000 €+ net env." />
                        </div>
                    </section>

                    <section className="mt-16">
                        <h2 className="text-3xl font-bold">Erreurs fréquentes</h2>
                        <div className="mt-5 space-y-3">
                            <ErrorItem text="penser qu’il existe une seule réponse universelle" />
                            <ErrorItem text="oublier les primes et heures supplémentaires" />
                            <ErrorItem text="ne pas prendre en compte l’acompte" />
                        </div>
                    </section>

                    <section className="mt-16">
                        <h2 className="text-2xl font-bold">Aller plus loin</h2>
                        <div className="mt-6 grid gap-4 md:grid-cols-3">
                            <LinkCard href="/smic-interim-net" title="SMIC intérim net" />
                            <LinkCard href="/taux-horaire-interim-net" title="Taux horaire net" />
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