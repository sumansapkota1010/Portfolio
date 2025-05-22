import type { Metadata } from "next";
import Hero from "@/components/hero"
import About from "@/components/about"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Contact from "@/components/contact"

export const metadata: Metadata = {
  title: "Suman Sapkota - Full-Stack Web Developer | Portfolio",
  description:
    "Welcome to the portfolio of Suman Sapkota, a Full-Stack Web Developer from Nepal. Explore my projects and skills in creating dynamic web applications.",
  openGraph: {
    title: "Suman Sapkota - Full-Stack Web Developer | Portfolio",
    description:
      "Welcome to the portfolio of Suman Sapkota, a Full-Stack Web Developer from Nepal. Explore my projects and skills in creating dynamic web applications.",
    images: [
      {
        url: "/pp.jpg", // Assuming pp.jpg is in public folder
        width: 800,
        height: 600,
        alt: "Suman Sapkota Profile Picture",
      },
    ],
    type: "website",
    url: "https://yourdomain.com", // Placeholder URL
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Suman Sapkota",
            jobTitle: "Full-Stack Web Developer",
            nationality: "Nepalese",
            url: "https://yourdomain.com", // Placeholder URL
            image: "/pp.jpg",
            sameAs: [
              // "https://www.linkedin.com/in/sumansapkota/",
              // "https://github.com/sumansapkota1010"
            ],
            knowsAbout: [
              "Web Development",
              "Full-Stack Development",
              "MERN Stack",
              "React.js",
              "Next.js",
              "Node.js",
              "Express.js",
              "MongoDB",
              "JavaScript",
              "TypeScript",
              "Tailwind CSS",
            ],
          }),
        }}
      />
    </>
  );
}
