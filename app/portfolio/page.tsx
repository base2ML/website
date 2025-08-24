import { Navigation } from "@/components/navigation"
import { PortfolioHero } from "@/components/portfolio-hero"
import { PortfolioGrid } from "@/components/portfolio-grid"
import { Footer } from "@/components/footer"

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <PortfolioHero />
      <PortfolioGrid />
      <Footer />
    </main>
  )
}
