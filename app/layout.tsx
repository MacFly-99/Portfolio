import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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
      {/* Le body est en flex-col et min-h-screen pour que le footer reste en bas même s'il y a peu de contenu */}
      <body className={`${inter.className} bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300 min-h-screen flex flex-col`}>
        
        <Navbar />

        <div className="flex-grow">
          {children}
        </div>

        <Footer />
        
      </body>
    </html>
  );
}