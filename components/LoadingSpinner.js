
'use client'

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function LoadingSpinner() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);

  return (
    loading && (
      <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-background-dark z-50">
         
        <Image
          src="/corvoso/svg/Asset 1.svg" // Your logo path
          alt="Corvoso Technologies"
          className="w-24 h-24 animate-spin"
        />
      </div>
    )
  );
}
