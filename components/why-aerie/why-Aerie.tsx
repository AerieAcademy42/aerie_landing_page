"use client";

import { motion } from "framer-motion";
import GridCard from "../gridCard";
import SectionHeader from "../sectionHeader";

const whyAerieItems = [
  {
    title: "Small cohorts",
    description:
      "Capped intake means every student gets seen, every project gets reviewed, and no one disappears into a Discord of a thousand.",
    // img: "/academy.jpg",
  },
  {
    title: "Mentors who practice",
    description:
      "Your instructors aren't full-time educators reading a script — they're working designers using these tools on live projects.",
  },
  {
    title: "Studio culture",
    description:
      "Reviews run the way good architecture schools do — live, candid, constructive. You'll learn as much from the cohort as from your own work.",
  },
  {
    title: "Real outcomes",
    description:
      "Our success metric isn't completion rate. It's whether your final project is something you'd put in front of a hiring panel.",
  },
  {
    title: "Honest pricing",
    description:
      "Priced for the designer building a career, not the institution selling a brand. Payment plans available.",
  },
  {
    title: "Built for ambition",
    description:
      "We understand the schools you came from, the studios you want to work in, and the gap between the two. The course is built to close it.",
  },
];

export function WhyAerie() {
  return (
    <section className="px-6 py-16 md:px-12 md:py-24 ">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          label="WHY AERIE"
          title="Why Aerie Academy, specifically."
        />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {whyAerieItems.map((item, index) => (
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
