"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Star, Cpu, Hourglass, Eye, Heart } from "lucide-react";

const values = [
  {
    icon: ShieldCheck,
    title: "Integrity",
    description: "We align our actions with honesty, compliance, and strict code integrity across all operations."
  },
  {
    icon: Star,
    title: "Quality",
    description: "Every rebar, concrete slab, brick wall, and plaster finish is built to last centuries."
  },
  {
    icon: Cpu,
    title: "Innovation",
    description: "We deploy modern formwork, self-compacting concrete, and automated systems on site."
  },
  {
    icon: Hourglass,
    title: "Commitment",
    description: "We deliver on-time, respecting budgets and builder agreements with perfect precision."
  },
  {
    icon: Eye,
    title: "Transparency",
    description: "From material invoice reports to timeline logs, we maintain open-book client clarity."
  },
  {
    icon: Heart,
    title: "Customer First",
    description: "We build layouts that prioritize actual space usability, natural lighting, and long-term convenience."
  }
];

export default function CoreValues() {
  return (
    <section className="py-20 md:py-28 bg-gray-50/50" aria-label="Core Values">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 mb-4 justify-center">
            <span className="h-[1px] w-6 bg-gold" />
            <span className="font-label text-xs tracking-widest text-gold uppercase font-semibold">
              Our Principles
            </span>
            <span className="h-[1px] w-6 bg-gold" />
          </div>
          
          <h2 className="font-serif text-3xl md:text-5xl text-navy leading-snug font-medium mb-4">
            The values that cement our foundation
          </h2>
          <p className="text-sm md:text-base text-charcoal/60 leading-relaxed font-sans">
            Every brick we lay and contract we sign is guided by the philosophy of structural integrity, financial safety, and engineering excellence.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {values.map((val, idx) => {
            const Icon = val.icon;
            return (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="bg-white border border-gray-200/60 p-8 flex flex-col gap-4 shadow-sm hover:shadow-xl hover:border-gold/30 hover:-translate-y-1 transition-all duration-300 group"
              >
                {/* Icon Circle */}
                <div className="w-12 h-12 rounded-full bg-navy/5 flex items-center justify-center text-navy group-hover:bg-gold group-hover:text-navy transition-all duration-300">
                  <Icon className="w-5.5 h-5.5" />
                </div>
                
                <h3 className="font-serif text-xl text-navy font-semibold group-hover:text-gold transition-colors duration-300">
                  {val.title}
                </h3>
                
                <p className="text-xs md:text-sm text-charcoal/70 leading-relaxed font-sans">
                  {val.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
