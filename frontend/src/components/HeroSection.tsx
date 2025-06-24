'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FiDownload } from 'react-icons/fi';
import { Typewriter } from 'react-simple-typewriter';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="px-6 py-24 max-w-5xl mx-auto text-center">
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary dark:text-white mb-4"
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
            'Node.js, React.js, Java Spring Boot',
            'NewRelic, AWS, Terraform',
            'GitHub Actions, Docker, Jenkins',
            'CI/CD, DevOps',
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
        <span className="px-3 py-1 bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-200 rounded-full">Full Stack (React, Node, Java Spring Boot)</span>
        <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-700 text-yellow-800 dark:text-yellow-200 rounded-full">AWS & DevOps</span>
        <span className="px-3 py-1 bg-purple-100 dark:bg-purple-800 text-purple-800 dark:text-purple-200 rounded-full">Terraform & Docker</span>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mb-12">
        <Link
          href="https://github.com/Kyaw-Zin-Thant"
          className="bg-black-500 text-white px-6 py-2 rounded hover:bg-gray-800 flex items-center gap-2"
        >
          <FaGithub size={20} />
          <span>GitHub</span>
        </Link>
        <Link
          href="https://linkedin.com/in/kyaw-zin-thant-16897615a/"
          className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800 flex items-center gap-2"
        >
          <FaLinkedin size={20} />
          <span>LinkedIn</span>
        </Link>
        <Link
          href="./Kyaw_Zin_Thant.pdf"
          className="bg-primary text-white px-6 py-2 rounded hover:bg-blue-800 flex items-center gap-2"
          download
        >
          <FiDownload size={18} />
          <span>Resume</span>
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
          <li>💡 Solving problems with automation </li>
          <li>🤝 Working well with global teams</li>
          <li>🎯 Always improving — learning, sharing, growing</li>
        </ul>
      </motion.div>
      <div className="mt-16 text-gray-700 dark:text-gray-300">
        <h2 className="text-2xl font-semibold mb-6 text-center">Tech Stack & Tools</h2>
        <div className="flex flex-wrap justify-center gap-6 text-3xl text-primary dark:text-white">

          {/* Backend */}
          <div className="flex flex-col items-center">
            <span className="text-base mb-1">Node.js</span>
            <i className="devicon-nodejs-plain"></i>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-base mb-1">Java</span>
            <i className="devicon-java-plain"></i>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-base mb-1">Spring Boot</span>
            <i className="devicon-spring-plain"></i>
          </div>
          {/* Frontend */}
          <div className="flex flex-col items-center">
            <span className="text-base mb-1">React</span>
            <i className="devicon-react-original"></i>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-base mb-1">JavaScript</span>
            <i className="devicon-javascript-plain"></i>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-base mb-1">TypeScript</span>
            <i className="devicon-typescript-plain"></i>
          </div>

          {/* DevOps & Cloud */}
          <div className="flex flex-col items-center">
            <span className="text-base mb-1">AWS</span>
            <i className="devicon-amazonwebservices-original"></i>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-base mb-1">Docker</span>
            <i className="devicon-docker-plain"></i>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-base mb-1">Terraform</span>
            <i className="devicon-terraform-plain"></i>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-base mb-1">Jenkins</span>
            <i className="devicon-jenkins-line"></i>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-base mb-1">GitHub Actions</span>
            <FaGithub />
          </div>

          {/* Monitoring & Database */}
          <div className="flex flex-col items-center">
            <span className="text-base mb-1">New Relic</span>
            <Image
              src="/nr.png"
              alt="New Relic"
              width={28}
              height={28}
              className="object-contain"
            />
          </div>
          <div className="flex flex-col items-center">
            <span className="text-base mb-1">PostgreSQL</span>
            <i className="devicon-postgresql-plain"></i>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-base mb-1">MongoDB</span>
            <i className="devicon-mongodb-plain"></i>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-base mb-1">MySQL</span>
            <i className="devicon-mysql-plain colored text-3xl"></i>
          </div>
        </div>
      </div>

    </section>
  );
}