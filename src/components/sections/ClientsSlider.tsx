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
  const isManualScrollingRef = useRef(false);
  const manualTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Triple the items to ensure seamless infinite looping when scrolling
  const tripledClients = [...clientsData, ...clientsData, ...clientsData];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Start with scroll position in the middle set to allow immediate left scrolling
    if (container.scrollLeft === 0) {
      const initialOffset = container.scrollWidth / 3;
      container.scrollLeft = initialOffset;
    }

    const performScroll = () => {
      if (isHovered || isManualScrollingRef.current) {
        animationFrameId.current = requestAnimationFrame(performScroll);
        return;
      }

      container.scrollLeft += scrollSpeed;

      // Seamless wrap-around when reaching the end of the second set
      const firstSetWidth = container.scrollWidth / 3;
      if (container.scrollLeft >= firstSetWidth * 2) {
        container.scrollLeft -= firstSetWidth;
      } else if (container.scrollLeft <= 5) {
        container.scrollLeft += firstSetWidth;
      }

      animationFrameId.current = requestAnimationFrame(performScroll);
    };

    animationFrameId.current = requestAnimationFrame(performScroll);

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      if (manualTimeoutRef.current) {
        clearTimeout(manualTimeoutRef.current);
      }
    };
  }, [isHovered]);

  const handleManualScroll = (direction: "left" | "right") => {
    const container = containerRef.current;
    if (!container) return;

    isManualScrollingRef.current = true;
    if (manualTimeoutRef.current) {
      clearTimeout(manualTimeoutRef.current);
    }

    const firstSetWidth = container.scrollWidth / 3;
    const scrollStep = 320;

    if (direction === "left") {
      if (container.scrollLeft <= scrollStep) {
        container.scrollLeft += firstSetWidth;
      }
      container.scrollBy({ left: -scrollStep, behavior: "smooth" });
    } else {
      if (container.scrollLeft >= firstSetWidth * 2 - scrollStep) {
        container.scrollLeft -= firstSetWidth;
      }
      container.scrollBy({ left: scrollStep, behavior: "smooth" });
    }

    // Resume auto-scroll after smooth scroll animation settles
    manualTimeoutRef.current = setTimeout(() => {
      isManualScrollingRef.current = false;
    }, 1000);
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
              className="p-3 border border-gray-200 hover:border-gold hover:text-gold text-navy transition-all duration-300 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold active:scale-95"
              aria-label="Scroll clients left"
              type="button"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => handleManualScroll("right")}
              className="p-3 border border-gray-200 hover:border-gold hover:text-gold text-navy transition-all duration-300 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold active:scale-95"
              aria-label="Scroll clients right"
              type="button"
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
          className="flex gap-12 overflow-x-auto scrollbar-hide py-4 items-center cursor-grab active:cursor-grabbing select-none"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {tripledClients.map((client, idx) => (
            <div
              key={`${client.name}-${idx}`}
              className="flex-shrink-0 w-40 md:w-48 h-20 relative grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
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
