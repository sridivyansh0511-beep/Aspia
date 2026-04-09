'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import BorderGlow from '@/components/ui/BorderGlow';

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

function CheckIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M16.704 5.29a1 1 0 010 1.42l-7.2 7.2a1 1 0 01-1.415 0l-3.2-3.2a1 1 0 111.414-1.42l2.493 2.494 6.493-6.494a1 1 0 011.415 0z"
        clipRule="evenodd"
      />
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
    title: 'Email for formal inquiries',
    value: emailAddress,
    href: mailtoLink,
    description: 'Best for quotations, product documentation, registrations, and partnership requests.',
    actionLabel: 'Open Email',
    icon: <MailIcon />,
  },
  {
    title: 'Phone for urgent follow-up',
    value: phoneNumber,
    href: telLink,
    description: 'Best when you need quick coordination, clarification, or a direct conversation.',
    actionLabel: 'Call Aspia',
    icon: <PhoneIcon />,
  },
];

const processNotes = [
  'Share your requirement, volume, or document request clearly.',
  'Use email when attachments or formal records are needed.',
  'Use phone when the matter is urgent and time-sensitive.',
];

const quickLinks = [
  {
    title: 'Explore Export Reach',
    description: 'See where Aspia is building its international footprint.',
    href: '/map',
  },
  {
    title: 'Review Certifications',
    description: 'Browse quality credentials and standards-focused documentation.',
    href: '/certifications',
  },
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

export default function ContactForm() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const items = sectionRef.current?.querySelectorAll('.contact-item');

    if (!items?.length) {
      return;
    }

    gsap.fromTo(
      items,
      { opacity: 0, y: 42 },
      { opacity: 1, y: 0, duration: 0.95, stagger: 0.1, ease: 'power3.out', delay: 0.15 }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[linear-gradient(180deg,#f8f9fb_0%,#edf3f8_42%,#081523_42%,#091625_100%)] py-16 md:py-20"
    >
      <div className="absolute inset-x-0 top-0 h-64 bg-[radial-gradient(circle_at_top,rgba(74,111,165,0.18),transparent_62%)]" />
      <div className="absolute inset-x-0 bottom-0 h-72 bg-[radial-gradient(circle_at_bottom,rgba(74,111,165,0.14),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <div className="contact-item overflow-hidden rounded-[36px] border border-slate/10 bg-white shadow-[0_30px_90px_rgba(10,22,40,0.08)]">
          <div className="grid lg:grid-cols-[1.06fr_0.94fr]">
            <div className="px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
              <div className="section-label mb-0">Contact Aspia</div>
              <h1 className="mt-4 max-w-3xl font-display text-[clamp(3rem,6vw,5.5rem)] leading-[0.92] tracking-[-0.045em] text-navy">
                A cleaner way
                <span className="mt-2 block text-steel">to start the conversation.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate md:text-lg">
                This page is built around intent first: formal business communication, urgent coordination,
                and public verification each have their own space so visitors can act quickly without
                hunting through clutter.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link href={mailtoLink} className="btn-primary">
                  Email Aspia
                  <ArrowUpRightIcon className="h-4 w-4" />
                </Link>
                <Link href={telLink} className="btn-outline border-steel text-steel hover:border-navy">
                  Call Directly
                  <ArrowUpRightIcon className="h-4 w-4" />
                </Link>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {[
                  ['Formal inquiries', 'Email-first for quotations and documents'],
                  ['Direct support', 'Phone access for urgent coordination'],
                  ['Public presence', 'Official social channels for visibility'],
                ].map(([title, description]) => (
                  <div
                    key={title}
                    className="rounded-[24px] border border-slate/10 bg-[#f8fbfe] px-5 py-5"
                  >
                    <div className="text-xs font-semibold uppercase tracking-[0.26em] text-steel">
                      {title}
                    </div>
                    <p className="mt-3 text-sm leading-7 text-slate">{description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative min-h-[380px] border-t border-slate/10 lg:min-h-full lg:border-l lg:border-t-0">
              <Image
                src="/aspia-building.jpg"
                alt="Aspia facility exterior"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,18,32,0.1),rgba(7,18,32,0.82))]" />

              <div className="absolute inset-x-0 top-0 p-6 md:p-8">
                <div className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/84 backdrop-blur-md">
                  Structured for action
                </div>
              </div>

              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                <div className="max-w-xl rounded-[28px] border border-white/12 bg-white/10 p-6 text-white backdrop-blur-md">
                  <div className="text-xs font-semibold uppercase tracking-[0.28em] text-white/70">
                    How to use this page
                  </div>
                  <h2 className="mt-3 font-display text-3xl font-bold leading-tight">
                    Choose the channel that matches the job
                  </h2>
                  <div className="mt-5 space-y-3">
                    {processNotes.map((note) => (
                      <div key={note} className="flex items-start gap-3 text-sm leading-7 text-white/84">
                        <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full border border-white/15 bg-white/10">
                          <CheckIcon />
                        </span>
                        <span>{note}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="contact-item space-y-8">
            <BorderGlow
              className="contact-item"
              backgroundColor="#081523"
              borderRadius={28}
              glowRadius={30}
              glowColor="196 82 78"
              glowIntensity={0.72}
              edgeSensitivity={32}
              coneSpread={24}
              fillOpacity={0.26}
              colors={['#6FA3D3', '#1A9E8F', '#F1C46D']}
            >
              <div className="p-6 md:p-8 lg:p-9">
                <div className="flex flex-col gap-4 border-b border-white/10 pb-6 md:flex-row md:items-end md:justify-between">
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-light/74">
                      Direct Channels
                    </div>
                    <h2 className="mt-3 font-display text-3xl font-bold text-white md:text-4xl">
                      Contact without friction
                    </h2>
                  </div>
                  <div className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-light/80">
                    Clear actions, fewer decisions
                  </div>
                </div>

                <div className="mt-6 grid gap-5">
                  {primaryContacts.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="group grid gap-5 rounded-[28px] border border-white/10 bg-white/[0.04] p-6 transition-all duration-300 hover:border-steel-light/55 hover:bg-white/[0.07] md:grid-cols-[auto_1fr_auto] md:items-center"
                    >
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white text-steel shadow-[0_16px_36px_rgba(255,255,255,0.08)]">
                        {item.icon}
                      </div>

                      <div className="min-w-0">
                        <div className="text-[11px] font-semibold uppercase tracking-[0.26em] text-slate-light/72">
                          {item.title}
                        </div>
                        <div className="mt-3 break-all text-2xl font-semibold text-white transition-colors duration-300 group-hover:text-steel-light">
                          {item.value}
                        </div>
                        <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-light">
                          {item.description}
                        </p>
                      </div>

                      <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.22em] text-white">
                        <span>{item.actionLabel}</span>
                        <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 transition-colors duration-300 group-hover:border-steel-light/60">
                          <ArrowUpRightIcon />
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </BorderGlow>

            <div className="contact-item grid gap-5 md:grid-cols-2">
              {quickLinks.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.09),rgba(255,255,255,0.04))] p-6 shadow-[0_18px_48px_rgba(3,10,21,0.2)] transition-all duration-300 hover:border-steel-light/50 hover:-translate-y-1"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-light/72">
                      Explore
                    </div>
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white transition-colors duration-300 group-hover:border-steel-light/60">
                      <ArrowUpRightIcon />
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-3xl font-bold text-white">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-light">{item.description}</p>
                </Link>
              ))}
            </div>
          </div>

          <div className="contact-item space-y-8">
            <div className="panel-dark p-6 md:p-8 lg:p-9">
              <div className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-light/74">
                Communication Notes
              </div>
              <h2 className="mt-3 font-display text-3xl font-bold text-white">
                A page that tells visitors what to do next
              </h2>
              <p className="mt-5 text-sm leading-7 text-slate-light">
                The new structure separates contact actions from context. It helps visitors move faster
                by showing the right route for quotations, urgent follow-up, and public profile checks.
              </p>

              <div className="mt-6 space-y-4">
                {processNotes.map((note) => (
                  <div
                    key={note}
                    className="flex items-start gap-4 rounded-[22px] border border-white/10 bg-white/[0.04] px-5 py-4"
                  >
                    <span className="mt-1 flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-steel-light">
                      <CheckIcon />
                    </span>
                    <p className="text-sm leading-7 text-slate-light">{note}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="panel-dark p-6 md:p-8 lg:p-9">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-light/74">
                    Social Presence
                  </div>
                  <h2 className="mt-3 font-display text-3xl font-bold text-white">
                    Public-facing channels
                  </h2>
                </div>
                <div className="hidden rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-light/80 md:inline-flex">
                  Lightweight verification
                </div>
              </div>

              <div className="mt-6 space-y-4">
                {socialChannels.map((channel) => (
                  <Link
                    key={channel.title}
                    href={channel.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-between gap-4 rounded-[24px] border border-white/10 bg-white/[0.04] px-5 py-5 transition-all duration-300 hover:border-steel-light/50 hover:bg-white/[0.07]"
                  >
                    <div className="flex min-w-0 items-center gap-4">
                      <div
                        className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-white/10 ${channel.badgeClassName}`}
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
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white transition-colors duration-300 group-hover:border-steel-light/60">
                      <ArrowUpRightIcon />
                    </span>
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
