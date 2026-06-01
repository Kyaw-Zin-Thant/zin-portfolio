'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import SectionHeading from '@/components/SectionHeading';
import { projects } from '@/data/portfolio';

export default function Projects() {
  const featured = projects.filter((p) => 'featured' in p && p.featured);
  const others = projects.filter((p) => !('featured' in p && p.featured));

  return (
    <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
      <SectionHeading
        title="Projects & impact"
        subtitle="Selected work across insurtech, automotive enterprise, EdTech, and cloud operations."
      />

      {featured.length > 0 && (
        <div className="mb-12">
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400">
            Featured
          </h3>
          <div className="grid gap-6 lg:grid-cols-2">
            {featured.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} large />
            ))}
          </div>
        </div>
      )}

      <div className="grid gap-6 md:grid-cols-2">
        {others.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}

type ProjectItem = (typeof projects)[number];

function ProjectCard({
  project,
  index,
  large = false,
}: {
  project: ProjectItem;
  index: number;
  large?: boolean;
}) {
  return (
    <motion.article
      className={`card-surface flex flex-col p-6 ${large ? 'lg:p-8' : ''}`}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
    >
      <h3 className={`font-semibold text-slate-900 dark:text-white ${large ? 'text-xl' : 'text-lg'}`}>
        {project.title}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
        {project.description}
      </p>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-md bg-sky-50 px-2 py-0.5 text-xs font-medium text-sky-800 dark:bg-sky-950/50 dark:text-sky-300"
          >
            {tech}
          </span>
        ))}
      </div>
      {'url' in project && project.url && (
        <Link
          href={project.url}
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-flex text-sm font-semibold text-sky-600 hover:text-sky-700 dark:text-sky-400"
        >
          Visit site →
        </Link>
      )}
    </motion.article>
  );
}
