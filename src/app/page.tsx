import { Contact } from "@/components/component/contact";
import EmpowerSection from "@/components/component/empower-section";
import { Footer } from "@/components/component/footer";
import { Hero } from "@/components/component/hero";
import { HowItWorks } from "@/components/component/how-it-works-section";
import { ServicesSection } from "@/components/component/services-section";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <EmpowerSection />
      <HowItWorks />
      <ServicesSection />
      <Contact />
      <Footer />
    </main>
  );
}
