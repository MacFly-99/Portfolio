import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-colors">
      <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* Logo / Nom */}
        <Link href="/" className="font-bold text-xl text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
          M.Ventura
        </Link>

        {/* Liens de navigation */}
        <nav className="flex items-center gap-6">
          <Link href="/" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">
            Projets
          </Link>
          <Link href="/a-propos" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">
            À propos
          </Link>
          
          {/* Le bouton de thème */}
          <ThemeToggle />
        </nav>
        
      </div>
    </header>
  );
}