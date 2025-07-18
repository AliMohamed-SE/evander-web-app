import { HoverBorderGradient } from "@/components/buttons/HoverBorderGradient";
import Section from "@/components/shared/Section";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div
      className="relative pt-[76px] md:pt-[104px] xl:pt-[120px] pb-[60px] md:pb-[104px] xl:pb-[120px] 
  after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full 
  after:bg-gradient-to-b after:from-background after:via-transparent after:to-background after:-z-1"
    >
      <Image
        src="/images/bg-hero.png"
        alt="Hero Background Image"
        fill
        className="absolute top-0 object-center object-cover -z-1"
      />
      <Section className="py-0">
        <div className="flex flex-col items-center justify-center gap-4 xl:gap-8">
          <h1 className="text-3xl md:text-5xl xl:text-6xl font-semibold text-center leading-snug">
            Elevate Your Brand with Strategic Design & Digital Innovation
          </h1>
          <p className="text-center text-sm md:text-[16px] xl:text-xl w-[90%] md:w-[75%] xl:w-[65%] leading-5 md:leading-6 xl:leading-8">
            We craft visually stunning brand identities and cutting-edge digital
            solutions that set you apart. Let’s build something remarkable
            together.
          </p>
          {/* <EvanderButton
            variant="primary"
            label="Let’s Build Something Great"
            size="md"
            iconAfter={<ArrowRight size={20} />}
          /> */}
          <a href="/contact">
            <HoverBorderGradient
              containerClassName="rounded-xl"
              as="button"
              className="py-3 px-4 md:py-4 md:px-5 flex gap-2 bg-gradient-to-r from-[#131531] to-primary border border-primary justify-center items-center"
            >
              <span className="font-semibold text-[16px]">
                Let’s Build Something Great
              </span>
              <ArrowRight size={24} />
            </HoverBorderGradient>
          </a>
        </div>
      </Section>
    </div>
  );
};

export default HeroSection;
