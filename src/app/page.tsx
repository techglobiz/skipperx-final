// ...existing code...
import BackedByBest from "../components/BackedByBest";
import CareerFormSection from "../components/CareerFormSection";
import Circle from "../components/Circle";
import EngineeringPrograms from "../components/EngineeringPrograms";
import Hero from "../components/Hero";
import LaunchSection from "../components/LaunchSection";
import SkippersAdvantage from "../components/SkippersAdvantage";
import SuperStack from "../components/SuperStack";
import TestimonialCarousel from "../components/TestimonialCarousel";
import TrustSection from "../components/TrustSection";
import WhyTrustUs from "../components/WhyTrustUs";

export default function Home() {
  return (
   <>


      <Hero />
      <TrustSection />
      <TestimonialCarousel />
      <EngineeringPrograms />  
      <SuperStack />
      <CareerFormSection />
      <SkippersAdvantage />
      <Circle />
      <LaunchSection />
      <BackedByBest />
      <WhyTrustUs />
      

    </>
  );
}
