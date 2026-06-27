import ProductsSection from '@/components/sections/ProductsSection';

export const metadata = {
  title: "Product Catalogue — IV Fluids & Therapeutic Infusions | Aspia",
  description:
    "Browse all 27 Aspia IV fluid products including Dextrose, Ringer Lactate, Paracetamol Infusion, Levofloxacin, and more — CGMP-certified for hospital and export use.",
};


export default function Products() {
  return (
    <main className="bg-cream">
      <ProductsSection />
    </main>
  );
}
