"use client";
import { NavLinkProps } from "@/lib/schemas";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({ link, name }: NavLinkProps) => {
  const pathname = usePathname();
  return (
    <Link
      href={link}
      className={cn(
        `relative text-xs xl:text-[16px] hover:bg-secondary/20 ${
          link === "/contact" &&
          "bg-primary text-primary-foreground hover:bg-primary-hover md:hidden"
        }
        ${name === "Home" && "hidden md:block"}
        ${
          (pathname === link || (link !== "/" && pathname.startsWith(link))) &&
          "bg-secondary text-secondary-foreground"
        } md:px-3 px-2 py-1.5 rounded-full transition-all duration-300 linear`
      )}
    >
      {name}
    </Link>
  );
};

export default NavLink;
