export type NetProfile = "prudent" | "standard" | "haut";

export interface CalculatorInput {
    tauxHoraireBrut: number;
    heuresNormales: number;
    heuresSup25: number;
    heuresSup50: number;
    primesBrutes: number;
    acompte: number;
    inclureIFM: boolean;
    inclureICP: boolean;
    netProfile: NetProfile;
}

export interface CalculatorResult {
    baseBrut: number;
    hs25: number;
    hs50: number;
    brutMission: number;
    ifm: number;
    icp: number;
    totalBrut: number;
    coefficientNet: number;
    netEstime: number;
    reste: number;
}