"use client";

import { useState } from "react";

export default function StripeCheckoutButton() {
    const [loading, setLoading] = useState(false);

    async function handleCheckout() {
        try {
            setLoading(true);

            const res = await fetch("/api/stripe/checkout", {
                method: "POST",
            });

            const data = await res.json();

            if (data?.url) {
                window.location.href = data.url;
                return;
            }

            alert("Impossible de lancer le paiement.");
        } catch (error) {
            console.error("Erreur Stripe Checkout :", error);
            alert("Une erreur est survenue.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <button
            type="button"
            onClick={handleCheckout}
            disabled={loading}
            className="mt-6 inline-flex w-full items-center justify-center rounded-2xl bg-white px-5 py-3 font-semibold text-slate-900 transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
        >
            {loading ? "Redirection..." : "Débloquer Premium"}
        </button>
    );
}