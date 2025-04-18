"use client"

import { loadStripe, Stripe } from "@stripe/stripe-js";
import { useEffect, useState } from "react";

export function useStripe() {
    const [stripe, setStripe] = useState<Stripe | null>(null);

    useEffect(() => {
        async function loadStripeAsync() {
            const stripeInstance = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);
            setStripe(stripeInstance);
        }

        loadStripeAsync();
    }, []);

    async function createPaymentStripeCheckout() {
        if (!stripe) {
            throw new Error("Stripe não carregado");
        }

        try {
            const response = await fetch("/api/stripe/create-pay-checkout", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || "Erro ao criar checkout");
            }

            const data = await response.json();
            
            if (!data.sessionId) {
                throw new Error("Session ID não encontrado na resposta");
            }

            const result = await stripe.redirectToCheckout({
                sessionId: data.sessionId
            });

            if (result.error) {
                throw new Error(result.error.message);
            }
        } catch (error) {
            console.error("Erro ao criar checkout com Stripe", error);
            throw error;
        }
    }

    async function handleCreateStripePortal() {
        const response = await fetch("/api/stripe/create-portal", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
        });

        const data = await response.json();
        window.location.href = data.url;
    }

    async function createSubscriptionCheckout(checkoutData: any) {
        const response = await fetch("/api/stripe/create-subscription-checkout", {
            method: "POST",
            body: JSON.stringify(checkoutData),
        });

        const data = await response.json();
        await stripe?.redirectToCheckout({ sessionId: data.sessionId });
    }

    return {
        stripe,
        createPaymentStripeCheckout,
        handleCreateStripePortal,
        createSubscriptionCheckout
    };
}