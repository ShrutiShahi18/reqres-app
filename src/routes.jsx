import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import UserListPage from './pages/UserListPage';
import EditUserPage from './pages/EditUserPage';

const AppRoutes = () => {
  const token = localStorage.getItem('token');

  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/users" element={token ? <UserListPage /> : <Navigate to="/login" />} />
      <Route path="/edit/:id" element={token ? <EditUserPage /> : <Navigate to="/login" />} />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};

export default AppRoutes;