export type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  githubUrl?: string;
  demoUrl?: string;
};

// Je crée un tableau qui contient mes projets
export const projects: Project[] = [
  {
    id: 1,
    title: "U-L Cargo",
    description: "Une API pour gérer des cargaisons de cargos.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    githubUrl: "https://github.com/MacFly-99/U-L-Cargo",
    demoUrl: "",
    image: "/U-L_Cargo.png"
  },
  {
    id: 2,
    title: "StockGJ",
    description: "Une base de données pour gérer des stocks de préparation de commandes.",
    tags: ["MySQL", "MySQL Workbench", "PHP"],
    githubUrl: "https://github.com/MacFly-99/StockGJ",
    demoUrl: "",
    image: "/StockGJ.png"
  },
  {
    id: 3,
    title: "Touche pas au klaxon",
    description: "Une application intranet de covoiturage pour des employés devant faire des trajets entre plusieurs villes.",
    tags: ["PHP"],
    githubUrl: "https://github.com/MacFly-99/Touche_Pas_Au_Klaxon",
    demoUrl: "",
    image: "/Touche_pas_au_klaxon.png"
  },
  {
    id: 4,
    title: "Trouve ton artisan",
    description: "Une application web pour trouver des artisans dans sa région.",
    tags: ["React", "Bootstrap", "Sass", "Node.js", "Express", "MySQL2"],
    githubUrl: "https://github.com/MacFly-99/Trouve-ton-artisan",
    demoUrl: "https://trouve-ton-artisan-frontend-uoyw.onrender.com/",
    image: "/Trouve-ton-artisan.png"
  },
  {
    id: 5,
    title: "Car Palace",
    description: "Une plateforme e-commerce pour l'achat/revente de pièces automobiles entre particuliers.",
    tags: ["React", "Vite", "Tailwind", "Node.js", "PHP", "Symfony", "MariaDB", "MongoDB"],
    githubUrl: "https://github.com/MacFly-99/Car-Palace",
    demoUrl: "https://car-palace-frontend.vercel.app/",
    image: "/Car-Palace.png"
  }
];