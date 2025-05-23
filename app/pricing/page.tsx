import Link from "next/link"

export default function PricingPage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-md py-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-gray-800">
            My App
          </Link>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <Link href="/" className="text-gray-600 hover:text-gray-800">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-gray-800">
                  About
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-600 hover:text-gray-800">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-gray-800">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Pricing Section */}
      <section className="py-12">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">Choose Your Plan</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">Basic</h2>
              <p className="text-gray-600 text-lg mb-4">For individuals and small teams.</p>
              <div className="text-4xl font-bold text-gray-800 mb-4">$9 / month</div>
              <ul className="list-disc list-inside text-gray-600 mb-6">
                <li>1 User</li>
                <li>5 Projects</li>
                <li>Basic Support</li>
              </ul>
              <Link href="/order" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Place an Order
              </Link>
            </div>

            {/* Standard Plan */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">Standard</h2>
              <p className="text-gray-600 text-lg mb-4">For growing businesses.</p>
              <div className="text-4xl font-bold text-gray-800 mb-4">$29 / month</div>
              <ul className="list-disc list-inside text-gray-600 mb-6">
                <li>5 Users</li>
                <li>20 Projects</li>
                <li>Priority Support</li>
              </ul>
              <Link href="/order" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Place an Order
              </Link>
            </div>

            {/* Premium Plan */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">Premium</h2>
              <p className="text-gray-600 text-lg mb-4">For large organizations.</p>
              <div className="text-4xl font-bold text-gray-800 mb-4">$99 / month</div>
              <ul className="list-disc list-inside text-gray-600 mb-6">
                <li>Unlimited Users</li>
                <li>Unlimited Projects</li>
                <li>24/7 Support</li>
              </ul>
              <Link href="/order" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Place an Order
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-200 py-4 text-center">
        <p className="text-gray-600">&copy; {new Date().getFullYear()} My App. All rights reserved.</p>
      </footer>
    </div>
  )
}
