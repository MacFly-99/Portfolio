import { projects } from "@/datas/projects";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

// SEO Dynamique : L'onglet du navigateur affichera "Nom du Projet | Portfolio Matteo"
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const project = projects.find((p) => p.id === Number(resolvedParams.id));
  
  if (!project) return { title: "Projet introuvable" };

  return {
    title: `${project.title} | Portfolio Matteo`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const project = projects.find((p) => p.id === Number(resolvedParams.id));

  if (!project) {
    notFound();
  }

  return (
    <main className="max-w-3xl mx-auto p-8 py-16">
      <Link href="/" className="text-blue-600 dark:text-blue-400 hover:underline mb-8 inline-block font-medium">
        ← Retour aux projets
      </Link>

      <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">{project.title}</h1>
      
      <div className="relative h-96 w-full mb-8 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-800">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.tags.map((tag) => (
          <span key={tag} className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-sm font-medium px-3 py-1 rounded">
            {tag}
          </span>
        ))}
      </div>

      <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-10">
        {project.description}
      </p>
      
      {/* Boutons d'action */}
      <div className="flex flex-wrap gap-4 pt-6 border-t border-gray-200 dark:border-gray-800">
        
        {project.demoUrl && (
          <a 
            href={project.demoUrl} 
            target="_blank" 
            rel="noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center gap-2"
          >
            Voir la démo en ligne
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
          </a>
        )}

        {project.githubUrl && (
          <a 
            href={project.githubUrl} 
            target="_blank" 
            rel="noreferrer"
            className="bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center gap-2 border border-gray-200 dark:border-gray-700"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            Code source
          </a>
        )}
      </div>
    </main>
  );
}