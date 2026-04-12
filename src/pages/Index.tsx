import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { PainPoints } from "@/components/PainPoints";
import { Testimonials } from "@/components/Testimonials";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { HowIWork } from "@/components/HowIWork";
import { FAQ } from "@/components/FAQ";
import { SectionCTA } from "@/components/SectionCTA";

export default function Index() {
  return (
    <div className="relative">
      {/* Золотая полоска сверху */}
      <div className="fixed top-0 left-0 right-0 z-50 h-[2px]" style={{
        background: 'linear-gradient(90deg, transparent 0%, rgba(201,168,76,0.4) 20%, rgba(232,201,122,0.9) 50%, rgba(201,168,76,0.4) 80%, transparent 100%)'
      }} />
      <Hero />
      <PainPoints />
      <About />
      <HowIWork />
      <Services />
      <Testimonials />
      <FAQ />
      <ContactForm />
      <Footer />
    </div>
  );
}