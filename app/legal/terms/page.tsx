import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"
import { ArrowLeft, Scale } from "lucide-react"
import Link from "next/link"

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Button variant="ghost" asChild className="mb-4">
              <Link href="/legal">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Legal
              </Link>
            </Button>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Scale className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h1 className="text-3xl font-heading font-bold text-foreground">Terms of Service</h1>
                <p className="text-muted-foreground">Last updated: December 15, 2024</p>
              </div>
            </div>
          </div>

          <div className="prose prose-gray max-w-none">
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-heading font-semibold text-foreground mb-4">Agreement to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  These Terms of Service ("Terms") govern your use of base2ML's website, services, and AI-enabled web
                  applications. By accessing or using our services, you agree to be bound by these Terms. If you do not
                  agree to these Terms, please do not use our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-semibold text-foreground mb-4">Description of Services</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  base2ML provides AI-enabled web application development services, including:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Custom AI solution development for business, government, and consumer applications</li>
                  <li>Machine learning model development and deployment</li>
                  <li>AI consulting and strategy services</li>
                  <li>Technical support and maintenance</li>
                  <li>Training and documentation services</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-semibold text-foreground mb-4">User Responsibilities</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">When using our services, you agree to:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Provide accurate and complete information</li>
                  <li>Use our services only for lawful purposes</li>
                  <li>Respect intellectual property rights</li>
                  <li>Maintain the confidentiality of any access credentials</li>
                  <li>Comply with all applicable laws and regulations</li>
                  <li>Not attempt to reverse engineer or compromise our systems</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-semibold text-foreground mb-4">Intellectual Property</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-heading font-medium text-foreground mb-2">Our IP Rights</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      All content, software, and materials provided by base2ML, including but not limited to text,
                      graphics, logos, code, and AI models, are protected by intellectual property laws and remain our
                      exclusive property.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-medium text-foreground mb-2">Client IP Rights</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      You retain ownership of your data and any intellectual property you provide. Custom solutions
                      developed specifically for you will be governed by separate project agreements.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-semibold text-foreground mb-4">Service Availability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  While we strive to provide reliable services, we do not guarantee uninterrupted availability. We may
                  temporarily suspend services for maintenance, updates, or due to circumstances beyond our control. We
                  will provide reasonable notice when possible.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-semibold text-foreground mb-4">Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  To the maximum extent permitted by law, base2ML shall not be liable for:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Indirect, incidental, or consequential damages</li>
                  <li>Loss of profits, data, or business opportunities</li>
                  <li>Damages resulting from third-party services or integrations</li>
                  <li>Any damages exceeding the amount paid for our services</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-semibold text-foreground mb-4">Termination</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Either party may terminate the use of our services at any time. Upon termination, your right to use
                  our services will cease immediately. Provisions regarding intellectual property, limitation of
                  liability, and dispute resolution will survive termination.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-semibold text-foreground mb-4">Governing Law</h2>
                <p className="text-muted-foreground leading-relaxed">
                  These Terms are governed by the laws of the State of California, United States, without regard to
                  conflict of law principles. Any disputes will be resolved in the courts of San Francisco County,
                  California.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-semibold text-foreground mb-4">Changes to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update these Terms from time to time. We will notify you of any material changes by posting the
                  new Terms on our website and updating the "Last updated" date. Your continued use of our services
                  after such changes constitutes acceptance of the new Terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-semibold text-foreground mb-4">Contact Information</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have questions about these Terms of Service, please contact us:
                </p>
                <div className="mt-4 p-4 bg-muted/50 rounded-lg">
                  <p className="text-foreground font-medium">base2ML Legal Team</p>
                  <p className="text-muted-foreground">Email: legal@base2ml.com</p>
                  <p className="text-muted-foreground">Address: 123 AI Innovation Drive, San Francisco, CA 94105</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
