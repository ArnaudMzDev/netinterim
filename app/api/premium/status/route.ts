import { NextResponse } from "next/server";
import { isPremiumEmail } from "@/lib/server/premiumStore";

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const email = searchParams.get("email");

    if (!email) {
        return NextResponse.json(
            { error: "Email manquant." },
            { status: 400 }
        );
    }

    return NextResponse.json({
        premium: isPremiumEmail(email),
    });
}