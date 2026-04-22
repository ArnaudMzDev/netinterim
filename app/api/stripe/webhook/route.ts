import { headers } from "next/headers";
import { NextResponse } from "next/server";
import Stripe from "stripe";
import {
    activatePremiumUser,
    deactivatePremiumUserByCustomerId,
} from "@/lib/server/premiumStore";

function getStripeClient() {
    const secretKey = process.env.STRIPE_SECRET_KEY;

    if (!secretKey) {
        throw new Error("STRIPE_SECRET_KEY manquante.");
    }

    return new Stripe(secretKey);
}

export async function POST(req: Request) {
    try {
        const body = await req.text();
        const signature = (await headers()).get("stripe-signature");

        if (!signature) {
            return NextResponse.json(
                { error: "Signature Stripe manquante." },
                { status: 400 }
            );
        }

        if (!process.env.STRIPE_WEBHOOK_SECRET) {
            return NextResponse.json(
                { error: "STRIPE_WEBHOOK_SECRET manquante." },
                { status: 500 }
            );
        }

        const stripe = getStripeClient();

        const event = stripe.webhooks.constructEvent(
            body,
            signature,
            process.env.STRIPE_WEBHOOK_SECRET
        );

        switch (event.type) {
            case "checkout.session.completed": {
                const session = event.data.object as Stripe.Checkout.Session;

                const email = session.customer_details?.email;
                const customerId =
                    typeof session.customer === "string" ? session.customer : undefined;
                const subscriptionId =
                    typeof session.subscription === "string"
                        ? session.subscription
                        : undefined;

                if (email) {
                    activatePremiumUser({
                        email,
                        customerId,
                        subscriptionId,
                    });
                }

                break;
            }

            case "customer.subscription.deleted": {
                const subscription = event.data.object as Stripe.Subscription;
                const customerId =
                    typeof subscription.customer === "string"
                        ? subscription.customer
                        : undefined;

                if (customerId) {
                    deactivatePremiumUserByCustomerId(customerId);
                }

                break;
            }

            default:
                break;
        }

        return NextResponse.json({ received: true });
    } catch (error) {
        console.error("Webhook Stripe invalide :", error);

        return NextResponse.json(
            {
                error: error instanceof Error ? error.message : "Webhook invalide.",
            },
            { status: 400 }
        );
    }
}