"use client"

import { BookOpen, Video, Users, Clock, Target, FileText } from "lucide-react"
import { motion } from "framer-motion"

const features = [
  {
    icon: Video,
    title: "Live Interactive Classes",
    description: "Daily live sessions with expert faculty covering all GATE topics with real-time doubt solving."
  },
  {
    icon: BookOpen,
    title: "Comprehensive Study Material",
    description: "Curated notes, previous year papers, and practice sheets designed specifically for Architecture & Planning."
  },
  {
    icon: Target,
    title: "Mock Tests & Analysis",
    description: "Regular mock tests with detailed performance analysis to track your progress and improve weak areas."
  },
  {
    icon: Users,
    title: "Doubt Resolution Support",
    description: "24/7 doubt clearing sessions with mentors and a supportive community of fellow aspirants."
  },
  {
    icon: Clock,
    title: "Flexible Learning",
    description: "Access recorded lectures anytime, anywhere. Study at your own pace with lifetime access."
  },
  {
    icon: FileText,
    title: "Previous Year Analysis",
    description: "In-depth analysis of last 10 years GATE papers with topic-wise weightage and trends."
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

export function Features() {
  return (
    <section id="features" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Why Students Love <span className="text-primary">Aerie Academy</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Everything you need to crack GATE Architecture & Planning in one place
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-white border border-blue-100 hover:shadow-xl hover:shadow-blue-100/50 transition-all duration-300"
            >
              <div className="h-14 w-14 rounded-xl gradient-blue flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
