import { Navigation } from "@/components/navigation"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"
import { FileText, Shield, Scale, Mail } from "lucide-react"
import Link from "next/link"

export default function LegalPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-heading font-bold text-foreground mb-6">Legal Information</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Our commitment to transparency, privacy, and ethical business practices
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-xl font-heading font-semibold text-foreground">Privacy Policy</h2>
              </div>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Learn how we collect, use, and protect your personal information and data when you use our services or
                visit our website.
              </p>
              <Button asChild>
                <Link href="/legal/privacy">Read Privacy Policy</Link>
              </Button>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Scale className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-xl font-heading font-semibold text-foreground">Terms of Service</h2>
              </div>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Understand the terms and conditions that govern your use of our services, website, and AI solutions.
              </p>
              <Button asChild>
                <Link href="/legal/terms">Read Terms of Service</Link>
              </Button>
            </Card>
          </div>

          <Card className="p-8 bg-muted/50">
            <div className="text-center">
              <FileText className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-heading font-bold text-foreground mb-4">Questions About Our Policies?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                If you have any questions about our privacy practices, terms of service, or legal policies, please don't
                hesitate to contact us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild>
                  <Link href="mailto:legal@base2ml.com">
                    <Mail className="w-4 h-4 mr-2" />
                    Contact Legal Team
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/contact">General Contact</Link>
                </Button>
              </div>
            </div>
          </Card>

          <div className="mt-12 text-center text-sm text-muted-foreground">
            <p>Last updated: December 2024</p>
            <p className="mt-2">
              base2ML is committed to maintaining the highest standards of legal compliance and ethical business
              practices.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
