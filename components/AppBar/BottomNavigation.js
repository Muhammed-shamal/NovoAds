"use client";

import { motion } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";
import { FaHome, FaInfoCircle } from "react-icons/fa";
import { AiOutlineProduct } from "react-icons/ai";
import { MdCastForEducation, MdContactPage } from "react-icons/md";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import {
  SiFlutter,
  SiHtml5,
  SiMarketo,
  SiNodedotjs,
  SiPython,
  SiReact,
} from "react-icons/si";

const BottomNavigation = () => {
  const pathname = usePathname();
  const theme = useTheme();
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollTop = useRef(0);
  // const [showCourses, setShowCourses] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const longPressTimer = useRef(null);
  const isLongPress = useRef(false); // Track if it was a long press

  const handleScroll = () => {
    const currentScrollTop =
      window.pageYOffset || document.documentElement.scrollTop;

    if (currentScrollTop > lastScrollTop.current) {
      setIsVisible(false); // Scrolling down
    } else {
      setIsVisible(true); // Scrolling up
    }

    lastScrollTop.current = currentScrollTop <= 0 ? 0 : currentScrollTop;
  };

  // const handleCourseButtonPress = () => {
  //   isLongPress.current = false; // Reset long press flag
  //   longPressTimer.current = setTimeout(() => {
  //     isLongPress.current = true; // Long press activated
  //     setShowCourses(true); // Show courses
  //   }, 600); // 600ms for long press
  // };

  // const handleCourseButtonRelease = () => {
  //   clearTimeout(longPressTimer.current);
  //   if (!isLongPress.current) {
  //     // If not long press, it's a short press; navigate to courses page
  //     router.push("/courses");
  //   }
  // };

  // const handleCourseOptionClick = (path) => {
  //   setShowCourses(false); // Hide course options after selection
  //   router.push(path); // Navigate to the selected course
  // };

  const handleServicesClick = () => {
    setShowServices(!showServices); // Toggle the dropdown menu
  };

  const handleServiceOptionClick = (path) => {
    setShowServices(false); // Hide service options after selection
    router.push(path); // Navigate to the selected service
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed bottom-0 left-0 right-0 bg-background dark:bg-background-dark border-t border-gray-200 dark:border-tertiary shadow-lg flex justify-around items-center py-2 md:hidden"
    >
      {/* Navigation buttons */}
      {[
        { path: "/", icon: <FaHome size={24} />, label: "Home" },
        { path: "/about", icon: <FaInfoCircle size={21} />, label: "About Us" },
        {
          path: "/products",
          icon: <AiOutlineProduct size={21} />,
          label: "Products",
        },
        {
          path: "/contact",
          icon: <MdContactPage size={21} />,
          label: "Contact",
        },
      ].map(({ path, icon, label }) => (
        <motion.button
          key={path}
          whileHover={{ scale: 1.1, rotate: [0, 10, -10, 0] }}
          whileTap={{ scale: 0.9 }}
          onClick={() => router.push(path)}
          className={`flex flex-col items-center transition-transform duration-300 ${
            pathname === path
              ? "text-tertiary border-b-2 border-tertiary"
              : "text-gray-500"
          }`}
        >
          {icon}
          <span className="text-xs mt-1">{label}</span>
        </motion.button>
      ))}

      {/* Course button with long press */}
      {/* <motion.button
        onMouseDown={handleCourseButtonPress}
        onTouchStart={handleCourseButtonPress}
        onMouseUp={handleCourseButtonRelease}
        onTouchEnd={handleCourseButtonRelease}
        className={`flex flex-col items-center transition-transform duration-300 ${
          pathname === "/courses"
            ? "text-tertiary border-b-2 border-tertiary"
            : "text-gray-500"
        }`}
      >
        <MdCastForEducation size={21} />
        <span className="text-xs mt-1">Course</span>
      </motion.button> */}

      {/* Vertically displayed courses on long press (with icons for premium look) */}
      {/* {showCourses && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute bottom-[60px] left-1/2 bg-background dark:bg-background-dark border border-gray-200 dark:border-tertiary shadow-lg rounded-lg p-2"
        >
          {[
            {
              path: "/courses/react",
              icon: <SiReact size={24} />,
              label: "React",
            },
            {
              path: "/courses/python",
              icon: <SiPython size={24} />,
              label: "Python",
            },
            {
              path: "/courses/flutter",
              icon: <SiFlutter size={24} />,
              label: "Flutter",
            },
            {
              path: "/courses/mern",
              icon: <SiNodedotjs size={24} />,
              label: "MERN Stack",
            },
            {
              path: "/courses/html-css-js",
              icon: <SiHtml5 size={24} />,
              label: "HTML/CSS/JS",
            },
            {
              path: "/courses/digital-marketing",
              icon: <SiMarketo size={24} />,
              label: "Digital Marketing",
            },
          ].map(({ path, icon }) => (
            <button
              key={path}
              onClick={() => handleCourseOptionClick(path)}
              className="flex items-center justify-center w-full p-3 hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              {icon}
            </button>
          ))}
        </motion.div>
      )} */}

      {/* Services button with dropdown */}
      <motion.button
        onClick={handleServicesClick}
        className={`flex flex-col items-center transition-transform duration-300 ${
          pathname.startsWith("/services")
            ? "text-tertiary border-b-2 border-tertiary"
            : "text-gray-500"
        }`}
      >
        <MdCastForEducation size={21} />
        <span className="text-xs mt-1">Services</span>
      </motion.button>

      {showServices && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute bottom-[60px] left-1/2 bg-background dark:bg-background-dark border border-gray-200 dark:border-tertiary shadow-lg text-secondary dark:text-tertiary rounded-lg p-2"
        >
          {[
            {
              path: "/services/web-development",
              icon: <SiPython size={24} />,
              label: "Web Development",
            },
            {
              path: "/services/app-development",
              icon: <SiFlutter size={24} />,
              label: "Mobile App Development",
            },
            {
              path: "/services/digital-marketing",
              icon: <SiMarketo size={24} />,
              label: "Digital Marketing",
            },
            {
              path: "/services/graphic-design",
              icon: <SiNodedotjs size={24} />,
              label: "Graphic Design",
            },
          ].map(({ path, icon, label }) => (
            <button
              key={path}
              onClick={() => handleServiceOptionClick(path)}
              className="flex items-center justify-center w-full p-3 hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              {icon}
              <span className="ml-2">{label}</span>
            </button>
          ))}
        </motion.div>
      )}
    </motion.div>
  );
};

export default BottomNavigation;
