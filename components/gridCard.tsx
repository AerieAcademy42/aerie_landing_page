"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface GridCardProps {
  title: string;
  description: string;
  image?: string;
  index?: number;
  className?: string;
}

export default function GridCard({
  title,
  description,
  image,
  index = 0,
  className = "",
}: GridCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className={`bg-white gradient-blue rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow ${className}`}
    >
      {image && (
        <div className="mb-6 w-full h-40 relative rounded-md overflow-hidden">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>
      )}
      <h3 className="text-2xl font-bold text-white  mb-3">{title}</h3>
      <p className=" text-white   leading-relaxed">{description}</p>
    </motion.div>
  );
}
