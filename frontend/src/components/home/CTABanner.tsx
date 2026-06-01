'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiDownload, FiMail } from 'react-icons/fi';
import { profile } from '@/data/portfolio';

export default function CTABanner() {
  const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(profile.mailtoSubject)}`;

  return (
    <section className="section-pad pb-28">
      <motion.div
        className="card-glow card-glass relative overflow-hidden px-8 py-12 text-center sm:px-16 sm:py-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-violet-500/10"
          aria-hidden
        />
        <div className="relative">
          <p className="tag mx-auto mb-4 w-fit">Let&apos;s connect</p>
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Building something ambitious?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base" style={{ color: 'var(--muted)' }}>
            I&apos;m open to senior full stack roles, contract work, and technical collaborations.
            Remote-friendly from {profile.location}.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href={mailto} className="btn-primary">
              <FiMail /> {profile.email}
            </a>
            <a href={profile.resumePath} download className="btn-ghost">
              <FiDownload /> Download resume
            </a>
            <Link href="/contact" className="btn-ghost">
              More ways to reach me
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
