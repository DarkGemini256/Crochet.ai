'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Input';
import { Stepper } from '@/components/ui/Stepper';

const steps = [
  { id: 1, title: 'Welcome', description: 'Get started' },
  { id: 2, title: 'Profile', description: 'Tell us about you' },
  { id: 3, title: 'Experience', description: 'Your skill level' },
  { id: 4, title: 'Interests', description: 'What you want to make' },
];

export default function OnboardingPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    skillLevel: '',
    interests: [] as string[],
  });

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Complete onboarding
      router.push('/dashboard');
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const toggleInterest = (interest: string) => {
    setFormData({
      ...formData,
      interests: formData.interests.includes(interest)
        ? formData.interests.filter((i) => i !== interest)
        : [...formData.interests, interest],
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="mb-8">
            <div className="flex items-center justify-center space-x-2 mb-8">
              <span className="text-3xl">🧶</span>
              <span className="text-2xl font-bold text-primary-600">Crochet.ai</span>
            </div>
            <Stepper steps={steps} currentStep={currentStep} />
          </div>

          {/* Step 1: Welcome */}
          {currentStep === 0 && (
            <div className="space-y-6">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-neutral-900 mb-4">
                  Welcome to Crochet.ai! 👋
                </h2>
                <p className="text-lg text-neutral-600">
                  Let's get you set up in just a few steps. We'll personalize your experience to help you create amazing crochet projects.
                </p>
              </div>
              <div className="flex justify-center py-8">
                <div className="text-6xl">🎨🧶✨</div>
              </div>
            </div>
          )}

          {/* Step 2: Profile */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                Tell us about yourself
              </h2>
              <Input
                label="Full Name"
                placeholder="Jane Doe"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
              <Input
                label="Email"
                type="email"
                placeholder="jane@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
          )}

          {/* Step 3: Experience */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                What's your crochet experience level?
              </h2>
              <div className="grid gap-4">
                {['Beginner', 'Intermediate', 'Advanced', 'Expert'].map((level) => (
                  <button
                    key={level}
                    onClick={() => setFormData({ ...formData, skillLevel: level })}
                    className={`p-4 border-2 rounded-lg text-left transition-colors ${
                      formData.skillLevel === level
                        ? 'border-primary-600 bg-primary-50'
                        : 'border-neutral-200 hover:border-neutral-300'
                    }`}
                  >
                    <div className="font-semibold text-neutral-900">{level}</div>
                    <div className="text-sm text-neutral-600 mt-1">
                      {level === 'Beginner' && "Just starting out or learning the basics"}
                      {level === 'Intermediate' && "Comfortable with basic stitches and simple patterns"}
                      {level === 'Advanced' && "Can handle complex patterns and techniques"}
                      {level === 'Expert' && "Master crocheter who can create anything"}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 4: Interests */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                What would you like to create?
              </h2>
              <p className="text-neutral-600">Select all that apply</p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  'Scarves & Shawls',
                  'Blankets & Throws',
                  'Amigurumi',
                  'Clothing',
                  'Home Decor',
                  'Accessories',
                  'Baby Items',
                  'Toys',
                ].map((interest) => (
                  <button
                    key={interest}
                    onClick={() => toggleInterest(interest)}
                    className={`p-4 border-2 rounded-lg transition-colors ${
                      formData.interests.includes(interest)
                        ? 'border-primary-600 bg-primary-50'
                        : 'border-neutral-200 hover:border-neutral-300'
                    }`}
                  >
                    <div className="font-medium text-neutral-900">{interest}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex justify-between mt-8 pt-6 border-t border-neutral-200">
            <Button
              variant="outline"
              onClick={handleBack}
              disabled={currentStep === 0}
            >
              Back
            </Button>
            <Button onClick={handleNext}>
              {currentStep === steps.length - 1 ? 'Complete Setup' : 'Next'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
