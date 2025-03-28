import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchUsers, updateUser } from '../api';

const EditUserPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({ first_name: '', last_name: '', email: '' });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const { data } = await fetchUsers();
        const currentUser = data.data.find((u) => u.id === parseInt(id));
        if (currentUser) {
          setUser(currentUser);
        }
      } catch (error) {
        alert('Failed to fetch user data');
      } finally {
        setLoading(false);
      }
    };
    loadUser();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateUser(id, user);
      alert('User updated successfully');
      navigate('/users');
    } catch (error) {
      alert('Failed to update user');
    }
  };

  if (loading) return <p className="text-white text-center">Loading user data...</p>;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-blue-800">
      <form onSubmit={handleSubmit} className="bg-white/10 p-8 rounded-2xl shadow-xl backdrop-blur-md max-w-lg w-full">
        <h2 className="text-3xl font-bold text-center mb-6 text-white">Edit User</h2>

        <label className="block text-white mb-2">First Name</label>
        <input
          type="text"
          name="first_name"
          value={user.first_name}
          onChange={handleChange}
          className="w-full p-3 mb-4 rounded-lg bg-white/20 text-white focus:outline-none"
          required
        />

        <label className="block text-white mb-2">Last Name</label>
        <input
          type="text"
          name="last_name"
          value={user.last_name}
          onChange={handleChange}
          className="w-full p-3 mb-4 rounded-lg bg-white/20 text-white focus:outline-none"
          required
        />

        <label className="block text-white mb-2">Email</label>
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          className="w-full p-3 mb-6 rounded-lg bg-white/20 text-white focus:outline-none"
          required
        />

        <button
          type="submit"
          className="w-full p-3 bg-blue-500 hover:bg-blue-600 rounded-lg text-white font-semibold"
        >
          Update User
        </button>

        <button
          type="button"
          onClick={() => navigate('/users')}
          className="w-full p-3 mt-4 bg-gray-500 hover:bg-gray-600 rounded-lg text-white font-semibold"
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default EditUserPage;
