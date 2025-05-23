import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  CheckCircle,
  Clock,
  Shield,
  MessageSquare,
  CreditCard,
  Star,
  FileCheck,
  Sparkles,
  Award,
  Users,
  Zap,
} from "lucide-react"
import { ResponsiveContainer } from "@/components/responsive-container"
import { MobileMenu } from "@/components/mobile-menu"
import { ThemeToggle } from "@/components/theme-toggle"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Features - AcePaper Writers",
  description:
    "Discover the powerful features of AcePaper Writers. 100% originality, best grammar, and timely delivery guaranteed for all your academic writing needs.",
  keywords: [
    "acepaper writers features",
    "plagiarism free writing",
    "academic writing tools",
    "timely delivery",
    "best grammar",
    "original content",
  ],
  alternates: {
    canonical: "/features",
  },
  openGraph: {
    title: "Features - AcePaper Writers",
    description:
      "Discover the powerful features of AcePaper Writers. 100% originality, best grammar, and timely delivery guaranteed for all your academic writing needs.",
    url: "https://acepaper-writers.com/features",
    type: "website",
  },
}

const navLinks = [
  { href: "/#features", label: "Features" },
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
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
              "Discover the powerful features of AcePaper Writers. 100% originality, best grammar, and timely delivery guaranteed for all your academic writing needs.",
            url: "https://acepaper-writers.com/features",
            mainEntity: {
              "@type": "ItemList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "100% Originality",
                  description: "Plagiarism-free content guaranteed with comprehensive checking.",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Best Grammar",
                  description: "Expert writers ensure perfect grammar and professional formatting.",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Timely Delivery",
                  description: "On-time delivery guaranteed with urgent options available.",
                },
              ],
            },
          }),
        }}
      />
      <div className="flex flex-col min-h-screen">
        <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <ResponsiveContainer className="flex h-20 items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="AcePaper Writers Logo"
                width={80}
                height={80}
                className="w-14 h-14 sm:w-16 sm:h-16"
                priority
              />
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-bold leading-tight">
                  <span className="text-orange-500">AcePaper</span>
                  <span className="text-teal-900">Writers</span>
                </span>
                <span className="text-xs sm:text-sm text-gray-600 font-medium leading-tight">We Write. You Excel.</span>
              </div>
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
              <MobileMenu links={navLinks} />
            </div>
          </ResponsiveContainer>
        </header>

        <main className="flex-1">
          {/* Hero Section */}
          <section className="py-12 sm:py-16 bg-gradient-to-br from-teal-50 via-orange-50 to-white">
            <ResponsiveContainer className="text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                <span className="text-teal-900">Powerful Features</span> for{" "}
                <span className="text-orange-500">Academic Excellence</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Discover how AcePaper Writers delivers exceptional writing services with our three core features
                designed for your academic success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/order">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700"
                  >
                    Get Started Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/pricing">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto border-teal-700 text-teal-700 hover:bg-teal-50"
                  >
                    View Pricing
                  </Button>
                </Link>
              </div>
            </ResponsiveContainer>
          </section>

          {/* Core Features Section */}
          <section className="py-12 sm:py-16">
            <ResponsiveContainer>
              <div className="text-center mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-teal-900">Our Core Features</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Three fundamental pillars that make AcePaper Writers the trusted choice for academic writing
                  excellence.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-16">
                {/* 100% Originality */}
                <div className="group relative overflow-hidden bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl shadow-lg border border-orange-200 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="relative z-10">
                    <div className="h-20 w-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                      <Shield className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-center text-teal-900">100% Originality</h3>
                    <p className="text-gray-700 text-center mb-6 leading-relaxed">
                      Every piece of content is crafted from scratch and thoroughly checked for plagiarism to ensure
                      complete originality and academic integrity.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-500 mt-1" />
                        <span className="ml-3 text-sm font-medium">Comprehensive plagiarism detection</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-500 mt-1" />
                        <span className="ml-3 text-sm font-medium">Original research and analysis</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-500 mt-1" />
                        <span className="ml-3 text-sm font-medium">Detailed plagiarism reports</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-500 mt-1" />
                        <span className="ml-3 text-sm font-medium">Zero tolerance for copied content</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Best Grammar */}
                <div className="group relative overflow-hidden bg-gradient-to-br from-teal-50 to-teal-100 p-8 rounded-2xl shadow-lg border border-teal-200 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="relative z-10">
                    <div className="h-20 w-20 bg-gradient-to-br from-teal-700 to-teal-800 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                      <FileCheck className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-center text-teal-900">Best Grammar</h3>
                    <p className="text-gray-700 text-center mb-6 leading-relaxed">
                      Our expert writers and editors ensure flawless grammar, perfect structure, and professional
                      formatting that meets the highest academic standards.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-500 mt-1" />
                        <span className="ml-3 text-sm font-medium">Expert native English writers</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-500 mt-1" />
                        <span className="ml-3 text-sm font-medium">Professional proofreading</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-500 mt-1" />
                        <span className="ml-3 text-sm font-medium">Perfect formatting and structure</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-500 mt-1" />
                        <span className="ml-3 text-sm font-medium">Academic writing standards</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Timely Delivery */}
                <div className="group relative overflow-hidden bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl shadow-lg border border-green-200 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="relative z-10">
                    <div className="h-20 w-20 bg-gradient-to-br from-green-600 to-green-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                      <Clock className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-center text-teal-900">Timely Delivery</h3>
                    <p className="text-gray-700 text-center mb-6 leading-relaxed">
                      We respect your deadlines and guarantee on-time delivery, with urgent options available when you
                      need your work completed quickly.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-500 mt-1" />
                        <span className="ml-3 text-sm font-medium">100% on-time delivery guarantee</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-500 mt-1" />
                        <span className="ml-3 text-sm font-medium">Urgent delivery options available</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-500 mt-1" />
                        <span className="ml-3 text-sm font-medium">Progress tracking and updates</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-500 mt-1" />
                        <span className="ml-3 text-sm font-medium">Early delivery when possible</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </ResponsiveContainer>
          </section>

          {/* Additional Benefits */}
          <section className="py-12 sm:py-16 bg-gray-50">
            <ResponsiveContainer>
              <div className="text-center mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-teal-900">Additional Benefits</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Beyond our core features, we offer comprehensive support and services to ensure your complete
                  satisfaction and academic success.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-lg transition-all duration-300 group">
                  <div className="h-14 w-14 bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <MessageSquare className="h-7 w-7 text-orange-500" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-center text-teal-900">24/7 Support</h3>
                  <p className="text-gray-600 text-center text-sm leading-relaxed">
                    Round-the-clock customer support to assist you whenever you need help with your orders.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-lg transition-all duration-300 group">
                  <div className="h-14 w-14 bg-gradient-to-br from-teal-100 to-teal-200 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <Users className="h-7 w-7 text-teal-700" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-center text-teal-900">Expert Writers</h3>
                  <p className="text-gray-600 text-center text-sm leading-relaxed">
                    Qualified professionals with advanced degrees and years of experience in academic writing.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-lg transition-all duration-300 group">
                  <div className="h-14 w-14 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <Sparkles className="h-7 w-7 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-center text-teal-900">Unlimited Revisions</h3>
                  <p className="text-gray-600 text-center text-sm leading-relaxed">
                    Free revisions until you're completely satisfied with the final result of your work.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-lg transition-all duration-300 group">
                  <div className="h-14 w-14 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <CreditCard className="h-7 w-7 text-purple-700" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-center text-teal-900">Secure Payments</h3>
                  <p className="text-gray-600 text-center text-sm leading-relaxed">
                    Safe and secure payment processing with multiple payment options for your convenience.
                  </p>
                </div>
              </div>
            </ResponsiveContainer>
          </section>

          {/* Why Choose Us */}
          <section className="py-12 sm:py-16">
            <ResponsiveContainer>
              <div className="text-center mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-teal-900">
                  Why Students Choose AcePaper Writers
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Join thousands of successful students who trust us with their academic writing needs.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Award className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-teal-900 mb-2">Proven Track Record</h3>
                      <p className="text-gray-600">
                        Over 10,000 satisfied students with a 98% satisfaction rate and countless academic successes.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 bg-gradient-to-br from-teal-700 to-teal-800 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Star className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-teal-900 mb-2">Quality Assurance</h3>
                      <p className="text-gray-600">
                        Multi-level quality checks ensure every paper meets the highest academic standards before
                        delivery.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 bg-gradient-to-br from-green-600 to-green-700 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Zap className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-teal-900 mb-2">Fast Turnaround</h3>
                      <p className="text-gray-600">
                        Quick delivery options available, including urgent orders completed in as little as 6 hours.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-teal-900 to-teal-800 p-8 rounded-2xl text-white shadow-2xl">
                  <h3 className="text-2xl font-bold mb-4">Ready to Experience Excellence?</h3>
                  <p className="text-teal-100 mb-6 leading-relaxed">
                    Join thousands of students who have achieved academic success with our professional writing
                    services. Get started today and see the difference quality makes.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-400" />
                      <span className="text-sm">Free plagiarism report</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-400" />
                      <span className="text-sm">24/7 customer support</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-400" />
                      <span className="text-sm">Money-back guarantee</span>
                    </div>
                  </div>
                  <Button
                    asChild
                    className="w-full mt-6 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 border-0"
                  >
                    <Link href="/order">
                      Place Your Order Now <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </ResponsiveContainer>
          </section>

          {/* CTA Section */}
          <section className="py-12 sm:py-16 bg-gradient-to-r from-teal-900 to-teal-800 text-white">
            <ResponsiveContainer className="text-center">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Ready to Experience Excellence?</h2>
              <p className="text-lg sm:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto">
                Join thousands of satisfied clients and discover why AcePaper Writers is the trusted choice for academic
                success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/order">
                  <Button size="lg" className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600">
                    Place an Order Now
                  </Button>
                </Link>
                <Link href="/pricing">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto border-white text-white hover:bg-white/10"
                  >
                    View Pricing <ArrowRight className="ml-2 h-4 w-4" />
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
                  <Image src="/logo.png" alt="AcePaper Writers Logo" width={60} height={60} className="w-14 h-14" />
                  <div className="flex flex-col">
                    <span className="text-lg font-bold leading-tight">
                      <span className="text-orange-500">AcePaper</span>
                      <span className="text-teal-900">Writers</span>
                    </span>
                    <span className="text-xs text-gray-600 font-medium leading-tight">We Write. You Excel.</span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">Professional academic and business writing services.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-4 text-teal-900">Quick Links</h3>
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
                  <li>
                    <Link href="/contact" className="text-gray-600 hover:text-orange-500 text-sm">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4 text-teal-900">Legal</h3>
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
                <h3 className="font-semibold mb-4 text-teal-900">Contact</h3>
                <ul className="space-y-2">
                  <li className="text-gray-600 text-sm">writerchen95@gmail.com</li>
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
