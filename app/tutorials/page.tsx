import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { authOptions } from '@/lib/auth'
import Navbar from '@/components/Navbar'
import Link from 'next/link'
import { prisma } from '@/lib/prisma'

export default async function TutorialsPage() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect('/auth/login')
  }

  const tutorials = await prisma.tutorial.findMany({
    where: {
      isPublished: true,
    },
    orderBy: {
      order: 'asc',
    },
  })

  const categories = ['stitches', 'techniques', 'tips-tricks']

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Tutorials</h1>
          <p className="text-gray-600 mt-2">Learn crochet techniques from basics to advanced</p>
        </div>

        {categories.map((category) => {
          const categoryTutorials = tutorials.filter(t => t.category === category)
          
          if (categoryTutorials.length === 0) return null

          return (
            <div key={category} className="mb-12">
              <h2 className="text-2xl font-semibold mb-6 capitalize">
                {category.replace('-', ' & ')}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryTutorials.map((tutorial) => (
                  <div key={tutorial.id} className="card hover:shadow-lg transition-shadow">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs bg-primary-100 text-primary-700 px-2 py-1 rounded">
                        {tutorial.difficulty}
                      </span>
                      {tutorial.duration && (
                        <span className="text-xs text-gray-500">⏱ {tutorial.duration}</span>
                      )}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{tutorial.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {tutorial.description}
                    </p>
                    <button className="btn btn-primary w-full">
                      Start Learning →
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )
        })}

        {tutorials.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📚</div>
            <h3 className="text-xl font-semibold mb-2">No tutorials available yet</h3>
            <p className="text-gray-600">Check back soon for new content!</p>
          </div>
        )}
      </main>
    </div>
  )
}
