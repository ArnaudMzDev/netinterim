import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CalculatorForm from "@/components/calculator/CalculatorForm";
import FaqSchema from "@/components/seo/FaqSchema";

export const metadata: Metadata = {
    title: "1500 brut en intérim : combien en net ? Simulation + calcul",
    description:
        "1500 € brut en intérim correspond à environ 1150 € à 1250 € net. Simulation détaillée avec IFM, congés payés et acompte.",
};

const faqItems = [
    {
        question: "1500 brut en intérim ça fait combien en net ?",
        answer:
            "1500 € brut correspond généralement à environ 1150 € à 1250 € net selon les cotisations.",
    },
    {
        question: "Les IFM sont-elles incluses dans le calcul ?",
        answer:
            "Oui, si tu les actives dans le calculateur, elles sont ajoutées au total brut.",
    },
    {
        question: "Le net affiché est-il exact ?",
        answer:
            "Non, il s’agit d’une estimation basée sur un coefficient.",
    },
];

export default function Page() {
    return (
        <main className="pb-20 pt-12">
            <FaqSchema items={faqItems} />

            <div className="container-app text-white">
                <Header />

                <article className="mx-auto max-w-5xl">
                    {/* HERO */}
                    <header>
                        <h1 className="text-5xl font-black leading-tight">
                            1500 brut en intérim :{" "}
                            <span className="gradient-text">
                combien en net ?
              </span>
                        </h1>

                        <p className="mt-6 text-xl text-slate-300">
                            👉 1500 € brut en intérim correspond généralement à{" "}
                            <strong>1150 € à 1250 € net</strong>.
                        </p>
                    </header>

                    {/* CALCULATEUR EARLY */}
                    <section className="mt-10">
                        <h2 className="text-2xl font-bold">
                            Simuler exactement ton salaire
                        </h2>
                        <p className="mt-3 text-slate-300">
                            Ajuste ton taux, tes heures et ton acompte pour voir ton vrai résultat.
                        </p>

                        <div className="mt-6">
                            <CalculatorForm />
                        </div>
                    </section>

                    {/* EXPLICATION */}
                    <section className="mt-16 space-y-8">
                        <h2 className="text-3xl font-bold">
                            Comment on passe de 1500 brut à net ?
                        </h2>

                        <p className="text-lg text-slate-300 leading-8">
                            Le salaire brut correspond au montant avant déduction des cotisations.
                            En intérim, ces cotisations représentent généralement entre 20 % et 25 %,
                            ce qui explique l’écart entre brut et net.
                        </p>

                        <div className="grid gap-4 md:grid-cols-3">
                            <Stat label="Brut" value="1500 €" />
                            <Stat label="Cotisations" value="-300 € env." />
                            <Stat label="Net estimé" value="1200 € env." />
                        </div>
                    </section>

                    {/* IFM */}
                    <section className="mt-16 space-y-6">
                        <h2 className="text-3xl font-bold">
                            Et avec l’IFM et les congés payés ?
                        </h2>

                        <p className="text-lg text-slate-300">
                            En intérim, tu peux toucher en plus :
                        </p>

                        <ul className="space-y-2 text-slate-300">
                            <li>• IFM (≈ 10 %)</li>
                            <li>• Congés payés (≈ 10 %)</li>
                        </ul>

                        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                            <p className="text-slate-300">
                                👉 Ton total brut peut monter à environ{" "}
                                <strong>1800 € – 2000 €</strong> avec les bonus.
                            </p>
                        </div>
                    </section>

                    {/* ERREURS */}
                    <section className="mt-16">
                        <h2 className="text-3xl font-bold">
                            Les erreurs fréquentes
                        </h2>

                        <div className="mt-5 space-y-3">
                            <ErrorItem text="confondre brut et net" />
                            <ErrorItem text="oublier l’acompte déjà reçu" />
                            <ErrorItem text="ne pas inclure IFM et congés payés" />
                        </div>
                    </section>

                    {/* INTERNAL LINKS */}
                    <section className="mt-16">
                        <h2 className="text-2xl font-bold">
                            Aller plus loin
                        </h2>

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

/* COMPONENTS */

function Stat({ label, value }: any) {
    return (
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="text-sm text-slate-400">{label}</p>
            <p className="mt-2 text-lg font-bold text-white">{value}</p>
        </div>
    );
}

function ErrorItem({ text }: any) {
    return (
        <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-slate-300">
            • {text}
        </div>
    );
}

function LinkCard({ href, title }: any) {
    return (
        <Link
            href={href}
            className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition"
        >
            <p className="font-semibold text-white">{title}</p>
        </Link>
    );
}