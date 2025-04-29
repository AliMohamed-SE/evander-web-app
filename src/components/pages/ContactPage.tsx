import React from "react";
import Section from "../shared/Section";
import Image from "next/image";
import ContactForm from "../forms/ContactForm";

const ContactPage = () => {
  return (
    <Section>
      <div className="flex flex-col gap-8 lg:flex-row md:gap-8 lg:gap-16">
        <div className="flex flex-col gap-2 lg:w-1/2">
          <h1 className="text-primary font-semibold text-xs xl:text-[16px]">
            Contact Us
          </h1>
          <h2 className="font-semibold text-2xl lg:text-[40px] xl:text-[48px]">
            Let's Connect & Create!
          </h2>
          <p className="text-xs lg:text-[16px] xl:text-[20px] w-[80%] leading-relaxed">
            Have a project in mind? Reach out, and let’s turn your ideas into
            reality.
          </p>
          <div className="relative w-full h-[165px] rounded-xl overflow-hidden lg:hidden">
            <Image
              src={"/images/services/services-2.png"}
              alt="Contact Image"
              fill
            />
          </div>
          <ContactForm />
        </div>
        <div className="relative w-1/2 hidden lg:block rounded-xl overflow-hidden">
          <Image
            src={"/images/contact-banner.png"}
            alt="Contact Image"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </Section>
  );
};

export default ContactPage;
