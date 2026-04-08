'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Link from 'next/link';

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 });
    
    tl.fromTo(
      heroRef.current.querySelectorAll('.hero-content'),
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: 'power3.out' }
    );
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative flex min-h-[calc(100svh-5rem)] items-center overflow-hidden bg-navy"
    >
      <div
        className="absolute inset-0 scale-110"
        style={{
          backgroundImage: 'url(/aspia-building.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(10,22,40,0.78),rgba(10,22,40,0.48))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),transparent_36%),radial-gradient(circle_at_top,rgba(74,111,165,0.24),transparent_42%)]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-20 lg:px-12">
        <div className="max-w-4xl">
          <div className="hero-content mb-6 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.34em] text-slate-light/90">
            Your First-Line Choice For Water And Electrolytes Replacement Therapy
          </div>
          <h1 className="hero-content font-display text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
            Care, Quality,
            <span className="mt-3 block">Commitment</span>
            <span className="mt-3 block text-3xl font-light text-slate-light md:text-4xl lg:text-5xl">
              in every single drop.
            </span>
          </h1>
          <p className="hero-content mt-8 max-w-3xl text-lg leading-relaxed text-slate-light md:text-2xl">
            ASPIA Parenterals Pvt. Ltd. manufactures high-quality parenteral fluids in
            large volumes with modern production lines, automated technology, and a
            quality-first approach built for dependable healthcare supply.
          </p>
          <div className="hero-content mt-12 flex flex-wrap items-center gap-5">
            <Link href="/products" className="btn-primary">
              Explore Product Range
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4-4m4 4l-4-4" />
              </svg>
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-8 py-4 text-sm font-semibold uppercase tracking-[0.24em] text-white transition-all duration-300 hover:bg-white hover:text-navy"
            >
              About Aspia
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div className="hero-content mt-14 grid max-w-3xl gap-4 sm:grid-cols-3">
            {[
              ['cGMP', 'Compliant manufacturing facility'],
              ['FFS / BFS / Glass', 'Modern packaging platforms'],
              ['Promise', 'Parenteral with a Promise'],
            ].map(([value, label]) => (
              <div
                key={label}
                className="rounded-3xl border border-white/10 bg-white/[0.06] px-5 py-5 backdrop-blur-sm"
              >
                <div className="font-display text-3xl font-bold text-white">{value}</div>
                <div className="mt-2 text-sm leading-relaxed text-slate-light">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
