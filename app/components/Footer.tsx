import Link from "next/link";

export default function Footer() {
  // On récupère l'année actuelle dynamiquement
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950 mt-auto">
      <div className="max-w-4xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Copyright */}
        <p className="text-sm text-gray-500 dark:text-gray-400">
          © {currentYear} Matteo Ventura. Tous droits réservés.
        </p>

        {/* Liens */}
        <div className="flex items-center gap-6 text-sm font-medium">
          <Link href="/" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            Projets
          </Link>
          <Link href="/a-propos" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            À propos
          </Link>
          <a 
            href="https://github.com/MacFly-99" 
            target="_blank" 
            rel="noreferrer"
            className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            GitHub
          </a>
        </div>

      </div>
    </footer>
  );
}