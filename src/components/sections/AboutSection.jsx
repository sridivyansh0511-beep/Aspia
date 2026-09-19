'use client';

import { useRef } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';
import Link from 'next/link';
import { useStaggerReveal } from '@/lib/gsapUtils';

const ABOUT_TEXT =
  'ASPIA PHARMACEUTICALS PVT. LTD. (APPL), is a newly launched Company in the field of I.V. Fluids in the pharmaceutical industry having a promising track record, so far, of manufacturing a wide range of high quality Parenteral fluids in large volumes.';

const STRENGTH_TEXT =
  'ASPIA has embraced modern-age technology in its manufacturing lines. Our products are manufactured using highly sophisticated and automated FFS / BFS technology and also in glass bottles. With quality as honest as our foundation and with the most advanced technology, today we meet and exceed the current GMP (Good Manufacturing Practices) and GLP (Good Laboratory Practices) standards.';

const TECHNOLOGY_TEXT =
  'ASPIA has taken in the best and the latest technology and that has played the key role in its global success in adapting in zero-defect approach towards its products and services.';

const VISION_TEXT =
  'To emerge as a leading I.V. Fluids Company with manufacturing capabilities for a diverse product assortment. As a future plan, the Company aspires to enter the domain of formulations of small-volume injectables with true WORLD CLASS QUALITY.';

const OFFERINGS_TEXT =
  'ASPIA offers an impressive range of I.V. Fluids in FFS/BFS/Glass containers and also, irrigation solutions in 3000 ml.';

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

const FACILITY_IMAGES = [
  {
    src: '/facility/mixing-suite.jpeg',
    title: 'Sterile Processing',
    description: 'Advanced stainless-steel processing infrastructure built for consistency and control.',
  },
  {
    src: '/facility/quality-lab.png',
    title: 'Quality Laboratory',
    description: 'A clean, organized testing environment that supports dependable validation.',
  },
  {
    src: '/facility/clean-corridor.png',
    title: 'Controlled Access',
    description: 'Disciplined clean-room movement that reflects process integrity across production.',
  },
  {
    src: '/facility/fume-hood-lab.png',
    title: 'Analytical Safety',
    description: 'Dedicated lab systems designed for precise handling and safe chemical analysis.',
  },
];

