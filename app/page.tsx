import type { Metadata } from "next";
import Hero from "@/components/hero";
import About from "@/components/about";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Contact from "@/components/contact";

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
        url: "/pp.jpg",
        width: 800,
        height: 600,
        alt: "Suman Sapkota Profile Picture",
      },
    ],
    type: "website",
    url: "https://www.sapkota-suman.com.np/",
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
    </>
  );
}
