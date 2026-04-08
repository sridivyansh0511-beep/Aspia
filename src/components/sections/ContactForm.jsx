'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const emailAddress = 'aspiaparenterapvtltd7380@gmail.com';
const phoneNumber = '+919517186565';
const xHandle = '@AspiaLtd';
const instagramHandle = 'ASPIAPARENTERALS';
const mailtoLink = `mailto:${emailAddress}?subject=Business%20Inquiry%20for%20Aspia`;
const telLink = 'tel:+919517186565';
const xLink = 'https://x.com/AspiaLtd';
const instagramLink = 'https://www.instagram.com/aspiaparenterals/';

function MailIcon() {
  return (
    <svg className="h-6 w-6 text-steel" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg className="h-6 w-6 text-steel" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      />
    </svg>
  );
}

function XIcon() {
  return (
    <svg className="h-4 w-4 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2H21.5l-7.11 8.126L22.75 22h-6.547l-5.13-6.706L5.207 22H1.95l7.605-8.692L1.55 2h6.713l4.638 6.116L18.244 2zm-1.142 18h1.804L7.277 3.895H5.341L17.102 20z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg className="h-4 w-4 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.8A3.95 3.95 0 003.8 7.75v8.5a3.95 3.95 0 003.95 3.95h8.5a3.95 3.95 0 003.95-3.95v-8.5a3.95 3.95 0 00-3.95-3.95h-8.5zm8.95 1.35a1.1 1.1 0 110 2.2 1.1 1.1 0 010-2.2zM12 6.85A5.15 5.15 0 1112 17.15 5.15 5.15 0 0112 6.85zm0 1.8A3.35 3.35 0 1012 15.35 3.35 3.35 0 0012 8.65z" />
    </svg>
  );
}

function ArrowUpRightIcon() {
  return (
    <svg
      className="h-4 w-4 text-white"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M9 7h8v8" />
    </svg>
  );
}

const primaryContacts = [
  {
    title: 'Email',
    value: emailAddress,
    href: mailtoLink,
    description: 'For quotations, documents, and business inquiries.',
    icon: <MailIcon />,
    actionLabel: 'Open Draft',
  },
  {
    title: 'Phone',
    value: phoneNumber,
    href: telLink,
    description: 'For urgent coordination and quick assistance.',
    icon: <PhoneIcon />,
    actionLabel: 'Call Now',
  },
];

const socialChannels = [
  {
    title: 'X',
    value: xHandle,
    href: xLink,
    icon: <XIcon />,
    badgeClassName: 'bg-white/10',
  },
  {
    title: 'Instagram',
    value: instagramHandle,
    href: instagramLink,
    icon: <InstagramIcon />,
    badgeClassName:
      'bg-[linear-gradient(135deg,rgba(253,224,71,0.34),rgba(236,72,153,0.28),rgba(96,165,250,0.24))]',
  },
];

export default function ContactForm() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const items = sectionRef.current?.querySelectorAll('.contact-item');

    if (!items?.length) {
      return;
    }

    gsap.fromTo(
      items,
      { opacity: 0, y: 48 },
      { opacity: 1, y: 0, duration: 0.9, stagger: 0.12, ease: 'power3.out', delay: 0.2 }
    );
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-[#091625] py-24 md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(74,111,165,0.16),transparent_36%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent_42%)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <div className="contact-item mx-auto max-w-4xl text-center">
          <div className="section-label text-center text-slate-light">Get In Touch</div>
          <h2 className="font-display text-[clamp(3.2rem,6.5vw,5.4rem)] leading-[0.94] tracking-[-0.04em] text-white">
            Contact Aspia
            <span className="mt-3 block text-2xl font-light italic text-slate-light md:text-4xl">
              Simple, direct, and professional
            </span>
          </h2>
          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-slate-light">
            Reach us through the channel that matches your need. The page is organized so visitors
            can email, call, or verify our public presence without sorting through extra clutter.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="contact-item panel-dark overflow-hidden p-6 md:p-8">
            <div className="flex flex-col gap-5 border-b border-white/10 pb-6 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-light/75">
                  Primary Contact
                </div>
                <h3 className="mt-3 font-display text-3xl font-bold text-white md:text-4xl">
                  Reach us directly
                </h3>
              </div>
              <div className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-slate-light/80">
                Business inquiries only
              </div>
            </div>

            <div className="mt-6 grid gap-5 lg:grid-cols-2">
              {primaryContacts.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group rounded-[28px] border border-white/10 bg-white/[0.04] p-6 transition-all duration-300 hover:border-steel-light/50 hover:bg-white/[0.07]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white">
                      {item.icon}
                    </div>
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition-colors duration-300 group-hover:border-steel-light/60">
                      <ArrowUpRightIcon />
                    </span>
                  </div>

                  <div className="mt-6 text-xs font-semibold uppercase tracking-[0.26em] text-slate-light/70">
                    {item.title}
                  </div>
                  <div className="mt-3 break-all text-2xl font-semibold text-white transition-colors duration-300 group-hover:text-steel-light">
                    {item.value}
                  </div>
                  <p className="mt-4 text-sm leading-7 text-slate-light">
                    {item.description}
                  </p>
                  <div className="mt-6 text-xs font-semibold uppercase tracking-[0.24em] text-slate-light/80">
                    {item.actionLabel}
                  </div>
                </Link>
              ))}
            </div>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-light">
              Email is best for quotations and documentation. Call for urgent follow-up or quick coordination.
            </p>
          </div>

          <div className="contact-item panel-dark p-6 md:p-8">
            <div className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-light/75">
              Official Social Presence
            </div>
            <h3 className="mt-3 font-display text-3xl font-bold text-white">
              Public channels
            </h3>
            <div className="mt-6 space-y-4">
              {socialChannels.map((channel) => (
                <Link
                  key={channel.title}
                  href={channel.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between gap-4 rounded-[22px] border border-white/10 bg-white/[0.04] px-5 py-4 transition-all duration-300 hover:border-steel-light/45 hover:bg-white/[0.07]"
                >
                  <div className="flex min-w-0 items-center gap-4">
                    <div
                      className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-white/10 ${channel.badgeClassName}`}
                    >
                      {channel.icon}
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-light/70">
                        {channel.title}
                      </div>
                      <div className="mt-1 break-all text-sm font-semibold text-white transition-colors duration-300 group-hover:text-steel-light">
                        {channel.value}
                      </div>
                    </div>
                  </div>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 transition-colors duration-300 group-hover:border-steel-light/60">
                    <ArrowUpRightIcon />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
