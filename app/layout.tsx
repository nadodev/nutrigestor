import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "NutriPlataforma - Gestão para Nutricionistas",
  description: "Simplifique seu consultório com gestão de planos alimentares e atendimentos online",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body>
        {children}
      </body>
    </html>
  );
} 