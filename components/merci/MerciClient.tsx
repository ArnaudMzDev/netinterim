"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function MerciClient({
                                        sessionId,
                                    }: {
    sessionId: string | null;
}) {
    const router = useRouter();

    useEffect(() => {
        localStorage.setItem("premium", "true");

        if (sessionId) {
            localStorage.setItem("stripe_last_session_id", sessionId);
        }

        const timeout = setTimeout(() => {
            router.replace("/historique");
        }, 1500);

        return () => clearTimeout(timeout);
    }, [router, sessionId]);

    return (
        <div className="mx-auto max-w-2xl rounded-[32px] border border-emerald-300/20 bg-emerald-400/10 p-8 text-center">
            <p className="text-sm font-medium text-emerald-300">Paiement validé</p>

            <h1 className="mt-4 text-4xl font-black text-white">
                Premium activé
            </h1>

            <p className="mt-4 text-lg leading-8 text-slate-200">
                Ton accès premium est en cours d’activation. Redirection vers ton
                historique…
            </p>

            <button
                type="button"
                onClick={() => router.replace("/historique")}
                className="mt-8 inline-flex rounded-2xl bg-white px-5 py-3 font-semibold text-slate-900 transition hover:opacity-90"
            >
                Aller à mon historique
            </button>
        </div>
    );
}