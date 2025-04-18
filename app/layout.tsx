import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "NutriGest",
  description: "NutriGestor é a plataforma ideal para nutricionistas autônomos que desejam gerenciar planos alimentares, atendimentos online e fichas de pacientes com eficiência e praticidade. Simples, intuitiva e pensada para facilitar o seu dia a dia.",
};

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="./favicon.png" sizes="any" />
      </head>
      <body
        className={`${poppins.className} bg-gradient-to-b from-background via-primary/5 to-background antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
