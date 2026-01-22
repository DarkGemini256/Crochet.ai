import Navbar from '@/components/Navbar'
import Link from 'next/link'

export default function PricingPage() {
  const plans = [
    {
      name: 'Free',
      price: 0,
      interval: 'forever',
      features: [
        'Access to basic patterns',
        'Track up to 3 projects',
        'Community access',
        'Basic tutorials',
      ],
      cta: 'Get Started',
      featured: false,
    },
    {
      name: 'Basic',
      price: 9.99,
      interval: 'month',
      features: [
        'Everything in Free',
        'AI pattern generation (10/month)',
        'Unlimited projects',
        'Export patterns to PDF',
        'Priority support',
        'Advanced tutorials',
      ],
      cta: 'Start Free Trial',
      featured: true,
      stripePriceId: 'price_basic_monthly', // Placeholder
    },
    {
      name: 'Premium',
      price: 19.99,
      interval: 'month',
      features: [
        'Everything in Basic',
        'Unlimited AI pattern generation',
        'Custom pattern modifications',
        'Video tutorials',
        'Private community access',
        'Early access to new features',
        '1-on-1 expert consultations',
      ],
      cta: 'Start Free Trial',
      featured: false,
      stripePriceId: 'price_premium_monthly', // Placeholder
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Choose Your Plan
          </h1>
          <p className="text-xl text-gray-600">
            Start free and upgrade anytime to unlock more features
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`card relative ${
                plan.featured
                  ? 'border-2 border-primary-600 shadow-xl'
                  : ''
              }`}
            >
              {plan.featured && (
                <div className="absolute top-0 right-0 bg-primary-600 text-white px-3 py-1 rounded-bl-lg rounded-tr-lg text-sm font-semibold">
                  Most Popular
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="text-gray-600">/{plan.interval}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-500 mr-2 flex-shrink-0">✓</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full btn ${
                  plan.featured
                    ? 'btn-primary'
                    : 'btn-outline'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 card max-w-4xl mx-auto bg-gradient-to-r from-primary-50 to-purple-50">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Need a Custom Plan?</h2>
            <p className="text-gray-600 mb-6">
              Contact us for enterprise solutions, educational institutions, or bulk licensing
            </p>
            <button className="btn btn-primary">
              Contact Sales
            </button>
          </div>
        </div>

        <div className="mt-12 text-center text-gray-600">
          <p className="text-sm">
            💳 Payment processing secured by Stripe
            <br />
            🔄 Cancel anytime • 📧 Email support included
          </p>
        </div>
      </main>
    </div>
  )
}
