'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import CompanyLogo from '@/components/CompanyLogo';
import SectionHeading from '@/components/SectionHeading';
import { certificates, education, experience, profile } from '@/data/portfolio';

export default function About() {
  return (
    <div className="section-pad mx-auto max-w-4xl">
      <SectionHeading
        label="About"
        title="The engineer behind the commits"
        subtitle={`${profile.title} from Myanmar, now in Vietnam — building enterprise systems with cloud-native discipline.`}
      />

      <motion.div
        className="card-glass space-y-4 p-6 leading-relaxed sm:p-8"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <p style={{ color: 'var(--muted)' }}>
          I have {profile.yearsExperience} years shipping for global teams — insurtech, automotive, EdTech,
          and telco. Today at <strong className="text-cyan-500">CoverGo</strong>, I own full stack modules on
          the Apeiron Access Portal with AI automation and secure identity. Before that at{' '}
          <strong>FPT Software</strong>, I delivered Workbench for Manheim and led platform migrations (Okta,
          New Relic, GitHub Actions, Terraform).
        </p>
        <p style={{ color: 'var(--muted)' }}>
          Fluent in English. Comfortable in squads of 5 or 140. Hands-on with Vue, React, Node.js, Java/Spring
          Boot, and AWS every week.
        </p>
      </motion.div>

      <div className="mt-20">
        <SectionHeading
          label="Career"
          title="Experience"
          subtitle="Aligned with my 2026 CV."
          align="left"
        />

        <ol className="relative border-l pl-8" style={{ borderColor: 'var(--card-border)' }}>
          {experience.map((job, index) => (
            <motion.li
              key={job.company}
              className="pb-10 last:pb-0"
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <span className="absolute -left-[5px] mt-2 h-2.5 w-2.5 rounded-full bg-cyan-400 ring-4 ring-[var(--background)]" />
              <div className="card-glass -ml-2 p-5 sm:ml-0">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                  <CompanyLogo src={job.logo} company={job.company} />
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-semibold uppercase tracking-wide text-cyan-500">
                      {job.period}
                    </p>
                    <h3 className="font-display mt-1 text-lg font-bold">{job.role}</h3>
                    <a
                      href={job.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium opacity-70 hover:text-cyan-500"
                    >
                      {job.company}
                    </a>
                    <p className="mt-2 text-sm" style={{ color: 'var(--muted)' }}>
                      {job.summary}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {job.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md px-2 py-0.5 text-xs"
                          style={{ background: 'rgba(34, 211, 238, 0.1)', color: 'var(--accent)' }}
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
        className="card-glass mt-12 p-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h3 className="font-display text-lg font-bold">Education</h3>
        <p className="mt-2 font-medium">{education.degree}</p>
        <p className="text-sm" style={{ color: 'var(--muted)' }}>
          {education.school} · {education.period} · {education.country}
        </p>
      </motion.div>

      <div className="mt-20">
        <SectionHeading label="Credentials" title="Certifications" align="left" />
        <div className="grid gap-6 sm:grid-cols-2">
          {certificates.map((cert) => (
            <motion.a
              key={cert.title}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="card-glass group block overflow-hidden p-4 transition hover:shadow-lg hover:shadow-cyan-500/10"
              whileHover={{ y: -2 }}
            >
              <Image
                src={cert.image}
                alt={cert.title}
                width={480}
                height={144}
                className="h-36 w-full rounded-lg object-contain"
                style={{ border: '1px solid var(--card-border)' }}
              />
              <h3 className="mt-3 font-display font-semibold group-hover:text-cyan-500">{cert.title}</h3>
              <p className="text-sm" style={{ color: 'var(--muted)' }}>
                Udacity · {cert.year}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
}
