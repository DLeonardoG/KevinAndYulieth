import React, { createContext, useState, useEffect, useContext } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem('weddingUser');
    return storedUser ? JSON.parse(storedUser) : null;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem('weddingUser', JSON.stringify(user));
    } else {
      localStorage.removeItem('weddingUser');
    }
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Hook personalizado para usar el contexto
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser debe usarse dentro de un UserProvider');
  }
  return context;
};