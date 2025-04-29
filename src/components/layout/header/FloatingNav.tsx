"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import navItems from "./navItems";
import NavLink from "./NavLink";
import Image from "next/image";
import EvanderButton from "@/components/shared/EvanderButton";
import { usePathname } from "next/navigation";

export const FloatingNav = ({ className }: { className?: string }) => {
  const halfOfItems = Math.ceil(navItems.length / 2);
  const firstHalf = navItems.slice(0, halfOfItems);
  const secondHalf = navItems.slice(halfOfItems);
  const pathname = usePathname();

  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex w-full fixed xl:top-[38px] top-[16px] rounded-full bg-none z-[5000] items-center md:justify-between justify-center gap-3 container inset-x-0",
          className
        )}
      >
        <Link href={"/"} className="hidden md:block">
          <Image
            src={"/images/full-logo-white.svg"}
            alt="Evander Logo"
            height={37}
            width={137}
          />
        </Link>
        <div className="flex border border-white rounded-full bg-none p-1 items-center justify-center gap-3 backdrop-blur-lg">
          {firstHalf.map((navItem: any, idx: number) => (
            <NavLink key={idx} link={navItem.link} name={navItem.name} />
          ))}
          <Link href="/" className="md:hidden">
            <div className="relative rounded-full border border-white py-1.5 pl-[7px] pr-[5px] flex justify-center items-center">
              <Image
                src={"/images/logo-white.svg"}
                alt="Evander Logo"
                height={15}
                width={15}
              />
            </div>
          </Link>
          {secondHalf.map((navItem: any, idx: number) => (
            <NavLink key={idx} link={navItem.link} name={navItem.name} />
          ))}
        </div>
        <EvanderButton
          label="Contact Us"
          className={`text-xs xl:text-[14px] font-bold hidden md:block rounded-full bg-primary ${
            pathname === "/contact" && "bg-secondary text-secondary-foreground"
          }`}
          size="sm"
          link="/contact"
        />
      </motion.div>
    </AnimatePresence>
  );
};
