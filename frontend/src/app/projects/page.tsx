'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

type Project = {
  title: string;
  description: string;
  stack: string[];
  url?: string;
};

const projects: Project[] = [
  {
    "title": "Workbench – Manheim (Cox Automotive)",
    "description": "Internal platform to manage Auction Operations across Manheim, including modules like Sale Setup Tool+, Badger Web, and Title Management. Contributed to Sale Setup Tool+ features such as Lane Management, Inventory Assignment, and Search Request History.",
    "stack": ["Java", "Spring Boot", "React", "PostgreSQL", "REST API"]
  },
  {
    "title": "AWS Infrastructure Monitoring & Alerting",
    "description": "Implemented comprehensive monitoring using New Relic NRQL and Synthetics to track website performance and AWS resources. Integrated alerting workflows with PagerDuty for real-time incident response.",
    "stack": ["New Relic", "PagerDuty", "NRQL", "AWS (EC2, RDS, Aurora, ELB)"]
  },
  {
    title: 'PageWerkz Writer',
    description:
      'Serverless content platform using Firebase Cloud Functions and Stripe payments to deliver K12 educational content securely.',
    stack: ['Node.js', 'AWS Lambda', 'MongoDB', 'Express', 'Angular','CloudConvert','OAuth2'],
    url: 'https://nodma.pagewerkz.com/',
  },
  {
    title: 'STEMWerkz',
    description:
      'An educational web portal, mainly focus on ease-of-access and enjoyable learning for young learners. Inquiry-based approach in lessons(interactive, games) encourages students to be inquisitive, to explore and elaborate the Science concepts learnt, broadening and deepening their knowledge.',
    stack: ['Nodejs', 'MongoDB', 'AWS', 'Terraform'],
    url: 'https://www.stemwerkz.org',
  },
  {
    title: 'ClassWerkz',
    description:
      'class management software developed to enable you to manage various functions with your key stakeholders. With ClassWerkz, you can track attendance, schedule classes, and communicate with stakeholders by sending notifications and gathering comments and feedback easily, all with a few clicks',
    stack: ['Node.js', 'MongoDB', 'Express', 'Angular'],
    url: 'https://www.classwerkz.com/',
  },
  {
    title: 'PTE Alchemist Academy',
    description:
      'Developed the backend for an online PTE exam platform with Stripe payment integration, role-based access control, and admin question management. Implemented AWS Transcribe for Speaking tests and generated mock test result PDFs.',
    stack: ['Node.js', 'MongoDB', 'Express', 'AWS Transcribe', 'PDFKit', 'Angular', 'Stripe'],
    url: 'https://pte.alchemistacademy.com.au/',
  },
  {
    title: 'Intelligent Fiber Line Management System',
    description:
      'Intelligent, Powerful System for Managing and Monitoring Nationwide Fiber-optic Communication with very friendly User Interface.',
    stack: ['jQuery', 'Java', 'Spring', 'Leaflet', 'PostGIS']
  }
];

export default function Projects() {
  return (
    <section className="px-6 py-20 max-w-6xl mx-auto">
      <motion.h1
        className="text-3xl font-bold text-primary dark:text-white text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Projects & Case Studies
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 flex flex-col justify-between hover:-translate-y-1 transition"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div>
              <h3 className="text-xl font-semibold text-primary dark:text-white mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.stack.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs px-2 py-1 rounded bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            {project.url && (
              <Link
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-blue-600 dark:text-blue-300 underline"
              >
                Visit Project
              </Link>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
