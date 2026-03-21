'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function ContactForm() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 });
    
    tl.fromTo(
      sectionRef.current.querySelectorAll('.contact-item'),
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: 'power3.out' }
    );
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#091625] py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mx-auto max-w-4xl text-center">
          <div className="section-label text-center text-slate-light">Get In Touch</div>
          <h2 className="font-display text-[clamp(3.5rem,7vw,5.8rem)] leading-[0.92] tracking-[-0.04em] text-white">
            Contact Us
            <span className="mt-3 block text-3xl font-light italic text-slate-light md:text-4xl">
              Let&apos;s Connect
            </span>
          </h2>
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-light">
            Ready to discuss your industrial needs? Our team is here to provide expert solutions
            and support for your requirements.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="contact-item">
            <div className="panel-dark p-8 sm:p-10">
              <div className="mb-8">
                <div className="text-xs uppercase tracking-[0.28em] text-slate-light">Project Inquiry</div>
                <p className="mt-4 max-w-xl text-base leading-7 text-slate-light">
                  Share your product needs, technical specifications, or sourcing timeline and
                  our team will respond with the right export-ready solution.
                </p>
              </div>
              <form className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-light">Name *</label>
                    <input
                      type="text"
                      className="input-dark"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-light">Company</label>
                    <input
                      type="text"
                      className="input-dark"
                      placeholder="Company Name"
                    />
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-light">Email *</label>
                    <input
                      type="email"
                      className="input-dark"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-light">Phone</label>
                    <input
                      type="tel"
                      className="input-dark"
                      placeholder="+1 234 567 8900"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-light">Subject *</label>
                  <select className="input-dark">
                    <option value="">Select a subject</option>
                    <option value="products">Product Inquiry</option>
                    <option value="technical">Technical Support</option>
                    <option value="sales">Sales Information</option>
                    <option value="partnership">Partnership Opportunities</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-light">Message *</label>
                  <textarea
                    rows={5}
                    className="input-dark resize-none"
                    placeholder="Tell us about your requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-full bg-steel px-8 py-4 text-sm font-semibold uppercase tracking-[0.24em] text-white transition-all duration-300 hover:bg-steel-light"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          <div className="contact-item space-y-8">
            <div className="panel-dark p-8 sm:p-10">
              <h3 className="font-display text-3xl font-bold text-white">Contact Information</h3>

              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-steel/20">
                    <svg className="w-6 h-6 text-steel" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Address</h4>
                    <p className="text-slate-light">
                      123 Industrial Park Drive<br />
                      Manufacturing District, MD 12345<br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-steel/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-steel" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Phone</h4>
                    <p className="text-slate-light">
                      +1 (555) 123-4567<br />
                      +1 (555) 987-6543
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-steel/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-steel" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Email</h4>
                    <p className="text-slate-light">
                      info@aspia.com<br />
                      sales@aspia.com<br />
                      support@aspia.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="panel-dark p-8">
              <h4 className="font-semibold text-white">Business Hours</h4>
              <div className="mt-5 space-y-3 text-slate-light">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>9:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
