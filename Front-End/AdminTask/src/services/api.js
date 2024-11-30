import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api', // Replace with your API URL
});

// Users
export const getUsers = () => api.get('/users');
export const createUser = (userData) => api.post('/users', userData);
export const updateUser = (id, userData) => api.put(`/users/${id}`, userData);
export const deleteUser = (id) => api.delete(`/users/${id}`);

// Roles
export const getRoles = () => api.get('/roles');
export const createRole = (roleData) => api.post('/roles', roleData);
export const updateRole = (id, roleData) => api.put(`/roles/${id}`, roleData);
export const deleteRole = (id) => api.delete(`/roles/${id}`);

// Permissions
export const getPermissions = () => api.get('/permissions');
export const createPermission = (permissionData) => api.post('/permissions', permissionData);
export const updatePermission = (id, permissionData) => api.put(`/permissions/${id}`, permissionData);
export const deletePermission = (id) => api.delete(`/permissions/${id}`);

export default api;
