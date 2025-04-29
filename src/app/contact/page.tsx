import ContactPage from "@/components/pages/ContactPage";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Contact Us | Evander Creative Studio",
  description:
    "Get in touch with Evander Creative Studio for branding, UI/UX design, and software solutions. Let's build something amazing together!",
  openGraph: {
    title: "Contact Evander Creative Studio",
    description:
      "Reach out to us for branding, design, and development services. We're here to help you create a unique and impactful digital presence.",
    url: "https://yourdomain.com/contact",
    images: ["/contact-og.jpg"],
  },
};

const page = () => {
  return <ContactPage />;
};

export default page;
