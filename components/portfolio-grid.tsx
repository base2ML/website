import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Building, Shield, Users } from "lucide-react"
import Link from "next/link"

const portfolioProjects = [
  {
    id: 1,
    title: "SmartAnalytics Dashboard",
    category: "Business",
    sector: "Enterprise",
    description:
      "AI-powered business intelligence platform that processes real-time data streams and provides predictive insights for Fortune 500 companies.",
    image: "/modern-business-dashboard.png",
    technologies: ["React", "Python", "TensorFlow", "AWS", "PostgreSQL"],
    results: "40% increase in decision-making speed, $2M cost savings annually",
    icon: Building,
    featured: true,
  },
  {
    id: 2,
    title: "SecureGov Portal",
    category: "Government",
    sector: "Public Sector",
    description:
      "Secure citizen services platform with AI-driven document processing and automated workflow management for state agencies.",
    image: "/government-portal-security.png",
    technologies: ["Next.js", "Node.js", "OpenAI", "Azure", "MongoDB"],
    results: "60% reduction in processing time, 95% citizen satisfaction rate",
    icon: Shield,
    featured: true,
  },
  {
    id: 3,
    title: "HealthTracker Pro",
    category: "Consumer",
    sector: "Healthcare",
    description:
      "Personal health monitoring app with AI-powered symptom analysis and personalized wellness recommendations.",
    image: "/health-tracking-app.png",
    technologies: ["React Native", "FastAPI", "scikit-learn", "Firebase"],
    results: "100K+ active users, 4.8/5 app store rating",
    icon: Users,
    featured: false,
  },
  {
    id: 4,
    title: "SupplyChain AI",
    category: "Business",
    sector: "Logistics",
    description:
      "Intelligent supply chain optimization platform using machine learning to predict demand and optimize inventory levels.",
    image: "/supply-chain-ai-dashboard.png",
    technologies: ["Vue.js", "Django", "PyTorch", "GCP", "Redis"],
    results: "25% inventory cost reduction, 99.2% delivery accuracy",
    icon: Building,
    featured: false,
  },
  {
    id: 5,
    title: "CivicEngagement Hub",
    category: "Government",
    sector: "Municipal",
    description:
      "Digital platform for citizen engagement with AI-powered sentiment analysis and automated response routing.",
    image: "/civic-engagement-platform.png",
    technologies: ["Angular", "Express.js", "NLP APIs", "Docker", "MySQL"],
    results: "300% increase in citizen participation, 50% faster response times",
    icon: Shield,
    featured: false,
  },
  {
    id: 6,
    title: "EduLearn Assistant",
    category: "Consumer",
    sector: "Education",
    description:
      "Personalized learning platform with AI tutoring capabilities and adaptive curriculum recommendations.",
    image: "/placeholder-cuuwy.png",
    technologies: ["React", "Flask", "Transformers", "Kubernetes", "PostgreSQL"],
    results: "85% improvement in learning outcomes, 50K+ students served",
    icon: Users,
    featured: false,
  },
]

export function PortfolioGrid() {
  const featuredProjects = portfolioProjects.filter((project) => project.featured)
  const otherProjects = portfolioProjects.filter((project) => !project.featured)

  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Featured Projects */}
        <div className="mb-16">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-8 text-center">Featured Projects</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-video bg-muted relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-primary text-primary-foreground">
                      <project.icon className="w-3 h-3 mr-1" />
                      {project.category}
                    </Badge>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-heading font-semibold text-foreground">{project.title}</h3>
                    <Button variant="ghost" size="sm" asChild>
                      <Link href={`/portfolio/${project.id}`}>
                        <ExternalLink className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="border-t border-border pt-4">
                    <p className="text-sm font-medium text-primary mb-1">Key Results:</p>
                    <p className="text-sm text-muted-foreground">{project.results}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h2 className="text-3xl font-heading font-bold text-foreground mb-8 text-center">More Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-video bg-muted relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge variant="secondary" className="bg-primary text-primary-foreground text-xs">
                      <project.icon className="w-3 h-3 mr-1" />
                      {project.category}
                    </Badge>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-heading font-semibold text-foreground">{project.title}</h3>
                    <Button variant="ghost" size="sm" asChild>
                      <Link href={`/portfolio/${project.id}`}>
                        <ExternalLink className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                  <p className="text-muted-foreground text-sm mb-3 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                  <div className="border-t border-border pt-3">
                    <p className="text-xs text-muted-foreground">{project.results}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <Card className="p-8 bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
            <h3 className="text-2xl font-heading font-bold text-foreground mb-4">Ready to Start Your AI Project?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join the growing list of satisfied clients who have transformed their operations with our AI-enabled
              solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">Discuss Your Project</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/demos">View Live Demos</Link>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
