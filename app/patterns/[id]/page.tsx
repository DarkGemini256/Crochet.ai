import { getServerSession } from 'next-auth'
import { redirect, notFound } from 'next/navigation'
import { authOptions } from '@/lib/auth'
import Navbar from '@/components/Navbar'
import Link from 'next/link'
import { prisma } from '@/lib/prisma'

export default async function PatternDetailPage({ params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect('/auth/login')
  }

  const pattern = await prisma.pattern.findUnique({
    where: { id: params.id },
    include: {
      author: {
        select: {
          name: true,
          email: true,
        },
      },
    },
  })

  if (!pattern) {
    notFound()
  }

  // Check if user has access
  if (!pattern.isPublic && pattern.authorId !== session.user.id) {
    return <div>Access denied</div>
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <Link href="/patterns" className="text-primary-600 hover:text-primary-700">
            ← Back to Patterns
          </Link>
        </div>

        <div className="card mb-6">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="text-xs bg-primary-100 text-primary-700 px-3 py-1 rounded-full">
              {pattern.difficulty}
            </span>
            <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
              {pattern.category.replace('-', ' ')}
            </span>
            {pattern.aiGenerated && (
              <span className="text-xs bg-purple-100 text-purple-700 px-3 py-1 rounded-full">
                AI Generated ✨
              </span>
            )}
            {!pattern.isPublic && (
              <span className="text-xs bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full">
                Private
              </span>
            )}
          </div>

          <h1 className="text-3xl font-bold mb-4">{pattern.title}</h1>
          
          <div className="flex items-center gap-4 text-sm text-gray-600 mb-6">
            <span>By {pattern.author.name || 'Anonymous'}</span>
            {pattern.estimatedTime && <span>⏱ {pattern.estimatedTime}</span>}
            <span>📅 {new Date(pattern.createdAt).toLocaleDateString()}</span>
          </div>

          <p className="text-gray-700 mb-6">{pattern.description}</p>

          <div className="flex gap-3">
            <button className="btn btn-primary">
              📥 Export Pattern
            </button>
            <button className="btn btn-outline">
              ⭐ Save to Favorites
            </button>
            <Link href={`/projects/new?patternId=${pattern.id}`} className="btn btn-secondary">
              🚀 Start Project
            </Link>
          </div>
        </div>

        {/* Materials */}
        <div className="card mb-6">
          <h2 className="text-xl font-semibold mb-4">Materials Needed</h2>
          <ul className="space-y-2">
            {pattern.materials.map((material, index) => (
              <li key={index} className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                <span>{material}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Specifications */}
        {(pattern.hookSize || pattern.gaugeInfo) && (
          <div className="card mb-6">
            <h2 className="text-xl font-semibold mb-4">Specifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {pattern.hookSize && (
                <div>
                  <div className="text-sm text-gray-600">Hook Size</div>
                  <div className="font-medium">{pattern.hookSize}</div>
                </div>
              )}
              {pattern.gaugeInfo && (
                <div>
                  <div className="text-sm text-gray-600">Gauge</div>
                  <div className="font-medium">{pattern.gaugeInfo}</div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Instructions */}
        <div className="card">
          <h2 className="text-xl font-semibold mb-4">Instructions</h2>
          <div className="prose max-w-none">
            <pre className="whitespace-pre-wrap font-sans text-gray-700 leading-relaxed">
              {pattern.instructions}
            </pre>
          </div>
        </div>
      </main>
    </div>
  )
}
