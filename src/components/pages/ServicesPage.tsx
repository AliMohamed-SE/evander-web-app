import React from "react";
import Section from "../shared/Section";
import Image from "next/image";
import ServiceCard from "../cards/ServiceCard";
import { AppWindow, Sparkles, SwatchBook } from "lucide-react";
import { ServicesSection } from "../ui/services-section";

const ServicesPage = () => {
  return (
    <Section>
      <div className="text-center flex flex-col gap-4">
        <h1 className="text-primary font-semibold text-xs xl:text-[16px]">
          Services
        </h1>
        <h2 className="text-xl md:text-3xl xl:text-4xl pb-12">
          From Vision to Reality Our Expertise at Your Service
        </h2>
        <ServicesSection />
        {/* <div className="relative w-full aspect-32/10 rounded-xl">
          <Image
            src={"/images/services-banner.png"}
            alt="Evander Services"
            fill
          />
        </div> */}
        {/* <p className="text-sm md:text-[16px] xl:text-[20px] md:text-start">
          At Evander Creative Studio, we specialize in crafting cutting-edge
          digital solutions and compelling brand experiences that help
          businesses thrive. Whether you need software development, graphic
          design, or a comprehensive digital transformation, we have the
          expertise to bring your vision to life.
        </p> */}
      </div>

      {/* <div className="flex flex-col gap-16 md:gap-32">
        <div className="flex flex-col md:flex-row justify-center items-center gap-5">
          <div className="flex flex-row md:flex-col gap-7 md:w-[25%] order-2 md:order-1">
            <ServiceCard title={"Logo/Brand Identity"} position="ml-auto" />
            <ServiceCard title={"UI/UX Design"} />
            <ServiceCard title={"Animation"} position="ml-auto" />
          </div>
          <div className="relative px-8 xl:px-28 py-10 md:py-16 border border-primary rounded-full space-y-[24px] flex-1 flex-col justify-center items-center order-1 md:order-2 shadow-primary shadow-[0_0_5px_2px]">
            <h2 className="text-primary font-semibold text-3xl xl:text-5xl text-center">
              Graphic Design
            </h2>
            <p className="text-center text-xs xl:text-[20px] border-t border-gray-400 pt-[24px]">
              A strong brand starts with exceptional design. Our graphic design
              services ensure that your brand stands out, engages, and converts.
            </p>
            <SwatchBook
              className="absolute top-0 -left-[10%] opacity-10"
              size={"100%"}
            />
          </div>
          <div className="flex flex-row md:flex-col gap-7 md:w-[25%] order-3">
            <ServiceCard title={"Advertisement Material"} />
            <ServiceCard title={"Video Montages"} position="ml-auto" />
            <ServiceCard title={"Motion Graphics"} />
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-5">
          <div className="flex flex-row md:flex-col gap-7 md:w-[25%] order-2 md:order-1">
            <ServiceCard
              title={"Web & Mobile Development"}
              position="ml-auto"
            />
            <ServiceCard title={"API Development"} />
            <ServiceCard title={"SEO Optimization"} position="ml-auto" />
          </div>
          <div className="relative px-8 xl:px-28 py-10 md:py-16 border border-primary rounded-full space-y-[24px] flex-1 flex-col justify-center items-center order-1 md:order-2 shadow-primary shadow-[0_0_5px_2px]">
            <h2 className="text-primary font-semibold text-3xl xl:text-5xl text-center">
              Software Solutions
            </h2>
            <p className="text-center text-xs xl:text-[20px] border-t border-gray-400 pt-[24px]">
              Our custom software solutions are designed to optimize efficiency,
              enhance user experience, and drive business growth.
            </p>
            <AppWindow
              className="absolute top-0 -left-[10%] opacity-10"
              size={"100%"}
            />
          </div>
          <div className="flex flex-row md:flex-col gap-7 md:w-[25%] order-3">
            <ServiceCard title={"E-commerce Solutions"} />
            <ServiceCard title={"AI Solutions"} position="ml-auto" />
            <ServiceCard title={"Maintenance & Support"} />
          </div>
        </div>

        <div className="flex justify-center items-center">
          <div className="relative px-8 xl:px-28 py-10 md:py-16 border border-primary rounded-full space-y-[24px] shadow-primary shadow-[0_0_5px_2px] md:w-1/2">
            <h2 className="text-primary font-semibold text-3xl xl:text-5xl text-center">
              Full Package
            </h2>
            <p className="text-center text-xs xl:text-[20px] border-t border-gray-400 pt-[24px]">
              For businesses looking for a fully integrated digital experience,
              our Full Package combines Branding, UI/UX design and Web
              Development, ensuring your brand has both a strong identity and a
              powerful online presence.
            </p>
            <Sparkles
              className="absolute top-0 -left-[10%] opacity-10"
              size={"100%"}
            />
          </div>
        </div>
      </div> */}
    </Section>
  );
};

export default ServicesPage;
