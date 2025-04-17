import { loadStripe , Stripe} from "@stripe/stripe-js";
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


    async function createPaymentStripeCheckout(checkoutData: any) {
        if(!stripe) {
            throw new Error("Stripe não carregado");
        }

      try {
        const response = await fetch("/api/stripe/create-pay-checkout", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(checkoutData),
        });

        const data = await response.json();
        await stripe.redirectToCheckout({
            sessionId: data.id,
        });
        
      }catch(error) {
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

    return {
        stripe,
        createPaymentStripeCheckout,
        handleCreateStripePortal,
    };
}