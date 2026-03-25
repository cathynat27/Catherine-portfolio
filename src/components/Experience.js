import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Experience = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-8 sm:mb-12 md:mb-16"
        >
          Professional Experience
        </motion.h2>

        <div className="space-y-6 sm:space-y-8">
          {experience.map((job, index) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-900 rounded-xl p-4 sm:p-6 md:p-8 shadow-lg"
            >
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center">
                    <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col gap-2 sm:gap-0 sm:flex-row sm:items-center sm:justify-between mb-3 sm:mb-4">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                        {job.position}
                      </h3>
                      <p className="text-primary-600 dark:text-primary-400 font-medium text-sm sm:text-base">
                        {job.company}
                      </p>
                    </div>
                    <span className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm">
                      {job.period}
                    </span>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3 text-sm sm:text-base">
                      Key Achievements:
                    </h4>
                    <ul className="space-y-1 sm:space-y-2">
                      {job.achievements.map((achievement, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: (index * 0.2) + (idx * 0.1) }}
                          className="text-sm sm:text-base text-gray-600 dark:text-gray-300 flex items-start"
                        >
                          <span className="text-primary-600 dark:text-primary-400 mr-2 mt-0.5 text-sm">•</span>
                          {achievement}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;