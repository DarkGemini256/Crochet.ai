'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'

type SkillLevel = 'beginner' | 'intermediate' | 'advanced'
type Category = 'amigurumi' | 'garments' | 'accessories' | 'home-decor'

export default function OnboardingPage() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: '',
    skillLevel: '' as SkillLevel,
    interests: [] as Category[],
  })
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleInterestToggle = (interest: Category) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest],
    }))
  }

  const handleSubmit = async () => {
    setError('')
    setIsLoading(true)

    try {
      const response = await fetch('/api/onboarding', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to complete onboarding')
      }

      // Sign in and redirect to dashboard
      await signIn('credentials', {
        email: data.email,
        password: data.tempPassword,
        redirect: false,
      })

      router.push('/dashboard')
    } catch (error: any) {
      setError(error.message)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-primary-600 mb-2">Welcome to Crochet.ai</h1>
          <p className="text-gray-600">Let's personalize your experience</p>
        </div>

        {/* Progress bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-600">Step {step} of 3</span>
            <span className="text-sm text-gray-600">{Math.round((step / 3) * 100)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-primary-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(step / 3) * 100}%` }}
            />
          </div>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg mb-6">
            {error}
          </div>
        )}

        <div className="card">
          {step === 1 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold">What should we call you?</h2>
              <div>
                <label htmlFor="name" className="label">
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="input"
                  placeholder="Jane Doe"
                  required
                />
              </div>
              <button
                onClick={() => formData.name && setStep(2)}
                disabled={!formData.name}
                className="btn btn-primary w-full disabled:opacity-50"
              >
                Continue
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold">What's your skill level?</h2>
              <div className="space-y-3">
                {(['beginner', 'intermediate', 'advanced'] as SkillLevel[]).map((level) => (
                  <button
                    key={level}
                    onClick={() => setFormData({ ...formData, skillLevel: level })}
                    className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                      formData.skillLevel === level
                        ? 'border-primary-600 bg-primary-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="font-semibold capitalize">{level}</div>
                    <div className="text-sm text-gray-600">
                      {level === 'beginner' && 'Just starting out with crochet'}
                      {level === 'intermediate' && 'Comfortable with basic stitches and patterns'}
                      {level === 'advanced' && 'Experienced with complex patterns and techniques'}
                    </div>
                  </button>
                ))}
              </div>
              <div className="flex gap-3">
                <button onClick={() => setStep(1)} className="btn btn-secondary">
                  Back
                </button>
                <button
                  onClick={() => formData.skillLevel && setStep(3)}
                  disabled={!formData.skillLevel}
                  className="btn btn-primary flex-1 disabled:opacity-50"
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold">What interests you?</h2>
              <p className="text-gray-600">Select all that apply</p>
              <div className="grid grid-cols-2 gap-3">
                {([
                  { value: 'amigurumi', label: 'Amigurumi', emoji: '🧸' },
                  { value: 'garments', label: 'Garments', emoji: '👕' },
                  { value: 'accessories', label: 'Accessories', emoji: '🧣' },
                  { value: 'home-decor', label: 'Home Decor', emoji: '🏠' },
                ] as const).map((interest) => (
                  <button
                    key={interest.value}
                    onClick={() => handleInterestToggle(interest.value)}
                    className={`p-4 rounded-lg border-2 text-center transition-all ${
                      formData.interests.includes(interest.value)
                        ? 'border-primary-600 bg-primary-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="text-3xl mb-2">{interest.emoji}</div>
                    <div className="font-medium">{interest.label}</div>
                  </button>
                ))}
              </div>
              <div className="flex gap-3">
                <button onClick={() => setStep(2)} className="btn btn-secondary">
                  Back
                </button>
                <button
                  onClick={handleSubmit}
                  disabled={isLoading || formData.interests.length === 0}
                  className="btn btn-primary flex-1 disabled:opacity-50"
                >
                  {isLoading ? 'Completing...' : 'Complete Setup'}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
