// "use client";

// import { motion, Variants } from "framer-motion";
// import StackCards from "./stack-card";

// const textVariants: Variants = {
//   hidden: { opacity: 0, x: -20 },
//   visible: {
//     opacity: 1,
//     x: 0,
//     transition: {
//       duration: 0.6,
//       ease: [0.22, 1, 0.36, 1],
//     },
//   },
// };

// export default function WhoIsThisFor() {
//   return (
//     <section className="px-6 py-16 md:px-12 md:py-24 max-w-6xl mx-auto ">
//       <div className=" grid grid-cols-1 lg:grid-cols-2  items-center flex ">
//         {/* Left Content */}
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-100px" }}
//           variants={textVariants}
//         >
//           <h2 className="inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400">
//             WHO IS THIS FOR?
//           </h2>{" "}
//           <p className="text-muted-foreground mt-6 text-lg leading-relaxed max-w-xl">
//             Learn computational design from scratch using industry-standard
//             workflows with Rhino + Grasshopper and build real-world parametric
//             projects.
//           </p>{" "}
//         </motion.div>
//         <div className="overflow-hidden">
//           {/* <CardStack /> */}
//           <StackCards />
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight, Boxes, Layers3, Sparkles, Workflow } from "lucide-react";
import { useState } from "react";
import { ContactForm } from "../contact-form";
import { DialogBox } from "../dialog-box";
import StackCards from "./stack-card";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const software = ["Rhino", "Grasshopper", "Parametric", "Computational"];

const features = [
  {
    icon: Boxes,
    title: "Parametric Modeling",
  },
  {
    icon: Workflow,
    title: "Algorithmic Workflows",
  },
  {
    icon: Layers3,
    title: "Real World Projects",
  },
];

export default function WhoIsThisFor() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.04]" />

      {/* Glow Effects */}
      <div className="absolute top-0 left-1/3 w-125 h-125 bg-blue-500/20 blur-[120px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-100 h-100 bg-purple-500/20 blur-[120px] rounded-full" />

      <div className="relative max-w-6xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-16 items-center">
          {/* LEFT SIDE */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="relative z-10"
          >
            {/* Badge */}
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400 backdrop-blur-xl">
                <Sparkles className="w-4 h-4" />
                WHO IS THIS FOR?
              </div>
            </motion.div>

            {/* Heading */}
            <motion.h2
              variants={itemVariants}
              className="mt-8 text-4xl md:text-4xl font-bold leading-tight tracking-tight"
            >
              Start Your
              <span className="block bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Parametric Journey
              </span>
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl"
            >
              Learn computational design using industry-standard workflows with
              Rhino and Grasshopper. Build real-world parametric systems,
              generative structures, and futuristic architectural concepts.
            </motion.p>

            {/* Software Pills */}
            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-wrap gap-3"
            >
              {software.map((item) => (
                <div
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 backdrop-blur-xl px-4 py-2 text-sm text-foreground hover:border-blue-500/40 transition-all duration-300"
                >
                  {item}
                </div>
              ))}
            </motion.div>

            {/* Features */}

            {/* CTA */}
            <motion.div variants={itemVariants} className="mt-10">
              <DialogBox
                open={isOpen}
                onOpenChange={setIsOpen}
                trigger={
                  <button className="group inline-flex items-center gap-3 rounded-full bg-blue-600 px-7 py-4 text-white font-medium transition-all hover:scale-[1.03] hover:bg-blue-500">
                    Start Learning
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                }
              >
                <ContactForm />
              </DialogBox>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{
              opacity: 0,
              x: 80,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative"
          >
            {/* Glass Container */}
            <div className="relative z-10">
              <StackCards />
            </div>

            {/* Floating Blur */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500/20 blur-[80px] rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
