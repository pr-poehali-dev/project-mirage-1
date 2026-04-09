import { useEffect } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { HeroSection } from "@/components/HeroSection";
import { PainSection } from "@/components/PainSection";
import { AboutSection } from "@/components/AboutSection";
import { ProcessSection } from "@/components/ProcessSection";
import { ResultsSection } from "@/components/ResultsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { PricingSection } from "@/components/PricingSection";
import { ContactSection } from "@/components/ContactSection";
import { SiteFooter } from "@/components/SiteFooter";

export default function Index() {
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "light");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <SiteHeader />
      <main id="main">
        <HeroSection />
        <PainSection />
        <AboutSection />
        <ProcessSection />
        <ResultsSection />
        <TestimonialsSection />
        <PricingSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
