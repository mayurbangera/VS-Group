"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { servicesData } from "@/data/services";
import { Building2, Home, Hammer, Layers, Paintbrush, Key, ArrowRight } from "lucide-react";

// Map string keys to Lucide Components
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Building2: Building2,
  Home: Home,
  Hammer: Hammer,
  Layers: Layers,
  Paintbrush: Paintbrush,
  Key: Key,
};

export default function ServicesSection() {
  return (
    <section className="py-20 md:py-28 bg-white" aria-label="Services Teaser">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        
        {/* Header Grid */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 md:mb-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="h-[1px] w-8 bg-gold" />
              <span className="font-label text-xs tracking-widest text-gold uppercase font-semibold">
                What We Do
              </span>
            </div>
            <h2 className="font-serif text-3xl md:text-5xl text-navy leading-[1.15] font-medium">
              Expert contracting, structural design, and end-to-end development.
            </h2>
          </div>
          <div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-navy hover:bg-charcoal text-white font-label text-xs uppercase tracking-widest px-6 py-3.5 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
            >
              All Services Detail
              <ArrowRight className="w-4 h-4 text-gold" />
            </Link>
          </div>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {servicesData.map((service, idx) => {
            const Icon = iconMap[service.iconName] || Hammer;
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="group relative border border-gray-200/70 p-8 hover:border-gold/30 hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-[300px] bg-white"
              >
                <div className="flex flex-col gap-4">
                  {/* Icon & Title */}
                  <div className="flex items-center justify-between">
                    <div className="text-navy group-hover:text-gold transition-colors duration-300">
                      <Icon className="w-8 h-8 stroke-[1.5]" />
                    </div>
                    <span className="text-[10px] font-label font-bold text-gray-300 group-hover:text-gold/30 tracking-widest">
                      0{idx + 1}
                    </span>
                  </div>
                  
                  <h3 className="font-serif text-xl text-navy font-semibold group-hover:text-gold transition-colors duration-300">
                    {service.name}
                  </h3>
                  
                  <p className="text-xs md:text-sm text-charcoal/70 leading-relaxed font-sans line-clamp-3">
                    {service.shortDescription}
                  </p>
                </div>

                <div className="pt-4">
                  <Link
                    href={`/services#${service.slug}`}
                    className="inline-flex items-center gap-1.5 font-label text-[10px] uppercase tracking-widest text-navy font-bold group-hover:text-gold transition-colors focus-visible:outline focus-visible:outline-1 focus-visible:outline-gold"
                  >
                    Learn More
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
