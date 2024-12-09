"use client"

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";
import * as THREE from 'three';
import ModelView from "./ModelView";
import { yellowImg } from "../utils";
import { models,sizes } from "..";

const Model = () => {
  const [size, setSize] = useState('small');
  const [model, setModel] = useState({
    title: 'iPhone 15 Pro in Natural Titanium',
    color: ['#8F8A81', '#FFE7B9', '#6F6C64'],
    img: yellowImg,
  });

  const small = useRef(new THREE.Group());
  const large = useRef(new THREE.Group());

  const [smallRotation, setSmallRotation] = useState(0);
  const [largeRotation, setLargeRotation] = useState(0);

  const sizeVariants = {
    small: { x: 0, opacity: 1 },
    large: { x: "-100%", opacity: 1 },
  };

  const headingVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <motion.h1 
          id="heading" 
          className="section-heading"
          initial="hidden"
          animate="visible"
          variants={headingVariants}
          transition={{ duration: 0.5 }}
        >
          Take a closer look.
        </motion.h1>

        <div className="flex flex-col items-center mt-5">
          <div className="w-full h-[75vh] md:h-[90vh] overflow-hidden relative">
            <AnimatePresence>
              {size === 'small' && (
                <motion.div
                  key="view1"
                  initial={{ x: "100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: "-100%", opacity: 0 }}
                  transition={{ duration: 1 }}
                >
                  <ModelView 
                    index={1}
                    groupRef={small}
                    gsapType="view1"
                    controlRef={cameraControlSmall}
                    setRotationState={setSmallRotation}
                    item={model}
                    size={size}
                  />
                </motion.div>
              )}
              {size === 'large' && (
                <motion.div
                  key="view2"
                  initial={{ x: "100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: "-100%", opacity: 0 }}
                  transition={{ duration: 1 }}
                >
                  <ModelView 
                    index={2}
                    groupRef={large}
                    gsapType="view2"
                    controlRef={cameraControlLarge}
                    setRotationState={setLargeRotation}
                    item={model}
                    size={size}
                  />
                </motion.div>
              )}
            </AnimatePresence>

            <Canvas
              className="w-full h-full"
              style={{
                position: 'fixed',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                overflow: 'hidden'
              }}
              eventSource={document.getElementById('root')}
            >
              <View.Port />
            </Canvas>
          </div>

          <div className="mx-auto w-full">
            <p className="text-sm font-light text-center mb-5">{model.title}</p>

            <div className="flex-center">
              <ul className="color-container">
                {models.map((item, i) => (
                  <li 
                    key={i} 
                    className="w-6 h-6 rounded-full mx-2 cursor-pointer" 
                    style={{ backgroundColor: item.color[0] }} 
                    onClick={() => setModel(item)} 
                  />
                ))}
              </ul>

              <div className="size-btn-container">
                {sizes.map(({ label, value }) => (
                  <motion.span 
                    key={label} 
                    className="size-btn" 
                    style={{ backgroundColor: size === value ? 'white' : 'transparent', color: size === value ? 'black' : 'white' }}
                    onClick={() => setSize(value)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {label}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Model;
