'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const emailAddress = 'aspiaparenterapvtltd7380@gmail.com';
const phoneNumber = '+919517186565';
const mailtoLink = `mailto:${emailAddress}?subject=Business%20Inquiry%20for%20Aspia`;
const telLink = 'tel:+919517186565';

const contactHighlights = [
  {
    title: 'Direct Business Contact',
    description:
      'Speak with our team directly for product discussions, order coordination, and commercial communication.',
  },
  {
    title: 'Fast Digital Response',
    description:
      'Visitors can open an email draft instantly, making the contact flow simple and professional.',
  },
  {
    title: 'Trusted Communication',
    description:
      'Clear contact details help buyers, distributors, and partners connect with confidence.',
  },
];

const contactDetails = [
  {
    title: 'Email',
    value: emailAddress,
    href: mailtoLink,
    description: 'Best for quotations, documentation, and business inquiries.',
    icon: (
      <svg className="h-6 w-6 text-steel" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: 'Phone',
    value: phoneNumber,
    href: telLink,
    description: 'Ideal for urgent communication and immediate assistance.',
    icon: (
      <svg className="h-6 w-6 text-steel" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
    ),
  },
];

const supportPoints = [
  'Professional communication for domestic and export business.',
  'Quick connect options for buyers, distributors, and partners.',
  'Simple, reliable contact flow without unnecessary form friction.',
];

export default function ContactForm() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.35 });

    tl.fromTo(
      sectionRef.current.querySelectorAll('.contact-item'),
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 0.95, stagger: 0.16, ease: 'power3.out' }
    );
  }, []);

  return (
    <section ref={sectionRef} className="overflow-hidden bg-[#091625] py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mx-auto max-w-4xl text-center">
          <div className="section-label text-center text-slate-light">Get In Touch</div>
          <h2 className="font-display text-[clamp(3.5rem,7vw,5.8rem)] leading-[0.92] tracking-[-0.04em] text-white">
            Contact Aspia
            <span className="mt-3 block text-3xl font-light italic text-slate-light md:text-4xl">
              Clear. Direct. Professional.
            </span>
          </h2>
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-light">
            We redesigned this section for straightforward business communication. Buyers and
            partners can now connect with you instantly through direct email or phone contact.
          </p>
        </div>

        <div className="contact-item mt-16 overflow-hidden rounded-[36px] border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(113,148,184,0.22),transparent_32%),linear-gradient(135deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-8 shadow-[0_28px_90px_rgba(2,8,18,0.38)] sm:p-10 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <div className="inline-flex rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-slate-light">
                Business Contact Desk
              </div>
              <h3 className="mt-6 max-w-2xl font-display text-4xl font-bold leading-tight text-white md:text-5xl">
                One polished contact section with instant action.
              </h3>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-light md:text-lg">
                Instead of a long inquiry form, this area now focuses on what matters most:
                helping visitors reach you quickly, professionally, and with confidence.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link href={mailtoLink} className="btn-primary justify-center">
                  Open Email Draft
                </Link>
                <Link
                  href={telLink}
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.04] px-8 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-white transition-all duration-300 hover:border-steel-light hover:bg-white/[0.08]"
                >
                  Call Now
                </Link>
              </div>

              <div className="mt-10 grid gap-4 md:grid-cols-3">
                {contactHighlights.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5"
                  >
                    <h4 className="text-base font-semibold text-white">{item.title}</h4>
                    <p className="mt-3 text-sm leading-7 text-slate-light">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-5">
              {contactDetails.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[28px] border border-white/10 bg-[#0d1d2f] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.18)]"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-steel/20">
                      {item.icon}
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-light">
                        {item.title}
                      </div>
                      <Link
                        href={item.href}
                        className="mt-2 block break-all text-xl font-semibold text-white transition-colors duration-300 hover:text-steel-light"
                      >
                        {item.value}
                      </Link>
                      <p className="mt-3 text-sm leading-7 text-slate-light">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}

              <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6">
                <div className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-light">
                  Communication Standard
                </div>
                <div className="mt-4 space-y-3">
                  {supportPoints.map((point) => (
                    <div key={point} className="flex items-start gap-3">
                      <span className="mt-2 h-2.5 w-2.5 rounded-full bg-steel" />
                      <p className="text-sm leading-7 text-slate-light">{point}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[28px] border border-steel/25 bg-steel/10 p-6">
                <div className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-light">
                  Preferred Email Route
                </div>
                <p className="mt-3 text-sm leading-7 text-slate-light">
                  Clicking the email button opens a direct draft addressed to your Gmail-linked
                  inbox, so the visitor can start writing to you immediately.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
