import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy border-t border-white/5 text-white/70 py-16 md:py-24" aria-label="Site Footer">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Column 1: Brand details */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="relative block h-10 w-32 md:h-12 md:w-36">
              <Image
                src="/images/logo/VS Group logo.png"
                alt="VS Group Logo"
                fill
                className="object-contain filter brightness-100"
              />
            </Link>
            <p className="text-sm leading-relaxed text-white/50 max-w-sm">
              VS Group of Companies is a premium, engineering-driven real estate, construction, and development company delivering exceptional residential, commercial, and turnkey projects since 2015.
            </p>
            <div className="font-label text-xs tracking-widest text-gold uppercase mt-2">
              Established 2015
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h2 className="font-label text-xs tracking-[0.2em] uppercase text-white font-semibold mb-6">
              Quick Links
            </h2>
            <ul className="flex flex-col gap-4 text-sm">
              <li>
                <Link href="/about" className="hover:text-gold transition-colors flex items-center gap-1 group">
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                  About Our Company
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-gold transition-colors flex items-center gap-1 group">
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                  Our Core Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-gold transition-colors flex items-center gap-1 group">
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                  Featured Projects
                </Link>
              </li>
              <li>
                <Link href="/leadership" className="hover:text-gold transition-colors flex items-center gap-1 group">
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                  Leadership Team
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gold transition-colors flex items-center gap-1 group">
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                  Contact & Location
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Construction Services */}
          <div>
            <h2 className="font-label text-xs tracking-[0.2em] uppercase text-white font-semibold mb-6">
              Our Services
            </h2>
            <ul className="flex flex-col gap-4 text-sm">
              <li>
                <Link href="/services" className="hover:text-gold transition-colors">
                  Commercial Construction
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-gold transition-colors">
                  Residential Construction
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-gold transition-colors">
                  RCC Frameworks
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-gold transition-colors">
                  Brick & Block Masonry
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-gold transition-colors">
                  Gypsum & Waterproof Plaster
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-gold transition-colors">
                  Lock & Key Turnkey Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Details */}
          <div>
            <h2 className="font-label text-xs tracking-[0.2em] uppercase text-white font-semibold mb-6">
              Head Office
            </h2>
            <ul className="flex flex-col gap-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <span className="leading-relaxed text-white/50 text-xs">
                  Krupa Heights, Ground Floor, Office No 1, Beltika Nagar, Wakad, Pune, MH, India.<br/>
                  <span className="text-white/40 italic">Opp. Prakash Flowrance Society</span>
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <div className="flex flex-col text-xs">
                  <a href="tel:7499035904" className="hover:text-gold transition-colors">74990 35904</a>
                  <a href="tel:7741000449" className="hover:text-gold transition-colors">77410 00449</a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <a href="mailto:vasudevconstruction86@gmail.com" className="hover:text-gold transition-colors text-xs">
                  vasudevconstruction86@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-xs text-white/45">
                <Clock className="w-4 h-4 text-gold shrink-0" />
                <span>Mon - Sat: 9:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <div>
            &copy; {currentYear} VS Group of Companies. All Rights Reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-gold transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gold transition-colors">Terms of Service</Link>
            <span className="text-gold">Pune, MH, India</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
