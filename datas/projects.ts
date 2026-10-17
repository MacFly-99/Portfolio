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
    title: "U-L Cargo",
    description: "Une API pour gérer des cargaisons de cargos.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    link: "#",
  },
  {
    id: 2,
    title: "StockGJ",
    description: "Une base de données pour gérer des stocks de préparation de commandes.",
    tags: ["MySQL", "MySQL Workbench", "PHP"],
    link: "#",
  },
  {
    id: 3,
    title: "Touche pas au klaxon",
    description: "Une application intranet de covoiturage pour des employés devant faire des trajets entre plusieurs villes.",
    tags: ["PHP"],
    link: "#",
  },
  {
    id: 4,
    title: "Trouve ton artisan",
    description: "Une application web pour trouver des artisans dans sa région.",
    tags: ["React", "Bootstrap", "Sass", "Node.js", "Express", "MySQL2"],
    link: "#",
  },
  {
    id: 5,
    title: "Car Palace",
    description: "Une plateforme e-commerce pour l'achat/revente de pièces automobiles entre particuliers.",
    tags: ["React", "Vite", "Tailwind", "Node.js", "PHP", "Symfony", "MariaDB", "MongoDB"],
    link: "#",
  }
];