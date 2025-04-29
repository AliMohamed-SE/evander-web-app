import PortfolioPage from "@/components/pages/PortfolioPage";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Portfolio | Evander Creative Studio",
  description:
    "Explore our portfolio of branding, UI/UX design, and software development projects. See how we bring brands to life with innovative designs and technology.",
  openGraph: {
    title: "Evander Creative Studio Portfolio",
    description:
      "Browse through our branding, UI/UX, and software development projects. Our work showcases creativity, strategy, and cutting-edge design.",
    url: "https://yourdomain.com/portfolio",
    images: ["/portfolio-og.jpg"],
  },
};

const page = () => {
  return <PortfolioPage />;
};

export default page;
