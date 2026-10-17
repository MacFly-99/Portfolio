// On définit la "forme" d'un projet grâce à TypeScript
export type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  link: string;
};

// On crée un tableau qui contient nos projets
export const projects: Project[] = [
  {
    id: 1,
    title: "Mon premier projet",
    description: "Une application web pour gérer ses tâches quotidiennes.",
    tags: ["React", "TypeScript", "Tailwind"],
    link: "#",
  },
  {
    id: 2,
    title: "Mon deuxième projet",
    description: "Un site vitrine pour un client fictif.",
    tags: ["Next.js", "CSS"],
    link: "#",
  },
];