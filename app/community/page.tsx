'use client';

import { MainLayout } from '@/components/MainLayout';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';

const posts = [
  {
    id: 1,
    author: 'Sarah M.',
    avatar: '👩',
    time: '2 hours ago',
    content: 'Just finished my first amigurumi! Thanks to the amazing tutorials on here. 🐻',
    image: '🧸',
    likes: 24,
    comments: 8,
    tags: ['Amigurumi', 'Beginner'],
  },
  {
    id: 2,
    author: 'Mike R.',
    avatar: '👨',
    time: '5 hours ago',
    content: 'Working on a blanket for my daughter. The pattern generator made it so easy! 💜',
    image: '🧶',
    likes: 45,
    comments: 12,
    tags: ['Blanket', 'Family'],
  },
  {
    id: 3,
    author: 'Emma L.',
    avatar: '👩‍🦰',
    time: '1 day ago',
    content: 'Can anyone recommend good yarn brands for summer garments? Looking for breathable options.',
    likes: 18,
    comments: 23,
    tags: ['Question', 'Yarn'],
  },
  {
    id: 4,
    author: 'Jessica K.',
    avatar: '👱‍♀️',
    time: '1 day ago',
    content: 'Completed my granny square collection! 50 different patterns. Starting a blanket project next week! 🌈',
    image: '🔲',
    likes: 67,
    comments: 15,
    tags: ['Granny Squares', 'Achievement'],
  },
  {
    id: 5,
    author: 'David P.',
    avatar: '👨‍🦲',
    time: '2 days ago',
    content: 'New to crochet - just learned the magic circle. Game changer! 🎯',
    likes: 32,
    comments: 9,
    tags: ['Beginner', 'Tips'],
  },
];

export default function CommunityPage() {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-neutral-900">Community Feed 👥</h1>
            <p className="text-neutral-600 mt-1">
              Connect with fellow crochet enthusiasts and share your creations
            </p>
          </div>
          <Button>Share Your Project</Button>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Feed */}
          <div className="lg:col-span-2 space-y-4">
            {posts.map((post) => (
              <Card key={post.id}>
                <CardContent>
                  {/* Post Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-xl">
                        {post.avatar}
                      </div>
                      <div>
                        <h3 className="font-semibold text-neutral-900">{post.author}</h3>
                        <p className="text-sm text-neutral-500">{post.time}</p>
                      </div>
                    </div>
                    <button className="text-neutral-400 hover:text-neutral-600">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                      </svg>
                    </button>
                  </div>

                  {/* Post Content */}
                  <p className="text-neutral-900 mb-3">{post.content}</p>

                  {/* Post Image */}
                  {post.image && (
                    <div className="mb-3 h-64 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-lg flex items-center justify-center">
                      <div className="text-8xl">{post.image}</div>
                    </div>
                  )}

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, idx) => (
                      <Badge key={idx} size="sm" variant="neutral">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Post Actions */}
                  <div className="flex items-center space-x-6 pt-3 border-t border-neutral-200">
                    <button className="flex items-center space-x-2 text-neutral-600 hover:text-primary-600 transition-colors">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                      <span className="text-sm font-medium">{post.likes}</span>
                    </button>
                    <button className="flex items-center space-x-2 text-neutral-600 hover:text-primary-600 transition-colors">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                      <span className="text-sm font-medium">{post.comments}</span>
                    </button>
                    <button className="flex items-center space-x-2 text-neutral-600 hover:text-primary-600 transition-colors ml-auto">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                      </svg>
                      <span className="text-sm font-medium">Share</span>
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Load More */}
            <div className="text-center pt-4">
              <Button variant="outline">Load More Posts</Button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            {/* Trending Tags */}
            <Card>
              <CardContent>
                <h3 className="font-bold text-lg text-neutral-900 mb-4">🔥 Trending Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {['Amigurumi', 'Blanket', 'Beginner', 'Granny Squares', 'Tutorial', 'Pattern'].map(
                    (tag) => (
                      <Badge key={tag} variant="neutral">
                        {tag}
                      </Badge>
                    )
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Active Users */}
            <Card>
              <CardContent>
                <h3 className="font-bold text-lg text-neutral-900 mb-4">👋 Active Now</h3>
                <div className="space-y-3">
                  {['Lisa M.', 'John D.', 'Amy K.', 'Chris P.'].map((user, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center relative">
                        <span className="text-sm">👤</span>
                        <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white"></span>
                      </div>
                      <span className="text-sm font-medium text-neutral-900">{user}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Community Guidelines */}
            <Card>
              <CardContent>
                <h3 className="font-bold text-lg text-neutral-900 mb-3">📜 Guidelines</h3>
                <ul className="space-y-2 text-sm text-neutral-700">
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Be kind and supportive</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Share your creations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Give credit to creators</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>No spam or self-promotion</span>
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
