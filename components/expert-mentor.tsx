"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

interface Mentor {
  id: number;
  name: string;
  role: string;
  image: string;
  description: string;
  company?: string;
}

const mentorsData: Mentor[] = [
  {
    id: 1,
    name: "Parul Sharma",
    role: "Aerchitecture",
    image: "/aerie.png",
    description:
      "An award-winning computational designer, specializes in generative design, algorithmic processes, and advanced fabrication, with global recognition.",
    company: "AECOM",
  },
  {
    id: 2,
    name: "Naitik",
    role: "Computational Designer",
    image: "/natiki.png",
    description:
      "Specialist in parametric design and computational geometry, bringing innovative approaches to complex design challenges.",
  },
  {
    id: 3,
    name: "José Manuel Domínguez",
    role: "Computational Designer",
    image: "/mentor-3.jpg",
    description:
      "Expert in algorithmic design systems and digital fabrication, with extensive experience in large-scale projects.",
  },
  {
    id: 4,
    name: "Brice Pannetier",
    role: "Founder and Design Technology Specialist",
    image: "/mentor-4.jpg",
    description:
      "Pioneers design technology innovation with a focus on practical applications and sustainable solutions.",
  },
  {
    id: 5,
    name: "James Chadud",
    role: "Senior Design Architect",
    image: "/mentor-5.jpg",
    description:
      "Leads architectural design strategies combining technology, sustainability, and user-centered approaches.",
  },
  {
    id: 6,
    name: "Aman Jain",
    role: "Product Specialist",
    image: "/mentor-6.jpg",
    description:
      "Focused on bridging design and product strategy, creating solutions that impact user experiences globally.",
  },
];

const MentorCard = ({ mentor, index }: { mentor: Mentor; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative flex-shrink-0 w-64 h-96 group cursor-pointer"
    >
      {/* Card Background */}
      <div className="relative w-full h-full rounded-xl overflow-hidden bg-gradient-to-b from-gray-100 to-gray-50 shadow-lg">
        {/* Profile Image */}
        <div className="w-full h-2/3 relative bg-gray-300 overflow-hidden">
          <Image
            src={mentor.image}
            alt={mentor.name}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Footer Section with Name and Role */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-r from-blue-900 to-purple-900 px-4 py-4 flex flex-col justify-center"
          layout
        >
          <h3 className="text-white font-bold text-lg">{mentor.name}</h3>
          <p className="text-blue-200 text-sm">{mentor.role}</p>
        </motion.div>

        {/* Hover Description Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-black/80 backdrop-blur-sm rounded-xl flex flex-col justify-center items-center p-6"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: isHovered ? 1 : 0.8, opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="text-center"
          >
            {mentor.company && (
              <p className="text-red-500 font-bold text-sm mb-3 uppercase tracking-wide">
                {mentor.company}
              </p>
            )}
            <p className="text-white text-sm leading-relaxed">
              {mentor.description}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default function ExpertMentors() {
  return (
    <section className="px-6 py-16 md:px-12 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto">
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

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-3xl font-bold mb-12 bg-gradient-to-r from-blue-900 to-purple-900 bg-clip-text text-transparent"
        >
          Learn from the minds behind
          <br />
          the world&apos;s most innovative projects
        </motion.h2>

        {/* Mentors Grid */}
        <div className="flex overflow-x-auto gap-6 pb-4 snap-x snap-mandatory scrollbar-hide">
          {" "}
          {mentorsData.map((mentor, index) => (
            <MentorCard key={mentor.id} mentor={mentor} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
