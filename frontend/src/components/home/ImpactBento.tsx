'use client';

import { motion } from 'framer-motion';
import SectionHeading from '@/components/SectionHeading';
import { impactAreas } from '@/data/portfolio';

export default function ImpactBento() {
  return (
    <section className="section-pad border-t" style={{ borderColor: 'var(--card-border)' }}>
      <SectionHeading
        label="Impact"
        title="Where I create value"
        subtitle="Four domains. One thread — reliable software at enterprise scale, shipped with modern cloud practices."
      />

      <div className="grid gap-4 sm:grid-cols-2">
        {impactAreas.map((area, i) => (
          <motion.div
            key={area.title}
            className={`card-glass relative overflow-hidden p-6 sm:p-8 ${i === 0 ? 'sm:col-span-2 lg:col-span-1 lg:row-span-1' : ''}`}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
          >
            <div
              className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${area.accent} opacity-80`}
              aria-hidden
            />
            <div className="relative">
              <span className="text-3xl" aria-hidden>
                {area.icon}
              </span>
              <h3 className="font-display mt-4 text-xl font-bold">{area.title}</h3>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
                {area.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
