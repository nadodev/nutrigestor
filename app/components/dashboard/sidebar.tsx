'use client';

import { Button } from "@/components/ui/button";
import {
  Calendar,
  Users,
  FileText,
  Settings,
  Bell,
  LogOut,
  User,
  Home,
  BarChart2,
  MessageSquare,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const navItems = [
  { icon: <Home className="w-5 h-5" />, label: "Dashboard", href: "/dashboard" },
  { icon: <Users className="w-5 h-5" />, label: "Pacientes", href: "/dashboard/pacientes" },
  { icon: <FileText className="w-5 h-5" />, label: "Planos Alimentares", href: "/dashboard/planos" },
  { icon: <Calendar className="w-5 h-5" />, label: "Agenda", href: "/dashboard/agenda" },
  { icon: <MessageSquare className="w-5 h-5" />, label: "Mensagens", href: "/dashboard/mensagens" },
  { icon: <BarChart2 className="w-5 h-5" />, label: "Relatórios", href: "/dashboard/relatorios" },
  { icon: <Settings className="w-5 h-5" />, label: "Configurações", href: "/dashboard/configuracoes" },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <motion.div 
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="w-64 bg-gradient-to-b from-indigo-50 via-white to-white backdrop-blur-md border-r border-indigo-100 flex flex-col shadow-lg relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/5 via-transparent to-transparent pointer-events-none" />
      <div className="absolute -top-32 -right-32 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />

      {/* Logo */}
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="p-6"
      >
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 bg-gradient-to-tr from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
            <span className="text-white font-semibold text-lg">N</span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              NutriPlanner
            </span>
            <span className="text-xs text-indigo-600/70">Gestão Nutricional</span>
          </div>
        </div>
      </motion.div>

      {/* Navigation */}
      <nav className="flex-1 px-4 space-y-1 py-4">
        {navItems.map((item, index) => (
          <motion.div
            key={item.href}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.1 * (index + 1) }}
          >
            <Link
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                pathname === item.href
                  ? "bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-indigo-700 shadow-sm"
                  : "hover:bg-gradient-to-r hover:from-indigo-500/10 hover:to-purple-500/10 hover:text-indigo-700 hover:shadow-sm text-indigo-600/70"
              }`}
            >
              {item.icon}
              <span className="font-medium">{item.label}</span>
              {pathname === item.href && (
                <motion.div
                  layoutId="active-nav"
                  className="absolute left-0 w-1 h-8 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-r-full"
                />
              )}
            </Link>
          </motion.div>
        ))}
      </nav>

      {/* User Profile */}
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="p-4 border-t border-indigo-100 bg-gradient-to-b from-transparent to-indigo-50/50"
      >
        <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/50 transition-all duration-300 group">
          <div className="h-10 w-10 bg-gradient-to-tr from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300">
            <User className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-semibold truncate text-indigo-900">Dr. Nutricionista</p>
            <p className="text-sm text-indigo-600/70 truncate">nutricionista@email.com</p>
          </div>
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-8 w-8 hover:bg-red-500/10 hover:text-red-500 transition-colors"
          >
            <LogOut className="w-4 h-4" />
          </Button>
        </div>
      </motion.div>
    </motion.div>
  );
} 