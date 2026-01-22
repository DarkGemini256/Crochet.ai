'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Navbar from '@/components/Navbar'
import { PatternCategory, SkillLevel } from '@/shared/types'

export default function GeneratePatternPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    description: '',
    difficulty: '' as SkillLevel,
    category: '' as PatternCategory,
    materials: '',
  })
  const [isGenerating, setIsGenerating] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsGenerating(true)

    try {
      const response = await fetch('/api/patterns/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          description: formData.description,
          difficulty: formData.difficulty,
          category: formData.category,
          materials: formData.materials.split(',').map(m => m.trim()).filter(Boolean),
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to generate pattern')
      }

      router.push(`/patterns/${data.pattern.id}`)
    } catch (error: any) {
      setError(error.message)
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Generate Pattern</h1>
          <p className="text-gray-600 mt-2">Describe your vision and let AI create a custom pattern</p>
        </div>

        <div className="card">
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg mb-6">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="description" className="label">
                Pattern Description
              </label>
              <textarea
                id="description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="input min-h-32"
                placeholder="Describe the pattern you want to create... e.g., 'A cute teddy bear with a red scarf'"
                required
              />
              <p className="text-sm text-gray-500 mt-1">
                Be as detailed as possible for better results
              </p>
            </div>

            <div>
              <label htmlFor="difficulty" className="label">
                Difficulty Level
              </label>
              <select
                id="difficulty"
                value={formData.difficulty}
                onChange={(e) => setFormData({ ...formData, difficulty: e.target.value as SkillLevel })}
                className="input"
                required
              >
                <option value="">Select difficulty</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>

            <div>
              <label htmlFor="category" className="label">
                Category
              </label>
              <select
                id="category"
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value as PatternCategory })}
                className="input"
                required
              >
                <option value="">Select category</option>
                <option value="amigurumi">Amigurumi</option>
                <option value="garments">Garments</option>
                <option value="accessories">Accessories</option>
                <option value="home-decor">Home Decor</option>
              </select>
            </div>

            <div>
              <label htmlFor="materials" className="label">
                Materials (optional)
              </label>
              <input
                id="materials"
                type="text"
                value={formData.materials}
                onChange={(e) => setFormData({ ...formData, materials: e.target.value })}
                className="input"
                placeholder="Worsted weight yarn, 5mm hook, safety eyes"
              />
              <p className="text-sm text-gray-500 mt-1">
                Separate materials with commas
              </p>
            </div>

            <button
              type="submit"
              disabled={isGenerating}
              className="w-full btn btn-primary disabled:opacity-50"
            >
              {isGenerating ? (
                <>
                  <span className="inline-block animate-spin mr-2">⚙️</span>
                  Generating Pattern...
                </>
              ) : (
                '✨ Generate Pattern'
              )}
            </button>
          </form>

          <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <h3 className="font-semibold text-blue-900 mb-2">💡 Tips for better results:</h3>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>• Be specific about colors, sizes, and details</li>
              <li>• Mention any special techniques you want included</li>
              <li>• Include the intended use or recipient</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  )
}
