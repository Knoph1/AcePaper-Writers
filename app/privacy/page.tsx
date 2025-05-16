import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ResponsiveContainer } from "@/components/responsive-container"
import { MobileMenu } from "@/components/mobile-menu"
import { ThemeToggle } from "@/components/theme-toggle"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy - AcePaper Writers",
  description:
    "Learn how AcePaper Writers collects, uses, and protects your personal information in our Privacy Policy.",
  keywords: [
    "acepaper writers privacy",
    "privacy policy",
    "data protection",
    "personal information",
    "privacy practices",
  ],
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    title: "Privacy Policy - AcePaper Writers",
    description:
      "Learn how AcePaper Writers collects, uses, and protects your personal information in our Privacy Policy.",
    url: "https://acepaper-writers.com/privacy",
    type: "website",
  },
}

const navLinks = [
  { href: "/#features", label: "Features" },
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/pricing", label: "Pricing" },
]

export default function PrivacyPage() {
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
              <span className="text-teal-900">Privacy Policy</span>
            </h1>
            <p className="text-base sm:text-lg text-gray-600 mb-8 max-w-3xl mx-auto">Last updated: May 16, 2025</p>
          </ResponsiveContainer>
        </section>

        <section className="py-12">
          <ResponsiveContainer>
            <div className="prose prose-gray max-w-none">
              <p className="lead">
                At AcePaper Writers, we are committed to protecting your privacy and ensuring the security of your
                personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your
                information when you use our website and services.
              </p>

              <p>
                By accessing or using our services, you consent to the data practices described in this policy. If you
                do not agree with our policies and practices, please do not use our services.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">1. Information We Collect</h2>

              <h3 className="text-xl font-semibold mt-6 mb-3">1.1 Personal Information</h3>
              <p>We may collect the following types of personal information:</p>
              <ul>
                <li>
                  <strong>Account Information:</strong> Name, email address, phone number, and password when you create
                  an account
                </li>
                <li>
                  <strong>Profile Information:</strong> Academic background, professional experience, and areas of
                  expertise (for Writers)
                </li>
                <li>
                  <strong>Payment Information:</strong> Credit card details, billing address, and other payment-related
                  information
                </li>
                <li>
                  <strong>Order Information:</strong> Details about the writing services you request, including subject
                  matter, requirements, and deadlines
                </li>
                <li>
                  <strong>Communications:</strong> Messages exchanged between Clients, Writers, and our support team
                </li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">1.2 Non-Personal Information</h3>
              <p>We also collect non-personal information, including:</p>
              <ul>
                <li>
                  <strong>Usage Data:</strong> Information about how you interact with our website, such as pages
                  visited, time spent on pages, and click patterns
                </li>
                <li>
                  <strong>Device Information:</strong> IP address, browser type, operating system, and device
                  identifiers
                </li>
                <li>
                  <strong>Cookies and Similar Technologies:</strong> Information collected through cookies, web beacons,
                  and similar technologies
                </li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">2. How We Collect Information</h2>
              <p>We collect information through various methods:</p>
              <ul>
                <li>
                  <strong>Direct Collection:</strong> Information you provide when creating an account, placing an
                  order, or communicating with us
                </li>
                <li>
                  <strong>Automated Collection:</strong> Information collected automatically through cookies and similar
                  technologies when you use our website
                </li>
                <li>
                  <strong>Third-Party Sources:</strong> Information from third-party service providers, such as payment
                  processors and identity verification services
                </li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">3. How We Use Your Information</h2>
              <p>We use the information we collect for various purposes, including:</p>
              <ul>
                <li>
                  <strong>Providing Services:</strong> Processing orders, matching Clients with Writers, and delivering
                  writing services
                </li>
                <li>
                  <strong>Account Management:</strong> Creating and maintaining your account, authenticating your
                  identity, and processing payments
                </li>
                <li>
                  <strong>Communication:</strong> Responding to your inquiries, providing customer support, and sending
                  service-related notifications
                </li>
                <li>
                  <strong>Improvement:</strong> Analyzing usage patterns to enhance our website and services, conducting
                  research, and developing new features
                </li>
                <li>
                  <strong>Marketing:</strong> Sending promotional emails about new services, special offers, or other
                  information we think you may find interesting (with your consent)
                </li>
                <li>
                  <strong>Security:</strong> Protecting against fraud, unauthorized transactions, and other illegal
                  activities
                </li>
                <li>
                  <strong>Compliance:</strong> Fulfilling legal obligations and enforcing our Terms of Service
                </li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">4. Disclosure of Your Information</h2>
              <p>We may share your information with the following parties:</p>
              <ul>
                <li>
                  <strong>Writers and Clients:</strong> Sharing necessary information between Writers and Clients to
                  facilitate the delivery of services
                </li>
                <li>
                  <strong>Service Providers:</strong> Third-party vendors who perform services on our behalf, such as
                  payment processing, data analysis, and customer support
                </li>
                <li>
                  <strong>Legal Requirements:</strong> Disclosing information when required by law, court order, or
                  government regulation
                </li>
                <li>
                  <strong>Business Transfers:</strong> Transferring information in connection with a merger,
                  acquisition, or sale of all or part of our business
                </li>
              </ul>
              <p>
                We do not sell, rent, or lease your personal information to third parties for their marketing purposes
                without your explicit consent.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">5. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information from
                unauthorized access, disclosure, alteration, and destruction. These measures include:
              </p>
              <ul>
                <li>Encryption of sensitive information</li>
                <li>Secure socket layer (SSL) technology</li>
                <li>Regular security assessments and audits</li>
                <li>Access controls and authentication procedures</li>
                <li>Employee training on data protection</li>
              </ul>
              <p>
                While we strive to use commercially acceptable means to protect your personal information, no method of
                transmission over the Internet or electronic storage is 100% secure. Therefore, we cannot guarantee
                absolute security.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">6. Data Retention</h2>
              <p>
                We retain your personal information for as long as necessary to fulfill the purposes outlined in this
                Privacy Policy, unless a longer retention period is required or permitted by law. The criteria used to
                determine our retention periods include:
              </p>
              <ul>
                <li>The length of time we have an ongoing relationship with you</li>
                <li>Our legal obligations under applicable laws</li>
                <li>The existence of any legal claims or liability</li>
                <li>The nature of the information and potential risk of harm from unauthorized use or disclosure</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">7. Your Rights and Choices</h2>
              <p>
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul>
                <li>
                  <strong>Access:</strong> The right to request access to your personal information
                </li>
                <li>
                  <strong>Correction:</strong> The right to request correction of inaccurate personal information
                </li>
                <li>
                  <strong>Deletion:</strong> The right to request deletion of your personal information
                </li>
                <li>
                  <strong>Restriction:</strong> The right to request restriction of processing of your personal
                  information
                </li>
                <li>
                  <strong>Data Portability:</strong> The right to receive your personal information in a structured,
                  commonly used format
                </li>
                <li>
                  <strong>Objection:</strong> The right to object to processing of your personal information
                </li>
                <li>
                  <strong>Withdrawal of Consent:</strong> The right to withdraw consent at any time
                </li>
              </ul>
              <p>
                To exercise these rights, please contact us using the information provided in the "Contact Us" section
                below. We will respond to your request within the timeframe required by applicable law.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">8. Cookies and Tracking Technologies</h2>
              <p>
                We use cookies and similar tracking technologies to collect information about your browsing activities
                on our website. Cookies are small text files that are stored on your device when you visit a website.
              </p>
              <p>We use the following types of cookies:</p>
              <ul>
                <li>
                  <strong>Essential Cookies:</strong> Necessary for the website to function properly
                </li>
                <li>
                  <strong>Analytical/Performance Cookies:</strong> Help us understand how visitors interact with our
                  website
                </li>
                <li>
                  <strong>Functionality Cookies:</strong> Allow the website to remember choices you make
                </li>
                <li>
                  <strong>Targeting Cookies:</strong> Used to deliver relevant advertisements and track campaign
                  performance
                </li>
              </ul>
              <p>
                You can control cookies through your browser settings. However, disabling certain cookies may limit your
                ability to use some features of our website.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">9. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites that are not operated by us. If you click on a
                third-party link, you will be directed to that third party's site. We strongly advise you to review the
                Privacy Policy of every site you visit.
              </p>
              <p>
                We have no control over and assume no responsibility for the content, privacy policies, or practices of
                any third-party sites or services.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">10. Children's Privacy</h2>
              <p>
                Our services are not intended for individuals under the age of 18. We do not knowingly collect personal
                information from children under 18. If we become aware that we have collected personal information from
                a child under 18 without verification of parental consent, we will take steps to remove that information
                from our servers.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">11. International Data Transfers</h2>
              <p>
                Your information may be transferred to and processed in countries other than the country in which you
                reside. These countries may have data protection laws that are different from the laws of your country.
              </p>
              <p>
                When we transfer your information to other countries, we will take appropriate measures to ensure that
                your personal information remains protected in accordance with this Privacy Policy and applicable law.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">12. Changes to This Privacy Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
                Privacy Policy on this page and updating the "Last updated" date at the top of this policy.
              </p>
              <p>
                You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy
                Policy are effective when they are posted on this page.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">13. Contact Us</h2>
              <p>If you have any questions about this Privacy Policy, please contact us at:</p>
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
                  <Link href="/terms" className="text-gray-600 hover:text-orange-500 text-sm">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-orange-500 hover:text-orange-600 text-sm font-medium">
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
