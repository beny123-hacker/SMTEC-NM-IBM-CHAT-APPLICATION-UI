import React, { useEffect, useContext } from 'react';
import { io } from 'socket.io-client';
import { ChatContext } from '../context/ChatContext';
import MessageInput from './MessageInput';

const socket = io('http://localhost:5000');

export default function ChatWindow() {
  const { messages, setMessages } = useContext(ChatContext);

  useEffect(() => {
    socket.on('receiveMessage', (msg) => {
      setMessages(prev => [...prev, msg]);
    });
    return () => socket.off('receiveMessage');
  }, [setMessages]);

  return (
    <div className="flex-1 flex flex-col">
      <div className="flex-1 overflow-y-auto p-4 space-y-2">
        {messages.map((m, i) => (
          <div key={i} className="p-2 bg-blue-100 rounded max-w-xs">
            <strong>{m.user}:</strong> {m.text}
          </div>
        ))}
      </div>
      <MessageInput socket={socket} />
    </div>
  );
}