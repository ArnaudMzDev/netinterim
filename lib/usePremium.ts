"use client";

import { useEffect, useState } from "react";

export function usePremium() {
    const [isPremium, setIsPremium] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const premium = localStorage.getItem("premium");
        setIsPremium(premium === "true");
        setIsLoaded(true);
    }, []);

    function activatePremium() {
        localStorage.setItem("premium", "true");
        setIsPremium(true);
    }

    function deactivatePremium() {
        localStorage.removeItem("premium");
        setIsPremium(false);
    }

    return {
        isPremium,
        isLoaded,
        activatePremium,
        deactivatePremium,
    };
}