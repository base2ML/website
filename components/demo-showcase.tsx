"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Building, Shield, Users, Play, ExternalLink, BarChart3, MessageSquare, Brain } from "lucide-react"
import Link from "next/link"

const demoCategories = [
  {
    id: "business",
    label: "Business Solutions",
    icon: Building,
    description: "AI-powered tools for enterprise operations and decision-making",
  },
  {
    id: "government",
    label: "Government Services",
    icon: Shield,
    description: "Secure and efficient solutions for public sector organizations",
  },
  {
    id: "consumer",
    label: "Consumer Apps",
    icon: Users,
    description: "User-friendly applications that leverage AI for everyday use",
  },
]

const demos = {
  business: [
    {
      id: "analytics-dashboard",
      title: "Smart Analytics Dashboard",
      description: "Real-time business intelligence with predictive insights and automated reporting.",
      features: ["Predictive Analytics", "Real-time Data Processing", "Custom Visualizations", "Automated Alerts"],
      demoUrl: "/demos/analytics",
      isLive: true,
      complexity: "Advanced",
    },
    {
      id: "document-processor",
      title: "AI Document Processor",
      description: "Intelligent document analysis and data extraction using natural language processing.",
      features: ["OCR Technology", "Data Extraction", "Classification", "Workflow Automation"],
      demoUrl: "/demos/document-processor",
      isLive: true,
      complexity: "Intermediate",
    },
    {
      id: "inventory-optimizer",
      title: "Supply Chain Optimizer",
      description: "Machine learning-powered inventory management and demand forecasting system.",
      features: ["Demand Forecasting", "Inventory Optimization", "Cost Analysis", "Supplier Management"],
      demoUrl: "/demos/inventory",
      isLive: false,
      complexity: "Advanced",
    },
  ],
  government: [
    {
      id: "citizen-portal",
      title: "Citizen Services Portal",
      description: "Streamlined government services with AI-powered chatbot and automated form processing.",
      features: ["AI Chatbot", "Form Processing", "Status Tracking", "Multi-language Support"],
      demoUrl: "/demos/citizen-portal",
      isLive: true,
      complexity: "Intermediate",
    },
    {
      id: "compliance-monitor",
      title: "Compliance Monitoring System",
      description: "Automated compliance checking and reporting for regulatory requirements.",
      features: ["Automated Auditing", "Risk Assessment", "Report Generation", "Alert System"],
      demoUrl: "/demos/compliance",
      isLive: false,
      complexity: "Advanced",
    },
  ],
  consumer: [
    {
      id: "health-assistant",
      title: "Personal Health Assistant",
      description: "AI-powered health tracking and personalized wellness recommendations.",
      features: ["Symptom Analysis", "Health Tracking", "Personalized Tips", "Doctor Integration"],
      demoUrl: "/demos/health-assistant",
      isLive: true,
      complexity: "Beginner",
    },
    {
      id: "learning-platform",
      title: "Adaptive Learning Platform",
      description: "Personalized education experience with AI tutoring and progress tracking.",
      features: ["Adaptive Curriculum", "AI Tutoring", "Progress Analytics", "Gamification"],
      demoUrl: "/demos/learning",
      isLive: true,
      complexity: "Intermediate",
    },
  ],
}

export function DemoShowcase() {
  const [activeCategory, setActiveCategory] = useState("business")

  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-4">Interactive Demonstrations</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose a category below to explore live demos of our AI-enabled solutions
          </p>
        </div>

        <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            {demoCategories.map((category) => (
              <TabsTrigger key={category.id} value={category.id} className="flex items-center space-x-2">
                <category.icon className="w-4 h-4" />
                <span className="hidden sm:inline">{category.label}</span>
                <span className="sm:hidden">{category.label.split(" ")[0]}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {demoCategories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-heading font-semibold text-foreground mb-2">{category.label}</h3>
                <p className="text-muted-foreground">{category.description}</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {demos[category.id as keyof typeof demos].map((demo) => (
                  <Card key={demo.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-2">
                          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                            {category.id === "business" && <BarChart3 className="w-5 h-5 text-primary" />}
                            {category.id === "government" && <Shield className="w-5 h-5 text-primary" />}
                            {category.id === "consumer" && <Brain className="w-5 h-5 text-primary" />}
                          </div>
                          <div>
                            <Badge variant={demo.isLive ? "default" : "secondary"} className="text-xs">
                              {demo.isLive ? "Live Demo" : "Coming Soon"}
                            </Badge>
                          </div>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {demo.complexity}
                        </Badge>
                      </div>

                      <h4 className="text-lg font-heading font-semibold text-foreground mb-2">{demo.title}</h4>
                      <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{demo.description}</p>

                      <div className="space-y-3 mb-6">
                        <p className="text-sm font-medium text-foreground">Key Features:</p>
                        <div className="grid grid-cols-2 gap-2">
                          {demo.features.map((feature) => (
                            <div key={feature} className="flex items-center space-x-2">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                              <span className="text-xs text-muted-foreground">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex space-x-2">
                        {demo.isLive ? (
                          <Button asChild className="flex-1">
                            <Link href={demo.demoUrl}>
                              <Play className="w-4 h-4 mr-2" />
                              Try Demo
                            </Link>
                          </Button>
                        ) : (
                          <Button disabled className="flex-1">
                            <Play className="w-4 h-4 mr-2" />
                            Coming Soon
                          </Button>
                        )}
                        <Button variant="outline" size="sm" asChild>
                          <Link href={`/portfolio#${demo.id}`}>
                            <ExternalLink className="w-4 h-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Custom Demo CTA */}
        <div className="mt-16">
          <Card className="p-8 bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20 text-center">
            <MessageSquare className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-heading font-bold text-foreground mb-4">Need a Custom Demo?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Want to see how our AI solutions can be tailored to your specific needs? Schedule a personalized
              demonstration with our team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">Schedule Custom Demo</Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">Contact Our Team</Link>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
