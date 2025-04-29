import ValueCards from "@/components/cards/ValueCard";
import Section from "@/components/shared/Section";
import values from "@/data/values";
import React from "react";

const WhyChooseUs = () => {
  return (
    <Section>
      <h2 className="text-[20px] md:text-[32px] xl:text-[40px] font-semibold text-center mb-4 md:mb-8">
        Why Choose Us
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-8 justify-items-center">
        {values.map((value, index) => (
          <ValueCards key={index} index={index} item={value} />
        ))}
      </div>
    </Section>
  );
};

export default WhyChooseUs;
