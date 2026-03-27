'use client';

import Image from 'next/image';

const TONES = {
  aqua: {
    from: "#F2FBFF",
    to: "#DCEEF9",
    glow: "rgba(107, 198, 235, 0.32)",
    accent: "#2C9ED6",
    cap: "#4DB2E5",
    label: "#1F7FB4",
    shelf: "rgba(129, 178, 208, 0.18)",
  },
  blue: {
    from: "#EEF8FF",
    to: "#D7ECF8",
    glow: "rgba(89, 168, 223, 0.28)",
    accent: "#428CC6",
    cap: "#5A9ED2",
    label: "#2B73AB",
    shelf: "rgba(111, 157, 191, 0.18)",
  },
  emerald: {
    from: "#F3FCF8",
    to: "#DFF2EA",
    glow: "rgba(88, 188, 145, 0.28)",
    accent: "#34A171",
    cap: "#4FB783",
    label: "#2B8A60",
    shelf: "rgba(122, 178, 156, 0.18)",
  },
  amber: {
    from: "#FFF9F1",
    to: "#F6E6D2",
    glow: "rgba(213, 153, 81, 0.28)",
    accent: "#D59A49",
    cap: "#A56B1C",
    label: "#C98625",
    shelf: "rgba(191, 158, 115, 0.2)",
  },
  violet: {
    from: "#F7F5FF",
    to: "#E7E2F8",
    glow: "rgba(157, 132, 229, 0.28)",
    accent: "#7D65CC",
    cap: "#8E77DA",
    label: "#7059C6",
    shelf: "rgba(157, 132, 229, 0.18)",
  },
  rose: {
    from: "#FFF6F7",
    to: "#F8E1E6",
    glow: "rgba(218, 108, 139, 0.24)",
    accent: "#D75D7D",
    cap: "#BF4D67",
    label: "#C84D6D",
    shelf: "rgba(218, 108, 139, 0.18)",
  },
  teal: {
    from: "#F1FBFB",
    to: "#DDEEEE",
    glow: "rgba(58, 166, 159, 0.28)",
    accent: "#2F9E98",
    cap: "#42B2AB",
    label: "#258C86",
    shelf: "rgba(58, 166, 159, 0.18)",
  },
  silver: {
    from: "#FAFBFC",
    to: "#E8EDF3",
    glow: "rgba(160, 173, 186, 0.24)",
    accent: "#9BA9B7",
    cap: "#7D8B99",
    label: "#6B7B8A",
    shelf: "rgba(160, 173, 186, 0.2)",
  },
};

