import Link from "next/link"
import type { Metadata } from "next"
import { ResponsiveContainer } from "@/components/responsive-container"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "How It Works",
  description: "Learn how AcePaper Writers helps you excel with our simple 5-step process.",
}

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
      {/* Header section with navigation will be handled by layout */}

      <ResponsiveContainer className="py-16 px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4 text-gray-900 dark:text-white">How It Works</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Our streamlined process makes it easy to get the writing help you need in just five simple steps.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Step 1 */}
          <Card className="mb-8 border-l-4 border-l-orange-500 shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold">
                  1
                </div>
                <div>
                  <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Assess the Website</h2>
                  <p className="text-gray-600 dark:text-gray-300">Navigate to Order Placement...</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Step 2 */}
          <Card className="mb-8 border-l-4 border-l-teal-500 shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 bg-teal-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold">
                  2
                </div>
                <div>
                  <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Create an Order</h2>
                  <p className="text-gray-600 dark:text-gray-300">
                    Specify your requirements, upload references, and set your deadline.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Step 3 */}
          <Card className="mb-8 border-l-4 border-l-orange-500 shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold">
                  3
                </div>
                <div>
                  <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                    Confirm Order Details & Make Payment
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300">
                    Review your order details and complete the payment process.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Step 4 */}
          <Card className="mb-8 border-l-4 border-l-teal-500 shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 bg-teal-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold">
                  4
                </div>
                <div>
                  <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Track Progress</h2>
                  <p className="text-gray-600 dark:text-gray-300">You'll get process status & follow-up via email.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Step 5 */}
          <Card className="mb-8 border-l-4 border-l-orange-500 shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold">
                  5
                </div>
                <div>
                  <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Receive & Review</h2>
                  <p className="text-gray-600 dark:text-gray-300">
                    Get your completed work and request revisions if needed.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-center mt-12">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-teal-500 hover:from-orange-600 hover:to-teal-600 text-white"
            >
              <Link href="/order">Place Your Order Now</Link>
            </Button>
          </div>
        </div>
      </ResponsiveContainer>
    </main>
  )
}
