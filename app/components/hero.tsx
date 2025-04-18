import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { DashboardMockup } from "./dashboardMock";

export function Hero() {
  return (
    <motion.header
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative  overflow-hidden"
      id="home"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 to-background/80"></div>
      <div className="container mx-auto px-4 relative text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70 leading-tight">
            Simplifique seu Consultório com Gestão de Planos Alimentares e Atendimentos Online
          </h1>
          <p className="text-xl text-muted-foreground mb-12">
            Gerencie seus pacientes, crie planos alimentares personalizados e automatize seus atendimentos com facilidade.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl">
              Experimente Gratuitamente
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-primary text-primary hover:bg-primary/10 transition-all duration-300">
              Saiba Mais
            </Button>
          </div>
          {/* Imagem abaixo do texto */}
          <div className="mx-auto">
            <DashboardMockup />
          </div>
        </div>
      </div>
    </motion.header>
  );
}
