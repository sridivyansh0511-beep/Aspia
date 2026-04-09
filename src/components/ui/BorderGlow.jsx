'use client';

import { useCallback, useEffect, useRef } from 'react';
import styles from './BorderGlow.module.css';

function parseHSL(hslStr) {
  const match = hslStr.match(/([\d.]+)\s*([\d.]+)%?\s*([\d.]+)%?/);

  if (!match) {
    return { h: 40, s: 80, l: 80 };
  }

  return {
    h: Number.parseFloat(match[1]),
    s: Number.parseFloat(match[2]),
    l: Number.parseFloat(match[3]),
  };
}

function buildGlowVars(glowColor, intensity) {
  const { h, s, l } = parseHSL(glowColor);
  const base = `${h}deg ${s}% ${l}%`;
  const opacities = [100, 60, 50, 40, 30, 20, 10];
  const keys = ['', '-60', '-50', '-40', '-30', '-20', '-10'];
  const vars = {};

  for (let index = 0; index < opacities.length; index += 1) {
    vars[`--glow-color${keys[index]}`] = `hsl(${base} / ${Math.min(opacities[index] * intensity, 100)}%)`;
  }

  return vars;
}

const GRADIENT_POSITIONS = ['80% 55%', '69% 34%', '8% 6%', '41% 38%', '86% 85%', '82% 18%', '51% 4%'];
const GRADIENT_KEYS = [
  '--gradient-one',
  '--gradient-two',
  '--gradient-three',
  '--gradient-four',
  '--gradient-five',
  '--gradient-six',
  '--gradient-seven',
];
const COLOR_MAP = [0, 1, 2, 0, 1, 2, 1];

function buildGradientVars(inputColors) {
  const colors = inputColors.length ? inputColors : ['#c084fc', '#f472b6', '#38bdf8'];
  const vars = {};

  for (let index = 0; index < 7; index += 1) {
    const color = colors[Math.min(COLOR_MAP[index], colors.length - 1)];
    vars[GRADIENT_KEYS[index]] = `radial-gradient(at ${GRADIENT_POSITIONS[index]}, ${color} 0px, transparent 50%)`;
  }

  vars['--gradient-base'] = `linear-gradient(${colors[0]} 0 100%)`;
  return vars;
}

function easeOutCubic(value) {
  return 1 - (1 - value) ** 3;
}

function easeInCubic(value) {
  return value ** 3;
}

function animateValue({
  start = 0,
  end = 100,
  duration = 1000,
  delay = 0,
  ease = easeOutCubic,
  onUpdate,
  onEnd,
}) {
  let frameId = null;
  let timeoutId = null;
  const startTime = performance.now() + delay;

  const tick = () => {
    const now = performance.now();
    const progress = Math.min(Math.max((now - startTime) / duration, 0), 1);
    onUpdate(start + (end - start) * ease(progress));

    if (progress < 1) {
      frameId = requestAnimationFrame(tick);
      return;
    }

    onEnd?.();
  };

  timeoutId = window.setTimeout(() => {
    frameId = requestAnimationFrame(tick);
  }, delay);

  return () => {
    if (timeoutId) {
      window.clearTimeout(timeoutId);
    }

    if (frameId) {
      window.cancelAnimationFrame(frameId);
    }
  };
}

