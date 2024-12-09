

import { useViewportScroll, useTransform, motion } from 'framer-motion';
import Image from 'next/image';

const Parallax = ({ children, offset = 100 }) => {
  const { scrollY } = useViewportScroll();
  const y = useTransform(scrollY, [0, offset], [0, -50]);

  return (
    <motion.div style={{ y }} className="parallax-item">
      {children}
    </motion.div>
  );
};

export default Parallax;
