import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { DashboardMockup } from "./dashboardMock";
import { ArrowRight, CheckCircle2, Clock, Users, Calendar, Star } from "lucide-react";

export function Hero() {
  const features = [
    { icon: <Users className="w-6 h-6" />, text: "Gestão de Pacientes", description: "Organize e acompanhe seus pacientes" },
    { icon: <Calendar className="w-6 h-6" />, text: "Agendamento Online", description: "Agende consultas com facilidade" },
    { icon: <CheckCircle2 className="w-6 h-6" />, text: "Planos Alimentares", description: "Crie planos personalizados" },
    { icon: <Clock className="w-6 h-6" />, text: "Automação", description: "Automatize tarefas repetitivas" },
  ];

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden min-h-screen flex items-center"
      id="home"
    >
      {/* Gradientes de fundo */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-50"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent opacity-30"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-green-500/10 via-transparent to-transparent opacity-30"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-primary/20"
            >
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <span className="text-sm font-medium">Avaliado com 5 estrelas</span>
            </motion.div>

            {/* Main Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                <span className="text-primary">
                  Transforme sua Rotina
                </span>
                <br />
                <span className="text-foreground">Com Gestão Inteligente</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-lg">
                A plataforma completa para nutricionistas que querem otimizar seu tempo e melhorar a experiência dos pacientes.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 bg-gradient-to-r from-blue-600 to-primary hover:from-blue-700 hover:to-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl group"
              >
                Começar Agora
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-6 border-primary text-primary hover:bg-primary/10 transition-all duration-300 group"
              >
                Ver Demonstração
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </motion.div>

            {/* Features Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-2 gap-4 pt-8"
            >
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-lg bg-white/80 backdrop-blur-sm border border-primary/20 hover:border-primary/40 transition-all duration-300"
                >
                  <div className="text-primary mt-1">{feature.icon}</div>
                  <div>
                    <h3 className="font-medium">{feature.text}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="relative"
          >
            <div className="absolute -top-8 -right-8 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-green-500/20 rounded-full blur-3xl"></div>
            <DashboardMockup />
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
}
