'use client';

import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';
import ProjectCard from '@/components/ProjectCard';
import SectionHeading from '@/components/SectionHeading';
import { projects } from '@/data/portfolio';

export default function FeaturedWork() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section className="section-pad border-t" style={{ borderColor: 'var(--card-border)' }}>
      <div className="mb-14 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <SectionHeading
            label="Featured work"
            title="Flagship projects"
            subtitle="Deep ownership on products recruiters and hiring managers care about."
            align="left"
            className="!mb-0"
          />
        </div>
        <Link href="/projects" className="btn-ghost shrink-0 self-start sm:self-auto">
          All projects <FiArrowRight />
        </Link>
      </div>

      <div className="-mt-8 grid gap-6 lg:grid-cols-2">
        {featured.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} featured />
        ))}
      </div>
    </section>
  );
}
