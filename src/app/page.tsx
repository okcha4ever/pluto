import { Contact } from "@/components/ReusableComponents/Contact";
import EmpowerSection from "@/components/ReusableComponents/EmpowerSection";
import { Footer } from "@/components/ReusableComponents/Footer";
import { Hero } from "@/components/ReusableComponents/Hero";
import { HowItWorks } from "@/components/ReusableComponents/HowItWorkSection";
import { ServicesSection } from "@/components/ReusableComponents/ServiceSection";

export default function HomePage() {
  return (
    <main className="">
      <Hero />
      <EmpowerSection />
      <HowItWorks />
      <ServicesSection />
      <Contact/>
      <Footer />
    </main>
  );
}
