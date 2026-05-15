import { Card } from "./ui/card";

const howItWorksData = [
  {
    name: "Two live sessions a week",
    description:
      "One teaching session with your mentor, one studio-style review where work gets seen and critiqued.",
  },
  {
    name: "One weekly exercise",
    description:
      "Compounding work that becomes a portfolio piece — not throwaway homework.",
  },
  {
    name: "Private cohort channel",
    description:
      "Questions answered in hours, not days. Mentors and cohort both active.",
  },
  {
    name: "Office hours",
    description:
      "1:1 help when a definition is fighting you. Booked directly with your mentor.",
  },
  {
    name: "Every session recorded",
    description:
      "Life happens. Catch up on your own time without falling behind the cohort.",
  },
  {
    name: "Live final reviews",
    description:
      "Guest critics from practicing studios join the final review. Real feedback, real audience.",
  },
];

export default function HowItWorks() {
  return (
    <section className="px-6 py-16 md:px-12 md:py-24">
      <div className="max-w-7xl mx-auto">
        <p className=" text-sm font-semibold mb-6">HOW IT WORKS</p>
        <h2 className="text-4xl md:text-3xl  font-bold text-foreground mb-12">
          What a week at <span className="text-primary">Aerie</span> looks like.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {howItWorksData.map((item, index) => (
            <Card key={index} className="p-4">
              <h3 className="text-xl font-semibold ">{item.name}</h3>
              <p className="text-muted-foreground text-sm">
                {item.description}
              </p>
            </Card>
          ))}
        </div>

        <p className="text-gray-500 text-sm mt-8 italic">
          Total commitment: roughly 8–10 hours a week. Designed to fit alongside
          a job or a degree.
        </p>
      </div>
    </section>
  );
}
