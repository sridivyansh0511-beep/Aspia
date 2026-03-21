'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Link from 'next/link';

export default function ProductsSection({ preview = false }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 });
    
    tl.fromTo(
      sectionRef.current.querySelectorAll('.product-item'),
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: 'power3.out' }
    );
  }, []);

  const products = [
    {
      title: 'Industrial Valves',
      description: 'High-performance valves for oil & gas, chemical, and water treatment industries.',
      features: ['Ball Valves', 'Gate Valves', 'Globe Valves', 'Check Valves']
    },
    {
      title: 'Pipe Fittings',
      description: 'Precision-engineered fittings for critical piping systems across all industries.',
      features: ['Elbows', 'Tees', 'Reducers', 'Flanges']
    },
    {
      title: 'Custom Solutions',
      description: 'Tailored engineering solutions to meet your specific industrial requirements.',
      features: ['Custom Design', 'Prototyping', 'Testing', 'Certification']
    }
  ];

  return (
    <section ref={sectionRef} className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <div className="section-label text-center">Our Products</div>
          <h2 className="section-title text-center">
            Engineering Excellence
            <span className="mt-3 block text-3xl font-light italic text-slate-light md:text-4xl">
              In Every Component
            </span>
          </h2>
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate">
            From standard components to custom solutions, we deliver precision-engineered products
            that meet the highest international standards.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <div key={index} className="product-item group">
              <div className="h-full rounded-[28px] border border-slate/10 bg-[linear-gradient(180deg,#F8FAFC,#EEF3F8)] p-8 shadow-[0_20px_50px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_26px_60px_rgba(15,23,42,0.1)]">
                <div className="mb-8 flex items-center justify-between">
                  <div className="h-px w-16 bg-steel-light/60" />
                  <span className="text-xs font-semibold uppercase tracking-[0.28em] text-slate">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="font-display text-3xl font-bold text-navy">{product.title}</h3>
                <p className="mt-4 text-base leading-7 text-slate">{product.description}</p>
                <ul className="mb-8 mt-8 flex flex-wrap gap-3">
                  {product.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="rounded-full border border-slate/10 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate"
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href="/products" className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-steel transition-colors hover:text-navy">
                  Learn more
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4-4m4 4l-4-4" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {!preview && (
          <div className="mt-16 text-center">
            <Link href="/contact" className="btn-primary">
              Request Quote
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4-4m4 4l-4-4" />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
