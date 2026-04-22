import { CalculatorInput, CalculatorResult, NetProfile } from "./types";

function round2(value: number): number {
    return Math.round(value * 100) / 100;
}

function getCoefficient(profile: NetProfile): number {
    switch (profile) {
        case "prudent":
            return 0.75;
        case "haut":
            return 0.81;
        case "standard":
        default:
            return 0.78;
    }
}

export function calculate(data: CalculatorInput): CalculatorResult {
    const tauxHoraireBrut = Math.max(0, Number(data.tauxHoraireBrut) || 0);
    const heuresNormales = Math.max(0, Number(data.heuresNormales) || 0);
    const heuresSup25 = Math.max(0, Number(data.heuresSup25) || 0);
    const heuresSup50 = Math.max(0, Number(data.heuresSup50) || 0);
    const primesBrutes = Math.max(0, Number(data.primesBrutes) || 0);
    const acompte = Math.max(0, Number(data.acompte) || 0);

    const baseBrut = tauxHoraireBrut * heuresNormales;
    const hs25 = tauxHoraireBrut * 1.25 * heuresSup25;
    const hs50 = tauxHoraireBrut * 1.5 * heuresSup50;

    const brutMission = baseBrut + hs25 + hs50 + primesBrutes;
    const ifm = data.inclureIFM ? brutMission * 0.1 : 0;
    const icp = data.inclureICP ? (brutMission + ifm) * 0.1 : 0;

    const totalBrut = brutMission + ifm + icp;
    const coefficientNet = getCoefficient(data.netProfile);
    const netEstime = totalBrut * coefficientNet;
    const reste = Math.max(0, netEstime - acompte);

    return {
        baseBrut: round2(baseBrut),
        hs25: round2(hs25),
        hs50: round2(hs50),
        brutMission: round2(brutMission),
        ifm: round2(ifm),
        icp: round2(icp),
        totalBrut: round2(totalBrut),
        coefficientNet: round2(coefficientNet),
        netEstime: round2(netEstime),
        reste: round2(reste),
    };
}