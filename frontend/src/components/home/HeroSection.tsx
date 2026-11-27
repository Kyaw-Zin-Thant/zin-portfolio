'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FiArrowRight, FiDownload, FiMail } from 'react-icons/fi';
import { highlights, profile } from '@/data/portfolio';

export default function HeroSection() {
  const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(profile.mailtoSubject)}`;

  return (
    <section className="section-pad !py-10 sm:!py-14">
      <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65 }}
        >
          <p className="tag mb-6">
            <span className="relative mr-2 inline-flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
            </span>
            Available for senior roles · {profile.timezone}
          </p>

          <p className="text-sm font-medium" style={{ color: 'var(--muted)' }}>
            Hello, I&apos;m
          </p>
          <h1 className="font-display mt-2 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            <span className="text-gradient">{profile.name}</span>
          </h1>
          <p className="font-display mt-4 text-xl font-semibold sm:text-2xl">{profile.title} at CoverGo</p>

          <p className="mt-5 max-w-xl text-lg leading-relaxed" style={{ color: 'var(--muted)' }}>
            {profile.tagline}
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="#selected-work" className="btn-primary">
              See my work <FiArrowRight />
            </Link>
            <a href={mailto} className="btn-ghost">
              <FiMail /> Hire me
            </a>
            <a href={profile.resumePath} download className="btn-ghost">
              <FiDownload /> Resume
            </a>
          </div>

          <div className="mt-8 flex gap-3">
            <Link
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost !px-4 !py-2"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </Link>
            <Link
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost !px-4 !py-2"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="relative mx-auto w-full max-w-md lg:max-w-none"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <div className="card-glow relative animate-float">
            <div
              className="absolute -inset-4 rounded-[2rem] opacity-60 blur-2xl"
              style={{
                background: 'linear-gradient(135deg, rgba(34,211,238,0.35), rgba(167,139,250,0.25))',
              }}
            />
            <div className="card-glass relative overflow-hidden rounded-[1.75rem] p-2">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.25rem]">
                <Image
                  src={profile.profileImage}
                  alt={profile.name}
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 420px"
                />
              </div>
              <p className="px-3 py-2 text-sm" style={{ color: 'var(--muted)' }}>
                {profile.location}
              </p>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
            {highlights.map(({ label, value, detail }) => (
              <div key={label} className="card-glass px-3 py-4 text-center">
                <p className="font-display text-2xl font-bold text-gradient">{value}</p>
                <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-wide" style={{ color: 'var(--muted)' }}>
                  {label}
                </p>
                <p className="mt-1 text-[10px] leading-tight opacity-80" style={{ color: 'var(--muted)' }}>
                  {detail}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
