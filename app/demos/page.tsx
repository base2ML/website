import { Navigation } from "@/components/navigation"
import { DemosHero } from "@/components/demos-hero"
import { DemoShowcase } from "@/components/demo-showcase"
import { Footer } from "@/components/footer"

export default function DemosPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <DemosHero />
      <DemoShowcase />
      <Footer />
    </main>
  )
}
