"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, AlertCircle } from "lucide-react";

// Form validation schema using Zod
const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().regex(/^[0-9]{10}$/, "Please enter a valid 10-digit mobile number"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  honeypot: z.string().optional(), // Hidden spam prevention honeypot
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<boolean | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
      honeypot: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    // If the honeypot is filled, assume it is a bot and ignore the submission silently
    if (data.honeypot) {
      console.warn("Spam bot detected!");
      setSubmitSuccess(true);
      return;
    }

    setIsSubmitting(true);
    setSubmitSuccess(null);

    try {
      // Simulate API submit delay
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      console.log("Contact form submitted successfully:", data);
      setSubmitSuccess(true);
      reset();
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitSuccess(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Hero Header */}
      <section className="bg-navy text-white py-16 md:py-20 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 md:px-8 relative z-10 flex flex-col gap-4">
          <div className="inline-flex items-center gap-2">
            <span className="h-[1px] w-6 bg-gold" />
            <span className="font-label text-xs tracking-widest text-gold uppercase">Contact Us</span>
          </div>
          <h1 className="font-serif text-4xl md:text-6.5xl font-medium leading-[1.1]">
            Let&apos;s Build <span className="italic text-stroke-gold text-gold">Together</span>
          </h1>
          <p className="text-white/60 text-xs md:text-sm font-sans max-w-lg mt-2">
            Get in touch with our engineering panel to consult on specifications, logistics, budgets, and schedules.
          </p>
        </div>
      </section>

      {/* Grid Layout: Form and Office info */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left side: Contact Details (Span 5) */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              <div>
                <h2 className="font-serif text-2.5xl md:text-4xl text-navy font-semibold mb-4">
                  Headquarters
                </h2>
                <p className="text-sm text-charcoal/70 leading-relaxed max-w-sm">
                  Visit our office to discuss joint ventures, material supply alignments, or turnkey project plans.
                </p>
              </div>

              <ul className="flex flex-col gap-6 text-sm">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-navy/5 flex items-center justify-center text-navy shrink-0">
                    <MapPin className="w-5 h-5 text-gold" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="font-label text-[10px] tracking-wider uppercase text-charcoal/40 font-bold">Office Address</span>
                    <span className="text-navy font-semibold leading-relaxed">
                      Krupa Heights, Ground Floor, Office No 1,<br/>
                      Beltika Nagar, Wakad, Pune, MH, India.<br/>
                      <span className="text-charcoal/50 text-xs italic">Opposite Prakash Flowrance Society</span>
                    </span>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-navy/5 flex items-center justify-center text-navy shrink-0">
                    <Phone className="w-5 h-5 text-gold" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="font-label text-[10px] tracking-wider uppercase text-charcoal/40 font-bold">Call Representatives</span>
                    <a href="tel:7499035904" className="text-navy font-semibold hover:text-gold transition-colors">74990 35904</a>
                    <a href="tel:7741000449" className="text-navy font-semibold hover:text-gold transition-colors">77410 00449</a>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-navy/5 flex items-center justify-center text-navy shrink-0">
                    <Mail className="w-5 h-5 text-gold" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="font-label text-[10px] tracking-wider uppercase text-charcoal/40 font-bold">Email Communications</span>
                    <a href="mailto:info@vsgroupofcompanies.com" className="text-navy font-semibold hover:text-gold transition-colors">
                      info@vsgroupofcompanies.com
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-navy/5 flex items-center justify-center text-navy shrink-0">
                    <Clock className="w-5 h-5 text-gold" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="font-label text-[10px] tracking-wider uppercase text-charcoal/40 font-bold">Operational Hours</span>
                    <span className="text-navy font-semibold">Monday - Saturday: 9:00 AM - 6:00 PM</span>
                    <span className="text-charcoal/50 text-xs">Closed on Sundays & Public Holidays</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Right side: Contact Form (Span 7) */}
            <div className="lg:col-span-7 bg-gray-50 border border-gray-200/60 p-8 md:p-12 shadow-sm">
              <h3 className="font-serif text-xl md:text-2xl text-navy font-semibold mb-6">
                Project Consultation Form
              </h3>

              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
                
                {/* Honeypot Spam Prevention (Hidden input) */}
                <input
                  type="text"
                  id="honeypot"
                  {...register("honeypot")}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name field */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="font-label text-[10px] tracking-wider uppercase text-charcoal/60 font-semibold">Your Name *</label>
                    <input
                      id="name"
                      type="text"
                      {...register("name")}
                      className={`bg-white border px-4 py-3 text-xs focus:outline-none focus:border-gold ${
                        errors.name ? "border-red-400" : "border-gray-200"
                      }`}
                    />
                    {errors.name && (
                      <span className="text-[10px] text-red-500 font-sans">{errors.name.message}</span>
                    )}
                  </div>

                  {/* Phone field */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="phone" className="font-label text-[10px] tracking-wider uppercase text-charcoal/60 font-semibold">Mobile Number *</label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="10-digit number"
                      {...register("phone")}
                      className={`bg-white border px-4 py-3 text-xs focus:outline-none focus:border-gold ${
                        errors.phone ? "border-red-400" : "border-gray-200"
                      }`}
                    />
                    {errors.phone && (
                      <span className="text-[10px] text-red-500 font-sans">{errors.phone.message}</span>
                    )}
                  </div>
                </div>

                {/* Email field */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="font-label text-[10px] tracking-wider uppercase text-charcoal/60 font-semibold">Email Address *</label>
                  <input
                    id="email"
                    type="email"
                    {...register("email")}
                    className={`bg-white border px-4 py-3 text-xs focus:outline-none focus:border-gold ${
                      errors.email ? "border-red-400" : "border-gray-200"
                    }`}
                  />
                  {errors.email && (
                    <span className="text-[10px] text-red-500 font-sans">{errors.email.message}</span>
                  )}
                </div>

                {/* Service Interest field */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="service" className="font-label text-[10px] tracking-wider uppercase text-charcoal/60 font-semibold">Service Requirement *</label>
                  <select
                    id="service"
                    {...register("service")}
                    className={`bg-white border px-4 py-3 text-xs focus:outline-none focus:border-gold ${
                      errors.service ? "border-red-400" : "border-gray-200"
                    }`}
                  >
                    <option value="">Select Service Area</option>
                    <option value="commercial">Commercial Construction</option>
                    <option value="residential">Residential Construction</option>
                    <option value="rcc">RCC Framework Work</option>
                    <option value="bbm">Brick & Block Masonry (BBM)</option>
                    <option value="plaster">Plastering (Gypsum/External)</option>
                    <option value="turnkey">Lock & Key Turnkey Development</option>
                  </select>
                  {errors.service && (
                    <span className="text-[10px] text-red-500 font-sans">{errors.service.message}</span>
                  )}
                </div>

                {/* Message field */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="font-label text-[10px] tracking-wider uppercase text-charcoal/60 font-semibold">Project Outline *</label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Briefly outline details like size, location, and preferred schedules..."
                    {...register("message")}
                    className={`bg-white border px-4 py-3 text-xs focus:outline-none focus:border-gold ${
                      errors.message ? "border-red-400" : "border-gray-200"
                    }`}
                  />
                  {errors.message && (
                    <span className="text-[10px] text-red-500 font-sans">{errors.message.message}</span>
                  )}
                </div>

                {/* Submit Feedback */}
                {submitSuccess === true && (
                  <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-4 flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                    <span className="text-xs font-sans">
                      Thank you! Your project consultation outline has been sent. Our senior representative will call you shortly.
                    </span>
                  </div>
                )}

                {submitSuccess === false && (
                  <div className="bg-red-50 border border-red-200 text-red-800 p-4 flex items-center gap-3">
                    <AlertCircle className="w-5 h-5 text-red-500 shrink-0" />
                    <span className="text-xs font-sans">
                      Oops! There was a problem submitting your outline. Please try calling us directly.
                    </span>
                  </div>
                )}

                {/* Submit Trigger */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 bg-navy hover:bg-charcoal text-white font-label text-xs uppercase tracking-widest py-4 transition-colors font-bold cursor-pointer disabled:bg-gray-300 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending outline..." : "Send Proposal Outline"}
                  <Send className="w-4 h-4 text-gold" />
                </button>

              </form>
            </div>

          </div>
        </div>
      </section>

      {/* Map Embed Section */}
      <section className="h-[400px] w-full border-t border-gray-200 bg-gray-100">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.6508933390317!2d73.75338167519343!3d18.59092498251648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1m3!1d3781.6508933390317!2d73.75338167519343!3d18.59092498251648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          title="VS Group Headquarters Location Map"
          aria-label="Google Map showing VS Group Wakad Pune office"
        />
      </section>
    </div>
  );
}
