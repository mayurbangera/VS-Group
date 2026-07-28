"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { statsData } from "@/data/stats";
import { ArrowRight } from "lucide-react";

export default function AboutStrip() {
  return (
    <section className="py-20 md:py-28 bg-white" aria-label="About Teaser">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        
        {/* Core Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Story Editorial */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2">
              <span className="h-[1px] w-8 bg-gold" />
              <span className="font-label text-xs tracking-widest text-gold uppercase font-semibold">
                About VS Group
              </span>
            </div>
            
            <h2 className="font-serif text-3xl md:text-5xl text-navy leading-[1.15] font-medium">
              We shape modern spaces with structural integrity and precision.
            </h2>
            
            <p className="text-sm md:text-base text-white/70 text-charcoal/80 leading-relaxed font-sans max-w-2xl">
              Founded in 2015 by Vasudev Achmeti and Suresh Achmeti, VS Group of Companies has grown into Pune&apos;s leading engineering-first real estate developer and civil contractor. We approach construction as a craft, integrating premium RCC works, brick masonry, plaster finishes, and turnkey operations. Our structures host thousands of families and businesses with enduring quality.
            </p>

            <div className="pt-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 font-label text-xs uppercase tracking-widest text-navy font-bold group hover:text-gold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
              >
                Discover Our Heritage
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform text-gold" />
              </Link>
            </div>
          </div>

          {/* Right Column: Premium Collage Image Frame */}
          <div className="lg:col-span-5 relative w-full h-[350px] md:h-[420px]">
            <div className="absolute inset-0 border border-gold/20 translate-x-4 translate-y-4 z-0" />
            <div className="absolute inset-0 z-10 overflow-hidden bg-navy">
              <Image
                src="/images/projects/BA Swadesha.jpg"
                alt="BA Swadesha Structural Construction"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>

        </div>

        {/* Counter Block Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 mt-16 border-t border-gray-200">
          {statsData.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              className="flex flex-col gap-1 text-center md:text-left"
            >
              <span className="font-serif text-3xl md:text-5xl text-navy font-bold text-stroke-gold block">
                {stat.value}
              </span>
              <span className="font-label text-[10px] md:text-xs tracking-wider uppercase text-charcoal font-semibold">
                {stat.label}
              </span>
              <span className="text-[11px] text-charcoal/50 leading-normal">
                {stat.subtext}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
