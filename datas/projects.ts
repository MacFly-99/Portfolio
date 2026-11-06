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
    title: "Car Palace",
    description: "Une plateforme e-commerce pour l'achat/revente de pièces automobiles entre particuliers.",
    longDescription: "Car Palace est une plateforme e-commerce innovante qui facilite l'achat et la revente de pièces automobiles entre particuliers. L'application offre une interface ergonomique pour les utilisateurs, permettant de publier des annonces, de rechercher des pièces spécifiques et de communiquer directement avec les vendeurs. Le projet a été un défi en termes de conception d'une architecture scalable et sécurisée, ainsi que l'intégration de fonctionnalités avancées telles qu'une messagerie interne, ou encore le paiement en ligne.",
    tags: ["React", "Vite", "Tailwind", "Node.js", "PHP", "Symfony", "MariaDB", "MongoDB"],
    githubUrl: "https://github.com/MacFly-99/Car-Palace",
    demoUrl: "https://car-palace-frontend.vercel.app/",
    image: "/car-palace.png"
  },
  {
    id: 2,
    title: "DevFact-Flow",
    description: "Une application web qui sert d'outil de création de devis et de factures",
    longDescription: "DevFact-Flow est une application web conçue pour simplifier la création de devis et de factures pour les professionnels. Elle offre une interface intuitive avec un dashboard analytique, permettant de gérer ses clients, ses devis et ses factures, ainsi que la génération de documents professionnels de type PDF. Le défi principal a été de concevoir une architecture modulaire et extensible, permettant d'ajouter facilement de nouvelles fonctionnalités tout en maintenant une performance optimale.",
    tags: ["Next.js", "TypeScript", "Tailwind", "PostgreSQL", "Prisma", "Better Auth", "Shadcn/ui"],
    githubUrl: "https://github.com/MacFly-99/DevFact-Flow",
    demoUrl: "https://devfact-flow.vercel.app/",
    image: "/devfact-flow.png"
  },
  {
    id: 3,
    title: "Touche pas au klaxon",
    description: "Une application intranet de covoiturage pour des employés devant faire des trajets entre plusieurs villes.",
    longDescription: "Touche pas au klaxon est une application intranet de covoiturage pour les employés d'une entreprise. Elle permet aux utilisateurs de proposer et de réserver des trajets entre différentes villes, favorisant ainsi la réduction des coûts de transport et l'empreinte carbone. Le projet a nécessité la mise en place d'un système de gestion des utilisateurs et des trajets, ainsi qu'une interface utilisateur conviviale pour faciliter la navigation et la réservation.",
    tags: ["PHP", "Bootstrap"],
    githubUrl: "https://github.com/MacFly-99/Touche_Pas_Au_Klaxon",
    demoUrl: "https://touche-pas-au-klaxon-s080.onrender.com",
    image: "/touche_pas_au_klaxon.png"
  },
  {
    id: 4,
    title: "Buns&Sugar (en construction)",
    description: "Une application intranet de gestion de chaîne de restaurants (style PCS).",
    longDescription: "Buns&Sugar est une application intranet de gestion de chaîne de restaurants. Elle permet de suivre les niveaux de stock, de gérer les commandes fournisseurs, de créer, voir ou modifier des plannings et de générer des rapports journaliers concernant l'activité des différents établissements. L'idée du projet était de centraliser la gestion des opérations restaurantières pour améliorer l'efficacité et la coordination pour tous les échelons/postes au sein d'un restaurant. Le projet a nécessité la mise en place d'un système de gestion des données et une interface utilisateur intuitive pour faciliter la navigation et la gestion de la centralisation.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Python", "Django", "PostgreSQL","Shadcn/ui"],
    githubUrl: "https://github.com/MacFly-99/BTW-Central",
    demoUrl: "",
    image: "/buns_and_sugar.jpg"
  },
];