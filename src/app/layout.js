import "../styles/globals.css";
import Navbar from "@/components/layout/Navbar";

export const metadata = {
  title: "Aspia - Professional Consulting Services",
  description: "Professional consulting and business solutions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
