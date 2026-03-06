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
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 scale-110"
        style={{
          backgroundImage: 'url(/aspia-building.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-navy/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 lg:px-12">
        <div className="hero-content">
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            ASPIA
            <span className="block text-3xl md:text-4xl lg:text-5xl font-light text-slate-light mt-2">
              Engineering Excellence
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-light max-w-3xl mx-auto mb-12 leading-relaxed">
            Precision-engineered solutions for global industries. Trusted partner for valves, 
            fittings, and industrial components since 1995.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link href="/products" className="btn-primary">
              Explore Products
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4-4m4 4l-4-4" />
              </svg>
            </Link>
            <Link href="/contact" className="btn-outline">
              Get in Touch
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
