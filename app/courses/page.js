'use client'

//import { HoverEffect } from '@/components/ui/Cards/CardHoverEffect';
import React from 'react'
import { CardDemo } from '@/components/ui/Cards/TechnoCards';
import Link from 'next/link';
import { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";


function Courses() {
  let [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="max-w-full_sc p-6 m-2 py-28 bg-gray-50 dark:bg-gray-900">
      <div className="p-5">
        <h2 className="text-center text-3xl pt-3 text-gray-800 dark:text-gray-100">
          FEATURED COURSES
        </h2>
        <p className="pt-3 text-center sm:text-4xl lg:text-3xl font-bold text-indigo-600 dark:text-indigo-400">
          Learn with the Best
        </p>
      </div>
      <CardDemo />
      <div className="max_width_sc flex flex-wrap z-40">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10 lg:p-10">
          {projects.map((item, idx) => (
            <Link
              href={`/courses/${item.id}`}
              key={idx}
              className="relative group block p-2 h-full w-full"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <AnimatePresence>
                {hoveredIndex === idx && (
                  <motion.span
                    className="absolute inset-0 h-full w-full bg-gradient-to-r from-indigo-400 to-blue-500 opacity-80 rounded-3xl"
                    layoutId="hoverBackground"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 0.2 } }}
                    exit={{ opacity: 0, transition: { duration: 0.2 } }}
                  />
                )}
              </AnimatePresence>
              <Card>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </Card>
            </Link>
          ))}
        </div>
      </div>

    </div>
  );
}

export const projects = [
  { id: "react", title: "React", description: "Learn React.js from basics to advanced." },
  { id: "python", title: "Python", description: "Master Python programming for all levels." },
  { id: "nodejs", title: "Node.js", description: "Server-side development with Node.js." },
  { id: "flutter", title: "Flutter", description: "Build cross-platform mobile apps with Flutter." },
  { id: "mernStack", title: "MERN Stack", description: "Full-stack web development with MongoDB, Express, React, and Node.js." },
  { id: "htmlCssJs", title: "HTML, CSS, JavaScript", description: "Learn the fundamentals of web development." },
  { id: "digitalMarketing", title: "Digital Marketing", description: "Master digital marketing strategies including SEO, social media, and email campaigns." }
];


export default Courses;

export const Card = ({ className, children }) => {
  return (
    <div
      className="rounded-2xl h-full w-full p-6 bg-white dark:bg-gray-800 shadow-lg transition-transform transform hover:scale-105 duration-300"
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({ className, children }) => {
  return (
    <h4 className="text-gray-900 dark:text-gray-100 font-bold tracking-wide mt-4">
      {children}
    </h4>
  );
};

export const CardDescription = ({ className, children }) => {
  return (
    <p className="mt-4 text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
      {children}
    </p>
  );
};
