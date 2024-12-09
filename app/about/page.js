
'use client';

import Image from 'next/image';
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import {SiGithub} from 'react-icons/si'

export default function About() {
  return (
    <div className="min-h-screen bg-background dark:bg-background-dark text-secondary dark:text-background p-8 sm:p-10">
  <div className="max-w-7xl mx-auto py-20 md:py-36 px-4 sm:px-6">
    {/* Grid Layout */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
      {/* Profile Image */}
      <div className="flex justify-center">
        <div className="w-36 h-36 sm:w-40 sm:h-40 md:w-56 md:h-56 rounded-full bg-teal-500 flex items-center justify-center shadow-lg">
          <Image
            src="/svg/next-js.svg" // Your profile image path
            alt="NovoAds"
            width={200}
            height={200}
            className="rounded-full object-cover"
          />
        </div>
      </div>

      {/* Text Content */}
      <div className="text-center md:text-left space-y-4">
        <h2 className="text-2xl sm:text-3xl font-semibold">NovoAds</h2>
        <p className="text-base sm:text-lg text-tertiary dark:text-quaternary">Innovative Solutions for the Future</p>
        <p className="text-sm sm:text-base leading-relaxed">
          At NovoAds, we aim to revolutionize the world with cutting-edge technology and research. We
          specialize in clean energy solutions, advanced atmospheric modeling, and the development of futuristic
          hardware.
        </p>
        <p className="text-sm sm:text-base leading-relaxed">
          Our research team is dedicated to solving complex problems in wind dynamics, pollution control, and
          manufacturing innovative products. In our free time, we also enjoy developing open-source tools and community outreach.
        </p>
        <p className="text-sm sm:text-base leading-relaxed">
          Join us in pushing the boundaries of what’s possible in technology and science.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center md:justify-start space-x-4 sm:space-x-6 mt-6">
          <a href="https://github.com" aria-label='go to github page' className="text-gray-400 hover:text-white transition-colors duration-200">
            <SiGithub size={24} />
          </a>
          <a href="https://linkedin.com" aria-label='go to linkediN page' className="text-gray-400 hover:text-white transition-colors duration-200">
            <FaLinkedin size={24} />
          </a>
          <a href="https://facebook.com" aria-label='go to facebook' className="text-gray-400 hover:text-white transition-colors duration-200">
            <FaFacebook size={24} />
          </a>
          <a href="https://instagram.com" aria-label='go to instagram' className="text-gray-400 hover:text-white transition-colors duration-200">
            <FaInstagram size={24} />
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

  );
}
