import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight } from "lucide-react"
import { ResponsiveContainer } from "@/components/responsive-container"
import { MobileMenu } from "@/components/mobile-menu"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { ThemeToggle } from "@/components/theme-toggle"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Pricing - AcePaper Writers",
  description:
    "Transparent pricing for quality writing services. Choose from academic and business writing packages with no hidden fees.",
  keywords: [
    "acepaper writers pricing",
    "academic writing prices",
    "business writing costs",
    "writing services rates",
    "affordable writing services",
  ],
  alternates: {
    canonical: "/pricing",
  },
  openGraph: {
    title: "Pricing - AcePaper Writers",
    description:
      "Transparent pricing for quality writing services. Choose from academic and business writing packages with no hidden fees.",
    url: "https://acepaper-writers.com/pricing",
    type: "website",
  },
}

const navLinks = [
  { href: "/#features", label: "Features" },
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/pricing", label: "Pricing" },
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
              "Transparent pricing for quality writing services. Choose from academic and business writing packages with no hidden fees.",
            url: "https://acepaper-writers.com/pricing",
            mainEntity: [
              {
                "@type": "Product",
                name: "Undergraduate Academic Writing",
                description: "Perfect for essays, reports, and basic research papers",
                offers: {
                  "@type": "Offer",
                  price: "15.00",
                  priceCurrency: "USD",
                  priceValidUntil: "2025-12-31",
                  availability: "https://schema.org/InStock",
                },
              },
              {
                "@type": "Product",
                name: "Graduate Academic Writing",
                description: "Ideal for advanced research papers and theses",
                offers: {
                  "@type": "Offer",
                  price: "22.00",
                  priceCurrency: "USD",
                  priceValidUntil: "2025-12-31",
                  availability: "https://schema.org/InStock",
                },
              },
              {
                "@type": "Product",
                name: "Doctoral Academic Writing",
                description: "For dissertations and specialized academic work",
                offers: {
                  "@type": "Offer",
                  price: "30.00",
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
                <span className="text-teal-900">Transparent Pricing</span> for{" "}
                <span className="text-orange-500">Quality Writing</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Choose the plan that fits your needs. Pay only for what you need, with no hidden fees or surprises.
              </p>
            </ResponsiveContainer>
          </section>

          {/* Pricing Tabs */}
          <section className="py-12 sm:py-16">
            <ResponsiveContainer>
              <Tabs defaultValue="academic" className="w-full">
                <div className="flex justify-center mb-8">
                  <TabsList className="grid w-full max-w-md grid-cols-2">
                    <TabsTrigger value="academic">Academic Writing</TabsTrigger>
                    <TabsTrigger value="business">Business Writing</TabsTrigger>
                  </TabsList>
                </div>

                {/* Academic Writing Pricing */}
                <TabsContent value="academic">
                  <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
                    {/* Basic Plan */}
                    <Card className="flex flex-col">
                      <CardHeader>
                        <CardTitle className="text-xl">Undergraduate</CardTitle>
                        <div className="mt-4 flex items-baseline text-gray-900">
                          <span className="text-3xl font-bold tracking-tight">$15</span>
                          <span className="ml-1 text-xl font-semibold">/page</span>
                        </div>
                        <CardDescription>Perfect for essays, reports, and basic research papers</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-1">
                        <ul className="space-y-3">
                          <li className="flex items-start">
                            <Check className="h-5 w-5 flex-shrink-0 text-green-500" />
                            <span className="ml-3 text-sm">Standard 275 words per page</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 flex-shrink-0 text-green-500" />
                            <span className="ml-3 text-sm">3-5 day turnaround time</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 flex-shrink-0 text-green-500" />
                            <span className="ml-3 text-sm">Free title page & bibliography</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 flex-shrink-0 text-green-500" />
                            <span className="ml-3 text-sm">Basic research & citations</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 flex-shrink-0 text-green-500" />
                            <span className="ml-3 text-sm">2 rounds of revisions</span>
                          </li>
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full" asChild>
                          <Link href="/signup?role=client">Get Started</Link>
                        </Button>
                      </CardFooter>
                    </Card>

                    {/* Standard Plan */}
                    <Card className="flex flex-col border-orange-200 bg-orange-50/50 relative">
                      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-0 rounded-full bg-orange-500 px-3 py-1 text-xs font-medium text-white">
                        Most Popular
                      </div>
                      <CardHeader>
                        <CardTitle className="text-xl">Graduate</CardTitle>
                        <div className="mt-4 flex items-baseline text-gray-900">
                          <span className="text-3xl font-bold tracking-tight">$22</span>
                          <span className="ml-1 text-xl font-semibold">/page</span>
                        </div>
                        <CardDescription>Ideal for advanced research papers and theses</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-1">
                        <ul className="space-y-3">
                          <li className="flex items-start">
                            <Check className="h-5 w-5 flex-shrink-0 text-green-500" />
                            <span className="ml-3 text-sm">Standard 275 words per page</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 flex-shrink-0 text-green-500" />
                            <span className="ml-3 text-sm">5-7 day turnaround time</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 flex-shrink-0 text-green-500" />
                            <span className="ml-3 text-sm">Free title page & bibliography</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 flex-shrink-0 text-green-500" />
                            <span className="ml-3 text-sm">In-depth research & analysis</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 flex-shrink-0 text-green-500" />
                            <span className="ml-3 text-sm">Unlimited revisions</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 flex-shrink-0 text-green-500" />
                            <span className="ml-3 text-sm">Plagiarism report included</span>
                          </li>
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full" asChild>
                          <Link href="/signup?role=client">Get Started</Link>
                        </Button>
                      </CardFooter>
                    </Card>

                    {/* Premium Plan */}
                    <Card className="flex flex-col">
                      <CardHeader>
                        <CardTitle className="text-xl">Doctoral</CardTitle>
                        <div className="mt-4 flex items-baseline text-gray-900">
                          <span className="text-3xl font-bold tracking-tight">$30</span>
                          <span className="ml-1 text-xl font-semibold">/page</span>
                        </div>
                        <CardDescription>For dissertations and specialized academic work</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-1">
                        <ul className="space-y-3">
                          <li className="flex items-start">
                            <Check className="h-5 w-5 flex-shrink-0 text-green-500" />
                            <span className="ml-3 text-sm">Standard 275 words per page</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 flex-shrink-0 text-green-500" />
                            <span className="ml-3 text-sm">10-14 day turnaround time</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 flex-shrink-0 text-green-500" />
                            <span className="ml-3 text-sm">Free title page & bibliography</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 flex-shrink-0 text-green-500" />
                            <span className="ml-3 text-sm">Expert-level research & analysis</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 flex-shrink-0 text-green-500" />
                            <span className="ml-3 text-sm">Unlimited revisions</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 flex-shrink-0 text-green-500" />
                            <span className="ml-3 text-sm">Plagiarism report included</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 flex-shrink-0 text-green-500" />
                            <span className="ml-3 text-sm">PhD-level writer guaranteed</span>
                          </li>
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full" asChild>
                          <Link href="/signup?role=client">Get Started</Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                </TabsContent>

                {/* Business Writing Pricing */}
                <TabsContent value="business">
                  <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
                    {/* Basic Plan */}
                    <Card className="flex flex-col">
                      <CardHeader>
                        <CardTitle className="text-xl">Standard</CardTitle>
                        <div className="mt-4 flex items-baseline text-gray-900">
                          <span className="text-3xl font-bold tracking-tight">$20</span>
                          <span className="ml-1 text-xl font-semibold">/page</span>
                        </div>
                        <CardDescription>For business reports and basic proposals</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-1">
                        <ul className="space-y-3">
                          <li className="flex items-start">
                            <Check className="h-5 w-5 flex-shrink-0 text-green-500" />
                            <span className="ml-3 text-sm">Standard 275 words per page</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 flex-shrink-0 text-green-500" />
                            <span className="ml-3 text-sm">3-5 day turnaround time</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 flex-shrink-0 text-green-500" />
                            <span className="ml-3 text-sm">Professional formatting</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 flex-shrink-0 text-green-500" />
                            <span className="ml-3 text-sm">Basic market research</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 flex-shrink-0 text-green-500" />
                            <span className="ml-3 text-sm">2 rounds of revisions</span>
                          </li>
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full" asChild>
                          <Link href="/signup?role=client">Get Started</Link>
                        </Button>
                      </CardFooter>
                    </Card>

                    {/* Professional Plan */}
                    <Card className="flex flex-col border-orange-200 bg-orange-50/50 relative">
                      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-0 rounded-full bg-orange-500 px-3 py-1 text-xs font-medium text-white">
                        Most Popular
                      </div>
                      <CardHeader>
                        <CardTitle className="text-xl">Professional</CardTitle>
                        <div className="mt-4 flex items-baseline text-gray-900">
                          <span className="text-3xl font-bold tracking-tight">$35</span>
                          <span className="ml-1 text-xl font-semibold">/page</span>
                        </div>
                        <CardDescription>For comprehensive business plans and proposals</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-1">
                        <ul className="space-y-3">
                          <li className="flex items-start">
                            <Check className="h-5 w-5 flex-shrink-0 text-green-500" />
                            <span className="ml-3 text-sm">Standard 275 words per page</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 flex-shrink-0 text-green-500" />
                            <span className="ml-3 text-sm">5-7 day turnaround time</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 flex-shrink-0 text-green-500" />
                            <span className="ml-3 text-sm">Professional formatting</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 flex-shrink-0 text-green-500" />
                            <span className="ml-3 text-sm">In-depth market analysis</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 flex-shrink-0 text-green-500" />
                            <span className="ml-3 text-sm">Unlimited revisions</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 flex-shrink-0 text-green-500" />
                            <span className="ml-3 text-sm">Executive summary included</span>
                          </li>
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full" asChild>
                          <Link href="/signup?role=client">Get Started</Link>
                        </Button>
                      </CardFooter>
                    </Card>

                    {/* Enterprise Plan */}
                    <Card className="flex flex-col">
                      <CardHeader>
                        <CardTitle className="text-xl">Enterprise</CardTitle>
                        <div className="mt-4 flex items-baseline text-gray-900">
                          <span className="text-3xl font-bold tracking-tight">$50</span>
                          <span className="ml-1 text-xl font-semibold">/page</span>
                        </div>
                        <CardDescription>For complex business documents and strategic plans</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-1">
                        <ul className="space-y-3">
                          <li className="flex items-start">
                            <Check className="h-5 w-5 flex-shrink-0 text-green-500" />
                            <span className="ml-3 text-sm">Standard 275 words per page</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 flex-shrink-0 text-green-500" />
                            <span className="ml-3 text-sm">10-14 day turnaround time</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 flex-shrink-0 text-green-500" />
                            <span className="ml-3 text-sm">Premium formatting & design</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 flex-shrink-0 text-green-500" />
                            <span className="ml-3 text-sm">Comprehensive industry research</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 flex-shrink-0 text-green-500" />
                            <span className="ml-3 text-sm">Unlimited revisions</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 flex-shrink-0 text-green-500" />
                            <span className="ml-3 text-sm">Executive summary included</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 flex-shrink-0 text-green-500" />
                            <span className="ml-3 text-sm">Industry expert writer guaranteed</span>
                          </li>
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full" asChild>
                          <Link href="/signup?role=client">Get Started</Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                </TabsContent>
              </Tabs>
            </ResponsiveContainer>
          </section>

          {/* Additional Services */}
          <section className="py-12 sm:py-16 bg-gray-50">
            <ResponsiveContainer>
              <div className="text-center mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">Additional Services</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Enhance your order with these optional services to meet your specific needs
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Rush Delivery</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-4">
                      Need it faster? Get your order delivered in as little as 24 hours.
                    </p>
                    <div className="flex items-baseline">
                      <span className="text-2xl font-bold">+30%</span>
                      <span className="ml-1 text-sm text-gray-500">of base price</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Plagiarism Report</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-4">
                      Receive a detailed report confirming your content is 100% original.
                    </p>
                    <div className="flex items-baseline">
                      <span className="text-2xl font-bold">$15</span>
                      <span className="ml-1 text-sm text-gray-500">per order</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Premium Writer</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-4">
                      Get assigned to our top 10% of writers with the highest ratings.
                    </p>
                    <div className="flex items-baseline">
                      <span className="text-2xl font-bold">+25%</span>
                      <span className="ml-1 text-sm text-gray-500">of base price</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Extended Revisions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-4">
                      Extend your revision period from 7 days to 30 days after delivery.
                    </p>
                    <div className="flex items-baseline">
                      <span className="text-2xl font-bold">$10</span>
                      <span className="ml-1 text-sm text-gray-500">per order</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </ResponsiveContainer>
          </section>

          {/* Pricing Calculator */}
          <section className="py-12 sm:py-16">
            <ResponsiveContainer>
              <div className="max-w-3xl mx-auto">
                <div className="text-center mb-8">
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4">Need a Custom Quote?</h2>
                  <p className="text-gray-600">
                    Contact our team for a personalized quote based on your specific requirements.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 sm:p-8 rounded-lg border">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-semibold mb-2">Request a Custom Quote</h3>
                    <p className="text-sm text-gray-600">
                      Our team will analyze your requirements and provide a tailored quote within 2 hours.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" className="w-full sm:w-auto" asChild>
                      <Link href="/contact">Contact Sales Team</Link>
                    </Button>
                    <Button size="lg" variant="outline" className="w-full sm:w-auto" asChild>
                      <Link href="/signup?role=client">Create Account</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </ResponsiveContainer>
          </section>

          {/* FAQ Section */}
          <section className="py-12 sm:py-16 bg-gray-50">
            <ResponsiveContainer>
              <div className="text-center mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">Frequently Asked Questions</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Find answers to common questions about our pricing and services
                </p>
              </div>

              <div className="max-w-3xl mx-auto">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>How is the price calculated?</AccordionTrigger>
                    <AccordionContent>
                      Our pricing is primarily based on the academic level, number of pages, and deadline. Additional
                      factors include the complexity of the subject, any special requirements, and optional add-on
                      services. You can get an instant quote by using our order form.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>What payment methods do you accept?</AccordionTrigger>
                    <AccordionContent>
                      We accept all major credit cards (Visa, MasterCard, American Express), PayPal, M-Pesa, and bank
                      transfers. All payments are processed securely through our encrypted payment system.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Do you offer discounts?</AccordionTrigger>
                    <AccordionContent>
                      Yes! We offer a 10% discount on your first order. We also have a loyalty program where returning
                      customers receive progressive discounts based on the number of pages ordered. Bulk orders also
                      qualify for special pricing.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger>What is your refund policy?</AccordionTrigger>
                    <AccordionContent>
                      We offer a money-back guarantee if we fail to deliver your order on time or if the quality doesn't
                      meet your requirements. You can request revisions at no additional cost, and if you're still not
                      satisfied, you can request a partial or full refund depending on the circumstances.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-5">
                    <AccordionTrigger>Are there any hidden fees?</AccordionTrigger>
                    <AccordionContent>
                      No, there are no hidden fees. The price you see during checkout is the final price you'll pay. Any
                      additional services are clearly marked and optional. We believe in transparent pricing and will
                      never surprise you with unexpected charges.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-6">
                    <AccordionTrigger>Can I get a discount for a large order?</AccordionTrigger>
                    <AccordionContent>
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
          <section className="py-12 sm:py-16 bg-teal-900 text-white">
            <ResponsiveContainer className="text-center">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Ready to Get Started?</h2>
              <p className="text-lg sm:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto">
                Join thousands of satisfied clients and experience our premium writing services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/signup?role=client">
                  <Button size="lg" className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600">
                    Create an Account
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
