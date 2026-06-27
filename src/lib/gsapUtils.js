import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function revealOnScroll(target, options = {}) {
  return gsap.fromTo(
    target,
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 0.9,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: target,
        start: 'top 85%',
        toggleActions: 'play none none none',
        ...options.scrollTrigger,
      },
      ...options,
    }
  );
}

export function staggerReveal(targets, options = {}) {
  return gsap.fromTo(
    targets,
    { opacity: 0, y: 60 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: targets[0] || targets,
        start: 'top 80%',
        toggleActions: 'play none none none',
        ...options.scrollTrigger,
      },
      ...options,
    }
  );
}

export function parallax(target, speed = 0.4) {
  return gsap.to(target, {
    yPercent: speed * 100,
    ease: 'none',
    scrollTrigger: {
      trigger: target,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    },
  });
}

export function useStaggerReveal(ref, selector, options = {}) {
  useEffect(() => {
    if (!ref.current) return;
    const elements = ref.current.querySelectorAll(selector);
    if (!elements || elements.length === 0) return;

    const { delay = 0, duration = 1, stagger = 0.2, y = 60, ease = 'power3.out', ...rest } = options;
    const tl = gsap.timeline({ delay });

    tl.fromTo(
      elements,
      { opacity: 0, y },
      { opacity: 1, y: 0, duration, stagger, ease, ...rest }
    );
  }, []);
}
