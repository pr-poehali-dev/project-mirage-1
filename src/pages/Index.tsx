import { Hero } from "@/components/Hero";
import { PainPoints } from "@/components/PainPoints";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { ContactForm } from "@/components/ContactForm";

export default function Index() {
  return (
    <>
      <Hero />
      <PainPoints />
      <About />
      <Services />
      <ContactForm />
    </>
  );
}