import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  CheckCircle,
  Clock,
  Shield,
  MessageSquare,
  FileText,
  CreditCard,
  Users,
  Star,
  FileCheck,
  Sparkles,
} from "lucide-react"
import { ResponsiveContainer } from "@/components/responsive-container"
import { MobileMenu } from "@/components/mobile-menu"
import { ThemeToggle } from "@/components/theme-toggle"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Features - AcePaper Writers",
  description:
    "Discover the powerful features of AcePaper Writers. Tools for clients, writers, and platform security to ensure high-quality writing services.",
  keywords: [
    "acepaper writers features",
    "writing platform features",
    "academic writing tools",
    "business writing tools",
    "writer selection",
    "secure writing platform",
  ],
  alternates: {
    canonical: "/features",
  },
  openGraph: {
    title: "Features - AcePaper Writers",
    description:
      "Discover the powerful features of AcePaper Writers. Tools for clients, writers, and platform security to ensure high-quality writing services.",
    url: "https://acepaper-writers.com/features",
    type: "website",
  },
}

const navLinks = [
  { href: "/#features", label: "Features" },
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/pricing", label: "Pricing" },
]

export default function FeaturesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "AcePaper Writers Features",
            description:
              "Discover the powerful features of AcePaper Writers. Tools for clients, writers, and platform security to ensure high-quality writing services.",
            url: "https://acepaper-writers.com/features",
            mainEntity: {
              "@type": "ItemList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Client Features",
                  description: "Tools designed to help clients get high-quality content with minimal hassle.",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Writer Features",
                  description:
                    "Everything writers need to showcase their skills, find work, and grow their writing career.",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Platform Security",
                  description: "Advanced security features to protect data, payments, and intellectual property.",
                },
              ],
            },
          }),
        }}
      />
      <div className="flex flex-col min-h-screen">
        <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <ResponsiveContainer className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="AcePaper Writers Logo"
                width={64}
                height={64}
                className="w-12 h-12 sm:w-16 sm:h-16"
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
          {/* Hero Section */}
          <section className="py-12 sm:py-16 bg-gradient-to-b from-white to-gray-50">
            <ResponsiveContainer className="text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                <span className="text-teal-900">Powerful Features</span> for{" "}
                <span className="text-orange-500">Exceptional Writing</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Discover how AcePaper Writers streamlines the writing process with innovative tools and features
                designed for both clients and writers.
              </p>
            </ResponsiveContainer>
          </section>

          {/* Feature Categories */}
          <section className="py-12 sm:py-16">
            <ResponsiveContainer>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
                <div className="bg-white p-6 sm:p-8 rounded-lg shadow-sm border text-center">
                  <div className="h-16 w-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users className="h-8 w-8 text-orange-500" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold mb-4">For Clients</h2>
                  <p className="text-gray-600 mb-6">
                    Tools and features designed to help you get high-quality content with minimal hassle.
                  </p>
                  <Link href="#client-features">
                    <Button variant="outline" className="w-full">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>

                <div className="bg-white p-6 sm:p-8 rounded-lg shadow-sm border text-center">
                  <div className="h-16 w-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <FileText className="h-8 w-8 text-teal-700" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold mb-4">For Writers</h2>
                  <p className="text-gray-600 mb-6">
                    Everything you need to showcase your skills, find work, and grow your writing career.
                  </p>
                  <Link href="#writer-features">
                    <Button variant="outline" className="w-full">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>

                <div className="bg-white p-6 sm:p-8 rounded-lg shadow-sm border text-center sm:col-span-2 md:col-span-1">
                  <div className="h-16 w-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Shield className="h-8 w-8 text-purple-700" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold mb-4">Platform Security</h2>
                  <p className="text-gray-600 mb-6">
                    Advanced security features to protect your data, payments, and intellectual property.
                  </p>
                  <Link href="#security-features">
                    <Button variant="outline" className="w-full">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Client Features */}
              <div id="client-features" className="scroll-mt-20 mb-16 sm:mb-20">
                <div className="text-center mb-8 sm:mb-12">
                  <h2 className="text-2xl sm:text-3xl font-bold">Client Features</h2>
                  <p className="text-lg sm:text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
                    Tools designed to help you get the best writing services with ease
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-8 sm:gap-12">
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                    <div className="h-12 w-12 bg-orange-100 rounded-full flex-shrink-0 flex items-center justify-center mx-auto sm:mx-0">
                      <FileText className="h-6 w-6 text-orange-500" />
                    </div>
                    <div className="text-center sm:text-left">
                      <h3 className="text-xl font-semibold mb-2">Intuitive Order Creation</h3>
                      <p className="text-gray-600">
                        Our streamlined order form makes it easy to specify exactly what you need. Include detailed
                        instructions, upload reference materials, and set your deadline with just a few clicks.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                    <div className="h-12 w-12 bg-orange-100 rounded-full flex-shrink-0 flex items-center justify-center mx-auto sm:mx-0">
                      <Users className="h-6 w-6 text-orange-500" />
                    </div>
                    <div className="text-center sm:text-left">
                      <h3 className="text-xl font-semibold mb-2">Writer Selection</h3>
                      <p className="text-gray-600">
                        Browse writer profiles, view samples, and read reviews to find the perfect match for your
                        project. Or let our system recommend writers based on your requirements.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                    <div className="h-12 w-12 bg-orange-100 rounded-full flex-shrink-0 flex items-center justify-center mx-auto sm:mx-0">
                      <MessageSquare className="h-6 w-6 text-orange-500" />
                    </div>
                    <div className="text-center sm:text-left">
                      <h3 className="text-xl font-semibold mb-2">Real-time Communication</h3>
                      <p className="text-gray-600">
                        Our built-in messaging system allows you to communicate directly with your writer throughout the
                        process. Ask questions, provide clarification, and receive updates in real-time.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                    <div className="h-12 w-12 bg-orange-100 rounded-full flex-shrink-0 flex items-center justify-center mx-auto sm:mx-0">
                      <FileCheck className="h-6 w-6 text-orange-500" />
                    </div>
                    <div className="text-center sm:text-left">
                      <h3 className="text-xl font-semibold mb-2">Unlimited Revisions</h3>
                      <p className="text-gray-600">
                        Not completely satisfied? Request revisions until the work meets your expectations. Our revision
                        system makes it easy to highlight specific areas that need improvement.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                    <div className="h-12 w-12 bg-orange-100 rounded-full flex-shrink-0 flex items-center justify-center mx-auto sm:mx-0">
                      <CreditCard className="h-6 w-6 text-orange-500" />
                    </div>
                    <div className="text-center sm:text-left">
                      <h3 className="text-xl font-semibold mb-2">Secure Payment Options</h3>
                      <p className="text-gray-600">
                        Choose from multiple payment methods including M-Pesa and PayPal. Funds are held in escrow until
                        you're satisfied with the completed work.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                    <div className="h-12 w-12 bg-orange-100 rounded-full flex-shrink-0 flex items-center justify-center mx-auto sm:mx-0">
                      <Clock className="h-6 w-6 text-orange-500" />
                    </div>
                    <div className="text-center sm:text-left">
                      <h3 className="text-xl font-semibold mb-2">Progress Tracking</h3>
                      <p className="text-gray-600">
                        Monitor the status of your order from start to finish. Receive notifications when your writer
                        makes progress, submits drafts, or has questions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Writer Features */}
              <div id="writer-features" className="scroll-mt-20 mb-16 sm:mb-20">
                <div className="text-center mb-8 sm:mb-12">
                  <h2 className="text-2xl sm:text-3xl font-bold">Writer Features</h2>
                  <p className="text-lg sm:text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
                    Tools to showcase your expertise and grow your writing career
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-8 sm:gap-12">
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                    <div className="h-12 w-12 bg-teal-100 rounded-full flex-shrink-0 flex items-center justify-center mx-auto sm:mx-0">
                      <Users className="h-6 w-6 text-teal-700" />
                    </div>
                    <div className="text-center sm:text-left">
                      <h3 className="text-xl font-semibold mb-2">Professional Profile</h3>
                      <p className="text-gray-600">
                        Create a comprehensive profile showcasing your education, expertise, writing samples, and
                        specialties. Stand out to potential clients with a personalized bio.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                    <div className="h-12 w-12 bg-teal-100 rounded-full flex-shrink-0 flex items-center justify-center mx-auto sm:mx-0">
                      <FileText className="h-6 w-6 text-teal-700" />
                    </div>
                    <div className="text-center sm:text-left">
                      <h3 className="text-xl font-semibold mb-2">Order Discovery</h3>
                      <p className="text-gray-600">
                        Browse available orders filtered by subject, deadline, and budget. Our matching algorithm also
                        recommends orders that align with your expertise and availability.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                    <div className="h-12 w-12 bg-teal-100 rounded-full flex-shrink-0 flex items-center justify-center mx-auto sm:mx-0">
                      <Star className="h-6 w-6 text-teal-700" />
                    </div>
                    <div className="text-center sm:text-left">
                      <h3 className="text-xl font-semibold mb-2">Rating System</h3>
                      <p className="text-gray-600">
                        Build your reputation through client ratings and reviews. Higher ratings increase your
                        visibility and allow you to command better rates for your services.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                    <div className="h-12 w-12 bg-teal-100 rounded-full flex-shrink-0 flex items-center justify-center mx-auto sm:mx-0">
                      <CreditCard className="h-6 w-6 text-teal-700" />
                    </div>
                    <div className="text-center sm:text-left">
                      <h3 className="text-xl font-semibold mb-2">Reliable Payments</h3>
                      <p className="text-gray-600">
                        Track your earnings, view payment history, and request payouts through your preferred payment
                        method. Our escrow system ensures you get paid for completed work.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                    <div className="h-12 w-12 bg-teal-100 rounded-full flex-shrink-0 flex items-center justify-center mx-auto sm:mx-0">
                      <MessageSquare className="h-6 w-6 text-teal-700" />
                    </div>
                    <div className="text-center sm:text-left">
                      <h3 className="text-xl font-semibold mb-2">Client Communication</h3>
                      <p className="text-gray-600">
                        Our messaging system allows you to clarify requirements, ask questions, and build relationships
                        with clients. Clear communication leads to better outcomes and repeat business.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                    <div className="h-12 w-12 bg-teal-100 rounded-full flex-shrink-0 flex items-center justify-center mx-auto sm:mx-0">
                      <Sparkles className="h-6 w-6 text-teal-700" />
                    </div>
                    <div className="text-center sm:text-left">
                      <h3 className="text-xl font-semibold mb-2">Writing Tools</h3>
                      <p className="text-gray-600">
                        Access built-in writing tools including grammar checking, plagiarism detection, and citation
                        generators to help you deliver high-quality content efficiently.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Security Features */}
              <div id="security-features" className="scroll-mt-20">
                <div className="text-center mb-8 sm:mb-12">
                  <h2 className="text-2xl sm:text-3xl font-bold">Platform Security</h2>
                  <p className="text-lg sm:text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
                    Advanced security measures to protect your data and transactions
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
                  <div className="bg-white p-6 rounded-lg shadow-sm border">
                    <div className="h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center mb-4 mx-auto sm:mx-0">
                      <Shield className="h-6 w-6 text-purple-700" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-center sm:text-left">Data Protection</h3>
                    <p className="text-gray-600 text-center sm:text-left">
                      Your personal information and documents are encrypted and stored securely. We follow industry best
                      practices for data protection and privacy.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm border">
                    <div className="h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center mb-4 mx-auto sm:mx-0">
                      <CreditCard className="h-6 w-6 text-purple-700" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-center sm:text-left">Secure Payments</h3>
                    <p className="text-gray-600 text-center sm:text-left">
                      All financial transactions are processed through secure payment gateways. Our escrow system
                      protects both clients and writers during the order process.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm border sm:col-span-2 md:col-span-1">
                    <div className="h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center mb-4 mx-auto sm:mx-0">
                      <CheckCircle className="h-6 w-6 text-purple-700" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-center sm:text-left">Verified Writers</h3>
                    <p className="text-gray-600 text-center sm:text-left">
                      All writers undergo a thorough vetting process including identity verification, skills assessment,
                      and background checks to ensure quality and reliability.
                    </p>
                  </div>
                </div>
              </div>
            </ResponsiveContainer>
          </section>

          {/* CTA Section */}
          <section className="py-12 sm:py-16 bg-teal-900 text-white">
            <ResponsiveContainer className="text-center">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Ready to Experience These Features?</h2>
              <p className="text-lg sm:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto">
                Join AcePaper Writers today and discover how our platform can transform your writing experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/signup?role=client">
                  <Button size="lg" className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600">
                    Sign Up as a Client
                  </Button>
                </Link>
                <Link href="/signup?role=writer">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto border-white text-white hover:bg-white/10"
                  >
                    Join as a Writer
                  </Button>
                </Link>
              </div>
            </ResponsiveContainer>
          </section>
        </main>

        <footer className="bg-gray-100 py-8 sm:py-12">
          <ResponsiveContainer>
            <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Image src="/logo.png" alt="AcePaper Writers Logo" width={50} height={50} className="w-12 h-12" />
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
    </>
  )
}
