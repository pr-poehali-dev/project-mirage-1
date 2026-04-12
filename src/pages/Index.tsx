import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { PainPoints } from "@/components/PainPoints";
import { Testimonials } from "@/components/Testimonials";
import { ContactForm } from "@/components/ContactForm";

export default function Index() {
  return (
    <div className="relative">
      <Hero />
      <PainPoints />
      <About />
      <Services />
      <Testimonials />
      <ContactForm />
    </div>
  );
}