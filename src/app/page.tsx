import HomePage from "@/components/pages/HomePage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Evander Creative Studio",
  description:
    "Welcome to Evander Creative Studio. We create visually compelling brand identities, UI/UX designs, and software solutions to help businesses thrive.",
  openGraph: {
    title: "Home | Evander Creative Studio",
    description:
      "Discover how Evander Creative Studio helps businesses establish a strong visual presence with branding, UI/UX design, and software solutions.",
    url: "https://yourdomain.com",
    images: ["/home-og.jpg"],
  },
};

const Home = () => {
  return <HomePage />;
};

export default Home;
