"use client";
import { Check, ChevronUp } from "lucide-react";
import { useState } from "react";
import { CourseCurriculumProps } from "./data";

export function CourseCurriculum({ weeks }: CourseCurriculumProps) {
  const [expandedWeek, setExpandedWeek] = useState<string | null>(
    weeks[0]?.id || null,
  );
  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-8 md:py-12">
      <div className="mb-8 md:mb-12">
        <h1 className="text-2xl md:text-xl font-semibold tracking-widest text-blue-500 mb-2 md:mb-3">
          Course Curriculum
        </h1>
        <p className="font-bold  md:text-2xl ">
          Master the fundamentals week by week
        </p>
      </div>

      <div className="space-y-3 md:space-y-4">
        {weeks.map((week, idx) => (
          <div
            key={week.id}
            className="border border-border rounded-lg bg-card overflow-hidden transition-all hover:shadow-lg"
          >
            <button
              onClick={() =>
                setExpandedWeek(expandedWeek === week.id ? null : week.id)
              }
              className="w-full px-4 md:px-8 py-4 md:py-6 flex items-center justify-between hover:bg-muted/30 transition-colors gap-3"
            >
              <div className="flex items-center gap-2 md:gap-4 text-left min-w-0">
                <span className="text-xs md:text-sm font-semibold text-muted-foreground flex-shrink-0">
                  Week-{week.week}
                </span>
                <h3 className="text-base md:text-xl font-semibold text-foreground truncate md:truncate-none">
                  {week.title}
                </h3>
              </div>
              <ChevronUp
                className={`w-5 h-5 text-muted-foreground transition-transform flex-shrink-0 ${
                  expandedWeek === week.id ? "rotate-180" : ""
                }`}
              />
            </button>

            {expandedWeek === week.id && (
              <div className="border-t border-border">
                <div className="px-4 md:px-8 py-6 md:py-8 flex flex-col md:flex-row gap-6 md:gap-8">
                  {/* Visual Element */}
                  {/* <div className="flex-shrink-0 w-full md:w-40 lg:w-48 h-40 md:h-40 lg:h-48">
                    <div
                      className={`w-full h-full rounded-lg bg-gradient-to-br opacity-80 flex items-center justify-center text-white text-center p-4`}
                    >
                      <div className="text-xs md:text-sm font-semibold line-clamp-3">
                        {week.title}
                      </div>
                    </div>
                  </div> */}
                  <div className="flex-shrink-0 w-full  h-full md:w-40 lg:w-48 h-40 md:h-40 lg:h-48">
                    {week.videoUrl ? (
                      <video
                        className="w-full h-full rounded-lg object-cover bg-black"
                        playsInline
                        autoPlay
                        loop
                      >
                        <source src={week.videoUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    ) : (
                      <div
                        className={`w-full h-full rounded-lg bg-gradient-to-br  opacity-80 flex items-center justify-center text-white text-center p-4`}
                      >
                        <div className="text-xs md:text-sm font-semibold line-clamp-3">
                          {week.title}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Topics List */}
                  <div className="flex-1 min-w-0">
                    <div className="space-y-2 md:space-y-3">
                      {week.topics.map((topic, topicIdx) => (
                        <div
                          key={topicIdx}
                          className="flex items-start gap-3 md:gap-4 group"
                        >
                          <div className="mt-0.5 md:mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                            <Check className="w-3 h-3 text-white" />
                          </div>
                          <p className="text-sm md:text-base text-foreground font-medium leading-relaxed group-hover:text-primary transition-colors break-words">
                            {topic}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
