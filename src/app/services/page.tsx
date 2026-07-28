"use client";

import Image from "next/image";
import Link from "next/link";
import { servicesData } from "@/data/services";
import { Building2, Home, Hammer, Layers, Paintbrush, Key, Check, ArrowRight } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Building2: Building2,
  Home: Home,
  Hammer: Hammer,
  Layers: Layers,
  Paintbrush: Paintbrush,
  Key: Key,
};

// Alternate project images to showcase in service rows
const serviceImages = [
  "/images/projects/The 4th Axis by Lifecraft.jpg", // Commercial
  "/images/projects/32 Pinewood Drive.png", // Residential
  "/images/projects/Shaligram Pavillia.jpg", // RCC
  "/images/projects/BA Swadesha.jpg", // BBM
  "/images/projects/Krishna Fairmont.jpg", // Plaster
  "/images/projects/Manav La Moda.jpg", // Turnkey
];

export default function ServicesPage() {
  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Hero Header */}
      <section className="bg-navy text-white py-16 md:py-20 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 md:px-8 relative z-10 flex flex-col gap-4">
          <div className="inline-flex items-center gap-2">
            <span className="h-[1px] w-6 bg-gold" />
            <span className="font-label text-xs tracking-widest text-gold uppercase">Expertise</span>
          </div>
          <h1 className="font-serif text-4xl md:text-6.5xl font-medium leading-[1.1]">
            Our Construction <span className="italic text-stroke-gold text-gold">Capabilities</span>
          </h1>
          <p className="text-white/60 text-xs md:text-sm font-sans max-w-lg mt-2">
            Providing high-tolerance concrete frameworks, precision masonry, and premium locks-and-key turnkey developments.
          </p>
        </div>
      </section>

      {/* Services Alternating Grid Rows */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-8 flex flex-col gap-24 md:gap-36">
          {servicesData.map((service, idx) => {
            const Icon = iconMap[service.iconName] || Hammer;
            const imgPath = serviceImages[idx] || "/images/projects/before.jpg";
            const isEven = idx % 2 === 0;

            return (
              <div
                key={service.slug}
                id={service.slug}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center scroll-mt-28"
              >
                
                {/* Image Column (Order changes depending on even/odd for alternating grid) */}
                <div className={`lg:col-span-6 relative h-[300px] md:h-[400px] w-full overflow-hidden bg-navy ${
                  isEven ? "lg:order-1" : "lg:order-2"
                }`}>
                  <Image
                    src={imgPath}
                    alt={service.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover transition-transform duration-700 hover:scale-103"
                  />
                  
                  {/* Number Overlay */}
                  <div className="absolute bottom-4 left-4 font-label text-4xl font-bold text-white/20 tracking-wider">
                    0{idx + 1}
                  </div>
                </div>

                {/* Content Column */}
                <div className={`lg:col-span-6 flex flex-col gap-6 ${
                  isEven ? "lg:order-2" : "lg:order-1"
                }`}>
                  <div className="flex items-center gap-3">
                    <div className="text-gold p-2 bg-navy/5 rounded-full">
                      <Icon className="w-6 h-6 stroke-[1.5]" />
                    </div>
                    <h2 className="font-serif text-2xl md:text-3.5xl text-navy font-semibold">
                      {service.name}
                    </h2>
                  </div>

                  <p className="text-sm md:text-base text-charcoal/80 leading-relaxed font-sans">
                    {service.description}
                  </p>

                  {/* Highlights Checklist */}
                  <div className="flex flex-col gap-3 pt-2">
                    <h3 className="font-label text-[10px] tracking-widest uppercase font-bold text-navy">
                      Core Operations Scope
                    </h3>
                    
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs md:text-sm text-charcoal/70">
                      {service.features.map((feat) => (
                        <li key={feat} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-gray-100 mt-2">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-1.5 font-label text-xs uppercase tracking-widest text-navy font-bold hover:text-gold transition-colors focus-visible:outline focus-visible:outline-1 focus-visible:outline-gold"
                    >
                      Inquire About This Service
                      <ArrowRight className="w-3.5 h-3.5 text-gold" />
                    </Link>
                  </div>

                </div>

              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Footer strip */}
      <section className="py-16 md:py-24 bg-gray-50 border-t border-gray-200/50">
        <div className="mx-auto max-w-3xl px-6 text-center flex flex-col items-center gap-6">
          <h2 className="font-serif text-2xl md:text-3.5xl text-navy font-medium">
            Need custom structural contracting work?
          </h2>
          <p className="text-xs md:text-sm text-charcoal/65 leading-relaxed font-sans max-w-lg">
            Whether you need M45 grade RCC frameworks, AAC block masonry, or full lock-and-key construction management, our team delivers Pune&apos;s finest standards.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-gold hover:bg-gold-hover text-navy font-label text-xs uppercase tracking-widest px-8 py-4 font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-navy"
          >
            Get a Custom Proposal
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
