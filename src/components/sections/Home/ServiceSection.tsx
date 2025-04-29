import Section from "@/components/shared/Section";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

const ServiceSection = () => {
  return (
    <Section>
      <BentoGrid className="max-w-full">
        {Array.from({ length: 7 }).map((_, i) => (
          <BentoGridItem
            key={i}
            index={i}
            className={`${
              i !== 4 &&
              "relative overflow-hidden rounded-xl border border-primary shadow-primary shadow-[0_0_5px_2px]"
            } ${i === 0 || i === 6 || i === 4 ? "md:col-span-2" : ""} 
                ${i === 2 || i === 3 ? "lg:row-span-2" : ""} `}
          />
        ))}
      </BentoGrid>
    </Section>
  );
};

export default ServiceSection;
