import React, { useEffect, useState } from 'react';
import { fetchUsers, deleteUser } from '../api';
import UserCard from '../components/UserCard';
import { useNavigate } from 'react-router-dom';

const UserListPage = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    const loadUsers = async () => {
      const { data } = await fetchUsers(page);
      setUsers(data.data);
    };
    loadUsers();
  }, [page]);

  const handleDelete = async (id) => {
    await deleteUser(id);
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-800 p-8">
      <h1 className="text-4xl text-white text-center mb-8">User List</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {users.map((user) => (
          <UserCard key={user.id} user={user} onEdit={(u) => navigate(`/edit/${u.id}`)} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
};

export default UserListPage;
