// "use client";

// import { motion } from "framer-motion";
// import { ExpertMentors } from "../expert-mentor";
// import { values } from "./data";

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: { staggerChildren: 0.15 },
//   },
// };

// const itemVariants = {
//   hidden: { opacity: 0, x: -30 },
//   visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
// };

// export function About() {
//   return (
//     <section
//       id="about"
//       className="px-4 py-16 bg-gradient-to-b from-blue-50 to-blue-100"
//     >
//       <div className="max-w-7xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="mb-16"
//         >
//           {/* Top Heading */}
//           <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-10">
//             About <span className="text-primary">Aerie</span>
//           </h2>

//           {/* Bottom Content */}
//           <div className="flex items-center justify-between gap-10">
//             <div className="flex-1 flex justify-center">
//               <img
//                 src="/academy.jpg"
//                 alt="Academy"
//                 className="w-full h-[250px] max-w-md rounded-2xl object-cover"
//               />
//             </div>
//             <div className="flex-1">
//               <p className="text-muted-foreground text-lg leading-relaxed">
//                 Aerie Academy is India’s fastest-growing edtech platform for
//                 architecture students. Built by architects, for architects. We
//                 bridge the gap between classroom learning and real-world
//                 professional demands, empowering students to crack top colleges
//                 and shape successful careers. We connect students with the jobs
//                 and help in upskilling!!
//               </p>
//             </div>

//             {/* Right Side */}
//           </div>
//         </motion.div>
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="grid md:grid-cols-2 gap-8"
//         >
//           {values.map((value) => (
//             <motion.div
//               key={value.title}
//               variants={itemVariants}
//               whileHover={{ scale: 1.02 }}
//             >
//               <div className="  h-full flex gap-6 p-6 rounded-2xl border border-blue-100 shadow-lg hover:shadow-xl transition-shadow">
//                 <div className="shrink-0">
//                   <div className="h-60 w-40 rounded-xl gradient-blue flex items-center justify-center">
//                     <img
//                       src={value.img}
//                       alt={value.title}
//                       className="h-full w-full object-cover rounded-xl"
//                     />
//                   </div>
//                 </div>
//                 <div>
//                   <h3 className="text-xl font-semibold text-foreground mb-1">
//                     {value.title}
//                   </h3>
//                   <h2 className="text-xl font-medium text-primary mb-1">
//                     {value.name}
//                   </h2>
//                   <p className=" text-sm text-muted-foreground leading-relaxed">
//                     {value.description}
//                   </p>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//       <ExpertMentors />
//     </section>
//   );
// }

"use client";

import { motion } from "framer-motion";
import { values } from "./data";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export function About() {
  return (
    <section
      id="about"
      className="
        relative
        overflow-hidden
        px-4
        py-24
        bg-[#07111f]
      "
    >
      {/* Background Blur Effects */}
      <div className="absolute top-0 left-0 w-125 h-125 bg-blue-500/20 blur-[120px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-125 h-125 bg-purple-500/20 blur-[120px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <p className="text-blue-400 text-sm font-semibold tracking-[0.3em] text-center mb-4">
            ABOUT AERIE
          </p>

          <h2
            className="
              text-4xl
              sm:text-5xl
              md:text-6xl
              font-bold
              text-center
              text-white
              leading-tight
              mb-10
            "
          >
            Building the future
            <br />
            of architectural education.
          </h2>

          {/* About Content */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/30 to-purple-500/30 blur-3xl rounded-[40px]" />

              <img
                src="/academy.jpg"
                alt="Academy"
                className="
                  relative
                  w-full
                  h-75
                  object-cover
                  rounded-4xl
                  border
                  border-white/10
                  shadow-2xl
                "
              />
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <p
                className="
                  text-lg
                  md:text-xl
                  text-white/70
                  leading-relaxed
                "
              >
                Aerie Academy is India’s fastest-growing edtech platform for
                architecture students. Built by architects, for architects.
                <br />
                <br />
                We bridge the gap between classroom learning and real-world
                professional demands, empowering students to crack top colleges
                and build meaningful careers in design, computation, and
                architecture.
                <br />
                <br />
                We connect students with opportunities, mentors, and the skills
                needed to thrive in the modern creative industry.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Values Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-10"
        >
          {values.map((value) => (
            <motion.div
              key={value.title}
              variants={itemVariants}
              whileHover={{
                y: -10,
              }}
              transition={{
                type: "spring",
                stiffness: 120,
              }}
            >
              <div
                className="
                  h-full
                  group
                  relative
                  overflow-hidden
                  rounded-4xl
                  border
                  border-white/10
                  bg-white/5
                  backdrop-blur-xl
                  p-6
                  shadow-[0_10px_50px_rgba(0,0,0,0.4)]
                  transition-all
                  duration-500
                  hover:bg-white/10
                "
              >
                {/* Gradient Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative   z-10 flex flex-col md:flex-row gap-6">
                  {/* Image */}
                  <div className="h-60 w-40 relative  shrink-0 overflow-hidden rounded-2xl">
                    <img
                      // src={value.img}
                      // alt={value.title}
                      // className="
                      //   w-44
                      //   object-cover
                      //   rounded-2xl
                      //   transition-transform
                      //   duration-700
                      //   group-hover:scale-110
                      src={value.img}
                      alt={value.title}
                      className="h-full w-full object-cover rounded-xl"
                    />

                    {/* <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" /> */}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-white mb-2">
                      {value.title}
                    </h3>

                    <h2 className="text-lg font-medium text-blue-300 mb-4">
                      {value.name}
                    </h2>

                    <p className="text-white/70 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mentors */}
        {/* <div className="mt-32">
          <ExpertMentors />
        </div> */}
      </div>
    </section>
  );
}
