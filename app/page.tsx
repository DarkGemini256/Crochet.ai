import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-primary-600">Crochet.ai</h1>
            </div>
            <div className="flex gap-4">
              <Link href="/auth/login" className="btn btn-outline">
                Login
              </Link>
              <Link href="/auth/signup" className="btn btn-primary">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Create Beautiful Crochet Patterns with AI
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Generate original patterns, plan your projects, track progress, and learn with 
            AI-guided tutorials designed for all skill levels.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/auth/signup" className="btn btn-primary text-lg px-8 py-3">
              Start Creating Free
            </Link>
            <Link href="#features" className="btn btn-outline text-lg px-8 py-3">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h3 className="text-3xl font-bold text-center mb-12">Everything You Need</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="card">
            <div className="text-4xl mb-4">🎨</div>
            <h4 className="text-xl font-semibold mb-2">AI Pattern Generator</h4>
            <p className="text-gray-600">
              Describe your vision and let AI create custom crochet patterns tailored to your needs.
            </p>
          </div>
          <div className="card">
            <div className="text-4xl mb-4">📋</div>
            <h4 className="text-xl font-semibold mb-2">Project Planner</h4>
            <p className="text-gray-600">
              Organize your projects, track progress, and never lose track of your WIPs again.
            </p>
          </div>
          <div className="card">
            <div className="text-4xl mb-4">🎓</div>
            <h4 className="text-xl font-semibold mb-2">Learn & Grow</h4>
            <p className="text-gray-600">
              Access step-by-step tutorials from basics to advanced techniques.
            </p>
          </div>
          <div className="card">
            <div className="text-4xl mb-4">👥</div>
            <h4 className="text-xl font-semibold mb-2">Community Feed</h4>
            <p className="text-gray-600">
              Share your creations, get inspired, and connect with fellow crocheters.
            </p>
          </div>
          <div className="card">
            <div className="text-4xl mb-4">📊</div>
            <h4 className="text-xl font-semibold mb-2">Progress Tracking</h4>
            <p className="text-gray-600">
              Monitor your journey, celebrate milestones, and stay motivated.
            </p>
          </div>
          <div className="card">
            <div className="text-4xl mb-4">💾</div>
            <h4 className="text-xl font-semibold mb-2">Export Patterns</h4>
            <p className="text-gray-600">
              Download and save your patterns in multiple formats for offline use.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="text-xl mb-8">Join thousands of crocheters creating amazing projects.</p>
          <Link href="/auth/signup" className="btn bg-white text-primary-600 hover:bg-gray-100 text-lg px-8 py-3">
            Create Free Account
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-600">
          <p>&copy; 2024 Crochet.ai. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
