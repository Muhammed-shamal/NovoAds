'use client'

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const items = [
  { id: 1, title: 'Card 1', subtitle: 'Subtitle 1' },
  { id: 2, title: 'Card 2', subtitle: 'Subtitle 2' },
  { id: 3, title: 'Card 3', subtitle: 'Subtitle 3' },
];

const CardList = () => {
  const [selectedId, setSelectedId] = useState(null);
  

  return (
    <div className="flex flex-wrap justify-center items-center">
      {items.map((item) => (
        <motion.div
          key={item.id}
          layoutId={item.id}
          className="m-4 p-6 bg-blue-500 rounded-lg cursor-pointer"
          onClick={() => setSelectedId(item.id)}
        >
          <motion.h5>{item.subtitle}</motion.h5>
          <motion.h2>{item.title}</motion.h2>
        </motion.div>
      ))}

      <AnimatePresence>
        {selectedId && (
          <motion.div layoutId={selectedId} className="fixed inset-0 bg-pink-900 p-10 flex flex-col items-center justify-center">
            <motion.h5>{items.find((item) => item.id === selectedId)?.subtitle}</motion.h5>
            <motion.h2>{items.find((item) => item.id === selectedId)?.title}</motion.h2>
            <motion.button
              onClick={() => setSelectedId(null)}
              className="mt-4 px-2 py-2 bg-red-500 text-white"
            >
              Close
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CardList;
