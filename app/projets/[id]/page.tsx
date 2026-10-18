"use client";

import { projects } from "@/datas/projects";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion, Variants } from "framer-motion";
import { use } from "react";

// Animation de base
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const project = projects.find((p) => p.id === Number(resolvedParams.id));

  if (!project) {
    notFound();
  }

  return (
    <main className="max-w-5xl mx-auto p-8 py-16">
      
      {/* 1. Header */}
      <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="mb-10">
        
        <motion.div variants={fadeUp}>
          <Link href="/" className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-2 font-medium mb-8">
            <span>←</span> Retour aux projets
          </Link>
        </motion.div>

        <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-extrabold mb-6 text-gray-900 dark:text-white">
          {project.title}
        </motion.h1>
        
        <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
          {project.demoUrl && (
            <a href={project.demoUrl} target="_blank" rel="noreferrer" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-6 rounded-lg transition-colors flex items-center gap-2 text-sm">
              Voir la démo en ligne
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            </a>
          )}
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noreferrer" className="bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-semibold py-2.5 px-6 rounded-lg transition-colors flex items-center gap-2 border border-gray-200 dark:border-gray-700 text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              Code source
            </a>
          )}
        </motion.div>
      </motion.div>

      {/* 2. Image de couverture */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative h-[300px] md:h-[500px] w-full mb-16 rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800"
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          priority // Indique à Next.js de charger cette image en priorité
        />
      </motion.div>

      {/* 3. Contenu (Grille 2 colonnes) */}
      <motion.div 
        initial="hidden" 
        animate="visible" 
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-3 gap-12"
      >
        
        {/* Colonne de gauche (2/3) : Le détail */}
        <motion.div variants={fadeUp} className="md:col-span-2 space-y-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-800 pb-2">
            À propos du projet
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-line">
            {project.longDescription || project.description}
          </p>
        </motion.div>

        {/* Colonne de droite (1/3) : Les infos techniques */}
        <motion.div variants={fadeUp} className="space-y-8">
          
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium px-3 py-1 rounded-md border border-blue-100 dark:border-blue-800">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Mon Rôle</h3>
            <ul className="text-gray-600 dark:text-gray-300 space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-0.5">•</span> Conception de l'architecture
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-0.5">•</span> Développement Front-End et/ou Back-End
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-0.5">•</span> Intégration API
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-0.5">•</span> Création de base de données et optimisation des requêtes
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-0.5">•</span> Tests et débogage
              </li>
            </ul>
          </div>

        </motion.div>
      </motion.div>

    </main>
  );
}