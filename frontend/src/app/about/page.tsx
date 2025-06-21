'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="px-6 py-20 max-w-4xl mx-auto">
      <motion.h1
        className="text-3xl font-bold text-primary dark:text-white text-center mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h1>

      {/* Bio Section */}
      <motion.div
        className="text-gray-700 dark:text-gray-300 space-y-4 mb-12"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <p>
          Hello! I'm Kyaw Zin Thant, a passionate Full Stack Developer from Myanmar 🇲🇲,
          currently based in Vietnam 🇻🇳. I have over 6 years of experience building
          modern, scalable, and reliable applications for companies across the world.
        </p>
        <p>
          I specialize in both frontend and backend development using React, Node.js,
          Java Spring Boot, and AWS cloud services. I care deeply about writing clean
          code, building strong architecture, and deploying with CI/CD and Infrastructure-as-Code.
        </p>
        <p>
          Outside work, I explore AI chatbots (like Rasa, OpenAI), automate workflows,
          and hit the gym to achieve my 52kg fitness goal. 💪
        </p>
      </motion.div>

      {/* Career Timeline */}
      <motion.div
        className="mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <h2 className="text-xl font-semibold mb-4 text-primary dark:text-white">Career Timeline</h2>
        <ul className="space-y-4 text-sm text-gray-700 dark:text-gray-300 border-l-2 border-primary pl-4">
          <li>
            <span className="font-bold">2023 – Now:</span> Senior Full Stack Developer at FPT Software
          </li>
          <li>
            <span className="font-bold">2022 – 2022:</span> Full Stack Developer at Canal+ Myanmar
          </li>
          <li>
            <span className="font-bold">2021 – 2022:</span> Backend Developer at Alchemist Academy
          </li>
          <li>
            <span className="font-bold">2018 – 2021:</span> Full Stack Developer at Amdon Consulting
          </li>
        </ul>
      </motion.div>

      {/* Values Section */}
      <motion.div
        className="mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <h2 className="text-xl font-semibold mb-4 text-primary dark:text-white">My Core Values</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700 dark:text-gray-300 text-sm">
          <li>✅ Write clean, maintainable code</li>
          <li>🌍 Be globally-minded & remote-ready</li>
          <li>💬 Communicate clearly & proactively</li>
          <li>📈 Always improve through learning</li>
        </ul>
      </motion.div>

      {/* Fun Facts */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <h2 className="text-xl font-semibold mb-4 text-primary dark:text-white">Fun Facts</h2>
        <ul className="text-gray-700 dark:text-gray-300 text-sm space-y-2">
          <li>🇲🇲 Born in Myanmar, living in Vietnam</li>
          <li>💻 Built chatbots, CI/CD pipelines, trading bots</li>
          <li>🎓 Studied Computer Science & AWS Certified</li>
          <li>🏋️‍♂️ Gym 3x a week working toward 52kg goal</li>
        </ul>
      </motion.div>
    </section>
  );
}
