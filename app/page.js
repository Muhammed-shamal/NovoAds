'use client'

import FeaturedSection from "@/components/FeaturedSection/FeaturedSection";
import Hero from "@/components/Hero/Hero";

import { useEffect, useState } from "react";


import Roadmap from "@/components/RoadMap/RoadMap";

import { BentoGridDemo } from "@/components/Technologies/Grid";
import { ClipLoader } from "react-spinners";


export default function Home() {
  const [loading, setLoading] = useState(true);  // Loading state

  useEffect(() => {
    // Simulate a network request (e.g., API call)
    const timer = setTimeout(() => {
      setLoading(false);  // Stop loading after 2 seconds
    }, 2000);  // Adjust time based on real case or remove this if loading is linked to an API request

    // Cleanup timeout if component unmounts
    return () => clearTimeout(timer);
  }, []);
   
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-background dark:bg-background-dark">
      {/* Show the spinner if still loading */}
      {loading ? (
        <div className="flex items-center justify-center min-h-screen">
          <ClipLoader color="#3D52A0" size={60} />  {/* Customize spinner size and color */}
        </div>
      ) : (
        // Render the main content after loading is done
        <>
          <Hero />
          <FeaturedSection />
          <Roadmap />
          <BentoGridDemo />
        </>
      )}
    </main>
  );
}