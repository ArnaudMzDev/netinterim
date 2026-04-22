"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { euro } from "@/lib/format";
import { usePremium } from "@/lib/usePremium";
import {
    clearSimulationHistory,
    deleteSimulation,
    getSimulationHistory,
    SavedSimulation,
} from "@/lib/useSimulationHistory";

export default function HistoriquePage() {
    const { isPremium, isLoaded } = usePremium();
    const [history, setHistory] = useState<SavedSimulation[]>([]);

    useEffect(() => {
        if (isPremium) {
            setHistory(getSimulationHistory());
        }
    }, [isPremium]);

    function handleDelete(id: string) {
        deleteSimulation(id);
        setHistory(getSimulationHistory());
    }

    function handleClear() {
        clearSimulationHistory();
        setHistory([]);
    }

    if (!isLoaded) {
        return (
            <main className="pb-20 pt-16">
                <div className="container-app">
                    <div className="glass rounded-[32px] p-8 text-center">
                        <p className="text-slate-300">Chargement…</p>
                    </div>
                </div>
            </main>
        );
    }

    if (!isPremium) {
        return (
            <main className="pb-20 pt-16">
                <div className="container-app">
                    <div className="mx-auto max-w-2xl rounded-[32px] border border-emerald-300/20 bg-emerald-400/10 p-8 text-center">
                        <p className="text-sm font-medium text-emerald-300">
                            Accès Premium requis
                        </p>

                        <h1 className="mt-4 text-4xl font-black text-white">
                            Historique verrouillé
                        </h1>

                        <p className="mt-4 text-lg leading-8 text-slate-200">
                            Débloque l’historique des simulations pour suivre tes paies,
                            comparer tes estimations et garder une trace de tes calculs.
                        </p>

                        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                            <Link
                                href="/pricing"
                                className="rounded-2xl bg-white px-5 py-3 font-semibold text-slate-900 transition hover:opacity-90"
                            >
                                Débloquer Premium
                            </Link>

                            <Link
                                href="/"
                                className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 font-semibold text-white transition hover:bg-white/10"
                            >
                                Retour au calculateur
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        );
    }

    return (
        <main className="pb-20 pt-12">
            <div className="container-app">
                <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                    <div>
                        <p className="text-sm font-medium text-emerald-300">
                            Espace Premium
                        </p>
                        <h1 className="mt-2 text-4xl font-black text-white">
                            Historique des simulations
                        </h1>
                        <p className="mt-3 max-w-2xl text-slate-300">
                            Retrouve toutes tes estimations enregistrées, compare tes montants
                            et garde une trace claire de tes paies d’intérim.
                        </p>
                    </div>

                    {history.length > 0 && (
                        <button
                            type="button"
                            onClick={handleClear}
                            className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white transition hover:bg-white/10"
                        >
                            Tout supprimer
                        </button>
                    )}
                </div>

                {history.length === 0 ? (
                    <div className="mt-10 rounded-[32px] border border-white/10 bg-white/5 p-8 text-center">
                        <h2 className="text-2xl font-bold text-white">
                            Aucun calcul sauvegardé
                        </h2>
                        <p className="mt-3 text-slate-300">
                            Fais une simulation depuis le calculateur puis enregistre-la pour
                            la retrouver ici.
                        </p>

                        <Link
                            href="/"
                            className="mt-6 inline-flex rounded-2xl bg-white px-5 py-3 font-semibold text-slate-900 transition hover:opacity-90"
                        >
                            Faire une simulation
                        </Link>
                    </div>
                ) : (
                    <div className="mt-10 grid gap-5">
                        {history.map((item) => (
                            <HistoryCard
                                key={item.id}
                                item={item}
                                onDelete={() => handleDelete(item.id)}
                            />
                        ))}
                    </div>
                )}
            </div>
        </main>
    );
}

function HistoryCard({
                         item,
                         onDelete,
                     }: {
    item: SavedSimulation;
    onDelete: () => void;
}) {
    const date = new Date(item.createdAt).toLocaleString("fr-FR");

    return (
        <article className="glass soft-shadow rounded-[28px] p-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div>
                    <p className="text-sm text-slate-400">{date}</p>
                    <h2 className="mt-2 text-2xl font-bold text-white">
                        Net estimé : {euro(item.result.netEstime)}
                    </h2>
                    <p className="mt-2 text-sm text-slate-300">
                        Reste après acompte : {euro(item.result.reste)}
                    </p>
                </div>

                <button
                    type="button"
                    onClick={onDelete}
                    className="rounded-2xl border border-red-300/20 bg-red-400/10 px-4 py-3 text-sm font-medium text-red-200 transition hover:bg-red-400/15"
                >
                    Supprimer
                </button>
            </div>

            <div className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
                <Stat label="Taux horaire brut" value={`${item.input.tauxHoraireBrut} €`} />
                <Stat label="Heures normales" value={`${item.input.heuresNormales}`} />
                <Stat label="Heures sup 25 %" value={`${item.input.heuresSup25}`} />
                <Stat label="Heures sup 50 %" value={`${item.input.heuresSup50}`} />
                <Stat label="Primes brutes" value={euro(item.input.primesBrutes)} />
                <Stat label="Acompte" value={euro(item.input.acompte)} />
                <Stat label="IFM" value={euro(item.result.ifm)} />
                <Stat label="Congés payés" value={euro(item.result.icp)} />
                <Stat label="Total brut" value={euro(item.result.totalBrut)} />
                <Stat label="Brut mission" value={euro(item.result.brutMission)} />
                <Stat
                    label="Profil net"
                    value={item.input.netProfile.charAt(0).toUpperCase() + item.input.netProfile.slice(1)}
                />
                <Stat
                    label="Coefficient"
                    value={String(item.result.coefficientNet)}
                />
            </div>
        </article>
    );
}

function Stat({
                  label,
                  value,
              }: {
    label: string;
    value: string;
}) {
    return (
        <div className="rounded-2xl border border-white/8 bg-white/5 px-4 py-3">
            <p className="text-xs uppercase tracking-wide text-slate-400">{label}</p>
            <p className="mt-2 text-sm font-semibold text-white">{value}</p>
        </div>
    );
}