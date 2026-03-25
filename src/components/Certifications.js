import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Certifications = () => {
  const { certifications } = portfolioData;

  return (
    <section className="section-padding bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-8 sm:mb-12 md:mb-16"
        >
          Certifications
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-3 sm:mb-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center mr-2 sm:mr-3">
                  <Award className="w-4 h-4 sm:w-5 sm:h-5 text-primary-600 dark:text-primary-400" />
                </div>
                <span className="text-primary-600 dark:text-primary-400 font-semibold text-sm sm:text-base">
                  {cert.year}
                </span>
              </div>
              
              <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-2">
                {cert.name}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed">
                {cert.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;