'use client';

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Users, Calendar, FileText, BarChart2 } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl p-6 text-white shadow-lg"
      >
        <h1 className="text-2xl font-bold">Bem-vindo(a), Dr. Nutricionista!</h1>
        <p className="text-indigo-100 mt-2">Aqui está um resumo da sua semana</p>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card className="p-6 hover:shadow-lg transition-shadow duration-300 border-indigo-100">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 bg-indigo-100 rounded-xl flex items-center justify-center">
                <Users className="h-6 w-6 text-indigo-600" />
              </div>
              <div>
                <p className="text-sm text-indigo-600/70">Total de Pacientes</p>
                <p className="text-2xl font-bold text-indigo-900">42</p>
              </div>
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="p-6 hover:shadow-lg transition-shadow duration-300 border-indigo-100">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 bg-purple-100 rounded-xl flex items-center justify-center">
                <Calendar className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-purple-600/70">Consultas Hoje</p>
                <p className="text-2xl font-bold text-purple-900">5</p>
              </div>
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card className="p-6 hover:shadow-lg transition-shadow duration-300 border-indigo-100">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 bg-pink-100 rounded-xl flex items-center justify-center">
                <FileText className="h-6 w-6 text-pink-600" />
              </div>
              <div>
                <p className="text-sm text-pink-600/70">Planos Ativos</p>
                <p className="text-2xl font-bold text-pink-900">28</p>
              </div>
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="p-6 hover:shadow-lg transition-shadow duration-300 border-indigo-100">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <BarChart2 className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-blue-600/70">Meta Mensal</p>
                <p className="text-2xl font-bold text-blue-900">75%</p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>

      {/* Recent Activity and Upcoming Appointments */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Card className="p-6 border-indigo-100">
            <h2 className="text-lg font-semibold text-indigo-900 mb-4">Atividade Recente</h2>
            <div className="space-y-4">
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex items-start gap-4 p-3 rounded-lg hover:bg-indigo-50 transition-colors">
                  <div className="h-10 w-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                    <Users className="h-5 w-5 text-indigo-600" />
                  </div>
                  <div>
                    <p className="font-medium text-indigo-900">Novo paciente cadastrado</p>
                    <p className="text-sm text-indigo-600/70">Maria Silva - 2 horas atrás</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Upcoming Appointments */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Card className="p-6 border-indigo-100">
            <h2 className="text-lg font-semibold text-indigo-900 mb-4">Próximas Consultas</h2>
            <div className="space-y-4">
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex items-start gap-4 p-3 rounded-lg hover:bg-indigo-50 transition-colors">
                  <div className="h-10 w-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Calendar className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-medium text-indigo-900">Consulta com João Santos</p>
                    <p className="text-sm text-indigo-600/70">Hoje às 14:00</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6"
      >
        <h2 className="text-lg font-semibold text-indigo-900 mb-4">Ações Rápidas</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button className="flex flex-col items-center gap-2 p-4 rounded-lg bg-white hover:bg-indigo-50 transition-colors border border-indigo-100">
            <div className="h-12 w-12 bg-indigo-100 rounded-xl flex items-center justify-center">
              <Users className="h-6 w-6 text-indigo-600" />
            </div>
            <span className="text-sm font-medium text-indigo-900">Novo Paciente</span>
          </button>
          <button className="flex flex-col items-center gap-2 p-4 rounded-lg bg-white hover:bg-indigo-50 transition-colors border border-indigo-100">
            <div className="h-12 w-12 bg-purple-100 rounded-xl flex items-center justify-center">
              <Calendar className="h-6 w-6 text-purple-600" />
            </div>
            <span className="text-sm font-medium text-indigo-900">Nova Consulta</span>
          </button>
          <button className="flex flex-col items-center gap-2 p-4 rounded-lg bg-white hover:bg-indigo-50 transition-colors border border-indigo-100">
            <div className="h-12 w-12 bg-pink-100 rounded-xl flex items-center justify-center">
              <FileText className="h-6 w-6 text-pink-600" />
            </div>
            <span className="text-sm font-medium text-indigo-900">Novo Plano</span>
          </button>
          <button className="flex flex-col items-center gap-2 p-4 rounded-lg bg-white hover:bg-indigo-50 transition-colors border border-indigo-100">
            <div className="h-12 w-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <BarChart2 className="h-6 w-6 text-blue-600" />
            </div>
            <span className="text-sm font-medium text-indigo-900">Relatórios</span>
          </button>
        </div>
      </motion.div>
    </div>
  );
}
