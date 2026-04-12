import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { PainPoints } from "@/components/PainPoints";
import { ContactForm } from "@/components/ContactForm";

export default function Index() {
  return (
    <div className="relative">
      <Hero />
      <PainPoints />
      <About />
      <Services />
      <ContactForm />
    </div>
  );
}
