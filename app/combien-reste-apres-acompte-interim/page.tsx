import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CalculatorForm from "@/components/calculator/CalculatorForm";
import FaqSchema from "@/components/seo/FaqSchema";

export const metadata: Metadata = {
    title: "Combien reste après un acompte intérim ? Calcul simple",
    description:
        "Découvre comment estimer ce qu’il reste à toucher après un acompte en intérim, avec explication simple et calculateur complet.",
};

const faqItems = [
    {
        question: "Comment savoir ce qu’il reste après un acompte intérim ?",
        answer:
            "Il faut partir du net estimé ou du total visé, puis déduire l’acompte déjà perçu.",
    },
    {
        question: "L’acompte réduit-il la paie totale ?",
        answer:
            "Non, il s’agit d’une avance. Il réduit seulement le montant restant à recevoir.",
    },
    {
        question: "NetInterim prend-il l’acompte en compte ?",
        answer:
            "Oui, le calculateur permet d’entrer un acompte pour afficher le reste estimé.",
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
                            Combien reste après un acompte intérim ?{" "}
                            <span className="gradient-text">Calcul simple</span>
                        </h1>

                        <p className="mt-6 text-xl text-slate-300">
                            👉 Le reste à toucher dépend du <strong>net estimé</strong> et de{" "}
                            <strong>l’acompte déjà reçu</strong>.
                        </p>
                    </header>

                    <section className="mt-10">
                        <h2 className="text-2xl font-bold">Faire une simulation</h2>
                        <p className="mt-3 text-slate-300">
                            Entre ton acompte pour voir instantanément ce qu’il peut te rester.
                        </p>
                        <div className="mt-6">
                            <CalculatorForm />
                        </div>
                    </section>

                    <section className="mt-16 space-y-8">
                        <h2 className="text-3xl font-bold">
                            Pourquoi cette question revient souvent ?
                        </h2>
                        <p className="text-lg leading-8 text-slate-300">
                            Beaucoup d’intérimaires comparent le virement final avec le total
                            imaginé sans intégrer l’acompte déjà reçu. Le bon réflexe, c’est
                            de raisonner en “reste à percevoir”.
                        </p>

                        <div className="grid gap-4 md:grid-cols-3">
                            <Stat label="Net estimé" value="1600 €" />
                            <Stat label="Acompte reçu" value="600 €" />
                            <Stat label="Reste estimé" value="1000 €" />
                        </div>
                    </section>

                    <section className="mt-16">
                        <h2 className="text-3xl font-bold">Erreurs fréquentes</h2>
                        <div className="mt-5 space-y-3">
                            <ErrorItem text="oublier l’acompte déjà perçu" />
                            <ErrorItem text="confondre brut final et reste à toucher" />
                            <ErrorItem text="raisonner sans simulation globale" />
                        </div>
                    </section>

                    <section className="mt-16">
                        <h2 className="text-2xl font-bold">Aller plus loin</h2>
                        <div className="mt-6 grid gap-4 md:grid-cols-3">
                            <LinkCard href="/acompte-interim" title="Acompte intérim" />
                            <LinkCard href="/calcul-acompte-interim-75" title="Acompte 75 %" />
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