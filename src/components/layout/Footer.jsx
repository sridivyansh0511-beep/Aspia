'use client';

import Image from 'next/image';
import Link from 'next/link';

const FOOTER_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/products', label: 'Products' },
  { href: '/certifications', label: 'Certifications' },
  { href: '/map', label: 'Export Map' },
  { href: '/contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#071220]">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-12">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-md">
            <Link href="/" className="inline-flex" aria-label="Aspia home">
              <Image
                src="/aspia-logo-transparent.png"
                alt="Aspia"
                width={1002}
                height={388}
                className="h-auto w-[152px] drop-shadow-[0_12px_24px_rgba(0,0,0,0.28)] sm:w-[184px]"
              />
            </Link>
            <p className="mt-5 text-sm leading-7 text-slate-light">
              Precision-engineered industrial exports for critical sectors worldwide,
              from oil and gas to infrastructure and marine applications.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-4">
            {FOOTER_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-light/80 transition-colors hover:text-white"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/8 pt-6 text-xs uppercase tracking-[0.24em] text-slate-light/55 sm:flex-row sm:items-center sm:justify-between">
          <span>Aspia Global Industrial Exports</span>
          <span>Built For Reliable Worldwide Delivery</span>
        </div>
      </div>
    </footer>
  );
}