function BagVisual({ palette, label, strength }) {
  return (
    <svg viewBox="0 0 320 240" className="h-full w-full" aria-hidden="true">
      <defs>
        <linearGradient id={`bagBody-${label}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.88)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0.65)" />
        </linearGradient>
      </defs>

      <rect x="28" y="42" width="264" height="8" rx="4" fill={palette.shelf} />
      <rect x="52" y="78" width="216" height="6" rx="3" fill={palette.shelf} />

      <path d="M160 20v32" stroke="#B5C7D9" strokeWidth="4" strokeLinecap="round" />
      <path d="M146 20c3-8 25-8 28 0" stroke="#B5C7D9" strokeWidth="4" fill="none" strokeLinecap="round" />

      <ellipse cx="160" cy="210" rx="74" ry="11" fill="rgba(15,23,42,0.08)" />

      <g>
        <rect x="106" y="48" width="108" height="148" rx="22" fill={`url(#bagBody-${label})`} stroke="rgba(255,255,255,0.96)" strokeWidth="3" />
        <rect x="106" y="48" width="108" height="28" rx="16" fill="rgba(255,255,255,0.72)" />
        <rect x="118" y="86" width="84" height="66" rx="12" fill="rgba(252,254,255,0.98)" />
        <rect x="118" y="86" width="84" height="14" rx="7" fill={palette.label} />
        <rect x="126" y="108" width="42" height="5" rx="2.5" fill="rgba(90,117,143,0.3)" />
        <rect x="126" y="118" width="52" height="5" rx="2.5" fill="rgba(90,117,143,0.18)" />
        <rect x="126" y="128" width="36" height="5" rx="2.5" fill="rgba(90,117,143,0.18)" />
        <rect x="126" y="156" width="68" height="8" rx="4" fill="rgba(255,255,255,0.72)" />
        <path d="M160 196v18" stroke="#C9D7E4" strokeWidth="4" strokeLinecap="round" />
        <circle cx="160" cy="218" r="5" fill={palette.accent} />
      </g>

      <text x="122" y="96" fill="white" fontSize="8" fontWeight="700" letterSpacing="0.14em">
        ASPIA
      </text>
      <text x="126" y="168" fill="#3A5066" fontSize="8" fontWeight="700">
        {strength}
      </text>
    </svg>
  );
}

function BottleVisual({ palette, label, strength, warm = false }) {
  const bodyFill = warm ? "rgba(255,249,239,0.88)" : "rgba(255,255,255,0.93)";

  return (
    <svg viewBox="0 0 320 240" className="h-full w-full" aria-hidden="true">
      <rect x="40" y="44" width="240" height="8" rx="4" fill={palette.shelf} />
      <rect x="54" y="84" width="212" height="6" rx="3" fill={palette.shelf} />
      <ellipse cx="160" cy="212" rx="68" ry="11" fill="rgba(15,23,42,0.08)" />

      <g>
        <rect x="141" y="44" width="38" height="18" rx="6" fill={palette.cap} />
        <rect x="135" y="58" width="50" height="18" rx="8" fill="rgba(255,255,255,0.72)" />
        <rect x="118" y="74" width="84" height="118" rx="22" fill={bodyFill} stroke="rgba(255,255,255,0.95)" strokeWidth="3" />
        <rect x="126" y="102" width="68" height="58" rx="10" fill="rgba(253,254,255,0.98)" />
        <rect x="126" y="102" width="68" height="14" rx="7" fill={palette.label} />
        <rect x="132" y="124" width="28" height="5" rx="2.5" fill="rgba(90,117,143,0.28)" />
        <rect x="132" y="134" width="40" height="5" rx="2.5" fill="rgba(90,117,143,0.18)" />
        <rect x="132" y="144" width="32" height="5" rx="2.5" fill="rgba(90,117,143,0.18)" />
      </g>

      <text x="132" y="112" fill="white" fontSize="8" fontWeight="700" letterSpacing="0.14em">
        ASPIA
      </text>
      <text x="132" y="170" fill="#3A5066" fontSize="8" fontWeight="700">
        {strength}
      </text>
    </svg>
  );
}

function VialVisual({ palette, label, strength }) {
  return (
    <svg viewBox="0 0 320 240" className="h-full w-full" aria-hidden="true">
      <rect x="54" y="52" width="212" height="8" rx="4" fill={palette.shelf} />
      <ellipse cx="160" cy="212" rx="62" ry="11" fill="rgba(15,23,42,0.08)" />

      <g>
        <rect x="138" y="48" width="44" height="24" rx="7" fill={palette.cap} />
        <rect x="146" y="40" width="28" height="10" rx="4" fill="rgba(255,255,255,0.75)" />
        <rect x="124" y="68" width="72" height="120" rx="22" fill="rgba(255,255,255,0.92)" stroke="rgba(255,255,255,0.96)" strokeWidth="3" />
        <rect x="132" y="104" width="56" height="52" rx="10" fill="rgba(253,254,255,0.98)" />
        <rect x="132" y="104" width="56" height="14" rx="7" fill={palette.label} />
        <rect x="138" y="126" width="24" height="5" rx="2.5" fill="rgba(90,117,143,0.28)" />
        <rect x="138" y="136" width="36" height="5" rx="2.5" fill="rgba(90,117,143,0.18)" />
        <rect x="138" y="146" width="30" height="5" rx="2.5" fill="rgba(90,117,143,0.18)" />
      </g>

      <text x="138" y="114" fill="white" fontSize="8" fontWeight="700" letterSpacing="0.14em">
        ASPIA
      </text>
      <text x="138" y="166" fill="#3A5066" fontSize="8" fontWeight="700">
        {strength}
      </text>
    </svg>
  );
}

export default function ProductVisual({ product }) {
  const palette = TONES[product.tone] || TONES.blue;

  if (product.image) {
    return (
      <div className="relative aspect-[6/5] overflow-hidden rounded-[26px] border border-slate/10 bg-[#F3F4F8]">
        <Image
          src={product.image}
          alt={`${product.name} packaging`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1536px) 50vw, 33vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),transparent_38%,rgba(255,255,255,0.16))]" />

        <div className="absolute left-4 top-4 rounded-full border border-white/70 bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-navy shadow-[0_8px_20px_rgba(15,23,42,0.08)]">
          {product.id}
        </div>
      </div>
    );
  }

  const renderVisual = () => {
    if (product.visual === "bag") {
      return <BagVisual palette={palette} label={product.id} strength={product.strength} />;
    }

    if (product.visual === "vial") {
      return <VialVisual palette={palette} label={product.id} strength={product.strength} />;
    }

    return (
      <BottleVisual
        palette={palette}
        label={product.id}
        strength={product.strength}
        warm={product.tone === "amber"}
      />
    );
  };

  return (
    <div
      className="relative aspect-[6/5] overflow-hidden rounded-[26px] border border-slate/10"
      style={{
        background: `linear-gradient(160deg, ${palette.from}, ${palette.to})`,
      }}
    >
      <div className="absolute inset-0">
        <div
          className="absolute -right-10 top-0 h-32 w-32 rounded-full blur-3xl"
          style={{ backgroundColor: palette.glow }}
        />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-[linear-gradient(180deg,transparent,rgba(255,255,255,0.42))]" />
      </div>

      <div className="absolute left-4 top-4 rounded-full border border-white/60 bg-white/75 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-navy">
        {product.id}
      </div>

      <div className="relative h-full w-full p-4">
        {renderVisual()}
      </div>
    </div>
  );
}
