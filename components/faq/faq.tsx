"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "Do I need to know how to code?",
    answer:
      "No. Grasshopper is visual programming — you'll be working with components and wires, not syntax. We teach the logic from scratch and you'll build fluency through doing.",
  },
  {
    question: "Do I need to own Rhino already?",
    answer:
      "You'll need access to it. Rhino offers a 90-day free trial that covers most of the course, and we'll help you decide whether a full license is worth it for the career you're building toward.",
  },
  {
    question: "What if I miss a class?",
    answer:
      "Every session is recorded. You'll also have weekly office hours and a cohort channel to catch up. We recommend attending live, but the course is built so that life can happen without you falling behind.",
  },
  {
    question: "What if I miss a live class?",
    answer:
      "All live classes are recorded and uploaded within 24 hours. You can watch them at your convenience. However, we encourage attending live sessions for real-time doubt clearing.",
  },
  {
    question: "Is this enough to get a job in computational design?",
    answer:
      "Three months gets you to a strong intermediate level — enough to take on real parametric work at a studio, contribute to competition entries, and build a portfolio that gets you interviews. Senior computational design roles take longer than that, and we're honest about it.",
  },
  {
    question: "How is this different from a YouTube playlist?",
    answer:
      "Structure, feedback, accountability, and a cohort. Tutorials teach you to copy. A studio teaches you to design.",
  },
  {
    question: "Can I get a refund?",
    answer:
      "Yes — full refund within the first week if it's not the right fit, no questions asked.",
  },
  {
    question: "Do you offer a certificate?",
    answer:
      "Yes, on completion. But the portfolio you build matters more — and we'll tell you that on day one.",
  },
];

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
  );
}
