'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: '📊' },
  { name: 'Pattern Generator', href: '/pattern-generator', icon: '🧶' },
  { name: 'Project Planner', href: '/project-planner', icon: '📋' },
  { name: 'Tutorials', href: '/tutorials', icon: '📚' },
  { name: 'Community', href: '/community', icon: '👥' },
  { name: 'Profile', href: '/profile', icon: '👤' },
];

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();
  
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-neutral-200 transform transition-transform duration-200 ease-in-out lg:translate-x-0 lg:static lg:z-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex h-full flex-col">
          {/* Logo */}
          <div className="flex h-16 items-center px-6 border-b border-neutral-200">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl">🧶</span>
              <span className="text-xl font-bold text-primary-600">Crochet.ai</span>
            </Link>
          </div>
          
          {/* Navigation */}
          <nav className="flex-1 space-y-1 px-3 py-4 overflow-y-auto">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    isActive
                      ? 'bg-primary-50 text-primary-700'
                      : 'text-neutral-700 hover:bg-neutral-50'
                  }`}
                  onClick={() => {
                    if (window.innerWidth < 1024) {
                      onClose();
                    }
                  }}
                >
                  <span className="mr-3 text-xl">{item.icon}</span>
                  {item.name}
                </Link>
              );
            })}
          </nav>
          
          {/* Footer */}
          <div className="border-t border-neutral-200 p-4">
            <Link
              href="/pricing"
              className="block w-full px-4 py-2 text-center text-sm font-medium text-white bg-primary-600 rounded-lg hover:bg-primary-700 transition-colors"
            >
              Upgrade to Pro
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
}
