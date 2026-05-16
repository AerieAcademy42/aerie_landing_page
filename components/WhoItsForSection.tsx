"use client";

import { motion, Variants } from "framer-motion";
import { BookOpen, Briefcase, Building2, PenTool } from "lucide-react";

interface AudienceCard {
  icon: React.ReactNode;
  title: string;
  bgColor: string;
}

const audienceCards: AudienceCard[] = [
  {
    icon: <BookOpen className="w-8 h-8" />,
    title: "Students and Beginners",
    bgColor: "bg-orange-100",
  },
  {
    icon: <Building2 className="w-8 h-8" />,
    title: "Architects and Engineers",
    bgColor: "bg-pink-100",
  },
  {
    icon: <Briefcase className="w-8 h-8" />,
    title: "Working Professionals",
    bgColor: "bg-pink-100",
  },
  {
    icon: <PenTool className="w-8 h-8" />,
    title: "Interior and Industrial Designers",
    bgColor: "bg-orange-100",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.3,
    },
  },
};

const textVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function WhoIsThisFor() {
  return (
    <section className="px-6 py-16 md:px-12 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className=" grid grid-cols-1 lg:grid-cols-2  items-center flex ">
          {/* Left Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={textVariants}
          >
            <p className="text-blue-600 text-sm font-semibold mb-4 ">
              WHO IS THIS FOR?
            </p>
            <h2 className="text-xl md:text-5xl font-bold text-foreground">
              Start Your Parametric Journey
            </h2>
          </motion.div>
          {/* Right Content - Grid of Cards */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2  md:gap-y-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {audienceCards.map((card, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                className="flex items-center gap-4 md:gap-5 p-4 md:p-0"
              >
                {/* Icon */}
                <motion.div
                  className={`${card.bgColor} 
        w-16 h-16 md:w-24 md:h-24 
        rounded-2xl md:rounded-3xl 
        flex items-center justify-center shrink-0`}
                  whileHover={{ rotate: 8, scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {card.icon}
                </motion.div>

                {/* Text */}
                <div className="max-w-[180px] md:max-w-[220px]">
                  <p className="text-lg md:text-2xl font-medium leading-snug text-[#0F172A]">
                    {card.title}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>{" "}
        </div>
      </div>
    </section>
  );
}
