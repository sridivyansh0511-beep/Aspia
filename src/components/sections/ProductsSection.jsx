'use client';

import { useDeferredValue, useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import Link from 'next/link';
import ProductVisual from '@/components/products/ProductVisual';
import { PRODUCT_CATEGORIES, PRODUCTS } from '@/data/products';

const TONE_ACCENTS = {
  aqua: '#2C9ED6',
  blue: '#428CC6',
  emerald: '#34A171',
  amber: '#D59A49',
  violet: '#7D65CC',
  rose: '#D75D7D',
  teal: '#2F9E98',
  silver: '#9BA9B7',
};

function getCategoryCount(category) {
  if (category === 'All') {
    return PRODUCTS.length;
  }

  return PRODUCTS.filter((product) => product.category === category).length;
}

export default function ProductsSection({ preview = false }) {
  const sectionRef = useRef(null);
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const deferredQuery = useDeferredValue(query);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.25 });

    tl.fromTo(
      sectionRef.current.querySelectorAll('.product-item'),
      { opacity: 0, y: 42 },
      { opacity: 1, y: 0, duration: 0.9, stagger: 0.05, ease: 'power3.out' }
    );
  }, []);

  const searchTerms = deferredQuery
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean);

  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesCategory = activeCategory === 'All' || product.category === activeCategory;

    if (!matchesCategory) {
      return false;
    }

    if (searchTerms.length === 0) {
      return true;
    }

    const haystack = [
      product.name,
      product.description,
      product.category,
      product.strength,
      ...product.tags,
    ]
      .join(' ')
      .toLowerCase();

    return searchTerms.every((term) => haystack.includes(term));
  });

  const previewProducts = PRODUCTS.filter((product) => product.featured).slice(0, 3);
  const productsToRender = preview ? previewProducts : filteredProducts;

  return (
    <section
      ref={sectionRef}
      className={preview ? 'bg-[linear-gradient(180deg,#FCFDFE,#F2F6FA)] py-28' : 'bg-[linear-gradient(180deg,#F6F9FC,#ECF2F7)] py-28'}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className={`product-item ${preview ? 'mx-auto max-w-5xl text-center' : 'relative overflow-hidden rounded-[40px] bg-[#081425] px-8 py-10 text-white shadow-[0_32px_90px_rgba(4,12,24,0.22)] md:px-12 md:py-14'}`}>
          {!preview && (
            <>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(26,158,143,0.18),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(74,111,165,0.22),transparent_38%)]" />
              <div className="absolute right-[-80px] top-[-80px] h-64 w-64 rounded-full bg-[#1A9E8F]/10 blur-3xl" />
            </>
          )}

          <div className={preview ? '' : 'relative grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end'}>
            <div className={preview ? '' : 'max-w-4xl'}>
              <div className={`section-label ${preview ? 'text-center' : 'text-slate-light'}`}>
                Pharmaceutical Product Range
              </div>
              <h2 className={`section-title ${preview ? 'text-center' : 'text-white'}`}>
                Sterile Infusions, Irrigation Solutions
                <span className="mt-3 block text-3xl font-light italic text-slate-light md:text-4xl">
                  And Clinical Support Formulations
                </span>
              </h2>
              <p className={`mt-8 max-w-4xl text-lg leading-8 ${preview ? 'mx-auto text-slate' : 'text-slate-light'}`}>
                Explore ASPIA&apos;s curated range of infusion therapies, electrolyte solutions,
                irrigation products, and specialist formulations designed for dependable clinical workflows.
              </p>
            </div>

            {!preview && (
              <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                {[
                  ['27', 'Products in the catalogue'],
                  ['5', 'Searchable therapy families'],
                  ['IP / BP / USP', 'Standards-aligned range'],
                ].map(([value, label]) => (
                  <div key={label} className="rounded-[26px] border border-white/10 bg-white/[0.05] px-5 py-5 backdrop-blur-sm">
                    <div className="font-display text-3xl font-bold text-white">{value}</div>
                    <div className="mt-2 text-[11px] uppercase tracking-[0.24em] text-slate-light/80">
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {preview && (
          <div className="product-item mt-12 grid gap-5 md:grid-cols-3">
            {[
              ['27', 'Showcase-ready products'],
              ['5', 'Searchable therapy categories'],
              ['IP / BP / USP', 'Pharmacopoeia-led range'],
            ].map(([value, label]) => (
              <div key={label} className="panel-light px-6 py-7 text-center">
                <div className="font-display text-4xl font-bold text-navy">{value}</div>
                <div className="mt-3 text-xs uppercase tracking-[0.24em] text-slate">{label}</div>
              </div>
            ))}
          </div>
        )}

        {!preview && (
          <div className="product-item relative z-10 -mt-8 panel-light overflow-hidden bg-[linear-gradient(160deg,#FFFFFF,#EEF4FA)] p-7 shadow-[0_28px_70px_rgba(15,23,42,0.08)] sm:p-8">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-xl">
                <div className="text-xs font-semibold uppercase tracking-[0.3em] text-steel">
                  Smart Product Search
                </div>
                <h3 className="mt-4 font-display text-4xl font-bold leading-[0.95] tracking-[-0.03em] text-navy">
                  Find the right formulation faster
                </h3>
                <p className="mt-4 text-base leading-7 text-slate">
                  Search by molecule, strength, therapy type, irrigation use, saline blend, or pharmacopoeia reference.
                </p>
              </div>

              <div className="w-full lg:max-w-xl">
                <div className="relative">
                  <svg
                    className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-slate"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="m21 21-4.35-4.35M17 10.5A6.5 6.5 0 1 1 4 10.5a6.5 6.5 0 0 1 13 0Z" />
                  </svg>
                  <input
                    type="text"
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder="Search dextrose, levofloxacin, irrigation, 0.9%, U.S.P..."
                    className="w-full rounded-full border border-slate/10 bg-white px-14 py-4 text-sm text-navy shadow-[0_14px_30px_rgba(15,23,42,0.04)] outline-none transition-all duration-300 placeholder:text-slate-light focus:border-steel-light focus:shadow-[0_18px_36px_rgba(44,74,110,0.12)]"
                  />
                </div>

                {(query || activeCategory !== 'All') && (
                  <div className="mt-4 flex justify-end">
                    <button
                      type="button"
                      onClick={() => {
                        setQuery('');
                        setActiveCategory('All');
                      }}
                      className="text-xs font-semibold uppercase tracking-[0.24em] text-steel transition-colors hover:text-navy"
                    >
                      Clear Search
                    </button>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {PRODUCT_CATEGORIES.map((category) => {
                const isActive = activeCategory === category;

                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveCategory(category)}
                    className={`inline-flex items-center gap-3 rounded-full border px-4 py-3 text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-300 ${
                      isActive
                        ? 'border-steel-light bg-steel text-white shadow-[0_14px_30px_rgba(44,74,110,0.16)]'
                        : 'border-slate/10 bg-white text-slate hover:border-steel-light/40 hover:text-navy'
                    }`}
                  >
                    <span>{category}</span>
                    <span className={`rounded-full px-2 py-1 text-[10px] ${isActive ? 'bg-white/15 text-white' : 'bg-slate/[0.08] text-slate'}`}>
                      {getCategoryCount(category)}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="mt-8 flex flex-col gap-3 border-t border-slate/[0.08] pt-6 text-xs font-semibold uppercase tracking-[0.24em] text-slate sm:flex-row sm:items-center sm:justify-between">
              <span>{filteredProducts.length} of {PRODUCTS.length} products shown</span>
              <span>{activeCategory === 'All' ? 'Entire product catalogue' : activeCategory}</span>
            </div>
          </div>
        )}

        {!preview && (
          <div className="product-item mt-14 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="section-label">Full Catalogue</div>
              <h3 className="font-display text-5xl font-bold leading-[0.95] tracking-[-0.03em] text-navy">
                Browse All Products
              </h3>
            </div>
            <p className="max-w-2xl text-base leading-7 text-slate">
              Every formulation is presented in a premium showcase layout with cleaner detail hierarchy and faster scanning.
            </p>
          </div>
        )}

        <div className={`mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3 ${preview ? '' : '2xl:grid-cols-4'}`}>
          {productsToRender.map((product) => (
            <article key={product.id} className="product-item group">
              <div className="flex h-full flex-col overflow-hidden rounded-[32px] border border-slate/10 bg-white shadow-[0_20px_50px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_28px_66px_rgba(15,23,42,0.12)]">
                <div className="relative p-5">
                  <div
                    className="absolute inset-x-5 top-5 h-1 rounded-full opacity-80"
                    style={{ backgroundColor: TONE_ACCENTS[product.tone] ?? '#2C9ED6' }}
                  />
                  <ProductVisual product={product} />
                </div>

                <div className="flex flex-1 flex-col border-t border-slate/[0.08] px-6 pb-6 pt-5">
                  <div className="flex items-start justify-between gap-5">
                    <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-steel">
                      {product.category}
                    </div>
                    <div className="rounded-full border border-slate/10 bg-[#F7FAFC] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate">
                      {product.id}
                    </div>
                  </div>

                  <h3 className="mt-4 font-display text-[1.65rem] font-bold leading-[1.05] tracking-[-0.02em] text-navy">
                    {product.name}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate">
                    {product.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {[product.strength, ...product.tags].slice(0, 3).map((chip, index) => (
                      <span
                        key={`${chip}-${index}`}
                        className="rounded-full border border-slate/10 bg-[#F5F8FB] px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex items-center justify-between gap-4 pt-8">
                    <div className="flex items-center gap-3">
                      <span
                        className="h-2.5 w-2.5 rounded-full"
                        style={{ backgroundColor: TONE_ACCENTS[product.tone] ?? '#2C9ED6' }}
                      />
                      <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-light">
                        Sterile showcase
                      </div>
                    </div>

                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-steel transition-colors hover:text-navy"
                    >
                      Request Details
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0-4-4m4 4-4-4" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {!preview && filteredProducts.length === 0 && (
          <div className="product-item panel-light mt-10 px-8 py-12 text-center">
            <div className="font-display text-3xl font-bold text-navy">No products matched your search</div>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate">
              Try another molecule name, concentration, or category filter to explore the full catalogue again.
            </p>
          </div>
        )}

        <div className="product-item mt-16 text-center">
          {preview ? (
            <Link href="/products" className="btn-primary">
              View Full Product Catalogue
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0-4-4m4 4-4-4" />
              </svg>
            </Link>
          ) : (
            <Link href="/contact" className="btn-primary">
              Request Quote
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0-4-4m4 4-4-4" />
              </svg>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
