'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { gsap } from 'gsap';
import * as d3 from 'd3';
import { feature } from 'topojson-client';
import fallbackWorldData from '@/data/world-110m.json';

const WORLD_ATLAS_URL = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';

const MAP_STYLES = {
  ocean: '#0A182A',
  land: '#22374A',
  border: '#13283B',
  text: '#C5D0DC',
  highlight: '#58AEFF',
  highlightStroke: '#E4F3FF',
  activeFill: '#9AD3FF',
  activeGlow: 'rgba(228,243,255,0.75)',
};

const EXPORT_MARKETS = [
  { id: '356', fallbackId: 'IND', name: 'India', group: 'South Asia', coordinates: [78.9629, 20.5937], labelDx: -28, labelDy: -86, labelAlign: 'left' },
  { id: '050', fallbackId: 'BGD', name: 'Bangladesh', group: 'South Asia', coordinates: [90.3563, 23.685], labelDx: 50, labelDy: -10, labelAlign: 'right' },
  { id: '524', fallbackId: 'NPL', name: 'Nepal', group: 'South Asia', coordinates: [84.124, 28.3949], labelDx: 24, labelDy: -46, labelAlign: 'right' },
  { id: '144', fallbackId: 'LKA', name: 'Sri Lanka', group: 'South Asia', coordinates: [80.7718, 7.8731], labelDx: 38, labelDy: 34, labelAlign: 'right' },
  { id: '048', fallbackId: 'BHR', name: 'Bahrain', group: 'Gulf Countries', coordinates: [50.5577, 26.0667], labelDx: 48, labelDy: -50, labelAlign: 'right' },
  { id: '414', fallbackId: 'KWT', name: 'Kuwait', group: 'Gulf Countries', coordinates: [47.4818, 29.3117], labelDx: -132, labelDy: -52, labelAlign: 'left' },
  { id: '512', fallbackId: 'OMN', name: 'Oman', group: 'Gulf Countries', coordinates: [55.9233, 21.5126], labelDx: 58, labelDy: 44, labelAlign: 'right' },
  { id: '634', fallbackId: 'QAT', name: 'Qatar', group: 'Gulf Countries', coordinates: [51.1839, 25.3548], labelDx: -70, labelDy: 14, labelAlign: 'left' },
  { id: '682', fallbackId: 'SAU', name: 'Saudi Arabia', group: 'Gulf Countries', coordinates: [45.0792, 23.8859], labelDx: -120, labelDy: 26, labelAlign: 'left' },
  { id: '784', fallbackId: 'ARE', name: 'United Arab Emirates', group: 'Gulf Countries', coordinates: [53.8478, 23.4241], labelDx: 70, labelDy: -20, labelAlign: 'right' },
];

const ASIA_FOCUS_BOUNDS = {
  west: 41,
  east: 98,
  north: 37,
  south: 2,
};

const ASIA_FOCUS_REGION = {
  type: 'Polygon',
  coordinates: [[
    [ASIA_FOCUS_BOUNDS.west, ASIA_FOCUS_BOUNDS.north],
    [ASIA_FOCUS_BOUNDS.east, ASIA_FOCUS_BOUNDS.north],
    [ASIA_FOCUS_BOUNDS.east, ASIA_FOCUS_BOUNDS.south],
    [ASIA_FOCUS_BOUNDS.west, ASIA_FOCUS_BOUNDS.south],
    [ASIA_FOCUS_BOUNDS.west, ASIA_FOCUS_BOUNDS.north],
  ]],
};

const EXPORT_LOOKUP = new Map(
  EXPORT_MARKETS.flatMap((market) => {
    const keys = [market.id];
    if (market.fallbackId) keys.push(market.fallbackId);
    return keys.map((key) => [key, market]);
  })
);

function normalizeCountryId(id) {
  const value = String(id);
  return /^\d+$/.test(value) ? value.padStart(3, '0') : value.toUpperCase();
}

function getExportMarket(countryId) {
  return EXPORT_LOOKUP.get(normalizeCountryId(countryId));
}

function getExportMarketFromFeature(featureData) {
  return (
    getExportMarket(featureData.id) ||
    EXPORT_MARKETS.find((market) => market.name === featureData.properties?.name)
  );
}

