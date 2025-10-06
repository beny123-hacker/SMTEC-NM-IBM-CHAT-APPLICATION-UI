import React from 'react';

export default function Sidebar() {
  return (
    <div className="w-1/4 bg-white border-r p-4">
      <h2 className="text-xl font-bold mb-4">Chats</h2>
      <div className="space-y-2">
        <div className="p-2 bg-gray-100 rounded">User 1</div>
        <div className="p-2 bg-gray-100 rounded">User 2</div>
      </div>
    </div>
  );
}