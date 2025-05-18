import AboutPage from "@/components/pages/AboutPage";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn more about Evander Creative Studio, our mission, values, and expertise in branding, UI/UX design, and software solutions.",
};

const page = () => {
  return <AboutPage />;
};

export default page;
