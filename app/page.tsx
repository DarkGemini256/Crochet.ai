import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm border-b border-neutral-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🧶</span>
              <span className="text-xl font-bold text-primary-600">Crochet.ai</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/pricing" className="text-neutral-600 hover:text-primary-600">
                Pricing
              </Link>
              <Link href="/onboarding">
                <Button>Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-neutral-900 mb-6">
            Create Beautiful Crochet Patterns
            <span className="block text-primary-600 mt-2">With AI-Powered Tools</span>
          </h1>
          <p className="text-xl text-neutral-600 mb-8 max-w-3xl mx-auto">
            Generate original patterns, plan your projects, and learn with AI-guided tutorials. 
            Perfect for all skill levels, from beginner to expert.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/onboarding">
              <Button size="lg">Start Creating Free</Button>
            </Link>
            <Link href="/tutorials">
              <Button variant="outline" size="lg">Browse Tutorials</Button>
            </Link>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="text-4xl mb-4">🎨</div>
            <h3 className="text-xl font-bold text-neutral-900 mb-2">AI Pattern Generator</h3>
            <p className="text-neutral-600">
              Create unique crochet patterns tailored to your vision. Our AI helps you design anything from simple scarves to complex amigurumi.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="text-4xl mb-4">📋</div>
            <h3 className="text-xl font-bold text-neutral-900 mb-2">Project Planner</h3>
            <p className="text-neutral-600">
              Organize your crochet projects, track materials, estimate costs, and monitor your progress all in one place.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="text-4xl mb-4">🎓</div>
            <h3 className="text-xl font-bold text-neutral-900 mb-2">Interactive Tutorials</h3>
            <p className="text-neutral-600">
              Learn at your own pace with AI-guided step-by-step tutorials designed for your skill level.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 text-white py-16 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Crochet Journey?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of crochet enthusiasts using AI to create amazing projects
          </p>
          <Link href="/onboarding">
            <Button variant="secondary" size="lg">
              Get Started Now
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-neutral-400">© 2026 Crochet.ai. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
