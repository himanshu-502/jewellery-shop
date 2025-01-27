import React, { createContext, useContext, useState } from 'react';

// Create UserProfile context
const UserProfileContext = createContext();

// Custom hook to use UserProfileContext

// Provider component
export const UserProfileProvider = ({ children }) => {
    const [userProfile, setUserProfile] = useState(null);
    
    return (
        <UserProfileContext.Provider value={{ userProfile, setUserProfile }}>
      {children}
    </UserProfileContext.Provider>
  );
};

export const useUserProfile = () => useContext(UserProfileContext);