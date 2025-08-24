import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Shield, Zap, Users, Lightbulb, Heart, Globe } from "lucide-react"
import Link from "next/link"

const values = [
  {
    icon: Lightbulb,
    title: "Innovation First",
    description:
      "We stay at the forefront of AI research, continuously integrating the latest breakthroughs into practical solutions that drive real business value.",
  },
  {
    icon: Shield,
    title: "Trust & Security",
    description:
      "Every solution we build prioritizes data security, privacy, and ethical AI practices, ensuring our clients can deploy with confidence.",
  },
  {
    icon: Users,
    title: "Client Partnership",
    description:
      "We work as an extension of your team, providing ongoing support, training, and optimization to ensure long-term success.",
  },
  {
    icon: Zap,
    title: "Rapid Delivery",
    description:
      "Our proven methodologies and pre-built AI components enable us to deliver production-ready solutions faster than traditional development.",
  },
  {
    icon: Heart,
    title: "Social Impact",
    description:
      "We believe AI should benefit everyone. We actively work on projects that improve public services and create positive social outcomes.",
  },
  {
    icon: Globe,
    title: "Accessibility",
    description:
      "Complex AI shouldn't require a PhD to understand. We make our solutions intuitive and provide clear documentation and training.",
  },
]

export function CompanyValues() {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-4">Our Values</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The principles that guide everything we do, from research to deployment
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {values.map((value) => (
            <Card key={value.title} className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <value.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-heading font-semibold text-foreground mb-3">{value.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{value.description}</p>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <Card className="p-8 bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20 text-center">
          <h3 className="text-2xl font-heading font-bold text-foreground mb-4">Ready to Work Together?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join the growing number of organizations that trust base2ML to deliver intelligent, scalable AI solutions.
            Let's discuss how we can help transform your operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">Start a Conversation</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/portfolio">See Our Work</Link>
            </Button>
          </div>
        </Card>
      </div>
    </section>
  )
}
