import React from 'react';
import { motion } from 'framer-motion';
// import { ExternalLink, Github } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Projects = () => {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="section-padding bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-8 sm:mb-12 md:mb-16"
        >
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 sm:p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="mb-4">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
              </div>

              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="mb-4 sm:mb-6">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3 text-sm sm:text-base">
                  Technologies Used:
                </h4>
                <div className="flex flex-wrap gap-1 sm:gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 sm:px-3 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-xs sm:text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-4 sm:mb-6">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3 text-sm sm:text-base">
                  Key Contributions:
                </h4>
                <ul className="space-y-1 sm:space-y-2">
                  {project.contributions.map((contribution, idx) => (
                    <li key={idx} className="text-sm sm:text-base text-gray-600 dark:text-gray-300 flex items-start">
                      <span className="text-primary-600 dark:text-primary-400 mr-2">•</span>
                      {contribution}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-gray-200 dark:border-gray-700 pt-3 sm:pt-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm sm:text-base">
                  Impact:
                </h4>
                <p className="text-primary-600 dark:text-primary-400 font-medium text-sm sm:text-base">
                  {project.impact}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;