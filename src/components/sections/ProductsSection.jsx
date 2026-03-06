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
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <div className="section-label text-center">Our Products</div>
          <h2 className="section-title mb-8 text-center">
            Engineering Excellence
            <span className="block text-slate-light font-light italic">In Every Component</span>
          </h2>
          <p className="text-slate-light max-w-3xl mx-auto">
            From standard components to custom solutions, we deliver precision-engineered products 
            that meet the highest international standards.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="product-item group">
              <div className="bg-cream p-8 rounded-lg h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
                <h3 className="font-display text-2xl font-bold text-navy mb-4">{product.title}</h3>
                <p className="text-slate-light mb-6">{product.description}</p>
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-slate text-sm">
                      <div className="w-1 h-1 bg-steel rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href="/products" className="inline-flex items-center text-steel font-semibold text-sm hover:text-navy transition-colors">
                  Learn more
                  <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4-4m4 4l-4-4" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {!preview && (
          <div className="text-center mt-16">
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
