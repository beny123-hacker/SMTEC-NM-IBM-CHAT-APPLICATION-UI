import React, { useState } from 'react';

export default function MessageInput({ socket }) {
  const [text, setText] = useState('');

  const sendMessage = () => {
    if (text.trim()) {
      socket.emit('sendMessage', { user: 'Me', text });
      setText('');
    }
  };

  return (
    <div className="p-3 bg-white flex">
      <input
        value={text}
        onChange={e => setText(e.target.value)}
        className="flex-1 border rounded p-2 mr-2"
        placeholder="Type a message..."
      />
      <button onClick={sendMessage} className="bg-blue-500 text-white px-4 py-2 rounded">
        Send
      </button>
    </div>
  );
}