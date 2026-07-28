"use client";

import { motion } from "framer-motion";
import { MessageSquareCode, DraftingCompass, Calculator, HardHat, ShieldCheck, CheckCircle2 } from "lucide-react";

const steps = [
  {
    icon: MessageSquareCode,
    title: "1. Consultation",
    subtitle: "Strategic Alignment",
    description: "Aligning on project scale, architectural objectives, budget limits, feasibility structures, and partnership terms."
  },
  {
    icon: DraftingCompass,
    title: "2. Planning",
    subtitle: "Architectural Mapping",
    description: "Finalizing concrete grade specifications, structural rebar densities, timeline projections, and material logistics schedules."
  },
  {
    icon: Calculator,
    title: "3. Engineering",
    subtitle: "Precision Formulation",
    description: "Calculating load-bearing configurations, step-foundation frameworks, soil safety reports, and structural mix designs."
  },
  {
    icon: HardHat,
    title: "4. Construction",
    subtitle: "Active Realization",
    description: "Mobilizing heavy machinery, casting high-strength RCC skeletons, laying BBM walls, and completing gypsum plaster details."
  },
  {
    icon: ShieldCheck,
    title: "5. Quality Check",
    subtitle: "Rigorous Audits",
    description: "Performing concrete cube compression testing, wall verticality alignment reviews, and moisture-proofing seal audits."
  },
  {
    icon: CheckCircle2,
    title: "6. Delivery",
    subtitle: "Occupancy Handover",
    description: "Polishing all lock-and-key parameters, finalizing active utility grids, testing MEP details, and handing over the keys."
  }
];

export default function Timeline() {
  return (
    <section className="py-20 md:py-28 bg-white" aria-label="Construction Process">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 mb-4 justify-center">
            <span className="h-[1px] w-6 bg-gold" />
            <span className="font-label text-xs tracking-widest text-gold uppercase font-semibold">
              Our Process
            </span>
            <span className="h-[1px] w-6 bg-gold" />
          </div>
          
          <h2 className="font-serif text-3xl md:text-5xl text-navy leading-snug font-medium mb-4">
            How we construct our masterpieces
          </h2>
          <p className="text-sm md:text-base text-charcoal/60 leading-relaxed font-sans">
            A step-by-step commitment to quality controls, material standards, and structural testing schedules.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l border-gray-200/80 max-w-3xl mx-auto pl-6 md:pl-10 flex flex-col gap-12 md:gap-16">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                {/* Timeline Node dot */}
                <div className="absolute -left-[37px] md:-left-[53px] top-0 w-6 h-6 md:w-8 md:h-8 rounded-full bg-white border border-gold flex items-center justify-center text-navy shadow-sm z-10">
                  <Icon className="w-3.5 h-3.5 md:w-4.5 md:h-4.5 text-gold stroke-[2]" />
                </div>
                
                {/* Content Box */}
                <div className="flex flex-col gap-2">
                  <span className="font-label text-[10px] md:text-xs tracking-widest uppercase text-gold font-bold">
                    {step.subtitle}
                  </span>
                  
                  <h3 className="font-serif text-xl text-navy font-semibold">
                    {step.title}
                  </h3>
                  
                  <p className="text-xs md:text-sm text-charcoal/70 leading-relaxed font-sans max-w-xl">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
