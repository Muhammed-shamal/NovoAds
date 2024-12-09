'use client'

import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Highlights = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false, // Trigger animation multiple times based on visibility
    threshold: 0.5, // 50% of the div should be visible to trigger animation
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        scale: 1,
        rotate: 360,
        transition: { duration: 0.5 },
      });
    } else {
      controls.start({
        scale: 0,
        rotate: 0,
        transition: { duration: 0.5 },
      });
    }
  }, [controls, inView]);

  return (
    <div className="flex justify-center items-center h-screen">
      <motion.div
        ref={ref}
        animate={controls}
        initial={{ scale: 0, rotate: 0 }}
        className="bg-indigo-500 w-20 h-20"
      />
    </div>
  );
};

export default Highlights;
