import { projects } from "@/datas/projects";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

// Cette fonction est typique des Server Components
export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  // 1. J'attend les params (spécifique à Next.js 15/16)
  const resolvedParams = await params;
  
  // 2. Je cherche le projet correspondant à l'ID dans l'URL
  const project = projects.find((p) => p.id === Number(resolvedParams.id));

  // 3. Si le projet n'existe pas, j'affiche une 404
  if (!project) {
    notFound();
  }

  return (
    <main className="max-w-3xl mx-auto p-8 py-16">
      <Link href="/" className="text-blue-600 hover:underline mb-8 inline-block">
        ← Retour aux projets
      </Link>

      <h1 className="text-4xl font-bold mb-6">{project.title}</h1>
      
      <div className="relative h-96 w-full mb-8 rounded-xl overflow-hidden shadow-lg">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.tags.map((tag) => (
          <span key={tag} className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded">
            {tag}
          </span>
        ))}
      </div>

      <p className="text-lg text-gray-700 leading-relaxed">
        {project.description}
      </p>
      
      {/* Je pourrai ajouter plus de détails ici plus tard */}
    </main>
  );
}