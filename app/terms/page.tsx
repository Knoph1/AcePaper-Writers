import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ResponsiveContainer } from "@/components/responsive-container"
import { MobileMenu } from "@/components/mobile-menu"
import { ThemeToggle } from "@/components/theme-toggle"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service - AcePaper Writers",
  description: "Read our Terms of Service to understand the rules and guidelines for using AcePaper Writers' services.",
  keywords: ["acepaper writers terms", "terms of service", "writing service terms", "legal terms", "service agreement"],
  alternates: {
    canonical: "/terms",
  },
  openGraph: {
    title: "Terms of Service - AcePaper Writers",
    description:
      "Read our Terms of Service to understand the rules and guidelines for using AcePaper Writers' services.",
    url: "https://acepaper-writers.com/terms",
    type: "website",
  },
}

const navLinks = [
  { href: "/#features", label: "Features" },
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/pricing", label: "Pricing" },
]

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <ResponsiveContainer className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="AcePaper Writers Logo"
              width={50}
              height={50}
              className="w-10 h-10 sm:w-12 sm:h-12"
              priority
            />
            <span className="text-lg sm:text-xl font-bold">
              <span className="text-orange-500">AcePaper</span>
              <span className="text-teal-900">Writers</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium hover:text-orange-500 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-4">
            <ThemeToggle />
            <Link href="/login" className="hidden sm:inline-flex">
              <Button variant="outline" size="sm" className="h-9">
                Log In
              </Button>
            </Link>
            <Link href="/signup">
              <Button size="sm" className="h-9">
                Sign Up
              </Button>
            </Link>
            <MobileMenu links={[...navLinks, { href: "/login", label: "Log In" }]} />
          </div>
        </ResponsiveContainer>
      </header>

      <main className="flex-1">
        <section className="py-12 sm:py-16 bg-gradient-to-b from-white to-gray-50">
          <ResponsiveContainer className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              <span className="text-teal-900">Terms of Service</span>
            </h1>
            <p className="text-base sm:text-lg text-gray-600 mb-8 max-w-3xl mx-auto">Last updated: May 16, 2025</p>
          </ResponsiveContainer>
        </section>

        <section className="py-12">
          <ResponsiveContainer>
            <div className="prose prose-gray max-w-none">
              <p className="lead">
                Welcome to AcePaper Writers. These Terms of Service govern your use of our website, services, and any
                other related applications or platforms operated by AcePaper Writers.
              </p>

              <p>
                By accessing or using our services, you agree to be bound by these Terms. If you disagree with any part
                of the terms, you may not access our services.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">1. Definitions</h2>
              <ul>
                <li>
                  <strong>"Service"</strong> refers to the AcePaper Writers website, platform, and all services provided
                  by AcePaper Writers.
                </li>
                <li>
                  <strong>"Client"</strong> refers to any individual or entity that places an order for writing
                  services.
                </li>
                <li>
                  <strong>"Writer"</strong> refers to any individual who provides writing services through our platform.
                </li>
                <li>
                  <strong>"Content"</strong> refers to any written material, documents, or other deliverables produced
                  through our service.
                </li>
                <li>
                  <strong>"Order"</strong> refers to a request for writing services submitted by a Client.
                </li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">2. Account Registration</h2>
              <p>
                To use our services, you may need to create an account. You are responsible for maintaining the
                confidentiality of your account information and for all activities that occur under your account. You
                agree to:
              </p>
              <ul>
                <li>Provide accurate, current, and complete information during registration</li>
                <li>Maintain and promptly update your account information</li>
                <li>Keep your password secure and confidential</li>
                <li>Notify us immediately of any unauthorized use of your account</li>
                <li>Accept responsibility for all activities that occur under your account</li>
              </ul>
              <p>
                We reserve the right to suspend or terminate accounts that violate these Terms or for any other reason
                at our sole discretion.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">3. Service Usage</h2>
              <h3 className="text-xl font-semibold mt-6 mb-3">3.1 Client Responsibilities</h3>
              <p>As a Client, you agree to:</p>
              <ul>
                <li>Provide clear and complete instructions for each order</li>
                <li>Pay the agreed-upon fees for services rendered</li>
                <li>Review delivered content within the specified timeframe</li>
                <li>Use the content in accordance with our Academic Integrity Policy</li>
                <li>Communicate professionally with Writers and staff</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">3.2 Writer Responsibilities</h3>
              <p>As a Writer, you agree to:</p>
              <ul>
                <li>Deliver original, high-quality content that meets the Client's requirements</li>
                <li>Meet all deadlines for assigned orders</li>
                <li>Maintain confidentiality regarding Client information and order details</li>
                <li>Respond promptly to Client communications and revision requests</li>
                <li>Adhere to our plagiarism policy and academic standards</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">3.3 Prohibited Uses</h3>
              <p>You may not use our Service to:</p>
              <ul>
                <li>Submit or request content that is illegal, fraudulent, or violates the rights of others</li>
                <li>Submit or request content that is discriminatory, defamatory, or offensive</li>
                <li>Impersonate another person or entity</li>
                <li>Interfere with or disrupt the Service or servers or networks connected to the Service</li>
                <li>Circumvent, disable, or otherwise interfere with security-related features of the Service</li>
                <li>Collect or track personal information of other users</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">4. Payment and Pricing</h2>
              <p>
                Clients agree to pay the fees specified at the time of placing an order. All payments must be made in
                advance unless otherwise specified. We accept various payment methods as indicated on our website.
              </p>
              <p>
                Pricing is determined based on factors including but not limited to academic level, deadline, page
                count, and complexity. All prices are subject to change, but the price quoted at the time of order
                placement will be honored for that specific order.
              </p>
              <p>
                Writers will receive payment as specified in their separate agreement with AcePaper Writers, typically
                after the Client has approved the delivered content.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">5. Order Process and Revisions</h2>
              <p>
                Orders are processed once payment is confirmed. Clients may request revisions according to our revision
                policy, which allows for:
              </p>
              <ul>
                <li>Free revisions within the revision period (typically 7-30 days depending on the package)</li>
                <li>Revisions that are within the scope of the original order requirements</li>
                <li>A reasonable number of revision requests as specified in the order package</li>
              </ul>
              <p>
                Additional fees may apply for revisions that significantly alter the original requirements or are
                requested after the revision period has expired.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">6. Intellectual Property</h2>
              <p>
                Upon full payment and delivery, the Client is granted all intellectual property rights to the content
                delivered, except for any third-party content that may be incorporated (such as properly cited sources).
              </p>
              <p>
                AcePaper Writers retains the right to use anonymized versions of completed work for quality control,
                training, and service improvement purposes, but will never share identifiable client information or
                complete works with third parties.
              </p>
              <p>
                Writers agree that they are creating work-for-hire and relinquish all rights to the content they produce
                for Clients through our platform.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">7. Academic Integrity</h2>
              <p>
                Our services are intended to be used for research, reference, and assistance purposes only. We do not
                condone or support academic dishonesty, plagiarism, or any violation of academic integrity policies.
              </p>
              <p>
                Clients are responsible for properly using the content provided in accordance with their institution's
                academic integrity policies. We strongly encourage proper citation and acknowledgment when using our
                services for reference.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">8. Confidentiality</h2>
              <p>
                We are committed to maintaining the confidentiality of all Client and Writer information. We will not
                disclose personal information to third parties except as required by law or as necessary to provide our
                services.
              </p>
              <p>
                For more details on how we collect, use, and protect your information, please refer to our{" "}
                <Link href="/privacy" className="text-orange-500 hover:underline">
                  Privacy Policy
                </Link>
                .
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">9. Termination</h2>
              <p>
                We may terminate or suspend your account and access to our services immediately, without prior notice or
                liability, for any reason, including but not limited to a breach of these Terms.
              </p>
              <p>
                Upon termination, your right to use the Service will immediately cease. If you wish to terminate your
                account, you may simply discontinue using the Service or contact us to request account deletion.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">10. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, AcePaper Writers shall not be liable for any indirect,
                incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether
                incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses
                resulting from:
              </p>
              <ul>
                <li>Your use or inability to use our services</li>
                <li>Any unauthorized access to or use of our servers and/or any personal information stored therein</li>
                <li>Any interruption or cessation of transmission to or from our services</li>
                <li>
                  Any bugs, viruses, trojan horses, or the like that may be transmitted to or through our services
                </li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">11. Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which
                AcePaper Writers is registered, without regard to its conflict of law provisions.
              </p>
              <p>
                Any disputes arising under or in connection with these Terms shall be subject to the exclusive
                jurisdiction of the courts in that jurisdiction.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">12. Changes to Terms</h2>
              <p>
                We reserve the right to modify or replace these Terms at any time at our sole discretion. If a revision
                is material, we will provide at least 30 days' notice prior to any new terms taking effect. What
                constitutes a material change will be determined at our sole discretion.
              </p>
              <p>
                By continuing to access or use our Service after any revisions become effective, you agree to be bound
                by the revised terms. If you do not agree to the new terms, you are no longer authorized to use the
                Service.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">13. Contact Us</h2>
              <p>If you have any questions about these Terms, please contact us at:</p>
              <p>
                Email:{" "}
                <a href="mailto:contact@acepaper-writers.com" className="text-orange-500 hover:underline">
                  contact@acepaper-writers.com
                </a>
                <br />
                Phone: +254701738794
              </p>
            </div>
          </ResponsiveContainer>
        </section>
      </main>

      <footer className="bg-gray-100 py-8 sm:py-12">
        <ResponsiveContainer>
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Image src="/logo.png" alt="AcePaper Writers Logo" width={40} height={40} />
                <span className="text-lg font-bold">
                  <span className="text-orange-500">AcePaper</span>
                  <span className="text-teal-900">Writers</span>
                </span>
              </div>
              <p className="text-gray-600 text-sm">Professional academic and business writing services.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-600 hover:text-orange-500 text-sm">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/features" className="text-gray-600 hover:text-orange-500 text-sm">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/#how-it-works" className="text-gray-600 hover:text-orange-500 text-sm">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="text-gray-600 hover:text-orange-500 text-sm">
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/terms" className="text-orange-500 hover:text-orange-600 text-sm font-medium">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-gray-600 hover:text-orange-500 text-sm">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/refund" className="text-gray-600 hover:text-orange-500 text-sm">
                    Refund Policy
                  </Link>
                </li>
                <li>
                  <Link href="/copyright" className="text-gray-600 hover:text-orange-500 text-sm">
                    Copyright Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="text-gray-600 text-sm">contact@acepaper-writers.com</li>
                <li className="text-gray-600 text-sm">+254701738794</li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} AcePaper Writers. All rights reserved.
          </div>
        </ResponsiveContainer>
      </footer>
    </div>
  )
}
