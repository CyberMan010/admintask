import { useState } from 'react';
import { PlusIcon, PencilIcon, TrashIcon } from '@heroicons/react/24/outline';
import { Dialog } from '@headlessui/react';
import RoleForm from '../components/shared/RoleForm';

const Roles = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState(null);

  // Mock permissions data - replace with API call later
  const permissions = [
    {
      id: 1,
      name: 'Read Users',
      description: 'Can view user information',
      module: 'Users',
      type: 'Read',
    },
    {
      id: 2,
      name: 'Write Users',
      description: 'Can create and edit users',
      module: 'Users',
      type: 'Write',
    },
    {
      id: 3,
      name: 'Delete Users',
      description: 'Can delete users',
      module: 'Users',
      type: 'Delete',
    },
  ];

  // Mock data - replace with API call later
  const roles = [
    {
      id: 1,
      name: 'Admin',
      description: 'Full system access',
      permissions: ['Read Users', 'Write Users', 'Delete Users'],
      userCount: 2,
    },
    {
      id: 2,
      name: 'Editor',
      description: 'Can edit content',
      permissions: ['Read Users', 'Write Users'],
      userCount: 5,
    },
    {
      id: 3,
      name: 'Viewer',
      description: 'Read-only access',
      permissions: ['Read Users'],
      userCount: 10,
    },
  ];

  const handleAddRole = (roleData) => {
    // TODO: Implement API call
    console.log('Adding role:', roleData);
    setIsAddModalOpen(false);
  };

  const handleEditRole = (roleData) => {
    // TODO: Implement API call
    console.log('Editing role:', roleData);
    setIsEditModalOpen(false);
  };

  const handleDeleteRole = (roleId) => {
    // TODO: Implement API call
    console.log('Deleting role:', roleId);
  };

  return (
    <div className="bg-white rounded-lg shadow">
      {/* Header */}
      <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">Roles</h2>
          <p className="text-sm text-gray-600">Manage system roles and their permissions</p>
        </div>
        <button
          onClick={() => setIsAddModalOpen(true)}
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          <PlusIcon className="w-5 h-5 mr-2" />
          Add Role
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Description
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Permissions
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Users
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {roles.map((role) => (
              <tr key={role.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{role.name}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{role.description}</div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex flex-wrap gap-1">
                    {role.permissions.map((permission, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full"
                      >
                        {permission}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{role.userCount} users</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button
                    onClick={() => {
                      setSelectedRole(role);
                      setIsEditModalOpen(true);
                    }}
                    className="text-indigo-600 hover:text-indigo-900 mr-4"
                  >
                    <PencilIcon className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => handleDeleteRole(role.id)}
                    className="text-red-600 hover:text-red-900"
                  >
                    <TrashIcon className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Role Modal */}
      <Dialog
        open={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        className="fixed inset-0 z-10 overflow-y-auto"
      >
        <div className="flex items-center justify-center min-h-screen">
          <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
          <div className="relative bg-white rounded-lg p-8 max-w-md w-full mx-4">
            <Dialog.Title className="text-lg font-medium mb-4">Add New Role</Dialog.Title>
            <RoleForm
              permissions={permissions}
              onSubmit={handleAddRole}
              onCancel={() => setIsAddModalOpen(false)}
            />
          </div>
        </div>
      </Dialog>

      {/* Edit Role Modal */}
      <Dialog
        open={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        className="fixed inset-0 z-10 overflow-y-auto"
      >
        <div className="flex items-center justify-center min-h-screen">
          <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
          <div className="relative bg-white rounded-lg p-8 max-w-md w-full mx-4">
            <Dialog.Title className="text-lg font-medium mb-4">Edit Role</Dialog.Title>
            <RoleForm
              role={selectedRole}
              permissions={permissions}
              onSubmit={handleEditRole}
              onCancel={() => setIsEditModalOpen(false)}
            />
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default Roles;
