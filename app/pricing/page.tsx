import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    description: 'Perfect for beginners getting started',
    features: [
      '5 AI pattern generations per month',
      '3 active projects',
      'Basic tutorials access',
      'Community access',
      'Pattern library (limited)',
    ],
    cta: 'Get Started',
    href: '/onboarding',
    popular: false,
  },
  {
    name: 'Pro',
    price: '$9.99',
    period: 'per month',
    description: 'For serious crochet enthusiasts',
    features: [
      'Unlimited AI pattern generations',
      'Unlimited projects',
      'All tutorials & advanced courses',
      'Priority community features',
      'Full pattern library access',
      'Export patterns to PDF',
      'Custom color palettes',
      'Project collaboration',
    ],
    cta: 'Start Free Trial',
    href: '/onboarding',
    popular: true,
  },
  {
    name: 'Team',
    price: '$29.99',
    period: 'per month',
    description: 'For groups and crochet businesses',
    features: [
      'Everything in Pro',
      'Up to 5 team members',
      'Shared pattern library',
      'Team project management',
      'Advanced analytics',
      'Priority support',
      'White-label patterns',
      'API access',
    ],
    cta: 'Contact Sales',
    href: '/onboarding',
    popular: false,
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm border-b border-neutral-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl">🧶</span>
              <span className="text-xl font-bold text-primary-600">Crochet.ai</span>
            </Link>
            <div className="flex items-center space-x-4">
              <Link href="/" className="text-neutral-600 hover:text-primary-600">
                Home
              </Link>
              <Link href="/dashboard">
                <Button variant="outline">Dashboard</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
          Choose Your Plan
        </h1>
        <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
          Start free and upgrade as you grow. All plans include a 14-day free trial.
        </p>
      </section>

      {/* Pricing Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-white rounded-2xl shadow-xl ${
                plan.popular ? 'ring-2 ring-primary-600 transform scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge variant="warning">⭐ Most Popular</Badge>
                </div>
              )}

              <div className="p-8">
                <h3 className="text-2xl font-bold text-neutral-900 mb-2">{plan.name}</h3>
                <p className="text-neutral-600 mb-6 min-h-[48px]">{plan.description}</p>

                <div className="mb-6">
                  <span className="text-5xl font-bold text-neutral-900">{plan.price}</span>
                  <span className="text-neutral-600 ml-2">/ {plan.period}</span>
                </div>

                <Link href={plan.href}>
                  <Button
                    variant={plan.popular ? 'primary' : 'outline'}
                    className="w-full mb-6"
                    size="lg"
                  >
                    {plan.cta}
                  </Button>
                </Link>

                <div className="space-y-3">
                  <p className="text-sm font-semibold text-neutral-900 mb-3">
                    What's included:
                  </p>
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-neutral-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <h2 className="text-3xl font-bold text-neutral-900 text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="font-bold text-lg text-neutral-900 mb-2">
              Can I change my plan later?
            </h3>
            <p className="text-neutral-600">
              Yes! You can upgrade or downgrade your plan at any time. Changes take effect
              immediately, and we'll prorate the charges accordingly.
            </p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="font-bold text-lg text-neutral-900 mb-2">
              What payment methods do you accept?
            </h3>
            <p className="text-neutral-600">
              We accept all major credit cards (Visa, MasterCard, American Express) and PayPal.
            </p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="font-bold text-lg text-neutral-900 mb-2">
              Is there really a free trial?
            </h3>
            <p className="text-neutral-600">
              Yes! All paid plans come with a 14-day free trial. No credit card required to start.
            </p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="font-bold text-lg text-neutral-900 mb-2">
              Can I cancel anytime?
            </h3>
            <p className="text-neutral-600">
              Absolutely. You can cancel your subscription at any time with no cancellation fees.
              You'll continue to have access until the end of your billing period.
            </p>
          </div>
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
