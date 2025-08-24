import { Button } from "@/components/ui/button"
import { Play, Zap } from "lucide-react"

export function DemosHero() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center mb-6">
          <div className="flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full">
            <Zap className="w-4 h-4" />
            <span className="text-sm font-medium">Live Interactive Demos</span>
          </div>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">
          Experience AI in Action
        </h1>
        <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
          Explore our interactive demonstrations and see how AI-powered solutions can transform your business
          operations, government services, or consumer applications.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-lg px-8 py-3">
            <Play className="mr-2 h-5 w-5" />
            Start Exploring
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-3 bg-transparent">
            Request Custom Demo
          </Button>
        </div>
      </div>
    </section>
  )
}
