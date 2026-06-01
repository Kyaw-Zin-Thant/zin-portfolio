'use client';

import { marqueeTech } from '@/data/portfolio';

export default function TechMarquee() {
  const items = [...marqueeTech, ...marqueeTech];

  return (
    <section className="overflow-hidden border-y py-6" style={{ borderColor: 'var(--card-border)' }}>
      <div className="flex animate-marquee whitespace-nowrap">
        {items.map((tech, i) => (
          <span
            key={`${tech}-${i}`}
            className="font-display mx-8 text-sm font-semibold tracking-wide uppercase opacity-50"
            style={{ color: 'var(--muted)' }}
          >
            {tech}
          </span>
        ))}
      </div>
    </section>
  );
}
