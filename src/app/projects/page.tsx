"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, MapPin, SlidersHorizontal, ArrowRight, X } from "lucide-react";
import { projectsData } from "@/data/projects";

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState<"all" | "residential" | "commercial">("all");
  const [selectedStatus, setSelectedStatus] = useState<"all" | "completed" | "ongoing">("all");
  const [selectedLocation, setSelectedLocation] = useState("all");

  // Get unique locations for dropdown filter
  const locations = useMemo(() => {
    const locs = projectsData.map((p) => p.location);
    return ["all", ...Array.from(new Set(locs))];
  }, []);

  // Filter logic
  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const matchesSearch =
        project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesType = selectedType === "all" || project.type === selectedType;
      const matchesStatus = selectedStatus === "all" || project.status === selectedStatus;
      const matchesLocation = selectedLocation === "all" || project.location === selectedLocation;

      return matchesSearch && matchesType && matchesStatus && matchesLocation;
    });
  }, [searchQuery, selectedType, selectedStatus, selectedLocation]);

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedType("all");
    setSelectedStatus("all");
    setSelectedLocation("all");
  };

  const isFiltered = searchQuery !== "" || selectedType !== "all" || selectedStatus !== "all" || selectedLocation !== "all";

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

      {/* Filter and Grid Area */}
      <section className="py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          
          {/* Filter Bar Panel */}
          <div className="bg-white border border-gray-200 p-6 md:p-8 shadow-sm flex flex-col gap-6 mb-12">
            <div className="flex items-center gap-2 border-b border-gray-100 pb-4">
              <SlidersHorizontal className="w-4 h-4 text-gold" />
              <span className="font-label text-[10px] tracking-widest uppercase font-bold text-navy">Filter Portfolio</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 items-end">
              
              {/* Text Search (Span 4) */}
              <div className="lg:col-span-4 flex flex-col gap-1.5">
                <label htmlFor="search" className="font-label text-[10px] tracking-wider uppercase text-charcoal/60 font-semibold">Search projects</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    id="search"
                    type="text"
                    placeholder="Name, location, details..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-gray-50 border border-gray-200/80 pl-10 pr-4 py-2.5 text-xs text-charcoal focus:outline-none focus:border-gold"
                  />
                </div>
              </div>

              {/* Project Type Filter (Span 2) */}
              <div className="lg:col-span-2 flex flex-col gap-1.5">
                <label htmlFor="type" className="font-label text-[10px] tracking-wider uppercase text-charcoal/60 font-semibold">Category</label>
                <select
                  id="type"
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value as any)}
                  className="w-full bg-gray-50 border border-gray-200/80 px-3 py-2.5 text-xs text-charcoal focus:outline-none focus:border-gold"
                >
                  <option value="all">All Categories</option>
                  <option value="residential">Residential</option>
                  <option value="commercial">Commercial</option>
                </select>
              </div>

              {/* Status Filter (Span 2) */}
              <div className="lg:col-span-2 flex flex-col gap-1.5">
                <label htmlFor="status" className="font-label text-[10px] tracking-wider uppercase text-charcoal/60 font-semibold">Status</label>
                <select
                  id="status"
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value as any)}
                  className="w-full bg-gray-50 border border-gray-200/80 px-3 py-2.5 text-xs text-charcoal focus:outline-none focus:border-gold"
                >
                  <option value="all">All Status</option>
                  <option value="completed">Completed</option>
                  <option value="ongoing">Ongoing</option>
                </select>
              </div>

              {/* Location Dropdown Filter (Span 2) */}
              <div className="lg:col-span-2 flex flex-col gap-1.5">
                <label htmlFor="location" className="font-label text-[10px] tracking-wider uppercase text-charcoal/60 font-semibold">Location</label>
                <select
                  id="location"
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200/80 px-3 py-2.5 text-xs text-charcoal focus:outline-none focus:border-gold capitalize"
                >
                  <option value="all">All Locations</option>
                  {locations.filter(l => l !== "all").map((loc) => (
                    <option key={loc} value={loc}>{loc}</option>
                  ))}
                </select>
              </div>

              {/* Clear Button (Span 2) */}
              <div className="lg:col-span-2">
                <button
                  onClick={clearFilters}
                  disabled={!isFiltered}
                  className={`w-full py-2.5 border text-center font-label text-[10px] uppercase tracking-widest transition-colors font-bold ${
                    isFiltered
                      ? "border-gold text-gold hover:bg-gold hover:text-navy cursor-pointer"
                      : "border-gray-200 text-gray-300 cursor-not-allowed"
                  }`}
                >
                  Clear Filters
                </button>
              </div>

            </div>
          </div>

          {/* Results Summary */}
          <div className="flex items-center justify-between mb-8">
            <span className="text-xs text-charcoal/50 font-sans">
              Showing <strong className="text-navy">{filteredProjects.length}</strong> of {projectsData.length} projects
            </span>
          </div>

          {/* Projects Card Grid */}
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
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
          ) : (
            <div className="text-center py-20 bg-white border border-gray-200 shadow-sm flex flex-col items-center justify-center gap-4">
              <span className="text-sm text-charcoal/50">No projects match your selected filters.</span>
              <button
                onClick={clearFilters}
                className="inline-flex items-center gap-2 border border-gold hover:bg-gold hover:text-navy text-gold px-6 py-2.5 font-label text-xs uppercase tracking-widest font-bold transition-all"
              >
                Reset Filters
                <X className="w-4 h-4" />
              </button>
            </div>
          )}

        </div>
      </section>
    </div>
  );
}
