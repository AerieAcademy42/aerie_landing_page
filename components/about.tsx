"use client";

import { motion } from "framer-motion";
import { Heart, Target } from "lucide-react";

const values = [
  {
    icon: Target,
    img: "aerie.png",

    title: "About Aerie",
    description:
      "To make quality GATE Architecture coaching accessible to every aspiring architect across India, regardless of their location.",
  },
  {
    icon: Heart,
    img: "natiki.png",

    title: "About Natik",
    description:
      "We believe in personalized learning. Every student gets individual attention and customized study plans based on their strengths and weaknesses.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

export function About() {
  return (
    <section
      id="about"
      className="py-20 px-4 bg-gradient-to-b from-white to-blue-50"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          {/* Top Heading */}
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-10">
            About <span className="text-primary">Aerie</span>
          </h2>

          {/* Bottom Content */}
          <div className="flex items-center justify-between gap-10">
            <div className="flex-1 flex justify-center">
              <img
                src="/your-image.png"
                alt="Academy"
                className="w-full max-w-md rounded-2xl object-cover"
              />
            </div>
            <div className="flex-1">
              <p className="text-muted-foreground text-lg leading-relaxed">
                Aerie Academy is a learning studio for architects and designers
                who want to work at the edge of computation, design, and craft.
                We don't run lectures at you — we run a studio with you. Every
                cohort is small, every project is reviewed, and every student
                leaves with work they can actually put in front of a client or
                hiring panel. This isn't a video library. It's a 3-month
                commitment to becoming a designer who can build their own tools.
              </p>
            </div>

            {/* Right Side */}
          </div>
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {values.map((value) => (
            <motion.div
              key={value.title}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex gap-6 p-6 bg-white rounded-2xl border border-blue-100 shadow-lg hover:shadow-xl transition-shadow">
                <div className="shrink-0">
                  <div className="h-60 w-50 rounded-xl gradient-blue flex items-center justify-center">
                    {/* <value.icon className="h-7 w-7 text-white" /> */}
                    <img
                      src={value.img}
                      alt={value.title}
                      className="h-full w-full object-cover rounded-xl"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  {/* <h2 className="text-sm font-medium text-primary mb-1">
                  {value.name}
                </h2> */}
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
