import Link from "next/link";
import CalculatorForm from "@/components/calculator/CalculatorForm";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function HomePage() {
    return (
        <main className="pb-20 pt-8 md:pt-12">
            <div className="container-app">
                <Header />

                <section className="grid gap-10 lg:grid-cols-[1fr_420px] lg:items-center">
                    <div>
                        <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm font-medium text-slate-200">
                            Outil pensé pour les intérimaires en France
                        </div>

                        <h1 className="mt-6 max-w-4xl text-5xl font-black tracking-tight text-white md:text-6xl">
                            Calcule ton salaire d’intérim,{" "}
                            <span className="gradient-text">
                ton net estimé, tes IFM et ton reste après acompte
              </span>
                        </h1>

                        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                            NetInterim t’aide à estimer rapidement ton brut, ton net
                            indicatif, tes heures supplémentaires, tes congés payés et ce
                            qu’il te reste à recevoir. Le tout dans une interface claire,
                            pensée pour vérifier une paie sans se perdre.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-3">
                            <a
                                href="#calculateur"
                                className="rounded-2xl bg-white px-5 py-3 font-semibold text-slate-900 transition hover:opacity-90"
                            >
                                Commencer le calcul
                            </a>

                            <Link
                                href="/calcul-salaire-interim"
                                className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 font-semibold text-white transition hover:bg-white/10"
                            >
                                Voir le guide complet
                            </Link>

                            <Link
                                href="/pricing"
                                className="rounded-2xl border border-emerald-300/20 bg-emerald-400/10 px-5 py-3 font-semibold text-emerald-300 transition hover:bg-emerald-400/15"
                            >
                                Découvrir Premium
                            </Link>
                        </div>

                        <div className="mt-8 grid max-w-3xl gap-3 sm:grid-cols-3">
                            <TrustCard
                                title="IFM intégrées"
                                text="L’indemnité de fin de mission est prise en compte dans le calcul."
                            />
                            <TrustCard
                                title="Acompte inclus"
                                text="Visualise rapidement ce qu’il te reste à toucher."
                            />
                            <TrustCard
                                title="Historique Premium"
                                text="Retrouve tes simulations et compare tes estimations."
                            />
                        </div>
                    </div>

                    <div className="glass soft-shadow rounded-[32px] p-6">
                        <p className="text-sm font-medium text-slate-300">
                            Exemple de simulation
                        </p>

                        <div className="mt-5 space-y-4">
                            <PreviewLine title="Brut mission" value="1 802,20 €" />
                            <PreviewLine title="IFM" value="180,22 €" />
                            <PreviewLine title="Congés payés" value="198,24 €" />
                            <PreviewLine title="Net estimé" value="1 700,00 € env." strong />
                        </div>

                        <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
                            <p className="text-sm font-medium text-white">
                                Ce que calcule NetInterim
                            </p>
                            <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-300">
                                <li>• salaire brut de base</li>
                                <li>• heures supplémentaires à 25 % et 50 %</li>
                                <li>• indemnité de fin de mission</li>
                                <li>• congés payés</li>
                                <li>• net estimatif</li>
                                <li>• reste après acompte</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section id="calculateur" className="mt-16">
                    <CalculatorForm />
                </section>

                <section className="mt-16 grid gap-5 md:grid-cols-3">
                    <InfoCard
                        title="Une estimation rapide"
                        text="Renseigne ton taux horaire, tes heures, tes primes et ton acompte pour obtenir un résultat lisible immédiatement."
                    />
                    <InfoCard
                        title="Un calcul plus compréhensible"
                        text="Le détail du brut, des IFM, des congés payés et du net estimatif est affiché clairement, ligne par ligne."
                    />
                    <InfoCard
                        title="Un suivi plus avancé en Premium"
                        text="L’historique des simulations permet de comparer plusieurs périodes et de suivre plus facilement tes montants."
                    />
                </section>

                <section className="mt-16 grid gap-6 lg:grid-cols-[1fr_1fr]">
                    <div className="glass rounded-[28px] p-6">
                        <h2 className="text-2xl font-bold text-white">
                            À qui sert NetInterim ?
                        </h2>

                        <div className="mt-5 space-y-3 text-slate-300">
                            <p>• aux intérimaires qui veulent vérifier leur paie rapidement</p>
                            <p>• à ceux qui veulent estimer un acompte ou un reste à toucher</p>
                            <p>
                                • à ceux qui veulent mieux comprendre IFM, congés payés et heures
                                sup
                            </p>
                        </div>
                    </div>

                    <div className="glass rounded-[28px] p-6">
                        <h2 className="text-2xl font-bold text-white">
                            Questions fréquentes
                        </h2>

                        <div className="mt-5 space-y-4">
                            <FaqItem
                                question="Le net affiché est-il exact ?"
                                answer="Non. Il s’agit d’une estimation basée sur un coefficient. Le montant réel peut varier selon les cotisations et la situation."
                            />
                            <FaqItem
                                question="Les IFM sont-elles incluses ?"
                                answer="Oui, si l’option est activée dans le calculateur."
                            />
                            <FaqItem
                                question="Puis-je suivre plusieurs simulations ?"
                                answer="Oui, avec l’historique Premium."
                            />
                        </div>
                    </div>
                </section>

                <section className="mt-16">
                    <h2 className="text-2xl font-bold text-white">Aller plus loin</h2>

                    <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                        <Link
                            href="/calcul-salaire-interim"
                            className="glass rounded-2xl p-5 transition hover:bg-white/10"
                        >
                            <p className="font-semibold text-white">Calcul salaire intérim</p>
                            <p className="mt-2 text-sm text-slate-300">
                                Guide complet pour estimer brut, net, IFM et acompte.
                            </p>
                        </Link>

                        <Link
                            href="/calcul-ifm-interim"
                            className="glass rounded-2xl p-5 transition hover:bg-white/10"
                        >
                            <p className="font-semibold text-white">Calcul IFM intérim</p>
                            <p className="mt-2 text-sm text-slate-300">
                                Comprendre l’indemnité de fin de mission.
                            </p>
                        </Link>

                        <Link
                            href="/conges-payes-interim"
                            className="glass rounded-2xl p-5 transition hover:bg-white/10"
                        >
                            <p className="font-semibold text-white">Congés payés intérim</p>
                            <p className="mt-2 text-sm text-slate-300">
                                Voir comment estimer le montant en fin de mission.
                            </p>
                        </Link>

                        <Link
                            href="/heures-supplementaires-interim"
                            className="glass rounded-2xl p-5 transition hover:bg-white/10"
                        >
                            <p className="font-semibold text-white">
                                Heures supplémentaires
                            </p>
                            <p className="mt-2 text-sm text-slate-300">
                                Comprendre les majorations à 25 % et 50 %.
                            </p>
                        </Link>
                    </div>
                </section>

                <section className="mt-16">
                    <h2 className="text-2xl font-bold text-white">
                        Recherches fréquentes
                    </h2>

                    <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                        <Link
                            href="/1500-brut-interim-net"
                            className="glass rounded-2xl p-5 transition hover:bg-white/10"
                        >
                            <p className="font-semibold text-white">1500 brut en net</p>
                            <p className="mt-2 text-sm text-slate-300">
                                Voir une estimation simple en intérim.
                            </p>
                        </Link>

                        <Link
                            href="/1800-brut-interim-net"
                            className="glass rounded-2xl p-5 transition hover:bg-white/10"
                        >
                            <p className="font-semibold text-white">1800 brut en net</p>
                            <p className="mt-2 text-sm text-slate-300">
                                Estimer rapidement le net en intérim.
                            </p>
                        </Link>

                        <Link
                            href="/2000-brut-interim-net"
                            className="glass rounded-2xl p-5 transition hover:bg-white/10"
                        >
                            <p className="font-semibold text-white">2000 brut en net</p>
                            <p className="mt-2 text-sm text-slate-300">
                                Comprendre le brut, le net et les extras.
                            </p>
                        </Link>

                        <Link
                            href="/smic-interim-net"
                            className="glass rounded-2xl p-5 transition hover:bg-white/10"
                        >
                            <p className="font-semibold text-white">SMIC intérim net</p>
                            <p className="mt-2 text-sm text-slate-300">
                                Estimation du net au SMIC en intérim.
                            </p>
                        </Link>

                        <Link
                            href="/calcul-acompte-interim-75"
                            className="glass rounded-2xl p-5 transition hover:bg-white/10"
                        >
                            <p className="font-semibold text-white">Acompte 75 %</p>
                            <p className="mt-2 text-sm text-slate-300">
                                Comprendre ce que représente une avance.
                            </p>
                        </Link>

                        <Link
                            href="/combien-reste-apres-acompte-interim"
                            className="glass rounded-2xl p-5 transition hover:bg-white/10"
                        >
                            <p className="font-semibold text-white">Reste après acompte</p>
                            <p className="mt-2 text-sm text-slate-300">
                                Calculer ce qu’il reste à recevoir.
                            </p>
                        </Link>

                        <Link
                            href="/pourquoi-mon-acompte-interim-est-plus-bas-que-prevu"
                            className="glass rounded-2xl p-5 transition hover:bg-white/10"
                        >
                            <p className="font-semibold text-white">
                                Acompte plus bas que prévu
                            </p>
                            <p className="mt-2 text-sm text-slate-300">
                                Comprendre pourquoi ton acompte semble faible.
                            </p>
                        </Link>

                        <Link
                            href="/comment-lire-sa-fiche-de-paie-interim"
                            className="glass rounded-2xl p-5 transition hover:bg-white/10"
                        >
                            <p className="font-semibold text-white">
                                Lire sa fiche de paie intérim
                            </p>
                            <p className="mt-2 text-sm text-slate-300">
                                Guide simple pour comprendre ta paie.
                            </p>
                        </Link>

                        <Link
                            href="/fin-de-mission-interim-combien-je-vais-toucher"
                            className="glass rounded-2xl p-5 transition hover:bg-white/10"
                        >
                            <p className="font-semibold text-white">
                                Fin de mission : combien toucher
                            </p>
                            <p className="mt-2 text-sm text-slate-300">
                                Estimer ce que tu vas recevoir.
                            </p>
                        </Link>
                    </div>
                </section>

                <Footer />
            </div>
        </main>
    );
}

function TrustCard({
                       title,
                       text,
                   }: {
    title: string;
    text: string;
}) {
    return (
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="text-base font-semibold text-white">{title}</p>
            <p className="mt-2 text-sm leading-6 text-slate-400">{text}</p>
        </div>
    );
}

function PreviewLine({
                         title,
                         value,
                         strong = false,
                     }: {
    title: string;
    value: string;
    strong?: boolean;
}) {
    return (
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
            <span className="text-sm text-slate-300">{title}</span>
            <span
                className={
                    strong
                        ? "text-base font-bold text-white"
                        : "text-sm font-semibold text-white"
                }
            >
        {value}
      </span>
        </div>
    );
}

function InfoCard({
                      title,
                      text,
                  }: {
    title: string;
    text: string;
}) {
    return (
        <div className="glass rounded-3xl p-5">
            <h3 className="text-lg font-semibold text-white">{title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">{text}</p>
        </div>
    );
}

function FaqItem({
                     question,
                     answer,
                 }: {
    question: string;
    answer: string;
}) {
    return (
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="font-medium text-white">{question}</p>
            <p className="mt-2 text-sm leading-6 text-slate-300">{answer}</p>
        </div>
    );
}