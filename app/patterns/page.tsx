import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { authOptions } from '@/lib/auth'
import Navbar from '@/components/Navbar'
import Link from 'next/link'
import { prisma } from '@/lib/prisma'

export default async function PatternsPage() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect('/auth/login')
  }

  const patterns = await prisma.pattern.findMany({
    where: {
      OR: [
        { isPublic: true },
        { authorId: session.user.id },
      ],
    },
    include: {
      author: {
        select: {
          name: true,
          email: true,
        },
      },
    },
    orderBy: {
      createdAt: 'desc',
    },
    take: 20,
  })

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Patterns</h1>
            <p className="text-gray-600 mt-2">Browse and create crochet patterns</p>
          </div>
          <Link href="/patterns/generate" className="btn btn-primary">
            ✨ Generate Pattern
          </Link>
        </div>

        {/* Filter tabs */}
        <div className="flex gap-2 mb-6 overflow-x-auto">
          <button className="px-4 py-2 rounded-lg bg-primary-600 text-white">All</button>
          <button className="px-4 py-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300">Beginner</button>
          <button className="px-4 py-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300">Intermediate</button>
          <button className="px-4 py-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300">Advanced</button>
        </div>

        {/* Pattern grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {patterns.map((pattern) => (
            <Link key={pattern.id} href={`/patterns/${pattern.id}`}>
              <div className="card hover:shadow-lg transition-shadow cursor-pointer h-full">
                {pattern.imageUrl && (
                  <div className="w-full h-48 bg-gray-200 rounded-lg mb-4">
                    {/* Image placeholder */}
                  </div>
                )}
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs bg-primary-100 text-primary-700 px-2 py-1 rounded">
                    {pattern.difficulty}
                  </span>
                  <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                    {pattern.category.replace('-', ' ')}
                  </span>
                  {pattern.aiGenerated && (
                    <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">
                      AI ✨
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-semibold mb-2">{pattern.title}</h3>
                <p className="text-gray-600 text-sm line-clamp-2 mb-3">
                  {pattern.description}
                </p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>By {pattern.author.name || 'Anonymous'}</span>
                  {pattern.estimatedTime && <span>⏱ {pattern.estimatedTime}</span>}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {patterns.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📄</div>
            <h3 className="text-xl font-semibold mb-2">No patterns yet</h3>
            <p className="text-gray-600 mb-6">Start by generating your first pattern</p>
            <Link href="/patterns/generate" className="btn btn-primary">
              Generate Pattern
            </Link>
          </div>
        )}
      </main>
    </div>
  )
}
