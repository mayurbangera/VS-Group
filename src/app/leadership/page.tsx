"use client";

import Image from "next/image";
import Link from "next/link";
import { teamData } from "@/data/team";
import { Check, Mail, Phone, ShieldCheck, HardHat, Award } from "lucide-react";

export default function LeadershipPage() {
  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Hero Header */}
      <section className="bg-navy text-white py-16 md:py-20 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 md:px-8 relative z-10 flex flex-col gap-4">
          <div className="inline-flex items-center gap-2">
            <span className="h-[1px] w-6 bg-gold" />
            <span className="font-label text-xs tracking-widest text-gold uppercase">Leadership</span>
          </div>
          <h1 className="font-serif text-4xl md:text-6.5xl font-medium leading-[1.1]">
            Executive <span className="italic text-stroke-gold text-gold">Governance</span>
          </h1>
          <p className="text-white/60 text-xs md:text-sm font-sans max-w-lg mt-2">
            Meet the experienced engineers, builders, and corporate strategists directing VS Group&apos;s operations.
          </p>
        </div>
      </section>

      {/* Leadership Editorial Rows */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-8 flex flex-col gap-20 md:gap-28">
          {teamData.map((member, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <div
                key={member.name}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
              >
                
                {/* Photo Column */}
                <div className={`lg:col-span-5 relative aspect-square w-full bg-gray-50 border border-gray-200/50 overflow-hidden ${
                  isEven ? "lg:order-1" : "lg:order-2"
                }`}>
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 35vw"
                    className="object-cover"
                    priority={idx === 0}
                  />
                </div>

                {/* Content Column */}
                <div className={`lg:col-span-7 flex flex-col gap-6 ${
                  isEven ? "lg:order-2" : "lg:order-1"
                }`}>
                  <div className="flex flex-col gap-1">
                    <span className="font-label text-[10px] tracking-widest text-gold uppercase font-bold">
                      {member.role}
                    </span>
                    <h2 className="font-serif text-2.5xl md:text-4xl text-navy font-semibold">
                      {member.name}
                    </h2>
                  </div>

                  {/* Credentials / Badges */}
                  {member.credentials && (
                    <div className="flex flex-wrap gap-2">
                      {member.credentials.map((cred) => (
                        <span
                          key={cred}
                          className="text-[9px] font-label uppercase bg-gray-100 text-charcoal/80 px-2.5 py-1 font-semibold border border-gray-200/40"
                        >
                          {cred}
                        </span>
                      ))}
                    </div>
                  )}

                  <p className="text-sm md:text-base text-charcoal/80 leading-relaxed font-sans border-t border-gray-100 pt-6">
                    {member.bio}
                  </p>

                  <div className="flex flex-col gap-3 pt-2">
                    <h4 className="font-label text-[10px] tracking-widest uppercase font-bold text-navy">
                      Key Responsibilities
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs md:text-sm text-charcoal/70">
                      {idx === 0 && (
                        <>
                          <li className="flex items-center gap-2"><Check className="w-4 h-4 text-gold shrink-0" /> Strategic growth board</li>
                          <li className="flex items-center gap-2"><Check className="w-4 h-4 text-gold shrink-0" /> Land acquisitions approval</li>
                          <li className="flex items-center gap-2"><Check className="w-4 h-4 text-gold shrink-0" /> Quality control policy</li>
                          <li className="flex items-center gap-2"><Check className="w-4 h-4 text-gold shrink-0" /> Joint venture partnerships</li>
                        </>
                      )}
                      {idx === 1 && (
                        <>
                          <li className="flex items-center gap-2"><Check className="w-4 h-4 text-gold shrink-0" /> On-site logistics supervision</li>
                          <li className="flex items-center gap-2"><Check className="w-4 h-4 text-gold shrink-0" /> Machinery & equipment scheduling</li>
                          <li className="flex items-center gap-2"><Check className="w-4 h-4 text-gold shrink-0" /> Construction safety protocols</li>
                          <li className="flex items-center gap-2"><Check className="w-4 h-4 text-gold shrink-0" /> Casting timelines monitoring</li>
                        </>
                      )}
                      {idx === 2 && (
                        <>
                          <li className="flex items-center gap-2"><Check className="w-4 h-4 text-gold shrink-0" /> Client relations & management</li>
                          <li className="flex items-center gap-2"><Check className="w-4 h-4 text-gold shrink-0" /> Corporate finance & planning</li>
                          <li className="flex items-center gap-2"><Check className="w-4 h-4 text-gold shrink-0" /> Material procurement oversight</li>
                          <li className="flex items-center gap-2"><Check className="w-4 h-4 text-gold shrink-0" /> Project feasibility consulting</li>
                        </>
                      )}
                    </ul>
                  </div>

                </div>

              </div>
            );
          })}
        </div>
      </section>

      {/* Engineering values section */}
      <section className="py-20 bg-gray-50 border-t border-gray-200/50">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-serif text-3xl md:text-5xl text-navy font-semibold">
              Our Organizational Strength
            </h2>
            <p className="text-xs md:text-sm text-charcoal/60 leading-relaxed font-sans mt-3">
              Beyond our core executives, VS Group employs a permanent team of civil engineers, testing specialists, site foremen, and project planners.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 border border-gray-200/60 shadow-sm flex flex-col gap-4">
              <HardHat className="w-8 h-8 text-gold" />
              <h3 className="font-serif text-lg text-navy font-bold">120+ On-Site Engineers</h3>
              <p className="text-xs text-charcoal/60 leading-relaxed">
                Supervising rebar layouts, concrete casting weights, and blockwork alignments daily.
              </p>
            </div>
            <div className="bg-white p-8 border border-gray-200/60 shadow-sm flex flex-col gap-4">
              <ShieldCheck className="w-8 h-8 text-gold" />
              <h3 className="font-serif text-lg text-navy font-bold">Zero-Accident Safety Record</h3>
              <p className="text-xs text-charcoal/60 leading-relaxed">
                Adhering to strict occupational health codes and advanced scaffolding safety nets.
              </p>
            </div>
            <div className="bg-white p-8 border border-gray-200/60 shadow-sm flex flex-col gap-4">
              <Award className="w-8 h-8 text-gold" />
              <h3 className="font-serif text-lg text-navy font-bold">Rigorous Material Audits</h3>
              <p className="text-xs text-charcoal/60 leading-relaxed">
                Subjecting every batch of steel and cement to independent lab compression and tension testing.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
