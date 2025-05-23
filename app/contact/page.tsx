"use client"

import type React from "react"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ResponsiveContainer } from "@/components/responsive-container"
import { MobileMenu } from "@/components/mobile-menu"
import { ThemeToggle } from "@/components/theme-toggle"
import { Mail, Phone, Clock, Send, MessageSquare, Users, Award } from "lucide-react"
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"

const navLinks = [
  { href: "/#features", label: "Features" },
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
]

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours.",
    })

    setIsSubmitting(false)
    ;(e.target as HTMLFormElement).reset()
  }

  return (
    <>
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
                    link.href === "/contact" ? "text-orange-500" : ""
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
          <section className="py-12 sm:py-16 bg-gradient-to-br from-teal-50 via-orange-50 to-white">
            <ResponsiveContainer className="text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                <span className="text-teal-900">Get in Touch</span> with{" "}
                <span className="text-orange-500">Our Expert Team</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Have questions about our services? Need a custom quote? Our dedicated support team is here to help you
                achieve academic excellence.
              </p>
            </ResponsiveContainer>
          </section>

          {/* Contact Info Cards */}
          <section className="py-12 sm:py-16">
            <ResponsiveContainer>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                <Card className="text-center hover:shadow-lg transition-all duration-300 border-orange-200 bg-gradient-to-br from-orange-50 to-orange-100">
                  <CardHeader>
                    <div className="h-16 w-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Mail className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-teal-900">Email Us</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 font-medium">writerchen95@gmail.com</p>
                    <p className="text-sm text-gray-600 mt-2">We respond within 10 minutes</p>
                  </CardContent>
                </Card>

                <Card className="text-center hover:shadow-lg transition-all duration-300 border-teal-200 bg-gradient-to-br from-teal-50 to-teal-100">
                  <CardHeader>
                    <div className="h-16 w-16 bg-teal-700 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Phone className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-teal-900">Call Us</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 font-medium">+254701738794</p>
                    <p className="text-sm text-gray-600 mt-2">24/7 Support Available</p>
                  </CardContent>
                </Card>

                <Card className="text-center hover:shadow-lg transition-all duration-300 border-green-200 bg-gradient-to-br from-green-50 to-green-100">
                  <CardHeader>
                    <div className="h-16 w-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Clock className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-teal-900">Response Time</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 font-medium">Within 2 Hours</p>
                    <p className="text-sm text-gray-600 mt-2">Average response time</p>
                  </CardContent>
                </Card>

                <Card className="text-center hover:shadow-lg transition-all duration-300 border-purple-200 bg-gradient-to-br from-purple-50 to-purple-100">
                  <CardHeader>
                    <div className="h-16 w-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <MessageSquare className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-teal-900">Live Chat</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 font-medium">Available 24/7</p>
                    <p className="text-sm text-gray-600 mt-2">Instant support</p>
                  </CardContent>
                </Card>
              </div>
            </ResponsiveContainer>
          </section>

          {/* Contact Form Section */}
          <section className="py-12 sm:py-16 bg-gray-50">
            <ResponsiveContainer>
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Contact Form */}
                <Card className="shadow-xl border-0">
                  <CardHeader className="bg-gradient-to-r from-teal-900 to-teal-800 text-white rounded-t-lg">
                    <CardTitle className="text-2xl flex items-center gap-2">
                      <Send className="h-6 w-6" />
                      Send us a Message
                    </CardTitle>
                    <CardDescription className="text-teal-100">
                      Fill out the form below and we'll get back to you as soon as possible.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName" className="text-teal-900 font-medium">
                            First Name *
                          </Label>
                          <Input
                            id="firstName"
                            name="firstName"
                            required
                            className="border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                            placeholder="John"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName" className="text-teal-900 font-medium">
                            Last Name *
                          </Label>
                          <Input
                            id="lastName"
                            name="lastName"
                            required
                            className="border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                            placeholder="Doe"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-teal-900 font-medium">
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          className="border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                          placeholder="john.doe@example.com"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-teal-900 font-medium">
                          Phone Number
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          className="border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject" className="text-teal-900 font-medium">
                          Subject *
                        </Label>
                        <Select name="subject" required>
                          <SelectTrigger className="border-gray-300 focus:border-orange-500 focus:ring-orange-500">
                            <SelectValue placeholder="Select a subject" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="general">General Inquiry</SelectItem>
                            <SelectItem value="order">Order Support</SelectItem>
                            <SelectItem value="pricing">Pricing Question</SelectItem>
                            <SelectItem value="technical">Technical Support</SelectItem>
                            <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                            <SelectItem value="feedback">Feedback</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-teal-900 font-medium">
                          Message *
                        </Label>
                        <Textarea
                          id="message"
                          name="message"
                          required
                          rows={6}
                          className="border-gray-300 focus:border-orange-500 focus:ring-orange-500 resize-none"
                          placeholder="Tell us how we can help you..."
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-medium py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                            Sending Message...
                          </>
                        ) : (
                          <>
                            <Send className="h-4 w-4 mr-2" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>

                {/* Why Choose Us */}
                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-teal-900">Why Choose AcePaper Writers?</h2>
                    <p className="text-gray-600 mb-8">
                      We're committed to providing exceptional academic writing services with unmatched quality and
                      support.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Users className="h-6 w-6 text-orange-500" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-teal-900 mb-2">Expert Writers</h3>
                        <p className="text-gray-600">
                          Our team consists of qualified professionals with advanced degrees and years of experience in
                          academic writing.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Award className="h-6 w-6 text-teal-700" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-teal-900 mb-2">Quality Guarantee</h3>
                        <p className="text-gray-600">
                          We guarantee 100% original, plagiarism-free content with perfect grammar and timely delivery
                          for every order.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <MessageSquare className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-teal-900 mb-2">24/7 Support</h3>
                        <p className="text-gray-600">
                          Our customer support team is available round the clock to assist you with any questions or
                          concerns.
                        </p>
                      </div>
                    </div>
                  </div>

                  <Card className="bg-gradient-to-r from-teal-900 to-teal-800 text-white border-0">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2">Ready to Get Started?</h3>
                      <p className="text-teal-100 mb-4">
                        Join thousands of satisfied students who trust us with their academic success.
                      </p>
                      <Button
                        asChild
                        className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white border-0 w-full sm:w-auto"
                      >
                        <Link href="/order">Place an Order Now</Link>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
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
