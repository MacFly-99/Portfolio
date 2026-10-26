export type Project = {
  id: number;
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  image: string;
  githubUrl?: string;
  demoUrl?: string;
};

// Je crée un tableau qui contient mes projets
export const projects: Project[] = [
    {
    id: 1,
    title: "BTW-Central",
    description: "Une application intranet de gestion de stocks et d'inventaires.",
    longDescription: "BTW-Central s'inscrit dans la continuité de BTW-Cargo :  ",
    tags: ["Next.js", "TypeScript", "Tailwind", "PostgreSQL", "Prisma", "NextAuth.js", "Shadcn/ui"],
    githubUrl: "https://github.com/MacFly-99/BTW-Central",
    demoUrl: "",
    image: "/StockGJ.png"
  },
  {
    id: 2,
    title: "BTW-Cargo",
    description: "Une API pour gérer un port de conteneurs en temps réel.",
    longDescription: "BTW-Cargo est une API RESTful robuste conçue pour optimiser la logistique maritime. Elle permet de gérer le suivi des conteneurs en temps réel et la gestion des stocks. Le défi principal a été de concevoir une base de données hautement relationnelle capable de supporter des milliers de requêtes simultanées sans perte de performance.",
    tags: ["Next.js", "TypeScript", "Tailwind", "PostgreSQL", "Prisma", "NextAuth.js", "Shadcn/ui"],
    githubUrl: "https://github.com/MacFly-99/BTW-Cargo",
    demoUrl: "https://btw-cargo.vercel.app/",
    image: "/BTW-Cargo.png"
  },
  {
    id: 3,
    title: "Car Palace",
    description: "Une plateforme e-commerce pour l'achat/revente de pièces automobiles entre particuliers.",
    longDescription: "Car Palace est une plateforme e-commerce innovante qui facilite l'achat et la revente de pièces automobiles entre particuliers. L'application offre une interface ergonomique pour les utilisateurs, permettant de publier des annonces, de rechercher des pièces spécifiques et de communiquer directement avec les vendeurs. Le projet a été un défi en termes de conception d'une architecture scalable et sécurisée, ainsi que l'intégration de fonctionnalités avancées telles qu'une messagerie interne, ou encore le paiement en ligne.",
    tags: ["React", "Vite", "Tailwind", "Node.js", "PHP", "Symfony", "MariaDB", "MongoDB"],
    githubUrl: "https://github.com/MacFly-99/Car-Palace",
    demoUrl: "https://car-palace-frontend.vercel.app/",
    image: "/Car-Palace.png"
  },
  {
    id: 4,
    title: "Touche pas au klaxon",
    description: "Une application intranet de covoiturage pour des employés devant faire des trajets entre plusieurs villes.",
    longDescription: "Touche pas au klaxon est une application intranet de covoiturage pour les employés d'une entreprise. Elle permet aux utilisateurs de proposer et de réserver des trajets entre différentes villes, favorisant ainsi la réduction des coûts de transport et l'empreinte carbone. Le projet a nécessité la mise en place d'un système de gestion des utilisateurs et des trajets, ainsi qu'une interface utilisateur conviviale pour faciliter la navigation et la réservation.",
    tags: ["PHP", "Bootstrap"],
    githubUrl: "https://github.com/MacFly-99/Touche_Pas_Au_Klaxon",
    demoUrl: "https://touche-pas-au-klaxon-s080.onrender.com",
    image: "/Touche_pas_au_Klaxon.png"
  },
  {
    id: 5,
    title: "Trouve ton artisan",
    description: "Une application web pour trouver des artisans dans sa région.",
    longDescription: "Trouve ton artisan est une application web qui permet aux utilisateurs de rechercher et de contacter des artisans locaux pour divers services. L'application offre une interface facile à utiliser pour filtrer les artisans par spécialité, localisation et avis des clients. Le projet a été un défi en termes d'intégration de bases de données relationnelles, et de mise en place d'une API RESTful pour gérer les requêtes des utilisateurs.",
    tags: ["React", "Bootstrap", "Sass", "Node.js", "Express", "MySQL2"],
    githubUrl: "https://github.com/MacFly-99/Trouve-ton-artisan",
    demoUrl: "https://trouve-ton-artisan-frontend-uoyw.onrender.com/",
    image: "/Trouve-ton-artisan.png"
  }
];