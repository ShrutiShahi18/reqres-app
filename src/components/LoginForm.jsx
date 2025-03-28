import React, { useState } from 'react';

const LoginForm = ({ onSubmit }) => {
  const [email, setEmail] = useState('eve.holt@reqres.in');
  const [password, setPassword] = useState('cityslicka');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email, password });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white/10 p-8 rounded-2xl shadow-xl backdrop-blur-md max-w-sm mx-auto"
    >
      <h2 className="text-3xl font-bold text-center mb-6 text-white">Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-3 mb-4 rounded-lg bg-white/20 text-white focus:outline-none"
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-3 mb-4 rounded-lg bg-white/20 text-white focus:outline-none"
        required
      />
      <button
        type="submit"
        className="w-full p-3 bg-blue-500 hover:bg-blue-600 rounded-lg text-white font-semibold"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;