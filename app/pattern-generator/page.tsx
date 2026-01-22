'use client';

import { useState } from 'react';
import { MainLayout } from '@/components/MainLayout';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input, Textarea, Select } from '@/components/ui/Input';
import { Badge } from '@/components/ui/Badge';

const generatedPatterns = [
  { id: 1, name: 'Floral Mandala', type: 'Blanket', difficulty: 'Intermediate', image: '🌸' },
  { id: 2, name: 'Cute Bear', type: 'Amigurumi', difficulty: 'Beginner', image: '🐻' },
  { id: 3, name: 'Geometric Cushion', type: 'Home Decor', difficulty: 'Advanced', image: '🔷' },
];

export default function PatternGeneratorPage() {
  const [generating, setGenerating] = useState(false);
  const [formData, setFormData] = useState({
    projectType: '',
    style: '',
    difficulty: '',
    description: '',
  });

  const handleGenerate = () => {
    setGenerating(true);
    // Simulate generation
    setTimeout(() => {
      setGenerating(false);
    }, 2000);
  };

  return (
    <MainLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-neutral-900">AI Pattern Generator 🎨</h1>
          <p className="text-neutral-600 mt-1">
            Describe your vision and let our AI create a custom crochet pattern for you
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Generator Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Create Your Pattern</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Select
                    label="Project Type"
                    options={[
                      { value: '', label: 'Select a type...' },
                      { value: 'blanket', label: 'Blanket/Throw' },
                      { value: 'amigurumi', label: 'Amigurumi' },
                      { value: 'clothing', label: 'Clothing' },
                      { value: 'accessory', label: 'Accessory' },
                      { value: 'home-decor', label: 'Home Decor' },
                    ]}
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  />

                  <Select
                    label="Style"
                    options={[
                      { value: '', label: 'Select a style...' },
                      { value: 'modern', label: 'Modern' },
                      { value: 'traditional', label: 'Traditional' },
                      { value: 'boho', label: 'Bohemian' },
                      { value: 'minimalist', label: 'Minimalist' },
                      { value: 'vintage', label: 'Vintage' },
                    ]}
                    value={formData.style}
                    onChange={(e) => setFormData({ ...formData, style: e.target.value })}
                  />

                  <Select
                    label="Difficulty Level"
                    options={[
                      { value: '', label: 'Select difficulty...' },
                      { value: 'beginner', label: 'Beginner' },
                      { value: 'intermediate', label: 'Intermediate' },
                      { value: 'advanced', label: 'Advanced' },
                    ]}
                    value={formData.difficulty}
                    onChange={(e) => setFormData({ ...formData, difficulty: e.target.value })}
                  />

                  <Textarea
                    label="Describe Your Vision"
                    placeholder="E.g., A cozy baby blanket with pastel colors and a wave pattern..."
                    rows={4}
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  />

                  <div className="pt-4">
                    <Button
                      onClick={handleGenerate}
                      disabled={generating}
                      className="w-full"
                      size="lg"
                    >
                      {generating ? (
                        <span className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Generating Pattern...
                        </span>
                      ) : (
                        '✨ Generate Pattern'
                      )}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Generated Pattern Preview */}
            {!generating && (
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Pattern Preview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-8 text-neutral-500">
                    <div className="text-6xl mb-4">📝</div>
                    <p>Your generated pattern will appear here</p>
                    <p className="text-sm mt-2">Fill in the form and click "Generate Pattern" to get started</p>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Recently Generated */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Recently Generated</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {generatedPatterns.map((pattern) => (
                    <Card key={pattern.id} variant="hover" className="p-4">
                      <div className="flex items-start space-x-3">
                        <div className="text-3xl">{pattern.image}</div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-neutral-900 truncate">{pattern.name}</h4>
                          <p className="text-sm text-neutral-600">{pattern.type}</p>
                          <Badge size="sm" variant="neutral" className="mt-1">
                            {pattern.difficulty}
                          </Badge>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Tips */}
            <Card className="mt-4">
              <CardHeader>
                <CardTitle>💡 Tips</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-neutral-700">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Be specific about colors and style preferences</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Mention size requirements for better results</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Include any special features you want</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
