import "server-only";

import { db } from "@/app/lib/firebase";
import stripe from "@/app/lib/stripe";

export async function getOrCreateCustomerId(userId: string, userEmail: string) {
    try {
        const userRef = db.collection("users").doc(userId);
        const userDoc = await userRef.get();

        if (!userDoc.exists) {
            throw new Error("Usuário não encontrado");
        }

        const customerId = userDoc.data()?.stripeCustomerId;

        if (customerId) {
            return customerId;
        }

        const userName = userDoc.data()?.name;

        const newCustomer = await stripe.customers.create({ 
            email: userEmail, 
            ...(userName && { name: userName }),
            metadata: {
                userId,
            }
        });

        await userRef.update({ stripeCustomerId: newCustomer.id });

        return newCustomer.id;

    } catch (e) {
        console.error("Erro ao criar cliente do Stripe", e);
        throw new Error("Erro ao criar cliente do Stripe");
    }
}
