'use client';

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Calendar, Users, Send, Bell, Shield, FileText, BarChart3, Clock, Star } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="relative bg-gradient-to-br from-primary/20 via-primary/10 to-background py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/0 to-background/80"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70 leading-tight">
              Simplifique seu Consultório com Gestão de Planos Alimentares e Atendimentos Online
            </h1>
            <p className="text-xl text-muted-foreground mb-12">
              Gerencie seus pacientes, crie planos alimentares personalizados e automatize seus atendimentos com facilidade.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl">
                Experimente Gratuitamente
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-primary text-primary hover:bg-primary/10 transition-all duration-300">
                Saiba Mais
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Seção de Benefícios */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Benefícios para seu Consultório</h2>
          <p className="text-xl text-muted-foreground text-center mb-16">Tudo que você precisa para gerenciar seu consultório com eficiência</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: FileText, title: "Criação Rápida de Planos", description: "Templates prontos para você personalizar e criar planos alimentares em minutos." },
              { icon: Calendar, title: "Agendamento de Consultas", description: "Agende suas consultas facilmente e sincronize com Google Calendar." },
              { icon: Users, title: "Gestão de Pacientes", description: "Tenha o histórico completo de cada paciente e acompanhe o progresso em tempo real." },
              { icon: Send, title: "Envio Automático de Planos", description: "Envie planos alimentares automaticamente para seus pacientes por e-mail ou link." },
              { icon: Bell, title: "Notificações e Lembretes", description: "Receba alertas automáticos de consultas e lembretes para garantir a adesão do paciente." },
              { icon: Shield, title: "Segurança e Privacidade", description: "Armazenamento seguro de dados de pacientes, em conformidade com as regulamentações de privacidade." },
            ].map((item, index) => (
              <Card key={index} className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-primary/10">
                <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <item.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Demonstração Visual */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Veja Como Funciona</h2>
          <p className="text-xl text-muted-foreground text-center mb-16">Interface intuitiva e fácil de usar</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Interface Intuitiva e Fácil de Usar</h3>
              <p className="text-muted-foreground mb-8 text-lg">
                Nossa plataforma foi desenvolvida pensando na facilidade de uso, permitindo que você foque no que realmente importa: seus pacientes.
              </p>
              <ul className="space-y-4">
                {[
                  "Criação de planos alimentares em minutos",
                  "Agendamento de consultas com um clique",
                  "Gestão completa de pacientes",
                  "Relatórios automáticos de progresso"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-lg">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-[500px] rounded-xl overflow-hidden shadow-2xl border-2 border-primary/20">
              <Image
                src="/dashboard-preview.png"
                alt="Preview do Dashboard"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">O Que Dizem Nossos Usuários</h2>
          <p className="text-xl text-muted-foreground text-center mb-16">Veja o que os nutricionistas estão falando sobre nossa plataforma</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Dra. Ana Silva",
                role: "Nutricionista",
                text: "A plataforma revolucionou a forma como gerencio meus pacientes. Agora consigo criar planos alimentares em minutos!"
              },
              {
                name: "Dr. Carlos Oliveira",
                role: "Nutricionista Esportivo",
                text: "A integração com o Google Calendar e o envio automático de planos me poupam horas de trabalho por semana."
              },
              {
                name: "Dra. Mariana Costa",
                role: "Nutricionista Clínica",
                text: "Os relatórios de progresso me ajudam a acompanhar meus pacientes de forma mais eficiente."
              }
            ].map((testimonial, index) => (
              <Card key={index} className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-primary/10">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 text-lg">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-lg">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Planos */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Escolha o Plano Ideal</h2>
          <p className="text-xl text-muted-foreground text-center mb-16">Planos flexíveis para atender às suas necessidades</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-primary/10">
              <h3 className="text-2xl font-bold mb-4">Plano Gratuito</h3>
              <p className="text-4xl font-bold mb-6">R$ 0<span className="text-lg text-muted-foreground">/mês</span></p>
              <ul className="space-y-4 mb-8">
                {[
                  "Até 10 pacientes",
                  "Até 5 planos alimentares",
                  "Agendamento de consultas",
                  "Envio de planos por e-mail",
                  "Relatórios básicos",
                  "Suporte básico"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-lg">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full py-6 text-lg bg-primary hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl">
                Começar Agora
              </Button>
            </Card>

            <Card className="p-8 border-primary relative hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="absolute top-0 right-0 bg-primary text-white px-6 py-2 rounded-bl-lg font-semibold">
                Popular
              </div>
              <h3 className="text-2xl font-bold mb-4">Plano Premium</h3>
              <p className="text-4xl font-bold mb-6">R$ 99,90<span className="text-lg text-muted-foreground">/mês</span></p>
              <ul className="space-y-4 mb-8">
                {[
                  "Pacientes ilimitados",
                  "Planos alimentares ilimitados",
                  "Agendamento de consultas",
                  "Envio de planos por link",
                  "Relatórios avançados",
                  "Notificações por WhatsApp/SMS",
                  "Suporte prioritário"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-lg">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full py-6 text-lg bg-primary hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl">
                Assinar Agora
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para Transformar seu Consultório?</h2>
          <p className="text-xl text-muted-foreground mb-12">
            Comece agora mesmo e experimente todas as funcionalidades por 14 dias gratuitamente.
          </p>
          <Button size="lg" className="text-lg px-12 py-6 bg-primary hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl">
            Experimente Gratuitamente
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <h4 className="font-semibold text-lg mb-4">Sobre Nós</h4>
              <p className="text-muted-foreground">
                Somos uma plataforma focada em ajudar nutricionistas autônomos a gerenciar seu consultório com mais eficiência e segurança.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Contato</h4>
              <p className="text-muted-foreground">contato@nutriplataforma.com.br</p>
              <p className="text-muted-foreground">(11) 99999-9999</p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Redes Sociais</h4>
              <div className="flex gap-4">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Facebook</a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Instagram</a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">LinkedIn</a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Legal</h4>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors block mb-2">Política de Privacidade</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors block">Termos de Uso</a>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-primary/10 text-center text-muted-foreground">
            © 2024 NutriPlataforma. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
} 