import ContactForm from '@/components/sections/ContactForm';

export const metadata = {
  title: "Contact Aspia Parenterals — Enquiries & Partnerships",
  description:
    "Reach out to Aspia Parenterals for product enquiries, export partnerships, procurement documentation, or general business coordination.",
};

export default function Contact() {
  return (
    <main>
      <ContactForm headingLevel="h1" />
    </main>
  );
}
