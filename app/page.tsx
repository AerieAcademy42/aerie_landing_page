import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { ExpertMentors } from "@/components/export-mentor";
import { FAQ } from "@/components/faq";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import HowItWorks from "@/components/howit-work";
import { Navbar } from "@/components/navbar";
import Stack from "@/components/stack";
import WhoIsThisFor from "@/components/whoItsFor/WhoItsForSection";
import WhyAerie from "@/components/why-Aerie";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      {/* <Features /> */}
      <WhoIsThisFor />
      <ExpertMentors />
      <About />
      <HowItWorks />
      <Stack />
      <WhyAerie />
      {/* <Courses /> */}
      {/* <Testimonials /> */}
      {/* <Team /> */}
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
