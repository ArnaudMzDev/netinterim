import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CalculatorForm from "@/components/calculator/CalculatorForm";
import FaqSchema from "@/components/seo/FaqSchema";

export const metadata: Metadata = {
    title: "Salaire intérim 35h : combien je touche ? Simulation",
    description:
        "Découvre combien tu peux toucher en intérim sur une base 35h, avec estimation du brut, du net, des IFM et du reste après acompte.",
};

const faqItems = [
    {
        question: "En intérim à 35h, combien puis-je toucher ?",
        answer:
            "Cela dépend surtout du taux horaire brut, des primes éventuelles et des éléments de fin de mission.",
    },
    {
        question: "35h suffit-il pour faire une estimation ?",
        answer:
            "C’est une bonne base, mais il faut aussi le taux horaire, les primes et les éventuels acomptes.",
    },
    {
        question: "Puis-je le simuler ici ?",
        answer:
            "Oui, le calculateur NetInterim permet d’estimer une paie complète à partir de 35h.",
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
                            Salaire intérim 35h :{" "}
                            <span className="gradient-text">combien je touche ?</span>
                        </h1>

                        <p className="mt-6 text-xl text-slate-300">
                            👉 À 35h en intérim, le résultat dépend surtout du{" "}
                            <strong>taux horaire brut</strong> appliqué à ta mission.
                        </p>
                    </header>

                    <section className="mt-10">
                        <h2 className="text-2xl font-bold">Faire une simulation</h2>
                        <p className="mt-3 text-slate-300">
                            Entre ton taux et garde 35h comme base pour estimer rapidement ton
                            résultat.
                        </p>
                        <div className="mt-6">
                            <CalculatorForm />
                        </div>
                    </section>

                    <section className="mt-16 space-y-8">
                        <h2 className="text-3xl font-bold">
                            Pourquoi la base 35h est utile ?
                        </h2>
                        <p className="text-lg leading-8 text-slate-300">
                            Beaucoup de personnes cherchent directement à savoir combien elles
                            toucheront “sur 35h”. C’est une bonne base d’estimation, surtout
                            quand on veut comparer plusieurs offres ou plusieurs taux horaires.
                        </p>

                        <div className="grid gap-4 md:grid-cols-3">
                            <Stat label="Base" value="35 h" />
                            <Stat label="Taux horaire" value="à renseigner" />
                            <Stat label="Résultat" value="net estimé variable" />
                        </div>
                    </section>

                    <section className="mt-16">
                        <h2 className="text-3xl font-bold">Erreurs fréquentes</h2>
                        <div className="mt-5 space-y-3">
                            <ErrorItem text="oublier le taux horaire réel" />
                            <ErrorItem text="oublier les primes ou heures sup" />
                            <ErrorItem text="ne pas inclure l’acompte dans le raisonnement" />
                        </div>
                    </section>

                    <section className="mt-16">
                        <h2 className="text-2xl font-bold">Aller plus loin</h2>
                        <div className="mt-6 grid gap-4 md:grid-cols-3">
                            <LinkCard href="/taux-horaire-interim-net" title="Taux horaire net" />
                            <LinkCard href="/smic-interim-net" title="SMIC intérim net" />
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