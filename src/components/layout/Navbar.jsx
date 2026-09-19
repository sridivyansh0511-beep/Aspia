'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { gsap } from 'gsap';

const NAV_LINKS = [
  { href: '/',               label: 'Home' },
  { href: '/about',          label: 'About' },
  { href: '/products',       label: 'Products' },
  { href: '/contact',        label: 'Contact' },
];

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const navRef  = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -80, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.3 }
    );
  }, []);

  return (
    <header
      ref={navRef}
      className={`sticky top-0 left-0 right-0 z-50 border-b transition-all duration-500 ${
        scrolled
          ? 'border-white/10 bg-navy/[0.96] shadow-[0_18px_50px_rgba(7,16,30,0.45)] backdrop-blur-xl'
          : 'border-white/5 bg-navy/90 backdrop-blur-lg'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
        <Link href="/" className="group flex items-center" aria-label="Aspia home">
          <Image
            src="/a-world-class--ultra-minimalist-logo-design-for-a--2-2.svg"
            alt="Aspia"
            width={958}
            height={238}
            priority
            className="h-auto w-[140px] drop-shadow-[0_10px_24px_rgba(0,0,0,0.28)] transition-transform duration-300 group-hover:scale-[1.02] sm:w-[160px] lg:w-[180px]"
          />
        </Link>

        <ul className="hidden lg:flex items-center gap-10">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`relative text-xs font-semibold uppercase tracking-[0.22em] transition-all duration-300 after:absolute after:bottom-[-8px] after:left-0 after:h-px after:bg-steel-light after:transition-all after:duration-300 ${
                  pathname === href
                    ? 'text-white after:w-full'
                    : 'text-white/75 after:w-0 hover:text-white hover:after:w-full'
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/contact"
          className="hidden lg:inline-flex items-center gap-2 rounded-full border border-steel-light/70 bg-steel-light/15 px-6 py-3 text-xs font-semibold uppercase tracking-[0.28em] text-white transition-all duration-300 hover:border-steel-light hover:bg-steel-light hover:text-white"
        >
          Get in Touch
        </Link>

        <button
          className="flex flex-col gap-1.5 text-white lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-px bg-current transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-px bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-px bg-current transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
        </button>
      </nav>

      <div className={`overflow-hidden border-t border-white/5 bg-navy/95 transition-all duration-500 lg:hidden ${menuOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <ul className="flex flex-col gap-6 px-6 pb-8 pt-5">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                onClick={() => setMenuOpen(false)}
                className={`text-sm font-semibold uppercase tracking-[0.24em] transition-colors ${
                  pathname === href ? 'text-white' : 'text-white/75 hover:text-white'
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="inline-flex rounded-full border border-steel-light/70 bg-steel-light/15 px-5 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-white transition-colors hover:bg-steel-light"
            >
              Get in Touch
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
