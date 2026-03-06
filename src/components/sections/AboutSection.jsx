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
    <section ref={sectionRef} className="relative py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="about-item">
            <div className="section-label">About Aspia</div>
            <h2 className="section-title mb-8">
              Engineering Excellence
              <span className="block text-slate-light font-light italic">Since 1995</span>
            </h2>
            <p className="text-slate-light leading-relaxed mb-8 max-w-2xl">
              ASPIA has been a trusted name in industrial solutions for over 25 years. 
              We specialize in manufacturing high-quality valves, fittings, and engineered products 
              that meet the most demanding international standards.
            </p>
            <p className="text-slate-light leading-relaxed mb-12 max-w-2xl">
              Our commitment to innovation, quality, and customer satisfaction has made us 
              a preferred partner for industries ranging from oil & gas to water treatment 
              and infrastructure development.
            </p>
            <div className="flex flex-wrap gap-6">
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
          </div>

          {/* Stats */}
          <div className="about-item">
            <div className="grid grid-cols-2 gap-8">
              {[
                ['25+', 'Years Experience'],
                ['40+', 'Countries Served'],
                ['1200+', 'Products'],
                ['ISO 9001', 'Certified']
              ].map(([value, label]) => (
                <div key={label} className="text-center">
                  <div className="font-display text-3xl font-bold text-navy">{value}</div>
                  <div className="text-xs text-slate tracking-widest uppercase mt-2">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
