'use client';

import { Button } from "@/components/ui/button";
import { Bell, Search, Menu, ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

export function Topbar() {
  return (
    <motion.div 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="h-16 bg-gradient-to-r from-indigo-50 via-white to-white backdrop-blur-md border-b border-indigo-100 flex items-center justify-between px-6 shadow-sm relative"
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 via-transparent to-purple-500/5 pointer-events-none" />

      {/* Left Side - Search */}
      <div className="relative w-96">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-indigo-600/70 w-4 h-4" />
        <Input
          placeholder="Buscar pacientes, planos, etc..."
          className="pl-9 bg-white/50 border-indigo-100 focus:border-indigo-300 transition-all duration-300 hover:bg-white/80 text-indigo-900 placeholder:text-indigo-600/50"
        />
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-6">
        {/* Quick Actions */}
        <div className="flex items-center gap-2">
          <Button 
            variant="ghost" 
            size="sm"
            className="text-sm font-medium text-indigo-600/70 hover:text-indigo-700 hover:bg-indigo-500/10 transition-colors"
          >
            Novo Paciente
          </Button>
          <Button 
            variant="ghost" 
            size="sm"
            className="text-sm font-medium text-indigo-600/70 hover:text-indigo-700 hover:bg-indigo-500/10 transition-colors"
          >
            Nova Consulta
          </Button>
        </div>

        {/* Notifications */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button 
              variant="ghost" 
              size="icon" 
              className="relative hover:bg-indigo-500/10 hover:text-indigo-700 transition-colors text-indigo-600/70"
            >
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 h-2.5 w-2.5 bg-red-500 rounded-full animate-pulse" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-80 border-indigo-100 bg-white">
            <DropdownMenuLabel className="text-indigo-900">Notificações</DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-indigo-100" />
            <DropdownMenuItem className="flex flex-col items-start gap-1 h-auto py-3 hover:bg-indigo-50">
              <p className="font-medium text-indigo-900">Nova mensagem de Maria Silva</p>
              <p className="text-sm text-indigo-600/70">Há 5 minutos</p>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex flex-col items-start gap-1 h-auto py-3 hover:bg-indigo-50">
              <p className="font-medium text-indigo-900">Consulta agendada com João Santos</p>
              <p className="text-sm text-indigo-600/70">Há 30 minutos</p>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* User Menu */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="p-1.5 hover:bg-indigo-500/10 transition-colors">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 bg-gradient-to-tr from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center shadow-md">
                  <span className="text-white font-medium">D</span>
                </div>
                <div className="flex items-center gap-2">
                  <div>
                    <p className="text-sm font-medium text-left text-indigo-900">Dr. Nutricionista</p>
                    <p className="text-xs text-indigo-600/70 text-left">Nutricionista</p>
                  </div>
                  <ChevronDown className="w-4 h-4 text-indigo-600/70" />
                </div>
              </div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56 border-indigo-100 bg-white">
            <DropdownMenuItem className="text-indigo-900 hover:bg-indigo-50">Meu Perfil</DropdownMenuItem>
            <DropdownMenuItem className="text-indigo-900 hover:bg-indigo-50">Configurações</DropdownMenuItem>
            <DropdownMenuSeparator className="bg-indigo-100" />
            <DropdownMenuItem className="text-red-500 hover:text-red-600 hover:bg-red-50">
              Sair
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </motion.div>
  );
} 