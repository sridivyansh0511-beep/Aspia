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
    <section ref={sectionRef} className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <div className="section-label text-center">Quality Assurance</div>
          <h2 className="section-title mb-8 text-center">
            Certifications
            <span className="block text-slate-light font-light italic">Industry Recognition</span>
          </h2>
          <p className="text-slate-light max-w-3xl mx-auto">
            Our commitment to quality is demonstrated through internationally recognized 
            certifications and compliance with industry standards.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {certifications.map((cert, index) => (
            <div key={index} className="cert-item">
              <div className="bg-white p-6 rounded-lg shadow-sm h-full">
                <div className="w-16 h-16 bg-steel/10 rounded-lg flex items-center justify-center mb-4">
                  <div className="w-8 h-8 bg-steel rounded" />
                </div>
                <h3 className="font-display text-xl font-bold text-navy mb-2">{cert.name}</h3>
                <p className="text-slate-light text-sm mb-3">{cert.description}</p>
                <div className="inline-block px-3 py-1 bg-slate/10 rounded-full">
                  <span className="text-xs font-semibold text-slate">{cert.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-6 text-slate-light">
            <div className="text-center">
              <div className="font-display text-3xl font-bold text-navy">15+</div>
              <div className="text-sm">Certifications</div>
            </div>
            <div className="text-center">
              <div className="font-display text-3xl font-bold text-navy">100%</div>
              <div className="text-sm">Compliance Rate</div>
            </div>
            <div className="text-center">
              <div className="font-display text-3xl font-bold text-navy">25+</div>
              <div className="text-sm">Years Certified</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
