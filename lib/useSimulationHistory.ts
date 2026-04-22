"use client";

import { CalculatorInput, CalculatorResult } from "@/lib/types";

export type SavedSimulation = {
    id: string;
    createdAt: string;
    input: CalculatorInput;
    result: CalculatorResult;
};

const STORAGE_KEY = "netinterim_history";

function readHistory(): SavedSimulation[] {
    if (typeof window === "undefined") return [];

    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) return [];

        const parsed = JSON.parse(raw);
        return Array.isArray(parsed) ? parsed : [];
    } catch {
        return [];
    }
}

function writeHistory(history: SavedSimulation[]) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
}

export function getSimulationHistory(): SavedSimulation[] {
    return readHistory();
}

export function saveSimulation(
    input: CalculatorInput,
    result: CalculatorResult
): SavedSimulation {
    const history = readHistory();

    const entry: SavedSimulation = {
        id: crypto.randomUUID(),
        createdAt: new Date().toISOString(),
        input,
        result,
    };

    const nextHistory = [entry, ...history].slice(0, 50);
    writeHistory(nextHistory);

    return entry;
}

export function deleteSimulation(id: string) {
    const history = readHistory();
    const nextHistory = history.filter((item) => item.id !== id);
    writeHistory(nextHistory);
}

export function clearSimulationHistory() {
    localStorage.removeItem(STORAGE_KEY);
}