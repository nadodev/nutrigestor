import { Calendar, Search, UserPlus } from "lucide-react";

export function DashboardMockup() {
  const patients = [
    { name: "Carol", modified: "16/01/2025 - 00:21:33" },
    { name: "Maria Clara", modified: "16/01/2025 - 00:21:49" },
    { name: "Rodrigo", modified: "16/01/2025 - 00:21:42" },
    { name: "Steph", modified: "08/01/2025 - 08:31:57" },
    { name: "Ferdinando", modified: "17/12/2024 - 09:39:47" }
  ];

  const appointments = [
    { name: "Consulta de Maria Clara Miranda", date: "Concluído em 16/01/2025", completed: true },
    { name: "Consulta de Paciente", date: "Concluído em 16/01/2025", completed: true },
    { name: "Consulta de Paciente", date: "Concluído em 16/01/2025", completed: true },
    { name: "Enviar NF para meu paciente", date: "29/05/2025 - daqui a 133 dias", completed: false }
  ];

  return (
    <div className="flex bg-gray-50 text-gray-800 font-sans">
      {/* Sidebar */}
      <div className="w-56 bg-white border-r p-4 flex flex-col">
        <div className="text-lg font-semibold mb-8">NutriPlanner</div>
        <nav className="space-y-1 flex-1">
          {["Consultório", "Estudos", "Marketing", "Ferramentas", "Suporte", "Ver chat", "Extensões", "Novidades"].map((item, index) => (
            <div 
              key={index} 
              className={`flex items-center p-3 rounded-lg ${index === 0 ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-100'}`}
            >
              <span>{item}</span>
            </div>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto p-6">
        {/* Patients Section */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
            <h2 className="text-lg font-semibold flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              Seus pacientes
            </h2>
            <div className="flex flex-wrap gap-2">
              <button className="px-3 py-1.5 text-xs border rounded-md hover:bg-gray-50">
                Importar pacientes
              </button>
              <button className="px-3 py-1.5 text-xs border rounded-md hover:bg-gray-50">
                Ver todos
              </button>
              <button className="px-3 py-1.5 text-xs border rounded-md hover:bg-gray-50">
                Aniversariantes
              </button>
            </div>
          </div>

          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
            <input
              type="text"
              placeholder="Busque pelo nome, CPF, telefone ou pela tag do paciente"
              className="w-full pl-9 pr-4 py-2 text-sm border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-200"
            />
          </div>

          <button className="flex items-center px-3 py-2 mb-4 text-sm text-blue-600 border border-blue-200 rounded-md bg-blue-50 hover:bg-blue-100 w-full sm:w-auto">
            <UserPlus className="mr-2" size={14} />
            adicionar paciente
          </button>

          <div className="border rounded-md overflow-hidden">
            {patients.map((patient, index) => (
              <div 
                key={index} 
                className={`flex flex-col sm:flex-row justify-between items-start sm:items-center p-3 ${index !== patients.length - 1 ? 'border-b' : ''} hover:bg-gray-50`}
              >
                <span className="font-medium text-sm">{patient.name}</span>
                <span className="text-xs text-gray-500 mt-1 sm:mt-0">Modificado em {patient.modified}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Sections */}
        
      </div>
    </div>
  );
}