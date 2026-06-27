'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { gsap } from 'gsap';
import { useStaggerReveal } from '@/lib/gsapUtils';

const CONTACT_CONFIG = {
  email: 'aspiaparenterapvtltd7380@gmail.com',
  phone: '+919517186565',
  xHandle: '@AspiaLtd',
  instagram: 'ASPIAPARENTERALS',
  links: {
    mailto: 'mailto:aspiaparenterapvtltd7380@gmail.com?subject=Business%20Inquiry%20for%20Aspia',
    tel: 'tel:+919517186565',
    x: 'https://x.com/AspiaLtd',
    instagram: 'https://www.instagram.com/aspiaparenterals/'
  }
};

const { email: emailAddress, phone: phoneNumber, xHandle, instagram: instagramHandle } = CONTACT_CONFIG;
const mailtoLink = CONTACT_CONFIG.links.mailto;
const telLink = CONTACT_CONFIG.links.tel;
const xLink = CONTACT_CONFIG.links.x;
const instagramLink = CONTACT_CONFIG.links.instagram;

function MailIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      />
    </svg>
  );
}

function ArrowUpRightIcon({ className = 'h-4 w-4' }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M9 7h8v8" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2H21.5l-7.11 8.126L22.75 22h-6.547l-5.13-6.706L5.207 22H1.95l7.605-8.692L1.55 2h6.713l4.638 6.116L18.244 2zm-1.142 18h1.804L7.277 3.895H5.341L17.102 20z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.8A3.95 3.95 0 003.8 7.75v8.5a3.95 3.95 0 003.95 3.95h8.5a3.95 3.95 0 003.95-3.95v-8.5a3.95 3.95 0 00-3.95-3.95h-8.5zm8.95 1.35a1.1 1.1 0 110 2.2 1.1 1.1 0 010-2.2zM12 6.85A5.15 5.15 0 1112 17.15 5.15 5.15 0 0112 6.85zm0 1.8A3.35 3.35 0 1012 15.35 3.35 3.35 0 0012 8.65z" />
    </svg>
  );
}

const primaryContacts = [
  {
    title: 'Email',
    value: emailAddress,
    href: mailtoLink,
    description: 'For quotations, documents, and formal inquiries.',
    actionLabel: 'Email',
    icon: <MailIcon />,
  },
  {
    title: 'Phone',
    value: phoneNumber,
    href: telLink,
    description: 'For urgent coordination and quick follow-up.',
    actionLabel: 'Call',
    icon: <PhoneIcon />,
  },
];

const officialLinks = [
  { title: 'Export Map', href: '/map' },
  { title: 'Certifications', href: '/certifications' },
];

const socialChannels = [
  {
    title: 'X',
    value: xHandle,
    href: xLink,
    icon: <XIcon />,
    badgeClassName: 'bg-[#0f172a] text-white',
  },
  {
    title: 'Instagram',
    value: instagramHandle,
    href: instagramLink,
    icon: <InstagramIcon />,
    badgeClassName:
      'bg-[linear-gradient(135deg,#facc15,#ec4899,#60a5fa)] text-white',
  },
];

export default function ContactForm({ headingLevel = 'h2' }) {
  const sectionRef = useRef(null);
  const Heading = headingLevel;

  useStaggerReveal(sectionRef, '.contact-item', { delay: 0.12, y: 34, duration: 0.8, stagger: 0.08 });

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[linear-gradient(180deg,#f8f9fb_0%,#edf3f8_48%,#081523_48%,#091625_100%)] py-16 md:py-20"
    >
      <div className="absolute inset-x-0 top-0 h-64 bg-[radial-gradient(circle_at_top,rgba(74,111,165,0.16),transparent_62%)]" />
      <div className="absolute inset-x-0 bottom-0 h-72 bg-[radial-gradient(circle_at_bottom,rgba(74,111,165,0.12),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="contact-item">
            <div className="section-label mb-0">Contact Aspia</div>
            <Heading className="heading-display mt-4 max-w-3xl text-[clamp(3.15rem,6.8vw,6rem)] leading-[0.88] text-navy">
              Simple ways to reach us
              <span className="heading-subtitle text-steel">
                Product, quotation, and document inquiries.
              </span>
            </Heading>
            <p className="mt-6 max-w-xl text-base leading-8 text-slate md:text-lg">
              Email for formal requests. Call when the matter needs quick coordination.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href={mailtoLink} className="btn-primary">
                Email Aspia
                <ArrowUpRightIcon />
              </Link>
              <Link href={telLink} className="btn-outline border-steel text-steel hover:border-navy">
                Call Directly
                <ArrowUpRightIcon />
              </Link>
            </div>
          </div>

          <div className="contact-item relative min-h-[360px] overflow-hidden rounded-[28px] border border-slate/10 shadow-[0_24px_70px_rgba(10,22,40,0.1)] md:min-h-[430px]">
            <Image
              src="/aspia-building.jpg"
              alt="Aspia facility exterior"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 52vw, 100vw"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,18,32,0.04),rgba(7,18,32,0.72))]" />
            <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
              <div className="max-w-md rounded-[22px] border border-white/12 bg-white/10 p-5 text-white backdrop-blur-md">
                <div className="text-xs font-semibold uppercase tracking-[0.26em] text-white/70">
                  Business Inquiry Desk
                </div>
                <p className="mt-3 text-base leading-7 text-white/86">
                  Use the contact details below to reach the right team faster.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="contact-item">
            <div className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-light/74">
              Direct Channels
            </div>
            <h2 className="mt-3 font-display text-3xl font-bold text-white md:text-4xl">
              Choose one channel
            </h2>

            <div className="mt-6 grid gap-5 md:grid-cols-2">
              {primaryContacts.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group rounded-[28px] border border-white/10 bg-white/[0.05] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-steel-light/55 hover:bg-white/[0.08]"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white text-steel shadow-[0_16px_36px_rgba(255,255,255,0.08)]">
                      {item.icon}
                    </div>
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white transition-colors duration-300 group-hover:border-steel-light/60">
                      <ArrowUpRightIcon />
                    </span>
                  </div>

                  <div className="mt-6 text-[11px] font-semibold uppercase tracking-[0.26em] text-slate-light/72">
                    {item.title}
                  </div>
                  <div className="mt-3 break-words text-lg font-semibold text-white transition-colors duration-300 group-hover:text-steel-light">
                    {item.value}
                  </div>
                  <p className="mt-3 text-sm leading-7 text-slate-light">{item.description}</p>
                  <div className="mt-5 text-sm font-semibold uppercase tracking-[0.22em] text-white">
                    {item.actionLabel}
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="contact-item space-y-6">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-light/74">
                Official Links
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                {officialLinks.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="group flex items-center justify-between gap-4 rounded-[22px] border border-white/10 bg-white/[0.04] px-5 py-4 text-white transition-all duration-300 hover:border-steel-light/50 hover:bg-white/[0.07]"
                  >
                    <span className="font-semibold">{item.title}</span>
                    <ArrowUpRightIcon />
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-light/74">
                Social
              </div>
              <div className="mt-4 space-y-3">
                {socialChannels.map((channel) => (
                  <Link
                    key={channel.title}
                    href={channel.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-between gap-4 rounded-[22px] border border-white/10 bg-white/[0.04] px-5 py-4 transition-all duration-300 hover:border-steel-light/50 hover:bg-white/[0.07]"
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
                    <ArrowUpRightIcon />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
