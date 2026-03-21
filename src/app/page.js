import Hero from '@/components/sections/Hero';
import AboutSection from '@/components/sections/AboutSection';
import ProductsSection from '@/components/sections/ProductsSection';
import CertificationsSection from '@/components/sections/CertificationsSection';
import D3ExportMap from '@/components/sections/D3ExportMap';
import ContactForm from '@/components/sections/ContactForm';

export default function Home() {
  return (
    <main className="bg-cream">
      <Hero />
      <AboutSection />
      <ProductsSection preview />
      <CertificationsSection />
      <D3ExportMap />
      <ContactForm />
    </main>
  );
}
