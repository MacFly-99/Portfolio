"use client";

import { projects } from "@/datas/projects";
import ProjectCard from "./components/ProjectCard";
import Hero from "./components/Hero";
import { motion } from "framer-motion";

export default function Home() {
  // On définit les règles de la cascade pour le parent
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // <-- C'est ICI le secret ! 0.2s de délai entre chaque carte
      },
    },
  };

  return (
    <main className="max-w-4xl mx-auto p-8 pb-16">
      <Hero />

      <section id="projets" className="scroll-mt-24">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Mes Projets</h2>
        
        {/* On transforme la div en motion.div pour le parent */}
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </section>
    </main>
  );
}