import { Project } from "@/datas/projects";
import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all bg-white dark:bg-gray-800 flex flex-col">
      
      {/* Image */}
      <div className="relative h-48 w-full">
        <Image 
          src={project.image} 
          alt={`Aperçu du projet ${project.title}`}
          fill
          className="object-cover"
        />
      </div>

      {/* Contenu */}
      <div className="p-6 flex flex-col flex-grow">
        <h2 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">
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
        
        {/* Lien */}
        <Link 
          href={`/projets/${project.id}`} 
          className="text-blue-600 dark:text-blue-400 hover:underline font-medium mt-auto inline-block"
        >
          Voir le projet →
        </Link>
      </div>
    </div>
  );
}