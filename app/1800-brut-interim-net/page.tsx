import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CalculatorForm from "@/components/calculator/CalculatorForm";
import FaqSchema from "@/components/seo/FaqSchema";

export const metadata: Metadata = {
    title: "1800 brut en intérim : combien en net ? Simulation + calcul",
    description:
        "1800 € brut en intérim correspond généralement à environ 1380 € à 1480 € net. Simulation avec IFM, congés payés et acompte.",
};

const faqItems = [
    {
        question: "1800 brut en intérim ça fait combien en net ?",
        answer:
            "1800 € brut correspond généralement à environ 1380 € à 1480 € net selon les cotisations et la situation.",
    },
    {
        question: "Est-ce que les IFM sont incluses ?",
        answer:
            "Oui, si tu les actives dans le calculateur, elles sont ajoutées au total brut estimé.",
    },
    {
        question: "Le net affiché est-il exact ?",
        answer:
            "Non, c’est une estimation indicative utile pour se repérer avant de comparer avec la paie réelle.",
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
                            1800 brut en intérim :{" "}
                            <span className="gradient-text">combien en net ?</span>
                        </h1>

                        <p className="mt-6 text-xl text-slate-300">
                            👉 1800 € brut en intérim correspond généralement à{" "}
                            <strong>1380 € à 1480 € net</strong>.
                        </p>
                    </header>

                    <section className="mt-10">
                        <h2 className="text-2xl font-bold">Simuler ton salaire</h2>
                        <p className="mt-3 text-slate-300">
                            Ajuste ton taux, tes heures, tes primes et ton acompte pour voir
                            ton estimation complète.
                        </p>

                        <div className="mt-6">
                            <CalculatorForm />
                        </div>
                    </section>

                    <section className="mt-16 space-y-8">
                        <h2 className="text-3xl font-bold">
                            Comment passer de 1800 brut à net ?
                        </h2>

                        <p className="text-lg leading-8 text-slate-300">
                            Le salaire brut correspond au montant avant cotisations sociales.
                            En intérim, le net perçu est souvent inférieur de 20 à 25 %
                            environ, selon la situation.
                        </p>

                        <div className="grid gap-4 md:grid-cols-3">
                            <Stat label="Brut" value="1800 €" />
                            <Stat label="Cotisations" value="-350 € env." />
                            <Stat label="Net estimé" value="1430 € env." />
                        </div>
                    </section>

                    <section className="mt-16 space-y-6">
                        <h2 className="text-3xl font-bold">
                            Et avec l’IFM et les congés payés ?
                        </h2>

                        <p className="text-lg text-slate-300">
                            En intérim, le total brut peut augmenter grâce à :
                        </p>

                        <ul className="space-y-2 text-slate-300">
                            <li>• l’IFM</li>
                            <li>• les congés payés</li>
                        </ul>

                        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                            <p className="text-slate-300">
                                👉 Avec IFM et congés payés, ton total brut peut monter autour de{" "}
                                <strong>2150 € à 2350 €</strong>.
                            </p>
                        </div>
                    </section>

                    <section className="mt-16">
                        <h2 className="text-3xl font-bold">Erreurs fréquentes</h2>

                        <div className="mt-5 space-y-3">
                            <ErrorItem text="oublier les congés payés dans le total final" />
                            <ErrorItem text="confondre brut et net" />
                            <ErrorItem text="ne pas déduire l’acompte déjà reçu" />
                        </div>
                    </section>

                    <section className="mt-16">
                        <h2 className="text-2xl font-bold">Aller plus loin</h2>

                        <div className="mt-6 grid gap-4 md:grid-cols-3">
                            <LinkCard href="/calcul-salaire-interim" title="Calcul complet" />
                            <LinkCard href="/calcul-ifm-interim" title="IFM intérim" />
                            <LinkCard href="/acompte-interim" title="Acompte intérim" />
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