"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react"
import { motion } from "framer-motion"

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsLoading(false)
    setIsSubmitted(true)
  }

  return (
    <section id="contact" className="py-20 px-4 gradient-blue">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Get in <span className="text-blue-200">Touch</span>
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            Have questions about our courses? Fill out the form and our team will get back to you within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Contact Information
              </h3>
              <p className="text-white/80 mb-8">
                Reach out to us for any queries regarding admissions, courses, or general information. We&apos;re here to help!
              </p>
            </div>

            <div className="space-y-6">
              <motion.div whileHover={{ x: 5 }} className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-medium text-white">Email</div>
                  <a href="mailto:hello@aerieacademy.com" className="text-white/80 hover:text-white transition-colors">
                    hello@aerieacademy.com
                  </a>
                </div>
              </motion.div>

              <motion.div whileHover={{ x: 5 }} className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-medium text-white">Phone</div>
                  <a href="tel:+919876543210" className="text-white/80 hover:text-white transition-colors">
                    +91 98765 43210
                  </a>
                </div>
              </motion.div>

              <motion.div whileHover={{ x: 5 }} className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-medium text-white">Office</div>
                  <p className="text-white/80">
                    123 Education Hub, Sector 18<br />
                    New Delhi, India 110001
                  </p>
                </div>
              </motion.div>
            </div>

            <div className="bg-white/15 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
              <h4 className="text-lg font-semibold text-white mb-4">Office Hours</h4>
              <div className="space-y-2 text-white/80">
                <p>Monday - Friday: 9:00 AM - 8:00 PM</p>
                <p>Saturday: 10:00 AM - 6:00 PM</p>
                <p>Sunday: Closed (Online support available)</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-3xl shadow-2xl"
          >
            {isSubmitted ? (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="flex flex-col items-center justify-center h-full py-12 text-center"
              >
                <div className="h-20 w-20 rounded-full bg-green-100 flex items-center justify-center mb-6">
                  <CheckCircle className="h-10 w-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Thank You!
                </h3>
                <p className="text-muted-foreground">
                  We&apos;ve received your message and will get back to you within 24 hours.
                </p>
                <Button 
                  className="mt-6 gradient-blue text-white" 
                  onClick={() => setIsSubmitted(false)}
                >
                  Send Another Message
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      required
                      className="border-blue-200 focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      required
                      className="border-blue-200 focus:border-primary"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-foreground">
                    Phone Number *
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    required
                    className="border-blue-200 focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="course" className="text-sm font-medium text-foreground">
                    Interested Course
                  </label>
                  <select
                    id="course"
                    name="course"
                    className="w-full h-10 px-3 rounded-md bg-white border border-blue-200 text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  >
                    <option value="">Select a course</option>
                    <option value="foundation">Foundation Batch</option>
                    <option value="comprehensive">Comprehensive Batch</option>
                    <option value="test-series">Test Series Only</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your GATE preparation journey and any specific questions..."
                    rows={4}
                    className="border-blue-200 focus:border-primary resize-none"
                  />
                </div>

                <Button type="submit" className="w-full py-6 text-lg font-semibold gradient-blue" disabled={isLoading}>
                  {isLoading ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                    />
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