export default function BorderGlow({
  children,
  className = '',
  edgeSensitivity = 30,
  glowColor = '40 80 80',
  backgroundColor = '#060010',
  borderRadius = 28,
  glowRadius = 40,
  glowIntensity = 1,
  coneSpread = 25,
  animated = false,
  colors = ['#c084fc', '#f472b6', '#38bdf8'],
  fillOpacity = 0.5,
}) {
  const cardRef = useRef(null);

  const getCenterOfElement = useCallback((element) => {
    const { width, height } = element.getBoundingClientRect();
    return [width / 2, height / 2];
  }, []);

  const getEdgeProximity = useCallback((element, x, y) => {
    const [centerX, centerY] = getCenterOfElement(element);
    const deltaX = x - centerX;
    const deltaY = y - centerY;
    let ratioX = Number.POSITIVE_INFINITY;
    let ratioY = Number.POSITIVE_INFINITY;

    if (deltaX !== 0) {
      ratioX = centerX / Math.abs(deltaX);
    }

    if (deltaY !== 0) {
      ratioY = centerY / Math.abs(deltaY);
    }

    return Math.min(Math.max(1 / Math.min(ratioX, ratioY), 0), 1);
  }, [getCenterOfElement]);

  const getCursorAngle = useCallback((element, x, y) => {
    const [centerX, centerY] = getCenterOfElement(element);
    const deltaX = x - centerX;
    const deltaY = y - centerY;

    if (deltaX === 0 && deltaY === 0) {
      return 0;
    }

    const radians = Math.atan2(deltaY, deltaX);
    let degrees = radians * (180 / Math.PI) + 90;

    if (degrees < 0) {
      degrees += 360;
    }

    return degrees;
  }, [getCenterOfElement]);

  const handlePointerMove = useCallback((event) => {
    const card = cardRef.current;

    if (!card) {
      return;
    }

    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const edge = getEdgeProximity(card, x, y);
    const angle = getCursorAngle(card, x, y);

    card.style.setProperty('--edge-proximity', `${(edge * 100).toFixed(3)}`);
    card.style.setProperty('--cursor-angle', `${angle.toFixed(3)}deg`);
  }, [getCursorAngle, getEdgeProximity]);

  useEffect(() => {
    const card = cardRef.current;

    if (!animated || !card) {
      return undefined;
    }

    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
      return undefined;
    }

    const angleStart = 110;
    const angleEnd = 465;
    const cancelAnimations = [];

    card.classList.add(styles.sweepActive);
    card.style.setProperty('--cursor-angle', `${angleStart}deg`);

    cancelAnimations.push(
      animateValue({
        duration: 500,
        onUpdate: value => card.style.setProperty('--edge-proximity', value),
      })
    );

    cancelAnimations.push(
      animateValue({
        ease: easeInCubic,
        duration: 1500,
        end: 50,
        onUpdate: value => {
          card.style.setProperty(
            '--cursor-angle',
            `${((angleEnd - angleStart) * value) / 100 + angleStart}deg`
          );
        },
      })
    );

    cancelAnimations.push(
      animateValue({
        ease: easeOutCubic,
        delay: 1500,
        duration: 2250,
        start: 50,
        end: 100,
        onUpdate: value => {
          card.style.setProperty(
            '--cursor-angle',
            `${((angleEnd - angleStart) * value) / 100 + angleStart}deg`
          );
        },
      })
    );

    cancelAnimations.push(
      animateValue({
        ease: easeInCubic,
        delay: 2500,
        duration: 1500,
        start: 100,
        end: 0,
        onUpdate: value => card.style.setProperty('--edge-proximity', value),
        onEnd: () => card.classList.remove(styles.sweepActive),
      })
    );

    return () => {
      cancelAnimations.forEach(cancel => cancel());
      card.classList.remove(styles.sweepActive);
    };
  }, [animated]);

  return (
    <div
      ref={cardRef}
      onPointerMove={handlePointerMove}
      className={`${styles.borderGlowCard} ${className}`.trim()}
      style={{
        '--card-bg': backgroundColor,
        '--edge-sensitivity': edgeSensitivity,
        '--border-radius': `${borderRadius}px`,
        '--glow-padding': `${glowRadius}px`,
        '--cone-spread': coneSpread,
        '--fill-opacity': fillOpacity,
        ...buildGlowVars(glowColor, glowIntensity),
        ...buildGradientVars(colors),
      }}
    >
      <span className={styles.edgeLight} />
      <div className={styles.borderGlowInner}>{children}</div>
    </div>
  );
}
