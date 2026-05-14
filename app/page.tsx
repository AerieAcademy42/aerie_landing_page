import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { About } from "@/components/about"
import { Courses } from "@/components/courses"
import { Testimonials } from "@/components/testimonials"
import { Team } from "@/components/team"
import { FAQ } from "@/components/faq"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Courses />
      <Testimonials />
      <Team />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  )
}
