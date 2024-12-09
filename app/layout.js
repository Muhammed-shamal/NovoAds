import { Inter, Architects_Daughter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Navbar/Navbar";
import { ThemeProvider } from "next-themes";
import Footer from "@/components/Footer/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";

import BottomNavigation from "@/components/AppBar/BottomNavigation";
import React from "react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const architects_daughter = Architects_Daughter({
  subsets: ["latin"],
  variable: "--font-architects-daughter",
  weight: "400",
  display: "swap",
});

export const metadata = {
  title: "NovoAds",
  description: [
    "Data Structures, Algorithms, Python, Java, C, C++, JavaScript, Android Development, SQL, Data Science, Machine Learning, PHP, Web Development, System Design, Tutorial, Technical Blogs, Interview Experience, Interview Preparation, Programming, Competitive Programming, Jobs, Coding Contests, GATE CSE, HTML, CSS, React, NodeJS, Placement, Aptitude, Quiz, Computer Science, Programming Examples, Corvoso Courses, Puzzles, SSC, Banking, UPSC, Commerce, Finance, CBSE, School, k12, General Knowledge, News, Mathematics, Exams,+2,Commerce,SSLC",
  ].join(", "),

  keywords: [
    "Data Structures",
    "Algorithms",
    "Python",
    "Java",
    "C",
    "C++",
    "JavaScript",
    "Android Development",
    "SQL",
    "Data Science",
    "Machine Learning",
    "PHP",
    "Web Development",
    "System Design",
    "Tutorial",
    "Technical Blogs",
    "Interview Experience",
    "Interview Preparation",
    "Programming",
    "Competitive Programming",
    "Jobs",
    "Coding Contests",
    "GATE CSE",
    "HTML",
    "CSS",
    "React",
    "NodeJS",
    "Placement",
    "Aptitude",
    "Quiz",
    "Computer Science",
    "Programming Examples",
    "Corvoso Courses",
    "Puzzles",
    "SSC",
    "Banking",
    "UPSC",
    "Commerce",
    "Finance",
    "CBSE",
    "School",
    "k12",
    "General Knowledge",
    "News",
    "Mathematics",
    "Exams",
    "+2",
    "Commerce",
    "SSLC",
  ].join(", "),

  icons: {
    icon: {
      media: "(prefers-color-scheme: light)",
      url: "/brand-logo/svg/acme.svg",
      href: "/brand-logo/svg/acme.svg",
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class">
          <Header />
          {children}
          <Footer />

          {/* Render BottomNavigation only on mobile view */}
          <div className="md:hidden">
            <BottomNavigation />
          </div>
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
