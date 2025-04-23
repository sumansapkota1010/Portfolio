"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import profilepic from "../public/profilepic.jpg";

import { ArrowRight } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="py-28 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950"
    >
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary inline-flex items-center gap-2 mb-4">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse"></span>
            ABOUT ME
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative group"
          >
            <div className="absolute -top-6 -left-6 w-full h-full border-2 border-primary rounded-2xl -z-10 group-hover:translate-y-2 group-hover:translate-x-2 transition-transform duration-500"></div>
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-purple-400 dark:border-purple-700 rounded-2xl -z-10 group-hover:-translate-y-2 group-hover:-translate-x-2 transition-transform duration-500"></div>

            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src={profilepic}
                alt="Professional headshot"
                width={600}
                height={800}
                className="object-cover w-full h-auto transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
                Full-Stack Developer
              </h3>

              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                I'm{" "}
                <span className="font-semibold text-gray-800 dark:text-white">
                  Suman Sapkota
                </span>
                , a passionate developer specializing in modern web
                technologies. With expertise in the MERN stack, I build
                performant, scalable applications that deliver exceptional user
                experiences.
              </p>

              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                My journey includes developing full-stack solutions like the{" "}
                <span className="font-medium text-gray-800 dark:text-white">
                  Futsal Booking System
                </span>{" "}
                with payment integration and{" "}
                <span className="font-medium text-gray-800 dark:text-white">
                  EduMeeting Platform
                </span>
                , showcasing my ability to solve complex problems with elegant
                code.
              </p>
            </div>

            <motion.div
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="inline-flex items-center gap-2 text-primary font-medium group"
            >
              <a href="#projects" className="flex items-center gap-2">
                View my projects
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
