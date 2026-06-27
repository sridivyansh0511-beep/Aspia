'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#071220]">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-12">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-md">
            <Link href="/" className="inline-flex" aria-label="Aspia home">
              <Image
                src="/aspia-logo-transparent-clean.png"
                alt="Aspia"
                width={1002}
                height={388}
                className="h-auto w-[152px] drop-shadow-[0_12px_24px_rgba(0,0,0,0.28)] sm:w-[184px]"
              />
            </Link>
            <p className="mt-5 text-sm leading-7 text-slate-light">
              Precision-engineered industrial exports for critical sectors worldwide,
              with a clean footer that keeps focus on what matters.
            </p>
          </div>

          <div className="rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-slate-light/80">
            Professional Industrial Communication
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs uppercase tracking-[0.24em] text-slate-light/55 sm:flex-row sm:items-center sm:justify-between">
          <span>Aspia Global Industrial Exports</span>
          <span>Built For Reliable Worldwide Delivery</span>
        </div>
      </div>
    </footer>
  );
}
