import AboutSection from '@/components/sections/AboutSection';

export const metadata = {
  title: "About Aspia Parenterals — CGMP IV Fluid Manufacturer",
  description:
    "Learn about Aspia Parenterals' manufacturing capabilities, sterile production technology, quality certifications, and global export footprint.",
};


export default function About() {
  return (
    <main className="bg-cream">
      <AboutSection detailed />
    </main>
  );
}
