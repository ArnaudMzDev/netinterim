import type { Metadata } from "next";
import StripeCheckoutButton from "@/components/pricing/StripeCheckoutButton";

export const metadata: Metadata = {
    title: "Premium | NetInterim",
    description:
        "Débloquez NetInterim Premium : historique, simulation avancée, comparaison de paie et export PDF.",
};

export default function PricingPage() {
    return (
        <main className="pb-20 pt-10">
            <div className="container-app">
                <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-emerald-300/20 bg-emerald-400/10 px-3 py-1 text-sm font-medium text-emerald-300">
            Offre Premium
          </span>

                    <h1 className="mt-6 text-4xl font-black tracking-tight text-white md:text-5xl">
                        Passe à NetInterim Premium
                    </h1>

                    <p className="mt-4 text-lg leading-8 text-slate-300">
                        Débloque les fonctions qui font gagner du temps aux intérimaires
                        qui veulent suivre leur paie sérieusement.
                    </p>
                </div>

                <div className="mx-auto mt-10 max-w-5xl">
                    <div className="glass soft-shadow grid gap-8 rounded-[32px] p-8 lg:grid-cols-[1fr_360px]">
                        <div>
                            <h2 className="text-2xl font-bold text-white">
                                Ce que tu débloques
                            </h2>

                            <div className="mt-6 grid gap-4 sm:grid-cols-2">
                                <Feature text="Historique des simulations" />
                                <Feature text="Comparaison acompte / paie estimée" />
                                <Feature text="Simulation détaillée de fin de mission" />
                                <Feature text="Vue avancée des calculs" />
                                <Feature text="Export PDF" />
                                <Feature text="Support prioritaire plus tard" />
                            </div>
                        </div>

                        <PricingCard />
                    </div>
                </div>
            </div>
        </main>
    );
}

function Feature({ text }: { text: string }) {
    return (
        <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-slate-200">
            {text}
        </div>
    );
}

function PricingCard() {
    return (
        <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">
            <p className="text-sm font-medium text-slate-300">Abonnement mensuel</p>

            <div className="mt-4 flex items-end gap-2">
                <span className="text-4xl font-black text-white">4,99€</span>
                <span className="pb-1 text-slate-400">/mois</span>
            </div>

            <p className="mt-4 text-sm leading-6 text-slate-300">
                Version recommandée pour suivre ses acomptes, sa fin de mission et
                garder une trace claire de ses estimations.
            </p>

            <StripeCheckoutButton />

            <p className="mt-4 text-xs leading-5 text-slate-400">
                Paiement sécurisé via Stripe. Tu pourras faire évoluer le prix plus
                tard sans toucher à tout le front.
            </p>
        </div>
    );
}