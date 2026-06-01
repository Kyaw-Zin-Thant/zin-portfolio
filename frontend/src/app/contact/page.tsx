'use client';

import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone, FaWhatsapp } from 'react-icons/fa';
import { FiDownload } from 'react-icons/fi';
import SectionHeading from '@/components/SectionHeading';
import { profile } from '@/data/portfolio';

const contactItems = [
  {
    icon: FaEnvelope,
    label: 'Email',
    href: `mailto:${profile.email}`,
    value: profile.email,
  },
  {
    icon: FaPhone,
    label: 'Mobile (Vietnam)',
    href: `tel:${profile.phone.replace(/\s/g, '')}`,
    value: profile.phone,
  },
  {
    icon: null,
    label: 'Zalo',
    href: profile.zalo,
    value: '+84 055 940 1740',
    customIcon: '/zalo.svg',
  },
  {
    icon: FaWhatsapp,
    label: 'WhatsApp',
    href: profile.whatsapp,
    value: '+66 959 494 506',
    external: true,
  },
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    href: profile.linkedin,
    value: 'linkedin.com/in/kyaw-zin-thant',
    external: true,
  },
  {
    icon: FaGithub,
    label: 'GitHub',
    href: profile.github,
    value: 'github.com/Kyaw-Zin-Thant',
    external: true,
  },
];

export default function Contact() {
  return (
    <section className="mx-auto max-w-2xl px-6 py-16 sm:py-20">
      <SectionHeading
        title="Get in touch"
        subtitle="Interested in senior full stack engineering roles, consulting, or collaboration? I'd love to hear from you."
      />

      <motion.div
        className="space-y-3"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {contactItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            target={item.external ? '_blank' : undefined}
            rel={item.external ? 'noopener noreferrer' : undefined}
            className="card-surface flex items-center gap-4 px-5 py-4 transition hover:border-sky-300 dark:hover:border-sky-800"
          >
            {item.customIcon ? (
              <img src={item.customIcon} alt="" className="h-5 w-5 shrink-0" />
            ) : item.icon ? (
              <item.icon className="shrink-0 text-lg text-sky-600 dark:text-sky-400" />
            ) : null}
            <div className="min-w-0 text-left">
              <p className="text-xs font-medium uppercase tracking-wide text-slate-500 dark:text-slate-500">
                {item.label}
              </p>
              <p className="truncate font-medium text-slate-900 dark:text-white">{item.value}</p>
            </div>
          </a>
        ))}

        <a href={profile.resumePath} download className="btn-primary mt-6 w-full">
          <FiDownload />
          Download 2026 resume (PDF)
        </a>
      </motion.div>
    </section>
  );
}
