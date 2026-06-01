'use client';

import { motion } from 'framer-motion';
import SectionHeading from '@/components/SectionHeading';
import { profile, skillCategories } from '@/data/portfolio';

export default function Skills() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
      <SectionHeading
        title="Technical skills"
        subtitle={`Hands-on stack for ${profile.title} roles — from APIs and microservices to IaC, observability, and AI-assisted delivery.`}
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            className="card-surface p-6 transition hover:border-sky-200 dark:hover:border-sky-900"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.06 }}
          >
            <h3 className="flex items-center gap-2 text-lg font-semibold text-slate-900 dark:text-white">
              <span aria-hidden>{category.icon}</span>
              {category.title}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {category.items.map((skill) => (
                <li
                  key={skill}
                  className="rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
