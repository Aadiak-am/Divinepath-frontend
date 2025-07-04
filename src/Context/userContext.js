// src/context/UserContext.js
import { createContext, useState, useContext } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user_id, setUserId] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');

  const setUserData = (userData) => {
    setUserId(userData.user_id || '');
    setName(userData.name || '');
    setEmail(userData.email || '');
    setRole(userData.role || '');
  };

  return (
    <UserContext.Provider
      value={{
        user_id,
        name,
        email,
        role,
        setUserData,
        setUserId,
        setName,
        setEmail,
        setRole,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

// Custom hook for easy usage
export const useUser = () => useContext(UserContext);
