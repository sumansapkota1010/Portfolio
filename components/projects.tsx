"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Futsal Booking System",
    description:
      "Futsal Booking System is a full-stack MERN app with Khalti payments, JWT auth, admin/user dashboards, slot booking, email alerts, and responsive design.",
    image: "/futsal.png",
    tags: [
      "React.js",
      "Tailwind CSS",
      "Express.js",
      "MongoDB",
      "Khalti Payment",
      "Nodemailer",
    ],
    liveUrl: "#",
    githubUrl:
      "https://github.com/sumansapkota1010/Futsal-Booking-System-Frontend.git",
  },
  {
    id: 2,
    title: "Education Meeting Platform Clone",
    description:
      "A responsive MERN stack app with React, Redux, and Tailwind CSS. Features secure auth, meetings/courses dashboard, and optimized image uploads.",
    image: "/EduMeeting.png",
    tags: ["React", "Redux Toolkit", "Node js", "Tailwind Css"],
    liveUrl: "https://edu-meeting-front-end.vercel.app/",
    githubUrl: "https://github.com/sumansapkota1010/Edu-meeting-FrontEnd.git",
  },
];

export default function Projects() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="projects" className="bg-gray-50 dark:bg-gray-800">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary inline-block mb-4">
            My Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold">Featured Projects</h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={item}
              className="group relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 z-10"></div>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Animated buttons on hover */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  className="absolute inset-0 flex items-center justify-center gap-4 z-20"
                >
                  {project.liveUrl !== "#" && (
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-colors shadow-lg hover:shadow-primary/30"
                    >
                      <ExternalLink size={18} />
                      View Live
                    </Link>
                  )}

                  {project.githubUrl !== "#" && (
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-full font-medium hover:bg-gray-700 transition-colors shadow-lg hover:shadow-gray-800/30"
                    >
                      <Github size={18} />
                      See Code
                    </Link>
                  )}
                </motion.div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
