import Hero from "@/components/sections/Hero";
import AboutStrip from "@/components/sections/AboutStrip";
import CoreValues from "@/components/sections/CoreValues";
import ServicesSection from "@/components/sections/ServicesSection";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import Timeline from "@/components/sections/Timeline";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ClientsSlider from "@/components/sections/ClientsSlider";
import Testimonials from "@/components/sections/Testimonials";
import HomeCTA from "@/components/sections/HomeCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutStrip />
      <CoreValues />
      <ServicesSection />
      <FeaturedProjects />
      <Timeline />
      <WhyChooseUs />
      <ClientsSlider />
      <Testimonials />
      <HomeCTA />
    </>
  );
}
