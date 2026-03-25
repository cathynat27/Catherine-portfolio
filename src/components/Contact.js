import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Heart } from 'lucide-react';
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
          className="text-4xl font-bold text-gray-900 dark:text-white mb-8"
        >
          Let's Connect
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-600 dark:text-gray-300 mb-4"
        >
          Open to opportunities
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-lg text-gray-600 dark:text-gray-300 mb-12"
        >
          I'm always interested in discussing new opportunities, collaborations, or just having a chat about technology and innovation.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
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
                className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all group"
              >
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-200 dark:group-hover:bg-primary-900/50 transition-colors">
                  <IconComponent className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 ">
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
                      className="text-sm text-primary-600 dark:text-primary-400 hover:underline break-all"
                    >
                      {item.name}
                    </a>
                  ))
                ) : (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-300 text-sm break-words"
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
          <p className="text-gray-600 dark:text-gray-300 flex items-center justify-center">
            Ready to connect and collaborate on something amazing? Feel free to reach out!
            {/* Built with <Heart className="w-4 h-4 text-red-500 mx-2" /> using React & Tailwind CSS */}
          </p>
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">
            © {new Date().getFullYear()} Catherine Natukunda. All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;