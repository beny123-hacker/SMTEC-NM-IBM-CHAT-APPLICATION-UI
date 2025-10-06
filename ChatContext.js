import { createContext, useState } from 'react';

export const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);
  const [user, setUser] = useState(null);

  return (
    <ChatContext.Provider value={{ messages, setMessages, user, setUser }}>
      {children}
    </ChatContext.Provider>
  );
};