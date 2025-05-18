import HomePage from "@/components/pages/HomePage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Evander Creative Studio",
  description:
    "Welcome to Evander Creative Studio. We create visually compelling brand identities, UI/UX designs, and software solutions to help businesses thrive.",
};

const Home = () => {
  return <HomePage />;
};

export default Home;
