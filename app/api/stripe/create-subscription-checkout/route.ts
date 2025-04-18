import { auth } from "@/app/lib/auth";
import stripe from "@/app/lib/stripe";
import { getOrCreateCustomerId } from "@/app/server/stripe/getOrCreateCustomerId";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        console.log("Iniciando criação de checkout...");
        
        const price = process.env.STRIPE_PRICE_SUBSCRIPTION_ID;
        console.log("Price ID:", price);

        if (!price) {
            console.error("Preço não encontrado");
            return NextResponse.json({ error: "Preço não encontrado" }, { status: 404 });
        }

        console.log("Verificando autenticação...");
        const session = await auth();
        console.log("Sessão:", session);

        if (!session) {
            console.error("Sessão não encontrada");
            return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
        }

        const userId = session.user?.id;
        const userEmail = session.user?.email;
        console.log("Usuário autenticado:", { userId, userEmail });

        if (!userId || !userEmail) {
            console.error("Dados do usuário não encontrados");
            return NextResponse.json({ error: "Dados do usuário não encontrados" }, { status: 401 });
        }

        console.log("Criando/obtendo cliente do Stripe...");
        const customerId = await getOrCreateCustomerId(userId, userEmail);
        console.log("Customer ID:", customerId);

        if (!customerId) {
            console.error("Cliente do Stripe não encontrado");
            return NextResponse.json({ error: "Cliente do Stripe não encontrado" }, { status: 404 });
        }

        console.log("Criando sessão do Stripe...");
        try {
            const stripeSession = await stripe.checkout.sessions.create({
                line_items: [
                    { price, quantity: 1 },
                ],
                mode: "subscription",
                payment_method_types: ["card"],
                success_url: `${process.env.NEXT_PUBLIC_APP_URL}/success`,
                cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/cancel`,
                customer: customerId,
                metadata: {
                    userId,
                }
            });
            console.log("Sessão criada:", stripeSession.id);

            if (!stripeSession.url) {
                console.error("URL do checkout não encontrada");
                return NextResponse.json({ error: "URL do checkout não encontrada" }, { status: 500 });
            }

            return NextResponse.json({ sessionId: stripeSession.id }, { status: 200 });
        } catch (stripeError) {
            console.error("Erro ao criar sessão do Stripe:", stripeError);
            if (stripeError instanceof Error) {
                console.error("Detalhes do erro:", stripeError.message);
            }
            return NextResponse.json({ 
                error: "Erro ao criar sessão do Stripe",
                details: stripeError instanceof Error ? stripeError.message : "Erro desconhecido"
            }, { status: 500 });
        }

    } catch (e) {
        console.error("Erro ao criar checkout com Stripe:", e);
        if (e instanceof Error) {
            console.error("Detalhes do erro:", e.message);
            console.error("Stack trace:", e.stack);
        }
        return NextResponse.json({ 
            error: "Erro ao criar checkout com Stripe",
            details: e instanceof Error ? e.message : "Erro desconhecido"
        }, { status: 500 });
    }
}