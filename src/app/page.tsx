import BackedByBest from "../components/BackedByBest";
import CareerFormSection from "../components/CareerFormSection";
import Circle from "../components/Circle";
import EngineeringPrograms from "../components/EngineeringPrograms";
import Hero from "../components/Hero";
import SkippersAdvantage from "../components/SkippersAdvantage";
import SuperStack from "../components/SuperStack";
import TestimonialCarousel from "../components/TestimonialCarousel";
import TrustSection from "../components/TrustSection";
import WhyTrustUs from "../components/WhyTrustUs";

export default function Home() {
  return (
   <>
      <Hero />
      <div className="bg-gray-100">      
        <TrustSection />    
      
     
        <TestimonialCarousel />
      
      
      
        <EngineeringPrograms />
      
      
     
        <SuperStack />
     
      
      
        <CareerFormSection />
      
      
      
        <SkippersAdvantage />     
      
      
        <Circle />
        
      </div>
      
       <div className="container mx-auto">
        <BackedByBest />
        </div> 
      
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <WhyTrustUs />
        </div>
        

    </>
  );
}
