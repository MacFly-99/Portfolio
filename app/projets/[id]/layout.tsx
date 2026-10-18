import { projects } from "@/datas/projects";
import { Metadata } from "next";

// Cette fonction génère le titre de l'onglet dynamiquement
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const project = projects.find((p) => p.id === Number(resolvedParams.id));
  
  if (!project) {
    return { title: "Projet introuvable | Portfolio Matteo" };
  }

  return {
    title: `${project.title} | Portfolio Matteo`,
    description: project.description,
  };
}

export default function ProjectLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}