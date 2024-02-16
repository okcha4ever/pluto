import { Contact } from "@/components/component/contact";
import { EmpowreSection } from "@/components/component/empowre-section";
import { Hero } from "@/components/component/hero";
import { HowItWorks } from "@/components/component/how-it-works-section";
import { ServicesSection } from "@/components/component/services-section";


export default function HomePage() {
  return (
    <main>
      <Hero />
      <EmpowreSection />
      <HowItWorks />
      <ServicesSection />
      <Contact />
    </main>
  );
}
