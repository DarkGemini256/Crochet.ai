'use client';

import { MainLayout } from '@/components/MainLayout';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input, Textarea, Select } from '@/components/ui/Input';
import { Badge } from '@/components/ui/Badge';
import { Tabs } from '@/components/ui/Tabs';

const achievements = [
  { id: 1, name: 'First Project', icon: '🎯', description: 'Complete your first project', earned: true },
  { id: 2, name: 'Pattern Master', icon: '📐', description: 'Generate 10 patterns', earned: true },
  { id: 3, name: 'Community Star', icon: '⭐', description: 'Get 50 likes on a post', earned: false },
  { id: 4, name: '100 Hour Club', icon: '⏰', description: 'Log 100 hours of crafting', earned: false },
];

const recentActivity = [
  { id: 1, action: 'Completed', item: 'Floral Scarf', time: '2 days ago', icon: '✅' },
  { id: 2, action: 'Generated', item: 'Geometric Cushion Pattern', time: '3 days ago', icon: '✨' },
  { id: 3, action: 'Joined', item: 'Community Discussion', time: '5 days ago', icon: '💬' },
  { id: 4, action: 'Started', item: 'Cozy Winter Blanket', time: '1 week ago', icon: '🚀' },
];

export default function ProfilePage() {
  return (
    <MainLayout>
      <div className="space-y-6">
        {/* Profile Header */}
        <Card>
          <CardContent>
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary-400 to-secondary-400 flex items-center justify-center text-4xl font-bold text-white">
                JD
              </div>
              <div className="flex-1">
                <h1 className="text-3xl font-bold text-neutral-900">Jane Doe</h1>
                <p className="text-neutral-600 mt-1">jane.doe@example.com</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  <Badge variant="info">Pro Member</Badge>
                  <Badge variant="neutral">Intermediate</Badge>
                  <Badge variant="success">Active 30d</Badge>
                </div>
              </div>
              <Button variant="outline">Edit Profile</Button>
            </div>
          </CardContent>
        </Card>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card variant="bordered">
            <CardContent>
              <div className="text-center">
                <div className="text-3xl mb-2">🎨</div>
                <div className="text-2xl font-bold text-neutral-900">15</div>
                <div className="text-sm text-neutral-600">Projects</div>
              </div>
            </CardContent>
          </Card>
          <Card variant="bordered">
            <CardContent>
              <div className="text-center">
                <div className="text-3xl mb-2">📐</div>
                <div className="text-2xl font-bold text-neutral-900">42</div>
                <div className="text-sm text-neutral-600">Patterns</div>
              </div>
            </CardContent>
          </Card>
          <Card variant="bordered">
            <CardContent>
              <div className="text-center">
                <div className="text-3xl mb-2">👥</div>
                <div className="text-2xl font-bold text-neutral-900">128</div>
                <div className="text-sm text-neutral-600">Followers</div>
              </div>
            </CardContent>
          </Card>
          <Card variant="bordered">
            <CardContent>
              <div className="text-center">
                <div className="text-3xl mb-2">⏰</div>
                <div className="text-2xl font-bold text-neutral-900">47h</div>
                <div className="text-sm text-neutral-600">This Month</div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs
          tabs={[
            {
              id: 'settings',
              label: 'Settings',
              content: (
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Personal Information</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <Input label="Full Name" defaultValue="Jane Doe" />
                        <Input label="Email" type="email" defaultValue="jane.doe@example.com" />
                        <Input label="Username" defaultValue="janedoe" />
                        <Textarea
                          label="Bio"
                          placeholder="Tell us about yourself..."
                          rows={3}
                          defaultValue="Passionate crocheter and pattern designer. Love creating amigurumi!"
                        />
                        <Button>Save Changes</Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Preferences</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <Select
                          label="Skill Level"
                          options={[
                            { value: 'beginner', label: 'Beginner' },
                            { value: 'intermediate', label: 'Intermediate' },
                            { value: 'advanced', label: 'Advanced' },
                            { value: 'expert', label: 'Expert' },
                          ]}
                          defaultValue="intermediate"
                        />
                        <Select
                          label="Default Project Type"
                          options={[
                            { value: 'amigurumi', label: 'Amigurumi' },
                            { value: 'blanket', label: 'Blanket' },
                            { value: 'clothing', label: 'Clothing' },
                            { value: 'accessory', label: 'Accessory' },
                          ]}
                          defaultValue="amigurumi"
                        />
                        <div className="pt-2">
                          <label className="flex items-center space-x-2">
                            <input type="checkbox" className="rounded" defaultChecked />
                            <span className="text-sm text-neutral-700">
                              Email notifications for new patterns
                            </span>
                          </label>
                        </div>
                        <div>
                          <label className="flex items-center space-x-2">
                            <input type="checkbox" className="rounded" defaultChecked />
                            <span className="text-sm text-neutral-700">
                              Weekly project summary
                            </span>
                          </label>
                        </div>
                        <Button>Save Preferences</Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ),
            },
            {
              id: 'achievements',
              label: 'Achievements',
              content: (
                <Card>
                  <CardHeader>
                    <CardTitle>Your Achievements 🏆</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      {achievements.map((achievement) => (
                        <div
                          key={achievement.id}
                          className={`p-4 rounded-lg border-2 ${
                            achievement.earned
                              ? 'border-primary-200 bg-primary-50'
                              : 'border-neutral-200 bg-neutral-50 opacity-60'
                          }`}
                        >
                          <div className="flex items-start space-x-3">
                            <div className="text-4xl">{achievement.icon}</div>
                            <div>
                              <h4 className="font-bold text-neutral-900">{achievement.name}</h4>
                              <p className="text-sm text-neutral-600 mt-1">
                                {achievement.description}
                              </p>
                              {achievement.earned && (
                                <Badge variant="success" size="sm" className="mt-2">
                                  Earned ✓
                                </Badge>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ),
            },
            {
              id: 'activity',
              label: 'Activity',
              content: (
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentActivity.map((activity) => (
                        <div
                          key={activity.id}
                          className="flex items-center space-x-4 p-3 bg-neutral-50 rounded-lg"
                        >
                          <div className="text-2xl">{activity.icon}</div>
                          <div className="flex-1">
                            <p className="text-neutral-900">
                              <span className="font-medium">{activity.action}</span>{' '}
                              {activity.item}
                            </p>
                            <p className="text-sm text-neutral-500">{activity.time}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ),
            },
          ]}
        />
      </div>
    </MainLayout>
  );
}
