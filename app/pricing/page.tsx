import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight } from "lucide-react"
import { ResponsiveContainer } from "@/components/responsive-container"
import { MobileMenu } from "@/components/mobile-menu"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { ThemeToggle } from "@/components/theme-toggle"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Pricing - AcePaper Writers",
  description:
    "Transparent pricing for quality writing services. Choose from academic writing packages with no hidden fees.",
  keywords: [
    "acepaper writers pricing",
    "academic writing prices",
    "high school essay prices",
    "undergraduate writing costs",
    "postgraduate writing rates",
    "affordable writing services",
  ],
  alternates: {
    canonical: "/pricing",
  },
  openGraph: {
    title: "Pricing - AcePaper Writers",
    description:
      "Transparent pricing for quality writing services. Choose from academic writing packages with no hidden fees.",
    url: "https://acepaper-writers.com/pricing",
    type: "website",
  },
}

const navLinks = [
  { href: "/#features", label: "Features" },
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
]

export default function PricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "AcePaper Writers Pricing",
            description:
              "Transparent pricing for quality writing services. Choose from academic writing packages with no hidden fees.",
            url: "https://acepaper-writers.com/pricing",
            mainEntity: [
              {
                "@type": "Product",
                name: "High School Academic Writing",
                description: "Perfect for essays, reports, and basic research papers",
                offers: {
                  "@type": "Offer",
                  price: "7.50",
                  priceCurrency: "USD",
                  priceValidUntil: "2025-12-31",
                  availability: "https://schema.org/InStock",
                },
              },
              {
                "@type": "Product",
                name: "Undergraduate Academic Writing",
                description: "Ideal for college essays and research papers",
                offers: {
                  "@type": "Offer",
                  price: "10.00",
                  priceCurrency: "USD",
                  priceValidUntil: "2025-12-31",
                  availability: "https://schema.org/InStock",
                },
              },
              {
                "@type": "Product",
                name: "Postgraduate Academic Writing",
                description: "For advanced research papers and theses",
                offers: {
                  "@type": "Offer",
                  price: "15.00",
                  priceCurrency: "USD",
                  priceValidUntil: "2025-12-31",
                  availability: "https://schema.org/InStock",
                },
              },
            ],
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
                  className={`text-sm font-medium hover:text-orange-500 transition-colors ${
                    link.href === "/pricing" ? "text-orange-500" : ""
                  }`}
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
          <section className="py-12 sm:py-16 bg-gradient-to-b from-white to-gray-50">
            <ResponsiveContainer className="text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                <span className="text-teal-900">Simple Pricing</span> for{" "}
                <span className="text-orange-500">Academic Excellence</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Choose the academic level that matches your needs. Pay only for what you need, with no hidden fees.
              </p>
            </ResponsiveContainer>
          </section>

          {/* Pricing Cards */}
          <section className="py-12 sm:py-16">
            <ResponsiveContainer>
              <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
                {/* High School Plan */}
                <Card className="flex flex-col transform transition-all duration-300 hover:scale-105 hover:shadow-xl relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white opacity-80 z-0"></div>
                  <div className="absolute top-0 left-0 w-40 h-40 bg-teal-100 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-30"></div>

                  <CardHeader className="text-center pb-4 relative z-10">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-teal-100 to-teal-200 rounded-full flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-teal-700"
                      >
                        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                      </svg>
                    </div>
                    <CardTitle className="text-2xl font-bold text-teal-900">High School</CardTitle>
                    <div className="mt-4 flex items-baseline justify-center text-gray-900">
                      <span className="text-4xl font-bold tracking-tight">$7.50</span>
                      <span className="ml-1 text-xl font-semibold">/page</span>
                    </div>
                    <CardDescription className="text-center mt-2">
                      Perfect for high school essays and reports
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="flex-1 pt-4 relative z-10">
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                          <Check className="h-3 w-3 text-green-600" />
                        </div>
                        <span className="ml-3 text-sm">Standard 275 words per page</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                          <Check className="h-3 w-3 text-green-600" />
                        </div>
                        <span className="ml-3 text-sm">3-5 day turnaround time</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                          <Check className="h-3 w-3 text-green-600" />
                        </div>
                        <span className="ml-3 text-sm">Free title page & bibliography</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                          <Check className="h-3 w-3 text-green-600" />
                        </div>
                        <span className="ml-3 text-sm">Basic research & citations</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                          <Check className="h-3 w-3 text-green-600" />
                        </div>
                        <span className="ml-3 text-sm">2 rounds of revisions</span>
                      </li>
                    </ul>
                  </CardContent>

                  <CardFooter className="pt-4 relative z-10">
                    <Button
                      className="w-full bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 shadow-md hover:shadow-lg transition-all duration-300"
                      size="lg"
                      asChild
                    >
                      <Link href="/order">Place an Order</Link>
                    </Button>
                  </CardFooter>
                </Card>

                {/* Undergraduate Plan */}
                <Card className="flex flex-col relative transform transition-all duration-300 hover:scale-105 hover:shadow-xl overflow-hidden group border-orange-200 z-10">
                  <div className="absolute inset-0 bg-gradient-to-b from-orange-50 to-white opacity-80 z-0"></div>
                  <div className="absolute top-0 right-0 w-40 h-40 bg-orange-100 rounded-full translate-x-1/2 -translate-y-1/2 opacity-30"></div>

                  <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-0 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-3 py-1 text-xs font-medium text-white shadow-md z-20">
                    Most Popular
                  </div>

                  <CardHeader className="text-center pb-4 relative z-10">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-orange-100 to-orange-200 rounded-full flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-orange-700"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                      </svg>
                    </div>
                    <CardTitle className="text-2xl font-bold text-teal-900">Undergraduate</CardTitle>
                    <div className="mt-4 flex items-baseline justify-center text-gray-900">
                      <span className="text-4xl font-bold tracking-tight">$10.00</span>
                      <span className="ml-1 text-xl font-semibold">/page</span>
                    </div>
                    <CardDescription className="text-center mt-2">
                      Ideal for college essays and research papers
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="flex-1 pt-4 relative z-10">
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                          <Check className="h-3 w-3 text-green-600" />
                        </div>
                        <span className="ml-3 text-sm">Standard 275 words per page</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                          <Check className="h-3 w-3 text-green-600" />
                        </div>
                        <span className="ml-3 text-sm">5-7 day turnaround time</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                          <Check className="h-3 w-3 text-green-600" />
                        </div>
                        <span className="ml-3 text-sm">Free title page & bibliography</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                          <Check className="h-3 w-3 text-green-600" />
                        </div>
                        <span className="ml-3 text-sm">In-depth research & analysis</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                          <Check className="h-3 w-3 text-green-600" />
                        </div>
                        <span className="ml-3 text-sm">Unlimited revisions</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                          <Check className="h-3 w-3 text-green-600" />
                        </div>
                        <span className="ml-3 text-sm">Plagiarism report included</span>
                      </li>
                    </ul>
                  </CardContent>

                  <CardFooter className="pt-4 relative z-10">
                    <Button
                      className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 shadow-md hover:shadow-lg transition-all duration-300"
                      size="lg"
                      asChild
                    >
                      <Link href="/order">Place an Order</Link>
                    </Button>
                  </CardFooter>
                </Card>

                {/* Postgraduate Plan */}
                <Card className="flex flex-col transform transition-all duration-300 hover:scale-105 hover:shadow-xl relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white opacity-80 z-0"></div>
                  <div className="absolute bottom-0 right-0 w-40 h-40 bg-teal-100 rounded-full translate-x-1/2 translate-y-1/2 opacity-30"></div>

                  <CardHeader className="text-center pb-4 relative z-10">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-teal-100 to-teal-200 rounded-full flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-teal-700"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                    </div>
                    <CardTitle className="text-2xl font-bold text-teal-900">Postgraduate</CardTitle>
                    <div className="mt-4 flex items-baseline justify-center text-gray-900">
                      <span className="text-4xl font-bold tracking-tight">$15.00</span>
                      <span className="ml-1 text-xl font-semibold">/page</span>
                    </div>
                    <CardDescription className="text-center mt-2">
                      For advanced research papers and theses
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="flex-1 pt-4 relative z-10">
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                          <Check className="h-3 w-3 text-green-600" />
                        </div>
                        <span className="ml-3 text-sm">Standard 275 words per page</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                          <Check className="h-3 w-3 text-green-600" />
                        </div>
                        <span className="ml-3 text-sm">7-10 day turnaround time</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                          <Check className="h-3 w-3 text-green-600" />
                        </div>
                        <span className="ml-3 text-sm">Free title page & bibliography</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                          <Check className="h-3 w-3 text-green-600" />
                        </div>
                        <span className="ml-3 text-sm">Expert-level research & analysis</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                          <Check className="h-3 w-3 text-green-600" />
                        </div>
                        <span className="ml-3 text-sm">Unlimited revisions</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                          <Check className="h-3 w-3 text-green-600" />
                        </div>
                        <span className="ml-3 text-sm">Plagiarism report included</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                          <Check className="h-3 w-3 text-green-600" />
                        </div>
                        <span className="ml-3 text-sm">Advanced writer guaranteed</span>
                      </li>
                    </ul>
                  </CardContent>

                  <CardFooter className="pt-4 relative z-10">
                    <Button
                      className="w-full bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 shadow-md hover:shadow-lg transition-all duration-300"
                      size="lg"
                      asChild
                    >
                      <Link href="/order">Place an Order</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </ResponsiveContainer>
          </section>

          {/* Additional Services */}
          <section className="py-12 sm:py-16 bg-gray-50">
            <ResponsiveContainer>
              <div className="text-center mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-teal-900">Additional Services</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Enhance your order with these optional services to meet your specific needs
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="bg-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-orange-50 rounded-full translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                  <CardHeader className="pb-2">
                    <div className="w-12 h-12 mb-3 bg-gradient-to-br from-orange-100 to-orange-200 rounded-lg flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-orange-600"
                      >
                        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
                      </svg>
                    </div>
                    <CardTitle className="text-lg text-teal-900">Rush Delivery</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-4">
                      Need it faster? Get your order delivered in as little as 24 hours.
                    </p>
                    <div className="flex items-baseline">
                      <span className="text-2xl font-bold text-orange-500">+30%</span>
                      <span className="ml-1 text-sm text-gray-500">of base price</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-teal-50 rounded-full translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                  <CardHeader className="pb-2">
                    <div className="w-12 h-12 mb-3 bg-gradient-to-br from-teal-100 to-teal-200 rounded-lg flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-teal-600"
                      >
                        <path d="M4 7V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3"></path>
                        <path d="M14 2v6h6"></path>
                        <path d="M3 15h6"></path>
                        <path d="M9 18l3-3-3-3"></path>
                      </svg>
                    </div>
                    <CardTitle className="text-lg text-teal-900">Plagiarism Report</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-4">
                      Receive a detailed report confirming your content is 100% original.
                    </p>
                    <div className="flex items-baseline">
                      <span className="text-2xl font-bold text-orange-500">$10</span>
                      <span className="ml-1 text-sm text-gray-500">per order</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-orange-50 rounded-full translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                  <CardHeader className="pb-2">
                    <div className="w-12 h-12 mb-3 bg-gradient-to-br from-orange-100 to-orange-200 rounded-lg flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-orange-600"
                      >
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                    </div>
                    <CardTitle className="text-lg text-teal-900">Premium Writer</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-4">
                      Get assigned to our top 10% of writers with the highest ratings.
                    </p>
                    <div className="flex items-baseline">
                      <span className="text-2xl font-bold text-orange-500">+25%</span>
                      <span className="ml-1 text-sm text-gray-500">of base price</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-teal-50 rounded-full translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                  <CardHeader className="pb-2">
                    <div className="w-12 h-12 mb-3 bg-gradient-to-br from-teal-100 to-teal-200 rounded-lg flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-teal-600"
                      >
                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                      </svg>
                    </div>
                    <CardTitle className="text-lg text-teal-900">Extended Revisions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-4">
                      Extend your revision period from 7 days to 30 days after delivery.
                    </p>
                    <div className="flex items-baseline">
                      <span className="text-2xl font-bold text-orange-500">$8</span>
                      <span className="ml-1 text-sm text-gray-500">per order</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </ResponsiveContainer>
          </section>

          {/* Custom Quote Section */}
          <section className="py-12 sm:py-16">
            <ResponsiveContainer>
              <div className="max-w-3xl mx-auto">
                <div className="text-center mb-8">
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-teal-900">Need a Custom Quote?</h2>
                  <p className="text-gray-600">
                    Contact our team for a personalized quote based on your specific requirements.
                  </p>
                </div>

                <div className="relative overflow-hidden bg-gradient-to-r from-teal-50 via-white to-orange-50 p-8 sm:p-10 rounded-xl border border-teal-100 shadow-lg transition-all duration-300 hover:shadow-xl">
                  {/* Decorative elements */}
                  <div className="absolute top-0 left-0 w-20 h-20 bg-teal-500/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full translate-x-1/2 translate-y-1/2"></div>

                  <div className="relative">
                    <div className="text-center mb-8">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-teal-600 to-teal-800 text-white mb-4 shadow-md">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="w-8 h-8"
                        >
                          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold mb-3 text-teal-900">Request a Custom Quote</h3>
                      <p className="text-gray-600 max-w-md mx-auto">
                        Our team will analyze your requirements and provide a tailored quote within{" "}
                        <span className="font-semibold text-orange-600">10 minutes</span>.
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-5 justify-center">
                      <Button
                        size="lg"
                        className="w-full sm:w-auto bg-gradient-to-r from-teal-700 to-teal-800 hover:from-teal-800 hover:to-teal-900 text-white shadow-md transition-all duration-300 hover:shadow-lg px-8 py-6 h-auto"
                        asChild
                      >
                        <Link href="/contact" className="flex items-center justify-center gap-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                            <polyline points="22,6 12,13 2,6"></polyline>
                          </svg>
                          Contact Sales Team
                        </Link>
                      </Button>

                      <Button
                        size="lg"
                        variant="outline"
                        className="w-full sm:w-auto border-2 border-teal-700 text-teal-700 hover:bg-teal-50 shadow-md transition-all duration-300 hover:shadow-lg px-8 py-6 h-auto"
                        asChild
                      >
                        <Link href="/order" className="flex items-center justify-center gap-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                            <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
                          </svg>
                          Place an Order
                        </Link>
                      </Button>
                    </div>

                    <div className="mt-8 text-center text-sm text-gray-500">
                      <p>
                        Average response time: <span className="font-medium text-teal-700">Under 10 minutes</span> •
                        Satisfaction rate: <span className="font-medium text-teal-700">99%</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ResponsiveContainer>
          </section>

          {/* FAQ Section */}
          <section className="py-12 sm:py-16 bg-gray-50">
            <ResponsiveContainer>
              <div className="text-center mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-teal-900">Frequently Asked Questions</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Find answers to common questions about our pricing and services
                </p>
              </div>

              <div className="max-w-3xl mx-auto">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1" className="border border-gray-200 rounded-lg mb-4 overflow-hidden">
                    <AccordionTrigger className="px-4 py-3 hover:bg-gray-50">
                      How is the price calculated?
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-3 pt-0">
                      Our pricing is primarily based on the academic level, number of pages, and deadline. Additional
                      factors include the complexity of the subject, any special requirements, and optional add-on
                      services. You can get an instant quote by using our order form.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2" className="border border-gray-200 rounded-lg mb-4 overflow-hidden">
                    <AccordionTrigger className="px-4 py-3 hover:bg-gray-50">
                      What payment methods do you accept?
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-3 pt-0">
                      We accept all major credit cards (Visa, MasterCard, American Express), PayPal, M-Pesa, and bank
                      transfers. All payments are processed securely through our encrypted payment system.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3" className="border border-gray-200 rounded-lg mb-4 overflow-hidden">
                    <AccordionTrigger className="px-4 py-3 hover:bg-gray-50">Do you offer discounts?</AccordionTrigger>
                    <AccordionContent className="px-4 pb-3 pt-0">
                      Yes! We offer a 10% discount on your first order. We also have a loyalty program where returning
                      customers receive progressive discounts based on the number of pages ordered. Bulk orders also
                      qualify for special pricing.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4" className="border border-gray-200 rounded-lg mb-4 overflow-hidden">
                    <AccordionTrigger className="px-4 py-3 hover:bg-gray-50">
                      What is your refund policy?
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-3 pt-0">
                      We offer a money-back guarantee if we fail to deliver your order on time or if the quality doesn't
                      meet your requirements. You can request revisions at no additional cost, and if you're still not
                      satisfied, you can request a partial or full refund depending on the circumstances.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-5" className="border border-gray-200 rounded-lg mb-4 overflow-hidden">
                    <AccordionTrigger className="px-4 py-3 hover:bg-gray-50">
                      Are there any hidden fees?
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-3 pt-0">
                      No, there are no hidden fees. The price you see during checkout is the final price you'll pay. Any
                      additional services are clearly marked and optional. We believe in transparent pricing and will
                      never surprise you with unexpected charges.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-6" className="border border-gray-200 rounded-lg mb-4 overflow-hidden">
                    <AccordionTrigger className="px-4 py-3 hover:bg-gray-50">
                      Can I get a discount for a large order?
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-3 pt-0">
                      For orders over 20 pages or for ongoing collaboration, we offer special volume discounts. Contact
                      our customer support team to discuss your specific needs and we'll provide you with a custom
                      quote.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </ResponsiveContainer>
          </section>

          {/* CTA Section */}
          <section className="py-12 sm:py-16 bg-gradient-to-r from-teal-900 to-teal-800 text-white">
            <ResponsiveContainer className="text-center">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Ready to Get Started?</h2>
              <p className="text-lg sm:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto">
                Join thousands of satisfied clients and experience our premium writing services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/order">
                  <Button size="lg" className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white">
                    Place an Order Now
                  </Button>
                </Link>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        size="lg"
                        variant="outline"
                        className="w-full sm:w-auto border-white text-white hover:bg-white/10"
                        asChild
                      >
                        <Link href="/features">
                          Learn More <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Explore all our features</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
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
