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
      <Hero />
      <PainPoints />
      <SectionCTA />
      <About />
      <SectionCTA />
      <HowIWork />
      <SectionCTA />
      <Services />
      <SectionCTA />
      <Testimonials />
      <SectionCTA />
      <FAQ />
      <ContactForm />
      <Footer />
    </div>
  );
}