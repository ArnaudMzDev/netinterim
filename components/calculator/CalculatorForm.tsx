"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { calculate } from "@/lib/calculations";
import { CalculatorInput, NetProfile } from "@/lib/types";
import { saveSimulation } from "@/lib/useSimulationHistory";
import { usePremium } from "@/lib/usePremium";
import CalculatorResults from "./CalculatorResults";

const defaultValues: CalculatorInput = {
    tauxHoraireBrut: 11.88,
    heuresNormales: 151.67,
    heuresSup25: 0,
    heuresSup50: 0,
    primesBrutes: 0,
    acompte: 0,
    inclureIFM: true,
    inclureICP: true,
    netProfile: "standard",
};

export default function CalculatorForm() {
    const [form, setForm] = useState<CalculatorInput>(defaultValues);
    const [saveMessage, setSaveMessage] = useState("");
    const { isPremium } = usePremium();

    const result = useMemo(() => calculate(form), [form]);

    function updateField<K extends keyof CalculatorInput>(
        key: K,
        value: CalculatorInput[K]
    ) {
        setForm((prev) => ({
            ...prev,
            [key]: value,
        }));
    }

    function handleSave() {
        if (!isPremium) {
            setSaveMessage("Premium requis pour enregistrer une simulation.");
            return;
        }

        saveSimulation(form, result);
        setSaveMessage("Simulation enregistrée dans l’historique.");
    }

    return (
        <div className="hero-grid">
            <section className="glass soft-shadow rounded-[28px] p-6 md:p-7">
                <div className="flex items-start justify-between gap-4">
                    <div>
                        <p className="text-sm font-medium text-emerald-300">
                            Simulation rapide
                        </p>
                        <h2 className="mt-2 text-2xl font-bold text-white">
                            Calcule ta paie d’intérim
                        </h2>
                        <p className="mt-3 max-w-xl text-sm leading-6 text-slate-300">
                            Entre tes heures, ton taux brut, tes primes et ton acompte pour
                            obtenir une estimation claire de ton brut, de tes IFM, de tes
                            congés payés et de ton net.
                        </p>
                    </div>
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    <NumberField
                        label="Taux horaire brut"
                        value={form.tauxHoraireBrut}
                        step="0.01"
                        onChange={(value) => updateField("tauxHoraireBrut", value)}
                    />

                    <NumberField
                        label="Heures normales"
                        value={form.heuresNormales}
                        step="0.01"
                        onChange={(value) => updateField("heuresNormales", value)}
                    />

                    <NumberField
                        label="Heures sup à 25 %"
                        value={form.heuresSup25}
                        step="0.01"
                        onChange={(value) => updateField("heuresSup25", value)}
                    />

                    <NumberField
                        label="Heures sup à 50 %"
                        value={form.heuresSup50}
                        step="0.01"
                        onChange={(value) => updateField("heuresSup50", value)}
                    />

                    <NumberField
                        label="Primes brutes"
                        value={form.primesBrutes}
                        step="0.01"
                        onChange={(value) => updateField("primesBrutes", value)}
                    />

                    <NumberField
                        label="Acompte déjà reçu"
                        value={form.acompte}
                        step="0.01"
                        onChange={(value) => updateField("acompte", value)}
                    />
                </div>

                <div className="mt-6 grid gap-4 md:grid-cols-2">
                    <ToggleCard
                        label="Inclure IFM"
                        checked={form.inclureIFM}
                        onChange={(checked) => updateField("inclureIFM", checked)}
                    />

                    <ToggleCard
                        label="Inclure congés payés"
                        checked={form.inclureICP}
                        onChange={(checked) => updateField("inclureICP", checked)}
                    />
                </div>

                <div className="mt-6">
                    <label className="mb-2 block text-sm font-medium text-slate-200">
                        Profil net estimatif
                    </label>

                    <select
                        value={form.netProfile}
                        onChange={(e) =>
                            updateField("netProfile", e.target.value as NetProfile)
                        }
                        className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none"
                    >
                        <option value="prudent" className="text-slate-900">
                            Prudent
                        </option>
                        <option value="standard" className="text-slate-900">
                            Standard
                        </option>
                        <option value="haut" className="text-slate-900">
                            Haut
                        </option>
                    </select>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                    <button
                        type="button"
                        onClick={() => {
                            setForm(defaultValues);
                            setSaveMessage("");
                        }}
                        className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white transition hover:bg-white/10"
                    >
                        Réinitialiser
                    </button>

                    <button
                        type="button"
                        onClick={handleSave}
                        className="rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-slate-900 transition hover:opacity-90"
                    >
                        Enregistrer la simulation
                    </button>

                    <Link
                        href="/historique"
                        className="rounded-2xl border border-emerald-300/20 bg-emerald-400/10 px-4 py-3 text-sm font-medium text-emerald-300 transition hover:bg-emerald-400/15"
                    >
                        Voir mon historique
                    </Link>
                </div>

                {saveMessage && (
                    <p className="mt-4 text-sm text-emerald-300">{saveMessage}</p>
                )}
            </section>

            <CalculatorResults result={result} />
        </div>
    );
}

function NumberField({
                         label,
                         value,
                         onChange,
                         step = "0.01",
                     }: {
    label: string;
    value: number;
    onChange: (value: number) => void;
    step?: string;
}) {
    return (
        <label>
      <span className="mb-2 block text-sm font-medium text-slate-200">
        {label}
      </span>

            <input
                type="number"
                min="0"
                step={step}
                value={Number.isFinite(value) ? value : 0}
                onChange={(e) => onChange(Number(e.target.value))}
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-slate-400"
            />
        </label>
    );
}

function ToggleCard({
                        label,
                        checked,
                        onChange,
                    }: {
    label: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
}) {
    return (
        <label className="flex cursor-pointer items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
            <span className="text-sm font-medium text-white">{label}</span>

            <input
                type="checkbox"
                checked={checked}
                onChange={(e) => onChange(e.target.checked)}
                className="h-5 w-5"
            />
        </label>
    );
}