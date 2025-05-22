import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Suman Sapkota - Web Developer",
    default: "Suman Sapkota - Web Developer", // Add a default title
  },
  description:
    "Suman Sapkota is a passionate Full-Stack Web Developer from Nepal, specializing in building modern and responsive web applications.",
  keywords: [
    "Suman Sapkota",
    "Web Developer",
    "Full-Stack Developer",
    "React Developer",
    "Next.js Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "Web Development Nepal",
    "Portfolio",
  ],
  generator: "v0.dev",
  verification: {
    google: "xKcKdJLLw2JxwW1beGFrFohVlriLBCf-woZTLUFCH_k",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-white dark:bg-gray-900`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
