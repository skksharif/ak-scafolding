"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const logos = [
  {
    src: "/logos/l1.png",
    alt: "APL Apollo",
  },
  {
    src: "/logos/l2.png",
    alt: "Tata Pipes",
  },
  {
    src: "/logos/l3.png",
    alt: "JSW Steel",
  },
  {
    src: "/logos/l4.png",
    alt: "And Many More...",
  },
];

const LogoCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % logos.length);
    }, 3000); // change every 3 sec
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center py-10 bg-white">
      <h2 className="text-xl md:text-2xl font-bold text-red-600 uppercase mb-6">
        Trusted By Big Companies
      </h2>

      <div className="relative w-full max-w-2xl h-[250px] flex items-center justify-center overflow-hidden">
        {logos.map((logo, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{
              opacity: index === currentIndex ? 1 : 0,
              scale: index === currentIndex ? 1 : 0.9,
            }}
            transition={{ duration: 0.6 }}
            className="absolute flex items-center justify-center"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={250}
              height={100}
              className="object-contain"
            />
          </motion.div>
        ))}
      </div>

      <p className="mt-6 text-lg font-semibold text-red-600">
        And Many More...
      </p>
    </div>
  );
};

export default LogoCarousel;
