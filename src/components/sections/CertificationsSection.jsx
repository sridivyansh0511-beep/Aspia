'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { useStaggerReveal } from '@/lib/gsapUtils';

export default function CertificationsSection() {
  const sectionRef = useRef(null);

  useStaggerReveal(sectionRef, '.cert-item', { delay: 0.5 });

  const certifications = [
    {
      name: 'CGMP & GLP',
      description:
        'Good Manufacturing Practice and Good Laboratory Practice certification supporting disciplined production and quality controls.',
      category: 'Manufacturing Excellence',
      image: '/certificates/glp-cgmp.png',
      accent: 'from-[#effaf3] via-white to-[#f5fbf2]',
    },
    {
      name: 'ISO 9001:2015',
      description:
        'International quality management certification demonstrating documented systems, process consistency, and continuous improvement.',
      category: 'Quality Management',
      image: '/certificates/iso-9001-2015.png',
      accent: 'from-[#eef6ff] via-white to-[#f8fbff]',
    }
  ];

  return (
    <section id="certifications" ref={sectionRef} className="bg-[#F3F6FA] py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mb-16 grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div className="cert-item panel-light overflow-hidden px-0 py-0">
            <div className="grid sm:grid-cols-[0.95fr_1.05fr]">
              <div className="relative min-h-[260px]">
                <Image
                  src="/facility/fume-hood-lab.png"
                  alt="Aspia analytical safety laboratory"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 28vw, 100vw"
                />
              </div>
              <div className="flex flex-col justify-center px-6 py-7">
                <div className="text-xs font-semibold uppercase tracking-[0.28em] text-steel">
                  Compliance Environment
                </div>
                <p className="mt-4 text-sm leading-7 text-slate">
                  Certified systems are strengthened by controlled laboratory spaces built for safe analysis and reliable process support.
                </p>
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-4xl text-center lg:mx-0 lg:max-w-none lg:text-left">
            <div className="section-label lg:text-left">Quality Assurance</div>
            <h2 className="section-title lg:text-left">
              Certified Quality Systems
              <span className="heading-subtitle">
                Standards that support dependable manufacturing and supply.
              </span>
            </h2>
            <p className="mt-8 max-w-3xl text-lg leading-8 text-slate lg:mx-0">
              Our commitment to quality is backed by verified certifications that reinforce
              dependable manufacturing, documented systems, and export-ready standards.
            </p>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {certifications.map((cert, index) => (
            <div key={cert.name} className="cert-item">
              <div className="panel-light h-full overflow-hidden">
                <div className={`bg-gradient-to-br ${cert.accent} px-6 py-6 md:px-8 md:py-8`}>
                  <div className="mb-5 flex items-center justify-between gap-4">
                    <div className="inline-flex rounded-full border border-slate/10 bg-white/85 px-4 py-2">
                      <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate">
                        {cert.category}
                      </span>
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-[0.28em] text-slate/70">
                      0{index + 1}
                    </span>
                  </div>

                  <div className="rounded-[28px] border border-slate/10 bg-white px-4 py-4 shadow-[0_18px_40px_rgba(15,23,42,0.08)] md:px-6 md:py-6">
                    <div className="relative mx-auto aspect-[5/4] w-full max-w-[320px]">
                      <Image
                        src={cert.image}
                        alt={cert.name}
                        fill
                        className="object-contain"
                        sizes="(min-width: 1024px) 320px, 100vw"
                      />
                    </div>
                  </div>
                </div>

                <div className="px-6 pb-7 pt-6 md:px-8">
                  <h3 className="font-display text-3xl font-bold text-navy">{cert.name}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate md:text-[15px]">
                    {cert.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-3">
          {[
            ['02', 'Verified Certifications'],
            ['GMP', 'Manufacturing Discipline'],
            ['ISO', 'Documented Quality Systems'],
          ].map(([value, label]) => (
            <div key={label} className="panel-light px-6 py-7 text-center">
              <div className="font-display text-4xl font-bold text-navy">{value}</div>
              <div className="mt-3 text-xs uppercase tracking-[0.24em] text-slate">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
