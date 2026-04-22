import { NextResponse } from "next/server";
import Stripe from "stripe";

function getStripeClient() {
    const secretKey = process.env.STRIPE_SECRET_KEY;

    if (!secretKey) {
        throw new Error("STRIPE_SECRET_KEY manquante.");
    }

    return new Stripe(secretKey);
}

export async function POST() {
    try {
        const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
        const priceId = process.env.STRIPE_PRICE_PREMIUM_MONTHLY;

        if (!siteUrl) {
            return NextResponse.json(
                { error: "NEXT_PUBLIC_SITE_URL manquante." },
                { status: 500 }
            );
        }

        if (!priceId) {
            return NextResponse.json(
                { error: "STRIPE_PRICE_PREMIUM_MONTHLY manquante." },
                { status: 500 }
            );
        }

        const stripe = getStripeClient();

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

        return NextResponse.json({ url: session.url });
    } catch (error) {
        console.error("Stripe checkout error:", error);

        return NextResponse.json(
            {
                error:
                    error instanceof Error
                        ? error.message
                        : "Impossible de créer la session Stripe.",
            },
            { status: 500 }
        );
    }
}