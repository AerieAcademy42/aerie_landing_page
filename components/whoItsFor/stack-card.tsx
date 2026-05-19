"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { cards } from "./data";

export default function StackCards() {
  const [active, setActive] = useState(0);

  const rotateCards = () => {
    setActive((prev) => (prev + 1) % cards.length);
  };

  return (
    <div className="flex  items-center justify-center min-h-screen overflow-hidden">
      <div
        className="relative w-[380px] h-[500px] cursor-pointer"
        onMouseEnter={rotateCards}
      >
        {cards.map((card, index) => {
          const position = (index - active + cards.length) % cards.length;

          return (
            <motion.div
              key={index}
              drag={position === 0 ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(event, info) => {
                if (info.offset.x < -100) {
                  rotateCards();
                }
              }}
              animate={{
                x: position === 0 ? 0 : position === 1 ? 40 : 80,

                y: position === 0 ? 0 : position === 1 ? 20 : 40,

                scale: position === 0 ? 1 : position === 1 ? 0.95 : 0.9,

                rotate: position === 0 ? 0 : position === 1 ? -4 : -8,

                zIndex: cards.length - position,
              }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 18,
              }}
              className={`
    absolute
    inset-0
    rounded-[32px]
    bg-gradient-to-br
    ${card.color}
    shadow-2xl
    p-8
    cursor-grab
  `}
            >
              <div className="relative w-full h-[300px] mb-6 overflow-hidden rounded-2xl">
                <Image
                  src={card.img}
                  alt={card.title}
                  fill
                  className="object-cover"
                />
              </div>
              <h2 className="text-4xl font-bold text-white">{card.title}</h2>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
