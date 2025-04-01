import React, { createContext, useState } from 'react';


const UserAuthContext = createContext();  


export const UserAuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleAuth = () => {
    setIsLoggedIn(prevState => !prevState);  
  };

  return (
    <UserAuthContext.Provider value={{ isLoggedIn, toggleAuth }}>
      {children}
    </UserAuthContext.Provider>
  );
};


export { UserAuthContext };  

export default UserAuthContext;  
