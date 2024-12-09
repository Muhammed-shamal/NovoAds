import { LampContainer } from "../ui/Lamp/topLight";
import {motion} from 'framer-motion'

export function LampEffect() {
    return (
      (<LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className=" bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-2xl font-medium tracking-tight text-transparent md:text-7xl">
          Corvoso <br /> the secret
        </motion.h1>
      </LampContainer>)
    );
  }
  