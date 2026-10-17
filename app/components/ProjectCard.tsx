import { Project } from "@/datas/projects";
import Image from "next/image";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      {/* L'image */}
      <div className="relative h-48 w-full">
        <Image 
          src={project.image} 
          alt={`Aperçu du projet ${project.title}`}
          fill
          className="object-cover"
        />
      </div>

      {/* Le reste de la carte */}
      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
        <p className="text-gray-600 mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span key={tag} className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
              {tag}
            </span>
          ))}
        </div>
        
        <a href={project.link} className="text-blue-600 hover:underline font-medium">
          Voir le projet →
        </a>
      </div>
    </div>
  );
}