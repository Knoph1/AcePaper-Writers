import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ResponsiveContainer } from "@/components/responsive-container"
import { MobileMenu } from "@/components/mobile-menu"
import { ThemeToggle } from "@/components/theme-toggle"
import { ArrowLeft, Upload, Calendar, DollarSign } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Place an Order - AcePaper Writers | Professional Writing Services",
  description:
    "Place your order for professional academic and business writing services. Get high-quality content from expert writers.",
  keywords: "place order, academic writing, professional writing, essay writing, research papers, acepaper writers",
  alternates: {
    canonical: "/order",
  },
}

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
]

export default function OrderPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <ResponsiveContainer className="flex h-20 items-center justify-between">
          <div className="flex items-center gap-2">
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
          </div>

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

      <main className="flex-1 py-12">
        <ResponsiveContainer>
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <Link href="/" className="inline-flex items-center text-orange-500 hover:text-orange-600 mb-4">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
              <h1 className="text-3xl sm:text-4xl font-bold mb-4">Place Your Order</h1>
              <p className="text-lg text-gray-600">
                Tell us about your project and we'll connect you with the perfect writer.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Order Details</CardTitle>
                    <CardDescription>Provide detailed information about your writing project</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject/Topic</Label>
                        <Input id="subject" placeholder="Enter your subject or topic" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="type">Type of Work</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="essay">Essay</SelectItem>
                            <SelectItem value="research-paper">Research Paper</SelectItem>
                            <SelectItem value="thesis">Thesis</SelectItem>
                            <SelectItem value="dissertation">Dissertation</SelectItem>
                            <SelectItem value="case-study">Case Study</SelectItem>
                            <SelectItem value="report">Report</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="pages">Number of Pages</Label>
                        <Input id="pages" type="number" placeholder="e.g., 5" min="1" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="deadline">Deadline</Label>
                        <Input id="deadline" type="date" />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="level">Academic Level</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select level" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="high-school">High School</SelectItem>
                            <SelectItem value="undergraduate">Undergraduate</SelectItem>
                            <SelectItem value="masters">Master's</SelectItem>
                            <SelectItem value="phd">PhD</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="style">Citation Style</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select style" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="apa">APA</SelectItem>
                            <SelectItem value="mla">MLA</SelectItem>
                            <SelectItem value="chicago">Chicago</SelectItem>
                            <SelectItem value="harvard">Harvard</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="instructions">Detailed Instructions</Label>
                      <Textarea
                        id="instructions"
                        placeholder="Provide detailed instructions for your order..."
                        className="min-h-32"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="files">Upload Files (Optional)</Label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                        <Upload className="mx-auto h-12 w-12 text-gray-400" />
                        <p className="mt-2 text-sm text-gray-600">Drag and drop files here, or click to browse</p>
                        <Input id="files" type="file" multiple className="hidden" />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" type="email" placeholder="your@email.com" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number (Optional)</Label>
                        <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="lg:col-span-1">
                <Card className="sticky top-24">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <DollarSign className="h-5 w-5" />
                      Order Summary
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between">
                      <span>Pages:</span>
                      <span>0</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Price per page:</span>
                      <span>$15.00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Academic level:</span>
                      <span>-</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Deadline:</span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />-
                      </span>
                    </div>
                    <hr />
                    <div className="flex justify-between font-semibold text-lg">
                      <span>Total:</span>
                      <span>$0.00</span>
                    </div>
                    <Button className="w-full" size="lg">
                      Continue to Payment
                    </Button>
                    <p className="text-xs text-gray-500 text-center">
                      Secure payment processing. Your information is protected.
                    </p>
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
                  <Link href="/pricing" className="text-gray-600 hover:text-orange-500 text-sm">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/order" className="text-gray-600 hover:text-orange-500 text-sm">
                    Place an Order
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
  )
}
