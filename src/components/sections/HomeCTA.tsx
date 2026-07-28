"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, Mail, ArrowUpRight, MessageSquare } from "lucide-react";

export default function HomeCTA() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-navy text-white" aria-label="Call to Action">
      {/* Background Graphic elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(201,168,76,0.08)_0%,transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.02)_0%,transparent_50%)]" />

      <div className="mx-auto max-w-5xl px-6 md:px-8 relative z-10 text-center flex flex-col items-center">
        
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 mb-6"
        >
          <span className="h-[1px] w-6 bg-gold" />
          <span className="font-label text-xs tracking-widest text-gold uppercase font-semibold">
            Partner With Us
          </span>
          <span className="h-[1px] w-6 bg-gold" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="font-serif text-4xl sm:text-5xl md:text-6.5xl leading-[1.15] font-medium mb-8 max-w-3xl"
        >
          Let&apos;s build the future <span className="italic text-stroke-gold text-gold">together.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-white/60 text-sm md:text-base leading-relaxed mb-12 max-w-lg font-sans"
        >
          Have an upcoming residential landmark or commercial corporate space? Get in touch with Pune&apos;s premier engineering team to outline cost models, timelines, and blueprint structures.
        </motion.p>

        {/* Action Button Panels */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-4 w-full"
        >
          {/* Main Inquire Button */}
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-gold hover:bg-gold-hover text-navy font-label text-xs uppercase tracking-widest px-8 py-4 font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
          >
            Inquire Online
            <ArrowUpRight className="w-4 h-4" />
          </Link>

          {/* Quick Call */}
          <a
            href="tel:7499035904"
            className="inline-flex items-center gap-2 border border-white/10 hover:border-white/30 text-white bg-white/5 backdrop-blur-sm font-label text-xs uppercase tracking-widest px-8 py-4 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
          >
            <Phone className="w-4 h-4 text-gold" />
            Call Representative
          </a>

          {/* Quick WhatsApp */}
          <a
            href="https://wa.me/917499035904"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-white/10 hover:border-white/30 text-white bg-white/5 backdrop-blur-sm font-label text-xs uppercase tracking-widest px-8 py-4 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
          >
            <MessageSquare className="w-4 h-4 text-emerald-400" />
            WhatsApp Chat
          </a>
        </motion.div>

      </div>
    </section>
  );
}
