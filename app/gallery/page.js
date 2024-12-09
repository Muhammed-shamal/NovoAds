
'use client'

import { useEffect } from 'react';
import * as THREE from 'three';
//import '../../styles/About.module.css'

const About = () => {
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const pages = [];
    const pageMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });

    for (let i = 0; i < 3; i++) {
      const geometry = new THREE.PlaneGeometry(5, 7);
      const page = new THREE.Mesh(geometry, pageMaterial);
      page.position.z = -i * 0.1; // Stack pages
      scene.add(page);
      pages.push(page);
    }

    camera.position.z = 10;

    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate pages based on scroll
      const scrollY = window.scrollY / 1000;
      pages.forEach((page, index) => {
        page.rotation.y = scrollY + index * 0.1;
      });

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      document.body.removeChild(renderer.domElement);
    };
  }, []);

  return <div id="three-container" />;
};

export default About;