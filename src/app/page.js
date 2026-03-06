import Hero from '@/components/sections/Hero';
import ProductsSection from '@/components/sections/ProductsSection';
import ExportMap from '@/components/sections/ExportMap';
import CertificationsSection from '@/components/sections/CertificationsSection';
import ContactForm from '@/components/sections/ContactForm';

export default function Home() {
  return (
    <main>
      <Hero />
      <ProductsSection />
      <ExportMap />
      <CertificationsSection />
      <ContactForm />
    </main>
  );
}
