'use client';

import { motion } from 'framer-motion';
import CompanyLogo from '@/components/CompanyLogo';
import SectionHeading from '@/components/SectionHeading';
import { certificates, education, experience, profile } from '@/data/portfolio';

export default function About() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-16 sm:py-20">
      <SectionHeading
        title="About"
        subtitle={`${profile.title} from Myanmar, based in Vietnam. I design and ship enterprise full stack systems with cloud-native practices and modern AI-assisted workflows.`}
      />

      <motion.div
        className="card-surface space-y-4 p-6 text-slate-700 leading-relaxed dark:text-slate-300"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <p>
          I have {profile.yearsExperience} years building scalable web platforms for global teams — from
          insurtech and automotive enterprise software to EdTech APIs and fiber network operations.
        </p>
        <p>
          My recent work at CoverGo centers on the Apeiron Access Portal: core insurance modules, secure
          identity flows, and AI automation including meeting transcription and intelligent PDF processing.
          Previously at FPT Software, I delivered Workbench features for Manheim while driving migrations to
          Okta, New Relic, GitHub Actions, and Terraform-managed infrastructure.
        </p>
        <p>
          I work fluently in English, collaborate well in large distributed teams, and stay hands-on with
          Vue, React, Node.js, Java/Spring Boot, and AWS.
        </p>
      </motion.div>

      <div className="mt-16">
        <SectionHeading title="Experience" align="left" subtitle="Recent roles aligned with my 2026 CV." />

        <ol className="relative space-y-0 border-l border-slate-200 pl-8 dark:border-slate-700">
          {experience.map((job, index) => (
            <motion.li
              key={job.company}
              className="pb-10 last:pb-0"
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <span className="absolute -left-[5px] mt-1.5 h-2.5 w-2.5 rounded-full bg-sky-500 ring-4 ring-slate-50 dark:ring-slate-950" />
              <div className="card-surface -ml-2 p-5 sm:ml-0">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                  <CompanyLogo src={job.logo} company={job.company} />
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-semibold uppercase tracking-wide text-sky-600 dark:text-sky-400">
                      {job.period}
                    </p>
                    <h3 className="mt-1 text-lg font-semibold text-slate-900 dark:text-white">
                      {job.role}
                    </h3>
                    <a
                      href={job.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-slate-600 hover:text-sky-600 dark:text-slate-400 dark:hover:text-sky-400"
                    >
                      {job.company}
                    </a>
                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{job.summary}</p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {job.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md bg-slate-100 px-2 py-0.5 text-xs text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>

      <motion.div
        className="card-surface mt-12 p-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Education</h3>
        <p className="mt-2 font-medium text-slate-800 dark:text-slate-200">{education.degree}</p>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          {education.school} · {education.period} · {education.country}
        </p>
      </motion.div>

      <div className="mt-16">
        <SectionHeading title="Certifications" align="left" />
        <div className="grid gap-6 sm:grid-cols-2">
          {certificates.map((cert) => (
            <motion.a
              key={cert.title}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="card-surface group block overflow-hidden p-4 transition hover:border-sky-300 dark:hover:border-sky-800"
              whileHover={{ y: -2 }}
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="h-36 w-full rounded-lg border border-slate-100 object-contain dark:border-slate-800"
              />
              <h3 className="mt-3 font-semibold text-slate-900 group-hover:text-sky-600 dark:text-white dark:group-hover:text-sky-400">
                {cert.title}
              </h3>
              <p className="text-sm text-slate-500">Udacity · {cert.year}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
