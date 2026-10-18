import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto p-8 py-16">
      
      <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center text-gray-900 dark:text-white">
        À propos de <span className="text-blue-600 dark:text-blue-400">moi</span>
      </h1>

      <div className="flex flex-col md:flex-row gap-12 items-start">
        
        {/* Colonne de gauche : Photo, Réseaux et Bouton */}
        <div className="w-full md:w-1/3 flex flex-col items-center">
          
          <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-gray-200 dark:border-gray-700 mb-6 bg-gray-100 dark:bg-gray-800">
             {/* <Image src="/ma-photo.jpg" alt="Matteo Ventura" fill className="object-cover" /> */}
             <div className="flex items-center justify-center h-full text-gray-400">
               Photo ici
             </div>
          </div>
          
          {/* Réseaux Sociaux */}
          <div className="flex gap-4 mb-8">
            <a href="https://github.com/MacFly-99" target="_blank" rel="noreferrer" className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-gray-900 dark:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            </a>
            <a href="https://linkedin.com/in/ton-profil" target="_blank" rel="noreferrer" className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-gray-900 dark:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
          </div>

          {/* Bouton Me contacter */}
          <a href="mailto:contact@matteoventura.fr" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors shadow-lg shadow-blue-500/30">
            Me contacter
          </a>
        </div>

        {/* Colonne de droite : Texte et Compétences */}
        <div className="w-full md:w-2/3 space-y-6 text-gray-600 dark:text-gray-300">
          <p className="text-lg">
            Salut ! Moi c'est <strong className="text-gray-900 dark:text-white">Matteo</strong>, développeur Full-Stack. 
            Je me spécialise dans la création d'applications web modernes, performantes et sécurisées.
          </p>
          
          <p>
            Mon parcours m'a permis d'acquérir une solide expérience sur l'ensemble de la chaîne de développement web, allant de la conception de bases de données (MySQL), à la création d'interfaces utilisateur réactives et intuitives avec React et Next.js, puis l'intégration de fonctionnalités côté serveur avec Node.js, PHP et Symfony.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white pt-4">Mes compétences</h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
            {["React.js", "Next.js", "TypeScript", "Vite", "Bootstrap", "Sass", "Tailwind CSS", "Node.js", "Express.js", "PHP", "Symfony", "MySQL", "MariaDB", "MongoDB", "Git"].map((skill) => (
              <div key={skill} className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg text-center font-medium text-sm text-gray-900 dark:text-gray-200">
                {skill}
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}