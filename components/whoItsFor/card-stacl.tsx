"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect } from "react";

import Image from "next/image";
import { carouselCards } from "./data";

export default function CardStack() {
  const [activeCard, setActiveCard] = React.useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % carouselCards.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay: 0.3 }}

      // className="relative h-[500px] hidden lg:block"
    >
      <div>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCard}
            initial={{
              opacity: 0,
              x: 100,
              rotate: -5,
            }}
            animate={{
              opacity: 1,
              x: 0,
              rotate: 0,
            }}
            exit={{
              opacity: 0,
              x: -100,
              rotate: 5,
            }}
            transition={{ duration: 0.5 }}
            className={`${carouselCards[activeCard].color} rounded-3xl p-8 w-full shadow-2xl `}
          >
            <div className="relative w-full h-[300px] mb-6 overflow-hidden rounded-2xl">
              <Image
                src={carouselCards[activeCard].img}
                fill
                alt={carouselCards[activeCard].title}
                className="object-cover"
              />
            </div>

            <h3 className="text-2xl font-bold text-white mb-3">
              {carouselCards[activeCard].title}
            </h3>

            <p className="text-white/80 text-lg">
              {carouselCards[activeCard].description}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
