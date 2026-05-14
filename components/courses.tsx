"use client"

import { Button } from "@/components/ui/button"
import { Check, Star } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

const courses = [
  {
    name: "Foundation Batch",
    price: "₹15,999",
    originalPrice: "₹24,999",
    duration: "8 Months",
    popular: false,
    features: [
      "Complete GATE Architecture syllabus",
      "150+ hours of video lectures",
      "Study material & notes",
      "5 full-length mock tests",
      "Doubt clearing sessions",
      "Basic mentorship support"
    ]
  },
  {
    name: "Comprehensive Batch",
    price: "₹29,999",
    originalPrice: "₹44,999",
    duration: "12 Months",
    popular: true,
    features: [
      "Everything in Foundation +",
      "Live interactive classes",
      "300+ hours of content",
      "15 full-length mock tests",
      "1-on-1 mentorship",
      "Previous year paper analysis",
      "Interview preparation",
      "Placement assistance"
    ]
  },
  {
    name: "Test Series Only",
    price: "₹4,999",
    originalPrice: "₹7,999",
    duration: "6 Months",
    popular: false,
    features: [
      "20 full-length mock tests",
      "Subject-wise tests",
      "Detailed performance analysis",
      "All India ranking",
      "Solutions with explanations",
      "Test-taking strategies"
    ]
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
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

export function Courses() {
  return (
    <section id="courses" className="py-20 px-4 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Choose Your <span className="text-primary">Learning Path</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Flexible plans designed to fit your preparation needs and budget
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {courses.map((course) => (
            <motion.div
              key={course.name}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className={`relative rounded-3xl overflow-hidden ${
                course.popular
                  ? "gradient-blue text-white shadow-2xl shadow-blue-300/50 scale-105"
                  : "bg-white border border-blue-100 shadow-lg"
              }`}
            >
              {course.popular && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5, type: "spring" }}
                  className="absolute top-0 left-0 right-0 bg-white text-blue-700 text-center py-2 text-sm font-semibold flex items-center justify-center gap-1"
                >
                  <Star className="h-4 w-4 fill-current" />
                  Most Popular
                </motion.div>
              )}
              
              <div className={`p-8 ${course.popular ? "pt-14" : ""}`}>
                <h3 className={`text-2xl font-bold mb-2 ${course.popular ? "text-white" : "text-foreground"}`}>
                  {course.name}
                </h3>
                <p className={`text-sm mb-4 ${course.popular ? "text-white/80" : "text-muted-foreground"}`}>
                  Duration: {course.duration}
                </p>
                
                <div className="flex items-baseline gap-2 mb-6">
                  <span className={`text-4xl font-bold ${course.popular ? "text-white" : "text-primary"}`}>
                    {course.price}
                  </span>
                  <span className={`line-through text-sm ${course.popular ? "text-white/60" : "text-muted-foreground"}`}>
                    {course.originalPrice}
                  </span>
                </div>

                <ul className="space-y-3 mb-8">
                  {course.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className={`h-5 w-5 shrink-0 mt-0.5 ${course.popular ? "text-white" : "text-primary"}`} />
                      <span className={`text-sm ${course.popular ? "text-white/90" : "text-foreground/80"}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  className={`w-full py-6 text-lg font-semibold ${
                    course.popular
                      ? "bg-white text-blue-700 hover:bg-white/90"
                      : "gradient-blue text-white"
                  }`}
                >
                  <Link href="#contact">Enroll Now</Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
