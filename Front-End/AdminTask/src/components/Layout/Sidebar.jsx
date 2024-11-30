import { NavLink } from 'react-router-dom';
import {
  HomeIcon,
  UserGroupIcon,
  KeyIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline';

const Sidebar = () => {
  const navigation = [
    { name: 'Dashboard', href: '/', icon: HomeIcon },
    { name: 'Users', href: '/users', icon: UserGroupIcon },
    { name: 'Roles', href: '/roles', icon: KeyIcon },
    { name: 'Permissions', href: '/permissions', icon: ShieldCheckIcon },
  ];

  return (
    <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-lg">
      <div className="flex h-16 items-center justify-center border-b">
        <h1 className="text-xl font-bold">Admin Panel</h1>
      </div>
      <nav className="mt-6">
        {navigation.map((item) => (
          <NavLink
            key={item.name}
            to={item.href}
            className={({ isActive }) =>
              `flex items-center px-4 py-3 text-gray-600 hover:bg-gray-100 ${
                isActive ? 'bg-gray-100 text-blue-600' : ''
              }`
            }
          >
            <item.icon className="h-5 w-5 mr-3" />
            {item.name}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;