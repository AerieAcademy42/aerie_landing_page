"use client"

import { Target, Heart, Lightbulb, Trophy } from "lucide-react"
import { motion } from "framer-motion"

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description: "To make quality GATE Architecture coaching accessible to every aspiring architect across India, regardless of their location."
  },
  {
    icon: Heart,
    title: "Student-First Approach",
    description: "We believe in personalized learning. Every student gets individual attention and customized study plans based on their strengths and weaknesses."
  },
  {
    icon: Lightbulb,
    title: "Innovation in Learning",
    description: "We leverage technology to create engaging, interactive learning experiences that make complex architectural concepts easy to understand."
  },
  {
    icon: Trophy,
    title: "Proven Track Record",
    description: "With 500+ selections in top IITs, NITs, and SPAs, our results speak for themselves. We are committed to your success."
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
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
}

export function About() {
  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Why Choose <span className="text-primary">Aerie Academy</span>?
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
            Aerie Academy is India&apos;s leading online coaching institute for GATE Architecture & Planning. 
            Founded by IIT alumni and experienced architects, we combine cutting-edge technology with 
            time-tested teaching methodologies to help you achieve your dream of studying at premier institutions.
          </p>
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
              className="flex gap-6 p-6 bg-white rounded-2xl border border-blue-100 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="shrink-0">
                <div className="h-14 w-14 rounded-xl gradient-blue flex items-center justify-center">
                  <value.icon className="h-7 w-7 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
