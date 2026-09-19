'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const SPLASH_HOLD_MS = 2000;
const SPLASH_FADE_MS = 500;

export default function SplashScreen() {
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const previousOverflow = useRef('');

  useEffect(() => {
    previousOverflow.current = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const fadeTimeout = window.setTimeout(() => {
      setIsFadingOut(true);
    }, SPLASH_HOLD_MS);

    const hideTimeout = window.setTimeout(() => {
      setIsHidden(true);
      document.body.style.overflow = previousOverflow.current;
    }, SPLASH_HOLD_MS + SPLASH_FADE_MS);

    return () => {
      window.clearTimeout(fadeTimeout);
      window.clearTimeout(hideTimeout);
      document.body.style.overflow = previousOverflow.current;
    };
  }, []);

  if (isHidden) {
    return null;
  }

  return (
    <div
      className={`fixed inset-0 z-[120] flex items-center justify-center bg-[radial-gradient(circle_at_top,rgba(26,158,143,0.14),transparent_34%),linear-gradient(180deg,#0A1628,#071220)] transition-opacity duration-500 ${
        isFadingOut ? 'pointer-events-none opacity-0' : 'opacity-100'
      }`}
    >
      <div className="flex flex-col items-center justify-center gap-8 px-6">
        <Image
          src="/a-world-class--ultra-minimalist-logo-design-for-a--2-2.svg"
          alt="Aspia"
          width={958}
          height={238}
          priority
          className="animate-splash-logo-fade h-auto w-[240px] drop-shadow-[0_18px_36px_rgba(0,0,0,0.28)] md:w-[320px]"
        />

        <div className="h-[2px] w-44 overflow-hidden rounded-full bg-white/10">
          <span className="animate-splash-loader block h-full w-full origin-left bg-[#1A9E8F]" />
        </div>
      </div>
    </div>
  );
}
