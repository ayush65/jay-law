import Hero from "@/components/Hero";
import TrustStats from "@/components/TrustStats";
import PracticeAreas from "@/components/PracticeAreas";
import FirmStory from "@/components/FirmStory";
import People from "@/components/People";
import WhyJayLaw from "@/components/WhyJayLaw";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import LegalAid from "@/components/LegalAid";
import Faq from "@/components/Faq";
import ConsultationCTA from "@/components/ConsultationCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStats />
      <PracticeAreas />
      <FirmStory />
      <People />
      <WhyJayLaw />
      <Process />
      <Testimonials />
      <LegalAid />
      <Faq />
      <ConsultationCTA />
    </>
  );
}
