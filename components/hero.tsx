"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Users, Award, BookOpen, Star, Play, CheckCircle } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const words = ["structured", "comprehensive", "expert-led", "proven"]

const carouselCards = [
  {
    title: "Live Interactive Classes",
    description: "Learn directly from IIT/NIT alumni",
    icon: Play,
    color: "bg-gradient-to-br from-blue-500 to-blue-600",
  },
  {
    title: "Comprehensive Study Material",
    description: "1000+ pages of curated content",
    icon: BookOpen,
    color: "bg-gradient-to-br from-blue-600 to-indigo-600",
  },
  {
    title: "Mock Tests & Analysis",
    description: "50+ full-length tests with detailed analytics",
    icon: CheckCircle,
    color: "bg-gradient-to-br from-indigo-500 to-blue-500",
  },
]

export function Hero() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [activeCard, setActiveCard] = useState(0)

  useEffect(() => {
    const currentWord = words[currentWordIndex]
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentWord.length) {
            setDisplayText(currentWord.slice(0, displayText.length + 1))
          } else {
            setTimeout(() => setIsDeleting(true), 2000)
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1))
          } else {
            setIsDeleting(false)
            setCurrentWordIndex((prev) => (prev + 1) % words.length)
          }
        }
      },
      isDeleting ? 50 : 100
    )
    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentWordIndex])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % carouselCards.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const stats = [
    { icon: Users, number: "3000+", label: "Students Enrolled" },
    { icon: Award, number: "500+", label: "IIT/NIT Selections" },
    { icon: BookOpen, number: "50+", label: "Expert Faculty" },
  ]

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 relative overflow-hidden pt-20">
      {/* Animated background elements */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-20 right-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-20 left-10 w-96 h-96 bg-sky-400/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-1/3 left-1/4 w-4 h-4 bg-white/30 rounded-full"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        className="absolute top-1/2 right-1/4 w-3 h-3 bg-white/20 rounded-full"
      />

      <div className="relative max-w-7xl mx-auto px-4 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-4 py-2 mb-6"
            >
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-white/90 text-sm font-medium">Admissions Open for GATE 2026</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white">
              Are you looking for{" "}
              <span className="text-white bg-white/20 px-2 rounded">
                {displayText}
                <span className="cursor-blink text-white/80">|</span>
              </span>
              <br />
              <span className="mt-2 block">program for GATE 2026</span>
              <span className="block text-white/90">Architecture & Planning?</span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6 text-lg text-white/80 max-w-lg leading-relaxed"
            >
              Join 3000+ students who&apos;ve trusted Aerie to crack IITs, NITs & SPAs with our structured curriculum and expert guidance.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 pt-8"
            >
              <Button size="lg" asChild className="text-lg px-8 py-6 bg-white text-blue-700 hover:bg-white/90 font-semibold shadow-xl shadow-blue-900/30">
                <Link href="#courses">
                  Explore Courses
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-lg px-8 py-6 border-2 border-white/50 text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm">
                <Link href="#contact">Get Free Counseling</Link>
              </Button>
            </motion.div>

            {/* Rating inline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8 flex items-center gap-4"
            >
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-white">4.8</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${i < 5 ? "text-white fill-white" : "text-white/40"}`}
                    />
                  ))}
                </div>
              </div>
              <span className="text-white/70 text-sm">500+ Google Reviews</span>
            </motion.div>
          </motion.div>

          {/* Right side - Floating Carousel */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative h-[500px] hidden lg:block"
          >
            {/* Main floating card */}
            <div className="relative w-full h-full flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCard}
                  initial={{ opacity: 0, y: 50, rotateY: -15 }}
                  animate={{ opacity: 1, y: 0, rotateY: 0 }}
                  exit={{ opacity: 0, y: -50, rotateY: 15 }}
                  transition={{ duration: 0.5 }}
                  className={`${carouselCards[activeCard].color} rounded-3xl p-8 w-80 shadow-2xl`}
                >
                  <div className="bg-white/20 rounded-2xl p-4 w-fit mb-6">
                    {(() => {
                      const Icon = carouselCards[activeCard].icon
                      return <Icon className="w-10 h-10 text-white" />
                    })()}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {carouselCards[activeCard].title}
                  </h3>
                  <p className="text-white/80 text-lg">
                    {carouselCards[activeCard].description}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Floating stat cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-10 -left-4 bg-white rounded-2xl p-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 rounded-full p-2">
                    <Users className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-gray-900">3000+</div>
                    <div className="text-xs text-gray-500">Students</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                className="absolute bottom-20 -left-8 bg-white rounded-2xl p-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-indigo-100 rounded-full p-2">
                    <Award className="w-5 h-5 text-indigo-600" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-gray-900">500+</div>
                    <div className="text-xs text-gray-500">IIT/NIT Selections</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
                className="absolute top-24 -right-4 bg-white rounded-2xl p-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-sky-100 rounded-full p-2">
                    <BookOpen className="w-5 h-5 text-sky-600" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-gray-900">50+</div>
                    <div className="text-xs text-gray-500">Expert Faculty</div>
                  </div>
                </div>
              </motion.div>

              {/* Carousel indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {carouselCards.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveCard(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      index === activeCard ? "bg-white w-8" : "bg-white/40"
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mobile Stats - visible only on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="grid grid-cols-3 gap-4 pt-12 lg:hidden"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
              className="bg-white/15 backdrop-blur-sm rounded-xl p-4 text-center"
            >
              <div className="text-2xl font-bold text-white">{stat.number}</div>
              <div className="text-white/70 text-xs mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
