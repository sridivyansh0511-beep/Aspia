import ContactForm from '@/components/sections/ContactForm';

export const metadata = {
  title: "Contact Aspia Pharmaceuticals — Enquiries & Partnerships",
  description:
    "Reach out to Aspia Pharmaceuticals for product enquiries, export partnerships, procurement documentation, or general business coordination.",
};

export default function Contact() {
  return (
    <main>
      <ContactForm headingLevel="h1" />
    </main>
  );
}
