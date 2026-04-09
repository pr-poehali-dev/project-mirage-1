import { Hero } from "@/components/Hero";
import { PainPoints } from "@/components/PainPoints";
import { About } from "@/components/About";
import { Services } from "@/components/Services";

export default function Index() {
  return (
    <>
      <Hero />
      <PainPoints />
      <About />
      <Services />
    </>
  );
}