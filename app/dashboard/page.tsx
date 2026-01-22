import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { authOptions } from '@/lib/auth'
import Navbar from '@/components/Navbar'
import Link from 'next/link'

export default async function DashboardPage() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect('/auth/login')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome back, {session.user?.name || 'there'}!
          </h1>
          <p className="text-gray-600 mt-2">Here's what's happening with your crochet projects</p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Link
            href="/patterns/generate"
            className="card hover:shadow-lg transition-shadow cursor-pointer bg-gradient-to-br from-primary-50 to-white border-2 border-primary-200"
          >
            <div className="text-4xl mb-3">✨</div>
            <h3 className="text-xl font-semibold mb-2">Generate Pattern</h3>
            <p className="text-gray-600">Create a custom pattern with AI</p>
          </Link>

          <Link
            href="/projects/new"
            className="card hover:shadow-lg transition-shadow cursor-pointer"
          >
            <div className="text-4xl mb-3">➕</div>
            <h3 className="text-xl font-semibold mb-2">Start Project</h3>
            <p className="text-gray-600">Begin tracking a new project</p>
          </Link>

          <Link
            href="/tutorials"
            className="card hover:shadow-lg transition-shadow cursor-pointer"
          >
            <div className="text-4xl mb-3">📚</div>
            <h3 className="text-xl font-semibold mb-2">Learn</h3>
            <p className="text-gray-600">Explore tutorials and guides</p>
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="card bg-white">
            <div className="text-sm text-gray-600 mb-1">Total Projects</div>
            <div className="text-3xl font-bold text-gray-900">0</div>
          </div>
          <div className="card bg-white">
            <div className="text-sm text-gray-600 mb-1">In Progress</div>
            <div className="text-3xl font-bold text-primary-600">0</div>
          </div>
          <div className="card bg-white">
            <div className="text-sm text-gray-600 mb-1">Completed</div>
            <div className="text-3xl font-bold text-green-600">0</div>
          </div>
          <div className="card bg-white">
            <div className="text-sm text-gray-600 mb-1">Saved Patterns</div>
            <div className="text-3xl font-bold text-gray-900">0</div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="card">
            <h2 className="text-xl font-semibold mb-4">Recent Projects</h2>
            <div className="text-center py-12 text-gray-500">
              <div className="text-5xl mb-4">📋</div>
              <p>No projects yet</p>
              <Link href="/projects/new" className="btn btn-primary mt-4">
                Create Your First Project
              </Link>
            </div>
          </div>

          <div className="card">
            <h2 className="text-xl font-semibold mb-4">Featured Patterns</h2>
            <div className="text-center py-12 text-gray-500">
              <div className="text-5xl mb-4">🎨</div>
              <p>Discover amazing patterns</p>
              <Link href="/patterns" className="btn btn-primary mt-4">
                Browse Patterns
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
