'use client';

import { motion } from 'framer-motion';

const certificates = [
  {
    title: 'Udacity: AWS Cloud Developer',
    image: './Cloud_Developer_Udacity.png',
    link: 'https://www.udacity.com/certificate/e/949a42ca-bb7c-11ee-b10d-8fa99f98dd25',
  },
  {
    title: 'Udacity: Data Engineering with AWS',
    image: './DE_Udacity.png',
    link: 'https://www.udacity.com/certificate/e/484638b8-df43-11ed-8b4d-f79403446128',
  }
];

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
        <ul className="space-y-6">
          {[
            {
              year: '2023 Apr – 2025 Jun',
              title: 'Senior Software Engineer (Full-Time)',
              company: 'FPT Software',
              logo: './fpt.png',
              website: 'https://www.fpt-software.com/',
            },
            {
              year: '2022 May – 2022 Nov',
              title: 'Full Stack Developer (Full-Time)',
              company: 'CANAL+ Myanmar FG',
              logo: './canalplus.png',
              website: 'https://www.canalplus-myanmar.com/',
            },
            {
              year: '2021 Dec – 2022 May',
              title: 'Back End Developer (Contract)',
              company: 'Alchemist Academy',
              logo: './alchemist.png',
              website: 'https://alchemistacademy.com.au/',
            },
            {
              year: '2018 Oct – 2021 Nov',
              title: 'Back End Developer (Full-Time)',
              company: 'Amdon Consulting Pte Ltd',
              logo: './amdon.png',
              website: 'https://www.amdon.com/',
            },
            {
              year: '2017 Oct – 2018 Sep',
              title: 'Java Developer (Full-Time)',
              company: 'ICT Star Group Myanmar Co., Ltd.',
              logo: './isgm.png',
              website: 'https://www.isgm2.com/',
            },
            {
              year: '2017 May – 2017 Jul',
              title: 'Developer (Internship)',
              company: 'AWITD',
              logo: './awitd.png',
              website: '#',
            },
          ].map(({ year, title, company, logo, website }, index) => (
            <li key={index} className="flex items-center space-x-6">
              <img
                src={logo}
                alt={company + ' logo'}
                className="w-14 h-14 object-contain rounded-md border shadow-sm bg-white p-1"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
              <div className="text-sm text-gray-700 dark:text-gray-300 leading-snug">
                <p className="font-semibold text-primary dark:text-white">
                  {year}
                </p>
                <p>
                  {title} at{' '}
                  <a
                    href={website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-blue-600 hover:underline dark:text-blue-400"
                  >
                    {company}
                  </a>
                </p>
              </div>
            </li>
          ))}
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

      {/* Certifications Preview */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mt-12"
      >
        <h2 className="text-xl font-semibold mb-6 text-primary dark:text-white">
          🎓 Certifications
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Static Bachelor's Degree (PDF Preview) */}
          <motion.div
            className="bg-white dark:bg-gray-800 rounded shadow p-4 space-y-3"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-sm font-semibold">Bachelor's Degree</h3>
            <iframe
              src="./Graduation.pdf"
              className="w-full h-72 border rounded shadow"
              title="Bachelor Degree PDF"
            ></iframe>
          </motion.div>

          {/* Dynamic Udacity Certs */}
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 rounded shadow p-4 space-y-3"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-40 object-contain border rounded"
              />
              <h3 className="text-sm font-semibold text-gray-800 dark:text-white">
                {cert.title}
              </h3>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 text-sm underline inline-block"
              >
                🔗 View Certificate
              </a>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Fun Facts */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <h2 className="text-xl font-semibold mb-4 text-primary dark:text-white">Fun Facts</h2>
        <ul className="text-gray-700 dark:text-gray-300 text-sm space-y-2">
          <li>🇲🇲 Born in Myanmar, currently living and working in Vietnam 🇻🇳</li>
          <li>⚙️ Integrated CI/CD pipelines to streamline backend and full-stack app deployments</li>
          <li>🎓 Earned a Bachelor's degree in Software Engineering from the University of Computer Studies, Mandalay</li>
          <li>🏋️‍♂️ Regular at the gym 3x a week, aiming to hit a personal goal of 52kg</li>
        </ul>
      </motion.div>

    </section>
  );
}
