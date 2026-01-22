import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { authOptions } from '@/lib/auth'
import Navbar from '@/components/Navbar'
import { prisma } from '@/lib/prisma'

export default async function ProfilePage() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect('/auth/login')
  }

  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
    include: {
      patterns: {
        select: { id: true },
      },
      projects: {
        select: { id: true, status: true },
      },
      subscription: true,
    },
  })

  if (!user) {
    redirect('/auth/login')
  }

  const completedProjects = user.projects.filter(p => p.status === 'completed').length

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Profile</h1>
          <p className="text-gray-600 mt-2">Manage your account and preferences</p>
        </div>

        {/* Profile Info */}
        <div className="card mb-6">
          <div className="flex items-start gap-6">
            <div className="w-24 h-24 bg-primary-100 rounded-full flex items-center justify-center text-4xl text-primary-700 font-bold">
              {user.name?.[0]?.toUpperCase() || '?'}
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-semibold mb-1">{user.name}</h2>
              <p className="text-gray-600 mb-3">{user.email}</p>
              <div className="flex gap-2">
                <span className="text-xs bg-primary-100 text-primary-700 px-3 py-1 rounded-full">
                  {user.skillLevel || 'beginner'}
                </span>
                <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                  {user.subscription?.plan || 'free'} plan
                </span>
              </div>
            </div>
            <button className="btn btn-outline">
              ✏️ Edit Profile
            </button>
          </div>
          {user.bio && (
            <p className="text-gray-700 mt-4 pt-4 border-t">{user.bio}</p>
          )}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="card bg-white">
            <div className="text-sm text-gray-600 mb-1">Total Projects</div>
            <div className="text-3xl font-bold text-gray-900">{user.projects.length}</div>
          </div>
          <div className="card bg-white">
            <div className="text-sm text-gray-600 mb-1">Completed</div>
            <div className="text-3xl font-bold text-green-600">{completedProjects}</div>
          </div>
          <div className="card bg-white">
            <div className="text-sm text-gray-600 mb-1">Patterns Created</div>
            <div className="text-3xl font-bold text-primary-600">{user.patterns.length}</div>
          </div>
        </div>

        {/* Account Settings */}
        <div className="card mb-6">
          <h3 className="text-xl font-semibold mb-4">Account Settings</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center py-3 border-b">
              <div>
                <div className="font-medium">Email Notifications</div>
                <div className="text-sm text-gray-600">Receive updates about your projects</div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
              </label>
            </div>
            <div className="flex justify-between items-center py-3 border-b">
              <div>
                <div className="font-medium">Community Posts</div>
                <div className="text-sm text-gray-600">Get notified of new community activity</div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
              </label>
            </div>
          </div>
        </div>

        {/* Subscription */}
        <div className="card">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-semibold mb-2">Subscription</h3>
              <p className="text-gray-600">
                You're on the <span className="font-semibold">{user.subscription?.plan || 'Free'}</span> plan
              </p>
            </div>
            <button className="btn btn-primary">
              Upgrade Plan
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}
