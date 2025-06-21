'use client';

import { motion } from 'framer-motion';
import { FaEnvelope, FaWhatsapp, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Contact() {
  return (
    <section className="px-6 py-20 max-w-3xl mx-auto text-center">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-primary dark:text-white mb-6"
      >
        Let’s work together or just say hello 👋
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-gray-700 dark:text-gray-300 text-lg space-y-4"
      >
        <p className="flex items-center gap-2">
          <FaEnvelope />
          Email: <a href="mailto:kyawzinucsm89@gmail.com" className="underline">kyawzinucsm89@gmail.com</a>
        </p>

        <p className="flex items-center gap-2">
          <span className="w-5 h-5">
            <img src="/zalo.svg" alt="Zalo" className="w-full h-full object-contain" />
          </span>
          Zalo: <a href="tel:+840559401740" className="underline">+84 055.940.1740</a>
        </p>

        <p className="flex items-center gap-2">
          <FaWhatsapp />
          WhatsApp: <a href="https://wa.me/66959494506" target="_blank" rel="noreferrer" className="underline">+66 959494506</a>
        </p>

        <p className="flex items-center gap-2">
          <FaLinkedin />
          LinkedIn: <a href="https://www.linkedin.com/in/kyaw-zin-thant-16897615a/" target="_blank" rel="noreferrer" className="underline">linkedin.com/in/kyaw-zin-thant</a>
        </p>

        <p className="flex items-center gap-2">
          <FaGithub />
          GitHub: <a href="https://github.com/Kyaw-Zin-Thant" target="_blank" rel="noreferrer" className="underline">github.com/Kyaw-Zin-Thant</a>
        </p>
      </motion.div>
    </section>
  );
}
