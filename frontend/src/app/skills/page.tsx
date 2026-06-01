'use client';

import { motion } from 'framer-motion';
import SectionHeading from '@/components/SectionHeading';
import { profile, skillCategories, skillProficiency } from '@/data/portfolio';

const levelWidth = {
  expert: '95%',
  advanced: '80%',
  proficient: '65%',
} as const;

export default function Skills() {
  return (
    <div className="section-pad">
      <SectionHeading
        label="Expertise"
        title="Skills & depth"
        subtitle={`What I use in production as a ${profile.title} — honest tiers, not buzzword soup.`}
      />

      <div className="mb-16 space-y-8">
        {skillProficiency.map((group, gi) => (
          <motion.div
            key={group.group}
            className="card-glass p-6 sm:p-8"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: gi * 0.08 }}
          >
            <h3 className="font-display text-lg font-bold">{group.group}</h3>
            <div className="mt-6 space-y-5">
              {group.skills.map((skill) => (
                <div key={skill.name}>
                  <div className="mb-2 flex justify-between text-sm">
                    <span className="font-medium">{skill.name}</span>
                    <span style={{ color: 'var(--muted)' }}>{skill.years}</span>
                  </div>
                  <div className="skill-bar">
                    <motion.div
                      className="skill-bar-fill"
                      initial={{ width: '0%' }}
                      whileInView={{ width: levelWidth[group.level] }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: 'easeOut' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <SectionHeading
        label="Toolbox"
        title="Full stack map"
        subtitle="Technologies I've used across insurtech, automotive, EdTech, and platform work."
        align="left"
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            className="card-glass p-5"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
          >
            <h3 className="flex items-center gap-2 font-display text-sm font-bold">
              <span>{category.icon}</span> {category.title}
            </h3>
            <ul className="mt-3 flex flex-wrap gap-1.5">
              {category.items.map((skill) => (
                <li
                  key={skill}
                  className="rounded-md px-2 py-0.5 text-xs"
                  style={{ background: 'rgba(34, 211, 238, 0.08)', color: 'var(--muted)' }}
                >
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
