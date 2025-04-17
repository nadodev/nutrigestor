import stripe from "@/app/lib/stripe";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const { testeId, userEmail } = await req.json();

    const price = process.env.STRIPE_PRICE_ID;

    if(!price) {
        return NextResponse.json({ error: "Preço não encontrado" }, { status: 404 });
    }

    const metadata = {
        testeId,
    }

    try {

        const session = await stripe.checkout.sessions.create({
            line_items: [
                { price, quantity: 1 },
            ],
            mode: "payment",
            payment_method_types: ["card", "boleto", "paypal"],
            success_url: `${process.env.NEXT_PUBLIC_APP_URL}/success`,
            cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/cancel`,
            ...(userEmail && { customer_email: userEmail }),
            metadata,
        });


        if(!session.url) {
            return NextResponse.json({ error: "URL do checkout não encontrada" }, { status: 500 });
        }

        return NextResponse.json({ id: session.id }, { status: 200 });


    }catch(e) {
        console.error("Erro ao criar checkout com Stripe", e);
        return NextResponse.json({ error: "Erro ao criar checkout com Stripe" }, { status: 500 });
    }
}