import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Brain, Code, Users } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-background circuit-pattern" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">
            AI-Enabled Web Applications
            <span className="block text-primary">Built for the Future</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Professional development solutions for business, government, and consumer markets. Founded by experienced AI
            engineers and machine learning instructors.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" asChild className="text-lg px-8 py-3">
              <Link href="/contact">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="text-lg px-8 py-3 border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
            >
              <Link href="/portfolio">View Our Work</Link>
            </Button>
          </div>

          {/* Feature cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:shadow-primary/20 border-border/50">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Brain className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-2">AI-Powered Solutions</h3>
              <p className="text-muted-foreground">
                Cutting-edge artificial intelligence and machine learning integrated into every application we build.
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:shadow-primary/20 border-border/50">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Code className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-2">Expert Development</h3>
              <p className="text-muted-foreground">
                Professional web applications built with modern technologies and best practices by experienced
                engineers.
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:shadow-primary/20 border-border/50">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-2">Multi-Sector Expertise</h3>
              <p className="text-muted-foreground">
                Serving business, government, and consumer markets with tailored solutions for each sector's unique
                needs.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
