import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ResponsiveContainer } from "@/components/responsive-container"
import { MobileMenu } from "@/components/mobile-menu"
import { ThemeToggle } from "@/components/theme-toggle"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Refund Policy - AcePaper Writers",
  description:
    "Understand our refund policy and the circumstances under which you may be eligible for a refund at AcePaper Writers.",
  keywords: [
    "acepaper writers refund",
    "refund policy",
    "money back guarantee",
    "writing service refund",
    "refund eligibility",
  ],
  alternates: {
    canonical: "/refund",
  },
  openGraph: {
    title: "Refund Policy - AcePaper Writers",
    description:
      "Understand our refund policy and the circumstances under which you may be eligible for a refund at AcePaper Writers.",
    url: "https://acepaper-writers.com/refund",
    type: "website",
  },
}

const navLinks = [
  { href: "/#features", label: "Features" },
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/pricing", label: "Pricing" },
]

export default function RefundPage() {
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
              <span className="text-teal-900">Refund Policy</span>
            </h1>
            <p className="text-base sm:text-lg text-gray-600 mb-8 max-w-3xl mx-auto">Last updated: May 16, 2025</p>
          </ResponsiveContainer>
        </section>

        <section className="py-12">
          <ResponsiveContainer>
            <div className="prose prose-gray max-w-none">
              <p className="lead">
                At AcePaper Writers, we are committed to ensuring your satisfaction with our services. This Refund
                Policy outlines the circumstances under which you may be eligible for a refund and the process for
                requesting one.
              </p>

              <p>
                By using our services, you agree to the terms of this Refund Policy. Please read it carefully to
                understand your rights and options regarding refunds.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">1. Refund Eligibility</h2>
              <p>You may be eligible for a refund under the following circumstances:</p>

              <h3 className="text-xl font-semibold mt-6 mb-3">1.1 Quality Issues</h3>
              <p>
                If the delivered content does not meet the quality standards specified in your order, you may be
                eligible for a refund. Quality issues may include:
              </p>
              <ul>
                <li>Significant plagiarism (as determined by our plagiarism detection tools)</li>
                <li>Failure to follow specific instructions provided in the order</li>
                <li>Substantial grammatical or factual errors that affect the usability of the content</li>
                <li>Incomplete work that does not meet the ordered word count or page requirements</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">1.2 Late Delivery</h3>
              <p>
                If your order is delivered after the agreed-upon deadline and you no longer need the content due to the
                delay, you may be eligible for a refund. The refund amount will depend on:
              </p>
              <ul>
                <li>The length of the delay</li>
                <li>Whether partial work has been delivered</li>
                <li>Whether you still wish to receive the completed work</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">1.3 Technical Issues</h3>
              <p>
                If technical issues on our platform prevent the proper delivery of your order or cause significant
                problems with the ordering process, you may be eligible for a refund.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">1.4 Double Payment</h3>
              <p>
                If you accidentally pay for the same order twice, you will be eligible for a refund of the duplicate
                payment.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">1.5 Cancellation Before Assignment</h3>
              <p>
                If you cancel your order before it has been assigned to a writer, you will be eligible for a full
                refund.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">2. Refund Process</h2>
              <p>To request a refund, please follow these steps:</p>
              <ol>
                <li>Log in to your AcePaper Writers account</li>
                <li>Navigate to the order in question</li>
                <li>Click on the "Request Refund" button</li>
                <li>
                  Fill out the refund request form, providing detailed information about the reason for your request
                </li>
                <li>Submit the form for review</li>
              </ol>
              <p>
                Alternatively, you can contact our customer support team directly at{" "}
                <a href="mailto:contact@acepaper-writers.com" className="text-orange-500 hover:underline">
                  contact@acepaper-writers.com
                </a>{" "}
                with your refund request.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">3. Refund Review Process</h2>
              <p>Once we receive your refund request, our team will:</p>
              <ol>
                <li>Review your order details and the reason for your refund request</li>
                <li>Examine the delivered content (if applicable)</li>
                <li>Consult with the assigned writer (if applicable)</li>
                <li>Make a decision regarding your refund request within 3-5 business days</li>
              </ol>
              <p>We may contact you for additional information during the review process.</p>

              <h2 className="text-2xl font-bold mt-8 mb-4">4. Types of Refunds</h2>
              <p>Depending on the circumstances, we may issue one of the following types of refunds:</p>

              <h3 className="text-xl font-semibold mt-6 mb-3">4.1 Full Refund</h3>
              <p>A full refund may be issued in the following cases:</p>
              <ul>
                <li>The order was not assigned to a writer</li>
                <li>No work was delivered by the deadline</li>
                <li>The delivered work contains significant plagiarism (over 20%)</li>
                <li>The delivered work completely fails to address the specified topic or requirements</li>
                <li>Technical issues on our platform prevented the proper processing of your order</li>
                <li>Duplicate payment for the same order</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">4.2 Partial Refund</h3>
              <p>A partial refund may be issued in the following cases:</p>
              <ul>
                <li>The delivered work partially meets the requirements but has significant issues</li>
                <li>The work was delivered late, but you still accepted it</li>
                <li>The work contains minor plagiarism (5-20%)</li>
                <li>The work has quality issues that can be partially resolved through revisions</li>
              </ul>
              <p>
                The amount of the partial refund will be determined based on the severity of the issues and the
                usability of the delivered content.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">4.3 Credit Refund</h3>
              <p>
                In some cases, we may offer a credit refund, which can be used for future orders on our platform. Credit
                refunds may be offered:
              </p>
              <ul>
                <li>As an alternative to a partial cash refund</li>
                <li>When the issues with the order can be addressed in a future order</li>
                <li>As a goodwill gesture for minor inconveniences</li>
              </ul>
              <p>Credit refunds typically include a bonus amount (e.g., 10-20% extra) compared to a cash refund.</p>

              <h2 className="text-2xl font-bold mt-8 mb-4">5. Refund Processing Time</h2>
              <p>Once a refund is approved, the processing time depends on your payment method:</p>
              <ul>
                <li>
                  <strong>Credit/Debit Cards:</strong> 5-10 business days
                </li>
                <li>
                  <strong>PayPal:</strong> 3-5 business days
                </li>
                <li>
                  <strong>M-Pesa:</strong> 1-3 business days
                </li>
                <li>
                  <strong>Bank Transfer:</strong> 7-14 business days
                </li>
                <li>
                  <strong>Account Credit:</strong> Immediate
                </li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">6. Non-Refundable Situations</h2>
              <p>Refunds will not be issued in the following situations:</p>
              <ul>
                <li>The request is made after the 14-day refund eligibility period has expired</li>
                <li>You have already accepted and approved the delivered work</li>
                <li>You request a refund due to a change in your requirements after the order was placed</li>
                <li>
                  The delivered work meets all the specified requirements, but you simply don't like the writing style
                </li>
                <li>You claim plagiarism, but our plagiarism detection tools show the content is original</li>
                <li>You provided incorrect or incomplete instructions for the order</li>
                <li>You violated our Terms of Service</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">7. Revision Before Refund</h2>
              <p>
                In many cases, we encourage clients to request revisions before seeking a refund. Our writers are
                committed to addressing your concerns and making necessary adjustments to ensure your satisfaction.
              </p>
              <p>
                If you are not satisfied with the delivered work, you can request revisions according to our revision
                policy:
              </p>
              <ul>
                <li>Free revisions are available within 7 days of delivery for orders under 20 pages</li>
                <li>Free revisions are available within 14 days of delivery for orders of 20 pages or more</li>
                <li>Revision requests must be consistent with the original order instructions</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">8. Disputes and Appeals</h2>
              <p>If you disagree with our decision regarding your refund request, you may appeal the decision by:</p>
              <ol>
                <li>Responding to the refund decision email with your appeal</li>
                <li>Providing additional information or evidence to support your case</li>
                <li>Requesting a review by a senior manager</li>
              </ol>
              <p>Appeals will be reviewed within 5 business days, and a final decision will be communicated to you.</p>

              <h2 className="text-2xl font-bold mt-8 mb-4">9. Changes to This Refund Policy</h2>
              <p>
                We may update our Refund Policy from time to time. We will notify you of any changes by posting the new
                Refund Policy on this page and updating the "Last updated" date at the top of this policy.
              </p>
              <p>
                You are advised to review this Refund Policy periodically for any changes. Changes to this Refund Policy
                are effective when they are posted on this page.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">10. Contact Us</h2>
              <p>If you have any questions about this Refund Policy, please contact us at:</p>
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
                  <Link href="/privacy" className="text-gray-600 hover:text-orange-500 text-sm">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/refund" className="text-orange-500 hover:text-orange-600 text-sm font-medium">
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
