import { Header } from "@/app/components/header";
import { auth } from "@/app/lib/auth";
import { redirect } from "next/navigation";

export default async function Dashboard() {
    const session = await auth();

    if (!session) {
        redirect("/login")
    }

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Navbar */}
            <Header image={session.user?.image || ''} name={session.user?.name || ''} />
            {/* Main Content */}
            <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <div className="px-4 py-6 sm:px-0">
                    <div className="bg-white rounded-lg shadow p-6">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Bem-vindo ao seu Dashboard</h2>
                        <div className="bg-gray-50 p-6 rounded-lg">
                            <h3 className="text-lg font-medium text-gray-800 mb-4">Informações do Usuário</h3>
                            <div className="space-y-3">
                                <p className="text-gray-600">
                                    <span className="font-medium">Nome:</span> {session.user?.name}
                                </p>
                                <p className="text-gray-600">
                                    <span className="font-medium">Email:</span> {session.user?.email}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
