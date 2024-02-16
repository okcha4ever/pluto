import { Contact } from "@/components/ReuseAbleComponents/Contact";
import EmpowerSection from "@/components/ReuseAbleComponents/EmpowerSection";
import { Footer } from "@/components/ReuseAbleComponents/Footer";
import { Hero } from "@/components/ReuseAbleComponents/Hero";
import { HowItWorks } from "@/components/ReuseAbleComponents/HowItWorkSection";
import { ServicesSection } from "@/components/ReuseAbleComponents/ServiceSection";

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
