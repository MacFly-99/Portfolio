import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Matteo Ventura | Portfolio",
  description: "Développeur Full-Stack passionné par le développement web et la sécurisation des applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.className} bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300 min-h-screen flex flex-col`}>
        
        <Navbar />

        {/* J'enveloppe les enfants dans un flex-grow pour que le footer reste en bas */}
        <div className="flex-grow">
          {children}
        </div>

      </body>
    </html>
  );
}