import { Card } from "@/components/ui/card"
import { Calendar, Lightbulb, Rocket, Target } from "lucide-react"

const milestones = [
  {
    year: "2019",
    title: "The Beginning",
    description:
      "Founded by Chris Lindeman and Abi Crumb to put all the fun tech ideas to use.",//Michael Rodriguez, both Instructional Associates at Georgia Tech, who saw the gap between academic AI research and practical business applications.",
    icon: Lightbulb,
  },
  {
    year: "2020",
    title: "First Major Client",
    description:
      "Delivered our first ML solution, achieving 40% improvement in operational efficiency through predictive analytics.",
    icon: Target,
  },
  {
    year: "2021",
    title: "Government Partnership",
    description:
      "Expanded into the public sector with secure AI solutions for state agencies, focusing on citizen services and compliance automation.",
    icon: Rocket,
  },
  {
    year: "2025",
    title: "Multi-Sector Expansion",
    description:
      "Now serving a portfolio of programs and produccts to clients across business, government, and consumer markets with a team of 4 AI specialists and a track record of transformative results.",
    icon: Calendar,
  },
]

export function CompanyStory() {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-4">Our Journey</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From academic research to real-world impact, here's how we've grown to become a trusted AI development
            partner
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-border hidden lg:block" />

          <div className="space-y-8 lg:space-y-12">
            {milestones.map((milestone, index) => (
              <div key={milestone.year} className="relative">
                <div
                  className={`flex flex-col lg:flex-row items-center ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div className="w-full lg:w-5/12">
                    <Card className="p-6 hover:shadow-lg transition-shadow">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                          <milestone.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <span className="text-2xl font-heading font-bold text-primary">{milestone.year}</span>
                          <h3 className="text-lg font-heading font-semibold text-foreground">{milestone.title}</h3>
                        </div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{milestone.description}</p>
                    </Card>
                  </div>

                  {/* Timeline dot */}
                  <div className="hidden lg:flex w-2/12 justify-center">
                    <div className="w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg" />
                  </div>

                  {/* Spacer */}
                  <div className="hidden lg:block w-5/12" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
