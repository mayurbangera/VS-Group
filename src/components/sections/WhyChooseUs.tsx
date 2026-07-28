"use client";

import { motion } from "framer-motion";
import { HardHat, Landmark, Clock, Award, ShieldAlert, BadgeHelp } from "lucide-react";

const benefits = [
  {
    icon: HardHat,
    title: "Engineering Excellence",
    description: "Every structure is designed using high-spec RCC codes and rigorous safety limits."
  },
  {
    icon: Landmark,
    title: "Premium Quality",
    description: "We use curated fly-ash blocks, grade-A steel rebars, and premium concrete mixes."
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    description: "Our logistics and operation teams align site schedules to prevent client project delays."
  },
  {
    icon: Award,
    title: "Experienced Team",
    description: "Our founders and engineers average 20+ years of infrastructure and project management experience."
  },
  {
    icon: ShieldAlert,
    title: "Client Satisfaction",
    description: "We collaborate closely with prominent real estate brands to translate blueprints to landmarks."
  },
  {
    icon: BadgeHelp,
    title: "Complete Transparency",
    description: "We verify material logs and maintain open invoices to establish permanent corporate trust."
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 md:py-28 bg-gray-50/50" aria-label="Why Choose Us">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        
        {/* Core Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Story & Teaser */}
          <div className="lg:col-span-4 flex flex-col gap-6 lg:sticky lg:top-32">
            <div className="inline-flex items-center gap-2">
              <span className="h-[1px] w-8 bg-gold" />
              <span className="font-label text-xs tracking-widest text-gold uppercase font-semibold">
                Why VS Group
              </span>
            </div>
            
            <h2 className="font-serif text-3xl md:text-5xl text-navy leading-[1.15] font-medium">
              Over a decade of constructive partnerships.
            </h2>
            
            <p className="text-sm text-charcoal/70 leading-relaxed font-sans">
              We approach every contract as a long-term commitment. By prioritizing concrete strength testing, wall leveling tolerances, and open logistics invoicing, we ensure a premium experience.
            </p>
          </div>

          {/* Right Column: Grid of Benefit Cards */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.6 }}
                  className="bg-white border border-gray-200/50 p-6 flex flex-col gap-3 hover:border-gold/30 hover:shadow-md transition-all duration-300 group"
                >
                  <div className="text-navy group-hover:text-gold transition-colors duration-300">
                    <Icon className="w-6 h-6 stroke-[1.5]" />
                  </div>
                  
                  <h3 className="font-serif text-lg text-navy font-semibold">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-xs md:text-sm text-charcoal/60 leading-relaxed font-sans">
                    {benefit.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
