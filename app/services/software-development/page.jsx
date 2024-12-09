"use client"; // Mark this as a client-side component

import { useParams, useRouter } from "next/navigation";

export default function CourseDetail() {
  const router = useRouter();
  const { id } = useParams();

  const course = courseDetails[id];

  if (!courseDetails[id]) {
    return (
      <div className="text-center text-red-600">
        Sorry, we couldn&apos;t find the course you&apos;re looking for.
      </div>
    );
  }

  return (
    <div className="container mx-auto p-8 space-y-6">
      {/* Course Image */}
      <div
        className="w-full h-64 bg-cover bg-center rounded-lg shadow-lg"
        style={{ backgroundImage: `url(${course.image})` }}
      ></div>

      {/* Course Title */}
      <h1 className="text-4xl font-bold mt-6 text-gray-900 dark:text-white">
        {course.title}
      </h1>

      {/* Course Instructor */}
      {/* <div className="flex items-center mt-4">
    {course.instructor.image ? (
      <Image
        src={course.instructor.image}
        alt={course.instructor.name}
        width={48} // Example size in px
        height={48}
        className="rounded-full mr-4"
      />
    ) : (
      <Image
        src={'/svg/corvoso.svg'}
        alt={'corvosoImg'}
        width={48} // Example size in px
        height={48}
        className="rounded-full mr-4"
      />
    )}
    <div>
      <p className="text-gray-700 dark:text-gray-300 text-lg">
        {course.instructor.name}
      </p>
      <p className="text-gray-500 dark:text-gray-400 text-sm">Instructor</p>
    </div>
  </div> */}

      {/* Course Description */}
      <p className="text-gray-600 dark:text-gray-300 text-lg mt-4 leading-relaxed">
        {course.description}
      </p>

      {/* Detailed Information */}
      <div className="bg-gray-50 dark:bg-background-dark p-6 rounded-lg shadow-md space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Course Details
        </h2>
        <p className="mt-2 text-gray-700 dark:text-gray-300">
          {course.content}
        </p>

        <div className="flex justify-between mt-4">
          <div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">
              Duration
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {course.duration}
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">
              Price
            </h3>
            <p className="text-gray-600 dark:text-gray-300">${course.price}</p>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">
            Sections Covered
          </h3>
          <ul className="list-disc pl-6 mt-2 text-gray-700 dark:text-gray-300 space-y-1">
            {course.sections.map((section, index) => (
              <li key={index}>{section}</li>
            ))}
          </ul>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">
            What You&apos;ll Learn
          </h3>
          <ul className="list-disc pl-6 mt-2 text-gray-700 dark:text-gray-300 space-y-1">
            {course.learnPoints.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Back Button */}
      <button
        onClick={() => router.back()}
        className="mt-8 px-6 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded-lg hover:bg-blue-500 dark:hover:bg-blue-400 transition duration-300"
      >
        Back to Courses
      </button>
    </div>
  );
}

