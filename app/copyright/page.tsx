import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ResponsiveContainer } from "@/components/responsive-container"
import { MobileMenu } from "@/components/mobile-menu"
import { ThemeToggle } from "@/components/theme-toggle"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Copyright Policy - AcePaper Writers",
  description:
    "Learn about our copyright policy, intellectual property rights, and how we handle copyright infringement claims at AcePaper Writers.",
  keywords: [
    "acepaper writers copyright",
    "copyright policy",
    "intellectual property",
    "DMCA",
    "plagiarism policy",
    "academic integrity",
  ],
  alternates: {
    canonical: "/copyright",
  },
  openGraph: {
    title: "Copyright Policy - AcePaper Writers",
    description:
      "Learn about our copyright policy, intellectual property rights, and how we handle copyright infringement claims at AcePaper Writers.",
    url: "https://acepaper-writers.com/copyright",
    type: "website",
  },
}

const navLinks = [
  { href: "/#features", label: "Features" },
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/pricing", label: "Pricing" },
]

export default function CopyrightPage() {
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
              <span className="text-teal-900">Copyright Policy</span>
            </h1>
            <p className="text-base sm:text-lg text-gray-600 mb-8 max-w-3xl mx-auto">Last updated: May 16, 2025</p>
          </ResponsiveContainer>
        </section>

        <section className="py-12">
          <ResponsiveContainer>
            <div className="prose prose-gray max-w-none">
              <p className="lead">
                At AcePaper Writers, we respect intellectual property rights and are committed to helping our users do
                the same. This Copyright Policy outlines our approach to copyright issues, including how we protect
                original content and respond to claims of copyright infringement.
              </p>

              <p>
                By using our services, you agree to comply with this Copyright Policy. Please read it carefully to
                understand your rights and responsibilities regarding copyright matters.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">1. Original Content Creation</h2>
              <p>
                AcePaper Writers is committed to the creation of original content. We require all Writers on our
                platform to:
              </p>
              <ul>
                <li>Create original content for each order</li>
                <li>Properly cite all sources used in their work</li>
                <li>Avoid plagiarism in any form</li>
                <li>Respect the intellectual property rights of others</li>
              </ul>
              <p>
                All content produced through our platform undergoes plagiarism checks to ensure originality before
                delivery to Clients.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">2. Ownership of Delivered Content</h2>
              <p>
                Upon full payment and delivery, the Client is granted all intellectual property rights, including
                copyright, to the content delivered through our platform, subject to the following conditions:
              </p>
              <ul>
                <li>The Client has paid in full for the content</li>
                <li>The Client uses the content in accordance with applicable laws and our Terms of Service</li>
                <li>
                  The transfer of rights does not include any third-party content that may be incorporated with proper
                  attribution (such as properly cited quotes or references)
                </li>
              </ul>
              <p>
                AcePaper Writers retains the right to use anonymized versions of completed work for quality control,
                training, and service improvement purposes, but will never share identifiable client information or
                complete works with third parties.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">3. Proper Use of Delivered Content</h2>
              <p>
                Clients are responsible for using the delivered content in accordance with applicable copyright laws and
                academic integrity policies. We strongly encourage Clients to:
              </p>
              <ul>
                <li>Use the delivered content as a reference or guide for their own work</li>
                <li>Properly cite any portions of the delivered content that they incorporate into their own work</li>
                <li>
                  Not represent the delivered content as their own original work in academic or professional settings
                </li>
                <li>Adhere to their institution's academic integrity policies</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">4. Third-Party Content</h2>
              <p>
                AcePaper Writers respects the intellectual property rights of third parties. When third-party content is
                incorporated into delivered work, it is done so in accordance with fair use principles and with proper
                attribution.
              </p>
              <p>Writers on our platform are required to:</p>
              <ul>
                <li>Properly cite all third-party content using the citation style specified by the Client</li>
                <li>Only use third-party content to the extent permitted by fair use or with proper permission</li>
                <li>Provide references for all sources used in the creation of content</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">5. Copyright Infringement Claims</h2>
              <p>
                If you believe that content on our platform infringes your copyright, please submit a copyright
                infringement notification containing the following information:
              </p>
              <ol>
                <li>
                  A physical or electronic signature of the copyright owner or a person authorized to act on their
                  behalf
                </li>
                <li>Identification of the copyrighted work claimed to have been infringed</li>
                <li>
                  Identification of the material that is claimed to be infringing and where it is located on our
                  platform
                </li>
                <li>Your contact information, including your address, telephone number, and email address</li>
                <li>
                  A statement that you have a good faith belief that the use is not authorized by the copyright owner,
                  its agent, or the law
                </li>
                <li>
                  A statement, made under penalty of perjury, that the above information is accurate and that you are
                  the copyright owner or are authorized to act on behalf of the owner
                </li>
              </ol>
              <p>Copyright infringement notifications should be sent to:</p>
              <p>
                Email:{" "}
                <a href="mailto:copyright@acepaper-writers.com" className="text-orange-500 hover:underline">
                  copyright@acepaper-writers.com
                </a>
                <br />
                Subject: Copyright Infringement Notification
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">6. Response to Copyright Infringement Claims</h2>
              <p>Upon receiving a valid copyright infringement notification, we will:</p>
              <ol>
                <li>Promptly investigate the claim</li>
                <li>Remove or disable access to the allegedly infringing content if the claim appears valid</li>
                <li>Notify the party responsible for the content about the claim</li>
                <li>Provide an opportunity for the responsible party to submit a counter-notification</li>
                <li>Take appropriate action based on the outcome of our investigation</li>
              </ol>

              <h2 className="text-2xl font-bold mt-8 mb-4">7. Counter-Notification Process</h2>
              <p>
                If you believe that your content was removed due to a mistake or misidentification, you may submit a
                counter-notification containing:
              </p>
              <ol>
                <li>Your physical or electronic signature</li>
                <li>Identification of the material that has been removed and where it appeared before removal</li>
                <li>
                  A statement under penalty of perjury that you have a good faith belief that the material was removed
                  as a result of mistake or misidentification
                </li>
                <li>Your name, address, telephone number, and email address</li>
                <li>
                  A statement that you consent to the jurisdiction of the federal court in the district where you reside
                  and that you will accept service of process from the person who provided the original notification
                </li>
              </ol>
              <p>Counter-notifications should be sent to:</p>
              <p>
                Email:{" "}
                <a href="mailto:copyright@acepaper-writers.com" className="text-orange-500 hover:underline">
                  copyright@acepaper-writers.com
                </a>
                <br />
                Subject: Copyright Counter-Notification
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">8. Repeat Infringers</h2>
              <p>
                AcePaper Writers maintains a policy of terminating the accounts of users who are determined to be repeat
                infringers of copyright. A repeat infringer is a user who has been notified of infringing activity more
                than twice and/or has had content removed from our platform more than twice.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">9. Academic Integrity and Plagiarism</h2>
              <p>AcePaper Writers distinguishes between copyright infringement and plagiarism:</p>
              <ul>
                <li>
                  <strong>Copyright infringement</strong> involves the unauthorized use of copyrighted material in a
                  manner that violates the exclusive rights of the copyright holder.
                </li>
                <li>
                  <strong>Plagiarism</strong> involves presenting someone else's work or ideas as your own without
                  proper attribution, which is an academic integrity issue.
                </li>
              </ul>
              <p>
                We are committed to preventing both copyright infringement and plagiarism in the content produced
                through our platform. Our Writers are trained to:
              </p>
              <ul>
                <li>Create original content</li>
                <li>Properly cite all sources</li>
                <li>Use quotation marks for direct quotes</li>
              </ul>
              <p>Paraphrase appropriately with proper attribution</p>
              <p>Include comprehensive bibliographies or reference lists</p>

              <h2 className="text-2xl font-bold mt-8 mb-4">10. Educational Resources</h2>
              <p>
                We provide educational resources to help our users understand copyright, plagiarism, and proper citation
                practices. These resources include:
              </p>
              <ul>
                <li>Guides on different citation styles (APA, MLA, Chicago, etc.)</li>
                <li>Information on fair use and copyright limitations</li>
                <li>Best practices for paraphrasing and summarizing</li>
                <li>Tools for checking originality and proper citation</li>
              </ul>
              <p>
                These resources are available in our Knowledge Base and are regularly updated to reflect current best
                practices.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">11. Changes to This Copyright Policy</h2>
              <p>
                We may update our Copyright Policy from time to time. We will notify you of any changes by posting the
                new Copyright Policy on this page and updating the "Last updated" date at the top of this policy.
              </p>
              <p>
                You are advised to review this Copyright Policy periodically for any changes. Changes to this Copyright
                Policy are effective when they are posted on this page.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">12. Contact Us</h2>
              <p>
                If you have any questions about this Copyright Policy or concerns about potential copyright
                infringement, please contact us at:
              </p>
              <p>
                Email:{" "}
                <a href="mailto:copyright@acepaper-writers.com" className="text-orange-500 hover:underline">
                  copyright@acepaper-writers.com
                </a>{" "}
                or{" "}
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
                  <Link href="/refund" className="text-gray-600 hover:text-orange-500 text-sm">
                    Refund Policy
                  </Link>
                </li>
                <li>
                  <Link href="/copyright" className="text-orange-500 hover:text-orange-600 text-sm font-medium">
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
