'use client';

import ProjectCard from '@/components/ProjectCard';
import SectionHeading from '@/components/SectionHeading';
import { projects } from '@/data/portfolio';

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <div className="section-pad">
      <SectionHeading
        label="Portfolio"
        title="Projects & impact"
        subtitle="Every card tells what I built, how I contributed, and the stack behind it."
      />

      <p className="tag mb-6 w-fit">Featured</p>
      <div className="mb-16 grid gap-6 lg:grid-cols-2">
        {featured.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} featured />
        ))}
      </div>

      <p className="tag mb-6 w-fit">More work</p>
      <div className="grid gap-6 md:grid-cols-2">
        {others.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </div>
  );
}
