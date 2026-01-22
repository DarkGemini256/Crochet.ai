import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { authOptions } from '@/lib/auth'
import Navbar from '@/components/Navbar'
import { prisma } from '@/lib/prisma'

export default async function CommunityPage() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect('/auth/login')
  }

  const posts = await prisma.communityPost.findMany({
    include: {
      author: {
        select: {
          name: true,
          email: true,
        },
      },
      comments: {
        select: {
          id: true,
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
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Community Feed</h1>
          <p className="text-gray-600 mt-2">Share and discover crochet creations</p>
        </div>

        <div className="card mb-6">
          <textarea
            className="input min-h-24 mb-3"
            placeholder="Share your latest project, ask a question, or inspire others..."
          />
          <button className="btn btn-primary">
            📸 Share Post
          </button>
        </div>

        {/* Posts */}
        <div className="space-y-6">
          {posts.map((post) => (
            <div key={post.id} className="card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-700 font-semibold">
                  {post.author.name?.[0]?.toUpperCase() || '?'}
                </div>
                <div>
                  <div className="font-semibold">{post.author.name || 'Anonymous'}</div>
                  <div className="text-sm text-gray-500">
                    {new Date(post.createdAt).toLocaleDateString()}
                  </div>
                </div>
              </div>

              <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-700 mb-4">{post.content}</p>

              {post.imageUrl && (
                <div className="w-full h-64 bg-gray-200 rounded-lg mb-4">
                  {/* Image placeholder */}
                </div>
              )}

              <div className="flex items-center gap-6 text-sm">
                <button className="flex items-center gap-2 text-gray-600 hover:text-primary-600">
                  <span>❤️</span>
                  <span>{post.likes}</span>
                </button>
                <button className="flex items-center gap-2 text-gray-600 hover:text-primary-600">
                  <span>💬</span>
                  <span>{post.comments.length} comments</span>
                </button>
                <button className="text-gray-600 hover:text-primary-600">
                  <span>🔗 Share</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {posts.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">👥</div>
            <h3 className="text-xl font-semibold mb-2">No posts yet</h3>
            <p className="text-gray-600">Be the first to share your creation!</p>
          </div>
        )}
      </main>
    </div>
  )
}
