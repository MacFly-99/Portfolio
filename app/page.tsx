import { projects } from "@/datas/projects";
import ProjectCard from "./components/ProjectCard";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto p-8 pb-16">
      <Hero />

      <section id="projets" className="scroll-mt-24">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Mes Projets</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </main>
  );
}