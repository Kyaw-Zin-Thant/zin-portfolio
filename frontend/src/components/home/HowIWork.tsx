'use client';

import { motion } from 'framer-motion';
import SectionHeading from '@/components/SectionHeading';
import { howIWork } from '@/data/portfolio';

export default function HowIWork() {
  return (
    <section className="section-pad">
      <SectionHeading
        label="Approach"
        title="How I work"
        subtitle="Senior engineers are judged on outcomes and how they lift the team — not just syntax."
      />

      <div className="grid gap-4 sm:grid-cols-2">
        {howIWork.map((item, i) => (
          <motion.div
            key={item.title}
            className="card-glass p-6"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07 }}
          >
            <p className="font-display text-lg font-bold">{item.title}</p>
            <p className="mt-2 text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
              {item.text}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
