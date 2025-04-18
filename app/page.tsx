'use client';

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Calendar, Users, Send, Bell, Shield, FileText, BarChart3, Clock, Star, ArrowRight } from "lucide-react";
import Image from "next/image";
import { MainNav } from "@/app/components/main-nav";
import { WhatsAppButton } from "@/app/components/whatsapp-button";
import { motion } from "framer-motion";
import { Hero } from "./components/hero";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-primary/5 to-background">
      <MainNav />
      <WhatsAppButton />
      
      {/* Header */}
      <Hero/>
      
      {/* Seção de Benefícios */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-24 relative overflow-hidden"
        id="beneficios"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent opacity-50"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">Benefícios para seu Consultório</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Tudo que você precisa para gerenciar seu consultório com eficiência e profissionalismo</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: FileText, title: "Criação Rápida de Planos", description: "Templates prontos para você personalizar e criar planos alimentares em minutos." },
              { icon: Calendar, title: "Agendamento de Consultas", description: "Agende suas consultas facilmente e sincronize com Google Calendar." },
              { icon: Users, title: "Gestão de Pacientes", description: "Tenha o histórico completo de cada paciente e acompanhe o progresso em tempo real." },
              { icon: Send, title: "Envio Automático de Planos", description: "Envie planos alimentares automaticamente para seus pacientes por e-mail ou link." },
              { icon: Bell, title: "Notificações e Lembretes", description: "Receba alertas automáticos de consultas e lembretes para garantir a adesão do paciente." },
              { icon: Shield, title: "Segurança e Privacidade", description: "Armazenamento seguro de dados de pacientes, em conformidade com as regulamentações de privacidade." },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-primary/20 bg-gradient-to-b from-background to-primary/5 group">
                  <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                    <item.icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Demonstração Visual */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-24 bg-gradient-to-b from-primary/5 to-background relative"
        id="demonstracao"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-50"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">Veja Como Funciona</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Interface intuitiva e fácil de usar, desenvolvida para nutricionistas</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Interface Intuitiva e Fácil de Usar</h3>
              <p className="text-muted-foreground text-lg">
                Nossa plataforma foi desenvolvida pensando na facilidade de uso, permitindo que você foque no que realmente importa: seus pacientes.
              </p>
              <ul className="space-y-4">
                {[
                  "Criação de planos alimentares em minutos",
                  "Agendamento de consultas com um clique",
                  "Gestão completa de pacientes",
                  "Relatórios automáticos de progresso"
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 text-lg group"
                  >
                    <div className="h-8 w-8 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                    </div>
                    <span className="group-hover:text-primary transition-colors duration-300">{item}</span>
                  </motion.li>
                ))}
              </ul>
              <Button className="mt-8 bg-primary hover:bg-primary/90 group">
                Comece Agora
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-[500px] rounded-xl overflow-hidden shadow-2xl border-2 border-primary/20"
            >
              <Image
                src="/dashboard-preview.png"
                alt="Preview do Dashboard"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Depoimentos */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-24 relative"
        id="depoimentos"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent opacity-50"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">O Que Dizem Nossos Usuários</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Veja o que os nutricionistas estão falando sobre nossa plataforma</p>
          </div>
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
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-primary/20 bg-gradient-to-b from-background to-primary/5 group">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 text-lg group-hover:text-primary/90 transition-colors duration-300">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold text-lg group-hover:text-primary transition-colors duration-300">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Planos */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-24 bg-gradient-to-b from-background to-primary/5 relative"
        id="planos"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Escolha o Plano Ideal</h2>
          <p className="text-xl text-muted-foreground text-center mb-16">Planos flexíveis para atender às suas necessidades</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-primary/20 bg-gradient-to-b from-background to-primary/5">
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

            <Card className="p-8 border-primary/20 relative hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-b from-background to-primary/5">
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
      </motion.section>

      {/* CTA Final */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-24"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Pronto para Transformar seu Consultório?</h2>
          <p className="text-xl text-muted-foreground mb-12">
            Comece agora mesmo e experimente todas as funcionalidades por 14 dias gratuitamente.
          </p>
          <Button size="lg" className="text-lg px-12 py-6 bg-primary hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl">
            Experimente Gratuitamente
          </Button>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-gradient-to-b from-primary/5 to-background py-16"
      >
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
          <div className="mt-12 pt-8 border-t border-primary/20 text-center text-muted-foreground">
            © 2024 NutriPlataforma. Todos os direitos reservados.
          </div>
        </div>
      </motion.footer>
    </div>
  );
}
