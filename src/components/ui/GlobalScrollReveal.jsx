'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const AUTO_REVEAL_SELECTOR = [
  'main section:not(:first-child)',
  'main h1',
  'main h2',
  'main h3',
  'main p',
  'main article',
  'main figure',
  'main picture',
  'main img',
  'main [data-reveal]',
  'main .reveal-media',
].join(', ');

export default function GlobalScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const autoRevealItems = document.querySelectorAll(AUTO_REVEAL_SELECTOR);

    autoRevealItems.forEach((item, index) => {
      if (!item.closest('[data-no-reveal]') && !item.classList.contains('scroll-float')) {
        item.classList.add('reveal-item');
        item.style.setProperty('--reveal-delay', `${Math.min(index * 35, 210)}ms`);
      }
    });

    const revealItems = document.querySelectorAll('.reveal-item:not(.active)');

    if (reducedMotion || !('IntersectionObserver' in window)) {
      revealItems.forEach((item) => item.classList.add('active'));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || entry.intersectionRatio < 0.15) return;

          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.15,
      }
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
