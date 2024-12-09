'use client'

import { motion } from 'framer-motion';

const DraggableBall = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <motion.div
        drag
        dragConstraints={{ left: -300, right: 300, top: -300, bottom: 300 }}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
        onDragStart={() => console.log('Drag started')}
        onDragEnd={() => console.log('Drag ended')}
        onDrag={() => console.log('Dragging')}
        className="bg-red-500 w-16 h-16"
      />
    </div>
  );
};

export default DraggableBall;
