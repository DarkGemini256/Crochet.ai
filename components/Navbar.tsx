'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { signOut, useSession } from 'next-auth/react'

export default function Navbar() {
  const pathname = usePathname()
  const { data: session } = useSession()

  const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: '🏠' },
    { name: 'Patterns', href: '/patterns', icon: '📄' },
    { name: 'Projects', href: '/projects', icon: '📋' },
    { name: 'Tutorials', href: '/tutorials', icon: '🎓' },
    { name: 'Community', href: '/community', icon: '👥' },
  ]

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/dashboard" className="flex items-center">
              <h1 className="text-2xl font-bold text-primary-600">Crochet.ai</h1>
            </Link>
            <div className="hidden sm:ml-8 sm:flex sm:space-x-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`inline-flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    pathname === item.href
                      ? 'text-primary-600 bg-primary-50'
                      : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                  }`}
                >
                  <span className="mr-2">{item.icon}</span>
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/pricing"
              className="text-sm font-medium text-gray-700 hover:text-primary-600"
            >
              Pricing
            </Link>
            <Link
              href="/profile"
              className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-primary-600"
            >
              <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                {session?.user?.name?.[0]?.toUpperCase() || '?'}
              </div>
              <span className="hidden md:inline">{session?.user?.name || 'Profile'}</span>
            </Link>
            <button
              onClick={() => signOut({ callbackUrl: '/' })}
              className="text-sm font-medium text-gray-700 hover:text-primary-600"
            >
              Sign out
            </button>
          </div>
        </div>
      </div>
      {/* Mobile navigation */}
      <div className="sm:hidden border-t border-gray-200">
        <div className="flex overflow-x-auto px-2 py-2 space-x-2">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`flex-shrink-0 inline-flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                pathname === item.href
                  ? 'text-primary-600 bg-primary-50'
                  : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
              }`}
            >
              <span className="mr-2">{item.icon}</span>
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
