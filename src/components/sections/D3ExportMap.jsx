'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import * as d3 from 'd3';
import { feature, mesh } from 'topojson-client';
import fallbackWorldData from '@/data/world-110m.json';

const WORLD_ATLAS_URL = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';

const MAP_STYLES = {
  section: '#091625',
  ocean: '#0A182A',
  land: '#213546',
  border: '#13283B',
  sphereBorder: '#24384C',
  graticule: 'rgba(114, 140, 170, 0.1)',
  text: '#C5D0DC',
};

const REGION_STYLES = {
  Americas: '#4E7CB4',
  Europe: '#406B9E',
  Asia: '#63A6EE',
  'Middle East': '#294C93',
  Africa: '#347CBB',
  Oceania: '#468CE0',
};

const EXPORT_MARKETS = [
  { id: '840', fallbackId: 'USA', name: 'United States', region: 'Americas', coordinates: [-95.7129, 37.0902] },
  { id: '124', fallbackId: 'CAN', name: 'Canada', region: 'Americas', coordinates: [-106.3468, 56.1304] },
  { id: '484', fallbackId: 'MEX', name: 'Mexico', region: 'Americas', coordinates: [-102.5528, 23.6345] },
  { id: '076', name: 'Brazil', region: 'Americas', coordinates: [-51.9253, -14.235] },
  { id: '826', fallbackId: 'GBR', name: 'United Kingdom', region: 'Europe', coordinates: [-3.436, 55.3781] },
  { id: '250', fallbackId: 'FRA', name: 'France', region: 'Europe', coordinates: [2.2137, 46.2276] },
  { id: '276', fallbackId: 'DEU', name: 'Germany', region: 'Europe', coordinates: [10.4515, 51.1657] },
  { id: '380', fallbackId: 'ITA', name: 'Italy', region: 'Europe', coordinates: [12.5674, 41.8719] },
  { id: '724', name: 'Spain', region: 'Europe', coordinates: [-3.7492, 40.4637] },
  { id: '682', fallbackId: 'SAU', name: 'Saudi Arabia', region: 'Middle East', coordinates: [45.0792, 23.8859] },
  { id: '356', fallbackId: 'IND', name: 'India', region: 'Asia', coordinates: [78.9629, 20.5937] },
  { id: '156', name: 'China', region: 'Asia', coordinates: [104.1954, 35.8617] },
  { id: '392', name: 'Japan', region: 'Asia', coordinates: [138.2529, 36.2048] },
  { id: '818', name: 'Egypt', region: 'Africa', coordinates: [30.8025, 26.8206] },
  { id: '566', name: 'Nigeria', region: 'Africa', coordinates: [8.6753, 9.082] },
  { id: '710', name: 'South Africa', region: 'Africa', coordinates: [22.9375, -30.5595] },
  { id: '036', name: 'Australia', region: 'Oceania', coordinates: [133.7751, -25.2744] },
  { id: '554', name: 'New Zealand', region: 'Oceania', coordinates: [174.886, -40.9006] },
];

const LEGEND_ITEMS = ['Americas', 'Europe', 'Asia', 'Middle East', 'Africa', 'Oceania'];

