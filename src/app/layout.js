import "../styles/globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SplashScreen from "@/components/layout/SplashScreen";
import GlobalScrollReveal from "@/components/ui/GlobalScrollReveal";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = {
  title: "Aspia Pharmaceuticals Pvt. Ltd. — IV Fluid Manufacturer & Exporter",
  description:
    "Aspia Pharmaceuticals manufactures CGMP-certified intravenous fluids including IV nutrition, electrolyte solutions, and therapeutic infusions, exported to 30+ countries.",
  openGraph: {
    title: "Aspia Pharmaceuticals Pvt. Ltd. — IV Fluid Manufacturer",
    description: "Manufacturer of CGMP-certified IV fluids, exported to 30+ countries.",
    url: "https://aspiapharmaceuticals.com",
    siteName: "Aspia Pharmaceuticals",
    images: [{ url: "/aspia-building.jpg", width: 1200, height: 630, alt: "Aspia Pharmaceuticals facility" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aspia Pharmaceuticals Pvt. Ltd.",
    description: "CGMP-certified IV fluid manufacturer and global exporter.",
    images: ["/aspia-building.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased ${inter.variable}`}>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:rounded-full focus:bg-steel focus:px-5 focus:py-2 focus:text-sm focus:font-semibold focus:text-white focus:shadow-lg">
          Skip to main content
        </a>
        <SplashScreen />
        <GlobalScrollReveal />
        <Navbar />
        <main id="main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
