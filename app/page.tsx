import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Clock, Shield } from "lucide-react"
import { ResponsiveContainer } from "@/components/responsive-container"
import { MobileMenu } from "@/components/mobile-menu"
import { ThemeToggle } from "@/components/theme-toggle"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "AcePaper Writers - Professional Academic & Business Writing Services",
  description:
    "Connect with expert writers for high-quality academic and business content. Streamlined process, secure payments, and exceptional results.",
  alternates: {
    canonical: "/",
  },
}

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
]

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "AcePaper Writers",
            url: "https://acepaper-writers.com",
            logo: "https://acepaper-writers.com/logo.png",
            sameAs: [
              "https://twitter.com/acepaperwriters",
              "https://facebook.com/acepaperwriters",
              "https://linkedin.com/company/acepaperwriters",
            ],
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+254701738794",
              contactType: "customer service",
              email: "writerchen95@gmail.com",
              availableLanguage: ["English"],
            },
            description:
              "Professional academic and business writing services by expert writers. Quality content, on-time delivery, and affordable prices.",
          }),
        }}
      />
      <div className="flex flex-col min-h-screen">
        <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <ResponsiveContainer className="flex h-20 items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex items-center gap-2">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-orange-500 to-teal-900 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg sm:text-xl">AW</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-lg sm:text-xl font-bold leading-tight">
                    <span className="text-orange-500">AcePaper</span>
                    <span className="text-teal-900">Writers</span>
                  </span>
                  <span className="text-xs sm:text-sm text-gray-600 font-medium leading-tight">
                    We Write. You Excel.
                  </span>
                </div>
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
          <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white to-gray-50">
            <ResponsiveContainer className="text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight">
                <span className="text-teal-900">We Write.</span> <span className="text-orange-500">You Excel.</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Connect with professional writers for high-quality academic and business content. Streamlined process,
                secure payments, and exceptional results.
              </p>
              <div className="flex justify-center">
                <Link href="/order">
                  <Button size="lg" className="w-full sm:w-auto">
                    Place an Order <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </ResponsiveContainer>
          </section>

          {/* Features Section */}
          <section id="features" className="py-12 sm:py-16 md:py-20 scroll-mt-20">
            <ResponsiveContainer>
              <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">Why Choose AcePaper Writers</h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <div className="h-12 w-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="h-6 w-6 text-orange-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Quality Guaranteed</h3>
                  <p className="text-gray-600">
                    All our writers are vetted professionals with proven expertise in their fields.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <div className="h-12 w-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                    <Clock className="h-6 w-6 text-orange-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">On-Time Delivery</h3>
                  <p className="text-gray-600">
                    We respect deadlines and ensure your content is delivered when you need it.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border sm:col-span-2 md:col-span-1">
                  <div className="h-12 w-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-orange-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Secure Platform</h3>
                  <p className="text-gray-600">
                    Your data and payments are protected with industry-standard security measures.
                  </p>
                </div>
              </div>
              <div className="text-center mt-8">
                <Link href="/features">
                  <Button variant="outline">
                    View All Features <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </ResponsiveContainer>
          </section>

          {/* How It Works Section */}
          <section id="how-it-works" className="py-12 sm:py-16 md:py-20 bg-gray-50 scroll-mt-20">
            <ResponsiveContainer>
              <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">How It Works</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
                <div className="text-center">
                  <div className="h-16 w-16 bg-teal-900 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    1
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Assess the Website</h3>
                  <p className="text-gray-600">Navigate to Order Placement</p>
                </div>
                <div className="text-center">
                  <div className="h-16 w-16 bg-teal-900 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    2
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Create an Order</h3>
                  <p className="text-gray-600">Specify your requirements, upload references, and set your deadline.</p>
                </div>
                <div className="text-center">
                  <div className="h-16 w-16 bg-teal-900 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    3
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Confirm Order Details</h3>
                  <p className="text-gray-600">Make relevant order payment</p>
                </div>
                <div className="text-center">
                  <div className="h-16 w-16 bg-teal-900 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    4
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Track Progress</h3>
                  <p className="text-gray-600">You'll get process status & follow-up via email</p>
                </div>
                <div className="text-center">
                  <div className="h-16 w-16 bg-teal-900 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    5
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Receive & Review</h3>
                  <p className="text-gray-600">Get your completed work and request revisions if needed.</p>
                </div>
              </div>
            </ResponsiveContainer>
          </section>

          {/* CTA Section */}
          <section className="py-12 sm:py-16 md:py-20 bg-teal-900 text-white">
            <ResponsiveContainer className="text-center">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Ready to Experience Excellence?</h2>
              <p className="text-lg sm:text-xl mb-6 sm:mb-8 max-w-3xl mx-auto">
                Join thousands of satisfied clients and discover why AcePaper Writers is the trusted choice for academic
                success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/order">
                  <Button size="lg" className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600">
                    Place an Order
                  </Button>
                </Link>
                <Link href="/pricing">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto border-2 border-white bg-white text-teal-900 font-semibold hover:text-white hover:bg-teal-800 transition-all duration-300 transform hover:scale-105"
                  >
                    View Pricing
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
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-teal-900 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">AW</span>
                  </div>
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
                    <Link href="#how-it-works" className="text-gray-600 hover:text-orange-500 text-sm">
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
