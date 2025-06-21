'use client';

import { motion } from 'framer-motion';

const skills = [
  {
    title: 'Frontend',
    icon: '🎨',
    items: ['React.js', 'Redux', 'TypeScript', 'HTML5', 'CSS3', 'SASS'],
  },
  {
    title: 'Backend',
    icon: '🧠',
    items: ['Node.js', 'Express', 'Java', 'Spring Boot', 'REST APIs', 'GraphQL'],
  },
  {
    title: 'Cloud & DevOps',
    icon: '☁️',
    items: ['AWS EC2', 'Lambda', 'EKS', 'S3', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions', 'Jenkins'],
  },
  {
    title: 'Databases',
    icon: '🗄️',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'DynamoDB'],
  },
  {
    title: 'Tools & Testing',
    icon: '🧰',
    items: ['Postman', 'Jest', 'Firebase', 'Git', 'New Relic', 'Datadog', 'Android Studio'],
  },
];

export default function Skills() {
  return (
    <section className="px-6 py-20 max-w-6xl mx-auto">
      <motion.h1
        className="text-3xl font-bold text-primary dark:text-white text-center mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Technical Skills
      </motion.h1>

      <p className="text-center max-w-xl mx-auto text-gray-600 dark:text-gray-300 mb-12 text-sm">
        I build full-stack applications, automate infrastructure, and integrate cloud-native AI solutions.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((category, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 hover:-translate-y-1 transition"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <h3 className="text-xl font-semibold text-primary dark:text-white mb-3 flex items-center gap-2">
              <span>{category.icon}</span> {category.title}
            </h3>
            <ul className="text-gray-700 dark:text-gray-300 text-sm list-disc list-inside space-y-1">
              {category.items.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Optional: Learning */}
      <div className="mt-16 text-center">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
          🧠 Currently Learning
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          NestJS, Astro, Serverless AI deployment with LangChain & RAG
        </p>
      </div>
    </section>
  );
}
