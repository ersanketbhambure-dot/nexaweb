import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Commitment from "@/components/sections/Commitment";
import Technology from "@/components/sections/Technology";
import Services from "@/components/sections/Services";
import WhyChoose from "@/components/sections/WhyChoose";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import Industries from "@/components/sections/Industries";
import Results from "@/components/sections/Results";
import Process from "@/components/sections/Process";

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main id="main">
        <Hero />
        <Commitment />
        <About />
        <Services />
        <Results />
        <Technology />
        <Industries />
        <Process />
        <WhyChoose />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
