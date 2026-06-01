'use client';

import { motion } from 'framer-motion';

type SectionHeadingProps = {
  label?: string;
  title: string;
  subtitle?: string;
  align?: 'center' | 'left';
  className?: string;
};

export default function SectionHeading({
  label,
  title,
  subtitle,
  align = 'center',
  className = '',
}: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <motion.div
      className={`mb-14 max-w-2xl ${alignClass} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {label && <p className="tag mb-4">{label}</p>}
      <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
