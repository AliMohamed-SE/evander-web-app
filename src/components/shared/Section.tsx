"use client";
import { cn } from "@/lib/utils";
import { ReactNode, useEffect } from "react";

const Section = ({
  children,
  className,
  forceVisible = false,
}: {
  children: ReactNode;
  className?: string;
  forceVisible?: boolean;
}) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
          }
        });
      },
      { threshold: 0.1 } // Lower threshold to trigger animation earlier
    );

    document
      .querySelectorAll(".animate-section")
      .forEach((el) => observer.observe(el));

    // Force visibility after a timeout as a fallback
    const timeout = setTimeout(() => {
      document
        .querySelectorAll(".animate-section")
        .forEach((el) => el.classList.add("animate-fade-in-up"));
    }, 1000);

    return () => {
      observer.disconnect();
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div
      className={cn(
        "relative animate-section container",
        forceVisible ? "opacity-100" : "opacity-0"
      )}
    >
      <section className={cn("w-full global-section", className)}>
        {children}
      </section>
    </div>
  );
};

export default Section;
