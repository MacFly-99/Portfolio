import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeToggle from "./components/ThemeToggle";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio | Matteo Ventura",
  description: "Développeur Full-Stack passionné par le développement web et la sécurisation des applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.className} bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300 min-h-screen`}>
        
        <nav className="flex justify-end p-4">
          <ThemeToggle />
        </nav>

        {children}
      </body>
    </html>
  );
}