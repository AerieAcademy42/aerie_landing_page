import { About } from "@/components/about/about";
import { CourseCurriculum } from "@/components/course-curriculum";
import { CoursesData } from "@/components/course-curriculum/data";
import { ExpertMentors } from "@/components/expert-mentor";
import { FAQ } from "@/components/faq";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar/navbar";
import WhoIsThisFor from "@/components/whoItsFor/WhoItsForSection";
import { WhyAerie } from "@/components/why-aerie";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <WhoIsThisFor />
      <About />
      <ExpertMentors />
      <CourseCurriculum weeks={CoursesData} />
      <WhyAerie />
      <FAQ />
      <Footer />
    </main>
  );
}
