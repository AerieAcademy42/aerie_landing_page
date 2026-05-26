"use client";

import { useState } from "react";
import CurriculumList from "./curriculum-list";
import { CourseCurriculumProps } from "./data";
import { VideoSection } from "./video-section";

export function CourseCurriculum({ weeks }: CourseCurriculumProps) {
  const [expandedWeek, setExpandedWeek] = useState<string | null>(
    weeks[0]?.id || null,
  );

  return (
    <div id="course" className="w-full max-w-6xl mx-auto px-4 py-16 ">
      <div className="mb-12">
        <h1 className="text-blue-500 uppercase tracking-[0.3em] font-semibold mb-4">
          Course Curriculum
        </h1>

        <p className="text-4xl font-bold">
          Master the fundamentals week by week
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-16 items-start">
        {/* LEFT */}
        <div className="sticky top-10">
          <VideoSection />
        </div>

        {/* RIGHT */}
        <CurriculumList weeks={weeks} />
      </div>
    </div>
  );
}
