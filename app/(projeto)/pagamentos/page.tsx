'use client'

import { useStripe } from "@/app/hooks/useStripe";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CreditCard, Settings, Wallet, History, CheckCircle2, ShoppingCart, CreditCardIcon, KeyRound } from "lucide-react";

export default function Pagamentos() {
    const { createPaymentStripeCheckout, handleCreateStripePortal, createSubscriptionCheckout } = useStripe();

    return (
        <div className="container mx-auto px-4 py-8 max-w-6xl">
            {/* Cabeçalho */}
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-3xl font-bold mb-2">Gerenciar Assinatura</h1>
                    <p className="text-muted-foreground">Gerencie seus pagamentos e planos</p>
                </div>
            </div>

            {/* Seção de Ações */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <Button 
                    onClick={() => createSubscriptionCheckout({ userId: "123" })}
                    className="h-24 flex flex-col items-center justify-center gap-2"
                    variant="outline"
                >
                    <ShoppingCart className="h-6 w-6" />
                    <span>Nova Assinatura</span>
                    <span className="text-sm text-muted-foreground">Criar nova assinatura</span>
                </Button>

                <Button 
                    onClick={() => createPaymentStripeCheckout()}
                    className="h-24 flex flex-col items-center justify-center gap-2"
                    variant="outline"
                >
                    <CreditCardIcon className="h-6 w-6" />
                    <span>Checkout de Pagamento</span>
                    <span className="text-sm text-muted-foreground">Realizar pagamento</span>
                </Button>

                <Button 
                    onClick={() => handleCreateStripePortal()}
                    className="h-24 flex flex-col items-center justify-center gap-2"
                    variant="outline"
                >
                    <KeyRound className="h-6 w-6" />
                    <span>Portal do Stripe</span>
                    <span className="text-sm text-muted-foreground">Gerenciar assinatura</span>
                </Button>
            </div>

            {/* Grid de Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* Card do Plano Atual */}
                <Card className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
                            <Wallet className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold">Plano Premium</h2>
                            <p className="text-muted-foreground">Plano atual</p>
                        </div>
                    </div>
                    <div className="space-y-3">
                        <div className="flex justify-between items-center">
                            <span className="text-muted-foreground">Status</span>
                            <span className="inline-flex items-center gap-1.5">
                                <CheckCircle2 className="h-4 w-4 text-green-500" />
                                <span className="font-medium text-green-600">Ativo</span>
                            </span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-muted-foreground">Próxima cobrança</span>
                            <span className="font-medium">15/05/2024</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-muted-foreground">Valor mensal</span>
                            <span className="font-medium">R$ 99,90</span>
                        </div>
                    </div>
                </Card>

                {/* Card de Método de Pagamento */}
                <Card className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
                            <CreditCard className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold">Método de Pagamento</h2>
                            <p className="text-muted-foreground">Cartão cadastrado</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="h-12 w-20 bg-muted rounded-lg flex items-center justify-center">
                            <CreditCard className="h-6 w-6 text-muted-foreground" />
                        </div>
                        <div>
                            <p className="font-medium">•••• •••• •••• 4242</p>
                            <p className="text-sm text-muted-foreground">Expira em 12/2025</p>
                        </div>
                    </div>
                </Card>
            </div>

            {/* Seção de Histórico */}
            <Card className="p-6">
                <div className="flex items-center gap-4 mb-6">
                    <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <History className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold">Histórico de Pagamentos</h2>
                        <p className="text-muted-foreground">Últimas transações</p>
                    </div>
                </div>
                <div className="space-y-4">
                    {[1, 2, 3].map((item) => (
                        <div key={item} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                            <div className="flex items-center gap-4">
                                <div className="h-10 w-10 bg-green-100 rounded-full flex items-center justify-center">
                                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                                </div>
                                <div>
                                    <p className="font-medium">Pagamento Mensal</p>
                                    <p className="text-sm text-muted-foreground">15/03/2024</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="font-medium">R$ 99,90</p>
                                <p className="text-sm text-green-600">Pago</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Card>
        </div>
    );
}
