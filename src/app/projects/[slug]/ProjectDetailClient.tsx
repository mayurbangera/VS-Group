"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, ArrowLeft, ArrowRight, Expand, Calendar, Landmark, Check } from "lucide-react";
import { Project } from "@/data/projects";
import BeforeAfterSlider from "@/components/shared/BeforeAfterSlider";
import Lightbox from "@/components/shared/Lightbox";

interface ProjectDetailClientProps {
  project: Project;
  relatedProjects: Project[];
}

export default function ProjectDetailClient({ project, relatedProjects }: ProjectDetailClientProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);

  // Gallery array
  const galleryImages = [
    project.image,
    "/images/projects/before.jpg",
  ];

  const handleOpenLightbox = (index: number) => {
    setGalleryIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Back button header strip */}
      <div className="bg-gray-50 border-b border-gray-150 py-4">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 font-label text-xs uppercase tracking-widest text-navy hover:text-gold font-bold transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-gold" />
            Back to Portfolio
          </Link>
        </div>
      </div>

      {/* Hero Showcase Grid */}
      <section className="py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left side: Project Image & Gallery Slider */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              {/* Primary Image Viewport */}
              <div className="relative aspect-video w-full bg-navy overflow-hidden border border-gray-200/50">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover"
                  priority
                />
                
                {/* Fullscreen Trigger */}
                <button
                  onClick={() => handleOpenLightbox(0)}
                  className="absolute bottom-4 right-4 bg-navy/85 backdrop-blur-sm text-white/90 border border-white/10 hover:text-gold p-2.5 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
                  aria-label="Expand image to fullscreen"
                >
                  <Expand className="w-5 h-5" />
                </button>
              </div>

              {/* Gallery Thumbnails */}
              <div className="grid grid-cols-4 gap-4">
                {galleryImages.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => handleOpenLightbox(index)}
                    className="relative aspect-video bg-navy overflow-hidden border border-gray-200 hover:border-gold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
                  >
                    <Image
                      src={img}
                      alt={`Thumbnail ${index + 1}`}
                      fill
                      sizes="150px"
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Right side: Project Specifications */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="flex items-center gap-1.5 text-xs text-charcoal/50 uppercase tracking-widest font-semibold">
                <MapPin className="w-4 h-4 text-gold" />
                <span>{project.location}, Pune</span>
              </div>
              
              <h1 className="font-serif text-3xl md:text-5xl text-navy font-semibold leading-tight">
                {project.name}
              </h1>

              <div className="flex flex-wrap gap-2">
                <span className="font-label text-[10px] uppercase bg-navy text-gold px-2.5 py-1 font-semibold tracking-wider">
                  {project.type}
                </span>
                <span className={`font-label text-[10px] uppercase px-2.5 py-1 font-semibold tracking-wider border ${
                  project.status === "completed"
                    ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                    : "bg-amber-50 text-amber-700 border-amber-200"
                }`}>
                  {project.status}
                </span>
              </div>

              <p className="text-sm md:text-base text-charcoal/80 leading-relaxed font-sans mt-2">
                {project.longDescription}
              </p>

              {/* Spec list */}
              <div className="border-t border-gray-200 pt-6 mt-4 flex flex-col gap-4">
                <h3 className="font-label text-[10px] tracking-widest uppercase font-bold text-navy">
                  Technical Specifications
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-sans">
                  {project.details.area && (
                    <div className="flex flex-col gap-0.5 border-b border-gray-100 pb-2">
                      <span className="text-charcoal/40 font-semibold uppercase text-[9px] tracking-wider">Total Area Scope</span>
                      <span className="text-navy font-bold">{project.details.area}</span>
                    </div>
                  )}
                  {project.details.completionYear && (
                    <div className="flex flex-col gap-0.5 border-b border-gray-100 pb-2">
                      <span className="text-charcoal/40 font-semibold uppercase text-[9px] tracking-wider">Year of Handovers</span>
                      <span className="text-navy font-bold">{project.details.completionYear}</span>
                    </div>
                  )}
                  {project.details.rccWork && (
                    <div className="flex flex-col gap-0.5 border-b border-gray-100 pb-2">
                      <span className="text-charcoal/40 font-semibold uppercase text-[9px] tracking-wider">RCC framework scope</span>
                      <span className="text-navy font-bold">{project.details.rccWork}</span>
                    </div>
                  )}
                  {project.details.bbmWork && (
                    <div className="flex flex-col gap-0.5 border-b border-gray-100 pb-2">
                      <span className="text-charcoal/40 font-semibold uppercase text-[9px] tracking-wider">Masonry BBM standard</span>
                      <span className="text-navy font-bold">{project.details.bbmWork}</span>
                    </div>
                  )}
                  {project.details.plasterWork && (
                    <div className="flex flex-col gap-0.5 border-b border-gray-100 pb-2 lg:col-span-2">
                      <span className="text-charcoal/40 font-semibold uppercase text-[9px] tracking-wider">Plaster Finishing</span>
                      <span className="text-navy font-bold">{project.details.plasterWork}</span>
                    </div>
                  )}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Before / After Slider Section */}
      <section className="py-16 md:py-24 bg-gray-50/50 border-y border-gray-200/50">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-serif text-2xl md:text-4xl text-navy font-medium mb-3">
              Construction progression comparison
            </h2>
            <p className="text-xs md:text-sm text-charcoal/60 leading-relaxed font-sans">
              Drag the center slider handle left and right to compare the initial brick framework and structural concrete skeletons with our completed architecture.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <BeforeAfterSlider
              beforeImage="/images/projects/before.jpg"
              afterImage={project.image}
              beforeLabel="Skeletal Stage Construction"
              afterLabel="Completed Landmark Structure"
            />
          </div>
        </div>
      </section>

      {/* Related Projects Showcase */}
      {relatedProjects.length > 0 && (
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <h2 className="font-serif text-2xl md:text-4xl text-navy font-medium mb-12 text-center md:text-left">
              Similar Developments
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProjects.map((proj) => (
                <div
                  key={proj.slug}
                  className="group bg-white border border-gray-200/60 p-4 shadow-sm flex flex-col gap-4 hover:shadow-lg transition-all"
                >
                  <div className="relative aspect-video w-full overflow-hidden bg-navy">
                    <Image
                      src={proj.image}
                      alt={proj.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  
                  <div className="flex flex-col gap-2 flex-grow justify-between">
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-1 text-[9px] text-charcoal/40 font-semibold uppercase tracking-wider">
                        <MapPin className="w-3 h-3 text-gold" />
                        <span>{proj.location}</span>
                      </div>
                      <h3 className="font-serif text-base text-navy font-bold group-hover:text-gold transition-colors">
                        {proj.name}
                      </h3>
                    </div>
                    
                    <Link
                      href={`/projects/${proj.slug}`}
                      className="inline-flex items-center gap-1 text-[10px] font-label uppercase tracking-widest text-navy font-bold hover:text-gold transition-colors mt-2"
                    >
                      View Project
                      <ArrowRight className="w-3 h-3 text-gold" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Lightbox Trigger */}
      {lightboxOpen && (
        <Lightbox
          images={galleryImages}
          currentIndex={galleryIndex}
          onClose={() => setLightboxOpen(false)}
          onNavigate={(index) => setGalleryIndex(index)}
        />
      )}
    </div>
  );
}
