'use client';

import { useDeferredValue, useLayoutEffect, useRef, useState } from 'react';
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

const TONE_SURFACES = {
  aqua: 'rgba(44, 158, 214, 0.12)',
  blue: 'rgba(66, 140, 198, 0.12)',
  emerald: 'rgba(52, 161, 113, 0.12)',
  amber: 'rgba(213, 154, 73, 0.13)',
  violet: 'rgba(125, 101, 204, 0.14)',
  rose: 'rgba(215, 93, 125, 0.12)',
  teal: 'rgba(47, 158, 152, 0.12)',
  silver: 'rgba(155, 169, 183, 0.14)',
};

const CATALOG_CATEGORIES = PRODUCT_CATEGORIES.filter((category) => category !== 'All');

function matchesSearch(product, searchTerms) {
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
}

function ProductCard({ product, compact = false }) {
  const accent = TONE_ACCENTS[product.tone] ?? TONE_ACCENTS.blue;
  const surface = TONE_SURFACES[product.tone] ?? TONE_SURFACES.blue;

  return (
    <article className="flex h-full flex-col rounded-[30px] border border-slate/10 bg-white p-5 shadow-[0_20px_50px_rgba(10,22,40,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_26px_60px_rgba(10,22,40,0.1)]">
      <div
        className="rounded-[28px] p-1"
        style={{ background: `linear-gradient(160deg, ${surface}, rgba(255,255,255,0.96))` }}
      >
        <ProductVisual product={product} />
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-2">
        <span
          className="rounded-full px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-white"
          style={{ backgroundColor: accent }}
        >
          {product.category}
        </span>

        <span className="rounded-full border border-slate/10 bg-[#F5F8FB] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate">
          {product.strength}
        </span>
      </div>

      <h3 className={`mt-4 font-display font-bold leading-[1] tracking-[-0.03em] text-navy ${compact ? 'text-[1.75rem]' : 'text-[2rem]'}`}>
        {product.name}
      </h3>

      <p className="mt-4 text-sm leading-7 text-slate">
        {product.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {product.tags.slice(0, compact ? 2 : 3).map((tag, index) => (
          <span
            key={`${product.id}-${tag}`}
            className="rounded-full border border-slate/10 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate"
            style={{ backgroundColor: index === 0 ? surface : '#F9FBFD' }}
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}

function PreviewCatalogue({ featuredProducts }) {
  return (
    <>
      <div className="product-item mx-auto max-w-4xl text-center">
        <div className="section-label">Pharmaceutical Product Range</div>
        <h2 className="section-title">
          Featured Products At A Glance
          <span className="mt-3 block text-3xl font-light italic text-slate md:text-4xl">
            Clean preview cards instead of click-to-switch slides
          </span>
        </h2>
        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate">
          A quick look at the range. The full products page now opens as one long scrolling catalogue with all products already visible on the page.
        </p>
      </div>

      <div className="product-item mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product} compact />
        ))}
      </div>

      <div className="product-item mt-14 text-center">
        <Link href="/products" className="btn-primary">
          View Full Product Catalogue
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 12h15" />
          </svg>
        </Link>
      </div>
    </>
  );
}

function FullCatalogue({ groupedProducts, query, setQuery, filteredProducts }) {
  return (
    <>
      <div className="product-item relative overflow-hidden rounded-[40px] bg-[#081425] px-8 py-10 text-white shadow-[0_32px_90px_rgba(4,12,24,0.22)] md:px-12 md:py-14">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(26,158,143,0.18),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(74,111,165,0.22),transparent_38%)]" />
        <div className="absolute right-[-80px] top-[-80px] h-64 w-64 rounded-full bg-[#1A9E8F]/10 blur-3xl" />

        <div className="relative grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div className="max-w-4xl">
            <div className="section-label text-slate-light">Full Product Catalogue</div>
            <h2 className="section-title text-white">
              Every Product On The Page
              <span className="mt-3 block text-3xl font-light italic text-slate-light md:text-4xl">
                Scroll the catalogue instead of opening one product at a time
              </span>
            </h2>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-light">
              All products are listed below in category sections on one continuous page. No spotlight deck, no product clicks required just to reveal the catalogue.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {[
              [String(PRODUCTS.length), 'Products listed'],
              [String(CATALOG_CATEGORIES.length), 'Categories grouped'],
              ['Scroll', 'Browse format'],
            ].map(([value, label]) => (
              <div key={label} className="rounded-[26px] border border-white/10 bg-white/[0.05] px-5 py-5 backdrop-blur-sm">
                <div className="font-display text-3xl font-bold text-white">{value}</div>
                <div className="mt-2 text-[11px] uppercase tracking-[0.24em] text-slate-light/80">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="product-item mt-10 rounded-[34px] border border-slate/10 bg-white p-7 shadow-[0_24px_70px_rgba(10,22,40,0.06)] sm:p-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-steel">
              Optional Search
            </div>
            <h3 className="mt-4 font-display text-4xl font-bold leading-[0.95] tracking-[-0.03em] text-navy">
              Everything is already visible
            </h3>
            <p className="mt-4 text-base leading-7 text-slate">
              Use search only if you want to narrow the long page. Leave it empty to keep the full catalogue visible while you scroll.
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
                placeholder="Search product name, strength, category, or tag..."
                className="w-full rounded-full border border-slate/10 bg-[#F8FBFD] px-14 py-4 text-sm text-navy shadow-[0_14px_30px_rgba(15,23,42,0.04)] outline-none transition-all duration-300 placeholder:text-slate-light focus:border-steel-light focus:bg-white focus:shadow-[0_18px_36px_rgba(44,74,110,0.12)]"
              />
            </div>

            {query && (
              <div className="mt-4 flex justify-end">
                <button
                  type="button"
                  onClick={() => setQuery('')}
                  className="text-xs font-semibold uppercase tracking-[0.24em] text-steel transition-colors hover:text-navy"
                >
                  Clear Search
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-slate/[0.08] pt-6 text-xs font-semibold uppercase tracking-[0.24em] text-slate sm:flex-row sm:items-center sm:justify-between">
          <span>{filteredProducts.length} of {PRODUCTS.length} products visible</span>
          <span>{query ? 'Filtered catalogue view' : 'Full scroll catalogue view'}</span>
        </div>
      </div>

      {filteredProducts.length === 0 ? (
        <div className="product-item panel-light mt-10 px-8 py-12 text-center">
          <div className="font-display text-3xl font-bold text-navy">No products matched your search</div>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate">
            Try another molecule name, concentration, or category term to bring products back into the scroll view.
          </p>
        </div>
      ) : (
        <div className="mt-14 space-y-12">
          {groupedProducts.map(({ category, products }) => (
            <section
              key={category}
              className="product-item rounded-[36px] border border-slate/10 bg-white/75 p-6 shadow-[0_22px_60px_rgba(10,22,40,0.05)] backdrop-blur-sm sm:p-8"
            >
              <div className="flex flex-col gap-4 border-b border-slate/[0.08] pb-6 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <div className="section-label">{category}</div>
                  <h3 className="font-display text-4xl font-bold leading-[0.96] tracking-[-0.03em] text-navy">
                    {category}
                  </h3>
                </div>

                <div className="rounded-full border border-slate/10 bg-[#F4F8FB] px-5 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-slate">
                  {products.length} product{products.length === 1 ? '' : 's'}
                </div>
              </div>

              <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </section>
          ))}
        </div>
      )}

      <div className="product-item mt-16 text-center">
        <Link href="/contact" className="btn-primary">
          Request Quote
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 12h15" />
          </svg>
        </Link>
      </div>
    </>
  );
}

export default function ProductsSection({ preview = false }) {
  const sectionRef = useRef(null);
  const [query, setQuery] = useState('');
  const deferredQuery = useDeferredValue(query);
  const featuredProducts = PRODUCTS.filter((product) => product.featured).slice(0, 4);

  const searchTerms = deferredQuery
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean);

  const filteredProducts = PRODUCTS.filter((product) => matchesSearch(product, searchTerms));
  const groupedProducts = CATALOG_CATEGORIES
    .map((category) => ({
      category,
      products: filteredProducts.filter((product) => product.category === category),
    }))
    .filter(({ products }) => products.length > 0);

  useLayoutEffect(() => {
    if (!sectionRef.current) {
      return undefined;
    }

    const ctx = gsap.context(() => {
      const items = sectionRef.current.querySelectorAll('.product-item');

      gsap.fromTo(
        items,
        { opacity: 0, y: 36 },
        { opacity: 1, y: 0, duration: 0.85, stagger: 0.07, ease: 'power3.out', delay: 0.12 }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [preview, filteredProducts.length]);

  return (
    <section
      ref={sectionRef}
      className={preview ? 'bg-[linear-gradient(180deg,#FCFDFE,#F2F6FA)] py-28' : 'bg-[linear-gradient(180deg,#F6F9FC,#ECF2F7_32%,#F8FBFD)] py-28'}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {preview ? (
          <PreviewCatalogue featuredProducts={featuredProducts} />
        ) : (
          <FullCatalogue
            groupedProducts={groupedProducts}
            query={query}
            setQuery={setQuery}
            filteredProducts={filteredProducts}
          />
        )}
      </div>
    </section>
  );
}
