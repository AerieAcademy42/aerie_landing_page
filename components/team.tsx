"use client"

import { motion } from "framer-motion"

const team = [
  {
    name: "Dr. Arun Kumar",
    role: "Founder & Head of Academics",
    qualification: "Ph.D. Architecture, IIT Delhi",
    experience: "15+ years teaching experience",
    initials: "AK"
  },
  {
    name: "Prof. Meera Joshi",
    role: "Town Planning Expert",
    qualification: "M.Plan, SPA Delhi",
    experience: "12+ years in Urban Planning",
    initials: "MJ"
  },
  {
    name: "Ar. Sanjay Gupta",
    role: "Building Construction Head",
    qualification: "B.Arch, NIT Trichy",
    experience: "10+ years in Construction",
    initials: "SG"
  },
  {
    name: "Dr. Priya Nair",
    role: "History of Architecture",
    qualification: "Ph.D. Art History, JNU",
    experience: "8+ years in Academia",
    initials: "PN"
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

export function Team() {
  return (
    <section id="team" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Meet Our <span className="text-primary">Expert Team</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Learn from industry veterans and academic experts who have guided thousands of successful GATE aspirants
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {team.map((member) => (
            <motion.div
              key={member.name}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group text-center"
            >
              <div className="relative mb-6 mx-auto w-32 h-32">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="w-full h-full rounded-full gradient-blue p-1"
                >
                  <div className="w-full h-full rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-3xl font-bold text-primary">
                      {member.initials}
                    </span>
                  </div>
                </motion.div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-1">
                {member.name}
              </h3>
              <p className="text-primary text-sm font-medium mb-2">
                {member.role}
              </p>
              <p className="text-muted-foreground text-sm mb-1">
                {member.qualification}
              </p>
              <p className="text-muted-foreground text-xs">
                {member.experience}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
