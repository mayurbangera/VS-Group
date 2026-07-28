"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonialsData } from "@/data/testimonials";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  return (
    <section className="py-20 md:py-28 bg-gray-50/50" aria-label="Client Testimonials">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        
        {/* Core Testimonial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Editorial Headers & Navigation */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2">
              <span className="h-[1px] w-8 bg-gold" />
              <span className="font-label text-xs tracking-widest text-gold uppercase font-semibold">
                Testimonials
              </span>
            </div>
            
            <h2 className="font-serif text-3xl md:text-5xl text-navy leading-[1.15] font-medium">
              What our developers say about us
            </h2>
            
            <p className="text-sm text-charcoal/70 leading-relaxed font-sans max-w-sm">
              We have completed multi-crore civil works for Pune&apos;s premium residential and commercial developers. Here is their honest assessment of our performance.
            </p>

            {/* Testimonials Navigation buttons */}
            <div className="flex items-center gap-3 mt-4">
              <button
                onClick={handlePrev}
                className="p-3 border border-gray-200 hover:border-gold hover:text-gold text-navy transition-all duration-300 rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="p-3 border border-gray-200 hover:border-gold hover:text-gold text-navy transition-all duration-300 rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Right Side: Quote Carousel Box */}
          <div className="lg:col-span-7 bg-white border border-gray-200/60 p-8 md:p-12 relative min-h-[320px] flex flex-col justify-between shadow-lg">
            {/* Background luxury quote mark */}
            <Quote className="absolute top-8 right-8 w-24 h-24 text-gray-100 -z-0 opacity-40" />

            <div className="relative z-10 flex flex-col gap-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col gap-6"
                >
                  <p className="font-serif text-lg md:text-xl leading-relaxed text-navy italic">
                    &ldquo;{testimonialsData[activeIndex].quote}&rdquo;
                  </p>
                  
                  <div className="flex flex-col gap-1">
                    <span className="font-serif text-base text-navy font-bold">
                      {testimonialsData[activeIndex].name}
                    </span>
                    <span className="font-label text-[10px] tracking-wider uppercase text-gold font-semibold">
                      {testimonialsData[activeIndex].role}, {testimonialsData[activeIndex].company}
                    </span>
                    <span className="text-[10px] text-charcoal/40 font-sans">
                      Associated Project: {testimonialsData[activeIndex].projectAssociated}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Carousel Progress indicator line */}
            <div className="w-full bg-gray-100 h-[2px] mt-8 relative overflow-hidden">
              <motion.div
                className="absolute top-0 bottom-0 left-0 bg-gold"
                initial={{ width: "0%" }}
                animate={{ width: `${((activeIndex + 1) / testimonialsData.length) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
