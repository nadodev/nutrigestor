import { auth } from "@/app/lib/auth";
import stripe from "@/app/lib/stripe";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const session = await auth();
        const userId = session?.user?.id;
        const userEmail = session?.user?.email;

        if (!session || !userId || !userEmail) {
            return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
        }

        const price = process.env.STRIPE_PRICE_ID;
        console.log("PRICE", price);
        
        if (!price) {
            return NextResponse.json({ error: "Preço não encontrado" }, { status: 404 });
        }

        console.log("Criando checkout...");
        const stripeSession = await stripe.checkout.sessions.create({
            line_items: [
                { price, quantity: 1 },
            ],
            mode: "payment",
            payment_method_types: ["card", "boleto"],
            success_url: `${process.env.NEXT_PUBLIC_APP_URL}/success`,
            cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/cancel`,
            customer_email: userEmail,
            metadata: {
                userId,
            }
        });

        if (!stripeSession.url) {
            return NextResponse.json({ error: "URL do checkout não encontrada" }, { status: 500 });
        }

        return NextResponse.json({ sessionId: stripeSession.id }, { status: 200 });

    } catch (e) {
        console.error("Erro ao criar checkout com Stripe:", e);
        if (e instanceof Error) {
            console.error("Detalhes do erro:", e.message);
        }
        return NextResponse.json({ 
            error: "Erro ao criar checkout com Stripe",
            details: e instanceof Error ? e.message : "Erro desconhecido"
        }, { status: 500 });
    }
}