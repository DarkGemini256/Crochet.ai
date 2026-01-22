import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { authOptions } from '@/lib/auth'
import Navbar from '@/components/Navbar'
import Link from 'next/link'
import { prisma } from '@/lib/prisma'

export default async function ProjectsPage() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect('/auth/login')
  }

  const projects = await prisma.project.findMany({
    where: {
      userId: session.user.id,
    },
    include: {
      pattern: {
        select: {
          title: true,
          difficulty: true,
        },
      },
    },
    orderBy: {
      createdAt: 'desc',
    },
  })

  const statusCounts = {
    not_started: projects.filter(p => p.status === 'not_started').length,
    in_progress: projects.filter(p => p.status === 'in_progress').length,
    completed: projects.filter(p => p.status === 'completed').length,
    paused: projects.filter(p => p.status === 'paused').length,
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">My Projects</h1>
            <p className="text-gray-600 mt-2">Track and manage your crochet projects</p>
          </div>
          <Link href="/projects/new" className="btn btn-primary">
            ➕ New Project
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="card bg-white">
            <div className="text-sm text-gray-600 mb-1">Not Started</div>
            <div className="text-2xl font-bold text-gray-900">{statusCounts.not_started}</div>
          </div>
          <div className="card bg-white">
            <div className="text-sm text-gray-600 mb-1">In Progress</div>
            <div className="text-2xl font-bold text-primary-600">{statusCounts.in_progress}</div>
          </div>
          <div className="card bg-white">
            <div className="text-sm text-gray-600 mb-1">Completed</div>
            <div className="text-2xl font-bold text-green-600">{statusCounts.completed}</div>
          </div>
          <div className="card bg-white">
            <div className="text-sm text-gray-600 mb-1">Paused</div>
            <div className="text-2xl font-bold text-orange-600">{statusCounts.paused}</div>
          </div>
        </div>

        {/* Project list */}
        {projects.length > 0 ? (
          <div className="space-y-4">
            {projects.map((project) => (
              <div key={project.id} className="card hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold">{project.title}</h3>
                      <span className={`text-xs px-3 py-1 rounded-full ${
                        project.status === 'completed' ? 'bg-green-100 text-green-700' :
                        project.status === 'in_progress' ? 'bg-primary-100 text-primary-700' :
                        project.status === 'paused' ? 'bg-orange-100 text-orange-700' :
                        'bg-gray-100 text-gray-700'
                      }`}>
                        {project.status.replace('_', ' ')}
                      </span>
                    </div>
                    {project.pattern && (
                      <p className="text-sm text-gray-600 mb-2">
                        Pattern: {project.pattern.title}
                      </p>
                    )}
                    {project.description && (
                      <p className="text-gray-600 line-clamp-2">{project.description}</p>
                    )}
                  </div>
                  <div className="text-right ml-4">
                    <div className="text-2xl font-bold text-primary-600">
                      {project.progressPercent}%
                    </div>
                    <div className="text-xs text-gray-500">complete</div>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                  <div
                    className="bg-primary-600 h-2 rounded-full transition-all"
                    style={{ width: `${project.progressPercent}%` }}
                  />
                </div>

                <div className="flex justify-between items-center">
                  <div className="text-sm text-gray-500">
                    {project.startedAt && `Started ${new Date(project.startedAt).toLocaleDateString()}`}
                    {project.completedAt && ` • Completed ${new Date(project.completedAt).toLocaleDateString()}`}
                  </div>
                  <button className="btn btn-sm btn-outline">
                    View Details →
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📋</div>
            <h3 className="text-xl font-semibold mb-2">No projects yet</h3>
            <p className="text-gray-600 mb-6">Start tracking your crochet projects</p>
            <Link href="/projects/new" className="btn btn-primary">
              Create Your First Project
            </Link>
          </div>
        )}
      </main>
    </div>
  )
}
