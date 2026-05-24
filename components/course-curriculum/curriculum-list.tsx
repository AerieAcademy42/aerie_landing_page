import { AnimatePresence, motion } from "framer-motion";
import { Check, ChevronUp } from "lucide-react";
import { useState } from "react";
import { CourseCurriculumProps } from "./data";

export default function CurriculumList({ weeks }: CourseCurriculumProps) {
  const [expandedWeek, setExpandedWeek] = useState<string | null>(
    weeks[0]?.id || null,
  );

  return (
    <div className="relative">
      <motion.div
        layout
        className="space-y-1"
        transition={{
          layout: {
            duration: 0.7,
            type: "spring",
          },
        }}
      >
        {weeks.map((week, idx) => {
          const active = expandedWeek === week.id;

          return (
            <motion.div
              key={week.id}
              layout
              initial={{ opacity: 0, y: 40 }}
              animate={{
                opacity: active ? 1 : 0.7,
                scale: active ? 1 : 0.96,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                type: "spring",
              }}
              className={`
                    rounded-3xl border overflow-hidden
                    backdrop-blur-xl
                    bg-white/5
                    transition-all
                    ${
                      active
                        ? "border-blue-500 shadow-2xl shadow-blue-500/20"
                        : "border-white/10"
                    }
                  `}
            >
              {/* HEADER */}
              <button
                onClick={() => setExpandedWeek(active ? null : week.id)}
                className="w-full px-6 py-2  flex items-center justify-between"
              >
                <div className="flex items-center gap-4 text-left">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">
                      Week {week.week}
                    </p>

                    <h3 className="text-xl font-semibold">{week.title}</h3>
                  </div>
                </div>

                <motion.div
                  animate={{
                    rotate: active ? 180 : 0,
                  }}
                  transition={{
                    duration: 0.4,
                  }}
                >
                  <ChevronUp className="w-5 h-5" />
                </motion.div>
              </button>

              {/* EXPAND */}
              <AnimatePresence initial={false}>
                {active && (
                  <motion.div
                    key="content"
                    initial={{
                      height: 0,
                      opacity: 0,
                    }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                    }}
                    transition={{
                      duration: 0.5,
                      ease: "easeInOut",
                    }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      {/* TOPICS */}
                      <div className="space-y-1">
                        {week.topics.map((topic, topicIdx) => (
                          <motion.div
                            key={topicIdx}
                            initial={{
                              opacity: 0,
                              x: -20,
                            }}
                            animate={{
                              opacity: 1,
                              x: 0,
                            }}
                            transition={{
                              delay: topicIdx * 0.08,
                            }}
                            className="flex items-start gap-4"
                          >
                            <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center mt-1">
                              <Check className="w-3 h-3 text-white" />
                            </div>

                            <p className="text-muted-foreground leading-relaxed">
                              {topic}
                            </p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
