import React from 'react';

interface Step {
  id: number;
  title: string;
  description?: string;
}

interface StepperProps {
  steps: Step[];
  currentStep: number;
  className?: string;
}

export function Stepper({ steps, currentStep, className = '' }: StepperProps) {
  return (
    <div className={className}>
      <nav aria-label="Progress">
        <ol className="flex items-center justify-between">
          {steps.map((step, index) => (
            <li key={step.id} className={`relative ${index !== steps.length - 1 ? 'flex-1' : ''}`}>
              <div className="flex items-center">
                <div className="flex flex-col items-center">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full border-2 ${
                      index < currentStep
                        ? 'bg-primary-600 border-primary-600'
                        : index === currentStep
                        ? 'border-primary-600 bg-white'
                        : 'border-neutral-300 bg-white'
                    }`}
                  >
                    {index < currentStep ? (
                      <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <span
                        className={`text-sm font-semibold ${
                          index === currentStep ? 'text-primary-600' : 'text-neutral-500'
                        }`}
                      >
                        {step.id}
                      </span>
                    )}
                  </div>
                  <div className="mt-2 text-center">
                    <p
                      className={`text-sm font-medium ${
                        index <= currentStep ? 'text-neutral-900' : 'text-neutral-500'
                      }`}
                    >
                      {step.title}
                    </p>
                    {step.description && (
                      <p className="text-xs text-neutral-500 hidden md:block">{step.description}</p>
                    )}
                  </div>
                </div>
                {index !== steps.length - 1 && (
                  <div
                    className={`hidden md:block flex-1 h-0.5 mx-4 ${
                      index < currentStep ? 'bg-primary-600' : 'bg-neutral-300'
                    }`}
                  />
                )}
              </div>
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
}
