import Link from "next/link";
import { Github, Linkedin, Twitter, Instagram, X, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand and description */}
          <div className="space-y-4">
            <Link
              href="/"
              className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600 dark:from-primary dark:to-purple-400 hover:opacity-90 transition-opacity"
            >
              Suman Sapkota
            </Link>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              I specialize in building fast, high quality and gorgeous websites
              and web applications. Let's bring your ideas to life!
            </p>

            {/* Email with icon */}
            <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
              <Mail className="h-5 w-5" />
              <a
                href="mailto:sumansapkota7777@gmail.com"
                className="hover:text-primary transition-colors"
              >
                sumansapkota7777@gmail.com
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#about"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                >
                  About Me
                </Link>
              </li>
              <li>
                <Link
                  href="#projects"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="#blog"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social and legal */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Connect With Me
              </h3>
              <div className="flex space-x-4">
                <Link
                  href="https://github.com/sumansapkota1010"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary  p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/suman-sapkota-4b0a52272/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary  p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </Link>
                <Link
                  href="https://x.com/sumansapko10"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  aria-label="Twitter"
                >
                  <X size={20} />
                </Link>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-200 dark:border-gray-800">
              <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
                <Link
                  href="#"
                  className="text-gray-500 dark:text-gray-500 hover:text-primary transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="#"
                  className="text-gray-500 dark:text-gray-500 hover:text-primary transition-colors"
                >
                  Terms of Service
                </Link>
                <Link
                  href="#"
                  className="text-gray-500 dark:text-gray-500 hover:text-primary transition-colors"
                >
                  Cookies
                </Link>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-500 mt-4">
                &copy; {currentYear} Suman Sapkota. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
