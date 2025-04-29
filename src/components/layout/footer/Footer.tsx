"use client";
import EvanderButton from "@/components/shared/EvanderButton";
import Section from "@/components/shared/Section";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";
import navItems from "../header/navItems";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faTiktok,
  faDribbble,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const pathname = usePathname();
  return (
    <>
      {pathname !== "/contact" && (
        <Section>
          <div className="flex justify-between flex-col xl:flex-row gap-4 md:gap-8 items-center">
            <div className="flex flex-col gap-2 xl:w-1/2">
              <h2 className="text-2xl md:text-[40px] font-semibold">
                Ready to Elevate Your Brand?
              </h2>
              <p className="text-xs md:text-[16px] leading-relaxed w-[70%] md:w-full">
                Whether you need branding, web development, or a complete
                digital transformation, we’re here to help.
              </p>
            </div>
            <EvanderButton
              variant="primary"
              size="lg"
              iconAfter={<ArrowRight />}
              label="Get Started Today"
              className="ml-auto font-semibold text-[16px] bg-primary rounded-xl"
              link="/contact"
            />
          </div>
        </Section>
      )}
      <footer className="container pt-4">
        <div className="flex justify-between items-end gap-2 md:gap-8 flex-row mb-2">
          <a
            href="/"
            className="relative w-[89px] h-[24px] xl:w-[137px] xl:h-[37px]"
          >
            <Image
              src="/images/full-logo-white.svg"
              alt="Evander Creative Studio"
              fill
            />
          </a>
          <div className="flex gap-2">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_self"
                className=" text-xs md:text-[16px]"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="gap-3 hidden md:flex">
            <a href="tiktok.com" target="_blank">
              <FontAwesomeIcon icon={faTiktok} />
            </a>
            <a href="instagram.com" target="_blank">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="github.com" target="_blank">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="dribble.com" target="_blank">
              <FontAwesomeIcon icon={faDribbble} />
            </a>
          </div>
        </div>
        <div className="space-x-3 ml-auto w-fit md:hidden">
          <a href="tiktok.com" target="_blank">
            <FontAwesomeIcon icon={faTiktok} />
          </a>
          <a href="instagram.com" target="_blank">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="github.com" target="_blank">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="dribble.com" target="_blank">
            <FontAwesomeIcon icon={faDribbble} />
          </a>
        </div>
        <div className="flex justify-between items-center border-t pt-1">
          <p className="text-center text-xs md:text-[16px] leading-relaxed">
            &copy; 2025 Evander Creative Studio.
          </p>
          <div className="text-xs md:text-[16px] gap-2 flex">
            <a href="/privacy-policy">Privay Policy</a>
            <a href="/privacy-policy">Terms of Service</a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
