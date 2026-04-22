import Link from "next/link";
import { euro } from "@/lib/format";
import { CalculatorResult } from "@/lib/types";

export default function CalculatorResults({
                                              result,
                                          }: {
    result: CalculatorResult;
}) {
    return (
        <div className="space-y-5">
            <section className="glass soft-shadow rounded-3xl p-6">
                <div className="flex items-start justify-between gap-4">
                    <div>
                        <p className="text-sm text-slate-300">Net estimé</p>
                        <h3 className="mt-2 text-3xl font-bold tracking-tight text-white">
                            {euro(result.netEstime)}
                        </h3>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-right">
                        <p className="text-xs uppercase tracking-wide text-slate-400">
                            Reste après acompte
                        </p>
                        <p className="mt-1 text-xl font-semibold text-emerald-300">
                            {euro(result.reste)}
                        </p>
                    </div>
                </div>

                <div className="mt-6 grid gap-3">
                    <Row label="Salaire brut de base" value={euro(result.baseBrut)} />
                    <Row label="Heures supplémentaires 25 %" value={euro(result.hs25)} />
                    <Row label="Heures supplémentaires 50 %" value={euro(result.hs50)} />
                    <Row label="Brut mission" value={euro(result.brutMission)} />
                    <Row label="IFM" value={euro(result.ifm)} />
                    <Row label="Congés payés" value={euro(result.icp)} />
                    <Row label="Total brut estimé" value={euro(result.totalBrut)} />
                    <Row
                        label={`Coefficient net estimatif (${result.coefficientNet})`}
                        value="Mode indicatif"
                    />
                </div>
            </section>

            <section className="rounded-3xl border border-amber-300/20 bg-amber-400/10 p-5">
                <h4 className="text-sm font-semibold text-amber-200">Important</h4>
                <p className="mt-2 text-sm leading-6 text-amber-50/85">
                    Le net affiché ici est une estimation. Le montant réel peut varier
                    selon les cotisations, la convention collective, les primes, les
                    retenues, la mutuelle, les absences ou les spécificités de la mission.
                </p>
            </section>

            <section className="glass rounded-3xl p-5">
                <h4 className="text-sm font-semibold text-white">
                    Comprendre le calcul
                </h4>

                <div className="mt-4 space-y-3">
                    <Formula
                        label="Brut mission"
                        value={`${euro(result.baseBrut)} + ${euro(result.hs25)} + ${euro(
                            result.hs50
                        )}`}
                    />
                    <Formula label="IFM" value={euro(result.ifm)} />
                    <Formula label="Congés payés" value={euro(result.icp)} />
                    <Formula label="Total brut" value={euro(result.totalBrut)} />
                    <Formula label="Net estimé" value={euro(result.netEstime)} />
                </div>
            </section>

            <section className="glass rounded-3xl p-5">
                <h4 className="text-sm font-semibold text-white">Version Premium</h4>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                    Débloque l’historique des simulations, la comparaison acompte / paie,
                    l’export PDF et les vues avancées.
                </p>

                <Link
                    href="/pricing"
                    className="mt-4 inline-flex items-center justify-center rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-slate-900 transition hover:opacity-90"
                >
                    Débloquer Premium
                </Link>
            </section>
        </div>
    );
}

function Row({
                 label,
                 value,
             }: {
    label: string;
    value: string;
}) {
    return (
        <div className="flex items-center justify-between gap-4 rounded-2xl border border-white/8 bg-white/5 px-4 py-3">
            <span className="text-sm text-slate-300">{label}</span>
            <span className="text-sm font-semibold text-white">{value}</span>
        </div>
    );
}

function Formula({
                     label,
                     value,
                 }: {
    label: string;
    value: string;
}) {
    return (
        <div className="flex items-center justify-between gap-4 rounded-2xl border border-white/8 bg-white/5 px-4 py-3">
            <span className="text-sm text-slate-300">{label}</span>
            <span className="text-sm font-medium text-white">{value}</span>
        </div>
    );
}