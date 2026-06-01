'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FiArrowRight, FiDownload, FiMapPin } from 'react-icons/fi';
import { Typewriter } from 'react-simple-typewriter';
import {
  highlights,
  profile,
  techStackIcons,
  typewriterRoles,
  values,
} from '@/data/portfolio';

export default function HeroSection() {
  return (
    <div className="hero-glow">
      <section className="mx-auto max-w-6xl px-6 pb-20 pt-16 sm:pt-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-sky-200/80 bg-sky-50/80 px-4 py-1.5 text-sm font-medium text-sky-800 dark:border-sky-900 dark:bg-sky-950/40 dark:text-sky-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-sky-500" />
            </span>
            Open to senior full stack opportunities
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl md:text-6xl dark:text-white">
            {profile.name}
          </h1>

          <p className="mt-4 text-xl font-semibold text-sky-600 sm:text-2xl dark:text-sky-400">
            {profile.title}
          </p>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            <Typewriter
              words={typewriterRoles}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={55}
              deleteSpeed={40}
              delaySpeed={1200}
            />
          </p>

          <p className="mx-auto mt-3 flex items-center justify-center gap-1.5 text-sm text-slate-500 dark:text-slate-500">
            <FiMapPin className="shrink-0" />
            {profile.location}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4"
        >
          {highlights.map(({ label, value }) => (
            <div key={label} className="card-surface px-4 py-5 text-center">
              <p className="text-2xl font-bold text-slate-900 dark:text-white">{value}</p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400">
                {label}
              </p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
          className="mt-10 flex flex-wrap justify-center gap-3"
        >
          <Link href="/projects" className="btn-primary">
            View projects
            <FiArrowRight />
          </Link>
          <a href={profile.resumePath} download className="btn-secondary">
            <FiDownload />
            2026 Resume
          </a>
          <Link href={profile.github} target="_blank" rel="noopener noreferrer" className="btn-secondary">
            <FaGithub size={18} />
            GitHub
          </Link>
          <Link href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="btn-secondary">
            <FaLinkedin size={18} />
            LinkedIn
          </Link>
        </motion.div>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mt-20 max-w-3xl"
        >
          <h2 className="mb-6 text-center text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            What I bring to the team
          </h2>
          <ul className="grid gap-3 sm:grid-cols-2">
            {values.map((item) => (
              <li
                key={item}
                className="card-surface flex items-start gap-3 px-4 py-3 text-sm text-slate-700 dark:text-slate-300"
              >
                <span className="mt-0.5 text-sky-500">→</span>
                {item}
              </li>
            ))}
          </ul>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h2 className="mb-8 text-center text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Core stack
          </h2>
          <div className="flex flex-wrap justify-center gap-8 text-slate-700 dark:text-slate-200">
            {techStackIcons.map(({ name, devicon }) => (
              <div key={name} className="flex flex-col items-center gap-2">
                <i className={`${devicon} text-4xl`} />
                <span className="text-xs font-medium text-slate-500 dark:text-slate-400">{name}</span>
              </div>
            ))}
          </div>
        </motion.section>
      </section>
    </div>
  );
}
