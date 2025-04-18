import { Calendar, Search, UserPlus } from "lucide-react";

export function DashboardMockup() {
  const patients = [
    { name: "Ana Silva", lastVisit: "15/03/2024", status: "Em dia", progress: 85 },
    { name: "Carlos Oliveira", lastVisit: "14/03/2024", status: "Em dia", progress: 60 },
    { name: "Mariana Costa", lastVisit: "13/03/2024", status: "Em dia", progress: 45 },
  ];

  const stats = [
    { label: "Pacientes Ativos", value: "24", change: "+12%" },
    { label: "Consultas Hoje", value: "8", change: "+2" },
    { label: "Planos Criados", value: "18", change: "+5" },
  ];

  return (
    <div className="flex flex-col bg-gradient-to-br from-blue-50 via-background to-green-50 text-gray-800 font-sans rounded-xl overflow-hidden shadow-2xl border border-primary/20">
      {/* Top Bar */}
      <div className="flex items-center justify-between p-4 bg-white/90 backdrop-blur-sm border-b border-primary/20">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 bg-gradient-to-r from-blue-600 to-primary rounded-full flex items-center justify-center">
            <span className="text-white font-medium">N</span>
          </div>
          <span className="font-semibold bg-gradient-to-r from-blue-600 via-primary to-green-600 bg-clip-text text-transparent">NutriPlanner</span>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 rounded-lg hover:bg-primary/10 transition-colors">
            <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </button>
          <div className="h-8 w-8 bg-primary/10 rounded-full flex items-center justify-center">
            <span className="text-primary font-medium">U</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/90 backdrop-blur-sm p-4 rounded-lg border border-primary/20 hover:border-primary/40 transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">{stat.label}</span>
                <span className="text-xs px-2 py-1 bg-green-100 text-green-600 rounded-full">{stat.change}</span>
              </div>
              <div className="text-2xl font-bold mt-2">{stat.value}</div>
            </div>
          ))}
        </div>

        {/* Patients Progress */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4 bg-gradient-to-r from-blue-600 via-primary to-green-600 bg-clip-text text-transparent">Progresso dos Pacientes</h2>
          <div className="space-y-4">
            {patients.map((patient, index) => (
              <div
                key={index}
                className="bg-white/90 backdrop-blur-sm p-4 rounded-lg border border-primary/20 hover:border-primary/40 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 bg-gradient-to-r from-blue-500/20 to-primary/20 rounded-full flex items-center justify-center">
                      <span className="text-primary font-medium">
                        {patient.name.split(' ')[0][0]}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-medium">{patient.name}</h3>
                      <p className="text-sm text-muted-foreground">Última visita: {patient.lastVisit}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-green-500"></div>
                    <span className="text-sm text-muted-foreground">{patient.status}</span>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-primary h-2 rounded-full"
                    style={{ width: `${patient.progress}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div>
          <h2 className="text-xl font-semibold mb-4 bg-gradient-to-r from-blue-600 via-primary to-green-600 bg-clip-text text-transparent">Ações Rápidas</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Nova Consulta", color: "bg-gradient-to-r from-blue-600 to-blue-500" },
              { label: "Criar Plano", color: "bg-gradient-to-r from-primary to-primary/90" },
              { label: "Enviar Lembrete", color: "bg-gradient-to-r from-green-600 to-green-500" },
              { label: "Ver Relatórios", color: "bg-gradient-to-r from-blue-500 to-primary" },
            ].map((action, index) => (
              <button
                key={index}
                className={`${action.color} text-white p-4 rounded-lg hover:opacity-90 transition-all duration-300 hover:shadow-lg`}
              >
                {action.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}