'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiArrowUpRight } from 'react-icons/fi';
import type { Project } from '@/data/portfolio';

type ProjectCardProps = {
  project: Project;
  index?: number;
  featured?: boolean;
};

export default function ProjectCard({ project, index = 0, featured = false }: ProjectCardProps) {
  return (
    <motion.article
      className={`card-glow card-glass group flex flex-col p-6 transition hover:shadow-lg hover:shadow-cyan-500/5 ${featured ? 'lg:p-8' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06 }}
    >
      <div className="mb-4 flex items-start justify-between gap-3">
        <span className="tag text-[10px]">{project.domain}</span>
        {project.url && (
          <Link
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg p-2 opacity-60 transition group-hover:opacity-100 hover:bg-cyan-500/10"
            aria-label={`Visit ${project.title}`}
          >
            <FiArrowUpRight className="text-lg text-cyan-400" />
          </Link>
        )}
      </div>

      <h3 className={`font-display font-bold ${featured ? 'text-2xl' : 'text-xl'}`}>
        {project.title}
      </h3>
      <p className="mt-1 text-xs font-medium" style={{ color: 'var(--accent)' }}>
        {project.role}
      </p>
      <p className="mt-3 flex-1 text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
        {project.description}
      </p>

      <ul className="mt-4 space-y-2 border-t pt-4" style={{ borderColor: 'var(--card-border)' }}>
        {project.impacts.map((impact) => (
          <li key={impact} className="flex gap-2 text-sm">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
            <span style={{ color: 'var(--foreground)' }}>{impact}</span>
          </li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap gap-1.5">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-lg px-2 py-0.5 text-xs font-medium"
            style={{ background: 'rgba(34, 211, 238, 0.1)', color: 'var(--accent)' }}
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.article>
  );
}
