import Link from "next/link"

const FeaturesPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header Section */}
      <header className="bg-white shadow-md py-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-gray-800">
            Your AI Platform
          </Link>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <Link href="/features" className="text-gray-600 hover:text-gray-800">
                  Features
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

      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-r from-blue-100 to-blue-50">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-extrabold text-blue-800 mb-4">Unlock the Power of AI for Your Business</h1>
          <p className="text-lg text-gray-700 mb-8">
            Discover how our AI-powered platform can revolutionize your workflow and boost productivity.
          </p>
          <Link href="/order" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full">
            Place an Order
          </Link>
        </div>
      </section>

      {/* Features Overview Section */}
      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature Card 1 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">AI-Powered Content Generation</h3>
              <p className="text-gray-600">
                Generate high-quality content automatically with our advanced AI algorithms.
              </p>
            </div>

            {/* Feature Card 2 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Automated Data Analysis</h3>
              <p className="text-gray-600">Analyze large datasets quickly and efficiently to gain valuable insights.</p>
            </div>

            {/* Feature Card 3 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Personalized Recommendations</h3>
              <p className="text-gray-600">
                Provide personalized recommendations to your users based on their preferences and behavior.
              </p>
            </div>

            {/* Feature Card 4 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Predictive Analytics</h3>
              <p className="text-gray-600">
                Forecast future trends and outcomes with our powerful predictive analytics tools.
              </p>
            </div>

            {/* Feature Card 5 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Natural Language Processing</h3>
              <p className="text-gray-600">Understand and process human language with our advanced NLP capabilities.</p>
            </div>

            {/* Feature Card 6 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Image Recognition</h3>
              <p className="text-gray-600">
                Identify and classify objects in images with our state-of-the-art image recognition technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-12 bg-blue-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold text-blue-800 mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-gray-700 mb-8">Sign up today and experience the future of AI.</p>
          <Link href="/order" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full">
            Place an Order
          </Link>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-200 py-6">
        <div className="container mx-auto text-center">
          <p className="text-gray-600">&copy; {new Date().getFullYear()} Your AI Platform. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default FeaturesPage
