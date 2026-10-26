"use client"; 

import { Project } from "@/datas/projects";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
      }}
      className="h-full"
    >
      <Link href={`/projets/${project.id}`} className="group block h-full">
        <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all bg-white dark:bg-gray-800 flex flex-col h-full">
          
          {/* Image */}
          <div className="relative h-48 w-full overflow-hidden">
            <Image 
              src={project.image} 
              alt={`Aperçu du projet ${project.title}`}
              fill
              // Ajout de sizes pour éviter les sauts de mise en page
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Contenu */}
          <div className="p-6 flex flex-col flex-grow">
            <h2 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {project.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
              {project.description}
            </p>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span 
                  key={tag} 
                  className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-xs font-medium px-2.5 py-0.5 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            {/* Faux lien */}
            <div className="text-blue-600 dark:text-blue-400 font-medium mt-auto inline-flex items-center gap-1 group-hover:gap-2 transition-all">
              Voir le projet <span>→</span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}