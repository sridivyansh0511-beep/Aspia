'use client';

import { useEffect, useRef } from 'react';
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
      name: 'ISO 9001:2015',
      description: 'Quality Management Systems',
      category: 'Quality'
    },
    {
      name: 'API 6D',
      description: 'Pipeline Valves Specification',
      category: 'Industry Standard'
    },
    {
      name: 'CE Marking',
      description: 'European Conformity Certification',
      category: 'Compliance'
    },
    {
      name: 'ASME B16.34',
      description: 'Valves - Flanged, Threaded, and Welding End',
      category: 'Technical Standard'
    }
  ];

  return (
    <section ref={sectionRef} className="bg-[#F3F6FA] py-28">
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
            Our commitment to quality is demonstrated through internationally recognized
            certifications and compliance with industry standards.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {certifications.map((cert, index) => (
            <div key={index} className="cert-item">
              <div className="panel-light h-full px-6 py-7">
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-steel/10">
                    <div className="h-8 w-8 rounded-lg bg-steel" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-[0.28em] text-slate">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="font-display text-2xl font-bold text-navy">{cert.name}</h3>
                <p className="mb-4 mt-3 text-sm leading-7 text-slate">{cert.description}</p>
                <div className="inline-flex rounded-full border border-slate/10 bg-slate/5 px-4 py-2">
                  <span className="text-xs font-semibold uppercase tracking-[0.22em] text-slate">
                    {cert.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-3">
          {[
            ['15+', 'Certifications'],
            ['100%', 'Compliance Rate'],
            ['25+', 'Years Certified'],
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
