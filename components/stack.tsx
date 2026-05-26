"use client";

import { motion } from "framer-motion";
import GridCard from "./gridCard";
import SectionHeader from "./why-aerie/sectionHeader";

const stackItems = [
  {
    title: "Rhino",
    description: "Your modeling environment for the next decade.",
  },
  {
    title: "Grasshopper",
    description: "The visual programming engine that changes how you design.",
  },
  {
    title: "Plugins",
    description:
      "Lunchbox, Weaverbird, Kangaroo — only when the project calls.",
  },
  {
    title: "Illustrator / InDesign",
    description: "Portfolio-grade documentation of your work.",
  },
];

export default function TheStack() {
  return (
    <section className="px-6 py-16 md:px-12 md:py-24  bg-gradient-to-b from-blue-50 to-indigo-50 ">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="THE STACK"
          title="A focused stack. Mastered properly."
          description="We teach the tools the industry actually uses, in the order that makes sense — and skip the rest."
        />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stackItems.map((item, index) => (
            <GridCard
              key={item.title}
              title={item.title}
              description={item.description}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
