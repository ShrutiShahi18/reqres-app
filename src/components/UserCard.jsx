import React from 'react';

const UserCard = ({ user, onEdit, onDelete }) => (
  <div className="bg-white/10 p-6 rounded-lg shadow-lg backdrop-blur-md">
    <img src={user.avatar} alt={user.first_name} className="w-16 h-16 rounded-full mx-auto mb-4" />
    <h3 className="text-white text-xl font-semibold text-center">
      {user.first_name} {user.last_name}
    </h3>
    <p className="text-gray-300 text-center mb-4">{user.email}</p>
    <div className="flex justify-between">
      <button onClick={() => onEdit(user)} className="bg-blue-500 p-2 rounded-lg text-white">Edit</button>
      <button onClick={() => onDelete(user.id)} className="bg-red-500 p-2 rounded-lg text-white">Delete</button>
    </div>
  </div>
);

export default UserCard;
