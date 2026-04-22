import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "");

export async function POST() {
    try {
        const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
        const priceId = process.env.STRIPE_PRICE_PREMIUM_MONTHLY;
        const secretKey = process.env.STRIPE_SECRET_KEY;

        if (!secretKey) {
            console.error("Erreur: STRIPE_SECRET_KEY manquante");
            return NextResponse.json(
                { error: "STRIPE_SECRET_KEY manquante." },
                { status: 500 }
            );
        }

        if (!siteUrl) {
            console.error("Erreur: NEXT_PUBLIC_SITE_URL manquante");
            return NextResponse.json(
                { error: "NEXT_PUBLIC_SITE_URL manquante." },
                { status: 500 }
            );
        }

        if (!priceId) {
            console.error("Erreur: STRIPE_PRICE_PREMIUM_MONTHLY manquante");
            return NextResponse.json(
                { error: "STRIPE_PRICE_PREMIUM_MONTHLY manquante." },
                { status: 500 }
            );
        }

        console.log("Stripe debug:", {
            siteUrl,
            priceId,
            secretKeyPrefix: secretKey.slice(0, 12),
        });

        const session = await stripe.checkout.sessions.create({
            mode: "subscription",
            line_items: [
                {
                    price: priceId,
                    quantity: 1,
                },
            ],
            success_url: `${siteUrl}/merci?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${siteUrl}/pricing`,
            allow_promotion_codes: true,
            billing_address_collection: "auto",
        });

        console.log("Session Stripe créée:", session.id);

        return NextResponse.json({ url: session.url });
    } catch (error) {
        console.error("Stripe checkout error:", error);

        return NextResponse.json(
            {
                error: "Impossible de créer la session Stripe.",
                details: error instanceof Error ? error.message : "Erreur inconnue",
            },
            { status: 500 }
        );
    }
}