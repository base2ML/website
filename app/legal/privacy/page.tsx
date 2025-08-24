import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"
import { ArrowLeft, Shield } from "lucide-react"
import Link from "next/link"

export default function PrivacyPolicyPage() {
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
                <Shield className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h1 className="text-3xl font-heading font-bold text-foreground">Privacy Policy</h1>
                <p className="text-muted-foreground">Last updated: December 15, 2024</p>
              </div>
            </div>
          </div>

          <div className="prose prose-gray max-w-none">
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-heading font-semibold text-foreground mb-4">Introduction</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  base2ML ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains
                  how we collect, use, disclose, and safeguard your information when you visit our website, use our
                  services, or engage with our AI-enabled web applications.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  By using our services, you consent to the data practices described in this policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-semibold text-foreground mb-4">Information We Collect</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-heading font-medium text-foreground mb-2">Personal Information</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We may collect personal information that you voluntarily provide, including:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1">
                      <li>Name, email address, and contact information</li>
                      <li>Company name and job title</li>
                      <li>Project requirements and business needs</li>
                      <li>Communication preferences</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-heading font-medium text-foreground mb-2">Usage Information</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We automatically collect certain information about your device and usage patterns:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1">
                      <li>IP address and browser information</li>
                      <li>Pages visited and time spent on our website</li>
                      <li>Referring websites and search terms</li>
                      <li>Device type and operating system</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-semibold text-foreground mb-4">
                  How We Use Your Information
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">We use the information we collect to:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Respond to your inquiries and provide customer support</li>
                  <li>Send you technical notices and security alerts</li>
                  <li>Communicate about our services and industry insights</li>
                  <li>Analyze usage patterns to enhance user experience</li>
                  <li>Comply with legal obligations and protect our rights</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-semibold text-foreground mb-4">Data Security</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We implement appropriate technical and organizational security measures to protect your personal
                  information against unauthorized access, alteration, disclosure, or destruction. These measures
                  include:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Encryption of data in transit and at rest</li>
                  <li>Regular security assessments and updates</li>
                  <li>Access controls and authentication protocols</li>
                  <li>Employee training on data protection practices</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-semibold text-foreground mb-4">Data Sharing</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We do not sell, trade, or otherwise transfer your personal information to third parties without your
                  consent, except in the following circumstances:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>With trusted service providers who assist in our operations</li>
                  <li>When required by law or to protect our legal rights</li>
                  <li>In connection with a business transfer or acquisition</li>
                  <li>With your explicit consent for specific purposes</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-semibold text-foreground mb-4">Your Rights</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Depending on your location, you may have the following rights regarding your personal information:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Access to your personal information</li>
                  <li>Correction of inaccurate or incomplete data</li>
                  <li>Deletion of your personal information</li>
                  <li>Restriction of processing activities</li>
                  <li>Data portability</li>
                  <li>Objection to certain processing activities</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-semibold text-foreground mb-4">Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have questions about this Privacy Policy or our data practices, please contact us at:
                </p>
                <div className="mt-4 p-4 bg-muted/50 rounded-lg">
                  <p className="text-foreground font-medium">base2ML Privacy Team</p>
                  <p className="text-muted-foreground">Email: privacy@base2ml.com</p>
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
