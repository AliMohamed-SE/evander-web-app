import ContactPage from "@/components/pages/ContactPage";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Evander Creative Studio for branding, UI/UX design, and software solutions. Let's build something amazing together!",
};

const page = () => {
  return <ContactPage />;
};

export default page;
