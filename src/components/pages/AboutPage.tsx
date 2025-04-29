import React from "react";
import Section from "../shared/Section";
import Image from "next/image";

const AboutPage = () => {
  return (
    <Section>
      <h1 className="text-primary font-semibold text-xs xl:text-[16px] mb-2">
        About Us
      </h1>
      <div className="relative aspect-[32/10] rounded-xl overflow-hidden">
        <Image src={"/images/about-banner.png"} alt="Contact Image" fill />
      </div>
      <div className="flex flex-col gap-8">
        <div className="about-section">
          <h2 className="text-[20px] md:text-[32px] xl:text-[60px] text-primary text-center font-semibold xl:w-1/2">
            Our Story
          </h2>
          <p className="text-xs md:text-[16px] xl:text-[20px] leading-relaxed text-center xl:text-start xl:w-1/2">
            Evander Creative Studio was founded with a simple yet powerful
            vision—to bridge the gap between aesthetic excellence and functional
            design. We believe that a strong brand is more than just a logo or a
            website; it's a strategic combination of visual identity, user
            experience, and storytelling.
            <br />
            <br />
            What started as a passion for design and digital innovation has
            grown into a full-fledged creative studio that partners with
            businesses to craft memorable brand identities and seamless web
            experiences. Whether it’s a startup looking for a standout presence
            or an established brand in need of a refresh, we bring creativity,
            precision, and strategy to every project.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="about-section">
          <h2 className="text-[20px] md:text-[32px] xl:text-[60px] text-primary text-center font-semibold xl:w-1/2 order-1 xl:order-2">
            Our Values
          </h2>
          <p className="text-xs md:text-[16px] xl:text-[20px] leading-relaxed text-center xl:text-start xl:w-1/2 order-2 xl:order-1">
            At Evander Creative Studio, our work is guided by a set of core
            values that shape our approach and ensure we deliver impactful
            results.
            <br />
            <br />
            🔹 <b>Creativity</b> – We push boundaries to create unique and
            original designs that set your brand apart.
            <br />
            🔹 <b>Quality</b> – Attention to detail and excellence in execution
            define every project we take on.
            <br />
            🔹 <b>Collaboration</b> – We believe the best work is achieved
            through open communication and teamwork.
            <br />
            🔹 <b>User-Centricity</b> – Every design decision is made with the
            end-user in mind, ensuring functionality and engagement.
            <br />
            🔹 <b>Adaptability</b> – The digital world evolves quickly, and we
            stay ahead by embracing the latest trends and technologies.
            <br />
            🔹 <b>Impact</b> – Our goal is to create work that not only looks
            good but also delivers measurable results for your business.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="about-section">
          <h2 className="text-[20px] md:text-[32px] xl:text-[60px] text-primary text-center font-semibold xl:w-1/2">
            Our Mission
          </h2>
          <p className="text-xs md:text-[16px] xl:text-[20px] leading-relaxed text-center xl:text-start xl:w-1/2">
            Our mission is simple: to empower brands with compelling visuals and
            high-performing digital experiences. We help businesses stand out in
            a crowded market by crafting cohesive brand identities, intuitive
            websites, and engaging digital assets.
            <br /> <br />
            We believe that design should not only be visually stunning but also
            strategically driven. Whether it’s a logo that tells a story, a
            website that converts visitors into customers, or a complete brand
            transformation, we are dedicated to bringing your vision to life
            with creativity, expertise, and precision.
            <br /> <br />
            At Evander Creative Studio, we don’t just design—we build brands
            that inspire, connect, and grow.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default AboutPage;
