"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { clientsData } from "@/data/clients";

export default function ClientsSlider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const scrollSpeed = 0.8; // px per frame
  const animationFrameId = useRef<number | null>(null);

  // Triple the items to ensure seamless infinite looping when scrolling
  const tripledClients = [...clientsData, ...clientsData, ...clientsData];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const performScroll = () => {
      if (isHovered) {
        animationFrameId.current = requestAnimationFrame(performScroll);
        return;
      }

      container.scrollLeft += scrollSpeed;

      // Reset scroll position when reaching the end of the first set of items
      const firstSetWidth = (container.scrollWidth / 3);
      if (container.scrollLeft >= firstSetWidth * 2) {
        container.scrollLeft -= firstSetWidth;
      }

      animationFrameId.current = requestAnimationFrame(performScroll);
    };

    animationFrameId.current = requestAnimationFrame(performScroll);

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [isHovered]);

  const handleManualScroll = (direction: "left" | "right") => {
    const container = containerRef.current;
    if (!container) return;

    const scrollAmount = 300;
    if (direction === "left") {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 md:py-24 bg-white border-y border-gray-100" aria-label="Our Trusted Clients">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        
        {/* Header with Navigation Buttons */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="h-[1px] w-6 bg-gold" />
              <span className="font-label text-xs tracking-widest text-gold uppercase font-semibold">
                Partnerships
              </span>
            </div>
            <h2 className="font-serif text-2xl md:text-3.5xl text-navy font-medium">
              Trusted by leading builders & developers
            </h2>
          </div>
          
          {/* Manual Navigation Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleManualScroll("left")}
              className="p-2 border border-gray-200 hover:border-gold hover:text-gold text-navy transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
              aria-label="Scroll clients left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => handleManualScroll("right")}
              className="p-2 border border-gray-200 hover:border-gold hover:text-gold text-navy transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
              aria-label="Scroll clients right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Marquee Viewport */}
        <div
          ref={containerRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="flex gap-12 overflow-x-auto scrollbar-hide py-4 items-center cursor-grab active:cursor-grabbing snap-x select-none"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {tripledClients.map((client, idx) => (
            <div
              key={`${client.name}-${idx}`}
              className="flex-shrink-0 w-40 md:w-48 h-20 relative grayscale opacity-45 hover:grayscale-0 hover:opacity-100 transition-all duration-500 snap-center"
            >
              <Image
                src={client.image}
                alt={`${client.name} logo`}
                fill
                sizes="180px"
                className="object-contain"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
