import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Eye } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Hero = () => {
  const { personal } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="min-h-[85vh] flex items-center justify-center bg-gradient-to-br from-primary-50 to-white dark:from-gray-900 dark:to-gray-800 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          <motion.div variants={itemVariants} className="flex flex-col items-center">
            {/* Profile Image */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              <div className="relative">
                <div className="w-32 h-80 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-primary-200 dark:border-primary-800 shadow-xl">
                  <img
                    src="/passport.jpeg"
                    alt="Catherine Natukunda"
                    className="w-full h-full object-cobtain"
                    onError={(e) => {
                      e.target.src = `data:image/svg+xml;base64,${btoa(`
                        <svg width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect width="160" height="160" fill="#E5E7EB"/>
                          <circle cx="80" cy="60" r="25" fill="#9CA3AF"/>
                          <path d="M40 140C40 115 57.9 95 80 95C102.1 95 120 115 120 140" fill="#9CA3AF"/>
                        </svg>
                      `)}`;
                    }}
                  />
                </div>
                {/* Decorative ring */}
                <div className="absolute -inset-2 rounded-full border-2 border-primary-300 dark:border-primary-700 opacity-30 animate-pulse"></div>
              </div>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4 text-center">
              {personal.name}
            </h1>
            <h2 className="text-2xl md:text-3xl text-primary-600 dark:text-primary-400 font-medium mb-6 text-center">
              {personal.title}
            </h2>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            {personal.tagline}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary flex items-center gap-2"
            >
              <Eye size={20} />
              View Projects
            </motion.a>

            <motion.a
              href="/CATHERINE NATUKUNDA CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary flex items-center gap-2"
            >
              <Eye size={20} />
              View CV
            </motion.a>

            {/* <motion.a
              href="/Catherine Natukunda CV.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary flex items-center gap-2"
            >
              <Download size={20} />
              Download CV
            </motion.a> */}

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary flex items-center gap-2"
            >
              <Mail size={20} />
              Contact Me
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;