"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { teamData } from "@/data/team";
import { Eye, Shield, Compass, Sparkles, ArrowRight } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* 1. Hero Banner */}
      <section className="relative py-20 bg-navy text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="/images/projects/BA Swadesha.jpg"
            alt="VS Group Heritage"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/95 to-navy/70 z-10" />
        
        <div className="relative z-20 mx-auto max-w-7xl px-6 md:px-8 flex flex-col gap-4">
          <div className="inline-flex items-center gap-2">
            <span className="h-[1px] w-6 bg-gold" />
            <span className="font-label text-xs tracking-widest text-gold uppercase">About VS Group</span>
          </div>
          <h1 className="font-serif text-4xl md:text-6.5xl font-medium max-w-3xl leading-[1.1]">
            Our Heritage is Built on <span className="italic text-stroke-gold text-gold">Engineering</span> Trust
          </h1>
        </div>
      </section>

      {/* 2. Company Story Editorial */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 flex flex-col gap-6">
              <span className="font-label text-[10px] tracking-widest text-gold uppercase font-bold">Established 2015</span>
              <h2 className="font-serif text-2.5xl md:text-4xl text-navy font-semibold leading-snug">
                From a dedicated civil contractor to a premium developer panel.
              </h2>
              <p className="text-sm md:text-base text-charcoal/80 leading-relaxed font-sans">
                VS Group of Companies was founded in Pune in 2015 by Vasudev Achmeti and Suresh Achmeti, two engineering professionals with a vision to raise execution standards. Initially starting as a specialist RCC framework sub-contractor, we quickly earned a reputation for precision and structural integrity.
              </p>
              <p className="text-sm md:text-base text-charcoal/70 leading-relaxed font-sans">
                By delivering projects ahead of schedule, we established strong partnerships with Pune&apos;s leading builders including Bhandari Associates, Krishna Group, and Shaligram Buildcon. Today, VS Group handles comprehensive turnkey constructions, brick block masonry, gypsum plaster work, and premium residential/commercial developments.
              </p>
            </div>
            
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="relative h-[250px] md:h-[350px] w-full overflow-hidden bg-navy">
                <Image
                  src="/images/projects/Krishna Fairmont.jpg"
                  alt="Krishna Fairmont construction"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-[250px] md:h-[350px] w-full overflow-hidden bg-navy translate-y-6">
                <Image
                  src="/images/projects/Shaligram SKY.jpg"
                  alt="Shaligram SKY landmark"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Mission & Vision Cards */}
      <section className="py-20 bg-gray-50/50">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Mission */}
            <div className="bg-white border border-gray-200/50 p-8 md:p-12 flex flex-col gap-6 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-navy/5 flex items-center justify-center text-navy">
                <Compass className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-serif text-2xl text-navy font-bold">Our Mission</h3>
              <p className="text-sm text-charcoal/75 leading-relaxed font-sans">
                To engineer and deliver residential and commercial structures of unmatched quality, combining modern formwork, strict safety compliance, and on-time completion schedules. We are committed to establishing transparent client relationships built on trust and operational excellence.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white border border-gray-200/50 p-8 md:p-12 flex flex-col gap-6 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-navy/5 flex items-center justify-center text-navy">
                <Eye className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-serif text-2xl text-navy font-bold">Our Vision</h3>
              <p className="text-sm text-charcoal/75 leading-relaxed font-sans">
                To be recognized as India&apos;s leading engineering-driven construction and real estate brand, synonymous with craftsmanship, technological innovation, and architectural prominence that inspires community growth and defines city skylines.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Leadership Section */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 mb-4 justify-center">
              <span className="h-[1px] w-6 bg-gold" />
              <span className="font-label text-xs tracking-widest text-gold uppercase">Executives</span>
              <span className="h-[1px] w-6 bg-gold" />
            </div>
            <h2 className="font-serif text-3xl md:text-5xl text-navy font-medium mb-4">Our leadership team</h2>
            <p className="text-sm text-charcoal/60 leading-relaxed font-sans">
              Guided by experienced civil engineers and corporate strategists driving VS Group&apos;s long-term operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamData.map((member) => (
              <div key={member.name} className="bg-white border border-gray-200/60 p-6 flex flex-col gap-4 shadow-sm group hover:border-gold/25 transition-all">
                {/* Photo Frame */}
                <div className="relative aspect-square w-full bg-gray-50 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 30vw"
                    style={{ objectPosition: member.imagePosition || "center center" }}
                    className="object-cover transition-transform duration-500 group-hover:scale-103"
                  />
                </div>
                
                {/* Name & Role */}
                <div className="flex flex-col gap-1">
                  <h3 className="font-serif text-xl text-navy font-bold">{member.name}</h3>
                  <span className="font-label text-[10px] tracking-wider uppercase text-gold font-bold">
                    {member.role}
                  </span>
                </div>
                
                {/* Credentials list */}
                {member.credentials && (
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {member.credentials.map((cred) => (
                      <span key={cred} className="text-[9px] font-label uppercase bg-gray-100 text-charcoal/70 px-2 py-0.5 font-semibold">
                        {cred}
                      </span>
                    ))}
                  </div>
                )}
                
                <p className="text-xs md:text-sm text-charcoal/70 leading-relaxed font-sans pt-2 border-t border-gray-100">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/leadership"
              className="inline-flex items-center gap-2 font-label text-xs uppercase tracking-widest text-navy font-bold group hover:text-gold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
            >
              Read Full Leadership Profiles
              <ArrowRight className="w-4 h-4 text-gold group-hover:translate-x-1.5 transition-transform" />
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
