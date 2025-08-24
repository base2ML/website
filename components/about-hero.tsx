import { Badge } from "@/components/ui/badge"
import { GraduationCap, Users, Award } from "lucide-react"

export function AboutHero() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <Badge variant="secondary" className="bg-primary/10 text-primary px-4 py-2">
              <GraduationCap className="w-4 h-4 mr-2" />
              Founded by AI Experts
            </Badge>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">
            About base2ML
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
            We're a team of experienced AI engineers and machine learning instructors dedicated to building intelligent
            web applications that solve real-world problems across business, government, and consumer markets.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-heading font-semibold text-foreground mb-2">Expert Team</h3>
            <p className="text-muted-foreground">
              PhD-level AI researchers and industry veterans with 15+ years of combined experience
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <GraduationCap className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-heading font-semibold text-foreground mb-2">Teaching Background</h3>
            <p className="text-muted-foreground">
              Former ML instructors at top universities, bringing educational clarity to complex AI solutions
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-heading font-semibold text-foreground mb-2">Proven Results</h3>
            <p className="text-muted-foreground">
              50+ successful AI implementations across diverse industries and market sectors
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
