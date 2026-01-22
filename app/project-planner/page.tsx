'use client';

import { MainLayout } from '@/components/MainLayout';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Tabs } from '@/components/ui/Tabs';

const projects = {
  active: [
    {
      id: 1,
      name: 'Cozy Winter Blanket',
      type: 'Blanket',
      progress: 65,
      startDate: '2026-01-10',
      materials: ['Chunky Yarn (6 skeins)', 'Size K Hook', 'Yarn Needle'],
      image: '🧶',
    },
    {
      id: 2,
      name: 'Baby Octopus Amigurumi',
      type: 'Amigurumi',
      progress: 90,
      startDate: '2026-01-15',
      materials: ['Cotton Yarn', 'Size D Hook', 'Safety Eyes', 'Stuffing'],
      image: '🐙',
    },
  ],
  completed: [
    {
      id: 3,
      name: 'Floral Scarf',
      type: 'Accessory',
      progress: 100,
      startDate: '2025-12-20',
      completedDate: '2026-01-05',
      materials: ['Worsted Weight Yarn', 'Size H Hook'],
      image: '🌸',
    },
  ],
};

export default function ProjectPlannerPage() {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-neutral-900">Project Planner 📋</h1>
            <p className="text-neutral-600 mt-1">
              Organize and track all your crochet projects in one place
            </p>
          </div>
          <Button>+ New Project</Button>
        </div>

        <Tabs
          tabs={[
            {
              id: 'active',
              label: `Active (${projects.active.length})`,
              content: (
                <div className="grid md:grid-cols-2 gap-6">
                  {projects.active.map((project) => (
                    <Card key={project.id} variant="hover">
                      <CardContent>
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <div className="text-4xl">{project.image}</div>
                            <div>
                              <h3 className="font-bold text-lg text-neutral-900">
                                {project.name}
                              </h3>
                              <Badge size="sm" variant="neutral">
                                {project.type}
                              </Badge>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-3">
                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span className="text-neutral-600">Progress</span>
                              <span className="font-medium text-neutral-900">
                                {project.progress}%
                              </span>
                            </div>
                            <div className="w-full h-3 bg-neutral-200 rounded-full overflow-hidden">
                              <div
                                className="h-full bg-primary-600 transition-all"
                                style={{ width: `${project.progress}%` }}
                              />
                            </div>
                          </div>

                          <div>
                            <p className="text-sm text-neutral-600 mb-2">Materials:</p>
                            <div className="flex flex-wrap gap-2">
                              {project.materials.map((material, idx) => (
                                <span
                                  key={idx}
                                  className="text-xs px-2 py-1 bg-neutral-100 text-neutral-700 rounded"
                                >
                                  {material}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div className="text-sm text-neutral-600">
                            Started: {new Date(project.startDate).toLocaleDateString()}
                          </div>

                          <div className="flex space-x-2 pt-2">
                            <Button size="sm" className="flex-1">
                              Continue
                            </Button>
                            <Button size="sm" variant="outline">
                              Edit
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ),
            },
            {
              id: 'completed',
              label: `Completed (${projects.completed.length})`,
              content: (
                <div className="grid md:grid-cols-2 gap-6">
                  {projects.completed.map((project) => (
                    <Card key={project.id} variant="hover">
                      <CardContent>
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <div className="text-4xl">{project.image}</div>
                            <div>
                              <h3 className="font-bold text-lg text-neutral-900">
                                {project.name}
                              </h3>
                              <Badge size="sm" variant="success">
                                Completed ✓
                              </Badge>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-3">
                          <div>
                            <p className="text-sm text-neutral-600 mb-2">Materials Used:</p>
                            <div className="flex flex-wrap gap-2">
                              {project.materials.map((material, idx) => (
                                <span
                                  key={idx}
                                  className="text-xs px-2 py-1 bg-neutral-100 text-neutral-700 rounded"
                                >
                                  {material}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div className="text-sm text-neutral-600">
                            Completed: {project.completedDate ? new Date(project.completedDate).toLocaleDateString() : 'N/A'}
                          </div>

                          <div className="flex space-x-2 pt-2">
                            <Button size="sm" variant="outline" className="flex-1">
                              View Details
                            </Button>
                            <Button size="sm" variant="outline">
                              Share
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ),
            },
            {
              id: 'planned',
              label: 'Planned (0)',
              content: (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">📝</div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                    No planned projects yet
                  </h3>
                  <p className="text-neutral-600 mb-6">
                    Start planning your next crochet masterpiece
                  </p>
                  <Button>Plan New Project</Button>
                </div>
              ),
            },
          ]}
        />
      </div>
    </MainLayout>
  );
}
