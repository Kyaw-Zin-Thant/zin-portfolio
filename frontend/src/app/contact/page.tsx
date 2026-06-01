'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone, FaWhatsapp } from 'react-icons/fa';
import { FiDownload, FiMail } from 'react-icons/fi';
import CTABanner from '@/components/home/CTABanner';
import SectionHeading from '@/components/SectionHeading';
import { profile } from '@/data/portfolio';

const contactItems = [
  {
    icon: FaEnvelope,
    label: 'Email',
    href: `mailto:${profile.email}?subject=${encodeURIComponent(profile.mailtoSubject)}`,
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
  const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(profile.mailtoSubject)}`;

  return (
    <>
      <div className="section-pad mx-auto max-w-2xl pb-8">
        <SectionHeading
          label="Contact"
          title="Let's talk"
          subtitle="Recruiting, consulting, or just want to say hi — I reply within 1–2 business days."
        />

        <motion.a
          href={mailto}
          className="btn-primary mb-8 flex w-full sm:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <FiMail /> Quick email
        </motion.a>

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
              className="card-glass flex items-center gap-4 px-5 py-4 transition hover:shadow-lg hover:shadow-cyan-500/5"
            >
              {item.customIcon ? (
                <Image src={item.customIcon} alt="Zalo" width={22} height={22} className="shrink-0" />
              ) : item.icon ? (
                <item.icon className="shrink-0 text-xl text-cyan-500" />
              ) : null}
              <div className="min-w-0 text-left">
                <p className="text-xs font-semibold uppercase tracking-wide" style={{ color: 'var(--muted)' }}>
                  {item.label}
                </p>
                <p className="truncate font-medium">{item.value}</p>
              </div>
            </a>
          ))}

          <a href={profile.resumePath} download className="btn-ghost mt-4 flex w-full">
            <FiDownload /> Download 2026 resume
          </a>
        </motion.div>

        <p className="mt-8 text-center text-sm" style={{ color: 'var(--muted)' }}>
          {profile.location} · {profile.timezone} · Remote-friendly
        </p>
      </div>
      <CTABanner />
    </>
  );
}
