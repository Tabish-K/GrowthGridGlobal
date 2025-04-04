"use client";

import FeaturedIn from "../components/Featured";
import HeroSection from "../components/Hero";
import Impact from "../components/Impact";
import OurServices from "../components/OurServices";
import PromotionalBanner from "../components/PromotionalBanner";
import Services from "../components/Services";
import Solutions from "../components/Solutions";
import Testimonials from "../components/Testimonials";
import ToolsAndPlatforms from "../components/ToolsPlatform";
import WhyUs from "../components/WhyUs";

const Home: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <Solutions />
      <WhyUs />
      <Services />
      <Testimonials />
      <FeaturedIn/>
      <Impact />
      <ToolsAndPlatforms/>
      <OurServices/>
      <PromotionalBanner/>
    </div>
  );
};

export default Home;
