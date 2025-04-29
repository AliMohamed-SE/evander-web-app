import React from "react";
import HeroSection from "../sections/Home/HeroSection";
import ServiceSection from "../sections/Home/ServiceSection";
import WhyChooseUs from "../sections/Home/WhyChooseUs";
import PortfolioSection from "../sections/Home/PortfolioSection";

const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <ServiceSection />
      <WhyChooseUs />
      <PortfolioSection />
    </main>
  );
};

export default HomePage;
