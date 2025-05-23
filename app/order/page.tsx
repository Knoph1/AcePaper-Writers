"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ResponsiveContainer } from "@/components/responsive-container"
import { MobileMenu } from "@/components/mobile-menu"
import { ThemeToggle } from "@/components/theme-toggle"
import { Calendar, Upload, FileText, DollarSign, AlertTriangle, CheckCircle, Info } from "lucide-react"

const navLinks = [
  { href: "/#features", label: "Features" },
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/pricing", label: "Pricing" },
]

interface OrderFormData {
  orderType: string
  academicLevel: string
  subject: string
  topic: string
  instructions: string
  pages: number
  deadline: string
  spacing: string
  sources: number
  citationStyle: string
  additionalServices: string[]
  files: File[]
  email: string
  phone: string
}

export default function OrderPage() {
  const [formData, setFormData] = useState<OrderFormData>({
    orderType: "",
    academicLevel: "",
    subject: "",
    topic: "",
    instructions: "",
    pages: 1,
    deadline: "",
    spacing: "double",
    sources: 0,
    citationStyle: "",
    additionalServices: [],
    files: [],
    email: "",
    phone: "",
  })

  const [totalPrice, setTotalPrice] = useState(0)
  const [isUrgent, setIsUrgent] = useState(false)

  // Base prices per academic level
  const basePrices = {
    "high-school": 7.5,
    undergraduate: 10.0,
    postgraduate: 15.0,
  }

  // Calculate price based on form data
  useEffect(() => {
    const basePrice = basePrices[formData.academicLevel as keyof typeof basePrices] || 0
    let price = basePrice * formData.pages

    // Apply urgency multiplier
    if (formData.deadline) {
      const deadlineDate = new Date(formData.deadline)
      const now = new Date()
      const hoursUntilDeadline = (deadlineDate.getTime() - now.getTime()) / (1000 * 60 * 60)

      if (hoursUntilDeadline < 72) {
        price *= 1.3 // 30% surcharge for urgent orders
        setIsUrgent(true)
      } else {
        setIsUrgent(false)
      }
    }

    // Add additional services
    formData.additionalServices.forEach((service) => {
      switch (service) {
        case "plagiarism-report":
          price += 10
          break
        case "premium-writer":
          price *= 1.25
          break
        case "extended-revisions":
          price += 8
          break
      }
    })

    setTotalPrice(price)
  }, [formData])

  const handleInputChange = (field: keyof OrderFormData, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleAdditionalServiceChange = (service: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      additionalServices: checked
        ? [...prev.additionalServices, service]
        : prev.additionalServices.filter((s) => s !== service),
    }))
  }

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || [])
    setFormData((prev) => ({
      ...prev,
      files: [...prev.files, ...files],
    }))
  }

  const removeFile = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      files: prev.files.filter((_, i) => i !== index),
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Order submitted:", formData)

    // Redirect to thank you page
    window.location.href = "/order/thank-you"
  }

  // Get minimum date (24 hours from now)
  const getMinDate = () => {
    const tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1)
    return tomorrow.toISOString().slice(0, 16)
  }

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

      <main className="flex-1 py-8">
        <ResponsiveContainer>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl sm:text-4xl font-bold mb-4">
                <span className="text-teal-900">Place Your</span> <span className="text-orange-500">Order</span>
              </h1>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Fill out the form below with your requirements and get an instant quote for your writing project.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Order Form */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FileText className="h-5 w-5 text-orange-500" />
                      Order Details
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Order Type */}
                      <div className="space-y-2">
                        <Label htmlFor="orderType">Order Type *</Label>
                        <Select
                          value={formData.orderType}
                          onValueChange={(value) => handleInputChange("orderType", value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select order type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="essay">Essay</SelectItem>
                            <SelectItem value="research-paper">Research Paper</SelectItem>
                            <SelectItem value="thesis">Thesis</SelectItem>
                            <SelectItem value="dissertation">Dissertation</SelectItem>
                            <SelectItem value="case-study">Case Study</SelectItem>
                            <SelectItem value="book-review">Book Review</SelectItem>
                            <SelectItem value="lab-report">Lab Report</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Academic Level */}
                      <div className="space-y-2">
                        <Label htmlFor="academicLevel">Academic Level *</Label>
                        <Select
                          value={formData.academicLevel}
                          onValueChange={(value) => handleInputChange("academicLevel", value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select academic level" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="high-school">High School ($7.50/page)</SelectItem>
                            <SelectItem value="undergraduate">Undergraduate ($10.00/page)</SelectItem>
                            <SelectItem value="postgraduate">Postgraduate ($15.00/page)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Subject */}
                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject *</Label>
                        <Input
                          id="subject"
                          value={formData.subject}
                          onChange={(e) => handleInputChange("subject", e.target.value)}
                          placeholder="e.g., English Literature, Psychology, Business"
                          required
                        />
                      </div>

                      {/* Topic */}
                      <div className="space-y-2">
                        <Label htmlFor="topic">Topic/Title *</Label>
                        <Input
                          id="topic"
                          value={formData.topic}
                          onChange={(e) => handleInputChange("topic", e.target.value)}
                          placeholder="Enter your paper topic or title"
                          required
                        />
                      </div>

                      {/* Instructions */}
                      <div className="space-y-2">
                        <Label htmlFor="instructions">Instructions *</Label>
                        <Textarea
                          id="instructions"
                          value={formData.instructions}
                          onChange={(e) => handleInputChange("instructions", e.target.value)}
                          placeholder="Provide detailed instructions for your order..."
                          rows={6}
                          required
                        />
                      </div>

                      {/* Pages and Deadline Row */}
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="pages">Number of Pages *</Label>
                          <Input
                            id="pages"
                            type="number"
                            min="1"
                            value={formData.pages}
                            onChange={(e) => handleInputChange("pages", Number.parseInt(e.target.value) || 1)}
                            required
                          />
                          <p className="text-xs text-gray-500">275 words per page</p>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="deadline" className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-orange-500" />
                            Due Date/Deadline *
                          </Label>
                          <Input
                            id="deadline"
                            type="datetime-local"
                            value={formData.deadline}
                            onChange={(e) => handleInputChange("deadline", e.target.value)}
                            min={getMinDate()}
                            className="border-2 border-gray-200 focus:border-orange-500 transition-colors"
                            required
                          />
                          <p className="text-xs text-gray-500">Select when you need your work completed</p>
                          {isUrgent && (
                            <div className="flex items-center gap-2 p-2 bg-orange-50 border border-orange-200 rounded-md">
                              <AlertTriangle className="h-4 w-4 text-orange-500" />
                              <span className="text-xs text-orange-700">
                                Urgent order (less than 72 hours) - 30% surcharge applies
                              </span>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Spacing and Sources Row */}
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="spacing">Spacing</Label>
                          <Select
                            value={formData.spacing}
                            onValueChange={(value) => handleInputChange("spacing", value)}
                          >
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="single">Single Spaced</SelectItem>
                              <SelectItem value="double">Double Spaced</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="sources">Number of Sources</Label>
                          <Input
                            id="sources"
                            type="number"
                            min="0"
                            value={formData.sources}
                            onChange={(e) => handleInputChange("sources", Number.parseInt(e.target.value) || 0)}
                          />
                        </div>
                      </div>

                      {/* Citation Style */}
                      <div className="space-y-2">
                        <Label htmlFor="citationStyle">Citation Style</Label>
                        <Select
                          value={formData.citationStyle}
                          onValueChange={(value) => handleInputChange("citationStyle", value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select citation style" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="apa">APA</SelectItem>
                            <SelectItem value="mla">MLA</SelectItem>
                            <SelectItem value="chicago">Chicago</SelectItem>
                            <SelectItem value="harvard">Harvard</SelectItem>
                            <SelectItem value="ieee">IEEE</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Additional Services */}
                      <div className="space-y-4">
                        <Label>Additional Services</Label>
                        <div className="space-y-3">
                          <div className="flex items-center space-x-2">
                            <Checkbox
                              id="plagiarism-report"
                              checked={formData.additionalServices.includes("plagiarism-report")}
                              onCheckedChange={(checked) =>
                                handleAdditionalServiceChange("plagiarism-report", checked as boolean)
                              }
                            />
                            <Label htmlFor="plagiarism-report" className="text-sm">
                              Plagiarism Report (+$10)
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox
                              id="premium-writer"
                              checked={formData.additionalServices.includes("premium-writer")}
                              onCheckedChange={(checked) =>
                                handleAdditionalServiceChange("premium-writer", checked as boolean)
                              }
                            />
                            <Label htmlFor="premium-writer" className="text-sm">
                              Premium Writer (+25%)
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox
                              id="extended-revisions"
                              checked={formData.additionalServices.includes("extended-revisions")}
                              onCheckedChange={(checked) =>
                                handleAdditionalServiceChange("extended-revisions", checked as boolean)
                              }
                            />
                            <Label htmlFor="extended-revisions" className="text-sm">
                              Extended Revisions (+$8)
                            </Label>
                          </div>
                        </div>
                      </div>

                      {/* File Upload */}
                      <div className="space-y-2">
                        <Label htmlFor="files">Upload Files (Optional)</Label>
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                          <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                          <p className="text-sm text-gray-600 mb-2">
                            Upload any reference materials, instructions, or files
                          </p>
                          <Input id="files" type="file" multiple onChange={handleFileUpload} className="hidden" />
                          <Button
                            type="button"
                            variant="outline"
                            onClick={() => document.getElementById("files")?.click()}
                          >
                            Choose Files
                          </Button>
                        </div>
                        {formData.files.length > 0 && (
                          <div className="space-y-2">
                            {formData.files.map((file, index) => (
                              <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                                <span className="text-sm">{file.name}</span>
                                <Button type="button" variant="ghost" size="sm" onClick={() => removeFile(index)}>
                                  Remove
                                </Button>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Contact Information */}
                      <div className="space-y-4">
                        <Label className="text-base font-medium">Contact Information</Label>
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="email">Email Address *</Label>
                            <Input
                              id="email"
                              type="email"
                              value={formData.email || ""}
                              onChange={(e) => handleInputChange("email", e.target.value)}
                              placeholder="your.email@example.com"
                              required
                            />
                            <p className="text-xs text-gray-500">We'll send order updates to this email</p>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="phone">Phone Number (Optional)</Label>
                            <Input
                              id="phone"
                              type="tel"
                              value={formData.phone || ""}
                              onChange={(e) => handleInputChange("phone", e.target.value)}
                              placeholder="+1 (555) 123-4567"
                            />
                            <p className="text-xs text-gray-500">For urgent order communications</p>
                          </div>
                        </div>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <Card className="sticky top-24">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <DollarSign className="h-5 w-5 text-green-500" />
                      Order Summary
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span>Academic Level:</span>
                        <span className="font-medium">{formData.academicLevel || "Not selected"}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Pages:</span>
                        <span className="font-medium">{formData.pages}</span>
                      </div>
                      {formData.deadline && (
                        <div className="flex justify-between text-sm">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3 text-orange-500" />
                            Deadline:
                          </span>
                          <span className="font-medium text-right">
                            {new Date(formData.deadline).toLocaleDateString("en-US", {
                              weekday: "short",
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                          </span>
                        </div>
                      )}
                      {formData.additionalServices.length > 0 && (
                        <div className="space-y-1">
                          <span className="text-sm">Additional Services:</span>
                          {formData.additionalServices.map((service) => (
                            <Badge key={service} variant="secondary" className="text-xs">
                              {service.replace("-", " ")}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </div>

                    <Separator />

                    <div className="space-y-2">
                      {isUrgent && (
                        <div className="flex justify-between text-sm text-orange-600">
                          <span>Urgency Surcharge:</span>
                          <span>+30%</span>
                        </div>
                      )}
                      <div className="flex justify-between text-lg font-bold">
                        <span>Total:</span>
                        <span className="text-green-600">${totalPrice.toFixed(2)}</span>
                      </div>
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-orange-500 hover:bg-orange-600"
                      onClick={handleSubmit}
                      disabled={!formData.orderType || !formData.academicLevel || !formData.deadline || !formData.email}
                    >
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Place Order
                    </Button>

                    <div className="text-xs text-gray-500 text-center">
                      <Info className="h-3 w-3 inline mr-1" />
                      Secure payment processing
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
