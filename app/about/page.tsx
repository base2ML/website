import { Navigation } from "@/components/navigation"
import { AboutHero } from "@/components/about-hero"
import { CompanyStory } from "@/components/company-story"
import { TeamSection } from "@/components/team-section"
import { CompanyValues } from "@/components/company-values"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <AboutHero />
      <CompanyStory />
      <TeamSection />
      <CompanyValues />
      <Footer />
    </main>
  )
}
