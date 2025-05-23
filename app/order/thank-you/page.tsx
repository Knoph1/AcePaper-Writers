"use client"
import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ResponsiveContainer } from "@/components/responsive-container"
import { MobileMenu } from "@/components/mobile-menu"
import { ThemeToggle } from "@/components/theme-toggle"
import {
  CheckCircle,
  Clock,
  MessageSquare,
  FileText,
  Mail,
  Phone,
  Download,
  ArrowRight,
  Star,
  Shield,
  Users,
} from "lucide-react"

const navLinks = [
  { href: "/#features", label: "Features" },
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
]

export default function ThankYouPage() {
  const [orderNumber, setOrderNumber] = useState("")
  const [estimatedDelivery, setEstimatedDelivery] = useState("")

  useEffect(() => {
    // Generate a random order number and estimated delivery
    const orderNum = `APW-${Date.now().toString().slice(-6)}`
    setOrderNumber(orderNum)

    // Calculate estimated delivery (3-5 days from now)
    const deliveryDate = new Date()
    deliveryDate.setDate(deliveryDate.getDate() + Math.floor(Math.random() * 3) + 3)
    setEstimatedDelivery(
      deliveryDate.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
    )
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <ResponsiveContainer className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="AcePaper Writers Logo"
              width={64}
              height={64}
              className="w-12 h-12 sm:w-16 sm:h-16"
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

      <main className="flex-1 py-8 sm:py-12">
        <ResponsiveContainer>
          <div className="max-w-4xl mx-auto">
            {/* Success Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mb-6 shadow-lg">
                <CheckCircle className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold mb-4">
                <span className="text-green-600">Order Confirmed!</span>
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Thank you for choosing AcePaper Writers. Your order has been successfully submitted and our expert
                writers are ready to get started.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Order Details */}
              <div className="lg:col-span-2 space-y-6">
                {/* Order Information Card */}
                <Card className="border-2 border-green-200 bg-gradient-to-br from-green-50 to-emerald-50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-green-700">
                      <FileText className="h-5 w-5" />
                      Order Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm font-medium text-gray-600">Order Number</p>
                        <p className="text-lg font-bold text-green-700">{orderNumber}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-600">Estimated Delivery</p>
                        <p className="text-lg font-bold text-green-700">{estimatedDelivery}</p>
                      </div>
                    </div>
                    <Separator />
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-green-100 text-green-700 border-green-200">
                        <Clock className="h-3 w-3 mr-1" />
                        Processing
                      </Badge>
                      <span className="text-sm text-gray-600">Your order is being reviewed by our team</span>
                    </div>
                  </CardContent>
                </Card>

                {/* What Happens Next */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-teal-900">
                      <ArrowRight className="h-5 w-5 text-orange-500" />
                      What Happens Next?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                          <span className="text-sm font-bold text-orange-600">1</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">Order Review</h4>
                          <p className="text-sm text-gray-600">
                            Our team reviews your requirements and assigns the best writer for your project.
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                          <span className="text-sm font-bold text-orange-600">2</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">Writer Assignment</h4>
                          <p className="text-sm text-gray-600">
                            You'll receive an email confirmation with your writer's details and project timeline.
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                          <span className="text-sm font-bold text-orange-600">3</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">Progress Updates</h4>
                          <p className="text-sm text-gray-600">
                            Track your order progress and communicate directly with your writer through our platform.
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                          <span className="text-sm font-bold text-green-600">4</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">Delivery & Review</h4>
                          <p className="text-sm text-gray-600">
                            Receive your completed work and request any revisions if needed.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Important Information */}
                <Card className="border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-blue-700">
                      <Shield className="h-5 w-5" />
                      Important Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Mail className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-blue-900">Check Your Email</p>
                        <p className="text-xs text-blue-700">
                          A confirmation email with order details has been sent to your registered email address.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MessageSquare className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-blue-900">Stay Connected</p>
                        <p className="text-xs text-blue-700">
                          You can communicate with your writer and track progress through your dashboard.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Download className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-blue-900">Download Ready</p>
                        <p className="text-xs text-blue-700">
                          Your completed work will be available for download in multiple formats.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Action Sidebar */}
              <div className="lg:col-span-1 space-y-6">
                {/* Quick Actions */}
                <Card className="sticky top-24">
                  <CardHeader>
                    <CardTitle className="text-teal-900">Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button
                      asChild
                      className="w-full bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <Link href="/dashboard">
                        <FileText className="h-4 w-4 mr-2" />
                        View Dashboard
                      </Link>
                    </Button>

                    <Button
                      asChild
                      variant="outline"
                      className="w-full border-2 border-orange-200 hover:bg-orange-50 hover:border-orange-300 transition-all duration-300"
                    >
                      <Link href="/order">
                        <ArrowRight className="h-4 w-4 mr-2" />
                        Place Another Order
                      </Link>
                    </Button>

                    <Button
                      asChild
                      variant="outline"
                      className="w-full border-2 border-gray-200 hover:bg-gray-50 transition-all duration-300"
                    >
                      <Link href="/contact">
                        <MessageSquare className="h-4 w-4 mr-2" />
                        Contact Support
                      </Link>
                    </Button>
                  </CardContent>
                </Card>

                {/* Contact Information */}
                <Card className="bg-gradient-to-br from-orange-50 to-amber-50 border-2 border-orange-200">
                  <CardHeader>
                    <CardTitle className="text-orange-700">Need Help?</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                        <Mail className="h-4 w-4 text-orange-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-orange-900">Email Support</p>
                        <p className="text-xs text-orange-700">writerchen95@gmail.com</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                        <Phone className="h-4 w-4 text-orange-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-orange-900">Phone Support</p>
                        <p className="text-xs text-orange-700">+254701738794</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                        <Clock className="h-4 w-4 text-orange-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-orange-900">Response Time</p>
                        <p className="text-xs text-orange-700">Within 2 hours</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Why Choose Us */}
                <Card className="bg-gradient-to-br from-teal-50 to-cyan-50 border-2 border-teal-200">
                  <CardHeader>
                    <CardTitle className="text-teal-700">Why You Made the Right Choice</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Star className="h-4 w-4 text-yellow-500" />
                      <span className="text-sm text-teal-900">98% Customer Satisfaction</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="h-4 w-4 text-teal-600" />
                      <span className="text-sm text-teal-900">500+ Expert Writers</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Shield className="h-4 w-4 text-green-600" />
                      <span className="text-sm text-teal-900">100% Plagiarism-Free</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="h-4 w-4 text-blue-600" />
                      <span className="text-sm text-teal-900">On-Time Delivery</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </ResponsiveContainer>
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
  )
}
