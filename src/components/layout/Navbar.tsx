"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/leadership", label: "Leadership" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on page change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? "bg-navy/95 backdrop-blur-md border-b border-white/5 py-4 shadow-lg"
            : "bg-transparent py-6 border-b border-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <nav className="flex items-center justify-between" aria-label="Global Navigation">
            {/* Logo Link */}
            <Link
              href="/"
              className="relative block h-10 w-32 md:h-12 md:w-36 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-4"
              aria-label="VS Group of Companies home page"
            >
              <Image
                src="/images/logo/VS Group logo.png"
                alt="VS Group Logo"
                fill
                priority
                className="object-contain filter brightness-100"
              />
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`font-label text-xs tracking-widest uppercase transition-colors relative py-2 ${
                      isActive ? "text-gold" : "text-white/80 hover:text-white"
                    } focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gold"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* CTA Button & Mobile Menu Toggle */}
            <div className="flex items-center gap-4">
              <Link
                href="/contact"
                className="hidden md:inline-flex items-center gap-1.5 bg-gold hover:bg-gold-hover text-navy px-5 py-2.5 text-xs font-label uppercase tracking-widest transition-all duration-300 font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
              >
                Inquire Now
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden text-white p-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
                aria-expanded={isOpen}
                aria-label="Toggle main menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-0 pt-24 pb-10 z-30 bg-navy border-b border-white/10 shadow-2xl md:hidden"
          >
            <div className="flex flex-col items-center gap-6 px-6">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`font-label text-sm tracking-widest uppercase transition-colors py-2 ${
                      isActive ? "text-gold font-bold" : "text-white/80 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Link
                href="/contact"
                className="w-full text-center bg-gold hover:bg-gold-hover text-navy py-3 text-xs font-label uppercase tracking-widest transition-colors font-semibold mt-4"
              >
                Inquire Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
