'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { gsap } from 'gsap';

const NAV_LINKS = [
  { href: '/',               label: 'Home' },
  { href: '/about',          label: 'About' },
  { href: '/products',       label: 'Products' },
  { href: '/certifications', label: 'Certifications' },
  { href: '/map',            label: 'Export Map' },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate/10'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 bg-steel flex items-center justify-center">
            <span className="text-white font-display font-bold text-sm">A</span>
          </div>
          <span
            className={`font-display text-xl font-bold tracking-wider transition-colors duration-300 ${
              scrolled ? 'text-navy' : 'text-white'
            }`}
          >
            ASPIA
          </span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-10">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-300 relative
                  after:absolute after:bottom-[-4px] after:left-0 after:h-px after:bg-steel after:transition-all after:duration-300
                  ${pathname === href ? 'after:w-full' : 'after:w-0 hover:after:w-full'}
                  ${scrolled ? 'text-navy/70 hover:text-navy' : 'text-white/80 hover:text-white'}
                `}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          href="/contact"
          className={`hidden lg:inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold tracking-widest uppercase border transition-all duration-300 ${
            scrolled
              ? 'border-navy text-navy hover:bg-navy hover:text-white'
              : 'border-white text-white hover:bg-white hover:text-navy'
          }`}
        >
          Get in Touch
        </Link>

        {/* Mobile Toggle */}
        <button
          className={`lg:hidden flex flex-col gap-1.5 ${scrolled ? 'text-navy' : 'text-white'}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-px bg-current transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-px bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-px bg-current transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`lg:hidden bg-navy transition-all duration-500 overflow-hidden ${menuOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <ul className="flex flex-col px-6 pb-8 pt-4 gap-6">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                onClick={() => setMenuOpen(false)}
                className="text-white/80 text-sm font-semibold tracking-widest uppercase hover:text-white transition-colors"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
