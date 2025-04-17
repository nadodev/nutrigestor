import Image from "next/image";
import { handleLogout } from "../actions/handleLogout";

interface User {
    image: string;
    name: string;
}

export function Header(user: User) {
    return (
        <header>
           <nav className="bg-white shadow-lg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex items-center">
                            <h1 className="text-xl font-bold text-gray-800">Dashboard</h1>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-2">
                                <Image 
                                    src={user?.image || ''} 
                                    alt="User Avatar" 
                                    width={32} 
                                    height={32}
                                    className="rounded-full"
                                />
                                <span className="text-gray-700">{user?.name}</span>
                            </div>
                            <form action={handleLogout}>
                                <button 
                                    type="submit"
                                    className="cursor-pointer bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition-colors duration-200"
                                >
                                    Sair
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}
