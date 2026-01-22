import { MainLayout } from '@/components/MainLayout';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import Link from 'next/link';

// Placeholder data
const recentProjects = [
  { id: 1, name: 'Cozy Winter Blanket', progress: 65, status: 'in-progress', image: '🧶' },
  { id: 2, name: 'Baby Octopus Amigurumi', progress: 90, status: 'in-progress', image: '🐙' },
  { id: 3, name: 'Floral Scarf', progress: 100, status: 'completed', image: '🌸' },
];

const savedPatterns = [
  { id: 1, name: 'Granny Square Pillow', difficulty: 'Beginner', image: '🔲' },
  { id: 2, name: 'Cable Knit Sweater', difficulty: 'Advanced', image: '🧥' },
  { id: 3, name: 'Heart Coasters', difficulty: 'Intermediate', image: '❤️' },
];

const recommendedTutorials = [
  { id: 1, title: 'Mastering the Magic Circle', duration: '12 min', image: '⭕' },
  { id: 2, title: 'Advanced Color Changes', duration: '18 min', image: '🎨' },
  { id: 3, title: 'Creating Perfect Edges', duration: '10 min', image: '📏' },
];

export default function DashboardPage() {
  return (
    <MainLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-neutral-900">Welcome back, Jane! 👋</h1>
            <p className="text-neutral-600 mt-1">Here's what's happening with your projects</p>
          </div>
          <div className="mt-4 md:mt-0">
            <Link href="/pattern-generator">
              <Button>Generate New Pattern</Button>
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card variant="bordered">
            <CardContent>
              <div className="text-sm text-neutral-600">Active Projects</div>
              <div className="text-3xl font-bold text-neutral-900 mt-1">3</div>
              <div className="text-xs text-green-600 mt-1">↑ 1 new this week</div>
            </CardContent>
          </Card>
          <Card variant="bordered">
            <CardContent>
              <div className="text-sm text-neutral-600">Completed</div>
              <div className="text-3xl font-bold text-neutral-900 mt-1">12</div>
              <div className="text-xs text-neutral-500 mt-1">All time</div>
            </CardContent>
          </Card>
          <Card variant="bordered">
            <CardContent>
              <div className="text-sm text-neutral-600">Saved Patterns</div>
              <div className="text-3xl font-bold text-neutral-900 mt-1">28</div>
              <div className="text-xs text-neutral-500 mt-1">+5 this month</div>
            </CardContent>
          </Card>
          <Card variant="bordered">
            <CardContent>
              <div className="text-sm text-neutral-600">Hours Crafted</div>
              <div className="text-3xl font-bold text-neutral-900 mt-1">47</div>
              <div className="text-xs text-neutral-500 mt-1">This month</div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Projects */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Recent Projects</CardTitle>
              <Link href="/project-planner" className="text-sm text-primary-600 hover:text-primary-700">
                View all
              </Link>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentProjects.map((project) => (
                <div key={project.id} className="flex items-center justify-between p-4 bg-neutral-50 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className="text-4xl">{project.image}</div>
                    <div>
                      <h3 className="font-semibold text-neutral-900">{project.name}</h3>
                      <div className="flex items-center space-x-2 mt-1">
                        <div className="w-32 h-2 bg-neutral-200 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-primary-600"
                            style={{ width: `${project.progress}%` }}
                          />
                        </div>
                        <span className="text-sm text-neutral-600">{project.progress}%</span>
                      </div>
                    </div>
                  </div>
                  <Badge variant={project.status === 'completed' ? 'success' : 'info'}>
                    {project.status === 'completed' ? 'Completed' : 'In Progress'}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Saved Patterns */}
          <Card>
            <CardHeader>
              <CardTitle>Saved Patterns</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {savedPatterns.map((pattern) => (
                  <div key={pattern.id} className="flex items-center justify-between p-3 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors cursor-pointer">
                    <div className="flex items-center space-x-3">
                      <div className="text-2xl">{pattern.image}</div>
                      <div>
                        <h4 className="font-medium text-neutral-900">{pattern.name}</h4>
                        <Badge size="sm" variant="neutral">{pattern.difficulty}</Badge>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recommended Tutorials */}
          <Card>
            <CardHeader>
              <CardTitle>Recommended for You</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {recommendedTutorials.map((tutorial) => (
                  <div key={tutorial.id} className="flex items-center justify-between p-3 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors cursor-pointer">
                    <div className="flex items-center space-x-3">
                      <div className="text-2xl">{tutorial.image}</div>
                      <div>
                        <h4 className="font-medium text-neutral-900">{tutorial.title}</h4>
                        <p className="text-sm text-neutral-600">{tutorial.duration}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
}
