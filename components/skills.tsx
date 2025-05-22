"use client";

import { motion } from "framer-motion";

// Sample skills data
const skills = {
  frontend: [
    "HTML5",
    "JavaScript",
    "TypeScript",
    "React",
    "Tailwind CSS",
    "Bootstrap",
  ],
  backend: ["Node.js", "Express", "MongoDB", "RESTful APIs"],
  tools: [
    "Git/GitHub",
    "VS Code",
    "Figma",
    "Postman",
    "Microsoft Office",
    "Photoshop",
  ],
};

export default function Skills() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1 },
  };

  return (
    <section
      id="skills"
      className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-20"
    >
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary inline-block mb-4">
            My Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold">Technical Skills</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-4 mb-12 max-w-2xl mx-auto">
            I possess a versatile set of technical skills spanning the full web development stack, enabling me to build robust and user-friendly applications. My expertise includes:
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
          >
            <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-7 h-7 text-white"
              >
                <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-6">Frontend Development</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              Crafting responsive, accessible, and engaging user interfaces with a focus on modern JavaScript frameworks and efficient styling solutions.
            </p>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-wrap gap-2"
            >
              {skills.frontend.map((skill) => (
                <motion.span
                  key={skill}
                  variants={item}
                  className="px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium transition-all hover:bg-primary hover:text-white dark:hover:bg-primary"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
          >
            <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-7 h-7 text-white"
              >
                <path d="M2 9.5V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5.5"></path>
                <path d="M2 14.5V20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5.5"></path>
                <path d="M2 12h20"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-6">Backend Development</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              Building secure, scalable, and efficient server-side applications and APIs to power dynamic web experiences.
            </p>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-wrap gap-2"
            >
              {skills.backend.map((skill) => (
                <motion.span
                  key={skill}
                  variants={item}
                  className="px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium transition-all hover:bg-primary hover:text-white dark:hover:bg-primary"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
          >
            <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-7 h-7 text-white"
              >
                <path d="M16.5 9.4l-9-5.19"></path>
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                <path d="M3.27 6.96L12 12.01l8.73-5.05"></path>
                <path d="M12 22.08V12"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-6">Tools & Technologies</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              Utilizing a range of industry-standard tools and platforms to streamline development workflows, ensure code quality, and deliver polished products.
            </p>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-wrap gap-2"
            >
              {skills.tools.map((skill) => (
                <motion.span
                  key={skill}
                  variants={item}
                  className="px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium transition-all hover:bg-primary hover:text-white dark:hover:bg-primary"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
