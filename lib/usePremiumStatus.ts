"use client";

import { useEffect, useState } from "react";

export function usePremiumStatus() {
    const [email, setEmail] = useState("");
    const [isPremium, setIsPremium] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const savedEmail = localStorage.getItem("premium_email") || "";
        setEmail(savedEmail);

        async function check() {
            if (!savedEmail) {
                setIsLoaded(true);
                return;
            }

            try {
                const res = await fetch(
                    `/api/premium/status?email=${encodeURIComponent(savedEmail)}`
                );
                const data = await res.json();
                setIsPremium(Boolean(data?.premium));
            } catch {
                setIsPremium(false);
            } finally {
                setIsLoaded(true);
            }
        }

        check();
    }, []);

    function saveEmail(nextEmail: string) {
        localStorage.setItem("premium_email", nextEmail);
        setEmail(nextEmail);
    }

    return {
        email,
        isPremium,
        isLoaded,
        saveEmail,
    };
}