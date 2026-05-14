"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { motion } from "framer-motion"

const faqs = [
  {
    question: "What is the eligibility for GATE Architecture exam?",
    answer: "Candidates must have completed or be in the final year of their Bachelor's degree in Architecture (B.Arch) from a recognized university. There is no age limit for appearing in GATE."
  },
  {
    question: "How long is the course validity?",
    answer: "Our Foundation and Comprehensive batches come with lifetime access to recorded lectures. Live classes are available for the duration mentioned in each course (8 months or 12 months respectively)."
  },
  {
    question: "Can I access the course on mobile devices?",
    answer: "Yes! Our platform is fully responsive and works seamlessly on mobile phones, tablets, and desktops. You can also download the lectures for offline viewing through our app."
  },
  {
    question: "What if I miss a live class?",
    answer: "All live classes are recorded and uploaded within 24 hours. You can watch them at your convenience. However, we encourage attending live sessions for real-time doubt clearing."
  },
  {
    question: "Do you provide study material in physical form?",
    answer: "Currently, all our study materials are digital (PDFs, e-notes). This allows for easy updates and accessibility. However, we can arrange printed materials on request at additional cost."
  },
  {
    question: "What is your refund policy?",
    answer: "We offer a 7-day money-back guarantee for all courses. If you're not satisfied with the course within the first week, you can request a full refund with no questions asked."
  },
  {
    question: "How are the mock tests conducted?",
    answer: "Mock tests are conducted online in a timed, exam-like environment. You'll get detailed analysis including section-wise performance, time management insights, and all-India ranking."
  },
  {
    question: "Do you provide interview preparation for M.Arch admissions?",
    answer: "Yes, our Comprehensive batch includes interview preparation guidance. We conduct mock interviews and provide tips from students who have successfully cleared interviews at IITs, NITs, and SPAs."
  }
]

export function FAQ() {
  return (
    <section id="faq" className="py-20 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Got questions? We&apos;ve got answers.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-gradient-to-r from-blue-50/50 to-white border border-blue-100 rounded-xl px-6 data-[state=open]:border-primary/50"
              >
                <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline py-5 font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
