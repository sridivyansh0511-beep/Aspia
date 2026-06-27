'use client';

import { useRef } from 'react';
import { gsap } from 'gsap';
import { useStaggerReveal } from '@/lib/gsapUtils';
import Link from 'next/link';

export default function Hero() {
  const heroRef = useRef(null);

  useStaggerReveal(heroRef, '.hero-content', { delay: 0.5 });

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
          <div
            className="hero-content mb-6 inline-flex items-center rounded-full border border-white/15 bg-navy/35 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.34em] text-white"
            style={{ textShadow: '0 1px 10px rgba(10, 22, 40, 0.45)' }}
          >
            Sterile IV Fluid Manufacturing
          </div>
          <h1
            className="hero-content heading-display max-w-[13ch] text-[clamp(3.35rem,8.2vw,7.1rem)] leading-[0.88] text-white"
            style={{ textShadow: '0 4px 24px rgba(10, 22, 40, 0.55)' }}
          >
            <span className="block">Care, Quality,</span>
            <span className="mt-2 block">Commitment</span>
            <span className="mt-5 block font-sans text-[clamp(1.35rem,3vw,2rem)] font-medium leading-tight tracking-normal text-[#dbeafe]">
              in every single drop.
            </span>
          </h1>
          <p
            className="hero-content mt-8 max-w-3xl text-lg leading-relaxed text-white md:text-[1.55rem]"
            style={{ textShadow: '0 2px 16px rgba(10, 22, 40, 0.45)' }}
          >
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
                <div className="mt-2 text-sm leading-relaxed text-white/80">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
