import AboutPage from "@/components/pages/AboutPage";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "About Us | Evander Creative Studio",
  description:
    "Learn more about Evander Creative Studio, our mission, values, and expertise in branding, UI/UX design, and software solutions.",
  openGraph: {
    title: "About Evander Creative Studio",
    description:
      "Discover our mission, vision, and expertise in crafting powerful brand identities and software solutions.",
    url: "https://yourdomain.com/about",
    images: ["/about-og.jpg"],
  },
};

const page = () => {
  return <AboutPage />;
};

export default page;
