'use client';

import { useState } from 'react';
import { MainLayout } from '@/components/MainLayout';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Input } from '@/components/ui/Input';

const tutorials = [
  {
    id: 1,
    title: 'Getting Started: Your First Chain',
    level: 'Beginner',
    duration: '8 min',
    views: 12453,
    category: 'Basics',
    image: '⛓️',
  },
  {
    id: 2,
    title: 'Mastering the Magic Circle',
    level: 'Beginner',
    duration: '12 min',
    views: 8921,
    category: 'Basics',
    image: '⭕',
  },
  {
    id: 3,
    title: 'Advanced Color Changes',
    level: 'Advanced',
    duration: '18 min',
    views: 5432,
    category: 'Techniques',
    image: '🎨',
  },
  {
    id: 4,
    title: 'Creating Perfect Granny Squares',
    level: 'Intermediate',
    duration: '15 min',
    views: 15678,
    category: 'Patterns',
    image: '🔲',
  },
  {
    id: 5,
    title: 'Amigurumi Essentials',
    level: 'Intermediate',
    duration: '22 min',
    views: 9876,
    category: 'Amigurumi',
    image: '🧸',
  },
  {
    id: 6,
    title: 'Understanding Gauge and Tension',
    level: 'Beginner',
    duration: '10 min',
    views: 7654,
    category: 'Basics',
    image: '📏',
  },
];

const categories = ['All', 'Basics', 'Techniques', 'Patterns', 'Amigurumi', 'Advanced'];

export default function TutorialsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTutorials = tutorials.filter((tutorial) => {
    const matchesCategory = selectedCategory === 'All' || tutorial.category === selectedCategory;
    const matchesSearch = tutorial.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <MainLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-neutral-900">Tutorials Hub 📚</h1>
          <p className="text-neutral-600 mt-1">
            Learn new techniques with AI-guided step-by-step video tutorials
          </p>
        </div>

        {/* Search and Filter */}
        <Card>
          <CardContent>
            <div className="space-y-4">
              <Input
                placeholder="Search tutorials..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />

              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      selectedCategory === category
                        ? 'bg-primary-600 text-white'
                        : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Featured Tutorial */}
        <Card variant="hover">
          <CardContent>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0 w-full md:w-64 h-48 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-lg flex items-center justify-center">
                <div className="text-8xl">🎓</div>
              </div>
              <div className="flex-1">
                <Badge variant="warning" size="sm">
                  ⭐ Featured
                </Badge>
                <h2 className="text-2xl font-bold text-neutral-900 mt-2">
                  Complete Beginner's Guide to Crochet
                </h2>
                <p className="text-neutral-600 mt-2">
                  Start your crochet journey with our comprehensive guide covering all the basics.
                  Perfect for absolute beginners!
                </p>
                <div className="flex items-center space-x-4 mt-4">
                  <Badge variant="info">Beginner</Badge>
                  <span className="text-sm text-neutral-600">45 min</span>
                  <span className="text-sm text-neutral-600">•</span>
                  <span className="text-sm text-neutral-600">23,456 views</span>
                </div>
                <button className="mt-4 px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
                  Start Learning
                </button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tutorials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTutorials.map((tutorial) => (
            <Card key={tutorial.id} variant="hover">
              <CardContent>
                <div className="aspect-video bg-gradient-to-br from-primary-50 to-secondary-50 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-6xl">{tutorial.image}</div>
                </div>
                <h3 className="font-bold text-lg text-neutral-900 mb-2">
                  {tutorial.title}
                </h3>
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <Badge
                    size="sm"
                    variant={
                      tutorial.level === 'Beginner'
                        ? 'success'
                        : tutorial.level === 'Intermediate'
                        ? 'warning'
                        : 'error'
                    }
                  >
                    {tutorial.level}
                  </Badge>
                  <span className="text-sm text-neutral-600">{tutorial.duration}</span>
                </div>
                <div className="text-sm text-neutral-500 mb-4">
                  {tutorial.views.toLocaleString()} views
                </div>
                <button className="w-full px-4 py-2 border-2 border-primary-600 text-primary-600 rounded-lg hover:bg-primary-50 transition-colors font-medium">
                  Watch Tutorial
                </button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredTutorials.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-neutral-900 mb-2">
              No tutorials found
            </h3>
            <p className="text-neutral-600">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}
      </div>
    </MainLayout>
  );
}
