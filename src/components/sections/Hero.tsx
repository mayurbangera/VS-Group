"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section 
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-navy"
      aria-label="Welcome Banner"
    >
      {/* Background Image with Dark Vignette */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/projects/7 Plumeria Drive.jpg"
          alt="VS Group Landmark Architecture"
          fill
          priority
          className="object-cover object-center opacity-45 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-transparent to-navy/40" />
      </div>

      {/* Cinematic Content overlay */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-8 w-full text-center md:text-left mt-16">
        <div className="max-w-3xl">
          
          {/* Subtle Label */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.3, duration: 0.8 }}
            className="inline-flex items-center gap-2 mb-6"
          >
            <span className="h-[1px] w-8 bg-gold" />
            <span className="font-label text-xs tracking-[0.4em] text-gold uppercase font-semibold">
              VS Group of Companies
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 0.8 }}
            className="font-serif text-4xl sm:text-5xl md:text-7xl text-white font-medium leading-[1.1] mb-6"
          >
            Engineering <span className="italic text-stroke-gold">Excellence.</span><br/>
            Delivering Trust.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.7, duration: 0.8 }}
            className="text-white/70 text-sm sm:text-base md:text-lg leading-relaxed mb-10 max-w-xl font-sans"
          >
            A premium real estate, civil contracting, and infrastructure firm constructing landmark commercial, residential, and turnkey developments in Pune since 2015.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.9, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start"
          >
            <Link
              href="/projects"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-hover text-navy font-label text-xs uppercase tracking-widest px-8 py-4 font-semibold transition-all duration-300 group focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
            >
              Explore Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white/50 text-white font-label text-xs uppercase tracking-widest px-8 py-4 transition-all duration-300 bg-white/5 backdrop-blur-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
            >
              Get In Touch
            </Link>
          </motion.div>

        </div>
      </div>

      {/* Animated Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ delay: 3.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 text-[10px] font-label uppercase tracking-[0.25em]"
      >
        <span>Scroll Down</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ChevronDown className="w-4 h-4 text-gold" />
        </motion.div>
      </motion.div>
    </section>
  );
}