// Sample data
const courseDetails = {
  react: {
    title: "React",
    description:
      "React is a JavaScript library for building user interfaces...",
    content:
      "In this course, you will learn the fundamentals of React including components, hooks, and state management...",
    image: "/svg/react.svg",
    duration: "8 weeks",
    price: "99",
    instructor: {
      name: "John Doe",
      image: "/images/instructor.jpg",
    },
    sections: [
      "Introduction to React",
      "Components and Props",
      "State and Lifecycle",
      "React Hooks",
      "Managing State with Redux",
    ],
    learnPoints: [
      "Understand React fundamentals",
      "Build dynamic UIs",
      "Handle state efficiently",
      "Use hooks to manage component lifecycle",
    ],
    reviews: [
      {
        name: "Jane Smith",
        comment: "Great course, very informative!",
        date: "2024-01-15",
      },
      {
        name: "Bob Brown",
        comment: "Helped me improve my React skills significantly.",
        date: "2024-02-20",
      },
    ],
  },
  python: {
    title: "Python",
    description: "Python is an interpreted, high-level programming language...",
    content:
      "This course covers Python programming basics, object-oriented programming, and advanced concepts like file handling and web scraping...",
    image: "/svg/python.svg",
    duration: "6 weeks",
    price: "89",
    instructor: {
      name: "Alice Johnson",
      image: "/images/instructor2.jpg",
    },
    sections: [
      "Introduction to Python",
      "Data Types and Variables",
      "Functions and Modules",
      "File Handling",
      "Web Scraping with Python",
    ],
    learnPoints: [
      "Master Python basics",
      "Work with files and directories",
      "Create Python scripts for web scraping",
    ],
    reviews: [],
  },
  flutter: {
    title: "Flutter",
    description:
      "Flutter is Google’s UI toolkit for building natively compiled applications for mobile, web, and desktop from a single codebase.",
    content:
      "In this course, you will learn how to build modern, cross-platform applications using Flutter, including widgets, state management, and navigation.",
    image: "/svg/flutter.svg",
    duration: "10 weeks",
    price: "129",
    instructor: {
      name: "Eve Thompson",
      image: "/images/instructor3.jpg",
    },
    sections: [
      "Introduction to Flutter",
      "Understanding Widgets",
      "State Management in Flutter",
      "Navigation and Routing",
      "Deploying Flutter Applications",
    ],
    learnPoints: [
      "Build cross-platform apps with Flutter",
      "Work with Flutter widgets",
      "Manage app state effectively",
      "Deploy apps to mobile and web platforms",
    ],
    reviews: [
      {
        name: "Mark Davis",
        comment: "Loved building my first app with Flutter!",
        date: "2024-03-18",
      },
    ],
  },
  mernStack: {
    title: "MERN Stack",
    description:
      "The MERN stack consists of MongoDB, Express.js, React, and Node.js and is used to build powerful, full-stack web applications.",
    content:
      "This course will take you through building a complete web application using the MERN stack, covering backend development, frontend design, and integration.",
    image: "/svg/mern.svg",
    duration: "12 weeks",
    price: "149",
    instructor: {
      name: "Muhammed Shamal PV",
      image: "/images/instructor4.jpg",
    },
    sections: [
      "Introduction to MERN Stack",
      "Building RESTful APIs with Node.js and Express",
      "Database Integration with MongoDB",
      "Frontend Development with React",
      "Full Stack Project: Integrating Frontend and Backend",
    ],
    learnPoints: [
      "Build RESTful APIs with Express and Node.js",
      "Integrate MongoDB for data storage",
      "Design dynamic frontend with React",
      "Work on a full-stack project",
    ],
    reviews: [
      {
        name: "Sarah Lee",
        comment: "A complete and well-structured course on MERN stack!",
        date: "2024-04-05",
      },
    ],
  },
  nodejs: {
    title: "Node.js",
    description:
      "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows you to build scalable server-side applications.",
    content:
      "This course covers server-side programming using Node.js, including modules, event-driven programming, and building REST APIs.",
    image: "/svg/node-js.svg",
    duration: "7 weeks",
    price: "109",
    instructor: {
      name: "David Green",
      image: "/images/instructor5.jpg",
    },
    sections: [
      "Introduction to Node.js",
      "Modules and NPM",
      "Event-Driven Programming",
      "Building REST APIs with Express",
      "Authentication and Authorization",
    ],
    learnPoints: [
      "Understand Node.js fundamentals",
      "Work with modules and NPM",
      "Build REST APIs with Express",
      "Implement user authentication",
    ],
    reviews: [],
  },
  htmlCssJs: {
    title: "HTML, CSS, JavaScript",
    description:
      "This course introduces you to the core building blocks of web development: HTML, CSS, and JavaScript.",
    content:
      "Learn the basics of web development by building websites with HTML for structure, CSS for styling, and JavaScript for interactivity.",
    image: "/svg/htmlcssjs.svg",
    duration: "6 weeks",
    price: "79",
    instructor: {
      name: "Laura White",
      image: "/images/instructor6.jpg",
    },
    sections: [
      "Introduction to HTML",
      "Styling with CSS",
      "JavaScript Basics",
      "DOM Manipulation",
      "Building a Simple Website",
    ],
    learnPoints: [
      "Create structured web pages with HTML",
      "Style websites using CSS",
      "Add interactivity with JavaScript",
      "Build a complete website from scratch",
    ],
    reviews: [
      {
        name: "Tom Richards",
        comment: "A great start for beginner web developers!",
        date: "2024-02-11",
      },
    ],
  },
  digitalMarketing: {
    title: "Digital Marketing",
    description:
      "This course covers the key principles and strategies used in digital marketing, including SEO, social media marketing, and email campaigns.",
    content:
      "Learn how to effectively promote products or services online using various digital marketing techniques and tools.",
    image: "/svg/digitalmarketing.svg",
    duration: "5 weeks",
    price: "99",
    instructor: {
      name: "Sophia Martin",
      image: "/images/instructor7.jpg",
    },
    sections: [
      "Introduction to Digital Marketing",
      "Search Engine Optimization (SEO)",
      "Social Media Marketing",
      "Email Marketing",
      "Analyzing Campaign Performance",
    ],
    learnPoints: [
      "Understand SEO basics",
      "Create social media marketing strategies",
      "Develop effective email campaigns",
      "Measure and optimize digital marketing performance",
    ],
    reviews: [
      {
        name: "Anna Bell",
        comment: "Very helpful for getting started in digital marketing!",
        date: "2024-03-05",
      },
    ],
  },
};
