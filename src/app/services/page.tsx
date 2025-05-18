import ServicesPage from "@/components/pages/ServicesPage";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Services",
  description:
    "We offer branding, UI/UX design, and software development solutions to help businesses create impactful digital experiences.",
};

const page = () => {
  return <ServicesPage />;
};

export default page;
