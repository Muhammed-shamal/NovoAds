

import {motion} from 'framer-motion'

const AnimatedBtn = () => {
    return (
      <div>
      

<motion.button
type="button"
className="font-bold text-sm text-blue underline-offset-auto py-[5px] px-[20px] md:text-base relative overflow-hidden"
whileHover={{
  border: '2px solid transparent',
}}
>
<span className="relative z-10">How it works?</span>
<motion.span
  className="absolute inset-0 border-2 border-transparent rounded"
  initial={{ borderColor: 'transparent' }}
  whileHover={{
    borderColor: ['#00f', '#0f0', '#f00', '#00f'],
    borderTopWidth: [2, 4, 2],
    borderRightWidth: [2, 4, 2],
    borderBottomWidth: [2, 4, 2],
    borderLeftWidth: [2, 4, 2],
    transition: {
      duration: 2,
      ease: "linear",
      repeat: Infinity,
      repeatType: "loop",
    },
  }}
/>
</motion.button>
    </div>
    );
  };
  
  export default AnimatedBtn;
  