import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CalculatorForm from "@/components/calculator/CalculatorForm";
import FaqSchema from "@/components/seo/FaqSchema";

export const metadata: Metadata = {
    title: "Acompte intérim 75 % : combien ça fait ? Calcul simple",
    description:
        "Découvre à quoi correspond un acompte intérim de 75 %, avec estimation simple et calculateur pour voir ce qu’il reste à toucher.",
};

const faqItems = [
    {
        question: "75 % d’acompte intérim, ça fait combien ?",
        answer:
            "Cela correspond à environ trois quarts du montant brut pris comme base de référence.",
    },
    {
        question: "L’acompte correspond-il à toute la paie ?",
        answer:
            "Non, il s’agit d’une avance. Il faut ensuite calculer le reste à toucher.",
    },
    {
        question: "Puis-je le simuler ?",
        answer:
            "Oui, le calculateur permet d’entrer un acompte pour voir le solde estimé.",
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
                            Acompte intérim 75 % :{" "}
                            <span className="gradient-text">combien ça fait ?</span>
                        </h1>

                        <p className="mt-6 text-xl text-slate-300">
                            👉 Un acompte de 75 % correspond généralement à environ{" "}
                            <strong>les 3/4 du montant brut de référence</strong>.
                        </p>
                    </header>

                    <section className="mt-10">
                        <h2 className="text-2xl font-bold">Simuler ton acompte</h2>
                        <p className="mt-3 text-slate-300">
                            Le calculateur permet de voir le montant restant après acompte.
                        </p>
                        <div className="mt-6">
                            <CalculatorForm />
                        </div>
                    </section>

                    <section className="mt-16 space-y-8">
                        <h2 className="text-3xl font-bold">
                            Comment comprendre un acompte à 75 % ?
                        </h2>
                        <p className="text-lg leading-8 text-slate-300">
                            Beaucoup de personnes veulent savoir à combien peut correspondre
                            un acompte de 75 %. Dans la pratique, cela donne un repère rapide,
                            mais le plus important reste de connaître le solde après cette
                            avance.
                        </p>

                        <div className="grid gap-4 md:grid-cols-3">
                            <Stat label="Base brute" value="1500 €" />
                            <Stat label="75 %" value="1125 €" />
                            <Stat label="Reste" value="à estimer ensuite" />
                        </div>
                    </section>

                    <section className="mt-16">
                        <h2 className="text-3xl font-bold">Erreurs fréquentes</h2>
                        <div className="mt-5 space-y-3">
                            <ErrorItem text="confondre acompte et paie finale" />
                            <ErrorItem text="oublier le reste après acompte" />
                            <ErrorItem text="raisonner sans tenir compte du net estimé" />
                        </div>
                    </section>

                    <section className="mt-16">
                        <h2 className="text-2xl font-bold">Aller plus loin</h2>
                        <div className="mt-6 grid gap-4 md:grid-cols-3">
                            <LinkCard href="/acompte-interim" title="Acompte intérim" />
                            <LinkCard href="/combien-reste-apres-acompte-interim" title="Reste après acompte" />
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