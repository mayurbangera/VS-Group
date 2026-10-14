import Image from "next/image";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { projectsData } from "@/data/projects";

export const metadata = {
  title: "Projects Portfolio | VS Group of Companies",
  description: "Explore our full portfolio of 17 landmark residential and commercial developments across Pune.",
};

export default function ProjectsPage() {
  return (
    <div className="pt-24 min-h-screen bg-gray-50/30">
      {/* Hero Header */}
      <section className="bg-navy text-white py-16 md:py-20 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 md:px-8 relative z-10 flex flex-col gap-4">
          <div className="inline-flex items-center gap-2">
            <span className="h-[1px] w-6 bg-gold" />
            <span className="font-label text-xs tracking-widest text-gold uppercase">Portfolio</span>
          </div>
          <h1 className="font-serif text-4xl md:text-6.5xl font-medium leading-[1.1]">
            Our Constructed <span className="italic text-stroke-gold text-gold">Landmarks</span>
          </h1>
          <p className="text-white/60 text-xs md:text-sm font-sans max-w-lg mt-2">
            Explore our complete portfolio of 17 projects spanning high-spec residential towers, modern commercial centers, and turnkey developments across Pune.
          </p>
        </div>
      </section>

      {/* Projects Grid Area */}
      <section className="py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          
          {/* Summary Count */}
          <div className="flex items-center justify-between mb-8">
            <span className="text-xs text-charcoal/60 font-sans">
              Displaying all <strong className="text-navy">{projectsData.length}</strong> landmark projects
            </span>
          </div>

          {/* Projects Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project) => (
              <div
                key={project.slug}
                className="group bg-white border border-gray-200/60 shadow-sm flex flex-col gap-4 p-4 hover:border-gold/25 hover:shadow-lg transition-all"
              >
                {/* Photo Frame */}
                <div className="relative aspect-[4/3] w-full bg-navy overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 30vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  
                  {/* Status Badge */}
                  <span className={`absolute top-3 right-3 text-[8px] font-label uppercase tracking-widest font-bold px-2 py-0.5 border ${
                    project.status === "completed"
                      ? "bg-emerald-950/80 text-emerald-300 border-emerald-500/20"
                      : "bg-amber-950/80 text-amber-300 border-amber-500/20"
                  }`}>
                    {project.status}
                  </span>
                </div>

                {/* Metadata */}
                <div className="flex flex-col gap-2 flex-grow justify-between">
                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-center gap-1 text-[10px] text-charcoal/40 font-semibold uppercase tracking-wider">
                      <MapPin className="w-3 h-3 text-gold" />
                      <span>{project.location}, Pune</span>
                    </div>
                    
                    <h3 className="font-serif text-lg text-navy font-bold group-hover:text-gold transition-colors">
                      {project.name}
                    </h3>
                    
                    <p className="text-xs text-charcoal/70 leading-relaxed line-clamp-2">
                      {project.description}
                    </p>

                    <div className="text-xs text-charcoal/80 font-sans bg-gray-50/90 py-2 px-3 border-l-2 border-gold rounded-none mt-1">
                      <span className="font-semibold text-navy">Scope of work:</span> BBM, Plaster, Masonry, and Miscellaneous Development Work
                    </div>
                  </div>

                  <div className="pt-3 border-t border-gray-100 flex items-center justify-between mt-3">
                    <span className="text-[9px] font-label uppercase tracking-wider text-charcoal/40 font-semibold">
                      {project.type}
                    </span>
                    
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-1 text-[10px] font-label uppercase tracking-widest text-navy font-bold group-hover:text-gold transition-colors"
                    >
                      View Project
                      <ArrowRight className="w-3 h-3 text-gold" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
