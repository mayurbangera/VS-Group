"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin } from "lucide-react";
import { projectsData } from "@/data/projects";

// Select 4 premium featured projects
const featuredProjects = projectsData.filter((p) =>
  [
    "32-pinewood-drive",
    "7-plumeria-drive",
    "ba-swadesha",
    "the-4th-axis-by-lifecraft",
  ].includes(p.slug)
);

export default function FeaturedProjects() {
  return (
    <section className="py-20 md:py-28 bg-gray-50/50" aria-label="Featured Projects">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        
        {/* Header Grid */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 md:mb-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="h-[1px] w-8 bg-gold" />
              <span className="font-label text-xs tracking-widest text-gold uppercase font-semibold">
                Portfolio Showcase
              </span>
            </div>
            <h2 className="font-serif text-3xl md:text-5xl text-navy leading-[1.15] font-medium">
              Landmarks engineered to stand the test of time
            </h2>
          </div>
          <div>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 bg-navy hover:bg-charcoal text-white font-label text-xs uppercase tracking-widest px-6 py-3.5 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
            >
              View All 17 Projects
              <ArrowRight className="w-4 h-4 text-gold" />
            </Link>
          </div>
        </div>

        {/* Projects Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {featuredProjects.map((project, idx) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.8 }}
              className="group flex flex-col gap-6"
            >
              {/* Image Frame */}
              <div className="relative aspect-[4/3] w-full bg-navy overflow-hidden border border-gray-200/40">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 45vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105 group-hover:opacity-90"
                />
                
                {/* Type Badge */}
                <div className="absolute top-4 left-4 bg-navy/85 backdrop-blur-sm text-gold border border-gold/10 font-label text-[9px] uppercase tracking-widest px-2.5 py-1 font-semibold">
                  {project.type}
                </div>

                {/* Status Badge */}
                <div className={`absolute top-4 right-4 backdrop-blur-sm border font-label text-[9px] uppercase tracking-widest px-2.5 py-1 font-semibold ${
                  project.status === 'completed'
                    ? 'bg-emerald-950/80 text-emerald-300 border-emerald-500/20'
                    : 'bg-amber-950/80 text-amber-300 border-amber-500/20'
                }`}>
                  {project.status}
                </div>
              </div>

              {/* Text metadata */}
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-1.5 text-xs text-charcoal/50">
                  <MapPin className="w-3.5 h-3.5 text-gold shrink-0" />
                  <span>{project.location}, Pune</span>
                </div>
                
                <h3 className="font-serif text-2xl text-navy font-semibold group-hover:text-gold transition-colors duration-300">
                  {project.name}
                </h3>
                
                <p className="text-xs md:text-sm text-charcoal/70 leading-relaxed font-sans line-clamp-2">
                  {project.description}
                </p>

                <div className="text-xs text-charcoal/80 font-sans bg-gray-50/90 py-2 px-3 border-l-2 border-gold rounded-none">
                  <span className="font-semibold text-navy">Scope of work:</span> BBM, Plaster, Masonry, and Miscellaneous Development Work
                </div>

                <div className="pt-2 border-t border-gray-200/50 mt-2 flex items-center justify-between">
                  <span className="text-[10px] font-label text-charcoal/40 uppercase tracking-wider">
                    {project.details.area || "Premium Spans"}
                  </span>
                  
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-1.5 font-label text-xs uppercase tracking-widest text-navy font-bold hover:text-gold transition-colors focus-visible:outline focus-visible:outline-1 focus-visible:outline-gold"
                  >
                    View Details
                    <ArrowRight className="w-3.5 h-3.5 text-gold group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
