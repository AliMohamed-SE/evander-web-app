import ServicesPage from "@/components/pages/ServicesPage";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Services | Evander Creative Studio",
  description:
    "We offer branding, UI/UX design, and software development solutions to help businesses create impactful digital experiences.",
  openGraph: {
    title: "Services | Evander Creative Studio",
    description:
      "Our services include logo design, branding, UI/UX design, and software development. Let’s create something great together.",
    url: "https://yourdomain.com/services",
    images: ["/services-og.jpg"],
  },
};

const page = () => {
  return <ServicesPage />;
};

export default page;
