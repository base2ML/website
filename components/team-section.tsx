import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Linkedin, Mail, Award, BookOpen } from "lucide-react"

const teamMembers = [
  {
    name: "Chris Cosmo",
    role: "Co-Founder & CTO",
    title: "Instructional Associate, ",
    image: "/professional-ai-researcher.png",
    bio: "",
    expertise: ["Deep Learning", "Neural Networks", "Computer Vision", "AI Strategy"],
    achievements: [
      "5 years in AI research and development",
      "MAA MathFest Presenter",
      "NSF Career Award recipient",
      "Author of 'Missin Data: The Missing Link'",
    ],
    linkedin: "https://linkedin.com/in/cwlindeman",
    email: "clindeman@base2ml.com",
  },
  {
    name: "Abi Crumb",
    role: "Co-Founder & COO",
    title: "Former Berkeley AI Instructor",
    image: "/professional-ai-engineer.png",
    bio: "PhD in Artificial Intelligence from UC Berkeley, former Senior Lecturer in Machine Learning. Specialized in natural language processing and has built AI systems for Fortune 500 companies.",
    expertise: ["Natural Language Processing", "MLOps", "Distributed Systems", "AI Architecture"],
    achievements: [
      "12 years in enterprise AI development",
      "Former Principal Engineer at Microsoft AI",
      "IEEE Fellow in AI and Machine Learning",
      "Keynote speaker at 20+ AI conferences",
    ],
    linkedin: "https://linkedin.com/in/mrodriguez-ai",
    email: "acrumb@base2ml.com",
  },
  {
    name: "Dr. Emily Watson",
    role: "Head of AI Research",
    title: "Former MIT Research Scientist",
    image: "/professional-woman-data-scientist.png",
    bio: "PhD in Data Science from MIT, former Research Scientist at OpenAI. Leads our advanced AI research initiatives and ensures our solutions incorporate the latest breakthroughs in machine learning.",
    expertise: ["Reinforcement Learning", "Generative AI", "Research & Development", "AI Ethics"],
    achievements: [
      "10 years in cutting-edge AI research",
      "Former Research Lead at DeepMind",
      "30+ publications in Nature and Science",
      "AI Ethics Advisory Board member",
    ],
    linkedin: "https://linkedin.com/in/emilywatson-ai",
    email: "emily@base2ml.com",
  },
]

export function TeamSection() {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-4">Meet Our Leadership Team</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            World-class AI experts with deep academic backgrounds and proven industry experience
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <Card key={member.name} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-square bg-muted relative overflow-hidden">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-heading font-bold text-foreground mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-1">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.title}</p>
                </div>

                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{member.bio}</p>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-foreground mb-2 flex items-center">
                      <BookOpen className="w-4 h-4 mr-2" />
                      Expertise
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {member.expertise.map((skill) => (
                        <Badge key={skill} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-foreground mb-2 flex items-center">
                      <Award className="w-4 h-4 mr-2" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-1">
                      {member.achievements.map((achievement, index) => (
                        <li key={index} className="text-xs text-muted-foreground flex items-start">
                          <div className="w-1 h-1 bg-primary rounded-full mt-2 mr-2 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex space-x-2 pt-2">
                    <Button variant="outline" size="sm" asChild>
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                        <Linkedin className="w-4 h-4" />
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href={`mailto:${member.email}`}>
                        <Mail className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
