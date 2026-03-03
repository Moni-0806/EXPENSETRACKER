import React, { createContext, useState } from "react";
export const UserContext = createContext();
const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  //function toupdate user adta
  const updateUser = (userData) => {
    setUser(userData);
  };
  //function to cllear user adta
  const clearUser = () => {
    setUser(null);
  };
  return (
    <UserContext.Provider
      value={{
        user,
        updateUser,
        clearUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export default UserProvider;
