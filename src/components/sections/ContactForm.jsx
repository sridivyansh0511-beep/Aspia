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
    <section ref={sectionRef} className="py-24 bg-navy">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <div className="section-label text-center text-slate-light">Get In Touch</div>
          <h2 className="section-title mb-8 text-center text-white">
            Contact Us
            <span className="block text-slate-light font-light italic">Let's Connect</span>
          </h2>
          <p className="text-slate-light max-w-3xl mx-auto">
            Ready to discuss your industrial needs? Our team is here to provide expert solutions 
            and support for your requirements.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="contact-item">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-light mb-2">Name *</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/10 border border-slate/20 rounded-lg text-white placeholder-slate-light focus:outline-none focus:border-steel"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-light mb-2">Company</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/10 border border-slate/20 rounded-lg text-white placeholder-slate-light focus:outline-none focus:border-steel"
                    placeholder="Company Name"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-light mb-2">Email *</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-white/10 border border-slate/20 rounded-lg text-white placeholder-slate-light focus:outline-none focus:border-steel"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-light mb-2">Phone</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 bg-white/10 border border-slate/20 rounded-lg text-white placeholder-slate-light focus:outline-none focus:border-steel"
                    placeholder="+1 234 567 8900"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-light mb-2">Subject *</label>
                <select className="w-full px-4 py-3 bg-white/10 border border-slate/20 rounded-lg text-white focus:outline-none focus:border-steel">
                  <option value="">Select a subject</option>
                  <option value="products">Product Inquiry</option>
                  <option value="technical">Technical Support</option>
                  <option value="sales">Sales Information</option>
                  <option value="partnership">Partnership Opportunities</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-light mb-2">Message *</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 border border-slate/20 rounded-lg text-white placeholder-slate-light focus:outline-none focus:border-steel"
                  placeholder="Tell us about your requirements..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-steel text-white px-8 py-4 text-sm font-semibold tracking-widest uppercase border border-transparent hover:border-steel-light transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="contact-item space-y-8">
            <div>
              <h3 className="font-display text-2xl font-bold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-steel/20 rounded-lg flex items-center justify-center flex-shrink-0">
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

            <div className="bg-steel/20 p-6 rounded-lg">
              <h4 className="font-semibold text-white mb-3">Business Hours</h4>
              <div className="space-y-2 text-slate-light">
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