function getTooltipPosition(event, frameElement) {
  const frameBounds = frameElement.getBoundingClientRect();
  const x = Math.min(Math.max(event.clientX - frameBounds.left + 24, 150), frameBounds.width - 150);
  const y = Math.min(Math.max(event.clientY - frameBounds.top - 18, 90), frameBounds.height - 80);
  return { x, y };
}

function isInFocusRegion(country) {
  const [longitude, latitude] = d3.geoCentroid(country);
  const withinBounds =
    longitude >= ASIA_FOCUS_BOUNDS.west &&
    longitude <= ASIA_FOCUS_BOUNDS.east &&
    latitude >= ASIA_FOCUS_BOUNDS.south &&
    latitude <= ASIA_FOCUS_BOUNDS.north;

  const isHornOfAfrica = longitude < 49 && latitude < 13;
  return withinBounds && !isHornOfAfrica;
}

function WorldMap({ countries, selectedMarketId, onSelectMarket, onShowTooltip, onHideTooltip }) {
  const width = 1180;
  const height = 700;
  const visibleCountries = useMemo(
    () => countries.filter((country) => getExportMarketFromFeature(country) || isInFocusRegion(country)),
    [countries]
  );
  const projection = useMemo(
    () =>
      d3.geoMercator().fitExtent(
        [
          [58, 50],
          [width - 58, height - 64],
        ],
        ASIA_FOCUS_REGION
      ),
    []
  );
  const path = useMemo(() => d3.geoPath(projection), [projection]);
  const graticule = useMemo(
    () =>
      d3
        .geoGraticule()
        .extent([
          [ASIA_FOCUS_BOUNDS.west, ASIA_FOCUS_BOUNDS.south],
          [ASIA_FOCUS_BOUNDS.east, ASIA_FOCUS_BOUNDS.north],
        ])
        .step([5, 5])(),
    []
  );

  return (
    <div className="rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,#0D1C2F,#0A1627)] p-5 shadow-[0_24px_60px_rgba(2,8,18,0.3)]">
      <div className="mb-5 flex flex-col gap-3 px-2 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-light/65">
            Asia Focused View
          </div>
          <div className="mt-2 font-display text-3xl font-bold text-white">Export Markets Across Asia</div>
        </div>
        <div className="max-w-md text-sm leading-6 text-slate-light/75">
          A tighter Gulf-to-South Asia map with cleaner spacing, clearer callouts, and every export market visible at a glance.
        </div>
      </div>

      <svg viewBox={`0 0 ${width} ${height}`} className="h-auto w-full rounded-[24px] border border-white/8 bg-[#091321]">
        <defs>
          <radialGradient id="export-map-glow" cx="50%" cy="34%" r="70%">
            <stop offset="0%" stopColor="rgba(88,174,255,0.18)" />
            <stop offset="100%" stopColor="rgba(88,174,255,0)" />
          </radialGradient>
        </defs>
        <rect width={width} height={height} fill={MAP_STYLES.ocean} rx="24" />
        <rect width={width} height={height} rx="24" fill="url(#export-map-glow)" />
        <path d={path(graticule) || undefined} fill="none" stroke="rgba(114,140,170,0.1)" strokeWidth="0.8" />

        {visibleCountries.map((country) => {
          const market = getExportMarketFromFeature(country);
          const isSelected = market?.id === selectedMarketId;

          return (
            <path
              key={`world-${country.id ?? country.properties?.name}`}
              d={path(country) || undefined}
              fill={market ? (isSelected ? MAP_STYLES.activeFill : MAP_STYLES.highlight) : MAP_STYLES.land}
              stroke={market ? (isSelected ? '#FFFFFF' : MAP_STYLES.highlightStroke) : MAP_STYLES.border}
              strokeWidth={market ? (isSelected ? 2.1 : 1.05) : 0.8}
              style={{ cursor: market ? 'pointer' : 'default' }}
              onMouseEnter={(event) => market && onShowTooltip(event, market)}
              onMouseMove={(event) => market && onShowTooltip(event, market)}
              onMouseLeave={onHideTooltip}
              onClick={() => market && onSelectMarket(market.id)}
            />
          );
        })}

        {EXPORT_MARKETS.map((market) => {
          const projected = projection(market.coordinates);
          if (!projected) return null;

          const [x, y] = projected;
          const isSelected = market.id === selectedMarketId;
          const labelWidth = Math.max(78, market.name.length * 7.1 + 18);
          const alignsRight = market.labelAlign !== 'left';
          const labelX = alignsRight ? -2 : -(labelWidth + 2);
          const textX = alignsRight ? 10 : -(labelWidth - 10);
          const connectorTargetX = x + market.labelDx + (alignsRight ? 6 : -6);
          const connectorTargetY = y + market.labelDy;

          return (
            <g
              key={`marker-${market.id}`}
              style={{ cursor: 'pointer' }}
              onMouseEnter={(event) => onShowTooltip(event, market)}
              onMouseMove={(event) => onShowTooltip(event, market)}
              onMouseLeave={onHideTooltip}
              onClick={() => onSelectMarket(market.id)}
            >
              <circle cx={x} cy={y} r={isSelected ? 7.5 : 5.5} fill={isSelected ? '#FFFFFF' : 'rgba(88,174,255,0.24)'} stroke={MAP_STYLES.highlightStroke} strokeWidth={isSelected ? 2 : 1.2} />
              <circle cx={x} cy={y} r={isSelected ? 15 : 11} fill="none" stroke={isSelected ? MAP_STYLES.activeGlow : 'rgba(228,243,255,0.24)'} strokeWidth="1.1" />
              <polyline
                points={`${x},${y} ${x + market.labelDx * 0.58},${y + market.labelDy} ${connectorTargetX},${connectorTargetY}`}
                fill="none"
                stroke="rgba(228,243,255,0.34)"
                strokeWidth="1"
              />
              <g transform={`translate(${x + market.labelDx}, ${y + market.labelDy})`}>
                <rect
                  x={labelX}
                  y={-20}
                  rx={10}
                  width={labelWidth}
                  height={28}
                  fill="rgba(10,24,42,0.9)"
                  stroke={isSelected ? 'rgba(154,211,255,0.75)' : 'rgba(255,255,255,0.12)'}
                />
                <text
                  x={textX}
                  y={-2}
                  fill="#FFFFFF"
                  fontSize="12"
                  fontWeight="700"
                  letterSpacing="0.03em"
                >
                  {market.name}
                </text>
              </g>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

export default function D3ExportMap() {
  const sectionRef = useRef(null);
  const frameRef = useRef(null);
  const [tooltip, setTooltip] = useState(null);
  const [worldData, setWorldData] = useState(null);
  const [isFallbackData, setIsFallbackData] = useState(false);
  const [selectedMarketId, setSelectedMarketId] = useState('356');

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.2 });
    tl.fromTo(
      sectionRef.current.querySelectorAll('.map-item'),
      { opacity: 0, y: 36 },
      { opacity: 1, y: 0, duration: 0.9, stagger: 0.1, ease: 'power3.out' }
    );
  }, []);

  useEffect(() => {
    let cancelled = false;

    async function loadWorldData() {
      try {
        const response = await fetch(WORLD_ATLAS_URL);
        if (!response.ok) {
          throw new Error(`Map request failed with status ${response.status}`);
        }
        const topology = await response.json();
        if (!cancelled) {
          setWorldData(topology);
          setIsFallbackData(false);
        }
      } catch (error) {
        console.error('Falling back to bundled map data:', error);
        if (!cancelled) {
          setWorldData(fallbackWorldData);
          setIsFallbackData(true);
        }
      }
    }

    loadWorldData();
    return () => {
      cancelled = true;
    };
  }, []);

  const countries = useMemo(() => {
    if (!worldData) return [];
    return feature(worldData, worldData.objects.countries).features;
  }, [worldData]);

  const groupedMarkets = useMemo(() => {
    return EXPORT_MARKETS.reduce((groups, market) => {
      groups[market.group] = [...(groups[market.group] ?? []), market];
      return groups;
    }, {});
  }, []);

  const selectedMarket = EXPORT_MARKETS.find((market) => market.id === selectedMarketId) ?? EXPORT_MARKETS[0];

  const showTooltip = (event, market) => {
    if (!frameRef.current) return;
    setTooltip({
      ...getTooltipPosition(event, frameRef.current),
      name: market.name,
      group: market.group,
    });
  };

  return (
    <section ref={sectionRef} className="bg-[#091625] py-28 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="map-item">
          <h2 className="max-w-6xl font-display text-[clamp(4rem,8vw,6.5rem)] leading-[0.9] tracking-[-0.04em] text-white">
            Our Export Markets
          </h2>
        </div>

        <div className="map-item mx-auto mt-24 max-w-5xl text-center">
          <p className="text-xl leading-relaxed text-slate-light md:text-[2rem] md:leading-relaxed">
            An Asia-only export map showing India, Bangladesh, Nepal, Sri Lanka, and the Gulf markets in a cleaner, easier-to-scan layout.
          </p>
        </div>

        <div ref={frameRef} className="map-item relative mt-16">
          {worldData ? (
            <WorldMap
              countries={countries}
              selectedMarketId={selectedMarketId}
              onSelectMarket={setSelectedMarketId}
              onShowTooltip={showTooltip}
              onHideTooltip={() => setTooltip(null)}
            />
          ) : (
            <div className="flex h-[420px] items-center justify-center rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,#0D1C2F,#0A1627)] text-sm uppercase tracking-[0.28em] text-slate-light/70">
              Loading Export Map
            </div>
          )}

          {tooltip && (
            <div
              className="pointer-events-none absolute z-10 min-w-[210px] rounded-2xl border border-white/10 bg-[#0B1727]/95 px-4 py-3 text-left shadow-2xl backdrop-blur-md"
              style={{ left: tooltip.x, top: tooltip.y, transform: 'translate(-50%, -112%)' }}
            >
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-white">
                {tooltip.name}
              </div>
              <div className="mt-2 text-xs tracking-[0.24em]" style={{ color: MAP_STYLES.text }}>
                {tooltip.group}
              </div>
              <div className="mt-1 text-xs text-slate-light/80">Active supply market</div>
            </div>
          )}
        </div>

        <div className="map-item mt-10 grid gap-6 lg:grid-cols-[1fr_320px] lg:items-start">
          <div className="space-y-6">
            {Object.entries(groupedMarkets).map(([group, markets]) => (
              <div key={group} className="rounded-[24px] border border-white/10 bg-white/[0.03] px-5 py-5">
                <div className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-light/65">
                  {group}
                </div>
                <div className="mt-4 flex flex-wrap gap-3">
                  {markets.map((market) => {
                    const isActive = market.id === selectedMarketId;
                    return (
                      <button
                        key={market.id}
                        type="button"
                        onClick={() => setSelectedMarketId(market.id)}
                        className={`rounded-full border px-4 py-3 text-sm font-semibold transition-all duration-300 ${
                          isActive
                            ? 'border-white bg-white text-navy shadow-[0_16px_34px_rgba(255,255,255,0.12)]'
                            : 'border-white/12 bg-white/[0.04] text-slate-light hover:border-white/30 hover:bg-white/[0.08]'
                        }`}
                      >
                        {market.name}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-[28px] border border-white/10 bg-white/[0.04] px-6 py-6">
            <div className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-light/70">
              Selected Market
            </div>
            <div className="mt-3 font-display text-3xl font-bold text-white">{selectedMarket.name}</div>
            <div className="mt-2 text-sm uppercase tracking-[0.22em] text-slate-light/75">
              {selectedMarket.group}
            </div>
            <div className="mt-5 inline-flex rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-slate-light/75">
              10 Active Export Destinations
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-light">
              Hover or click a highlighted country, callout, or market chip to inspect the export destination.
            </p>
          </div>
        </div>

        {isFallbackData && (
          <div className="map-item mt-6 text-center text-xs uppercase tracking-[0.24em] text-slate-light/60">
            Fallback map data is active, so some country shapes may appear simplified.
          </div>
        )}
      </div>
    </section>
  );
}
