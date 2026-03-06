'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function ExportMap() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 });
    
    tl.fromTo(
      sectionRef.current.querySelectorAll('.map-item'),
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: 'power3.out' }
    );
  }, []);

  const regions = [
    { name: 'North America', percentage: '35%', countries: 'USA, Canada, Mexico' },
    { name: 'Europe', percentage: '28%', countries: 'UK, Germany, France, Italy' },
    { name: 'Middle East', percentage: '20%', countries: 'UAE, Saudi Arabia, Qatar' },
    { name: 'Asia Pacific', percentage: '17%', countries: 'India, Singapore, Malaysia' }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-navy">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <div className="section-label text-center text-slate-light">Global Reach</div>
          <h2 className="section-title mb-8 text-center text-white">
            Export Map
            <span className="block text-slate-light font-light italic">Worldwide Distribution</span>
          </h2>
          <p className="text-slate-light max-w-3xl mx-auto">
            Our products serve industries across 40+ countries, with a strong presence in 
            key industrial markets around the globe.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {regions.map((region, index) => (
            <div key={index} className="map-item text-center">
              <div className="bg-steel/20 p-6 rounded-lg">
                <div className="font-display text-4xl font-bold text-white mb-2">{region.percentage}</div>
                <div className="text-xl font-semibold text-slate-light mb-3">{region.name}</div>
                <div className="text-sm text-slate">{region.countries}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-8 text-slate-light">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-steel rounded-full" />
              <span className="text-sm">40+ Countries</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-steel rounded-full" />
              <span className="text-sm">5 Continents</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-steel rounded-full" />
              <span className="text-sm">25+ Years</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
