import { projects } from "@/datas/projects";
import ProjectCard from "./components/ProjectCard";

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto p-8 py-16">
      {/* Section Présentation */}
      <section className="mb-16 text-center">
        <h1 className="text-5xl font-bold mb-4">Salut, moi c'est Matteo Ventura</h1>
        <p className="text-xl text-gray-600">
          Développeur Full-Stack passionné par le développement web et la sécurisation des applications.
        </p>
      </section>

      {/* Section Projets */}
      <section>
        <h2 className="text-3xl font-bold mb-8">Mes Projets</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* On boucle sur notre tableau de projets */}
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </main>
  );
}