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
  // --- Original return below ---
  // return (
  //   <>
  //     <Hero />
  //     <TrustSection />
  //     <TestimonialCarousel />
  //     <EngineeringPrograms />  
  //     <SuperStack />
  //     <CareerFormSection />
  //     <SkippersAdvantage />
  //     <Circle />
  //     <LaunchSection />
  //     <BackedByBest />
  //     <WhyTrustUs />
  //   </>
  // );
  return (
    <div className="coming-soon-message">
      <p>
        SkipperX is cooking something the internet isn&apos;t ready for.
      </p>
      <h3 className="coming-soon-subheading">We&apos;re not late, We&apos;re just loading greatness.</h3>
    </div>
  );
}

