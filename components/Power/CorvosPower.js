'use client'

import styles from '../../styles/FeaturedCard.module.css'
import {motion} from 'framer-motion'



export default function Power() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-8">
        <h1 className="text-4xl font-bold text-center">
          Built on a foundation of fast, production-grade tooling
        </h1>
        <div className="flex items-center justify-center mt-8 mb-8">
          {/* <div className="relative flex items-center justify-center w-32 h-32 bg-gray-800 rounded-full">
            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lg font-semibold">
              Powered By
            </span>
            
            
          </div> */}

<motion.div
        drag
        dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
        whileHover={{ scale: 1 }}
        whileTap={{ scale: 0.7 }}
        onDragStart={() => console.log('Drag started')}
        onDragEnd={() => console.log('Drag ended')}
        onDrag={() => console.log('Dragging')}
        className="relative flex items-center justify-center w-32 h-32 bg-gray-800 rounded-full"
      />
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          <FeatureCard
            title="React"
            description="The library for web and native user interfaces. Next.js is built on the latest React features, including Server Components and Actions."
            link="https://reactjs.org/"
          />
          <FeatureCard
            title="Turbopack"
            description="An incremental bundler optimized for JavaScript and TypeScript, written in Rust, and built into Next.js."
            link="https://turbo.build/pack"
          />
          <FeatureCard
            title="Speedy Web Compiler"
            description="An extensible Rust-based platform for the next generation of fast developer tools, and can be used for both compilation and minification."
            link="https://swc.rs/"
          />
        </div>
      </div>
    );
  }
  
  function FeatureCard({ title, description, link }) {
    return (
      <motion.div className={styles.featureCard}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}>
         <div className="flex items-center mb-4 cursor-pointer">
        <h2 className="text-xl font-semibold text-quinary">{title}</h2>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={1.5} 
            stroke="currentColor" 
            className="size-4 ml-1"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
          </svg>
        </div>
        <p className="mb-4 text-sm text-quinary">{description}</p>
        {/* <a href={link} className="text-blue-500 underline">
          Learn more
        </a> */}
      </motion.div>
    );
  }

  