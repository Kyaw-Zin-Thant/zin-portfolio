'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const projects = [
  {
    title: 'Workbench Platform',
    description:
      'Dealer platform for Cox Automotive. Managed CI/CD, ECS-based microservices, Spring Boot APIs, and Terraform-based infrastructure on AWS.',
    stack: ['React', 'Java', 'Spring Boot', 'AWS', 'Terraform'],
    github: 'https://github.com/kyawzinucsm89/workbench-demo',
  },
  {
    title: 'PTE Exam Practice (AI)',
    description:
      'A Node.js backend that integrates with AWS Transcribe to evaluate English speaking scores for PTE practice. Data is stored in MongoDB.',
    stack: ['Node.js', 'MongoDB', 'Express', 'AWS Transcribe'],
  },
  {
    title: 'PageWerkz Cloud API',
    description:
      'Serverless content platform using Firebase Cloud Functions and Stripe payments to deliver K12 educational content securely.',
    stack: ['Firebase', 'Stripe', 'Node.js', 'Serverless'],
  },
  {
    title: 'Crypto Trading Bot',
    description:
      'Built with CCXT and Binance API to execute auto-trades with adjustable leverage and stop-loss. Deployed as a background daemon.',
    stack: ['Node.js', 'Binance API', 'CCXT'],
  },
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
            {project.github && (
              <Link
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-blue-600 dark:text-blue-300 underline"
              >
                🔗 View on GitHub
              </Link>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
