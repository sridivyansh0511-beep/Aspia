'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Link from 'next/link';

const ABOUT_TEXT =
  'ASPIA PARENTERALS PVT. LTD. (APPL), is a newly launched Company in the field of I.V. Fluids in the pharmaceutical industry having a promising track record, so far, of manufacturing a wide range of high quality Parenteral fluids in large volumes.';

const STRENGTH_TEXT =
  'ASPIA has embraced modern-age technology in its manufacturing lines. Our products are manufactured using highly sophisticated and automated FFS / BFS technology and also in glass bottles. With quality as honest as our foundation and with the most advanced technology, today we meet and exceed the current GMP (Good Manufacturing Practices) and GLP (Good Laboratory Practices) standards.';

const TECHNOLOGY_TEXT =
  'ASPIA has taken in the best and the latest technology and that has played the key role in its global success in adapting in zero-defect approach towards its products and services.';

const VISION_TEXT =
  'To emerge as a leading I.V. Fluids Company with manufacturing capabilities for a diverse product assortment. As a future plan, the Company aspires to enter the domain of formulations of small-volume injectables with true WORLD CLASS QUALITY.';

const OFFERINGS_TEXT =
  'ASPIA offers an impressive range of I.V. Fluids in FFS/BFS/Glass containers and also, irrigation solutions in 3000 ml.';

const RANGE_OF_PARENTERALS = [
  'Dextrose Injection I.P. / B.P. (5% / 10% / 25% / 50% w/v)',
  'Sodium Chloride & Dextrose Injection I.P. 0.9% w/v',
  'Sodium Chloride Injection I.P. 0.9% w/v',
  'Compound Sodium Lactate Injection I.P. (Ringer Lactate Solution for Injection I.P.)',
  'Multiple Electrolytes & Dextrose Injection (type - I / III / IV / V) I.P.',
  'Sodium Chloride & Dextrose Injection I.P. (0.45% & 5% w/v)',
  'Sodium Chloride & Dextrose Injection I.P. (0.33% & 5% w/v)',
  'Sodium Chloride & Dextrose Injection I.P. (0.45% & 2.5% w/v)',
  'Levofloxacin Infusion I.P.',
  'Sodium Lactate Injection I.P. 1.85% w/v',
  'Sodium Chloride & Dextrose Injection I.P. (0.9% & 10% w/v)',
  "Ringer's Injection (Compound Sodium Chloride Injection I.P.)",
  'Sodium Chloride Hypertonic Injection I.P. 1.6% w/v',
  'Mannitol Injection I.P. 20%',
  'Sodium Chloride Injection U.S.P. 3% w/v',
  'Dextrose Injection I.P. 25% w/v',
  'Paracetamol Infusion I.P. 1%',
  'Ciprofloxacin Injection I.P.',
  'Metronidazole Injection I.P.',
  'Ofloxacin Injection I.P.',
  'Fructose Injection I.P. (10% w/v)',
  'Glycine Irrigation Solution I.P. (1.5% w/v)',
  'Sodium Chloride Irrigation Solution I.P. 0.9% w/v',
  'Invert Sugar Injection I.P.',
  'Sodium Chloride Injection U.S.P. (0.45% w/v)',
  'Fluconazole U.S.P. 200mg',
  'Tinidazole Injection I.P.',
];

const HOME_HIGHLIGHTS = [
  {
    title: 'Strength',
    description:
      'ASPIA has embraced modern-age technology in its manufacturing lines with highly sophisticated and automated FFS / BFS systems, glass bottle capabilities, and standards aligned to GMP and GLP expectations.',
  },
  {
    title: 'Technology',
    description:
      'The company has taken in the best and latest technology, supporting a zero-defect approach towards its products and services.',
  },
  {
    title: 'Vision',
    description:
      'To emerge as a leading I.V. Fluids company with manufacturing capabilities for a diverse product assortment and future expansion into small-volume injectables.',
  },
  {
    title: 'Offerings',
    description:
      'An impressive range of I.V. Fluids in FFS/BFS/Glass containers and irrigation solutions in 3000 ml.',
  },
];

