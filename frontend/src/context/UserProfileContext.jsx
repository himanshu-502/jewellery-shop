import React, { createContext, useContext, useState } from 'react';

const UserProfileContext = createContext();

export const UserProfileProvider = ({ children }) => {
  const [userProfile, setUserProfile] = useState(null);

  return (
    <UserProfileContext.Provider value={{ userProfile, setUserProfile }}>
      {children}
    </UserProfileContext.Provider>
  );
};

export const useUserProfile = () => useContext(UserProfileContext);