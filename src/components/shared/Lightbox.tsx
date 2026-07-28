"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface LightboxProps {
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function Lightbox({
  images,
  currentIndex,
  onClose,
  onNavigate,
}: LightboxProps) {
  const handlePrev = useCallback(() => {
    onNavigate((currentIndex - 1 + images.length) % images.length);
  }, [currentIndex, images.length, onNavigate]);

  const handleNext = useCallback(() => {
    onNavigate((currentIndex + 1) % images.length);
  }, [currentIndex, images.length, onNavigate]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    // Disable scroll on page
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose, handlePrev, handleNext]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-navy/95 backdrop-blur-md"
        role="dialog"
        aria-modal="true"
        aria-label="Image lightbox gallery"
      >
        {/* Overlay click to close */}
        <div className="absolute inset-0 cursor-zoom-out" onClick={onClose} />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-10 text-white/70 hover:text-white p-2 border border-white/10 hover:border-white/30 rounded-full transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
          aria-label="Close gallery"
          autoFocus
        >
          <X className="w-6 h-6" />
        </button>

        {/* Image Display */}
        <div className="relative w-full max-w-5xl aspect-video max-h-[80vh] px-4 md:px-12 flex items-center justify-center">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="relative w-full h-[65vh] md:h-[75vh]"
          >
            <Image
              src={images[currentIndex]}
              alt={`Gallery image ${currentIndex + 1}`}
              fill
              sizes="(max-width: 1200px) 100vw, 80vw"
              className="object-contain"
            />
          </motion.div>
        </div>

        {/* Navigation Buttons */}
        {images.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-3 border border-white/10 hover:border-white/30 rounded-full transition-all bg-navy/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-3 border border-white/10 hover:border-white/30 rounded-full transition-all bg-navy/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Pagination indicator */}
            <div className="absolute bottom-6 font-label text-xs tracking-widest text-white/60">
              {currentIndex + 1} / {images.length}
            </div>
          </>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
