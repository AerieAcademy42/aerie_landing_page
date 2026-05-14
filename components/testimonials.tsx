"use client"

import { Quote, Star } from "lucide-react"
import { motion } from "framer-motion"

const testimonials = [
  {
    name: "Priya Sharma",
    role: "AIR 45 - GATE 2025",
    college: "Now at IIT Roorkee",
    content: "Aerie Academy completely transformed my preparation. The structured approach and dedicated mentors helped me crack GATE in my first attempt. The mock tests were incredibly helpful!"
  },
  {
    name: "Rahul Verma",
    role: "AIR 128 - GATE 2025",
    college: "Now at NIT Trichy",
    content: "The comprehensive study material and previous year analysis saved me months of preparation time. The faculty is extremely knowledgeable and always available for doubts."
  },
  {
    name: "Ananya Patel",
    role: "AIR 67 - GATE 2025",
    college: "Now at SPA Delhi",
    content: "I was struggling with Town Planning topics until I joined Aerie. Their topic-wise approach and regular tests helped me identify and improve my weak areas."
  },
  {
    name: "Vikram Singh",
    role: "AIR 89 - GATE 2024",
    college: "Now at IIT Kharagpur",
    content: "The live classes were game-changing. Being able to interact with teachers and clarify doubts in real-time made complex concepts so much easier to understand."
  },
  {
    name: "Sneha Reddy",
    role: "AIR 156 - GATE 2025",
    college: "Now at NIT Warangal",
    content: "Best investment I made for my GATE prep. The 1-on-1 mentorship helped me create a personalized study plan that fit my schedule perfectly."
  },
  {
    name: "Arjun Mehta",
    role: "AIR 34 - GATE 2024",
    college: "Now at IIT Bombay",
    content: "From basics to advanced topics, Aerie covered everything systematically. The test series gave me real exam experience and boosted my confidence."
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
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
}

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-4 gradient-blue">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            What Our <span className="text-blue-200">Community Says</span>
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            Success stories from students who transformed their dreams into reality
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.name}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white/15 backdrop-blur-sm border border-white/20 p-6 rounded-2xl"
            >
              <Quote className="h-10 w-10 text-blue-300/50 mb-4" />
              <p className="text-white/90 leading-relaxed mb-6">
                &ldquo;{testimonial.content}&rdquo;
              </p>
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-white fill-white" />
                ))}
              </div>
              <div>
                <div className="font-semibold text-white">{testimonial.name}</div>
                <div className="text-blue-200 text-sm font-medium">{testimonial.role}</div>
                <div className="text-white/70 text-sm">{testimonial.college}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
