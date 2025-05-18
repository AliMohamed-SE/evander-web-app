import PortfolioPage from "@/components/pages/PortfolioPage";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore our portfolio of branding, UI/UX design, and software development projects. See how we bring brands to life with innovative designs and technology.",
};

const page = () => {
  return <PortfolioPage />;
};

export default page;
