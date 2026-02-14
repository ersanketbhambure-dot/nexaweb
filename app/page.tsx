import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Commitment from "@/components/sections/Commitment";
import Technology from "@/components/sections/Technology";
import Services from "@/components/sections/Services";
import WhyChoose from "@/components/sections/WhyChoose";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import Industries from "@/components/sections/Industries";

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main id="main">
        <Hero />
        <About />
        <Commitment />
        <Services />
        <Technology />
        <Industries />
        <WhyChoose />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
