'use client'

import {motion} from 'framer-motion'
import Parallax from '@/components/Parallax/Parallax';
import Image from "next/image";

export default function DashboardPage() {
  return (
    <div className="overflow-hidden">
      <div className="relative h-screen bg-blue-300 flex items-center justify-center">
        <Parallax offset={300}>
          <motion.h1 className="text-6xl font-bold text-white">Welcome to Our Startup</motion.h1>
        </Parallax>
      </div>
      <div className="relative h-screen bg-green-300 flex items-center justify-center">
        <Parallax offset={300}>
          <motion.p className="text-4xl font-semibold text-white">Scroll Down to See the Effect</motion.p>
        </Parallax>
      </div>
      <div className="relative h-screen bg-red-300 flex items-center justify-center">
        <Parallax offset={300}>
          <motion.div className="w-64 h-64 bg-white rounded-lg shadow-lg flex items-center justify-center">
            <Image src="/images/logo/NovoAds.png" alt="NovoAds" width="64" height="64" className="w-16" />
          </motion.div>
        </Parallax>
      </div>
    </div>
  );
}