"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Hide loading screen after 2.2 seconds
    const timer = setTimeout(() => {
      setLoading(false);
      // Enable scroll
      document.documentElement.style.overflow = "";
    }, 2200);

    // Disable scroll during load
    document.documentElement.style.overflow = "hidden";

    return () => {
      clearTimeout(timer);
      document.documentElement.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-navy"
        >
          {/* Subtle elegant background radial glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,168,76,0.08)_0%,transparent_70%)]" />

          <div className="relative flex flex-col items-center">
            {/* Logo Animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 15 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
                transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
              }}
              className="relative w-40 h-40 md:w-48 md:h-48"
            >
              <Image
                src="/images/logo/VS Group logo.png"
                alt="VS Group Logo"
                fill
                priority
                className="object-contain filter brightness-100"
              />
            </motion.div>

            {/* Subtext and Progress bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8, transition: { delay: 0.6, duration: 0.8 } }}
              className="mt-6 flex flex-col items-center gap-3 text-center"
            >
              <span className="font-label text-xs tracking-[0.3em] text-gold uppercase">
                Engineering Excellence
              </span>
              
              {/* Progress Line */}
              <div className="relative h-[2px] w-36 overflow-hidden bg-white/10">
                <motion.div
                  initial={{ left: "-100%" }}
                  animate={{ left: "100%", transition: { repeat: Infinity, duration: 1.5, ease: "easeInOut" } }}
                  className="absolute top-0 bottom-0 w-2/3 bg-gold"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
