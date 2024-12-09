import { motion } from 'framer-motion';

const typingVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const letterVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const AnimatedTerminal = () => {
  return (
    <div >
      <motion.div
      className="mx-auto max-w-3xl"
      initial={{ opacity: 0, scale: 0.8, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.6, ease: 'easeOut' }}
    >
      <motion.div
        className="relative aspect-video rounded-2xl bg-gray-800 px-5 py-3 shadow-xl"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        <motion.div
          className="relative mb-8 flex items-center justify-between"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <span className="text-[13px] font-medium text-white">corvoso.com</span>
        </motion.div>

        <motion.div
          className="font-consola text-gray-500"
          variants={typingVariants}
          initial="hidden"
          animate="visible"
        >
          <span className="text-white">npm login</span>
          {[
            '--registry=https://npm.pkg.github.com',
            '--scope=@corvos0',
            'Successfully logged-in.'
          ].map((line, index) => (
            <div key={index}>
              {line.split('').map((char, i) => (
                <motion.span key={i} variants={letterVariants}>
                  {char}
                </motion.span>
              ))}
              <br />
            </div>
          ))}
          <br />
          <span className="text-white">npm publish</span>
          {['Package published.'].map((line, index) => (
            <div key={index}>
              {line.split('').map((char, i) => (
                <motion.span key={i} variants={letterVariants}>
                  {char}
                </motion.span>
              ))}
              <br />
            </div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
    </div>
    
  );
};

export default AnimatedTerminal;
