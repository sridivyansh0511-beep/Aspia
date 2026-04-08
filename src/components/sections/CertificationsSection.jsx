'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';

export default function CertificationsSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 });
    
    tl.fromTo(
      sectionRef.current.querySelectorAll('.cert-item'),
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: 'power3.out' }
    );
  }, []);

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
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <div className="section-label text-center">Quality Assurance</div>
          <h2 className="section-title text-center">
            Certifications
            <span className="mt-3 block text-3xl font-light italic text-slate-light md:text-4xl">
              Industry Recognition
            </span>
          </h2>
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate">
            Our commitment to quality is backed by verified certifications that reinforce
            dependable manufacturing, documented systems, and export-ready standards.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {certifications.map((cert, index) => (
            <div key={index} className="cert-item">
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
