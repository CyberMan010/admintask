import { UsersIcon, KeyIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

const Dashboard = () => {
  const stats = [
    {
      name: 'Total Users',
      value: '25',
      icon: UsersIcon,
      change: '+2.5%',
      changeType: 'increase',
    },
    {
      name: 'Active Roles',
      value: '8',
      icon: KeyIcon,
      change: '+0.5%',
      changeType: 'increase',
    },
    {
      name: 'Permissions',
      value: '15',
      icon: ShieldCheckIcon,
      change: '0%',
      changeType: 'neutral',
    },
  ];

  const recentActivity = [
    {
      id: 1,
      user: 'John Doe',
      action: 'Created new user',
      target: 'Jane Smith',
      timestamp: '2 hours ago',
    },
    {
      id: 2,
      user: 'Admin',
      action: 'Updated role',
      target: 'Editor',
      timestamp: '4 hours ago',
    },
    {
      id: 3,
      user: 'System',
      action: 'Added permission',
      target: 'Delete Users',
      timestamp: '1 day ago',
    },
  ];

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat) => (
          <div
            key={stat.name}
            className="bg-white rounded-lg shadow px-6 py-4"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
              </div>
              <div className="bg-blue-50 rounded-full p-3">
                <stat.icon className="h-6 w-6 text-blue-600" />
              </div>
            </div>
            <div className="mt-2">
              <span
                className={`text-sm font-medium ${
                  stat.changeType === 'increase'
                    ? 'text-green-600'
                    : stat.changeType === 'decrease'
                    ? 'text-red-600'
                    : 'text-gray-600'
                }`}
              >
                {stat.change} from last month
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-medium text-gray-900">Recent Activity</h2>
        </div>
        <div className="divide-y divide-gray-200">
          {recentActivity.map((activity) => (
            <div key={activity.id} className="px-6 py-4">
              <div className="flex justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    {activity.user}{' '}
                    <span className="text-gray-600">{activity.action}</span>{' '}
                    <span className="font-medium">{activity.target}</span>
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">{activity.timestamp}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
