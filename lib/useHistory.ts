"use client";

export function saveSimulation(data: any) {
    const history = JSON.parse(localStorage.getItem("history") || "[]");
    history.unshift({
        ...data,
        date: new Date().toISOString(),
    });
    localStorage.setItem("history", JSON.stringify(history));
}

export function getHistory() {
    return JSON.parse(localStorage.getItem("history") || "[]");
}