export default function AboutSection({ detailed = false }) {
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
        {detailed ? (
          <div className="space-y-8">
            <div className="about-item grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <div className="section-label">About Aspia</div>
                <h2 className="section-title max-w-3xl">
                  Water and Electrolytes
                  <span className="mt-3 block text-3xl font-light italic text-slate-light md:text-4xl">
                    Replacement Therapy
                  </span>
                </h2>
                <p className="mt-8 max-w-3xl text-lg leading-8 text-slate">{ABOUT_TEXT}</p>
                <div className="mt-10 flex flex-wrap gap-5">
                  <Link href="/products" className="btn-primary">
                    View Product Range
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4-4m4 4-4-4" />
                    </svg>
                  </Link>
                  <Link href="/contact" className="btn-outline">
                    Contact Us
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>

              <div className="about-item panel-light bg-[linear-gradient(145deg,#0B1A31,#17365F)] px-8 py-8 text-white shadow-[0_24px_60px_rgba(8,20,37,0.18)]">
                <div className="text-xs uppercase tracking-[0.28em] text-slate-light">Company Snapshot</div>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {[
                    ['Modern Technology', 'Embracing modern-age manufacturing lines'],
                    ['FFS / BFS / Glass', 'Multiple sterile packaging formats'],
                    ['cGMP / GLP', 'Standards-focused production environment'],
                    ['Large Volume Fluids', 'Wide range of high quality parenterals'],
                  ].map(([value, label]) => (
                    <div key={label} className="rounded-[24px] border border-white/10 bg-white/[0.06] px-5 py-5">
                      <div className="font-display text-2xl font-bold text-white">{value}</div>
                      <div className="mt-2 text-sm leading-6 text-slate-light">{label}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 rounded-[24px] border border-white/10 bg-white/[0.04] px-5 py-5">
                  <div className="text-xs uppercase tracking-[0.24em] text-slate-light">Promise</div>
                  <p className="mt-3 text-base leading-7 text-slate-light">
                    Care, quality, and commitment in every single drop.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              {[
                ['Strength', STRENGTH_TEXT],
                ['Technology', TECHNOLOGY_TEXT],
                ['Vision', VISION_TEXT],
                ['Offerings', OFFERINGS_TEXT],
              ].map(([title, description]) => (
                <article key={title} className="about-item panel-light px-7 py-8">
                  <h3 className="font-display text-4xl font-bold text-navy">{title}</h3>
                  <p className="mt-5 text-base leading-8 text-slate">{description}</p>
                </article>
              ))}
            </div>

            <div className="about-item panel-light overflow-hidden px-0 py-0">
              <div className="grid lg:grid-cols-[240px_1fr]">
                <div className="bg-[linear-gradient(180deg,#1D8AD8,#1B63C9)] px-8 py-10 text-white">
                  <div className="text-sm font-semibold uppercase tracking-[0.32em] text-white/75">
                    Product Focus
                  </div>
                  <h3 className="mt-4 font-display text-4xl font-bold leading-tight">
                    The Aspia Range of Parenterals
                  </h3>
                  <p className="mt-5 text-base leading-7 text-white/85">
                    A brochure-led list of the formulations highlighted in your company material.
                  </p>
                </div>

                <div className="px-8 py-10">
                  <ol className="grid gap-4 text-sm leading-7 text-slate md:grid-cols-2">
                    {RANGE_OF_PARENTERALS.map((item, index) => (
                      <li key={item} className="flex gap-4 rounded-[20px] border border-slate/10 bg-white px-4 py-4">
                        <span className="font-display text-xl font-bold text-steel">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid items-start gap-14 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="about-item">
              <div className="section-label">About Aspia</div>
              <h2 className="section-title max-w-3xl">
                Parenteral with a Promise
                <span className="mt-3 block text-3xl font-light italic text-slate-light md:text-4xl">
                  Care, Quality, Commitment
                </span>
              </h2>
              <p className="mt-8 max-w-2xl text-lg leading-8 text-slate">{ABOUT_TEXT}</p>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate">
                ASPIA presents itself as a first-line choice for water and electrolytes
                replacement therapy, supported by modern manufacturing lines and a quality-led
                approach to large volume parenteral fluids.
              </p>
              <div className="mt-10 flex flex-wrap gap-5">
                <Link href="/about" className="btn-outline">
                  Read Full Profile
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link href="/products" className="btn-primary">
                  View Offerings
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4-4m4 4-4-4" />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="about-item grid gap-5 sm:grid-cols-2">
              {HOME_HIGHLIGHTS.map((item) => (
                <article key={item.title} className="panel-light px-6 py-7">
                  <h3 className="font-display text-3xl font-bold text-navy">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
