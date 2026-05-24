"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { videos } from "./data";

export function VideoSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const getAspectRatioClass = (aspectRatio: string) => {
    switch (aspectRatio) {
      case "portrait":
        return "aspect-[2/5]";
      case "landscape":
        return "aspect-video";
      case "square":
        return "aspect-square";
      default:
        return "aspect-video";
    }
  };

  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    initial: { opacity: 0, scale: 0.8, y: 20 },
    animate: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const glowVariants = {
    initial: { opacity: 0 },
    hover: {
      opacity: [0.4, 0.7, 0.4],
      transition: {
        duration: 2,
        repeat: Infinity,
      },
    },
  };

  return (
    <div className="relative">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0 opacity-10"
          // style={{
          //   backgroundImage:
          //     "linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)",
          //   backgroundSize: "50px 50px",
          // }}
        />
      </div>

      {/* Floating blur circles */}
      <motion.div
        className="absolute -top-40 -left-40 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)",
        }}
        animate={{
          x: [0, 40, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(124, 58, 255, 0.15) 0%, transparent 70%)",
        }}
        animate={{
          x: [0, -50, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Masonry Grid */}
      <motion.div
        className="grid grid-cols-4 gap-4 relative z-10 lg:gap-1"
        variants={containerVariants}
        initial="initial"
        animate="animate"
      >
        {videos.map((video) => (
          <motion.div
            key={video.id}
            className={`${video.colSpan} ${video.rowSpan} relative group`}
            // variants={itemVariants}
            onMouseEnter={() => setHoveredId(video.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            {/* Animated Gradient Glow */}
            <motion.div
              className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/40 via-pink-500/30 to-purple-500/40 blur-xl pointer-events-none"
              variants={glowVariants}
              initial="initial"
              animate={hoveredId === video.id ? "hover" : "initial"}
            />

            {/* Video Card with Glassmorphism */}
            <div
              className={`relative w-full h-full overflow-hidden rounded-2xl shadow-lg backdrop-blur-md border border-white/10 transition-all duration-300 ${
                hoveredId === video.id ? "shadow-2xl" : "shadow-lg"
              }`}
              style={{
                background:
                  "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)",
                boxShadow:
                  hoveredId === video.id
                    ? "0 20px 40px rgba(139, 92, 246, 0.25), inset 0 0 20px rgba(255, 255, 255, 0.1)"
                    : "0 10px 25px rgba(0, 0, 0, 0.15), inset 0 0 20px rgba(255, 255, 255, 0.05)",
              }}
            >
              {/* Video Player */}
              <div
                className={`relative w-full h-full bg-black overflow-hidden ${getAspectRatioClass(
                  video.aspectRatio,
                )}`}
              >
                <video
                  autoPlay
                  muted
                  loop
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src={video.src}
                />
                {/* Video Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
