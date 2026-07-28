import { notFound } from "next/navigation";
import { projectsData } from "@/data/projects";
import ProjectDetailClient from "./ProjectDetailClient";
import type { Metadata } from "next";

interface RouteParams {
  params: Promise<{ slug: string }>;
}

// Generate static params for Next.js build optimization
export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

// Dynamic SEO metadata generation
export async function generateMetadata({ params }: RouteParams): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found | VS Group",
    };
  }

  return {
    title: `${project.name} | VS Group of Companies`,
    description: project.description,
    alternates: {
      canonical: `/projects/${slug}`,
    },
    openGraph: {
      title: `${project.name} | VS Group`,
      description: project.description,
      url: `/projects/${slug}`,
      images: [
        {
          url: project.image,
          alt: project.name,
        },
      ],
    },
  };
}

export default async function ProjectDetailPage({ params }: RouteParams) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  // Find related projects (same type, max 3)
  const relatedProjects = projectsData
    .filter((p) => p.type === project.type && p.slug !== project.slug)
    .slice(0, 3);

  return (
    <ProjectDetailClient project={project} relatedProjects={relatedProjects} />
  );
}
