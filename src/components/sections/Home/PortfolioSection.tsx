import ProjectCard from "@/components/cards/ProjectCard";
import EvanderButton from "@/components/shared/EvanderButton";
import Section from "@/components/shared/Section";
import projects from "@/data/projects";
import { ArrowRight } from "lucide-react";
import React from "react";

const PortfolioSection = () => {
  return (
    <Section>
      <h2 className="text-[20px] md:text-[32px] xl:text-[40px] font-semibold text-center mb-4 md:mb-8">
        Our Portfolio
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center mb-8">
        {projects.slice(0, 4).map((value, index) => (
          <ProjectCard
            key={index}
            index={index}
            project={value}
            type="primary"
          />
        ))}
      </div>
      <div className="flex justify-between flex-col xl:flex-row gap-4 items-center">
        <p className="text-sm md:text-[20px] xl:w-1/2">
          Explore projects that transformed brands and built strong digital
          presences.
        </p>
        <EvanderButton
          label="View Portfolio"
          size="sm"
          iconAfter={<ArrowRight />}
          link="/portfolio"
          className="ml-auto border border-primary text-primary rounded-xl hover:text-primary-foreground bg-transparent"
        />
      </div>
    </Section>
  );
};

export default PortfolioSection;
