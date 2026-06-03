'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const AUTO_REVEAL_SELECTOR = [
  'main section:not(:first-child)',
  'main h1',
  'main h2',
  'main h3',
  'main p',
  'main a.btn-primary',
  'main a.btn-outline',
  'main button',
  'main article',
  'main figure',
  'main picture',
  'main img',
  'main .about-item',
  'main .product-item',
  'main .cert-item',
  'main .map-item',
  'main .contact-item',
  'main .panel-light',
  'main .panel-dark',
  'main [data-reveal]',
  'main .reveal-media',
].join(', ');

const NAV_REVEAL_SELECTOR = [
  'header nav a',
  'header > div a',
  'header nav button',
].join(', ');

const DIRECTION_BREAKPOINTS = {
  left: 0.42,
  right: 0.58,
};

function getRevealDirection(element) {
  const rect = element.getBoundingClientRect();
  const elementCenter = rect.left + rect.width / 2;
  const viewportWidth = window.innerWidth || document.documentElement.clientWidth;

  if (elementCenter < viewportWidth * DIRECTION_BREAKPOINTS.left) {
    return 'scroll-from-left';
  }

  if (elementCenter > viewportWidth * DIRECTION_BREAKPOINTS.right) {
    return 'scroll-from-right';
  }

  return 'scroll-from-up';
}

function getSiblingDelay(element, revealSet) {
  const siblings = Array.from(element.parentElement?.children ?? []);
  const revealSiblings = siblings.filter((sibling) => revealSet.has(sibling));
  const siblingIndex = revealSiblings.indexOf(element);

  return siblingIndex > -1 ? Math.min(siblingIndex * 100, 600) : 0;
}

export default function GlobalScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const autoRevealItems = Array.from(document.querySelectorAll(AUTO_REVEAL_SELECTOR));
    const revealSet = new Set(autoRevealItems);

    autoRevealItems.forEach((item) => {
      if (!item.closest('[data-no-reveal]') && !item.classList.contains('scroll-float')) {
        item.classList.add('scroll-hidden', getRevealDirection(item));
        item.style.setProperty('--scroll-delay', `${getSiblingDelay(item, revealSet)}ms`);
      }
    });

    const navItems = Array.from(document.querySelectorAll(NAV_REVEAL_SELECTOR));
    navItems.forEach((item, index) => {
      item.classList.add('scroll-hidden', 'scroll-nav-item');
      item.style.setProperty('--scroll-delay', `${index * 100}ms`);
    });

    const revealItems = document.querySelectorAll('.scroll-hidden:not(.scroll-visible)');

    if (reducedMotion || !('IntersectionObserver' in window)) {
      revealItems.forEach((item) => item.classList.add('scroll-visible'));
      return undefined;
    }

    requestAnimationFrame(() => {
      navItems.forEach((item) => item.classList.add('scroll-visible'));
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || entry.intersectionRatio < 0.15) return;

          entry.target.classList.add('scroll-visible');
          observer.unobserve(entry.target);
        });
      },
      {
        rootMargin: '0px 0px -8% 0px',
        threshold: 0.15,
      }
    );

    revealItems.forEach((item) => {
      if (!item.classList.contains('scroll-nav-item')) {
        observer.observe(item);
      }
    });

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
