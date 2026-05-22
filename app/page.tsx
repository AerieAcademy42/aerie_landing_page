import { About } from "@/components/about/about";
import { CourseCurriculum } from "@/components/course-curriculum";
import { CoursesData } from "@/components/course-curriculum/data";
import { ExpertMentors } from "@/components/expert-mentor";
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
      <WhoIsThisFor />
      <About />
      <ExpertMentors />
      <CourseCurriculum weeks={CoursesData} />
      <HowItWorks />
      <Stack />
      <WhyAerie />
      <FAQ />
      <Footer />
    </main>
  );
}
