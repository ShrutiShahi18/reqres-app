import React from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../api';
import LoginForm from '../components/LoginForm';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = async (credentials) => {
    try {
      const { data } = await login(credentials);
      localStorage.setItem('token', data.token);
      navigate('/users');
    } catch (error) {
      alert('Login failed!');
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-blue-800">
      <LoginForm onSubmit={handleLogin} />
    </div>
  );
};

export default LoginPage;