import { auth } from "@/app/lib/auth";
import { db } from "@/app/lib/firebase";
import stripe from "@/app/lib/stripe";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const session = await auth();
        const userId = session?.user?.id;
        
        console.log("Verificando autenticação...");
        if (!session || !userId) {
            return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
        }

        const userRef = db.collection("users").doc(userId);
        const userDoc = await userRef.get();

        if (!userDoc.exists) {
            return NextResponse.json({ error: "Usuário não encontrado" }, { status: 404 });
        }

        const customerId = userDoc.data()?.stripeCustomerId;
        console.log("Customer ID:", customerId);
        
        if (!customerId) {
            return NextResponse.json({ error: "Cliente do Stripe não encontrado" }, { status: 404 });
        }

        const origin = req.headers.get("origin") || process.env.NEXT_PUBLIC_APP_URL;
        if (!origin) {
            throw new Error("Origin não encontrada");
        }

        console.log("Criando sessão do portal...");
        const portalSession = await stripe.billingPortal.sessions.create({
            customer: customerId,
            return_url: `${origin}/dashboard`
        });

        console.log("Sessão do portal criada:", portalSession.id);
        return NextResponse.json({ url: portalSession.url }, { status: 200 });
        
    } catch (e) {
        console.error("Erro ao criar portal do Stripe:", e);
        if (e instanceof Error) {
            console.error("Detalhes do erro:", e.message);
        }
        return NextResponse.json({ 
            error: "Erro ao criar portal do Stripe",
            details: e instanceof Error ? e.message : "Erro desconhecido"
        }, { status: 500 });
    }
}