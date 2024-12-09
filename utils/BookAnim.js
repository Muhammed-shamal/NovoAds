'use client'

import { motion } from 'framer-motion';

export default function Book() {
  return (
    <div className="relative w-[220px] h-[204px] perspective-1000">
      <motion.div
        className="absolute inset-0 w-full h-full bg-gray-400"
        style={{ transformStyle: 'preserve-3d', transformOrigin: 'left' }}
        animate={{ rotateY: 180 }}
        transition={{ duration: 2, ease: 'easeInOut' }}
      >
        <div className="absolute inset-0 bg-gray-1000">
          <p className="text-white">Front Cover</p>
        </div>
        <div className="absolute inset-0 bg-gray-1000">
          <p className="text-white">Back Cover</p>
        </div>
      </motion.div>

      {/* Pages */}
      <motion.div
        className="absolute inset-0 w-full h-full bg-gray-200"
        style={{ transformStyle: 'preserve-3d', transformOrigin: 'left' }}
        initial={{ rotateY: 0 }}
        animate={{ rotateY: 180 }}
        transition={{ duration: 1.5, ease: 'easeInOut', delay: 0.5 }}
      >
        <div className="absolute inset-0 bg-white">
          <p className="text-gray-900">Page Content</p>
        </div>
      </motion.div>
    </div>
  );
}
