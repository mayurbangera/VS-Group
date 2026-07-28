"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  className?: string;
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = "Before Construction",
  afterLabel = "Finished Structure",
  className = "",
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50); // percentage 0 - 100
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  }, []);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  }, [isDragging, handleMove]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  }, [isDragging, handleMove]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("touchend", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      setSliderPosition((prev) => Math.max(0, prev - 5));
    } else if (e.key === "ArrowRight") {
      setSliderPosition((prev) => Math.min(100, prev + 5));
    }
  };

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden select-none aspect-video md:aspect-[21/9] w-full border border-gold/10 ${className}`}
      onMouseDown={() => setIsDragging(true)}
      onTouchStart={() => setIsDragging(true)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="slider"
      aria-label="Image comparison slider"
      aria-valuenow={sliderPosition}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      {/* After Image (Full width background) */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={afterImage}
          alt="Completed structure"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 85vw"
          className="object-cover"
        />
        <div className="absolute bottom-4 right-4 bg-navy/80 backdrop-blur-sm text-gold border border-gold/20 font-label text-[10px] uppercase tracking-widest px-3 py-1.5 font-bold">
          {afterLabel}
        </div>
      </div>

      {/* Before Image (Clipped width) */}
      <div
        className="absolute inset-y-0 left-0 overflow-hidden"
        style={{ width: `${sliderPosition}%` }}
      >
        <div className="absolute inset-y-0 left-0 w-full h-full aspect-video md:aspect-[21/9]" style={{ width: containerRef.current?.getBoundingClientRect().width }}>
          <Image
            src={beforeImage}
            alt="Site before construction"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 85vw"
            className="object-cover"
          />
        </div>
        <div className="absolute bottom-4 left-4 bg-charcoal/80 backdrop-blur-sm text-white/90 border border-white/10 font-label text-[10px] uppercase tracking-widest px-3 py-1.5">
          {beforeLabel}
        </div>
      </div>

      {/* Slider Line Divider */}
      <div
        className="absolute inset-y-0 w-[2px] bg-gold cursor-ew-resize z-10 group"
        style={{ left: `${sliderPosition}%` }}
      >
        {/* Handle Button */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-9 h-9 rounded-full bg-gold text-navy shadow-lg cursor-ew-resize border-2 border-navy transition-transform group-hover:scale-110">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M8 9l-4 4 4 4m8 0l4-4-4-4"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
