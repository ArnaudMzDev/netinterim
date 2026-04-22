import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CalculatorForm from "@/components/calculator/CalculatorForm";
import FaqSchema from "@/components/seo/FaqSchema";

export const metadata: Metadata = {
    title: "2000 brut en intérim : combien en net ? Simulation + calcul",
    description:
        "2000 € brut en intérim correspond généralement à environ 1520 € à 1650 € net. Simulation avec IFM, congés payés et acompte.",
};

const faqItems = [
    {
        question: "2000 brut en intérim ça fait combien en net ?",
        answer:
            "2000 € brut correspond généralement à environ 1520 € à 1650 € net selon les cotisations et le profil.",
    },
    {
        question: "Est-ce que l’IFM change beaucoup le résultat ?",
        answer:
            "Oui, l’IFM et les congés payés peuvent augmenter sensiblement le total brut estimé.",
    },
    {
        question: "Le calcul affiché est-il officiel ?",
        answer:
            "Non, il s’agit d’une estimation utile pour se situer rapidement.",
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
                            2000 brut en intérim :{" "}
                            <span className="gradient-text">combien en net ?</span>
                        </h1>

                        <p className="mt-6 text-xl text-slate-300">
                            👉 2000 € brut en intérim correspond généralement à{" "}
                            <strong>1520 € à 1650 € net</strong>.
                        </p>
                    </header>

                    <section className="mt-10">
                        <h2 className="text-2xl font-bold">Simuler ton salaire</h2>
                        <p className="mt-3 text-slate-300">
                            Utilise le calculateur pour ajuster les heures, les primes et
                            l’acompte.
                        </p>
                        <div className="mt-6">
                            <CalculatorForm />
                        </div>
                    </section>

                    <section className="mt-16 space-y-8">
                        <h2 className="text-3xl font-bold">
                            Comment passer de 2000 brut à net ?
                        </h2>
                        <p className="text-lg leading-8 text-slate-300">
                            Plus le brut monte, plus l’estimation devient utile pour se repérer.
                            En intérim, le net dépend toujours des cotisations et de la
                            composition globale de la paie.
                        </p>

                        <div className="grid gap-4 md:grid-cols-3">
                            <Stat label="Brut" value="2000 €" />
                            <Stat label="Cotisations" value="-400 € env." />
                            <Stat label="Net estimé" value="1580 € env." />
                        </div>
                    </section>

                    <section className="mt-16 space-y-6">
                        <h2 className="text-3xl font-bold">
                            Et avec l’IFM et les congés payés ?
                        </h2>

                        <p className="text-lg text-slate-300">
                            En ajoutant IFM et congés payés, le total brut final peut augmenter
                            de manière nette.
                        </p>

                        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                            <p className="text-slate-300">
                                👉 Avec les éléments de fin de mission, le total brut peut monter
                                autour de <strong>2400 € à 2600 €</strong>.
                            </p>
                        </div>
                    </section>

                    <section className="mt-16">
                        <h2 className="text-3xl font-bold">Erreurs fréquentes</h2>
                        <div className="mt-5 space-y-3">
                            <ErrorItem text="raisonner uniquement sur le salaire de base" />
                            <ErrorItem text="oublier les primes éventuelles" />
                            <ErrorItem text="ne pas prendre en compte le reste après acompte" />
                        </div>
                    </section>

                    <section className="mt-16">
                        <h2 className="text-2xl font-bold">Aller plus loin</h2>
                        <div className="mt-6 grid gap-4 md:grid-cols-3">
                            <LinkCard href="/calcul-salaire-interim" title="Calcul complet" />
                            <LinkCard href="/calcul-ifm-interim" title="IFM intérim" />
                            <LinkCard href="/conges-payes-interim" title="Congés payés" />
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