const EXPORT_LOOKUP = new Map(
  EXPORT_MARKETS.flatMap((market) => {
    const keys = [market.id];

    if (market.fallbackId) {
      keys.push(market.fallbackId);
    }

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

function brightenColor(colorValue, amount) {
  const color = d3.color(colorValue);

  if (!color) {
    return colorValue;
  }

  return color.brighter(amount).formatHex();
}

function getTooltipPosition(event, frameElement) {
  const frameBounds = frameElement.getBoundingClientRect();
  const x = Math.min(Math.max(event.clientX - frameBounds.left + 24, 150), frameBounds.width - 150);
  const y = Math.min(Math.max(event.clientY - frameBounds.top - 18, 90), frameBounds.height - 80);

  return { x, y };
}

export default function D3ExportMap() {
  const sectionRef = useRef(null);
  const svgRef = useRef(null);
  const frameRef = useRef(null);
  const [tooltip, setTooltip] = useState(null);
  const [worldData, setWorldData] = useState(null);
  const [isFallbackData, setIsFallbackData] = useState(false);

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

  useEffect(() => {
    if (!svgRef.current || !worldData) return;

    const width = 1140;
    const height = 620;
    const sphere = { type: 'Sphere' };
    const countries = feature(worldData, worldData.objects.countries).features;
    const boundaries = mesh(worldData, worldData.objects.countries, (a, b) => a !== b);
    const projection = d3
      .geoNaturalEarth1()
      .fitExtent(
        [
          [62, 44],
          [width - 62, height - 40],
        ],
        sphere
      );
    const path = d3.geoPath(projection);
    const graticule = d3.geoGraticule10();
    const svg = d3.select(svgRef.current);

    svg.selectAll('*').remove();
    svg.attr('viewBox', `0 0 ${width} ${height}`);

    svg
      .append('path')
      .datum(sphere)
      .attr('d', path)
      .attr('fill', MAP_STYLES.ocean)
      .attr('stroke', MAP_STYLES.sphereBorder)
      .attr('stroke-width', 1.05);

    svg
      .append('path')
      .datum(graticule)
      .attr('d', path)
      .attr('fill', 'none')
      .attr('stroke', MAP_STYLES.graticule)
      .attr('stroke-width', 0.75);

    const countriesLayer = svg.append('g').attr('class', 'countries-layer');
    const countryPaths = countriesLayer
      .selectAll('path')
      .data(countries)
      .enter()
      .append('path')
      .attr('d', path)
      .attr('data-market-id', (d) => getExportMarket(d.id)?.id ?? '')
      .attr('fill', (d) => {
        const market = getExportMarket(d.id);
        return market ? REGION_STYLES[market.region] : MAP_STYLES.land;
      })
      .attr('opacity', (d) => (getExportMarket(d.id) ? 1 : 0.96))
      .attr('stroke', 'none')
      .style('cursor', (d) => (getExportMarket(d.id) ? 'pointer' : 'default'));

    svg
      .append('path')
      .datum(boundaries)
      .attr('d', path)
      .attr('fill', 'none')
      .attr('stroke', MAP_STYLES.border)
      .attr('stroke-width', 0.85)
      .attr('pointer-events', 'none');

    const highlightMarket = (market) => {
      svg
        .selectAll(`path[data-market-id='${market.id}']`)
        .interrupt()
        .transition()
        .duration(180)
        .attr('fill', brightenColor(REGION_STYLES[market.region], 0.35));
    };

    const resetMarket = (market) => {
      svg
        .selectAll(`path[data-market-id='${market.id}']`)
        .interrupt()
        .transition()
        .duration(180)
        .attr('fill', REGION_STYLES[market.region]);
    };

    const showTooltip = (event, market) => {
      setTooltip({
        ...getTooltipPosition(event, frameRef.current),
        name: market.name,
        region: market.region,
      });
    };

    countryPaths
      .filter((d) => Boolean(getExportMarket(d.id)))
      .on('mouseenter', function handleCountryEnter(event, datum) {
        const market = getExportMarket(datum.id);
        highlightMarket(market);
        showTooltip(event, market);
      })
      .on('mousemove', (event, datum) => {
        const market = getExportMarket(datum.id);
        showTooltip(event, market);
      })
      .on('mouseleave', function handleCountryLeave(event, datum) {
        const market = getExportMarket(datum.id);
        resetMarket(market);
        setTooltip(null);
      });

    const smallMarketHotspots = EXPORT_MARKETS.filter((market) => {
      const coordinates = projection(market.coordinates);
      return Boolean(coordinates) && ['826', '380', '724'].includes(market.id);
    });

    svg
      .append('g')
      .attr('class', 'market-hotspots')
      .selectAll('circle')
      .data(smallMarketHotspots)
      .enter()
      .append('circle')
      .attr('cx', (market) => projection(market.coordinates)[0])
      .attr('cy', (market) => projection(market.coordinates)[1])
      .attr('r', 12)
      .attr('fill', 'transparent')
      .style('cursor', 'pointer')
      .on('mouseenter', function handleHotspotEnter(event, market) {
        highlightMarket(market);
        showTooltip(event, market);
      })
      .on('mousemove', (event, market) => {
        showTooltip(event, market);
      })
      .on('mouseleave', function handleHotspotLeave(event, market) {
        resetMarket(market);
        setTooltip(null);
      });
  }, [worldData]);

  return (
    <section ref={sectionRef} className="bg-[#091625] py-28 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="map-item">
          <h2 className="max-w-6xl font-display text-[clamp(4rem,8vw,6.5rem)] leading-[0.9] tracking-[-0.04em] text-white">
            Our Global Export Network
          </h2>
        </div>

        <div className="map-item mx-auto mt-24 max-w-5xl text-center">
          <p className="text-xl leading-relaxed text-slate-light md:text-[2rem] md:leading-relaxed">
            ASPIA products are trusted across 6 continents and 40+ countries,
            serving critical industries from oil &amp; gas to marine and infrastructure.
          </p>
        </div>

        <div className="map-item mt-16">
          <div
            ref={frameRef}
            className="relative overflow-hidden rounded-md border border-white/[0.1] bg-[linear-gradient(180deg,#0C1A2C,#091625)] p-4 shadow-[0_24px_70px_rgba(2,8,18,0.5)] sm:p-8"
          >
            <div className="rounded-[4px] border border-white/[0.1] bg-[#0A1728] px-2 py-3 sm:px-4 sm:py-5">
              <svg ref={svgRef} className="h-auto w-full" />
            </div>

            {!worldData && (
              <div className="absolute inset-0 flex items-center justify-center text-sm uppercase tracking-[0.28em] text-slate-light/70">
                Loading Export Map
              </div>
            )}

            {tooltip && (
              <div
                className="pointer-events-none absolute z-10 min-w-[190px] rounded-2xl border border-white/10 bg-[#0B1727]/95 px-4 py-3 text-left shadow-2xl backdrop-blur-md"
                style={{ left: tooltip.x, top: tooltip.y, transform: 'translate(-50%, -110%)' }}
              >
                <div className="text-sm font-semibold uppercase tracking-[0.18em] text-white">
                  {tooltip.name}
                </div>
                <div className="mt-2 text-xs tracking-[0.24em]" style={{ color: MAP_STYLES.text }}>
                  {tooltip.region}
                </div>
                <div className="mt-1 text-xs text-slate-light/80">Export destination</div>
              </div>
            )}
          </div>
        </div>

        <div className="map-item mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
          {LEGEND_ITEMS.map((region) => (
            <div key={region} className="flex items-center gap-4">
              <span className="h-4 w-4 rounded-full" style={{ backgroundColor: REGION_STYLES[region] }} />
              <span className="text-[15px] tracking-[0.18em]" style={{ color: MAP_STYLES.text }}>
                {region}
              </span>
            </div>
          ))}
        </div>

        {isFallbackData && (
          <div className="map-item mt-6 text-center text-xs uppercase tracking-[0.24em] text-slate-light/60">
            Limited offline fallback map is currently being displayed.
          </div>
        )}
      </div>
    </section>
  );
}
