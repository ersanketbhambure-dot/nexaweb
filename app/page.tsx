import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Commitment from "@/components/sections/Commitment";
import Stats from "@/components/sections/Stats";
import Services from "@/components/sections/Services";
import WhyChoose from "@/components/sections/WhyChoose";
import Testimonials from "@/components/sections/Testimonials";
import Pricing from "@/components/sections/Pricing";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Commitment/>
      <Services />
      <WhyChoose />
      <Testimonials />
      <Pricing />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
