"use client";

import { motion, Variants } from "framer-motion";
import StackCards from "./stack-card";

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
    <section className="px-6 py-16 md:px-12 md:py-24 max-w-6xl mx-auto ">
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
        <div className="overflow-hidden">
          {/* <CardStack /> */}
          <StackCards />
        </div>
      </div>
    </section>
  );
}
