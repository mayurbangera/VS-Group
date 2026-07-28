"use client";

import { useState, useEffect } from "react";
import { Phone, MessageSquare, ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        
        {/* WhatsApp Call to Action */}
        <a
          href="https://wa.me/917499035904?text=Hello%20VS%20Group,%20I%20am%20interested%20in%20your%20services."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-12 h-12 rounded-full bg-[#25D366] text-white shadow-xl hover:scale-110 transition-transform duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500"
          aria-label="Contact us on WhatsApp"
        >
          <MessageSquare className="w-5.5 h-5.5 fill-current" />
        </a>

        {/* Instant Phone Connection */}
        <a
          href="tel:7499035904"
          className="flex items-center justify-center w-12 h-12 rounded-full bg-gold text-navy shadow-xl hover:scale-110 transition-transform duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
          aria-label="Call VS Group representative"
        >
          <Phone className="w-5.5 h-5.5 fill-current" />
        </a>

        {/* Back To Top Trigger */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              key="back-to-top"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={scrollToTop}
              className="flex items-center justify-center w-12 h-12 rounded-full bg-navy text-gold border border-gold/20 shadow-xl hover:bg-charcoal hover:scale-110 transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              aria-label="Scroll to top of page"
            >
              <ArrowUp className="w-5.5 h-5.5" />
            </motion.button>
          )}
        </AnimatePresence>

      </div>

      {/* Sticky Mobile CTA Strip */}
      <div className="fixed bottom-0 left-0 right-0 z-30 flex md:hidden bg-navy/90 border-t border-white/10 backdrop-blur-md">
        <a
          href="tel:7499035904"
          className="flex-1 flex items-center justify-center gap-2 py-3.5 text-xs font-label uppercase tracking-widest text-white border-r border-white/5 hover:bg-white/5 transition-colors"
        >
          <Phone className="w-4 h-4 text-gold" />
          Call Now
        </a>
        <a
          href="https://wa.me/917499035904"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-3.5 text-xs font-label uppercase tracking-widest text-navy bg-gold hover:bg-gold-hover transition-colors font-bold"
        >
          <MessageSquare className="w-4 h-4" />
          WhatsApp
        </a>
      </div>
    </>
  );
}
