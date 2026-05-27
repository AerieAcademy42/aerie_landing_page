"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { Mentor } from "./data";

export const MentorCard = ({
  mentor,
  index,
}: {
  mentor: Mentor;
  index: number;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative flex-shrink-0 w-64 h-96 group cursor-pointer"
    >
      {/* Card Background */}
      <div className="relative w-full h-full rounded-xl overflow-hidden bg-gradient-to-b from-gray-100 to-gray-50 shadow-lg">
        {/* Profile Image */}
        <div className="w-full h-2/3 relative bg-gray-300 overflow-hidden">
          <Image
            src={mentor.image}
            alt={mentor.name}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Footer Section with Name and Role */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1/3 gradient-blue px-4 py-4 flex flex-col justify-center"
          layout
        >
          <h3 className="text-white font-bold text-lg">{mentor.name}</h3>
          <p className="text-blue-200 text-sm">{mentor.role}</p>
        </motion.div>
      </div>
    </motion.div>
  );
};
