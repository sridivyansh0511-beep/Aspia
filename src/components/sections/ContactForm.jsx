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

const contactHighlights = [
  {
    title: 'Email For Quotations',
    description:
      'Use email for pricing requests, documentation, product details, and formal business communication.',
  },
  {
    title: 'Phone For Urgent Coordination',
    description:
      'Call directly when you need faster operational support, quick clarifications, or immediate assistance.',
  },
  {
    title: 'Social For Public Presence',
    description:
      'X and Instagram remain available for brand visibility and public-facing company updates.',
  },
];

const contactDetails = [
  {
    title: 'Email',
    value: emailAddress,
    href: mailtoLink,
    description: 'Best for quotations, documentation, and business inquiries.',
    icon: <MailIcon />,
    actionLabel: 'Open Draft',
  },
  {
    title: 'Phone',
    value: phoneNumber,
    href: telLink,
    description: 'Ideal for urgent communication and immediate assistance.',
    icon: <PhoneIcon />,
    actionLabel: 'Call Desk',
  },
];

const socialChannels = [
  {
    title: 'X',
    value: xHandle,
    href: xLink,
    description: 'Corporate updates and public-facing announcements.',
    icon: <XIcon />,
    badgeClassName: 'bg-white/10',
  },
  {
    title: 'Instagram',
    value: instagramHandle,
    href: instagramLink,
    description: 'Brand presence, product highlights, and visual updates.',
    icon: <InstagramIcon />,
    badgeClassName:
      'bg-[linear-gradient(135deg,rgba(253,224,71,0.34),rgba(236,72,153,0.28),rgba(96,165,250,0.24))]',
  },
];

const supportPoints = [
  'Clear routes for buyers, distributors, and partners.',
  'Professional communication without unnecessary form fields.',
  'Official digital touchpoints presented in one clean section.',
];

export default function ContactForm() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const items = sectionRef.current?.querySelectorAll('.contact-item');

    if (!items?.length) {
      return;
    }

    const tl = gsap.timeline({ delay: 0.35 });

    tl.fromTo(
      items,
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 0.95, stagger: 0.16, ease: 'power3.out' }
    );
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-[#091625] py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(74,111,165,0.16),transparent_36%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent_42%)]" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <div className="contact-item mx-auto max-w-4xl text-center">
          <div className="section-label text-center text-slate-light">Get In Touch</div>
          <h2 className="font-display text-[clamp(3.5rem,7vw,5.8rem)] leading-[0.92] tracking-[-0.04em] text-white">
            Contact Aspia
            <span className="mt-3 block text-3xl font-light italic text-slate-light md:text-4xl">
              Clear. Direct. Professional.
            </span>
          </h2>
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-light">
            For quotations, partnership discussions, and urgent coordination, Aspia can be reached
            through direct channels built for clear and professional business communication.
          </p>
        </div>

        <div className="mt-16 grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="contact-item border-t border-white/10 pt-8">
            <div className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-light">
              Business Contact Desk
            </div>
            <h3 className="mt-6 max-w-xl font-display text-4xl font-bold leading-tight text-white md:text-5xl">
              Reach the right Aspia team with clarity.
            </h3>
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-light md:text-lg">
              The contact area is now arranged as a clean business desk, so visitors can quickly
              understand where to write, when to call, and where to follow Aspia publicly.
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

            <div className="mt-10 border-y border-white/10">
              {contactHighlights.map((item) => (
                <div
                  key={item.title}
                  className="flex gap-4 border-b border-white/10 py-5 last:border-b-0"
                >
                  <span className="mt-2 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-steel-light" />
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
                      {item.title}
                    </h4>
                    <p className="mt-2 max-w-xl text-sm leading-7 text-slate-light">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 border-t border-white/10 pt-6">
              <div className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-light">
                Communication Notes
              </div>
              <div className="mt-4 space-y-3">
                {supportPoints.map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-steel" />
                    <p className="text-sm leading-7 text-slate-light">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="contact-item border-t border-white/10 pt-8 lg:border-l lg:border-t-0 lg:pl-12">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-light">
                Direct Contact
              </div>
              <h4 className="mt-3 text-2xl font-semibold text-white">Primary channels</h4>
              <div className="mt-6 border-y border-white/10">
                {contactDetails.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="group flex flex-col gap-5 border-b border-white/10 py-6 last:border-b-0 sm:flex-row sm:items-start sm:justify-between"
                  >
                    <div className="flex min-w-0 items-start gap-4">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04]">
                        {item.icon}
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-light">
                          {item.title}
                        </div>
                        <div className="mt-2 break-all text-xl font-semibold text-white transition-colors duration-300 group-hover:text-steel-light">
                          {item.value}
                        </div>
                        <p className="mt-3 max-w-[34rem] text-sm leading-7 text-slate-light">
                          {item.description}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-slate-light/85">
                      <span>{item.actionLabel}</span>
                      <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 transition-colors duration-300 group-hover:border-steel-light/60">
                        <ArrowUpRightIcon />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="mt-12">
              <div className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-light">
                Official Social Presence
              </div>
              <h4 className="mt-3 text-2xl font-semibold text-white">Public channels</h4>
              <div className="mt-6 border-y border-white/10">
                {socialChannels.map((channel) => (
                  <Link
                    key={channel.title}
                    href={channel.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex flex-col gap-5 border-b border-white/10 py-6 last:border-b-0 sm:flex-row sm:items-start sm:justify-between"
                  >
                    <div className="flex min-w-0 items-start gap-4">
                      <div
                        className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-white/10 ${channel.badgeClassName}`}
                      >
                        {channel.icon}
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-light">
                          {channel.title}
                        </div>
                        <div className="mt-2 break-all text-lg font-semibold text-white transition-colors duration-300 group-hover:text-steel-light">
                          {channel.value}
                        </div>
                        <p className="mt-3 max-w-[34rem] text-sm leading-7 text-slate-light">
                          {channel.description}
                        </p>
                      </div>
                    </div>
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 transition-colors duration-300 group-hover:border-steel-light/60">
                      <ArrowUpRightIcon />
                    </span>
                  </Link>
                ))}
              </div>

              <p className="mt-6 text-sm leading-7 text-slate-light">
                Use email for detailed commercial conversations, phone for urgent follow-up, and
                social channels for public-facing company visibility.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
