'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Typewriter } from 'react-simple-typewriter';

export default function HeroSection() {
  return (
    <section className="px-6 py-24 max-w-5xl mx-auto text-center">
      <motion.h1
        className="text-4xl sm:text-5xl font-bold text-primary dark:text-white mb-4"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Hi, I'm Kyaw Zin Thant
      </motion.h1>

      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        <Typewriter
          words={[
            'Senior Full Stack Developer',
            'AWS Certified Cloud Builder',
            'React + Node.js Enthusiast',
            'AI & Automation Explorer',
          ]}
          loop
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </p>

      <div className="flex flex-wrap justify-center gap-4 text-sm mb-10">
        <span className="px-3 py-1 bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-200 rounded-full">6+ Years Experience</span>
        <span className="px-3 py-1 bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-200 rounded-full">Full Stack (React + Node)</span>
        <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-700 text-yellow-800 dark:text-yellow-200 rounded-full">AWS & DevOps</span>
        <span className="px-3 py-1 bg-purple-100 dark:bg-purple-800 text-purple-800 dark:text-purple-200 rounded-full">Terraform & Docker</span>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mb-12">
        <Link
          href="https://github.com/Kyaw-Zin-Thant"
          className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800"
        >
          💻 GitHub
        </Link>
        <Link
          href="https://linkedin.com/in/kyaw-zin-thant-16897615a/"
          className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800"
        >
          🔗 LinkedIn
        </Link>
        <Link
          href="./Kyaw_Zin_Thant.pdf"
          className="bg-primary text-white px-6 py-2 rounded hover:bg-blue-800"
          download
        >
          📄 Resume
        </Link>
      </div>

      <motion.div
        className="mt-12 text-gray-700 dark:text-gray-300"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <h2 className="text-2xl font-semibold mb-4">What I Care About</h2>
        <ul className="space-y-2 text-left max-w-xl mx-auto text-sm">
          <li>✅ Writing clean, testable code</li>
          <li>🚀 Building scalable cloud-native apps on AWS</li>
          <li>💡 Solving problems with automation and AI</li>
          <li>🤝 Working well with global teams</li>
          <li>🎯 Always improving — learning, sharing, growing</li>
        </ul>
      </motion.div>
    </section>
  );
}