import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CalculatorForm from "@/components/calculator/CalculatorForm";
import FaqSchema from "@/components/seo/FaqSchema";

export const metadata: Metadata = {
    title: "Salaire intérim net après IFM : combien toucher ?",
    description:
        "Comprends comment l’IFM influence le salaire intérim et comment estimer le net après IFM avec le calculateur NetInterim.",
};

const faqItems = [
    {
        question: "L’IFM augmente-t-elle le net ?",
        answer:
            "Oui, l’IFM augmente le total brut estimé, ce qui influence ensuite le net indicatif.",
    },
    {
        question: "Faut-il l’ajouter au calcul ?",
        answer:
            "Oui, si tu veux une estimation plus réaliste du total de fin de mission.",
    },
    {
        question: "Puis-je la simuler facilement ?",
        answer:
            "Oui, le calculateur NetInterim permet d’inclure ou non l’IFM.",
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
                            Salaire intérim net après IFM :{" "}
                            <span className="gradient-text">combien toucher ?</span>
                        </h1>

                        <p className="mt-6 text-xl text-slate-300">
                            👉 L’IFM augmente le total brut estimé et peut donc faire monter
                            le <strong>net final indicatif</strong>.
                        </p>
                    </header>

                    <section className="mt-10">
                        <h2 className="text-2xl font-bold">Faire une simulation</h2>
                        <p className="mt-3 text-slate-300">
                            Active l’IFM dans le calculateur pour voir son impact.
                        </p>
                        <div className="mt-6">
                            <CalculatorForm />
                        </div>
                    </section>

                    <section className="mt-16 space-y-8">
                        <h2 className="text-3xl font-bold">
                            Pourquoi l’IFM change le résultat ?
                        </h2>
                        <p className="text-lg leading-8 text-slate-300">
                            Beaucoup de personnes regardent uniquement le salaire brut de base.
                            Pourtant, l’IFM vient s’ajouter à la fin de mission et modifie le
                            total brut pris en compte dans l’estimation.
                        </p>

                        <div className="grid gap-4 md:grid-cols-3">
                            <Stat label="Brut mission" value="1800 €" />
                            <Stat label="IFM" value="+180 € env." />
                            <Stat label="Net estimé" value="plus élevé" />
                        </div>
                    </section>

                    <section className="mt-16">
                        <h2 className="text-3xl font-bold">Erreurs fréquentes</h2>
                        <div className="mt-5 space-y-3">
                            <ErrorItem text="ne pas inclure l’IFM dans la simulation" />
                            <ErrorItem text="croire que seul le salaire de base compte" />
                            <ErrorItem text="confondre IFM et congés payés" />
                        </div>
                    </section>

                    <section className="mt-16">
                        <h2 className="text-2xl font-bold">Aller plus loin</h2>
                        <div className="mt-6 grid gap-4 md:grid-cols-3">
                            <LinkCard href="/calcul-ifm-interim" title="Calcul IFM" />
                            <LinkCard href="/conges-payes-interim" title="Congés payés" />
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