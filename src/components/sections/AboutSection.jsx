'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Link from 'next/link';

export default function AboutSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 });
    
    tl.fromTo(
      sectionRef.current.querySelectorAll('.about-item'),
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: 'power3.out' }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[linear-gradient(180deg,#F8F9FB,#EEF3F8)] py-28"
    >
      <div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top,rgba(74,111,165,0.18),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="about-item">
            <div className="section-label">About Aspia</div>
            <h2 className="section-title max-w-3xl">
              Engineering Excellence
              <span className="mt-3 block text-3xl font-light italic text-slate-light md:text-4xl">
                Since 1995
              </span>
            </h2>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate">
              ASPIA has been a trusted name in industrial solutions for over 25 years.
              We specialize in manufacturing high-quality valves, fittings, and engineered products
              that meet the most demanding international standards.
            </p>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate">
              Our commitment to innovation, quality, and customer satisfaction has made us
              a preferred partner for industries ranging from oil &amp; gas to water treatment
              and infrastructure development.
            </p>
            <div className="mt-10 flex flex-wrap gap-5">
              <Link href="/certifications" className="btn-outline">
                Our Certifications
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link href="/contact" className="btn-primary">
                Get in Touch
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4-4m4 4l4-4" />
                </svg>
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              {['Oil & Gas', 'Marine', 'Water Treatment', 'Infrastructure'].map((sector) => (
                <span
                  key={sector}
                  className="rounded-full border border-slate/10 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-slate"
                >
                  {sector}
                </span>
              ))}
            </div>
          </div>

          <div className="about-item">
            <div className="grid grid-cols-2 gap-5">
              {[
                ['25+', 'Years Experience'],
                ['40+', 'Countries Served'],
                ['1200+', 'Products'],
                ['ISO 9001', 'Certified']
              ].map(([value, label]) => (
                <div key={label} className="panel-light px-6 py-8 text-center">
                  <div className="font-display text-4xl font-bold text-navy">{value}</div>
                  <div className="mt-3 text-xs uppercase tracking-[0.24em] text-slate">{label}</div>
                </div>
              ))}
            </div>
            <div className="panel-light mt-5 bg-navy px-7 py-7 text-white">
              <div className="text-xs uppercase tracking-[0.28em] text-slate-light">Global Manufacturing Partner</div>
              <p className="mt-4 text-base leading-7 text-slate-light">
                Built for critical environments where reliability, compliance, and fast response
                matter just as much as engineering precision.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