export default function AboutSection({ detailed = false }) {
  const sectionRef = useRef(null);

  useStaggerReveal(sectionRef, '.about-item', { delay: 0.5 });

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
                <h1 className="section-title max-w-3xl">
                  Water and Electrolytes
                  <span className="heading-subtitle">
                    Replacement therapy backed by disciplined sterile manufacturing.
                  </span>
                </h1>
                <p className="mt-8 max-w-3xl text-lg leading-8 text-slate">{ABOUT_TEXT}</p>
                <div className="mt-10 flex flex-wrap gap-5">
                  <Link href="/products" className="btn-primary">
                    View Product Range
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 12h15" />
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
              <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
                <div className="relative min-h-[360px]">
                  <Image
                    src={FACILITY_IMAGES[0].src}
                    alt={FACILITY_IMAGES[0].title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,18,32,0.06),rgba(7,18,32,0.76))]" />
                  <div className="absolute inset-x-0 bottom-0 p-8 text-white">
                    <div className="text-xs font-semibold uppercase tracking-[0.32em] text-white/70">
                      Inside Aspia
                    </div>
                    <h3 className="mt-4 font-display text-4xl font-bold leading-tight">
                      Modern manufacturing spaces built for trust
                    </h3>
                    <p className="mt-4 max-w-xl text-base leading-7 text-white/82">
                      From sterile processing to laboratory validation, these spaces reflect the
                      standards behind Aspia&apos;s quality promise.
                    </p>
                  </div>
                </div>

                <div className="grid gap-px bg-slate/10 md:grid-cols-2 lg:grid-cols-1">
                  {FACILITY_IMAGES.slice(1).map((image) => (
                    <article key={image.src} className="grid gap-0 bg-white sm:grid-cols-[180px_1fr]">
                      <div className="relative min-h-[180px]">
                        <Image
                          src={image.src}
                          alt={image.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                          className="object-cover"
                        />
                      </div>
                      <div className="flex flex-col justify-center px-6 py-6">
                        <div className="text-xs font-semibold uppercase tracking-[0.28em] text-steel">
                          {image.title}
                        </div>
                        <p className="mt-3 text-sm leading-7 text-slate">{image.description}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-8">
            <div className="grid items-start gap-14 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="about-item">
              <div className="section-label">About Aspia</div>
              <h2 className="section-title max-w-3xl">
                Parenteral with a Promise
                <span className="heading-subtitle">
                  Care, quality, and commitment behind every production run.
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 12h15" />
                  </svg>
                </Link>
              </div>
            </div>

              <div className="space-y-5">
                <div className="about-item grid gap-5 sm:grid-cols-2">
                {HOME_HIGHLIGHTS.map((item) => (
                  <article key={item.title} className="panel-light px-6 py-7">
                    <h3 className="font-display text-3xl font-bold text-navy">{item.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-slate">{item.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>

            <div className="about-item panel-light overflow-hidden px-0 py-0">
              <div className="grid gap-px bg-slate/10 xl:grid-cols-[0.72fr_1.28fr]">
                <div className="grid bg-white lg:grid-rows-[auto_1fr]">
                  <div className="px-6 py-7 md:px-7">
                    <div className="text-xs font-semibold uppercase tracking-[0.28em] text-steel">
                      Facility Highlight
                    </div>
                    <h3 className="mt-4 font-display text-3xl font-bold leading-tight text-navy">
                      Infrastructure that reflects the Aspia standard
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-slate">
                      Our production spaces are built to support sterile handling, process discipline,
                      and consistent quality from start to finish.
                    </p>
                    <div className="mt-6 grid gap-4">
                      {[
                        'Modern sterile processing setup',
                        'Organized quality-driven workflow',
                        'Clean manufacturing movement and control',
                      ].map((item) => (
                        <div key={item} className="rounded-[20px] border border-slate/10 bg-[#F7FAFC] px-4 py-4 text-sm leading-6 text-slate">
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="relative min-h-[320px] border-t border-slate/10">
                    <Image
                      src="/facility/clean-corridor.png"
                      alt="Aspia controlled clean corridor"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,18,32,0.05),rgba(7,18,32,0.76))]" />
                    <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                      <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/72">
                        Controlled Environment
                      </div>
                      <p className="mt-3 max-w-sm text-sm leading-7 text-white/85">
                        A clean-room workflow designed to support precision, safety, and dependable production.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid gap-px bg-slate/10 lg:grid-cols-[1.2fr_0.8fr]">
                  <div className="relative min-h-[420px]">
                    <Image
                      src={FACILITY_IMAGES[0].src}
                      alt={FACILITY_IMAGES[0].title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,26,49,0.08),rgba(11,26,49,0.78))]" />
                    <div className="absolute inset-x-0 bottom-0 p-6 text-white md:p-8">
                      <div className="text-xs font-semibold uppercase tracking-[0.3em] text-white/72">
                        Facility Showcase
                      </div>
                      <h3 className="mt-3 font-display text-3xl font-bold md:text-4xl">
                        Clean, controlled, production-ready
                      </h3>
                      <p className="mt-4 max-w-2xl text-sm leading-7 text-white/84 md:text-base">
                        From sterile processing to laboratory validation, Aspia&apos;s facility environment
                        is designed to uphold trust, consistency, and export-ready quality.
                      </p>
                    </div>
                  </div>

                  <div className="grid gap-px bg-slate/10">
                    {FACILITY_IMAGES.slice(1, 3).map((image) => (
                      <article key={image.src} className="grid bg-white">
                        <div className="relative min-h-[210px]">
                          <Image
                            src={image.src}
                            alt={image.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                          />
                        </div>
                        <div className="px-5 py-5">
                          <div className="text-xs font-semibold uppercase tracking-[0.26em] text-steel">
                            {image.title}
                          </div>
                          <p className="mt-2 text-sm leading-6 text-slate">{image.description}</p>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
