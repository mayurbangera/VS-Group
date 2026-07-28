import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingActions from "@/components/shared/FloatingActions";
import LoadingScreen from "@/components/shared/LoadingScreen";
import SmoothScroll from "@/components/shared/SmoothScroll";
import JsonLd from "@/components/shared/JsonLd";


const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "VS Group of Companies | Premium Real Estate & Contracting in Pune",
  description: "VS Group of Companies is a premium engineering-driven real estate, construction, and development firm in Pune, Maharashtra. Established in 2015, specializing in RCC work, masonry, and turnkey residential and commercial projects.",
  keywords: ["VS Group", "VS Group of Companies", "Real Estate Pune", "Civil Contractors Pune", "Wakad Construction", "Turnkey Projects Pune", "RCC Work Pune", "Vasudev Achmeti", "Suresh Achmeti", "Avdhut Chakradhar"],
  metadataBase: new URL("https://vsgroupofcompanies.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "VS Group of Companies | Premium Real Estate & Contracting in Pune",
    description: "Engineering-driven residential, commercial, and turnkey infrastructure projects by Pune's trusted developers. Established 2015.",
    url: "https://vsgroupofcompanies.com",
    siteName: "VS Group of Companies",
    images: [
      {
        url: "/images/logo/VS Group logo.png",
        width: 800,
        height: 600,
        alt: "VS Group of Companies Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VS Group of Companies | Premium Real Estate & Contracting in Pune",
    description: "Premium engineering-driven construction and residential developments in Pune, Maharashtra.",
    images: ["/images/logo/VS Group logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-white text-charcoal">
        <JsonLd />
        <SmoothScroll>
          <LoadingScreen />
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
          <FloatingActions />
        </SmoothScroll>
      </body>
    </html>
  );
}
