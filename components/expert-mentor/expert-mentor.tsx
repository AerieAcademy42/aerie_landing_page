"use client";

import { motion } from "framer-motion";
import { mentorsData } from "./data";
import { MentorCard } from "./mentor-card";

export function ExpertMentors() {
  return (
    <section id="team" className="px-6  md:px-12 md:py-24">
      <div className="max-w-6xl mx-auto">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className=" mb-4"
        >
          <p className="text-blue-600 text-sm font-semibold tracking-widest  gap-4">
            <span className="w-12 h-px bg-blue-600" />
            EXPERT MENTORS
            <span className="w-12 h-px bg-blue-600" />
          </p>
        </motion.div>

        <div className="overflow-hidden">
          <motion.div
            className="flex gap-6 w-max"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              repeat: Infinity,
              duration: 30,
              ease: "linear",
            }}
          >
            {[...mentorsData, ...mentorsData].map((mentor, index) => (
              <MentorCard
                key={`${mentor.id}-${index}`}
                mentor={mentor}
                index={index}
              />
            ))}
          </motion.div>{" "}
        </div>
      </div>
    </section>
  );
}

{
  /* Heading */
}
{
  /* <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-3xl font-bold mb-12 bg-gradient-to-r from-blue-900 to-purple-900 bg-clip-text text-transparent"
        >
          Learn from the minds behind
          <br />
          the world&apos;s most innovative projects
        </motion.h2> */
}

{
  /* Mentors Grid */
}
