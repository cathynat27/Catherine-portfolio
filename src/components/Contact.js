import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Contact = () => {
  const { personal } = portfolioData;

  const contactLinks = [
    {
      icon: Mail,
      label: 'Email',
      href: `mailto:${personal.email}`,
      value: personal.email
    },
    {
      icon: Github,
      label: 'GitHub',
      // href: personal.github,
      value: personal.github
    },

    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: personal.linkedin,
      value: personal.linkedin
    }
  ];

  return (
    <section id="contact" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8"
        >
          Let's Connect
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-3 sm:mb-4"
        >
          Open to opportunities
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 mb-8 sm:mb-12 px-4"
        >
          I'm always interested in discussing new opportunities, collaborations, or just having a chat about technology and innovation.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {contactLinks.map((link, index) => {
            const IconComponent = link.icon;
            return (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-gray-900 rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all group"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-primary-200 dark:group-hover:bg-primary-900/50 transition-colors">
                  <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {link.label}
                </h3>
                <div className="flex flex-col gap-1">
                  {Array.isArray(link.value) ? (
                    link.value.map((item, i) => (
                      <a
                        key={i}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs sm:text-sm text-primary-600 dark:text-primary-400 hover:underline break-all"
                      >
                        {item.name}
                      </a>
                    ))
                  ) : (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm break-words"
                    >
                      {link.value}
                    </a>
                  )}
                </div>
              </motion.a>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="border-t border-gray-200 dark:border-gray-700 pt-8"
        >
          <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base text-center px-4">
            Ready to connect and collaborate on something amazing? Feel free to reach out!
          </p>
          <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm mt-2">
            © {new Date().getFullYear()} Catherine Natukunda. All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;