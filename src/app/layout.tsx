import type { Metadata } from "next";
import "@/lib/fontawesome"; // Adjust the path accordingly
import { Inter, DM_Sans } from "next/font/google";
import "../styles/globals.css";
import ThemeProvider from "@/Providers/ThemeProvider";
import { FloatingNav } from "@/components/layout/header/FloatingNav";
import Footer from "@/components/layout/footer/Footer";
import { Toaster } from "sonner";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Evander Creative Studio | Branding & Software Solutions",
    template: "%s | Evander Creative Studio",
  },
  description:
    "Evander Creative Studio crafts impactful brand identities & software solutions. From UI/UX to development, we merge creativity with strategy to help businesses stand out.",
  keywords: [
    "Brand Identity",
    "Logo Design",
    "UI/UX Design",
    "Software Solutions",
    "Web Development",
    "Evander Creative Studio",
  ],
  authors: [{ name: "Evander Creative Studio", url: "https://yourdomain.com" }],
  metadataBase: new URL("https://yourdomain.com"),
  openGraph: {
    title: "Evander Creative Studio | Branding & Software Solutions",
    description:
      "Evander Creative Studio crafts impactful brand identities & software solutions. From UI/UX to development, we merge creativity with strategy to help businesses stand out.",
    url: "https://yourdomain.com",
    siteName: "Evander Creative Studio",
    images: [
      {
        url: "/og-image.jpg", // Update with actual OpenGraph image
        width: 1200,
        height: 630,
        alt: "Evander Creative Studio Banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Evander Creative Studio | Branding & Software Solutions",
    description:
      "Evander Creative Studio crafts impactful brand identities & software solutions. From UI/UX to development, we merge creativity with strategy to help businesses stand out.",
    images: ["/twitter-image.jpg"], // Update with actual Twitter image
    creator: "@EvanderStudio", // Update with your Twitter handle
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${dmSans.variable} antialiased`}>
        <Toaster />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            <FloatingNav />
            <div className="flex-1">{children}</div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
