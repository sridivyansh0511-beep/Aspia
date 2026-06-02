'use client';

import { useEffect, useMemo, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import './ScrollFloat.css';

const ScrollFloat = ({
  children,
  scrollContainerRef,
  containerClassName = '',
  textClassName = '',
  animationDuration = 1,
  ease = 'back.inOut(2)',
  scrollStart = 'center bottom+=50%',
  scrollEnd = 'bottom bottom-=40%',
  stagger = 0.03,
}) => {
  const containerRef = useRef(null);
  const text = typeof children === 'string' ? children : '';

  const splitText = useMemo(() => {
    if (!text) {
      return children;
    }

    return text.split('').map((char, index) => (
      <span className="scroll-float-char" key={`${char}-${index}`}>
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  }, [children, text]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return undefined;

    gsap.registerPlugin(ScrollTrigger);

    const scroller =
      scrollContainerRef && scrollContainerRef.current ? scrollContainerRef.current : window;

    const ctx = gsap.context(() => {
      const charElements = el.querySelectorAll('.scroll-float-char');
      if (!charElements.length) return;

      gsap.fromTo(
        charElements,
        {
          willChange: 'opacity, transform',
          opacity: 0,
          yPercent: 120,
          scaleY: 2.3,
          scaleX: 0.7,
          transformOrigin: '50% 0%',
        },
        {
          duration: animationDuration,
          ease,
          opacity: 1,
          yPercent: 0,
          scaleY: 1,
          scaleX: 1,
          stagger,
          scrollTrigger: {
            trigger: el,
            scroller,
            start: scrollStart,
            end: scrollEnd,
            scrub: true,
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, [scrollContainerRef, animationDuration, ease, scrollStart, scrollEnd, stagger]);

  return (
    <h2
      ref={containerRef}
      aria-label={text || undefined}
      className={`scroll-float ${containerClassName}`.trim()}
    >
      <span
        aria-hidden={text ? true : undefined}
        className={`scroll-float-text ${textClassName}`.trim()}
      >
        {splitText}
      </span>
    </h2>
  );
};

export default ScrollFloat;
